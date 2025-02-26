function processData(data) {
    return new Promise((resolve, reject) => {
      if (typeof data !== 'number') {
        reject('Error');
        return;
      }
  
      const isOdd = data % 2 !== 0;
      const delay = isOdd ? 1000 : 2000;
      const result = isOdd ? 'Odd' : 'Even';
  
      setTimeout(() => {
        resolve(result);
      }, delay);
    });
  }