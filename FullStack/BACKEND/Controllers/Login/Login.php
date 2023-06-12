<?php
session_start();
if (isset($_POST["login"])) {
    require_once("../../Models/Login.php");

    $credenciales = new Login();

    $credenciales->setUsuario($_POST["usuario"]);
    $credenciales->setPassword($_POST["password"]);
    
    $login = $credenciales->login();
    
    if ($login) {
        header("Location: ../../../FRONTEND/Personas/VerPersonas.html");
    }else{
        echo "
        <script> alert('Password/Email Invalidos');
        document.location='../../../FRONTEND/index.html'
        </script>";
    }

}
?>