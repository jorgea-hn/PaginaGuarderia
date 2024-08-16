import Navbar from "../Navbar"
import Footer from "../Footer"
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../../../firebaseConfig";


function Admisiones() {

    const [formData, setFormData] = useState({
        nombre: "",
        fechaNacimiento: "",
        nombreMadre: "",
        nombrePadre: "",
        telefono: "",
        aceptaPolitica: false,
    });

    const [enviado, setEnviado] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const formularioRef = collection( db, "formulario");
            await addDoc(formularioRef, formData);
            console.log("Datos guardados en Firebase");
            setEnviado(true); // Marca el formulario como enviado con éxito
            setFormData({
                nombre: "",
                fechaNacimiento: "",
                nombreMadre: "",
                nombrePadre: "",
                telefono: "",
                aceptaPolitica: false,
            });
        } catch (error) {
            console.error("Error al guardar los datos:", error);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="flex justify-center pt-20">
                <form onSubmit={handleSubmit} className="space-y-4 w-2/3 ">
                    <h3 className="text-lg font-semibold">Formulario</h3>
                    {enviado && (
                        <div className="text-green-600">Formulario enviado con éxito</div>
                    )}
                    <div>
                        <label htmlFor="nombre" className="block">
                            Nombre*
                        </label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Nombre completo"
                            required
                            value={formData.nombre}
                            onChange={handleChange}
                            className="border rounded-md px-2 py-1 w-full" />
                    </div>
                    <div>
                        <label htmlFor="fechaNacimiento" className="block">
                            Fecha de nacimiento*
                        </label>
                        <input
                            type="date"
                            id="fechaNacimiento"
                            name="fechaNacimiento"
                            required
                            value={formData.fechaNacimiento}
                            onChange={handleChange}
                            className="border rounded-md px-2 py-1 w-full" />
                    </div>
                    <div>
                        <label htmlFor="nombreMadre" className="block">
                            Nombre madre*
                        </label>
                        <input
                            type="text"
                            id="nombreMadre"
                            name="nombreMadre"
                            placeholder="Nombre completo"
                            required
                            value={formData.nombreMadre}
                            onChange={handleChange}
                            className="border rounded-md px-2 py-1 w-full" />
                    </div>
                    <div>
                        <label htmlFor="nombrePadre" className="block">
                            Nombre padre*
                        </label>
                        <input
                            type="text"
                            id="nombrePadre"
                            name="nombrePadre"
                            placeholder="Nombre completo"
                            required
                            value={formData.nombrePadre}
                            onChange={handleChange}
                            className="border rounded-md px-2 py-1 w-full" />
                    </div>
                    <div>
                        <label htmlFor="telefono" className="block">
                            Teléfono
                        </label>
                        <input
                            type="text"
                            id="telefono"
                            name="telefono"
                            placeholder="Teléfono de contacto"
                            value={formData.telefono}
                            onChange={handleChange}
                            className="border rounded-md px-2 py-1 w-full" />
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="aceptaPolitica"
                            name="aceptaPolitica"
                            checked={formData.aceptaPolitica}
                            onChange={handleChange}
                            className="mr-2" />
                        <label htmlFor="aceptaPolitica" className="text-sm">
                            Acepto la política de privacidad
                        </label>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                        Enviar
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Admisiones