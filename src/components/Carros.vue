<template>
    <div id="Agenda">
        <section class="banner1">
            <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div class="d-flex justify-content-center">
                    <div class="text-center">
                        <h1 class="text-white mx-auto mt-2 mb-5">Aqui podras encontrar o vender tu carro.</h1>
                        <a class="btn btn-primary" href="#form">Compra o Vende tu Carro!</a>
                    </div>
                </div>
            </div>
        </section>
        <div class="div-form container mt-5" id="form">
        <form @submit.prevent="agregarCarro">
        <label for="fname">Marca y Modelo</label>
        <input type="text" id="fname" v-model="marca" placeholder="Marca y Modelo del Vehiculo...">

        <label for="lname">Año</label>
        <input type="text" id="lname" v-model="año" placeholder="Año del Vehiculo...">

        <label for="lname">Color</label>
        <input type="text" id="lname" v-model="color" placeholder="Año del Vehiculo...">

        <label for="country">Tipo de Combustible</label>
        <select id="country" v-model="combustible">
        <option value="Gasolina">Gasolina</option>
        <option value="Disel">Disel</option>
        <option value="Gas">Gas</option>
        <option value="Electrico">Electrico</option>
        </select>

        <label for="country">Número de Puertas</label>
        <select id="country" v-model="puertas">
        <option value="2 Puertas">2 Puertas</option>
        <option value="4 Puertas">4 Puertas</option>
        </select>

        <label for="country">Transmision</label>
        <select id="country" v-model="transmision">
        <option value="Mecánica">Mecánica</option>
        <option value="Automática">Automática</option>
        <option value="Automática Secuencial">Automática Secuencial</option>
        </select>

        <label for="lname">Kilometraje</label>
        <input type="text" id="lname" v-model="kilometraje" placeholder="Kilometraje del Vehiculo...">

        <label for="lname">Placa</label>
        <input type="text" id="lname" v-model="placa" placeholder="Placa del Vehiculo...">

        <label for="lname">Precio</label>
        <input type="text" id="lname" v-model="precio" placeholder="Precio del Vehiculo...">
  
        <input type="submit" value="Submit">
        </form>
        </div>
         
    <div class="container mb-5 mt-5">
    <div class="col m12">
      <table class="table bordered striped">
        <thead>
          <tr>
            <th>Marca y Modelo</th>
            <th>Año</th>
            <th>Color</th>
            <th>Tipo de Combustible</th>
            <th>Número de Puertas</th>
            <th>Transmision</th>
            <th>Kilometraje</th>
            <th>Placa</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="carro in carros" v-bind:key="carro">
              <td>{{carro.marca}}</td>
              <td>{{carro.año}}</td>
              <td>{{carro.color}}</td>
              <td>{{carro.combustible}}</td>
              <td>{{carro.puertas}}</td>
              <td>{{carro.transmision}}</td>
              <td>{{carro.kilometraje}}</td>
              <td>{{carro.placa}}</td>
              <td>{{carro.precio}}</td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
        
        
    </div>
    
</template>
<script>
export default {
  name: 'Carros',
  data(){
    return {
      marca: '',
      año: '',
      color: '',
      combustible: '',
      puertas: '',
      transmision: '',
      kilometraje: '',
      placa: '',
      precio: '',
      carros: [],

      select_instances: []
    }
  },
  methods: {
    agregarCarro()
    {
      var data = {
        marca: this.marca,
        año: this.año,
        color: this.color,
        combustible: this.combustible,
        puertas: this.puertas,
        transmision: this.transmision,
        kilometraje: this.kilometraje,
        placa: this.placa,
        precio: this.precio,

      };
      this.carros.push(data);
        this.marca = '';
        this.año = '';
        this.color = '';
        this.combustible = '';
        this.puertas = '';
        this.transmision = '';
        this.kilometraje = '';
        this.placa = '';
        this.precio = '';
    },
  }
}
</script>
<style>
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.div-form{
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>