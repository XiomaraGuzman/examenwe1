import IconoInstagram from "./IconoInstagram";
import IconoFacebook from "./IconoFacebook";
import IconoWhatsApp from "./IconoWhatsApp";
const Footer =() =>{
    return(
        <section className="redes">
            <nav className="iconos">
            <span class="face"><IconoFacebook/></span>
            <span class="insta"><IconoInstagram/></span>
            <span class="whats"><IconoWhatsApp/></span>
            </nav>
        </section>

    );
}
export default Footer