import assert from "assert";
import { asincrona, sincrona, fetchData, fetchData_2 } from "../index.js";

// Testeamos funcion sincrona

// describe('sincrona', function () {
// 	describe('#indexOf()', function () {
// 		it('should return -1 when the value is not present', function () {
// 			debugger;
// 			assert.equal(sincrona.i(), -1);
// 		});
// 	});
// });

// describe.skip('sincrona', function () {
// 	it('should return data from the promise', function () {
// 		return fetchData().then((data) => {
// 			assert.equal(data, 'Data retrieved successfully!'); // Verificamos que los datos son correctos
// 		});
// 	});
// 	it('should retrieve data successfully', async function () {
// 		const data = await fetchData_2(); // Esperamos a que la promesa se resuelva
// 		assert.equal(data, 'Data retrieved successfully!'); // Verificamos el valor devuelto
// 	});
// });

// // Testeamos async/await con Promesas

// describe.skip('asincrona', function () {
// 	describe('#delayedPromise()', function () {
// 		it('should return 5 after 100ms', async function () {
// 			const resultado = await asincrona.delayedPromise();
// 			assert.equal(resultado, 5);
// 		});
// 	});
// });

// describe.skip('asincrona', function () {
// 	describe('#delayedPromise()', function () {
// 		it('should return 5 after 1000ms', function () {
// 			return asincrona.delayedPromise().then((resolve) => {
// 				assert.equal(resolve, 5);
// 			});
// 		});
// 	});
// });

function add(args) {
  return args.reduce((prev, curr) => prev + curr, 0);
}

describe("add() en paralelo 2", function () {
  let startTime;

  before(function () {
    startTime = Date.now();
  });

  after(function () {
    const endTime = Date.now();
    const duration = endTime - startTime;
    console.log(`Test suite took ${duration}ms to run.`);
  });

  let tests = [];

  for (let i = 0; i < 7000; i++) {
    let newElement = { args: [], expected: sumToN(i + 1) };

    for (let j = 0; j < i + 1; j++) {
      newElement.args.push(j + 1);
    }

    tests.push(newElement);
  }

  tests.forEach(({ args, expected }) => {
    it(`correctly adds ${args.length} args`, function () {
      const res = add(args);
      assert.strictEqual(res, expected);
    });
  });
});

function sumToN(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

describe("add()", function () {
  let startTime;

  before(function () {
    startTime = Date.now();
  });

  after(function () {
    const endTime = Date.now();
    const duration = endTime - startTime;
    console.log(`Test suite took ${duration}ms to run.`);
  });

  let tests = [];

  for (let i = 0; i < 7000; i++) {
    let newElement = { args: [], expected: sumToN(i + 1) };

    for (let j = 0; j < i + 1; j++) {
      newElement.args.push(j + 1);
    }

    tests.push(newElement);
  }

  tests.forEach(({ args, expected }) => {
    it(`correctly adds ${args.length} args`, function () {
      const res = add(args);
      assert.strictEqual(res, expected);
    });
  });
});

describe("add2()", function () {
  let startTime;

  before(function () {
    startTime = Date.now();
  });

  after(function () {
    const endTime = Date.now();
    const duration = endTime - startTime;
    console.log(`Test suite took ${duration}ms to run.`);
  });

  let tests = [];

  for (let i = 0; i < 7000; i++) {
    let newElement = { args: [], expected: sumToN(i + 1) };

    for (let j = 0; j < i + 1; j++) {
      newElement.args.push(j + 1);
    }

    tests.push(newElement);
  }

  tests.forEach(({ args, expected }) => {
    it(`PERUANO ${args.length} args`, function () {
      const res = add(args);
      assert.strictEqual(res, expected);
    });
  });
});
