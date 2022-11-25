import FormularioProveedor from "../layout/FormularioProveedor"
import FormularioProducto from "../layout/FormularioProducto"
import FormularioCliente from "./FormularioCliente"


const Main =()=>{
    return(
        <section className="section">
          <FormularioProveedor/>
          <FormularioProducto/>
          <FormularioCliente/>
          
        </section>
    )
}
export default Main 