// Перегрузки функции
function processData(data: number[]): number;
function processData(data: string[]): number;

function processData(data: number[] | string[]): number {
  if (typeof data[0] === "number") {
    // Если массив чисел, считаем сумму
    return (data as number[]).reduce((sum, num) => sum + num, 0);
  } else {
    // Если массив строк, возвращаем длину массива
    return data.length;
  }
}