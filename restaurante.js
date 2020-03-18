export default class Restaurante{

    constructor(nombre, telefono, direccion)
    {
        this._nombre = nombre
        this._telefono = telefono
        this._direccion = direccion
        this._productos = []
        this._pedidos = []
    }

    registrarProducto(producto){
        this._productos.push(producto)
    }
    registrarPedido(pedido){
       
       let en = this.buscarPedido(pedido)
      
        if(en == null){this._pedidos.push(pedido)
            return true}
        else
        {return false}

        
    }

    listarProductos(){
        this._productos.forEach( (p) => {
            console.log(p.getDescripcion())
        })
    }
    listarPedidos(){
        this._pedidos.forEach( (pe, i) => {
            console.log(`${i+1} ----- ${pe.getResumen()}`)
        })
    }
    
    buscarPedido(pedido){
        let en = this._pedidos.find(pe => pe._esIgualA(pedido))
        if(en == undefined){return null}
        else {return en}
    }
    eliminarPedido(pedido){
        let en =  this.buscarPedido(pedido)
        if(en == null) return false
        else {
        let i = this._pedidos.indexOf(en)
        this._pedidos.splice(i,1)
        return true
        }
    }
    modificarPedido(pedido, nuevoPedido){
        let en =  this.buscarPedido(pedido)
        if(en == null) return false
        else {
        let i = this._pedidos.indexOf(en)
        this._pedidos[i] = nuevoPedido
        return true
        }
    }
}