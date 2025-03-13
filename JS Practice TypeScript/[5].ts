class Stack<T> {
    private items: T[] = [];
  
    // Добавление элемента в стек
    push(item: T): void {
      this.items.push(item);
    }
  
    // Удаление и возврат верхнего элемента стека
    pop(): T | undefined {
      return this.items.pop();
    }
  
    // Возврат верхнего элемента стека без его удаления
    peek(): T | undefined {
      return this.items[this.items.length - 1];
    }
  
    // Проверка, пуст ли стек
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  
    // Возврат размера стека
    size(): number {
      return this.items.length;
    }
  
    // Очистка стека
    clear(): void {
      this.items = [];
    }
}





type ReturnTypeBasedOnInput<T> = T extends string ? string[] : T extends number ? number[] : never;

function processInput<T extends string | number>(input: T): ReturnTypeBasedOnInput<T> {
  if (typeof input === "string") {
    return [input] as ReturnTypeBasedOnInput<T>; // Возвращаем массив строк
  } else if (typeof input === "number") {
    return [input] as ReturnTypeBasedOnInput<T>; // Возвращаем массив чисел
  }
  throw new Error("Unsupported input type");
}



function getValueType<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

