import Navbar from "../Navbar"
import Footer from "../Footer"
import CardNiveles from "../CardNiveles";

import icon_parvulo from "../../assets/parvulo.png"
import icon_prejardin from "../../assets/pre-jardin.png"
import icon_jardin from "../../assets/jardin.png"
import icon_transicion from "../../assets/transicion.png"

import foto1 from "../../assets/foto1.jpg"
import foto2 from "../../assets/foto2.webp"
import foto3 from "../../assets/foto3.webp"

interface Nivel {
    img: string;
    title: string;
    description: string;
    color: string,
}

const Niveles: React.FC = () => {

    const niveles: Nivel[] = [
        {
            img: icon_parvulo,
            title: "Parvulo",
            description: "En esta etapa se acompañan a los niños y las niñas de 1 a 2 años y medio de edad en el desarrollo de su autonomía que permita adquirir confianza en el desarrollo de habilidades propias de la edad. En esta etapa se realiza especial énfasis aprendizajes asociados a compartir con otros y a comprender pequeñas normas de convivencia.",
            color: "bg-amber-200",
        },
        {
            img: icon_prejardin,
            title: "Pre-Jardin",
            description: "En esta etapa se acompañan a los niños y las niñas desde los 2 y medio hasta los 3 y medio años de edad, se caracteriza por la exploración de su contexto a partir del juego y propuestas inmersivas que permitan el desarrollo de su lenguaje tanto oral como escrito en el que pasan del garabateo hacia el “dibujo con significado” y las artes plásticas se convierten en actividades divertidas y de creación cotidiana.",
            color: "bg-lime-300",
        },
        {
            img: icon_jardin,
            title: "Jardin",
            description: "En esta etapa se acompañan a los niños y las niñas desde los 3 y medio hasta los 4 años de edad con estrategias que potencian su pensamiento creativo a partir de espacios y situaciones simuladas para la construcción de sus aprendizajes, como el reconocimiento de símbolos que se convierten en palabras y ejercicios de agrupar y desagrupar elementos para potenciar el pensamiento matemático.",
            color: "bg-teal-300",
        },
        {
            img: icon_transicion,
            title: "Transicion",
            description: "En esta etapa se acompañan a los niños y las niñas de 5 años de edad en la construcción de su lengua escrita a partir del método subjetivo, los proyectos inmersivos favorecen las interacciones, autonomía, exploraciones, curiosidad y comunicación que potencian sus dimensiones de desarrollo. Como este proceso formativo corresponde al grado obligatorio, se hace especial énfasis en la construcción de elementos para el tránsito exitoso hacia la educación básica primaria.",
            color: "bg-indigo-400",
        },
    ]

    return (
        <div>
            <Navbar />
            <div className="min-h-screen  px-6 pt-20">
                <h2 className="text-center pb-8 text-4xl">Niveles educativos de Happy Face</h2>
                <div className="flex flex-col justify-around">
                    {
                        niveles.map((nivel) => (
                            <CardNiveles nivel={nivel} />
                        ))
                    }
                </div>
            </div>

            <div className="min-h-screen  px-6 pt-16">
                <h3 className="text-4xl text-center pb-8">Galeria de nuestra guarderia</h3>
                <div className="flex flex-wrap">
                    <div className="w-1/4 p-2">
                        <img className="w-full h-full object-cover" src={foto1} alt="1" />
                    </div>
                    <div className="w-1/4 p-2">
                        <img className="w-full h-full object-cover" src={foto2} alt="2" />
                    </div>
                    <div className="w-1/4 p-2">
                        <img className="w-full h-full object-cover" src={foto3} alt="3" />
                    </div>
                    <div className="w-1/4 p-2">
                        <img className="w-full h-full object-cover" src={foto1} alt="1" />
                    </div>
                    <div className="w-1/4 p-2">
                        <img className="w-full h-full object-cover" src={foto1} alt="1" />
                    </div>
                    <div className="w-1/4 p-2">
                        <img className="w-full h-full object-cover" src={foto2} alt="2" />
                    </div>
                    <div className="w-1/4 p-2">
                        <img className="w-full h-full object-cover" src={foto3} alt="3" />
                    </div>
                    <div className="w-1/4 p-2">
                        <img className="w-full h-full object-cover" src={foto2} alt="1" />
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Niveles