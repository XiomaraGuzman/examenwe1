const FormularioCliente =() =>{
    return(
        <section className="formulariocliente">
            <h5 className="titulocliente ">Cliente</h5>
        <input className="cliente" type="text" placeholder="Nombre" />
        <input className="cliente" type="text" placeholder="Documento" />
        <input className="cliente" type="text" placeholder="Correo" />
        <input className="cliente" type="text" placeholder="Direccion" />
        <input className="cliente" type="text" placeholder="Barrio" />
        <input className="cliente" type="text" placeholder="Telefono" />
        <input className="cliente" type="text" placeholder="Descripcion Empresa" />
        <input className="cliente" type="text" placeholder="Descripcion Producto" />
        <button>enviar</button>
        
        </section> 
    )
}
export default FormularioCliente