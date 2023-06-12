<?php
require_once("../../Models/Empleados.php");
$data = new Empleados();
$all = $data->get_Contructoras();
echo json_encode($all);
?>