# Product Flow Editor

**Product Flow Editor** is a React-based web application that lets users visually map products as draggable, connectable nodes. It fetches data from a public product API and provides an intuitive flow editor where you can create, connect, edit, and delete product or empty nodes.

---

## 🚀 Features

- 🔄 **Product Fetching**: Automatically fetches a list of products from [DummyJSON API] on app load.
- ➕ **Add Product Nodes**: Add products to a canvas as individual draggable nodes showing name and price.
- 🔗 **Connect Nodes**: Drag from one node to another to create animated directional connections (edges).
- ✏️ **Add Empty Editable Node**: Double-click to edit the text inside an empty node added to the canvas.
- 🗑️ **Delete Node**: Select and delete any node with a single click, including its connected edges.
- 🖱️ **Interactive UI**: Clean and minimal design powered by React Flow — pan, zoom, drag, and edit with ease.

---

## 🛠️ Tech Stack

| Technology    | Purpose |
| ------------- | ------- |
| **React**     | JavaScript library for building user interfaces |
| **React Flow** | For rendering flow-based interfaces with nodes and edges |
| **React Hooks (useState, useEffect, useCallback)** | Managing state and lifecycle in functional components |
| **Fetch API** | Used to fetch product data from the public DummyJSON API |
| **CSS / Inline Styling** | Basic styling for layout and node presentation |

---

## ⚙️ How to Set Up the Project

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/product-flow-editor.git
cd product-flow-editor
```

### 2. Install Dependencies

```bash
npm install react
```
```bash
npm install react-dom
```
```bash
npm install reactflow
```
```bash
npm install react-scripts
```

This will install the following dependencies:

- **react**: Core React library for building the user interface.
- **react-dom**: Helps React interact with the DOM (Document Object Model).
- **reactflow**: Used for rendering and managing flow diagrams, nodes, and edges.
- **react-scripts**: Scripts and configuration used by Create React App for bundling and starting the app.

### 3. Run the Project

```bash
npm start
```

## 📦 Why These Dependencies?

| Dependency       | Reason                                                                 |
| ---------------- | ---------------------------------------------------------------------- |
| **react**        | Framework for building component-based UI                              |
| **react-dom**    | Enables rendering React components into the DOM                        |
| **reactflow**    | Handles all flow rendering, node dragging, edge creation, and canvas interactions |
| **react-scripts**| Bundler and development environment provided by Create React App       |
| **fetch API**    | Built-in JS feature to make API calls for fetching product data        |

