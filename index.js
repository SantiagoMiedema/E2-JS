const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

//Ejercicio A

const idImpares = pizzas.filter((pizzaImp) => {
    return pizzaImp.id % 2 !==0;
});

 idImpares.forEach((pizzaImp) => {
    console.log(`La pizza ${pizzaImp.nombre} tiene id impar`)
 });

console.log(" ");

//Ejercicio B

pizzas.forEach ((pizza) => {
  if (pizza.precio < 600 ){
    console.log (`La ${pizza.nombre} vale menos de $600`);
  }
});

console.log(" ");

//Ejercicio C

pizzas.forEach ((precios) => {
  console.log(`La ${precios.nombre} cuesta $${precios.precio}`);
});

console.log(" ");

//Ejercicio D



pizzas.forEach((pizza) => {
   console.log(`La ${pizza.nombre} tiene los siguientes ingredientes:`);
   pizza.ingredientes.forEach((ingredientes) => {
     console.log(`${pizza.ingredientes}`);
   });
});





