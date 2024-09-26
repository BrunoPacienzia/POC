class asincrona {
  static delayedPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(5);
      }, 100);
    });
  }
}

class sincrona {
  static i() {
    return [1, 2, 3].indexOf(4);
  }
}

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data retrieved successfully!");
    }, 1000);
  });
}

async function fetchData_2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data retrieved successfully!");
    }, 1000); // Simulamos una espera de 1 segundo
  });
}

export { asincrona, sincrona, fetchData, fetchData_2 };
