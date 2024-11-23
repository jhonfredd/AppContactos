import React, { useState } from 'react';
import Contacto from './controller/Contacto';
const App: React.FC = () => {
    const [contactos, setContactos] = useState<Contacto[]>([]);
    const [nombre, setNombre] = useState<string>('');
    const [telefono, setTelefono] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    // Función para agregar un contacto
    const agregarContacto = (e: React.FormEvent) => {
        e.preventDefault(); // Evita la recarga de la página cuando se envía el formulario
        
        if (!validarEmail(email) || !validarTelefono(telefono)) {
            alert('Por favor, ingresa un email o teléfono válidos.');
            return;
        }
        
        const nuevoContacto: Contacto = { nombre, telefono, email };
        setContactos([...contactos, nuevoContacto]);
        setNombre('');
        setTelefono('');
        setEmail('');
    };

    // Función para eliminar un contacto
    const eliminarContacto = (email: string) => {
        setContactos(contactos.filter(contacto => contacto.email !== email));
    };

    // Validación del email
    const validarEmail = (email: string): boolean => {
        const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        return regex.test(email);
    };

    // Validación del teléfono
    const validarTelefono = (telefono: string): boolean => {
        const regex = /^[0-9]{10}$/;
        return regex.test(telefono);
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">Gestionar Contactos</h2>

            <form onSubmit={agregarContacto} className="flex flex-col sm:flex-row justify-center mb-4 space-y-4 sm:space-y-0 sm:space-x-4">
                <input
                    type="text"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg w-full sm:w-60"
                    required
                />
                <input
                    type="text"
                    placeholder="Teléfono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg w-full sm:w-60"
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg w-full sm:w-60"
                    required
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-full sm:w-auto"
                >
                    Agregar Contacto
                </button>
            </form>

            {/* Lista de Contactos */}
            <div className="space-y-4">
                {contactos.map((contacto, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md"
                    >
                        <Contacto
                            nombre={contacto.nombre}
                            telefono={contacto.telefono}
                            email={contacto.email}
                        />
                        <button
                            onClick={() => eliminarContacto(contacto.email)}
                            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                        >
                            Eliminar
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
