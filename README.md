# DOMino

DOMino is a tiny, functional-style DOM building library for the browser. It provides a small set of helper functions that create DOM elements and return chainable elements with convenient methods for attributes, event handlers, classes, styles and simple routing. Think React-like ergonomics but smaller, faster, and dependency-free.

**Key ideas:**
- **Functional builders:** call functions like `div()`, `p()`, `btn()` and compose nested structures fluently.
- **Chainable helpers:** configure elements with readable, chainable methods like `.setId()`, `.addClass()`, `.setStyle()`, `.onClick()`.
- **Zero dependencies:** drop the script in a page and go—works in any modern browser.
- **Tiny:** only ~9KB (formatted), about 3KB minified if you optimize it later.

## Features

- **Element creation:** `tag`, `div`, `span`, `p`, `h1–h6`, `header`, `main`, `footer`, `nav`, `em`, `mark`, `small`, etc.
- **Form helpers:** `form`, `input`, `textarea`, `select`, `option`, `label` with chainable control methods.
- **Lists & tables:** `ul`, `ol`, `li`, `table`, `thead`, `tbody`, `tr`, `td`, `th`, `caption`.
- **Styling & attributes:** `.setAttr()`, `.setId()`, `.addClass()`, `.removeClass()`, `.toggleClass()`, `.setStyle()` for inline CSS or object syntax.
- **Event handling:** `.on(event, handler)`, `.onClick(handler)` plus form-specific events like `.onSubmit()`, `.onChange()`, `.onInput()`.
- **Form control:** set values, placeholders, disabled state, required validation with `.setValue()`, `.setPlaceholder()`, `.setDisabled()`, `.setRequired()`.
- **DOM manipulation:** `clearHTML`, `replaceHTML`, `replaceText` for easy element updates.
- **Query helpers:** `getById`, `getByClass`, `getByTag` for quick DOM selection.
- **Simple routing:** `basicRouter` for hash-based page rendering.
- **Canvas helpers:** `canvas()` with `.draw()` for easy 2D drawing callbacks.

## Installation

Just include the script in your HTML file:

```html
<script src="/domino.js"></script>
<div id="app"></div>

<script>
  // All functions are available globally
  const card = div(
    h1('Welcome to DOMino'),
    p('Build UIs with vanilla JavaScript'),
    btn('Click me').onClick(() => alert('Clicked!'))
  );
  
  document.getElementById('app').appendChild(card);
</script>
```

That's it! No build step, no package manager, no complicated setup. Just vanilla JavaScript.

## Quick examples

### Simple element composition
```js
const card = div(
  h1('Hello, DOMino').setClass('title'),
  p('Tiny, composable DOM building.'),
  btn('Learn more').onClick(() => alert('clicked'))
)
  .setId('card')
  .setStyle({ padding: '20px', backgroundColor: '#f0f0f0' })
  .addClass('card-component');

document.body.appendChild(card);
```

### Form with validation
```js
const form = form(
  label('Email:').setTarget('email'),
  input('email')
    .setId('email')
    .setName('email')
    .setPlaceholder('Enter your email')
    .setRequired(),
  
  label('Message:').setTarget('message'),
  textarea()
    .setId('message')
    .setName('message')
    .setPlaceholder('Enter your message')
    .setRequired(true),
  
  btn('Send', 'submit')
)
  .onSubmit(e => {
    e.preventDefault();
    console.log('Form submitted');
  });

document.body.appendChild(form);
```

### Styling with objects
```js
const btn = btn('Click me')
  .setStyle({
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  })
  .onClick(() => console.log('Clicked'));
```

### Dynamic list rendering
```js
const items = ['Learn', 'Build', 'Ship'];

const list = ul(
  ...items.map(item => li(item))
);

document.body.appendChild(list);
```

### Hash-based routing
```js
const routes = {
  home: () => div(h1('Home'), p('Welcome home')),
  about: () => div(h1('About'), p('Learn about us')),
  contact: () => div(h1('Contact'), p('Get in touch'))
};

// Renders into #app based on URL hash (#home, #about, #contact)
basicRouter(routes, '#app', 'home');
```

## API Reference

### Element Factories
All standard HTML elements are available as functions:
```js
div(), span(), p()
h1(), h2(), h3(), h4(), h5(), h6()
header(), main(), footer(), nav()
a(), img(), btn()
form(), input(), textarea(), select(), option(), label()
ul(), ol(), li()
table(), thead(), tbody(), tr(), td(), th(), caption()
canvas()
// ...and more
```

### Chainable Methods (all elements)
- `setAttr(object)` — set multiple HTML attributes
- `setId(id)` — set element ID
- `addClass(name)` — add a CSS class
- `removeClass(name)` — remove a CSS class
- `toggleClass(name)` — toggle a CSS class
- `setStyle(css)` — set inline styles (string or object)
- `on(event, callback)` — attach event listener
- `onClick(callback)` — shortcut for click events

### Form Elements (inputs, selects, textareas)
- `setValue(value)` — set the input value
- `setName(name)` — set the name attribute
- `setPlaceholder(text)` — set placeholder text
- `setDisabled(disabled = true)` — disable/enable the input
- `setRequired(required = true)` — mark as required
- `onChange(callback)` — listen to change events
- `onInput(callback)` — listen to input events (text changes)

### Form Element
- `onSubmit(callback)` — listen to submit events
- `setMethod(method)` — set form method (GET/POST)
- `setAction(action)` — set form action
- `setEnctype(type)` — set encoding type
- `setAutocomplete(value)` — enable/disable autocomplete

### Utility Functions
- `clearHTML(element)` — empty element contents
- `replaceHTML(element, ...children)` — replace all children
- `replaceText(element, text)` — set text content
- `getById(id)` — get element by ID
- `getByClass(className)` — get elements by class
- `getByTag(tagName)` — get elements by tag name

### Routing
- `basicRouter(routes, container, defaultRoute)` — simple hash-based router
  - `routes` — object with route names as keys, render functions as values
  - `container` — DOM element or CSS selector where content renders
  - `defaultRoute` — route to show on initial load (default: 'home')

## Example Application

Check out the full **Todo App** example in the `example/` folder, which demonstrates:
- Dynamic element creation
- Form handling and validation
- Event listeners and state management
- DOM manipulation and updates
- Hash-based navigation

Run it locally:
```bash
# Open example/index.html in your browser
# Or use a local server: npx serve example/
```

## Performance & Size

## Performance & Size

- **No dependencies:** just vanilla JavaScript
- **Lightweight:** ~9KB source, easy to understand and modify
- **Fast:** direct DOM manipulation, no abstraction overhead
- **Efficient:** chainable methods reduce repetitive code

## Browser Support

Works in all modern browsers with ES6 support:
- Chrome/Edge: 2015+
- Firefox: 2015+
- Safari: 2015+
- All modern mobile browsers

## Contributing

We welcome contributions! Just:
1. Keep changes simple and focused
2. Test in the `example/` app
3. Update documentation if adding features
4. Keep the spirit of vanilla JavaScript and minimal code

## License

MIT License — see [LICENSE](LICENSE) file for details.

---

Made with ❤️ for developers who prefer explicit, composable, vanilla JavaScript code.

