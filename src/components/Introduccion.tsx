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
                        <h2 className="text-2xl pt-10 pb-6 px-16">Jardin Infantil Happy Face</h2>
                        <p className="px-16">La propuesta educativa del Jardín Infantil Melodías se sustenta en un modelo pedagógico fundamentado desde la pedagogía del amor para formar niños y niñas con capacidad de ser felices y que aporten a la construcción de relaciones armoniosas. Cuenta con el diseño de proyectos lúdicos pedagógicos inmersivos que potencian la capacidad de asombro en los niños y las niñas para el desarrollo del pensamiento creativo.</p>
                    </div>
                    <div className="px-4 w-1/2">
                        <img className="rounded-xl" src="https://www.eichiquilin.com/web/wp-content/uploads/2016/06/chiquilin_como-saber-si-una-guarderia-es-buena.jpg" alt="jardin" />
                    </div>
                </div>

            </div>

            <div className="min-h-screen/2  px-6">
                <div className="flex py-12 justify-center">
                    <div className="w-1/4 h-40 p-2 bg-indigo-400 mx-6 flex flex-col items-center justify-center rounded-md">
                        <h3 className="text-center">20</h3>
                        <p className="text-center">Años de experiencia</p>
                    </div>
                    <div className="w-1/4 p-2 bg-indigo-400 mx-6 flex flex-col items-center justify-center rounded-md">
                        <h3 className="text-center">440+</h3>
                        <p className="text-center">Estudiantes felices</p>
                    </div>
                    <div className="w-1/4 p-2 bg-indigo-400 mx-6 flex flex-col items-center justify-center rounded-md">
                        <h3 className="text-center">100+</h3>
                        <p className="text-center">Graduados</p>
                    </div>
                </div>
            </div>


            <div className="min-h-screen  bg-blue-300 px-6 pt-20">
                <h2 className="px-4 text-4xl text-center">Fundamentos del modelo pedagogico</h2>
                <p></p>
                <div className="flex flex-col">
                    <div className="flex py-12">
                        <div className="flex w-1/2 px-14 items-center">
                            <img className="w-20 h-20 mr-6" src={icon_inclusion} alt="" />
                            <div>
                                <h4 className="text-xl">Inclusion</h4>
                                <p className="text-justify"> Se fomenta un ambiente inclusivo donde todos los niños y niñas, independientemente de sus habilidades, características o circunstancias individuales, se sientan valorados, respetados y aceptados, promoviendo la diversidad y la equidad. </p>
                            </div>
                        </div>
                        <div className="flex w-1/2 px-14 items-center">
                            <img className="w-20 h-20 mr-6" src={icon_lenguaje} alt="" />
                            <div>
                                <h4 className="text-xl">Lenguaje y comunicacion</h4>
                                <p className="text-justify">  Se estimula el desarrollo del lenguaje y la comunicación en los niños y niñas a través de actividades que promuevan la expresión oral, la comprensión auditiva, la lectura, la escritura y el uso de otros medios de comunicación, facilitando así su integración en el mundo social y académico. </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="flex w-1/2 px-14 items-center">
                            <img className="w-20 h-20 mr-6" src={icon_seguridad} alt="" />
                            <div>
                                <h4 className="text-xl">Seguridad</h4>
                                <p className="text-justify"> Se prioriza la seguridad física y emocional de los niños y niñas, creando un ambiente libre de riesgos y amenazas donde puedan desarrollarse de manera segura y confiada.</p>
                            </div>
                        </div>
                        <div className="flex w-1/2 px-14 items-center">
                            <img className="w-20 h-20 mr-6" src={icon_linguistica} alt="" />
                            <div>
                                <h4 className="text-xl">Inmersion linguistica</h4>
                                <p className="text-justify"> Se ofrece un ambiente de inmersión lingüística en inglés, donde los niños y niñas tienen la oportunidad de escuchar y usar el idioma de manera natural y significativa en situaciones cotidianas, promoviendo así su adquisición y desarrollo del inglés como segunda lengua. </p>
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