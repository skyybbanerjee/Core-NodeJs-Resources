#### *Core-NodeJs Notes 📝 - Soumadip Banerjee*
* **@skyybbanerjee** on GitHub & Instagram 👨🏻‍💻


# What are MODULES in Nodejs? 🟢🗃️
In **Node.js**, **modules** are reusable pieces of code that can be **imported** or **exported** across files and projects. They allow us to organize our code into smaller, manageable chunks that can interact with one another seamlessly.  

Node.js uses the **CommonJS** module system by default, though ES6 Modules (ECMAScript modules) are also supported.

---

## **Why Do We Need Modules?**
1. **Code Organization**: Break a large program into smaller, reusable files.
2. **Reusability**: Write once, use multiple times.
3. **Maintainability**: Each module handles a specific task, making debugging easier.
4. **Scoping**: Variables, functions, or classes in a module are not globally accessible.

---

## **Types of Modules in Node.js**

Node.js provides three types of modules:

1. **Core Modules** (Built-in modules)  
2. **Local Modules** (User-defined modules)  
3. **Third-party Modules** (Downloaded via npm)

---

### **1. Core Modules**
Node.js has many built-in modules that provide essential functionalities. These modules are available without installing anything extra.

- To use a core module, we require it using `require()`.

#### **Examples of Core Modules**  
| **Module**   | **Purpose**                                  |
|--------------|---------------------------------------------|
| `fs`        | File system operations                      |
| `http`      | Creating HTTP servers                       |
| `path`      | File and directory paths                    |
| `os`        | Operating system information                |
| `events`    | Working with event-driven architecture      |
| `util`      | Utilities for debugging and development     |

#### **Using a Core Module Example**

```javascript
const fs = require('fs');

// Write to a file using the 'fs' module
fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
    if (err) throw err;
    console.log('File created successfully!');
});
```

---

### **2. Local Modules**  
These are **user-defined modules** that we create ourselves within a project. Local modules can contain functions, classes, objects, or variables that we can export and reuse.

#### **Steps to Create and Use Local Modules**

1. **Exporting a Module**  
   Create a file `math.js` with the following code:

   ```javascript
   const add = (a, b) => a + b;
   const subtract = (a, b) => a - b;

   module.exports = { add, subtract }; // Export the functions
   ```

2. **Importing a Module**  
   In another file `app.js`, we can import and use the module:

   ```javascript
   const math = require('./math'); // './' indicates a local file

   console.log(math.add(5, 3));       // Outputs: 8
   console.log(math.subtract(5, 3));  // Outputs: 2
   ```

---

### **3. Third-Party Modules**
Third-party modules are external libraries that we can install using **npm** (Node Package Manager). They provide additional functionalities and are widely used in Node.js projects.

#### **Example of Third-Party Modules**
| **Module**       | **Purpose**                            |
|-------------------|---------------------------------------|
| `express`        | Web framework for Node.js             |
| `mongoose`       | MongoDB object modeling tool          |
| `lodash`         | Utility library for working with data |
| `dotenv`         | Manage environment variables          |

#### **Installing and Using a Third-Party Module**
1. Install a module using npm:  
   ```bash
   npm install express
   ```

2. Use the module in code:  
   ```javascript
   const express = require('express');
   const app = express();

   app.get('/', (req, res) => {
       res.send('Hello, World!');
   });

   app.listen(3000, () => {
       console.log('Server running on http://localhost:3000');
   });
   ```

---

## **Module Import and Export Syntax**

### **CommonJS Module System (Default)**
- Use `require()` to import modules.  
- Use `module.exports` to export functionalities.

**Example:**
```javascript
// Exporting
module.exports = { greet };

// Importing
const myModule = require('./myModule');
```

---

### **ES6 Modules** (Modern Syntax)
- Use `import` and `export` keywords.

1. **Export**:
   ```javascript
   export const greet = () => {
       console.log('Hello, ES6 Modules!');
   };
   ```

2. **Import**:
   ```javascript
   import { greet } from './myModule.js';

   greet();
   ```

3. Enable ES6 Modules:  
   Add `"type": "module"` in `package.json`.

---

## **Summary**

- **Modules** in Node.js allow us to split code into reusable files.  
- **Core Modules**: Built-in modules like `fs`, `http`, and `path`.  
- **Local Modules**: Custom modules created for specific tasks.  
- **Third-Party Modules**: Modules installed via `npm` for additional functionality.  

Using modules helps us organize, reuse, and maintain our code efficiently. 🚀

# CommonJs in Node? 🟢🔤
**CommonJS** is the **module system** that Node.js uses by default to handle modularity in applications. It allows us to **import** and **export** code (functions, objects, variables, etc.) from one file to another, enabling modular programming and code reusability.

CommonJS was designed to make JavaScript work outside the browser, primarily in **server-side environments** like Node.js.

---

## **Why CommonJS?**

In the early days of JavaScript, there was no built-in way to organize code into smaller, reusable pieces (modules). The **CommonJS** standard was introduced to solve this problem, providing a clear structure for:

- **Exporting** functionality from one file.
- **Importing** functionality into another file.

Node.js adopted the **CommonJS** module system as its default because it was widely accepted and easy to use.

---

## **Key Features of CommonJS**

1. **Synchronous Loading**  
   CommonJS modules are loaded **synchronously**. This is ideal for server-side applications where files are typically loaded before execution.

2. **`require()` for Importing Modules**  
   The `require()` function is used to import modules.

3. **`module.exports` and `exports` for Exporting**  
   The `module.exports` object is used to **export** functionalities from a module.

4. **Single Module Scope**  
   Each file is treated as a separate **module**, and variables or functions defined in a module are **not global**.

---

## **How CommonJS Works**

### **1. Exporting Code**

We use `module.exports` or `exports` to **export** functionalities from a module.

#### **Using `module.exports`**
```javascript
// math.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

// Exporting the functions
module.exports = { add, subtract };
```

#### **Using `exports`**
```javascript
// math.js
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;
```

