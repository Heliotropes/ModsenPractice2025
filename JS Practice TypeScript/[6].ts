class Animal {
    // Публичное поле sound
    public sound: string;
  
    // Конструктор для инициализации поля sound
    constructor(sound: string) {
      this.sound = sound;
    }
  
    // Метод для воспроизведения звука
    makeSound(): void {
      console.log(this.sound);
    }
  }