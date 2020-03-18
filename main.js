import Precio from "./precio.js";
import Producto from "./producto.js";
import ElementoPedido from "./elemento-pedido.js";
import Direcion from "./direccion.js";
import Cliente from "./cliente.js";
import Pedido from "./pedido.js";
import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Restaurante from "./restaurante.js";
import ClienteFrecuente from "./cliente-frecuente.js";

class Main{
    constructor(){
        this.precio = new Precio(120.99)
        this.producto = new Producto("Hamburguesa Costeña", this.precio)
        this.producto2 = new Producto("Soda", new Precio(26.49))
        this.elementoPedido = new ElementoPedido(this.producto, 3)
        this.elementoPedido2 = new ElementoPedido(this.producto2, 2)
        this.direccion = new Direcion("Monthatlan", 249, 2, "Villa Izcalli", 28979, "Villa de Alvarez", "Colima")
        this.cliente = new Cliente("Juan Perez Gomez", this.direccion, 3121234567)
        this.cliente2 = new Cliente("David Loredo Ramirez", this.direccion, 3120987654)
        
        let nR = {
            nombre: "Serendipia",
            telefono: 310101,
            direccion: this.direccion
        }


        let nP1 = {
            fecha: new Fecha(new Date(15, 3, 2020)),
            hora: new Tiempo(10 , 30, "am"),
            cliente: this.cliente,
            numeroPedido: 4
        }

        let nP2 = {
            fecha: new Fecha(new Date(16, 3, 2020)),
            hora: new Tiempo(11, 30, "am"),
            cliente: this.cliente2,
            numeroPedido: 8
        }

        let nCF = {
            nombre: "German Sosa Vazquez",
            direccion: new Direcion("Chanxopan", 123, 3, "V Bonfil", 28979, "Villa de Alvarez", "Colima"),
            telefono: 3121357905,
            numeroCliente: 1111,
            fecha: new Fecha(new Date(11,3,2020))
        }

        this.pedido = new Pedido(nP1)
        this.pedido2 = new Pedido(nP2)

        this.clienteFrecuente = new ClienteFrecuente(nCF)

        this.restaurante = new Restaurante(nR)
        
        this.pedido.agregarElemento(this.elementoPedido)
        this.pedido.agregarElemento(this.elementoPedido2)
        this.pedido.agregarElemento(this.elementoPedido2)

    }

    probarElementoProducto(){ 
        console.log(this.elementoPedido.getDescripcion())
    }

    probarDireccion(){ console.log(this.direccion.getFormatoExtendido())
      console.log(this.direccion.getFormatoCorto())
    }

    probarCliente(){ 
        console.log(this.cliente.getPerfil())
    }

    probarPedido(){
        console.log(this.pedido.getResumen())
        console.log(this.pedido.getNumeroElementos())
        console.log(this.pedido.getProductos())
        console.log(this.pedido.getCostoTotal())
        this.pedido.listarElementos()   
    }

    probarRestaurante(){
        this.restaurante.registrarProducto(this.producto)
        this.restaurante.registrarProducto(this.producto2)

       
        console.log(this.restaurante.registrarPedido(this.pedido))
        console.log(this.restaurante.registrarPedido(this.pedido))

       
        console.log(this.restaurante.eliminarPedido(this.pedido))

        console.log(this.restaurante.eliminarPedido(this.pedido))

        
        console.log(this.restaurante.registrarPedido(this.pedido))

     
        console.log(this.restaurante.modificarPedido(this.pedido, this.pedido2))

        this.restaurante.listarProductos()
        this.restaurante.listarPedidos()
    }
}

let a = new Main()
a.probarElementoProducto();
a.probarDireccion();
a.probarCliente();
a.probarPedido();
a.probarRestaurante();