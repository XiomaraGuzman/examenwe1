const FormularioProveedor =()=>{
    return(
      
        <section className="formularioproveedor">
            <h5 className="tituloproveedor ">Proveedor</h5>
        <input className="proveedor" type="text" placeholder="Nombre" />
        <input className="proveedor" type="text" placeholder="Nit" />
        <input className="proveedor" type="text" placeholder="Direccion" />
        <input className="proveedor" type="text" placeholder="Telefono" />
        <input className="proveedor" type="text" placeholder="Correo" />
        <input className="proveedor" type="text" placeholder="Descripcion Empresa" />
        <input className="proveedor" type="text" placeholder="Descripcion Producto" />

        <button>enviar</button>
        </section> 

       
    )
}
export default FormularioProveedor