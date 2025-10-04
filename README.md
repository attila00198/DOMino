# DOMino

DOMino is a tiny, functional-style DOM building framework for the browser. It provides a small set of helper functions that create DOM elements and return chainable elements with convenient methods for attributes, event handlers, classes, styles and simple routing. Think React-like ergonomics but much smaller and dependency-free.

Key ideas:
- Functional builders: call functions like `div()`, `p()`, `btn()` and compose nested structures.
- Chainable helpers: set attributes, classes, event listeners and styles with small chainable methods.
- Small and dependency-free: drop the library in a page with a script tag and use `window.domino`.

## Features

- Create elements: `tag`, `div`, `span`, `p`, `h1..h6`, `img`, `a`, etc.
- Form helpers: `form`, `input`, `textarea`, `select`, `option`, `label` with useful chainable setters.
- List & table helpers: `ul`, `ol`, `li`, `table`, `thead`, `tbody`, `tr`, `td`, `th`, `caption`.
- Chainable convenience methods: `.setAttr()`, `.setId()`, `.setClass()`, `.toggleClass()`, `.setCss()`, `.on()`, `.onClick()`, `.isDisabled()` and more.
- Small router: `basicRouter` — render functions into a container based on URL hash.
- Utility helpers: `clearHTML`, `replaceHTML`, `replaceText`, `getById`, `getByClass`, `getByTag`.

## Installation

Just include the script in a browser page. The library attaches a `domino` object to `window`.

Example (simple):

```html
<!-- if domino.js is in your project root -->
<script src="/domino.js"></script>
<div id="app"></div>
<script>
	const { div, h1, p, btn, basicRouter } = window.domino;

	// render a simple app
	document.getElementById('app').appendChild(
		div(
			h1('Welcome to DOMino').setClass('title'),
			p('A tiny functional DOM builder')
		).setId('root')
	);
  
</script>
```

If you're serving files from the `example/` folder in this repository, point the script tag to `static/js/domino.js` or to the top-level `domino.js` depending on your setup.

## Quick usage

Creating elements and chaining helpers:

```js
const el = domino.div(
	domino.h1('Hello, DOMino').setClass('hero'),
	domino.p('Small, composable DOM building.'),
	domino.btn('Click me').onClick(() => alert('clicked')).setCss({ padding: '8px' })
).setAttr({ id: 'main' })

document.body.appendChild(el)
```

Form helpers and events:

```js
const myForm = domino.form(
	domino.label('Name').setTarget('name'),
	domino.input('text').setName('name').setPlaceholder('Your name'),
	domino.btn('Submit', 'submit')
).onSubmit(e => { e.preventDefault(); console.log('submit'); })

document.body.appendChild(myForm)
```

Router example using `basicRouter`:

```js
const routes = {
	home: () => domino.div(domino.h1('Home'), domino.p('Home page content')),
	about: () => domino.div(domino.h1('About'), domino.p('About page content'))
}

// mounts into an element matched by selector or DOM element
domino.basicRouter(routes, '#app', 'home')
```

## API (high level)

The library exposes a `domino` object on `window` with the following (not exhaustive) helpers:

- tag, div, span, p, h1..h6
- btn, a, img
- form, input, textarea, select, option, label
- ul, ol, li
- table, thead, tbody, tr, td, th, caption
- clearHTML, replaceHTML, replaceText
- getById, getByClass, getByTag
- basicRouter

Each element returned from the builders includes chainable methods such as:

- setAttr(object) — set multiple attributes
- setId(id), setClass(name), toggleClass(name)
- setCss(stringOrObject)
- on(event, handler), onClick(handler)
- isDisabled(), isRequired(), setValue(), setPlaceholder(), and many form-specific setters on inputs and form nodes

Refer to the source `domino.js` for the full list and exact method names.

## Contributing

Contributions, bug reports and pull requests are welcome. Keep changes small and focused. Add examples to `example/` when adding new features.

## License

This project is licensed under the MIT License — see the accompanying `LICENSE` file for details.

---

Created with ❤️ — a tiny utility to make DOM composition simpler and explicit.

