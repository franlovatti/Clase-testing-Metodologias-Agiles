function sumar(string) {

  // test 1
  // return 0;

  // test 2
  // if (string === '') return 0;
  // return parseInt(string);

  // test 3
  // if (string === '') return 0;
  // return string.split(',').reduce((contador, n) => contador + parseInt(n), 0);
  // test 4 — misma solucion, ya funciona

  // test 5
  // if (string === '') return 0;
  // return string.split(/,|\n/).reduce((contador, n) => contador + parseInt(n), 0);

  // test 6
  if (string === '') return 0;
  const numeros = string.split(/,|\n/).map(Number);
  const negativos = numeros.filter(n => n < 0);
  if (negativos.length > 0) throw new Error(`no se permiten negativos: ${negativos.join(', ')}`);
  return numeros.reduce((acc, n) => acc + n, 0);

}

module.exports = sumar;