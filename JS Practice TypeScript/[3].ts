function printElement(element: number | string): void {
    if (typeof element === "number") {
      console.log(`Число: ${element}`);
    } else if (typeof element === "string") {
      console.log(`Длина строки: ${element.length}`);
    }
  }