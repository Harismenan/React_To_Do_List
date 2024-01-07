const ApiRequest = async (url = "", optionsObj = null, errorMessage = null) => {
  try {
    const response = await fetch(url, optionsObj);
    if (!response.ok) {
      throw new Error("Please reload the page and try again.");
    }
  } catch (error) {
    errorMessage = error.message;
  } finally {
    return errorMessage;
  }
};

export default ApiRequest;
