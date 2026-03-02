class GestorPedidos {
  constructor() {
    this.cola = [];
  }


  recibirPedido(pedidoId, descripcion) {
    console.log(`Pedido ${pedidoId} recibido y en cola.`);
    this.cola.push({ id: pedidoId, detalle: descripcion });
  }

  async procesarSiguiente() {
    if (this.cola.length === 0) {
      return console.log("No hay pedidos pendientes.");
    }

    const pedido = this.cola.shift(); 
    console.log(`Procesando pedido #${pedido.id}: ${pedido.detalle}...`);
    
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(`Pedido #${pedido.id} completado.`);
  }
}


const pedidos = new GestorPedidos();
pedidos.recibirPedido(101, "Laptop Pro");
pedidos.recibirPedido(102, "Mouse Gamer");
pedidos.procesarSiguiente();