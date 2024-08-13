# Event Handling Using Open Actions

`open-actions` simplifies event handling by providing a modern, easy-to-use API for adding, removing, and triggering events on DOM elements. This guide will walk you through how to use these functionalities effectively.

## Importing

To start handling events with `open-actions`, import the necessary functions:

```javascript
import { $, on, off, trigger } from 'open-actions';
```

## Adding Event Listeners

The `on` function is used to attach event listeners to DOM elements. It works similarly to `addEventListener` but with a more streamlined syntax.

### Example: Adding an Event Listener

```javascript
on('#myButton', 'click', () => {
    console.log('Button clicked!');
});
```

### Parameters

- **selector**: A string representing the CSS selector used to find elements in the DOM.
- **event**: A string representing the event type (e.g., 'click', 'mouseover').
- **handler**: A function to execute when the event occurs.

### Returns

- **Void**

### Explanation

In the example above, when the button with the ID `myButton` is clicked, the event handler function logs 'Button clicked!' to the console.

## Removing Event Listeners

The `off` function allows you to remove event listeners that were previously added with `on`.

### Example: Removing an Event Listener

```javascript
const handleClick = () => {
    console.log('Button clicked!');
};

on('#myButton', 'click', handleClick);
off('#myButton', 'click', handleClick); // Removes the click event listener
```

### Parameters

- **selector**: A string representing the CSS selector used to find elements in the DOM.
- **event**: A string representing the event type (e.g., 'click', 'mouseover').
- **handler**: The function that was used as the event handler.

### Returns

- **Void**

### Explanation

In this example, the click event listener is added and then removed, so the console message will not appear when the button is clicked after the listener is removed.

## Triggering Events

The `trigger` function can be used to manually trigger an event on a selected element.

### Example: Triggering an Event

```javascript
on('#myButton', 'click', () => {
    console.log('Button clicked!');
});

trigger('#myButton', 'click'); // Manually triggers the click event
```

### Parameters

- **selector**: A string representing the CSS selector used to find elements in the DOM.
- **event**: A string representing the event type to trigger (e.g., 'click', 'mouseover').

### Returns

- **Void**

### Explanation

In this example, the `click` event is manually triggered on the button with the ID `myButton`, causing the console message to appear as if the button had been clicked by a user.

## Delegated Event Handling

`open-actions` also supports event delegation, allowing you to handle events on child elements through a parent element.

### Example: Delegated Event Handling

```javascript
on('#parentDiv', 'click', 'button', (event) => {
    console.log(`Button clicked: ${event.target.innerText}`);
});
```

### Parameters (for Delegation)

- **selector**: A string representing the CSS selector used to find the parent element in the DOM.
- **event**: A string representing the event type (e.g., 'click', 'mouseover').
- **childSelector**: A string representing the child element selector to delegate the event to.
- **handler**: A function to execute when the event occurs.

### Returns

- **Void**

### Explanation

In this example, any button inside the `#parentDiv` will trigger the event handler when clicked. The event handler logs the text of the clicked button.

## Best Practices for Event Handling

- **Use Delegation When Appropriate**: Event delegation is efficient when handling events for multiple child elements.
- **Remove Unused Listeners**: Always use `off` to remove event listeners when they are no longer needed to prevent memory leaks.
- **Consider Performance**: Avoid adding too many listeners, especially on high-frequency events like `scroll` or `resize`.

## Conclusion

Event handling with `open-actions` is designed to be intuitive and powerful. By using the provided methods, you can efficiently manage events in your web applications, leading to cleaner and more maintainable code.

For additional features and more advanced use cases, refer to the full documentation.
