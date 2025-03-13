import React, { Component } from "react";

class ToggleButton extends Component {
  constructor(props) {
    super(props);
    // Инициализация состояния
    this.state = {
      buttonText: "Show",
    };
  }

  // Обработчик нажатия на кнопку
  handleClick = () => {
    this.setState((prevState) => ({
      buttonText: prevState.buttonText === "Show" ? "Hide" : "Show",
    }));
  };

  render() {
    return (
      <div style={styles.container}>
        <button onClick={this.handleClick} style={styles.button}>
          {this.state.buttonText}
        </button>
      </div>
    );
  }
}

// Базовые стили
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default ToggleButton;