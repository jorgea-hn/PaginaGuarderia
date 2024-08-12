import escudo from "../assets/escudo.png"
import icon_telefono from "../assets/telefono.png"
import icon_correo from "../assets/correo.png"
import icon_direccion from "../assets/direccion.png"

const Footer: React.FC = () => {
    return (
        <div className="flex justify-around bg-slate-50 h-60 p-8">
            <img className="w-40" src={escudo} alt="" />
            <div>
                <h3 className="text-center text-xl pb-4">Contacto</h3>
                <ul>
                    <li className="flex pt-2"><img className="w-6 mr-2" src={icon_telefono} alt="" /><span>3001231232</span> </li>
                    <li className="flex pt-2"><img className="w-6 mr-2" src={icon_correo} alt="" /><span>happyFace@gmail.com</span> </li>
                    <li className="flex pt-2"><img className="w-6 mr-2" src={icon_direccion} alt="" /><span>Cr 38 N 85-07</span> </li>
                </ul>
            </div>
            <div>
                <div>
                    <h3 className="pb-4">Unete al mejor jardin de infancia ahora</h3>
                    <button className="bg-red-600 hover:bg-red-900 text-white font-bold py-2 px-8 rounded-lg">
                    <a href="https://wa.me/3183748523" target="_blank">WhatsApp</a>
                    </button>
                </div>
                <div className="pt-8">
                    @Todos los derechos reservados Jardin Infatil Happy Face
                </div>

            </div>
        </div>
    )
}

export default Footer