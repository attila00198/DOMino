# DOMino Quick Start Guide

Get up and running with DOMino in 5 minutes!

## Installation

### Option 1: Browser Script Tag (Easiest)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DOMino App</title>
</head>
<body>
    <div id="app"></div>
    
    <script src="https://cdn.example.com/domino.min.js"></script>
    <script src="app.js"></script>
</body>
</html>
```

### Option 2: ES Module Import
```js
import { div, h1, p, btn, form, input } from './domino.js'
```

## Your First DOMino App

### 1. Hello World
```js
const greeting = div(
    h1('Hello, World!'),
    p('Welcome to DOMino')
);

document.body.appendChild(greeting);
```

### 2. Add Some Style
```js
const card = div(
    h1('My Card').addClass('title'),
    p('This is a nice card'),
    btn('Click me')
)
    .setId('main-card')
    .setStyle({
        padding: '20px',
        backgroundColor: '#f0f0f0',
        borderRadius: '8px',
        fontFamily: 'sans-serif'
    })
    .addClass('card');

document.body.appendChild(card);
```

### 3. Add Interactivity
```js
const counter = div(
    h2('Counter: 0').setId('count'),
    btn('Increment').onClick(() => {
        const countEl = document.getElementById('count');
        const current = parseInt(countEl.textContent.split(': ')[1]);
        countEl.textContent = `Counter: ${current + 1}`;
    })
);

document.body.appendChild(counter);
```

### 4. Build a Form
```js
const form = form(
    div(
        label('Name:').setStyle({ display: 'block', marginBottom: '5px' }),
        input('text')
            .setName('name')
            .setPlaceholder('Enter your name')
            .setRequired()
    ).setStyle({ marginBottom: '15px' }),
    
    div(
        label('Email:').setStyle({ display: 'block', marginBottom: '5px' }),
        input('email')
            .setName('email')
            .setPlaceholder('Enter your email')
            .setRequired()
    ).setStyle({ marginBottom: '15px' }),
    
    btn('Submit', 'submit')
)
    .onSubmit(e => {
        e.preventDefault();
        console.log('Form submitted!');
    });

document.body.appendChild(form);
```

### 5. Create a List
```js
const items = ['Learn', 'Build', 'Ship', 'Repeat'];

const list = ul(
    ...items.map(item => 
        li(item).setStyle({ padding: '8px', borderBottom: '1px solid #eee' })
    )
).setStyle({
    listStyle: 'none',
    padding: '0',
    margin: '0'
});

document.body.appendChild(list);
```

### 6. Routing
```js
const routes = {
    home: () => div(
        h1('Home'),
        p('Welcome! Click links above to navigate.')
    ),
    about: () => div(
        h1('About'),
        p('Learn more about our app.')
    ),
    contact: () => div(
        h1('Contact'),
        form(
            input('text').setPlaceholder('Your email')
        )
    )
};

// Navigate with URL hash: example.com#about
basicRouter(routes, '#app', 'home');
```

## Key Methods Reference

### Element Setup
```js
div()                           // Create element
.setId('my-id')                // Set ID
.addClass('my-class')          // Add CSS class
.removeClass('my-class')       // Remove CSS class
.toggleClass('active')         // Toggle CSS class
.setAttr({ 'data-val': '5' })  // Set multiple attributes
.setStyle({ color: 'red' })    // Set inline styles (object or string)
```

### Events
```js
.on('click', () => { ... })           // Attach any event
.onClick(() => { ... })               // Click shortcut
.onChange(() => { ... })              // Form element change
.onInput(() => { ... })               // Form element input
.onSubmit(() => { ... })              // Form submit
```

### Form Elements
```js
input('text')
    .setName('username')
    .setPlaceholder('Enter username')
    .setRequired()
    .setValue('initial value')
    .setDisabled(false)

textarea()
    .setName('message')
    .setPlaceholder('Your message')
    .setRequired(true)

select(
    option('Option 1', 'val1'),
    option('Option 2', 'val2')
).setValue('val1')
```

### Chaining
Every method returns the element, so you can chain:
```js
btn('Click me')
    .setStyle({ padding: '10px' })
    .onClick(() => alert('Clicked!'))
    .addClass('primary')
    .setId('my-btn');
```

## Common Patterns

### Conditional Rendering
```js
const isLoggedIn = true;

const app = div(
    h1('App'),
    isLoggedIn ? 
        btn('Logout').onClick(() => alert('Logged out')) :
        btn('Login').onClick(() => alert('Logging in'))
);
```

### Dynamic Lists
```js
const todos = ['Buy milk', 'Code', 'Sleep'];

const todoList = ul(
    ...todos.map((todo, index) => 
        li(todo).onClick(() => console.log(`Clicked: ${index}`))
    )
);
```

### Updating Content
```js
const greeting = div(
    h1('Hello').setId('greeting')
);

document.body.appendChild(greeting);

// Later, update it:
document.getElementById('greeting').innerText = 'Hello, again!';
```

### Form Submission
```js
const myForm = form(
    input('email').setId('email-input'),
    btn('Submit', 'submit')
).onSubmit(e => {
    e.preventDefault();
    const email = document.getElementById('email-input').value;
    console.log('Email:', email);
});

document.body.appendChild(myForm);
```

## Tips & Tricks

1. **Spread operator for lists:**
   ```js
   const items = ['a', 'b', 'c'];
   ul(...items.map(i => li(i)))
   ```

2. **Store references for updates:**
   ```js
   const title = h1('Count: 0').setId('title');
   // Later: update the element
   title.textContent = 'Count: 5';
   ```

3. **Combine styles with classes:**
   ```js
   btn('Click').addClass('btn').addClassmary').setStyle({ fontSize: '16px' })
   ```

4. **Use template literals for complex content:**
   ```js
   p(`You have ${count} messages`)
   ```

5. **Separate concerns:**
   ```js
   // Instead of one big function, break it into smaller ones
   const renderHeader = () => header(...)
   const renderContent = () => main(...)
   const renderFooter = () => footer(...)
   
   const app = div(
       renderHeader(),
       renderContent(),
       renderFooter()
   );
   ```

## See Also

- [Full README](README.md) - Complete API reference
- [Example Application](example/) - Full todo app demo
- [Contributing Guide](CONTRIBUTING.md) - How to contribute

---

Start building! 🚀
