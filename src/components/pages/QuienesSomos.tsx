import Navbar from "../Navbar"
import Footer from "../Footer"

import icon_perfil from "../../assets/perfil.png"


import profesora1 from "../../assets/profe1.jpg"
import profesora2 from "../../assets/profe2.png"

const QuienesSomos: React.FC = () => {


    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-blue-300 px-6 pt-20">
                <h2 className="px-4 text-4xl text-center">Quienes Somos</h2>
                <div className="flex justify-around pt-16">
                    <div className="px-4">
                        <h3 className="text-2xl pt-10 pb-6 px-16">Sobre Pasitos Felices</h3>
                        <p className="px-16">Jardín Infantil Pasitos Felices cuenta con una trayectoria de 15 años en el sector de la primera infancia en la ciudad de Barranquilla. Fue fundado con el propósito de formar integralmente a niños y niñas, promoviendo su desarrollo en un entorno lleno de amor y aprendizaje.</p>
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
                        <p className="py-4">En Jardín Infantil Pasitos Felices, nos comprometemos a ofrecer una educación integral y de calidad. Nuestro objetivo es proporcionar:</p>
                        <ol className="list-disc px-5">
                            <li>Aprendizajes oportunos y pertinentes en todos los ámbitos del desarrollo preescolar.</li>
                            <li>Formación de individuos responsables y conscientes.</li>
                            <li>Inculcar valores universales y promover habilidades y competencias.</li>
                            <li>Un ambiente de aprendizaje inclusivo y seguro.</li>
                        </ol>
                    </div>
                    <div className="rounded-md bg-lime-300 p-10 mx-2 w-1/3">
                        <h4 className="text-2xl">Misión</h4>
                        <p className="py-4">Ofrecemos aprendizajes oportunos y pertinentes en todos los ámbitos del desarrollo preescolar. Además de la formación curricular, consideramos lineamientos para la formación de hábitos sociales adecuados, desarrollando individuos responsables, conscientes de sí mismos y de su entorno, con la sensibilidad necesaria para afrontar y practicar las distintas etapas de la vida.</p>
                    </div>
                    <div className="rounded-md bg-teal-300 p-10 mx-2 w-1/3 ">
                        <h4 className="text-2xl text">Visión</h4>
                        <p className="py-4">Queremos ser reconocidos como un establecimiento que proporciona una propuesta educativa basada en la formación de personas con valores universales, en concordancia con el desarrollo de habilidades y competencias, promoviendo la autonomía de todos nuestros estudiantes.</p>
                    </div>
                </div>
            </div>
            <div className="min-h-screen bg-blue-400 px-6 pt-20">
                <h3 className="text-4xl text-center">Conoce nuestro equipo</h3>
                <div className="flex pt-16 py-14">

                    <div className="rounded-md bg-cyan-50 p-4 mx-2 w-1/3 mx-14 overflow-hidden shadow-lg">
                        <div className="py-4">
                            <img className="w-40 mx-auto" src={profesora1} alt="foto" />
                        </div>
                        <h3>Laura Rodríguez</h3>
                        <h4>Coordinadora de Educación Infantil</h4>
                        <p className="text-justify">Licenciada en Educación Infantil, egresada de la Universidad de los Andes. Con más de 15 años de experiencia en el sector educativo, Laura se especializa en la implementación de metodologías innovadoras y lúdicas que favorecen el aprendizaje temprano. Su enfoque está en el desarrollo emocional y social de los niños, creando un entorno de aprendizaje que estimula su curiosidad y creatividad.</p>
                    </div>

                    <div className="rounded-md bg-cyan-50 p-4 mx-2 w-1/3 mx-14">
                        <div className="py-4">
                            <img className="w-40  mx-auto rounded-md" src={profesora1} alt="foto" />
                        </div>
                        <h3>María Gómez</h3>
                        <h4>Especialista en Desarrollo Infantil</h4>
                        <p className="text-justify">Psicóloga Infantil con un posgrado en Psicopedagogía, formada en la Universidad Nacional. Con 12 años de experiencia en el trabajo con niños en edad preescolar, María se enfoca en apoyar el desarrollo integral de los pequeños a través de actividades que promuevan habilidades cognitivas, emocionales y sociales. Su enfoque individualizado permite atender las necesidades específicas de cada niño, facilitando su crecimiento en un ambiente seguro y afectuoso.</p>
                    </div>

                    <div className="rounded-md bg-cyan-50 p-4 mx-2 w-1/3 mx-14">
                        <div className="py-4">
                            <img className="w-40 mx-auto rounded-md" src={profesora1} alt="foto" />
                        </div>
                        <h3>Elena Martínez</h3>
                        <h4>Docente de Lenguaje y Comunicación</h4>
                        <p className="text-justify">Licenciada en Comunicación Infantil, graduada en la Universidad del Norte. Con 10 años de experiencia en la enseñanza de lenguaje y comunicación, Elena se dedica a fortalecer las habilidades lingüísticas de los niños a través de actividades interactivas y creativas. Su metodología se centra en la estimulación temprana del lenguaje, promoviendo la expresión oral y la comprensión auditiva en un entorno enriquecedor y divertido.</p>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default QuienesSomos