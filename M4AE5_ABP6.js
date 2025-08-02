const crearSala = (id, capacidad) => ({
  id,
  disponibles: Array.from({ length: capacidad }, (_, i) => i + 1),
  reservados: [],

  reservarAsiento(asiento) {
    const i = this.disponibles.indexOf(asiento);
    if (i !== -1) {
      this.reservados.push(...this.disponibles.splice(i, 1));
      console.log(`Asiento ${asiento} reservado en sala ${this.id}`);
    } else {
      console.log(`Asiento ${asiento} no disponible`);
    }
  },

  cancelarReserva(asiento) {
    const i = this.reservados.indexOf(asiento);
    if (i !== -1) {
      this.disponibles.push(...this.reservados.splice(i, 1));
      console.log(`Reserva del asiento ${asiento} cancelada en sala ${this.id}`);
    } else {
      console.log(`Asiento ${asiento} no estaba reservado`);
    }
  },

  mostrarDisponibles() {
    console.log(`Asientos disponibles en sala ${this.id}: ${this.disponibles.sort((a, b) => a - b).join(', ')}`);
  }
});

const Cine = {
  nombre: "Cine Selknam",
  capacidadPorSala: 10,
  salas: [],

  agregarSala(id) {
    this.salas.push(crearSala(id, this.capacidadPorSala));
    console.log(`Sala ${id} agregada`);
  },

  obtenerSala: id => Cine.salas.find(s => s.id === id)
};

Cine.agregarSala("A");
Cine.agregarSala("B");

const salaA = Cine.obtenerSala("A");
salaA.mostrarDisponibles();
salaA.reservarAsiento(5);
salaA.reservarAsiento(9);
salaA.mostrarDisponibles();
salaA.cancelarReserva(9);
salaA.mostrarDisponibles();

