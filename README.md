# ⚡ Zero.js

A **minimal reactive JavaScript framework** built from scratch to understand how modern frontend frameworks like **React, Vue, and SolidJS** work internally.

Zero.js focuses on **fine-grained reactivity**, **dependency tracking**, and **automatic DOM updates** — without using any external libraries.

> 🎯 Educational, lightweight, and focused on framework internals.

---

## ✨ Features

- 🔁 Reactive state using **signals**
- 🎯 Dependency tracking with **effects**
- 🧮 Derived state via **computed**
- 🧩 Proxy-based **reactive objects**
- ⚛️ React-like `zState` API
- 🪄 Template binding using `{{ }}` syntax
- 🌳 Automatic DOM scanning and updates
- 🧪 Example **Todo App** built using the framework

---

## 📦 Installation

> ⚠️ **Note:** This project is currently **not published to npm**.  
> It is intended for **learning, experimentation, and source-level usage**.

### Local Usage

Clone the repository:

```bash
git clone https://github.com/sanskarkanade/zero.js.git
cd zero.js
```

Import directly from the source:

```js
import {
  signal,
  effect,
  reactive,
  computed,
  zState,
  scanDOM
} from "./src/index.js";
```

---

## 🧠 Core Concepts

### 1️⃣ `signal`

A reactive primitive that stores a value and tracks which effects depend on it.

```js
const count = signal(0);

effect(() => {
  console.log(count.value);
});

count.value++;
```

---

### 2️⃣ `effect`

Registers a reactive function that automatically re-runs when its dependencies change.

```js
effect(() => {
  console.log("Runs whenever dependencies change");
});
```

**How it works:**
- Runs immediately  
- Collects dependencies  
- Re-executes on updates  

---

### 3️⃣ `computed`

Creates derived reactive state based on other reactive values.

```js
const doubled = computed(() => count.value * 2);
```

---

### 4️⃣ `reactive`

Makes an object reactive using JavaScript `Proxy`.

```js
const state = reactive({
  name: "Zero",
  todos: []
});
```

**Behavior:**
- Tracks property access  
- Triggers updates on reassignment  
- Uses immutable updates for arrays  

---

### 5️⃣ `zState` (React-like API)

A convenience abstraction inspired by React’s `useState`.

```js
const [count, setCount] = zState(0);

effect(() => {
  console.log(count());
});

setCount(count() + 1);
```

- Built on top of `signal`
- Getter–setter pattern
- Fine-grained reactivity (SolidJS-inspired)

---

## 🪄 Template Binding (`{{ }}`)

Zero.js supports simple text bindings:

```html
<p>Total todos: {{ todos.length }}</p>
```

Bindings are:
- Parsed at runtime  
- Automatically updated via effects  
- Dependency-tracked  

---

## 🌳 DOM Scanning

Zero.js scans the DOM and binds templates automatically:

```js
scanDOM(document.body, state);
```

This enables reactive updates **without a virtual DOM**.

---

## 🧪 Example: Todo App

A fully working **Todo App** is included to demonstrate real usage.

**Features**
- ➕ Add todos  
- ✅ Mark todos as done  
- ❌ Delete todos  
- 🔢 Live count updates  

📁 **Location:**  
```
examples/todo-app/
```

---

## ⚠️ Design Decisions & Limitations

- Array mutations (`push`, `splice`) are **not tracked**
- Immutable updates are used instead
- Effects run immediately (no scheduler yet)
- No virtual DOM (direct DOM manipulation)

These choices keep the framework **simple, predictable, and educational**.

---

## 🎓 What This Project Demonstrates

- Deep understanding of reactivity systems  
- Dependency tracking mechanics  
- State management internals  
- Framework design trade-offs  
- DOM lifecycle & timing awareness  

---

## 📜 License

MIT License — free to use for learning and experimentation.

---

## 👤 Author

**Sanskar Kanade**