Both approaches work, but `module.exports` gives more flexibility when exporting a single object or value.

---

### **2. Importing Code**

To **import** a module, we use the `require()` function.

```javascript
// app.js
const math = require('./math');

console.log(math.add(5, 3));       // Outputs: 8
console.log(math.subtract(5, 3));  // Outputs: 2
```

---

## **Example: Local Module**

Imagine we have two files:

### **math.js (Module File)**
```javascript
// Exporting functions
module.exports = {
  add: (a, b) => a + b,
  multiply: (a, b) => a * b
};
```

### **app.js (Main File)**
```javascript
// Importing the math module
const math = require('./math');

console.log(math.add(2, 3));       // Outputs: 5
console.log(math.multiply(2, 3));  // Outputs: 6
```

---

## **Difference Between `module.exports` and `exports`**

1. **`module.exports`**:  
   - It exports a **single value** (object, function, class, etc.).
   - It is the actual object that is returned when the module is `require()`d.

   Example:
   ```javascript
   module.exports = { greet: () => console.log("Hello") };
   ```

2. **`exports`**:  
   - It is a **reference** to `module.exports`.
   - We can add properties to `exports`, but we cannot reassign `exports` directly.

   Example:
   ```javascript
   exports.greet = () => console.log("Hello");
   ```

---

## **CommonJS vs ES6 Modules**

| **Feature**               | **CommonJS**                        | **ES6 Modules**                  |
|---------------------------|-------------------------------------|---------------------------------|
| **Syntax**                | `require()` / `module.exports`      | `import` / `export`             |
| **Execution**             | Synchronous                        | Asynchronous                    |
| **Default in Node.js**    | Yes                                | Needs `"type": "module"` config |
| **Flexibility**           | Allows dynamic imports             | Static imports only             |

---

## **When to Use CommonJS**

- When working on a **Node.js** project where ES6 modules are not enabled.
- For projects that require compatibility with older versions of Node.js.
- When working with libraries or tools that depend on CommonJS.

---

## **Summary**

- **CommonJS** is the default module system in Node.js.
- It uses `require()` to **import** modules and `module.exports` (or `exports`) to **export** functionalities.
- It loads modules **synchronously**, which works well for server-side environments.
- Each file in Node.js is treated as a **module** with its own scope, preventing global pollution.  

CommonJS is a simple and effective way to modularize code, and it remains widely used in Node.js projects. 🚀

# Events and Event Emitters in NodeJs? 🟢✨
### **Events and Event Emitters in Node.js**

In Node.js, events and event-driven programming are core concepts that allow the application to respond to specific triggers or occurrences. Node.js provides the **`EventEmitter`** class, which allows us to create, manage, and listen for events.

The **EventEmitter** class is part of the `events` module, and it is widely used in Node.js for asynchronous operations, managing callbacks, and communication between objects.

---

### **Key Concepts**

1. **Events**: An "event" is a signal that something has happened, such as a user clicking a button, a file finishing reading, or a server receiving a request.

2. **EventEmitter**: It is a built-in class in Node.js that allows you to:
   - **Emit (trigger)** custom events.
   - **Listen** for events and execute callback functions when they occur.

3. **Event-Driven Programming**: In this programming style:
   - The application reacts to events.
   - Instead of continuously checking if a condition is met, the program "listens" for specific events and responds to them.

---

## **EventEmitter Basics**

The **`EventEmitter`** class is part of the `events` module. To use it:

1. Import the `events` module.
2. Create an instance of `EventEmitter`.
3. Use `.on()` or `.addListener()` to listen for events.
4. Use `.emit()` to trigger events.

---

## **Syntax and Methods**

Here are the key methods of the `EventEmitter` class:

| Method                   | Description                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| `on(eventName, listener)`  | Registers a listener for the specified event.                              |
| `emit(eventName, args)`    | Emits an event, triggering all listeners attached to that event.           |
| `once(eventName, listener)`| Registers a listener that will be called **only once** for that event.     |
| `removeListener(eventName, listener)` | Removes a specific listener for the given event.                 |
| `removeAllListeners(eventName)` | Removes all listeners for a specific event.                           |
| `listenerCount(eventName)` | Returns the number of listeners for the given event.                      |

---

## **Example: Basic Usage of EventEmitter**

Here’s a basic demonstration:

```javascript
// Step 1: Import the 'events' module
const EventEmitter = require('events');

// Step 2: Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Step 3: Register an event listener
eventEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Step 4: Emit (trigger) the event
eventEmitter.emit('greet', 'Alice'); // Output: Hello, Alice!
eventEmitter.emit('greet', 'Bob');   // Output: Hello, Bob!
```

### **Explanation:**
1. **`eventEmitter.on()`**: Adds a listener for the `greet` event.
2. **`eventEmitter.emit()`**: Triggers the `greet` event and passes `Alice` and `Bob` as arguments.

---

## **Example: Using `once()`**

The `once()` method ensures that a listener is executed only the first time the event is emitted.

```javascript
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Register a listener that executes only once
eventEmitter.once('sayHello', (name) => {
  console.log(`Hello ${name}, this will run only once.`);
});

// Emit the event twice
eventEmitter.emit('sayHello', 'Alice'); // Output: Hello Alice, this will run only once.
eventEmitter.emit('sayHello', 'Bob');   // No output
```

---

## **Example: Removing Event Listeners**

You can remove specific event listeners using `removeListener()` or `removeAllListeners()`.

```javascript
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

function sayHi(name) {
  console.log(`Hi, ${name}!`);
}

// Add the listener
eventEmitter.on('greet', sayHi);

// Trigger the event
eventEmitter.emit('greet', 'Alice'); // Output: Hi, Alice!

// Remove the listener
eventEmitter.removeListener('greet', sayHi);

// Try emitting the event again
eventEmitter.emit('greet', 'Bob'); // No output
```

---

## **EventEmitter in Real-World Scenarios**

### 1. **File System Events**
The `fs` module uses the EventEmitter to emit events like file changes.

