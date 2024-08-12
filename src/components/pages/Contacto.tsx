import Navbar from "../Navbar"
import Footer from "../Footer"
import { Link } from "react-router-dom"

import icon_facebook from "../../assets/facebook.png"

const Contacto: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen  px-6 pt-20">
                <h2 className="text-4xl text-center pb-8">Contacto</h2>
                <p className="px-5">Se parte de un jardin innovador e integral</p>
                <div className="flex">
                    <div className="w-1/2">
                        <form action="" className="flex flex-col  p-5 space-y-4">
                            <h3 className="text-2xl">Escribenos</h3>
                            <input type="text" placeholder="Nombre" className="p-2 border border-gray-300 rounded-md" />
                            <input type="text" placeholder="Teléfono" className="p-2 border border-gray-300 rounded-md" />
                            <input type="email" placeholder="Correo Electrónico" className="p-2 border border-gray-300 rounded-md" />
                            <textarea placeholder="Mensaje" className="p-2 border border-gray-300 rounded-md"></textarea>
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" name="" id="" className="border border-gray-300 rounded-md" />
                                <label htmlFor="" className="text-sm">Acepto la política de privacidad</label>
                            </div>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">Enviar</button>
                        </form>
                    </div>

                    <div className=" bg-blue-300 w-1/2 p-4 rounded-2xl m-10">
                        <div className="flex h-1/2">
                            <div className="w-1/2  flex flex-col justify-center items-center">
                                <h5 className="text-xl">Nuestro horario</h5>
                                <p>Lunes - Viernes</p>
                                <p>07:30 am - 11:45 am</p>
                            </div>
                            <div className="w-1/2  flex flex-col justify-center items-center">
                                <h5 className="text-xl">Contactenos</h5>
                                <p>Telefono: 3201677</p>
                                <p>Email: jardinhappyface@gmail.com</p>
                            </div>

                        </div>

                        <div className="flex h-1/2">
                            <div className="w-1/2  flex flex-col justify-center items-center">
                                <h5 className="text-xl">Ubicacion</h5>
                                <p>Carrera 38 n° 85-07</p>
                                <p>Barrio las Estrellas, Barranquilla</p>
                            </div>
                            <div className="w-1/2  flex flex-col justify-center items-center">
                                <h5 className="text-xl">Siguenos</h5>
                                <div className="flex">
                                    <Link to=""><img src={icon_facebook} alt="icon-facebook" className="w-8"/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="min-h-screen pt-20">
            <h2 className="text-4xl text-center pb-8">Nuestra Ubicacion</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11798.804676293648!2d-74.83504957130027!3d10.981675816433157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42ce13e4fe8b9%3A0x6e0d35678e706f5e!2sCra.%2038%20%2385-07%2C%20Suroccidente%2C%20Barranquilla%2C%20Atl%C3%A1ntico!5e0!3m2!1sen!2sco!4v1715282071686!5m2!1sen!2sco" width="100%" height="450"  loading="lazy"></iframe>
            </div>
            <Footer />
        </div>
    )
}

export default Contacto