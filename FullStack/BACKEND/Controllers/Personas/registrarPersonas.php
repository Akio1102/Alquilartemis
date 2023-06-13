<?php
header("Content-Type: application/json");

$jsonData = file_get_contents('php://input');

$data = json_decode($jsonData, true);

if(isset($data["registrar"])){
    require_once(__DIR__. "/../../Models/Personas.php");

    $personas = new Personas();
    $personas->setNombre($data["nombre"]);
    $personas->setTelefono($data["telefono"]);
    $personas->setSexo($data["sexo"]);
    $personas->setDireccion($data["direccion"]);

    $personas->insert_Personas();

    // echo "
    // <script>
    // document.location='../../../FRONTEND/Personas/VerPersonas.html'
    // </script>";
}
?>