```javascript
const fs = require('fs');

fs.watch('example.txt', (eventType, filename) => {
  console.log(`File ${filename} was ${eventType}`);
});
```

---

### 2. **HTTP Server Events**
The `http` module uses EventEmitter to handle server events such as `request` or `close`.

```javascript
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.end('Hello, World!');
});

// Add an event listener for 'request' events
server.on('request', (req) => {
  console.log(`Request received for: ${req.url}`);
});

// Start the server
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

---

## **Best Practices with Event Emitters**

1. **Avoid Memory Leaks**:
   - Remove event listeners when they are no longer needed.
   - Use `setMaxListeners()` if you plan to add more than 10 listeners for an event.

2. **Use Descriptive Event Names**:
   - Choose event names that clearly describe the behavior (e.g., `dataReceived`, `userLoggedIn`).

3. **Error Handling**:
   - Always handle errors properly when working with event-driven code.

   Example:
   ```javascript
   eventEmitter.on('error', (err) => {
     console.error('An error occurred:', err.message);
   });

   eventEmitter.emit('error', new Error('Something went wrong!'));
   ```

---

## **Summary**

1. **Events** in Node.js allow communication and coordination between different parts of an application.
2. The **EventEmitter** class is the core mechanism for creating and handling events.
3. Methods like `on()`, `emit()`, `once()`, and `removeListener()` provide control over event flow.

Using the EventEmitter pattern is a powerful way to manage asynchronous code and build scalable Node.js applications. 🚀

# FILE SYSTEM (fs) module in NodeJs 🟢📂
The **File System (fs) module** in Node.js is one of the core modules that allows us to work with the **file system on the server**. It provides various methods for interacting with files and directories, including creating, reading, writing, deleting, and renaming files. The `fs` module is essential for tasks like handling data storage, logging, configuration, and file-based communication in Node.js applications.

---

## **Key Features of the `fs` Module**
1. **Read and Write Operations**: Read from and write to files.
2. **File Management**: Create, rename, delete files and directories.
3. **Synchronous and Asynchronous Methods**: Most operations have both:
   - **Synchronous (Blocking)**: The code execution halts until the operation completes.
   - **Asynchronous (Non-blocking)**: The operation runs in the background, and a callback is invoked once it's complete.

---

## **How to Use the `fs` Module**

To use the `fs` module, we need to **require** it in the script:
```javascript
const fs = require('fs');
```

---

## **Basic Methods and Examples**

### **1. Reading Files**
- **Asynchronous Method**: `fs.readFile(path, options, callback)`  
   Reads the contents of a file asynchronously.

   ```javascript
   const fs = require('fs');

   fs.readFile('example.txt', 'utf8', (err, data) => {
       if (err) {
           console.error('Error reading file:', err);
           return;
       }
       console.log('File content:', data);
   });
   ```

- **Synchronous Method**: `fs.readFileSync(path, options)`  
   Reads the contents of a file synchronously.

   ```javascript
   const fs = require('fs');

   try {
       const data = fs.readFileSync('example.txt', 'utf8');
       console.log('File content:', data);
   } catch (err) {
       console.error('Error reading file:', err);
   }
   ```

---

### **2. Writing Files**
- **Asynchronous Method**: `fs.writeFile(path, data, options, callback)`  
   Writes data to a file, replacing the file if it already exists.

   ```javascript
   const fs = require('fs');

   fs.writeFile('output.txt', 'Hello, Node.js!', (err) => {
       if (err) {
           console.error('Error writing to file:', err);
           return;
       }
       console.log('File written successfully!');
   });
   ```

- **Synchronous Method**: `fs.writeFileSync(path, data, options)`  
   Writes data to a file synchronously.

   ```javascript
   const fs = require('fs');

   try {
       fs.writeFileSync('output.txt', 'Hello, Node.js!');
       console.log('File written successfully!');
   } catch (err) {
       console.error('Error writing to file:', err);
   }
   ```

---

### **3. Appending Data**
- **Asynchronous Method**: `fs.appendFile(path, data, options, callback)`  
   Appends data to a file. If the file doesn't exist, it is created.

   ```javascript
   const fs = require('fs');

   fs.appendFile('output.txt', '\nAppended text.', (err) => {
       if (err) {
           console.error('Error appending to file:', err);
           return;
       }
       console.log('Data appended successfully!');
   });
   ```

- **Synchronous Method**: `fs.appendFileSync(path, data, options)`  
   Appends data synchronously.

---

### **4. Deleting Files**
- **Asynchronous Method**: `fs.unlink(path, callback)`  
   Deletes a file.

   ```javascript
   const fs = require('fs');

   fs.unlink('output.txt', (err) => {
       if (err) {
           console.error('Error deleting file:', err);
           return;
       }
       console.log('File deleted successfully!');
   });
   ```

- **Synchronous Method**: `fs.unlinkSync(path)`  
   Deletes a file synchronously.

---

### **5. Checking File/Directory Existence**
- **Method**: `fs.existsSync(path)`  
   Checks if a file or directory exists.

   ```javascript
   const fs = require('fs');

   if (fs.existsSync('example.txt')) {
       console.log('File exists.');
   } else {
       console.log('File does not exist.');
   }
   ```

---

### **6. Creating Directories**
- **Asynchronous Method**: `fs.mkdir(path, options, callback)`  
   Creates a new directory.

   ```javascript
   const fs = require('fs');

   fs.mkdir('new_folder', (err) => {
       if (err) {
           console.error('Error creating directory:', err);
           return;
       }
       console.log('Directory created successfully!');
   });
   ```

- **Synchronous Method**: `fs.mkdirSync(path, options)`  
   Creates a new directory synchronously.

---

### **7. Reading Directories**
- **Asynchronous Method**: `fs.readdir(path, options, callback)`  
   Reads the contents of a directory.

   ```javascript
   const fs = require('fs');

   fs.readdir('.', (err, files) => {
       if (err) {
           console.error('Error reading directory:', err);
           return;
       }
       console.log('Directory contents:', files);
   });
   ```

- **Synchronous Method**: `fs.readdirSync(path, options)`  
   Reads the contents of a directory synchronously.

---

### **8. Renaming Files or Directories**
- **Asynchronous Method**: `fs.rename(oldPath, newPath, callback)`  
   Renames or moves a file/directory.

   ```javascript
   const fs = require('fs');

   fs.rename('old.txt', 'new.txt', (err) => {
       if (err) {
           console.error('Error renaming file:', err);
           return;
       }
       console.log('File renamed successfully!');
   });
   ```

- **Synchronous Method**: `fs.renameSync(oldPath, newPath)`  
   Renames or moves a file/directory synchronously.

---

### **9. Watching Files or Directories**
- **Method**: `fs.watch(path, options, listener)`  
   Watches for changes in a file or directory.

   ```javascript
   const fs = require('fs');

   fs.watch('example.txt', (eventType, filename) => {
       console.log(`File ${filename} changed: ${eventType}`);
   });
   ```

---

## **Asynchronous vs Synchronous Methods**
| **Feature**          | **Asynchronous**             | **Synchronous**            |
|----------------------|-----------------------------|----------------------------|
| **Performance**      | Non-blocking                | Blocking                   |
| **Error Handling**   | Uses callbacks or promises  | Uses `try-catch`           |
| **Use Case**         | Preferred for most tasks    | Use for small tasks/tests  |

---

## **Summary**
The `fs` module is a powerful tool in Node.js for file and directory management. Its asynchronous methods are ideal for performance-critical applications, while synchronous methods are useful for simpler, one-off tasks. Understanding the `fs` module helps us effectively handle server-side file operations in our Node.js projects.

# How the web works? 🟢🛜
### **Client-Server Model**

The **client-server model** is the foundation of how the web works. It describes a system where two key entities interact:

1. **Client**:
   - A client is the entity that initiates a request.
   - Examples: A web browser, mobile app, or any software making a request.
   - Role: Sends requests to a server, receives responses, and displays or processes the data.

2. **Server**:
   - A server is the entity that receives and processes client requests.
   - Role: Hosts resources (e.g., files, databases, APIs), processes requests, and sends responses.

The **communication between a client and server** happens using the HTTP/HTTPS protocol. The interaction typically follows this flow:

1. The client sends a **request** to the server.
2. The server processes the request.
3. The server sends back a **response** to the client.

---

### **How the Web Works with Node.js**

In the context of **Node.js**, the web follows this basic workflow:

1. **Client Sends a Request**:
   - When we visit a website or call an API, our client (browser, app) sends an HTTP request to a server.
   - Requests include details such as:
     - URL: Identifies the resource.
     - Method: Defines the type of request (e.g., `GET`, `POST`).
     - Headers: Provide metadata (e.g., content type).
     - Body: Optional data sent with the request (e.g., form data for a `POST` request).

2. **Server Receives and Processes the Request**:
   - Node.js can act as the server, listening for incoming requests on a specific port (e.g., `http://localhost:3000`).
   - The **`http` module** in Node.js allows us to create a web server that can handle requests.

