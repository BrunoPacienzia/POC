import assert from "assert";
import { asincrona, sincrona, fetchData, fetchData_2 } from "../index.js";

// Testeamos funcion sincrona

describe.only("sincrona", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      debugger;
      assert.equal(sincrona.i(), -1);
    });
  });
});

describe.skip("sincrona", function () {
  it("should return data from the promise", function () {
    return fetchData().then((data) => {
      assert.equal(data, "Data retrieved successfully!"); // Verificamos que los datos son correctos
    });
  });
  it("should retrieve data successfully", async function () {
    const data = await fetchData_2(); // Esperamos a que la promesa se resuelva
    assert.equal(data, "Data retrieved successfully!"); // Verificamos el valor devuelto
  });
});

// Testeamos async/await con Promesas

describe.skip("asincrona", function () {
  describe("#delayedPromise()", function () {
    it("should return 5 after 100ms", async function () {
      const resultado = await asincrona.delayedPromise();
      assert.equal(resultado, 5);
    });
  });
});

describe.skip("asincrona", function () {
  describe("#delayedPromise()", function () {
    it("should return 5 after 1000ms", function () {
      return asincrona.delayedPromise().then((resolve) => {
        assert.equal(resolve, 5);
      });
    });
  });
});
