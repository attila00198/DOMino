/**
 * DOMino Example Application
 * 
 * This demonstrates the core features:
 * - Element creation and chaining
 * - Event handling
 * - Form building
 * - DOM manipulation
 * - Routing
 */

// ===== Todo Application with Routing =====

const appState = {
    todos: [
        { id: 1, text: 'Learn DOMino', completed: true },
        { id: 2, text: 'Build a todo app', completed: false },
        { id: 3, text: 'Master chaining', completed: false }
    ],
    nextId: 4
};

// ===== Route Definitions =====

const routes = {
    home: renderHome,
    todos: renderTodos,
    about: renderAbout
};

// ===== Render Functions =====

function renderHome() {
    return div(
        header(
            nav(
                a('Home', '#home').setStyle({ marginRight: '10px' }),
                a('Todos', '#todos').setStyle({ marginRight: '10px' }),
                a('About', '#about')
            ).setStyle({
                display: 'flex',
                padding: '10px',
                backgroundColor: '#333',
                color: 'white'
            })
        ),
        main(
            h1('Welcome to DOMino').addClass('title'),
            p('A tiny, functional-style DOM builder for vanilla JavaScript.'),
            div(
                h2('Features:'),
                ul(
                    li('Chainable helper methods for easy DOM composition'),
                    li('Built-in form and table helpers'),
                    li('Simple hash-based routing'),
                    li('No dependencies - drop it in and go!'),
                    li('Compact and performant')
                )
            ),
            div(
                h2('Get Started:'),
                p('Try creating elements and compose them together:'),
                div(
                    btn('Try Todo App →').onClick(() => {
                        window.location.hash = '#todos';
                    }).setStyle({
                        padding: '10px 20px',
                        fontSize: '16px',
                        backgroundColor: '#1e40af',
                        color: '#e0e0e0',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    })
                ).setStyle({ marginTop: '20px' })
            )
        ).setStyle({
            padding: '20px',
            maxWidth: '800px',
            margin: '0 auto',
            color: '#e0e0e0'
        })
    );
}

function renderTodos() {
    return div(
        header(
            nav(
                a('Home', '#home').setStyle({ marginRight: '10px' }),
                a('Todos', '#todos').setStyle({ marginRight: '10px' }),
                a('About', '#about')
            ).setStyle({
                display: 'flex',
                padding: '10px',
                backgroundColor: '#1a1a1a',
                color: 'white'
            })
        ),
        main(
            h1('My Todos'),
            renderTodoForm(),
            renderTodoList()
        ).setStyle({
            padding: '20px',
            maxWidth: '600px',
            margin: '0 auto',
            color: '#e0e0e0'
        })
    );
}

function renderTodoForm() {
    return form(
        div(
            label('New Todo:').setStyle({ display: 'block', marginBottom: '5px' }),
            input('text')
                .setId('todoInput')
                .setPlaceholder('Enter a new todo...')
                .setStyle({
                    width: '100%',
                    padding: '8px',
                    fontSize: '14px',
                    boxSizing: 'border-box',
                    marginBottom: '10px'
                })
        )
    ).onSubmit(e => {
        e.preventDefault();
        const input = getById('todoInput');
        if (input.value.trim()) {
            appState.todos.push({
                id: appState.nextId++,
                text: input.value,
                completed: false
            });
            input.value = '';
            updateTodoView();
        }
    }).setStyle({
        marginBottom: '20px',
        padding: '15px',
        border: '1px solid #444',
        borderRadius: '4px',
        backgroundColor: '#2a2a2a'
    });
}

