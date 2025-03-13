type NewReadonly<T> = {
    readonly [P in keyof T]: T[P];
  };


  
function throwError(message: string): never {
    throw new Error(message);
}