3. **Server Responds**:
   - After processing, the server sends a response back to the client.
   - Responses include:
     - Status Code: Indicates success, failure, or redirection (e.g., `200 OK`, `404 Not Found`).
     - Headers: Provide metadata (e.g., content type).
     - Body: Contains the data (e.g., HTML, JSON, images).

4. **Client Processes the Response**:
   - The client processes the response and renders data for the user (e.g., a webpage) or performs further actions (e.g., updating UI).

---

### **Building a Simple Web Server in Node.js**

Here’s how we can create a basic server in Node.js using the `http` module:

```javascript
// Import the http module
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
    // Handle incoming requests
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, World! Welcome to our Node.js server!');
    } else if (req.url === '/about' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the About page.');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found');
    }
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
```

---

### **Key Concepts in the Client-Server Workflow**

1. **HTTP Methods**:
   - **GET**: Retrieve data from the server (e.g., visiting a webpage).
   - **POST**: Send data to the server (e.g., form submission).
   - **PUT**: Update an existing resource.
   - **DELETE**: Remove a resource.

2. **Status Codes**:
   - **2xx**: Success (e.g., `200 OK`).
   - **4xx**: Client errors (e.g., `404 Not Found`).
   - **5xx**: Server errors (e.g., `500 Internal Server Error`).

3. **Middleware** (in frameworks like Express.js):
   - Middleware functions process incoming requests before they reach the final route handler.
   - Example: Logging, authentication, parsing JSON.

---

### **Why Use Node.js for Servers?**

1. **Asynchronous and Non-blocking**:
   - Node.js can handle multiple requests simultaneously using its event-driven architecture.
   - Ideal for high-performance, scalable applications.

2. **JavaScript on Both Client and Server**:
   - Enables seamless sharing of code between frontend and backend.

3. **Rich Ecosystem**:
   - Thousands of packages (via npm) simplify tasks like routing, database access, and authentication.

4. **Real-Time Communication**:
   - Node.js excels in real-time applications, such as chat apps or live notifications, using libraries like Socket.IO.

---

### **Real-World Example: Node.js as a Backend**

Imagine we’re building an API to fetch user details.

1. **Client Request**:
   - URL: `http://localhost:3000/users/123`
   - Method: `GET`

2. **Server Response**:
   - Status Code: `200 OK`
   - Headers: `{ 'Content-Type': 'application/json' }`
   - Body:
     ```json
     {
       "id": 123,
       "name": "John Doe",
       "email": "john@example.com"
     }
     ```

Node.js processes the request and sends back the response. This interaction demonstrates the seamless communication between the client and server in the Node.js ecosystem.

# What is HTTP? 🟢📡
### **What is HTTP?**

HTTP (**Hypertext Transfer Protocol**) is a protocol used for communication between web browsers (clients) and web servers. It is the foundation of the World Wide Web, enabling the transfer of hypertext (documents, images, videos, etc.) over the internet.

