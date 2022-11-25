const FormularioProducto =()=>{
    return(
        <section className="formularioproducto">
        <h5 className="tituloproducto ">Producto</h5>
    <input className="producto" type="text" placeholder="Nombre" />
    <input className="producto" type="text" placeholder="Sexo" />
    <input className="producto" type="text" placeholder="Referencia" />
    <input className="producto" type="text" placeholder="Tamaño" />
    <input className="producto" type="text" placeholder="Cantidad" />
    <input className="producto" type="text" placeholder="Descripcion " />
    <button>enviar</button>
   
    </section> 
    )
}
export default FormularioProducto