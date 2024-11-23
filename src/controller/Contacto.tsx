import React from 'react';

interface ContactoProps {
    nombre: string;
    telefono: string;
    email: string;
}

const Contacto: React.FC<ContactoProps> = ({ nombre, telefono, email }) => {
    return (
        <div className="contacto">
            <h5>{nombre}</h5>
            <p>{telefono}</p>
            <p>{email}</p>
        </div>
    );
}

export default Contacto;
