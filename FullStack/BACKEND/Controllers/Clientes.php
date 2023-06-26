<?php
require_once("../Models/Clientes.php");

header("Content-Type: application/json");

$clientes = new Clientes();

$body = json_decode(file_get_contents("php://input"), true);

switch ($_GET["op"]) {
    case 'GetAll':
        $data = $clientes->getAll_Clientes();
        echo json_encode($data);
        break;

    case 'GetId':
        $data = $clientes->get_Cliente($_GET["id"]);
        echo json_encode($data);
        break;

    case 'Insert':
        $data = $clientes->post_Cliente($body["idetificador_persona"]);
        echo json_encode($data);
        break;

    case 'Update':
        $data = $clientes->put_Cliente($body["id_cliente"],$body["idetificador_persona"]);
        echo json_encode($data);
        break;
    
    case 'Delete':
        $data = $clientes->delete_Cliente($body["id_cliente"]);
        echo json_encode($data);
        break;
    
    default:
        echo json_encode("EndPoint Invalid");
        break;
}
?>