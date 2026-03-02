class Navegador {
  constructor() {
    this.atras = [];
    this.adelante = [];
    this.paginaActual = null;
  }

  visitar(url) {
    if (this.paginaActual) {
      this.atras.push(this.paginaActual);
    }
    this.paginaActual = url;
    this.adelante = []; // Al visitar nueva web, se limpia el "adelante"
    console.log(`Visitando: ${url}`);
  }

  irAtras() {
    if (this.atras.length > 0) {
      this.adelante.push(this.paginaActual);
      this.paginaActual = this.atras.pop();
      console.log(`Retrocediendo a: ${this.paginaActual}`);
    } else {
      console.log("No hay historial para retroceder.");
    }
  }

  irAdelante() {
    if (this.adelante.length > 0) {
      this.atras.push(this.paginaActual);
      this.paginaActual = this.adelante.pop();
      console.log(`Avanzando a: ${this.paginaActual}`);
    } else {
      console.log("No hay historial para avanzar.");
    }
  }
}

// Ejemplo de uso:
const miNav = new Navegador();
miNav.visitar("google.com");
miNav.visitar("github.com");
miNav.irAtras();
miNav.irAdelante();