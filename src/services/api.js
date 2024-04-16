/*----------  API Configuration  ----------*/
const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

/*----------  Core API Call Handler  ----------*/
async function makeRequest(url, options) {
  try {
    const response = await fetch(url, options);

    const contentType = response.headers.get('content-type');

    if (contentType && contentType.includes('application/json')) {
      return response.json();
    } else {
      return null;
    }
  } catch (error) {
    return new Error(error);
  }
}

/*----------  GET Request Function  ----------*/
async function get() {
  const url = API_URL + this.url;

  const headers = {
    accept: 'application/json'
  };

  if (this.token) {
    headers.Authorization = API_KEY;
  }

  const options = { method: 'GET', headers };

  /*----------  Use makeRequest to handle the GET request and return the JSON response  ----------*/
  return makeRequest(url, options);
}

/*----------  API Service Function  ----------*/
async function api({ type = 'GET', url, token = true }) {
  switch (type) {
    case 'GET':
      return await get.call({ token, url });

    default:
      throw new Error(`Unsupported request type: ${type}`);
  }
}

export { api };
