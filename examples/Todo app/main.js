import { zState, effect, scanDOM } from "../../src/index.js";

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     STATE
  ========================= */
  const [todos, setTodos] = zState([]);

  /* =========================
     DOM REFERENCES
  ========================= */
  const input = document.getElementById("todo-input");
  const addBtn = document.getElementById("add-btn");
  const list = document.getElementById("todo-list");
  const count = document.getElementById("count");

  /* =========================
     ACTIONS
  ========================= */
  function addTodo() {
    const text = input.value.trim();
    if (!text) return;

    setTodos([
      ...todos(),
      { id: Date.now(), text, done: false }
    ]);

    input.value = "";
  }

  function toggleTodo(id) {
    setTodos(
      todos().map(todo =>
        todo.id === id
          ? { ...todo, done: !todo.done }
          : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todos().filter(todo => todo.id !== id));
  }

  /* =========================
     EFFECTS
  ========================= */
  effect(() => {
    list.innerHTML = "";

    todos().forEach(todo => {
      const li = document.createElement("li");

      const span = document.createElement("span");
      span.textContent = todo.text;
      span.style.cursor = "pointer";
      if (todo.done) span.style.textDecoration = "line-through";
      span.onclick = () => toggleTodo(todo.id);

      const btn = document.createElement("button");
      btn.textContent = "❌";
      btn.onclick = () => deleteTodo(todo.id);

      li.append(span, btn);
      list.appendChild(li);
    });
  });

  effect(() => {
    count.textContent = todos().length;
  });

  /* =========================
     EVENTS
  ========================= */
  addBtn.addEventListener("click", addTodo);
  input.addEventListener("keydown", e => {
    if (e.key === "Enter") addTodo();
  });

  /* =========================
     TEMPLATE SCAN
  ========================= */
  scanDOM(document.body, { todos });
});
