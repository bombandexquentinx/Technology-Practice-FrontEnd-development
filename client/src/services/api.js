/**
 * API service for making HTTP requests
 * This is a sample implementation and won't affect existing code
 */

// Base API URL - replace with your actual API endpoint in a real implementation
const API_BASE_URL = 'https://api.example.com';

/**
 * Handles API responses and errors
 * @param {Response} response - Fetch API response object
 * @returns {Promise} - Resolved with response data or rejected with error
 */
const handleResponse = async (response) => {
  const data = await response.json();
  
  if (!response.ok) {
    const error = {
      status: response.status,
      statusText: response.statusText,
      message: data.message || 'An error occurred',
      data
    };
    throw error;
  }
  
  return data;
};

/**
 * Makes a GET request to the API
 * @param {string} endpoint - API endpoint to call
 * @param {Object} params - Query parameters
 * @returns {Promise} - Resolved with response data
 */
export const get = async (endpoint, params = {}) => {
  const url = new URL(`${API_BASE_URL}${endpoint}`);
  
  // Add query parameters
  Object.keys(params).forEach(key => {
    url.searchParams.append(key, params[key]);
  });
  
  const response = await fetch(url.toString(), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });
  
  return handleResponse(response);
};

/**
 * Makes a POST request to the API
 * @param {string} endpoint - API endpoint to call
 * @param {Object} data - Request body data
 * @returns {Promise} - Resolved with response data
 */
export const post = async (endpoint, data = {}) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  });
  
  return handleResponse(response);
};

/**
 * Makes a PUT request to the API
 * @param {string} endpoint - API endpoint to call
 * @param {Object} data - Request body data
 * @returns {Promise} - Resolved with response data
 */
export const put = async (endpoint, data = {}) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  });
  
  return handleResponse(response);
};

/**
 * Makes a DELETE request to the API
 * @param {string} endpoint - API endpoint to call
 * @returns {Promise} - Resolved with response data
 */
export const del = async (endpoint) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });
  
  return handleResponse(response);
};
