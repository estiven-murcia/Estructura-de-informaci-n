const LIMITE = 100_000;


const finalArray = [];
console.time("Insertar al FINAL (push)");
for (let i = 0; i < LIMITE; i++) {
  finalArray.push(i);
}
console.timeEnd("Insertar al FINAL (push)");


const inicioArray = [];
console.time("Insertar al INICIO (unshift)");
for (let i = 0; i < LIMITE; i++) {
  inicioArray.unshift(i);
}
console.timeEnd("Insertar al INICIO (unshift)");