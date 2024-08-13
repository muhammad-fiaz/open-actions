
# DOM Manipulation Using Open Actions

`open-actions` provides a set of utilities to simplify and enhance DOM manipulation, similar to jQuery but with modern JavaScript practices. This guide covers how to use these utilities to interact with and modify elements on your web page.

## Importing

To get started with DOM manipulation using `open-actions`, first, ensure you have imported the necessary functions from the package:

```javascript
import { $, addClass, removeClass, setText, getText } from 'open-actions';
```

## Selecting Elements

The `$` function in `open-actions` is a convenient way to select elements in the DOM. It works similarly to `document.querySelector` or `document.querySelectorAll`, but returns an array-like object that can be used directly with other `open-actions` methods.

### Example

```javascript
const element = $('#myElement'); // Select a single element by ID
const elements = $('.myClass');  // Select multiple elements by class
```

### Parameters

- **selector**: A string representing the CSS selector used to find elements in the DOM.

### Returns

- **Element(s)**: A wrapped object that provides easy chaining of other `open-actions` methods.

## Adding and Removing Classes

Adding or removing classes from elements is a common task in DOM manipulation. `open-actions` simplifies this with `addClass` and `removeClass`.

### Example: Adding a Class

```javascript
addClass('#myElement', 'active'); // Adds the 'active' class to the element with ID 'myElement'
```

### Example: Removing a Class

```javascript
removeClass('.myClass', 'hidden'); // Removes the 'hidden' class from all elements with the class 'myClass'
```

### Parameters

- **selector**: A string representing the CSS selector used to find elements in the DOM.
- **className**: A string representing the class name to add or remove.

### Returns

- **Void**

## Setting and Getting Text Content

The `setText` and `getText` functions allow you to set or retrieve the text content of an element.

### Example: Setting Text Content

```javascript
setText('#myElement', 'Hello, World!'); // Sets the text content of the element with ID 'myElement' to 'Hello, World!'
```

### Example: Getting Text Content

```javascript
const text = getText('.myClass'); // Gets the text content of the first element with the class 'myClass'
console.log(text);
```

### Parameters for `setText`

- **selector**: A string representing the CSS selector used to find elements in the DOM.
- **text**: A string representing the text content to set.

### Parameters for `getText`

- **selector**: A string representing the CSS selector used to find an element in the DOM.

### Returns

- **String**: The text content of the element (for `getText`).

## Chaining Methods

One of the strengths of `open-actions` is the ability to chain methods together, making your code more readable and expressive.

### Example: Chaining

```javascript
$('#myElement')
    .addClass('visible')
    .setText('Updated Content')
    .removeClass('hidden');
```

In this example, the element with ID `myElement` has the `visible` class added, its text content set, and the `hidden` class removed, all in a single chain.

## Additional DOM Manipulation Methods

`open-actions` includes various other DOM manipulation utilities. Some of these include:

- **`setHTML`**: Set the inner HTML of an element.
- **`getHTML`**: Get the inner HTML of an element.
- **`toggleClass`**: Toggle a class on an element.
- **`hasClass`**: Check if an element has a specific class.

These methods follow the same pattern as those detailed above.

## Conclusion

With `open-actions`, DOM manipulation becomes straightforward and powerful. By leveraging modern JavaScript features and a simple API, you can achieve complex interactions with minimal code.

For more advanced usage and examples, refer to the full documentation.
