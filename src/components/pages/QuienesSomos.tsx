import Navbar from "../Navbar"
import Footer from "../Footer"

import icon_perfil from "../../assets/perfil.png"


import profesora1 from "../../assets/profe1.png"
import profesora2 from "../../assets/profe2.png"

const QuienesSomos: React.FC = () => {


    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-blue-300 px-6 pt-20">
                <h2 className="px-4 text-4xl text-center">Quienes Somos</h2>
                <div className="flex justify-around pt-16">
                    <div className="px-4">
                        <h3 className="text-2xl pt-10 pb-6 px-16">Sobre Happy Face</h3>
                        <p className="px-16">Happy Face cuenta con una trayectoria en el sector de la primera infancia por 19 años en la ciudad de Barranquilla, Fundado con el proposito de formar integralmente a niños y niñas</p>
                        <div className="text-center pt-20">
                            <button className="bg-red-600 hover:bg-red-900 text-white font-bold py-2 px-8 rounded-lg">
                                Contactenos
                            </button>
                        </div>
                    </div>
                    <div className="px-4">
                        <img className="rounded-xl" src="https://www.eichiquilin.com/web/wp-content/uploads/2016/06/chiquilin_como-saber-si-una-guarderia-es-buena.jpg" alt="jardin" />
                    </div>
                </div>

            </div>
            <div className="min-h-screen bg-slate-50 px-6 pt-32">
                <div className="flex">
                    <div className="rounded-md bg-amber-200 p-10 mx-2 w-1/3 ">
                        <h4 className="text-2xl">Nosotros</h4>
                        <p className="py-4">En nuestra institución, nos comprometemos a ofrecer una educación integral y de calidad.</p>
                        <ol className="list-disc px-5">
                            <li>Aprendizajes oportunos y pertinentes en todos los ámbitos del desarrollo pre-escolar.</li>
                            <li>Formación de individuos responsables y conscientes</li>
                            <li>Inculcar valores universales y promover habilidades y competencias.</li>
                            <li>Ambiente de aprendizaje inclusivo y seguro</li>
                        </ol>
                    </div>
                    <div className="rounded-md bg-lime-300 p-10 mx-2 w-1/3">
                        <h4 className="text-2xl">Mision</h4>
                        <p className="py-4">Ofrecer aprendizajes oportunos y pertinentes en todos los ambitos del desarrollo pre-escolar. Considerando asi ademas de la formacion curricular, lineamientos para la formacion de habitos sociales, adecuados para desarrollar un individuo responsable, consiente de si y de su entorno, con una sensibilidad posible de desarrollar y practicar las distintas etapas de la vida.</p>
                    </div>
                    <div className="rounded-md bg-teal-300 p-10 mx-2 w-1/3 ">
                        <h4 className="text-2xl text">Vision</h4>
                        <p className="py-4">Ser reconocidos, como establecimiento que involucra una propuesta educativa basada en la formacion de personas con valores universales, en concordancia al desarrollo de habilidades y competencias, promoviendo la autonomia de todos nuestros estudiantes.</p>
                    </div>
                </div>
            </div>
            <div className="min-h-screen bg-blue-400 px-6 pt-20">
                <h3 className="text-4xl text-center">Conoce nuestro equipo</h3>
                <div className="flex pt-16 py-14">

                    <div className="rounded-md bg-cyan-50 p-4 mx-2 w-1/3 mx-14 overflow-hidden shadow-lg">
                        <div className="py-4">
                            <img className="w-40 mx-auto" src={icon_perfil} alt="foto" />
                        </div>
                        <h3>Claudia Novoa Alvarez</h3>
                        <h4>Rectora</h4>
                        <p className="text-justify">Licenciada en lenguas modernas, egresada de la Universidad del Atlantico, se ha desempeñado por mas de 30 años como docente de diferentes grados de escolaridad</p>
                    </div>

                    <div className="rounded-md bg-cyan-50 p-4 mx-2 w-1/3 mx-14">
                        <div className="py-4">
                            <img className="w-40  mx-auto rounded-md" src={profesora2} alt="foto" />
                        </div>
                        <h3>Ana Anillo</h3>
                        <h4>Docente</h4>
                        <p className="text-justify">Licenciada en lenguas modernas, egresada de la Universidad del Atlantico, se ha desempeñado por mas de 30 años como docente de diferentes grados de escolaridad</p>
                    </div>

                    <div className="rounded-md bg-cyan-50 p-4 mx-2 w-1/3 mx-14">
                        <div className="py-4">
                            <img className="w-40 mx-auto rounded-md" src={profesora1} alt="foto" />
                        </div>
                        <h3>Sonia Anillo</h3>
                        <h4>Docente</h4>
                        <p className="text-justify">Licenciada en lenguas modernas, egresada de la Universidad del Atlantico, se ha desempeñado por mas de 30 años como docente de diferentes grados de escolaridad</p>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default QuienesSomos