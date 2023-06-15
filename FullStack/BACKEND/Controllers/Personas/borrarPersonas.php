<?php
require_once(__DIR__. "/../../Models/Personas.php");

$persona = new Personas();

if (isset($_GET["id_persona"]) && isset($_GET["req"])) {
    if (isset($_GET["req"]) == "delete") {
        $persona -> getId_persona($_GET["id_persona"]);
        $persona -> delete_Personas();
    }
}
?>