---

### **How HTTP Works**

HTTP operates on a **request-response model**:
1. **Client**: Sends an HTTP request to the server.
2. **Server**: Processes the request and sends an HTTP response back to the client.

#### **Request-Response Example**
- A user enters a URL in their browser.
- The browser sends an HTTP request to the server hosting the website.
- The server responds with the requested data (HTML, CSS, JavaScript, images, etc.).
- The browser renders the webpage for the user.

---

### **Features of HTTP**

1. **Stateless**:
   - Each request is independent; the server does not retain information about previous requests.
   - Example: A user must log in again after closing and reopening the browser unless cookies or sessions are used.

2. **Connectionless**:
   - After a client sends a request and the server responds, the connection is closed. For a new request, a new connection is made.

3. **Layered**:
   - HTTP can work over different transport protocols (e.g., TCP) and is independent of the underlying network layers.

4. **Extensible**:
   - Additional functionalities, such as headers, cookies, and extensions, can be added without altering the core protocol.

---

### **HTTP Methods**

HTTP defines several request methods, each serving a specific purpose:

| **Method** | **Description**                                                                 |
|------------|---------------------------------------------------------------------------------|
| **GET**    | Retrieves data from the server. Example: Fetching a webpage or an image.        |
| **POST**   | Sends data to the server. Example: Submitting a form or uploading a file.       |
| **PUT**    | Updates data on the server. Example: Modifying a user's profile.                |
| **DELETE** | Deletes data from the server. Example: Removing a blog post or comment.         |
| **PATCH**  | Partially updates data on the server. Example: Changing only an email address.  |
| **HEAD**   | Retrieves headers only, without the response body.                              |
| **OPTIONS**| Describes the communication options for the target resource.                   |

---

### **Structure of an HTTP Request**

An HTTP request consists of three parts:

1. **Request Line**:
   - Example: `GET /index.html HTTP/1.1`
   - Contains:
     - **HTTP Method**: Specifies the action (e.g., GET, POST).
     - **Target Resource**: The path to the requested resource (e.g., `/index.html`).
     - **HTTP Version**: The version of the protocol (e.g., HTTP/1.1).

2. **Headers**:
   - Provide metadata about the request.
   - Example:
     ```
     Host: www.example.com
     User-Agent: Mozilla/5.0
     Content-Type: application/json
     ```

3. **Body**:
   - Contains data sent to the server (only for methods like POST, PUT, or PATCH).
   - Example:
     ```json
     {
       "name": "Skyy",
       "age": 28
     }
     ```

---

### **Structure of an HTTP Response**

An HTTP response consists of three parts:

1. **Status Line**:
   - Example: `HTTP/1.1 200 OK`
   - Contains:
     - **HTTP Version**: The version of the protocol.
     - **Status Code**: Indicates the result of the request.
     - **Reason Phrase**: A short description of the status code.

2. **Headers**:
   - Provide metadata about the response.
   - Example:
     ```
     Content-Type: text/html
     Content-Length: 3421
     ```

3. **Body**:
   - Contains the actual data (e.g., HTML, JSON, or an image).

---

### **HTTP Status Codes**

HTTP responses include a status code to indicate the outcome of the request:

| **Code** | **Category**          | **Description**                                   |
|----------|-----------------------|---------------------------------------------------|
| **1xx**  | Informational         | Request received, continuing process             |
| **2xx**  | Success               | Request was successfully processed               |
| **3xx**  | Redirection           | Further action needed to complete the request    |
| **4xx**  | Client Error          | Error caused by the client                       |
| **5xx**  | Server Error          | Error caused by the server                       |

#### Examples:
- **200 OK**: Request was successful.
- **404 Not Found**: Requested resource does not exist.
- **500 Internal Server Error**: Server encountered an error.

---

### **HTTP Versions**

1. **HTTP/1.0**:
   - First official version.
   - Used a single request-response per connection.

2. **HTTP/1.1**:
   - Introduced persistent connections (keep-alive).
   - Added more efficient headers and caching mechanisms.

3. **HTTP/2**:
   - Improved performance with multiplexing (multiple requests over a single connection).
   - Reduced latency.

4. **HTTP/3**:
   - Built on QUIC (instead of TCP).
   - Further reduces latency and improves reliability.

---

### **HTTP in Node.js**

Node.js makes working with HTTP simple using the built-in `http` module.

#### Example: Creating a Basic HTTP Server in Node.js

```javascript
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, World!');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
```

---

### **HTTP vs. HTTPS**

| Feature               | HTTP                          | HTTPS                            |
|-----------------------|-------------------------------|----------------------------------|
| **Encryption**        | Data is sent in plaintext     | Data is encrypted using SSL/TLS |
| **Security**          | Vulnerable to attacks         | Secure against eavesdropping    |
| **Port**              | Default: 80                  | Default: 443                    |
| **Use Case**          | Non-sensitive data transfers | Sensitive data (e.g., payments) |

---

### **Conclusion**

HTTP is the cornerstone of web communication, facilitating data exchange between clients and servers. Its flexibility, simplicity, and extensibility make it essential for web development. In Node.js, the `http` module provides robust tools for creating web servers and handling HTTP requests and responses efficiently.

# What is TCP? 🟢📦
### **What is TCP?**

TCP (**Transmission Control Protocol**) is one of the core protocols in the Internet Protocol Suite, alongside IP (**Internet Protocol**). It provides reliable, ordered, and error-checked delivery of data between applications running on devices connected to a network.

### **Why TCP is Important**

When data is transmitted over the internet, it's sent in chunks called packets. TCP ensures:
1. **Reliability**: All packets are delivered to the destination.
2. **Order**: Packets are reassembled in the correct order.
3. **Error Detection**: Data integrity is checked to ensure no corruption.

---

### **Key Features of TCP**

1. **Connection-Oriented**:
   - TCP establishes a connection between the sender and receiver before transmitting data. This is done using the **three-way handshake**.

