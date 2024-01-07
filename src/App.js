import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import ApiRequest from "./ApiRequest";

const App = () => {
  const API_URL = "http://localhost:3500/items";

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [newItem, setNewItem] = useState("");
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await response.json();
        setItems(data);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(() => {
      fetchItems();
    }, 2000);

    // fetchItems();
  }, []);

  const setAndStoreItems = (items) => {
    setItems(items);
    // localStorage.setItem("items", JSON.stringify(items));
  };

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newItem = { id, checked: false, item };
    const newItems = [...items, newItem];
    setAndStoreItems(newItems);

    const optionsObj = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    };

    const result = await ApiRequest(API_URL, optionsObj);
    if (result) {
      setError(result);
    }
  };

  const handleChange = async (id) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndStoreItems(newItems);

    const item = newItems.find((item) => item.id === id);
    const optionsObj = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ checked: item.checked }),
    };

    const requestedUrl = `${API_URL}/${id}`;
    const result = await ApiRequest(requestedUrl, optionsObj);
    if (result) {
      setError(result);
    }
  };

  const handleDelete = async (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setAndStoreItems(newItems);

    const optionsObj = {
      method: "DELETE",
    };

    const requestedUrl = `${API_URL}/${id}`;
    const result = await ApiRequest(requestedUrl, optionsObj);
    if (result) {
      setError(result);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    console.log("Submitted");
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header title="To do list" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem searchItem={searchItem} setSearchItem={setSearchItem} />
      <main>
        {isLoading && <p style={{ color: "green" }}>Loading...</p>}
        {error && <p style={{ color: "red" }}>{`error : ${error}`}</p>}
        {!isLoading && !error && (
          <Content
            items={items.filter((item) =>
              item.item.toLowerCase().includes(searchItem.toLowerCase())
            )}
            handleChange={handleChange}
            handleDelete={handleDelete}
          />
        )}
      </main>
      <Footer length={items.length} />
    </div>
  );
};

export default App;