function renderTodoList() {
    const todoItems = appState.todos.map(todo => {
        // Create checkbox with checked property (not attribute)
        const checkbox = input('checkbox')
            .setStyle({ marginRight: '10px', cursor: 'pointer' })
            .onChange(e => {
                todo.completed = e.target.checked;
                updateTodoView();
            });
        checkbox.checked = todo.completed;

        return li(
            div(
                checkbox,
                span(todo.text).setStyle({
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    color: todo.completed ? '#888' : '#e0e0e0'
                }),
                btn('Remove')
                    .setStyle({
                        marginLeft: 'auto',
                        padding: '4px 8px',
                        fontSize: '12px',
                        backgroundColor: '#c62828',
                        color: '#e0e0e0',
                        border: 'none',
                        borderRadius: '3px',
                        cursor: 'pointer'
                    })
                    .onClick(() => {
                        appState.todos = appState.todos.filter(t => t.id !== todo.id);
                        updateTodoView();
                    })
            ).setStyle({
                display: 'flex',
                alignItems: 'center',
                padding: '10px',
                backgroundColor: '#2a2a2a',
                borderBottom: '1px solid #333'
            })
        );
    });

    return ul(...todoItems)
        .setStyle({
            listStyle: 'none',
            padding: '0',
            margin: '0',
            border: '1px solid #444',
            borderRadius: '4px',
            overflow: 'hidden'
        });
}

function renderAbout() {
    return div(
        header(
            nav(
                a('Home', '#home').setStyle({ marginRight: '10px' }),
                a('Todos', '#todos').setStyle({ marginRight: '10px' }),
                a('About', '#about')
            ).setStyle({
                display: 'flex',
                padding: '10px',
                backgroundColor: '#1a1a1a',
                color: 'white'
            })
        ),
        main(
            h1('About DOMino'),
            p('DOMino is a lightweight DOM builder library that makes creating and manipulating HTML elements simple and elegant.'),

            h2('Why DOMino?'),
            ul(
                li('No virtual DOM - just vanilla DOM manipulation'),
                li('Functional approach to building UIs'),
                li('Tiny bundle size - only a few KB'),
                li('Zero dependencies'),
                li('Works in any browser')
            ),

            h2('Key Features'),
            div(
                h3('1. Element Creation'),
                p('Create elements using simple function names:'),
                div(
                    p('div(), span(), p(), h1-h6(), etc.')
                ).setStyle({ backgroundColor: '#2a2a2a', color: '#e0e0e0', padding: '10px', margin: '10px 0', borderRadius: '4px', border: '1px solid #444' })
            ),

            div(
                h3('2. Chainable Methods'),
                p('Chain methods to configure elements:'),
                div(
                    p('element.setId().addClass().setStyle().on().onClick()')
                ).setStyle({ backgroundColor: '#2a2a2a', color: '#e0e0e0', padding: '10px', margin: '10px 0', borderRadius: '4px', border: '1px solid #444' })
            ),

            div(
                h3('3. Form Helpers'),
                p('Specialized functions for forms:'),
                div(
                    p('form(), input(), textarea(), select(), label()')
                ).setStyle({ backgroundColor: '#2a2a2a', color: '#e0e0e0', padding: '10px', margin: '10px 0', borderRadius: '4px', border: '1px solid #444' })
            ),

            div(
                h3('4. Event Handling'),
                p('Attach event listeners with ease:'),
                div(
                    p('element.on("event", handler) or element.onClick(handler)')
                ).setStyle({ backgroundColor: '#2a2a2a', color: '#e0e0e0', padding: '10px', margin: '10px 0', borderRadius: '4px', border: '1px solid #444' })
            ),

            footer(
                p('Made with ❤️ for vanilla DOM builders')
            ).setStyle({
                marginTop: '40px',
                paddingTop: '20px',
                borderTop: '1px solid #444',
                fontSize: '12px',
                color: '#888',
                textAlign: 'center'
            })
        ).setStyle({
            padding: '20px',
            maxWidth: '800px',
            margin: '0 auto',
            color: '#e0e0e0'
        })
    );
}

// ===== Helper Functions =====

function updateTodoView() {
    const rootElement = getById('root');
    replaceHTML(rootElement, renderTodos());
}

// ===== Initialize App =====

function initApp() {
    const rootElement = getById('root');

    const routes = {
        home: renderHome,
        todos: renderTodos,
        about: renderAbout
    };

    // Manual routing since basicRouter uses hash changes
    function renderRoute() {
        const path = window.location.hash.slice(1) || 'home';
        const routeFn = routes[path];

        replaceHTML(rootElement, routeFn ? routeFn() : renderHome());
    }

    // Listen for hash changes
    window.addEventListener('hashchange', renderRoute);

    // Initial render
    renderRoute();
}

// Start the app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}