<?php
if(isset($_POST["registrar"])){
    require_once(__DIR__. "/../../Models/Empleados.php");

    $empleados = new Empleados();
    $empleados->setId_persona($_POST["id_persona"]);
    $empleados->setId_constructora($_POST["id_constructora"]);
    $empleados->setUsuario($_POST["usuario"]);
    $empleados->setPassword($_POST["password"]);

    $empleados->insert_Empleados();

    echo "
    <script>
    document.location='../../../FRONTEND/Empleados/VerEmpleados.html'
    </script>";
}
?>