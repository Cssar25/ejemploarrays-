const pedidos = [
  { id: 1, cliente: "Ana", total: 120, estado: "entregado", categoria: "tech" },
  { id: 2, cliente: "Luis", total: 45, estado: "pendiente", categoria: "ropa" },
  { id: 3, cliente: "Ana", total: 300, estado: "entregado", categoria: "tech" },
  { id: 4, cliente: "María", total: 80, estado: "entregado", categoria: "libros" },
  { id: 5, cliente: "Luis", total: 200, estado: "cancelado", categoria: "tech" }
];

// encadenamiento 

let  totalEntregados = 0; 

for (let i = 0; i < pedidos.length; i++) {

if(pedidos[i].estado ==="entregado")
    totalEntregados += pedidos[i].total 

}

console.log("total entregados", totalEntregados);

// nombres entregados a-z 

let nombres = []
for (let i = 0; i < pedidos.length; i++) {
    if(pedidos[i].estado === "entregado"){
        if(!nombres.includes(pedidos[i].cliente)); {
            nombres.push(pedidos[i].cliente)
        }
    }
    
}

nombres.sort(); // ordena de la a-z 

console.log("clientes entregados", nombres)


// entregados 

let entregados = [];

for (let i = 0; i < pedidos.length; i++) {
    if(pedidos[i].estado ==="entregado"){
        entregados.push(pedidos[i]);
    }
    
    
}

entregados.sort((a, b) => b.total -a.total)
console.log("los dos mas caros", entregados.slice(0,2));