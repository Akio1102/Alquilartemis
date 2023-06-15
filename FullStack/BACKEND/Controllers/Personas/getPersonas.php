<?php
require_once(__DIR__."/../../Models/Personas.php");
$data = new Personas();
$all = $data->get_Personas();
echo json_encode($all);
?>