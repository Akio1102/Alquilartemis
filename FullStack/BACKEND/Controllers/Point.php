<?php
header("Content-Type: application/json");
$body = json_decode(file_get_contents("php://input"), true);

    switch ($_GET["personas"]) {

        case 'GetPersonas':
            $data = require_once("Personas/getPersonas.php");
            return json_encode($data);
        break;

        case 'PostPersonas':
            require_once("Personas/registrarPersonas.php");
            insert_Personas($body);
        break;

        case 'UpdatePersonas':
            require_once("Personas/registrarPersonas.php");
            insert_Personas($body);
        break;

        case 'DeletePersonas':
            require_once("Personas/registrarPersonas.php");
            insert_Personas($body);
        break;
    }
?>