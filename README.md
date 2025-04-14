# 🧩 Product Flow Editor

**Product Flow Editor** is a React-based web application that lets users visually map products as draggable, connectable nodes. It fetches data from a public product API and provides an intuitive flow editor where you can create, connect, edit, and delete product or empty nodes.

---

## 🚀 Features

- 🔄 **Product Fetching**: Automatically fetches a list of products from [DummyJSON API](https://dummyjson.com/products) on app load.
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
