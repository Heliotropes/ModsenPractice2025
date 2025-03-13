import React, { useState, useEffect } from "react";

const RandomDogImage = () => {
  // Состояние для хранения URL изображения
  const [imageUrl, setImageUrl] = useState("");

  // Эффект для выполнения запроса к API при монтировании компонента
  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        setImageUrl(data.message); // Обновляем состояние с URL изображения
      } catch (error) {
        console.error("Ошибка при загрузке изображения:", error);
      }
    };

    fetchDogImage();
  }, []); // Пустой массив зависимостей означает, что эффект выполнится только при монтировании

  return (
    <div style={styles.container}>
      <h1>Случайное изображение собаки</h1>
      {imageUrl ? (
        <img src={imageUrl} alt="Случайная собака" style={styles.image} />
      ) : (
        <p>Загрузка изображения...</p>
      )}
    </div>
  );
};

// Базовые стили
const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
};

export default RandomDogImage;