<?php
function insert_Personas($data){
    if(isset($data["registrar"])){
        require_once(__DIR__. "/../../Models/Personas.php");

        $personas = new Personas();
        $personas->setNombre($data["nombre"]);
        $personas->setTelefono($data["telefono"]);
        $personas->setSexo($data["sexo"]);
        $personas->setDireccion($data["direccion"]);
        $personas->insert_Personas();
    }
}
?>