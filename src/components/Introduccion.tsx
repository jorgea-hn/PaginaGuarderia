import img_intro from "../assets/intro.jpg"

import foto1 from "../assets/foto1.jpg"
import foto2 from "../assets/foto2.webp"
import foto3 from "../assets/foto3.webp"

import icon_inclusion from "../assets/icon-inclusion.png"
import icon_lenguaje from "../assets/icon-seguridad.png"
import icon_linguistica from "../assets/linguistica.png"
import icon_seguridad from "../assets/seguridad.png"


const Introduccion: React.FC = () => {
    return (
        <div>
            <div className="min-h-screen pt-16">
                <img className="w-full h-screen object-cover" src={img_intro} alt="" />
            </div>
            <div className="min-h-screen/2  px-6 pt-20 ">
                <h2 className="x-4 text-4xl text-center">Momentos de aprendizaje</h2>
                <div className="flex py-12">
                    <div className="w-1/4 p-2">
                        <img className="w-full h-full object-cover" src={foto1} alt="3" />
                    </div>
                    <div className="w-1/4 p-2">
                        <img className="w-full h-full object-cover" src={foto3} alt="3" />
                    </div>
                    <div className="w-1/4 p-2">
                        <img className="w-full h-full object-cover" src={foto2} alt="2" />
                    </div>
                    <div className="w-1/4 p-2">
                        <img className="w-full h-full object-cover" src={foto2} alt="2" />
                    </div>
                </div>
            </div>
            <div className="min-h-screen bg-blue-300 px-6 pt-20">
                <h2 className="px-4 text-4xl text-center">Bienvenidos</h2>
                <div className="flex justify-around pt-16">
                    <div className="px-4 w-1/2">
                        <h2 className="text-2xl pt-10 pb-6 px-16">Jardin Infantil Pasitos Felices</h2>
                        <p className="px-16 text-justify">La propuesta educativa del Jardín Infantil Pasitos Felices se basa en un modelo pedagógico fundamentado en la pedagogía del amor, con el objetivo de formar niños y niñas felices, capaces de construir relaciones armoniosas. Nuestro enfoque incluye proyectos lúdicos pedagógicos inmersivos, diseñados para potenciar la capacidad de asombro en los pequeños, fomentando el desarrollo del pensamiento creativo.
                        </p>
                    </div>
                    <div className="px-4 w-1/2">
                        <img className="rounded-xl" src="https://www.eichiquilin.com/web/wp-content/uploads/2016/06/chiquilin_como-saber-si-una-guarderia-es-buena.jpg" alt="jardin" />
                    </div>
                </div>

            </div>

            <div className="min-h-screen/2  px-6">
                <div className="flex py-12 justify-center">
                    <div className="w-1/4 h-40 p-2 bg-indigo-400 mx-6 flex flex-col items-center justify-center rounded-md">
                        <h3 className="text-center">15</h3>
                        <p className="text-center">Años de experiencia</p>
                    </div>
                    <div className="w-1/4 p-2 bg-indigo-400 mx-6 flex flex-col items-center justify-center rounded-md">
                        <h3 className="text-center">300+</h3>
                        <p className="text-center">Estudiantes felices</p>
                    </div>
                    <div className="w-1/4 p-2 bg-indigo-400 mx-6 flex flex-col items-center justify-center rounded-md">
                        <h3 className="text-center">74+</h3>
                        <p className="text-center">Graduados</p>
                    </div>
                </div>
            </div>


            <div className="min-h-screen  bg-blue-300 px-6 pt-20">
                <h2 className="px-4 text-4xl text-center">Fundamentos del modelo pedagógico</h2>
                <div className="flex flex-col">
                    <div className="flex py-12">
                        <div className="flex w-1/2 px-14 items-center">
                            <img className="w-20 h-20 mr-6" src={icon_inclusion} alt="" />
                            <div>
                                <h4 className="text-xl">Inclusión</h4>
                                <p className="text-justify"> Fomentamos un ambiente inclusivo en el que todos los niños y niñas, independientemente de sus habilidades, características o circunstancias individuales, se sientan valorados, respetados y aceptados. Promovemos la diversidad y la equidad, asegurando que cada niño se desarrolle en un entorno que celebra sus diferencias y fortalezas.</p>
                            </div>
                        </div>
                        <div className="flex w-1/2 px-14 items-center">
                            <img className="w-20 h-20 mr-6" src={icon_lenguaje} alt="" />
                            <div>
                                <h4 className="text-xl">Lenguaje y Comunicación</h4>
                                <p className="text-justify">Estimulamos el desarrollo del lenguaje y la comunicación a través de actividades diseñadas para fomentar la expresión oral, la comprensión auditiva, la lectura, la escritura, y el uso de diversos medios de comunicación. Esto facilita la integración de los niños en el mundo social y académico, proporcionando las bases para un aprendizaje continuo.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="flex w-1/2 px-14 items-center">
                            <img className="w-20 h-20 mr-6" src={icon_seguridad} alt="" />
                            <div>
                                <h4 className="text-xl">Seguridad</h4>
                                <p className="text-justify">Priorizamos la seguridad física y emocional de los niños y niñas, creando un entorno libre de riesgos y amenazas. Nuestro objetivo es que cada niño pueda desarrollarse de manera segura y confiada, sabiendo que está en un espacio protegido y lleno de cuidado.</p>
                            </div>
                        </div>
                        <div className="flex w-1/2 px-14 items-center">
                            <img className="w-20 h-20 mr-6" src={icon_linguistica} alt="" />
                            <div>
                                <h4 className="text-xl">Inmersión Lingüística</h4>
                                <p className="text-justify">Ofrecemos un ambiente de inmersión lingüística en inglés, brindando a los niños y niñas la oportunidad de escuchar y utilizar el idioma de manera natural y significativa en situaciones cotidianas. Esto promueve la adquisición y desarrollo del inglés como segunda lengua, preparando a los pequeños para un futuro globalizado.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className="min-h-screen/2  px-6 pt-20">
                <h2 className="px-4 text-4xl text-center">Testimonios</h2>
                <h3 className="text-center">Que dicen los padres de nuestro jardin</h3>
                <div className="flex py-14 justify-center">
                    <img src="" alt="foto1" />
                    <img src="" alt="foto2" />
                    <img src="" alt="foto3" />
                </div>
            </div>
        </div>
    )
}

export default Introduccion