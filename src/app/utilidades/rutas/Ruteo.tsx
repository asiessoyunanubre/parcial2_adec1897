import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { Registrar } from "../../componentes/direccionamientos/registrarproducto";
import { Listar } from "../../componentes/direccionamientos/listarproducto";
import { Administrar } from "../../componentes/direccionamientos/adminproducto";
import { Actualizar } from "../../componentes/direccionamientos/actualizarproducto";
import { Quienes } from "../../componentes/otros/Quienes";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

export const Ruteo = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Inicio/>}/>

          <Route path="/registrar" element={<Registrar/>}/>
          <Route path="/listar" element={<Listar/>}/>
          <Route path="/admin" element={<Administrar/>}/>

          <Route path="/actu:codigo" element={<Actualizar/>}/>

          <Route path="/quienes" element={<Quienes/>}/>

          <Route path="*" element={<NoEncontrado/>}/>
            
        </Routes>
    )
}