2. **Reliable**:
   - TCP ensures all packets reach their destination. If a packet is lost, TCP retransmits it.

3. **Error Checking**:
   - TCP includes error-checking mechanisms to detect data corruption during transmission.

4. **Flow Control**:
   - Prevents the sender from overwhelming the receiver by adjusting the data flow rate.

5. **Congestion Control**:
   - Manages data flow to avoid network congestion.

6. **Stream-Oriented**:
   - TCP views data as a continuous stream of bytes, making it easier to work with.

---

### **How TCP Works: The Lifecycle**

#### 1. **Three-Way Handshake**
Before data transfer begins, TCP establishes a connection through a process called the **three-way handshake**:

   - **Step 1: SYN (Synchronize)**:
     The client sends a `SYN` message to the server, indicating it wants to establish a connection.

   - **Step 2: SYN-ACK (Synchronize-Acknowledge)**:
     The server responds with a `SYN-ACK` message, acknowledging the client's request.

   - **Step 3: ACK (Acknowledge)**:
     The client sends an `ACK` message back to the server, confirming the connection.

   Once the handshake is complete, the connection is established, and data transfer begins.

#### 2. **Data Transmission**
   - Data is broken into packets and sent to the receiver.
   - Each packet has a sequence number, ensuring they are reassembled in the correct order.
   - The receiver acknowledges each packet received by sending an **ACK** message back to the sender.

#### 3. **Connection Termination**
After the data transfer is complete, the connection is terminated using a **four-step process**:

   - **FIN (Finish)**: One side sends a `FIN` message indicating it has finished sending data.
   - **ACK**: The other side acknowledges the `FIN` message.
   - The process repeats in reverse, ensuring both sides agree to terminate the connection.

---

### **TCP vs. UDP**

| Feature                | TCP                                    | UDP (User Datagram Protocol)             |
|------------------------|----------------------------------------|------------------------------------------|
| **Connection**         | Connection-oriented                   | Connectionless                           |
| **Reliability**        | Reliable (ensures delivery)           | Unreliable (no guarantee of delivery)    |
| **Order**              | Ensures packets are in order          | Packets may arrive out of order          |
| **Speed**              | Slower (due to reliability overhead)  | Faster (minimal overhead)                |
| **Use Cases**          | Web browsing, emails, file transfers  | Live streaming, online gaming, VoIP      |

---

### **Structure of a TCP Packet**

Each TCP packet contains the following components:

1. **Source Port**: Port number of the sender.
2. **Destination Port**: Port number of the receiver.
3. **Sequence Number**: Used to arrange packets in the correct order.
4. **Acknowledgment Number**: Confirms receipt of data.
5. **Header Length**: Size of the TCP header.
6. **Flags**: Control information like `SYN`, `ACK`, `FIN`.
7. **Window Size**: Specifies the amount of data that can be sent without acknowledgment.
8. **Checksum**: Ensures data integrity.
9. **Data**: The actual payload.

---

### **Real-World Analogy of TCP**

Imagine sending a book via mail to a friend:

1. **Book Pages as Packets**:
   - The book is split into pages (packets) before sending.

2. **Labeling the Pages**:
   - Each page is numbered (sequence number) to ensure proper order.

3. **Acknowledgment**:
   - After receiving each page, your friend sends a thank-you note (ACK) to confirm receipt.

4. **Resending Missing Pages**:
   - If a page is lost, your friend informs you, and you resend it.

5. **Completion**:
   - Once all pages are received, both of you agree to end the exchange.

---

### **Applications of TCP**

TCP is used in scenarios requiring reliable and ordered data delivery, such as:
1. **Web Browsing (HTTP/HTTPS)**: Ensures web pages load fully and correctly.
2. **File Transfers (FTP)**: Guarantees complete and accurate file delivery.
3. **Emails (SMTP, IMAP, POP3)**: Ensures emails are transmitted without loss.
4. **Remote Connections (SSH)**: Maintains secure and uninterrupted communication.

---

### **Advantages and Disadvantages of TCP**

**Advantages**:
1. Reliable data transmission.
2. Error detection and correction.
3. Ordered delivery of packets.
4. Widely supported and used.

**Disadvantages**:
1. Higher overhead compared to UDP.
2. Slower due to acknowledgment and retransmission mechanisms.
3. May not be suitable for real-time applications like gaming or streaming.

---

### **How Node.js Leverages TCP**

In Node.js, the `net` module provides an API for creating **TCP servers and clients**. 

#### Example: A Simple TCP Server in Node.js

```javascript
const net = require('net');

// Create a TCP server
const server = net.createServer((socket) => {
    console.log('Client connected');

    // Handle data from the client
    socket.on('data', (data) => {
        console.log(`Received: ${data}`);
        socket.write('Hello from the server!');
    });

    // Handle client disconnection
    socket.on('end', () => {
        console.log('Client disconnected');
    });
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log('TCP server is running on port 3000');
});
```

---

### **Conclusion**

TCP is the backbone of reliable communication on the internet. Its robust features like reliability, error-checking, and order make it indispensable for applications where data integrity is critical. In Node.js, the `net` module allows us to leverage TCP for building powerful network applications.

# HTTP Module in NodeJs? 🟢🕸️
### **HTTP Modules in Node.js**

The HTTP module in Node.js is a core module used to create and manage HTTP servers and clients. It enables us to build web applications, APIs, and other internet-based services by handling HTTP requests and responses directly.

To use the HTTP module in a Node.js application, we import it using:
```javascript
const http = require('http');
```

---

### **Key Features of the HTTP Module**
1. **Built-in**: The module is part of Node.js and requires no additional installation.
2. **Event-Driven**: Works on Node.js’s event-driven architecture to handle incoming requests and outgoing responses.
3. **Low-Level API**: Provides fine-grained control over HTTP communication, enabling us to craft custom servers and clients.

---

### **Components of the HTTP Module**

