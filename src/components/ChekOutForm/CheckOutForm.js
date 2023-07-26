import { useState } from "react";


function CheckOutForm ({Onconfirm}) {

    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const dataUsuario = {
            nombre,telefono,email
        }
        Onconfirm(dataUsuario)
    }


    return (
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Nombre</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Ingrese su nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
            </div>
    
            <div className="field">
              <label className="label">Número de teléfono</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Ingrese su número de teléfono"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                />
              </div>
            </div>
    
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  placeholder="Ingrese su email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
    
            <div className="control">
              <button className="button is-primary">Enviar</button>
            </div>
          </form>
        </div>
      );
} 

export default CheckOutForm