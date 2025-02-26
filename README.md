# Open Actions

Open Actions is a Super Light Web Framework that provides a set of utilities to help you build web applications. It includes a collection of utility functions, custom hooks for state and effect management, a class to handle API calls, a class to handle routing, and functions to render components to the DOM.

## Installation

To install the Open Actions library, you can use the following command:

```sh
npm install open-actions
```

## Usage

You can import the necessary functionalities from the `open-actions` package as shown below:

```typescript
import { 
  renderComponent, 
  Api, 
  useState, 
  useEffect, 
  Router, 
  clone, 
  debounce, 
  generateId, 
  setInnerHTML, 
  setCSS, 
  addId, 
  updateValue 
} from "open-actions";

// Example usage
const api = new Api();
console.log(api.getData());

const router = new Router();
router.navigate();

const [state, setState] = useState(0);
useEffect(() => {
  console.log('State changed:', state);
}, [state]);

const component = () => '<div>Hello, World!</div>';
renderComponent(component, document.getElementById('app'));

setInnerHTML('#app', '<p>New content</p>');
setCSS('#app', { backgroundColor: 'blue', color: 'white' });

const uniqueId = generateId('prefix_');
console.log(uniqueId);

const clonedObject = clone({ key: 'value' });
console.log(clonedObject);
```

## Packages

### Utils

A collection of utility functions for various common tasks.

```typescript
import { 
  clone, 
  debounce, 
  generateId, 
  setInnerHTML, 
  setCSS, 
  addId, 
  updateValue 
} from 'open-actions';

// Example usage
const clonedObject = clone({ key: 'value' });
console.log(clonedObject);

const debouncedFunction = debounce(() => {
  console.log('Debounced call');
}, 500);
debouncedFunction();

const uniqueId = generateId('prefix_');
console.log(uniqueId);

setInnerHTML('#app', '<p>New content</p>');
setCSS('#app', { backgroundColor: 'blue', color: 'white' });

const newId = addId('#app', 'prefix_');
console.log(newId);

updateValue('#input', 'new value');
```

### Components

Functions to render components to the DOM.

```typescript
import { renderComponent } from 'open-actions';

const component = () => '<div>Hello, World!</div>';
renderComponent(component, document.getElementById('app'));
```

### API

A class to handle API calls.

```typescript
import { Api } from 'open-actions';

const api = new Api();
console.log(api.getData());
```

### DOM

Custom hooks for state and effect management.

```typescript
import { useState, useEffect } from 'open-actions';

const [state, setState] = useState(0);
useEffect(() => {
  console.log('State changed:', state);
}, [state]);
```

### Router

A class to handle routing.

```typescript
import { Router } from 'open-actions';

const router = new Router();
router.navigate();
```

## Development

To build the project, run the following command:

```sh
npm run build
```

## Contributing

Feel free to open issues or submit pull requests for any bugs or feature requests.

## License

This project is licensed under the MIT License.