1. **HTTP Server**
   - Used to create a server that listens for and processes HTTP requests.

2. **HTTP Client**
   - Allows making HTTP requests to other servers (e.g., APIs or websites).

3. **Classes and Methods**
   - Several classes and methods are provided to handle HTTP operations, such as `http.createServer()`, `http.request()`, `http.get()`, etc.

---

### **Creating an HTTP Server**

The primary method for creating an HTTP server is `http.createServer()`.

#### Example:
```javascript
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
    // Set response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send response body
    res.end('Hello, World!');
});

// Start the server
server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');
});
```

#### Key Points:
- **`req` (Request Object)**: Contains details of the incoming request (e.g., URL, method, headers).
- **`res` (Response Object)**: Used to send a response back to the client.

---

### **Handling Requests and Responses**

1. **Request Object (`http.IncomingMessage`)**
   - Represents the incoming HTTP request.
   - Key Properties:
     - `req.method`: HTTP method (e.g., GET, POST).
     - `req.url`: URL of the request.
     - `req.headers`: Headers sent with the request.
     - `req.on('data')`: Listens for incoming data chunks (useful for POST requests).

   #### Example:
   ```javascript
   const server = http.createServer((req, res) => {
       console.log(`Request Method: ${req.method}`);
       console.log(`Request URL: ${req.url}`);
   });
   ```

2. **Response Object (`http.ServerResponse`)**
   - Represents the server's response.
   - Key Methods:
     - `res.writeHead(statusCode, headers)`: Sets the status code and response headers.
     - `res.write(data)`: Sends response data to the client.
     - `res.end(data)`: Ends the response.

   #### Example:
   ```javascript
   const server = http.createServer((req, res) => {
       res.writeHead(200, { 'Content-Type': 'text/plain' });
       res.end('Welcome to our server!');
   });
   ```

---

### **Routing with HTTP Module**

We can implement basic routing by checking the `req.url` and `req.method`.

#### Example:
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Home Page');
    } else if (req.url === '/about' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('About Us');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
```

---

### **Creating an HTTP Client**

Node.js provides methods to send HTTP requests to other servers.

1. **`http.request()`**
   - Used for advanced configurations.
   - Returns an instance of `http.ClientRequest`.

   #### Example:
   ```javascript
   const http = require('http');

   const options = {
       hostname: 'jsonplaceholder.typicode.com',
       path: '/posts/1',
       method: 'GET',
   };

   const req = http.request(options, (res) => {
       let data = '';
       res.on('data', (chunk) => {
           data += chunk;
       });

       res.on('end', () => {
           console.log('Response:', data);
       });
   });

   req.end();
   ```

2. **`http.get()`**
   - A simplified method for GET requests.

   #### Example:
   ```javascript
   const http = require('http');

   http.get('http://jsonplaceholder.typicode.com/posts/1', (res) => {
       let data = '';
       res.on('data', (chunk) => {
           data += chunk;
       });

       res.on('end', () => {
           console.log('Response:', data);
       });
   });
   ```

---

### **Working with JSON Data**

Most modern web applications deal with JSON data. The `http` module can parse and handle JSON.

#### Example:
```javascript
const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/data') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            const jsonData = JSON.parse(body);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Data received', data: jsonData }));
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Route Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
```

---

### **HTTP Module with HTTPS**

The `http` module also supports HTTPS communication using the `https` variant. We must use SSL/TLS certificates for secure communication.

#### Example:
```javascript
const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
};

const server = https.createServer(options, (req, res) => {
    res.writeHead(200);
    res.end('Secure Connection');
});

server.listen(3000, () => {
    console.log('HTTPS Server running on port 3000');
});
```

---

### **Limitations of the HTTP Module**

- **Low-Level API**: Requires a lot of boilerplate for common tasks (e.g., routing).
- **No Built-In Middleware**: We must manually handle common tasks like logging, parsing, etc.

For these reasons, frameworks like **Express.js** are often used to simplify HTTP server creation.

---

### **Conclusion**

The HTTP module in Node.js is a powerful tool for building web servers and clients. While it provides a lot of control, it requires a deeper understanding of HTTP concepts and more manual effort. For complex applications, pairing it with frameworks like Express.js can greatly improve productivity.

# Path Module in NodeJs? 🟢🛣️
The `path` module in Node.js provides utilities for working with file and directory paths. It is a core module, meaning we can use it without installing any additional packages. The `path` module makes it easier to interact with file paths in a platform-independent way, ensuring compatibility across different operating systems.

---

### **Key Features of the `path` Module**

1. **Platform Independence**: 
   - File path syntax differs across operating systems (e.g., Windows uses `\`, while POSIX systems like Linux use `/`). The `path` module abstracts these differences.
   
2. **Path Manipulation**:
   - It helps resolve, normalize, join, and extract parts of file paths.

3. **Ease of Use**:
   - Simplifies handling relative and absolute paths.

---

### **Commonly Used Methods**

Here’s a detailed look at some key methods:

#### 1. **`path.basename()`**
   - Returns the last portion (file name) of a path.
   - **Usage**:
     ```javascript
     const path = require("path");

     const filePath = "/home/user/docs/file.txt";
     console.log(path.basename(filePath)); // Output: file.txt
     console.log(path.basename(filePath, ".txt")); // Output: file
     ```

#### 2. **`path.dirname()`**
   - Returns the directory name of a path.
   - **Usage**:
     ```javascript
     const filePath = "/home/user/docs/file.txt";
     console.log(path.dirname(filePath)); // Output: /home/user/docs
     ```

#### 3. **`path.extname()`**
   - Returns the file extension.
   - **Usage**:
     ```javascript
     const filePath = "/home/user/docs/file.txt";
     console.log(path.extname(filePath)); // Output: .txt
     ```

#### 4. **`path.join()`**
   - Joins multiple path segments into a single path.
   - Automatically inserts the correct separator (`/` or `\`) based on the platform.
   - **Usage**:
     ```javascript
     const fullPath = path.join("/home", "user", "docs", "file.txt");
     console.log(fullPath); // Output: /home/user/docs/file.txt
     ```

#### 5. **`path.resolve()`**
   - Resolves a sequence of paths into an absolute path.
   - Uses the current working directory by default.
   - **Usage**:
     ```javascript
     console.log(path.resolve("docs", "file.txt")); // Output: /current/working/directory/docs/file.txt
     ```

#### 6. **`path.normalize()`**
   - Normalizes a path by resolving `..` and `.` segments and fixing double separators.
   - **Usage**:
     ```javascript
     const messyPath = "/home/user/../docs//file.txt";
     console.log(path.normalize(messyPath)); // Output: /home/docs/file.txt
     ```

#### 7. **`path.parse()`**
   - Parses a file path into an object containing its root, directory, base, name, and extension.
   - **Usage**:
     ```javascript
     const parsed = path.parse("/home/user/docs/file.txt");
     console.log(parsed);
     // Output:
     // {
     //   root: '/',
     //   dir: '/home/user/docs',
     //   base: 'file.txt',
     //   ext: '.txt',
     //   name: 'file'
     // }
     ```

#### 8. **`path.format()`**
   - Constructs a path string from an object.
   - **Usage**:
     ```javascript
     const formatted = path.format({
       dir: "/home/user/docs",
       base: "file.txt",
     });
     console.log(formatted); // Output: /home/user/docs/file.txt
     ```

#### 9. **`path.isAbsolute()`**
   - Checks if a path is absolute.
   - **Usage**:
     ```javascript
     console.log(path.isAbsolute("/home/user/docs")); // Output: true
     console.log(path.isAbsolute("./docs")); // Output: false
     ```

#### 10. **`path.relative()`**
   - Determines the relative path between two paths.
   - **Usage**:
     ```javascript
     const from = "/home/user/docs";
     const to = "/home/user/images";
     console.log(path.relative(from, to)); // Output: ../images
     ```

---

### **Practical Example**
Let’s use several methods of the `path` module to manipulate file paths:

```javascript
const path = require("path");

