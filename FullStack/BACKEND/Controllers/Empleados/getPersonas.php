<?php
require_once("../../Models/Empleados.php");
$data = new Empleados();
$all = $data->get_Personas();
echo json_encode($all);
?>