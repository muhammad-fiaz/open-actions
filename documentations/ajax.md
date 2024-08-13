# AJAX Using Open Actions

The `open-actions` package provides a simple yet powerful way to perform AJAX requests in JavaScript. This guide will walk you through how to use the AJAX functionality provided by `open-actions` to make asynchronous updates to your web application.

## Installation

Before using the AJAX functionality, ensure you have installed the `open-actions` package.

```bash
bun install open-actions
```

## Importing the AJAX Function

To use the AJAX functionality, you need to import the `ajax` function from the `open-actions` package. Here’s how you can do that:

```javascript
import { ajax } from 'open-actions';
```

## Basic Usage

The `ajax` function can be used to perform GET, POST, PUT, DELETE, and other types of HTTP requests. The function is designed to be flexible and easy to use with a variety of options.

### Performing a GET Request

A basic GET request to fetch data from a server can be made as follows:

```javascript
ajax({
    url: 'https://api.example.com/data',
    method: 'GET',
    success: (response) => {
        console.log('Data fetched successfully:', response);
    },
    error: (error) => {
        console.error('Error fetching data:', error);
    }
});
```

### Performing a POST Request

To send data to a server, you can use a POST request:

```javascript
ajax({
    url: 'https://api.example.com/data',
    method: 'POST',
    data: {
        name: 'John Doe',
        age: 30
    },
    success: (response) => {
        console.log('Data sent successfully:', response);
    },
    error: (error) => {
        console.error('Error sending data:', error);
    }
});
```

## Options and Parameters

The `ajax` function supports several options and parameters to customize the request:

- **url**: The URL to which the request is sent.
- **method**: The HTTP method to use (GET, POST, PUT, DELETE, etc.). Defaults to GET.
- **data**: Data to be sent to the server. This is optional and mainly used for POST and PUT requests.
- **headers**: An object containing additional headers to be sent along with the request.
- **success**: A callback function that is executed if the request succeeds. Receives the server's response as an argument.
- **error**: A callback function that is executed if the request fails. Receives the error as an argument.
- **async**: A boolean indicating whether the request should be asynchronous. Defaults to true.

### Example with Custom Headers

```javascript
ajax({
    url: 'https://api.example.com/data',
    method: 'GET',
    headers: {
        'Authorization': 'Bearer your-token-here',
        'Content-Type': 'application/json'
    },
    success: (response) => {
        console.log('Data fetched successfully with custom headers:', response);
    },
    error: (error) => {
        console.error('Error fetching data with custom headers:', error);
    }
});
```

### Handling Errors

It’s essential to handle errors gracefully in your application. The `error` callback allows you to do this:

```javascript
ajax({
    url: 'https://api.example.com/data',
    method: 'GET',
    success: (response) => {
        console.log('Data fetched successfully:', response);
    },
    error: (error) => {
        console.error('There was a problem with the request:', error);
        // Additional error handling logic here
    }
});
```

### Synchronous Requests

Although asynchronous requests are preferred, you can make synchronous requests by setting the `async` option to `false`:

```javascript
ajax({
    url: 'https://api.example.com/data',
    method: 'GET',
    async: false,
    success: (response) => {
        console.log('Synchronous request completed:', response);
    },
    error: (error) => {
        console.error('Error with synchronous request:', error);
    }
});
```

## Conclusion

The `open-actions` package simplifies AJAX requests by providing an easy-to-use API with robust options. Whether you're fetching data, sending data, or handling errors, `open-actions` provides the tools needed to perform asynchronous updates efficiently.

For more advanced usage and examples, refer to the [open-actions documentation](https://github.com/muhammad-fiaz/open-actions).