// Example File Path
const filePath = "/home/user/docs/project/file.txt";

// Get the file name
console.log("File Name:", path.basename(filePath)); // Output: file.txt

// Get the directory name
console.log("Directory Name:", path.dirname(filePath)); // Output: /home/user/docs/project

// Get the file extension
console.log("File Extension:", path.extname(filePath)); // Output: .txt

// Join paths
console.log("Joined Path:", path.join("/home/user", "docs", "project")); // Output: /home/user/docs/project

// Resolve to an absolute path
console.log("Absolute Path:", path.resolve("docs/project")); // Output: /current/working/directory/docs/project

// Parse the path into components
const parsed = path.parse(filePath);
console.log("Parsed Path:", parsed);

// Construct a path from components
const formatted = path.format(parsed);
console.log("Formatted Path:", formatted);
```

---

### **Why Use the `path` Module?**

1. **Platform Independence**: The `path` module ensures that our code works on all platforms without worrying about path separators.
2. **Simplifies Complex Path Operations**: Tasks like joining paths, resolving absolute paths, and parsing path components become straightforward.
3. **Improves Code Readability and Maintainability**: Using the `path` module reduces the need for manual string manipulation, making our code cleaner.

---

### **When to Use the `path` Module in Node.js**
- Handling file paths in file operations (e.g., using the `fs` module).
- Resolving paths for configuration files, assets, or templates.
- Manipulating URLs or paths in a web application.

The `path` module is a foundational utility for any Node.js application dealing with files and directories. It simplifies our development process while ensuring compatibility and reliability.

# How to serve HTML files using NodeJs? 🟢🎨
To serve an HTML file using Node.js, we can utilize the `http` and `fs` (File System) modules. The `http` module is used to create the server, while the `fs` module is used to read the HTML file from the filesystem and send it as a response to the client.

Here's a step-by-step explanation and example:

---

### **Steps to Serve an HTML File:**

1. **Import Required Modules**: Use `require()` to import the `http` and `fs` modules.
2. **Create an HTTP Server**: Use the `http.createServer()` method to create the server.
3. **Read the HTML File**:
   - Use `fs.readFile()` to read the contents of the HTML file asynchronously.
4. **Send the HTML File as a Response**:
   - Use `res.writeHead()` to set the HTTP status code and content type.
   - Use `res.end()` to send the HTML content to the client.
5. **Listen on a Port**: Use `server.listen()` to make the server listen for incoming requests on a specified port.

---

### **Example: Serving an HTML File**

```javascript
const http = require("http");
const fs = require("fs");
const path = require("path");

// Define the port and the HTML file path
const port = 3000;
const htmlFilePath = path.join(__dirname, "index.html");

// Create the server
const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/home") {
    // Read the HTML file
    fs.readFile(htmlFilePath, "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else {
    // Handle other routes
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page Not Found");
  }
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

---

### **Create the `index.html` File**

Save the following HTML content in a file named `index.html` in the same directory as the script above:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Node.js HTML Server</title>
</head>
<body>
  <h1>Welcome to Our Node.js Server!</h1>
  <p>This is a simple example of serving an HTML file using Node.js.</p>
</body>
</html>
```

---

### **Run the Server**

1. Save the above script as `app.js`.
2. Run the server using the following command:
   ```bash
   node app.js
   ```
3. Open a browser and navigate to `http://localhost:3000`.

---

### **What Happens?**

1. When a client requests the root URL (`/` or `/home`):
   - The server reads the `index.html` file using `fs.readFile()`.
   - The file content is sent as the response with a `Content-Type` of `text/html`.
2. For any other URL, the server responds with a `404 Page Not Found`.

---

### **Advantages of This Approach**

1. Simple and lightweight for small applications or demos.
2. Provides full control over how requests and responses are handled.

---

### **When to Use This?**

This approach is suitable for learning or for serving static HTML in very basic projects. For production-grade applications, it’s recommended to use frameworks like **Express.js** or static file-serving middleware.
