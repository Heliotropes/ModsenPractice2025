import React, { useState } from "react";

const TodoList = () => {
  // Состояние для хранения списка задач
  const [todos, setTodos] = useState([]);
  // Состояние для хранения введенного текста
  const [inputValue, setInputValue] = useState("");

  // Обработчик изменения значения в поле ввода
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Обработчик добавления задачи
  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]); // Добавляем новую задачу в список
      setInputValue(""); // Очищаем поле ввода
    }
  };

  return (
    <div style={styles.container}>
      <h1>Todo List</h1>
      <div style={styles.form}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Введите задачу"
          style={styles.input}
        />
        <button onClick={handleAddTodo} style={styles.button}>
          Добавить
        </button>
      </div>
      <ul style={styles.list}>
        {todos.map((todo, index) => (
          <li key={index} style={styles.listItem}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Базовые стили
const styles = {
  container: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  form: {
    display: "flex",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginRight: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    padding: "10px",
    borderBottom: "1px solid #ccc",
    fontSize: "16px",
  },
};

export default TodoList;