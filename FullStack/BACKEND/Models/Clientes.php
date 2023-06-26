<?php

require_once("Pdo.php");

class Clientes extends ConexionPdo{
    
    public function __construct(){
        parent::__construct();
    }

    public function getAll_Clientes(){
        try {
            $sql="SELECT * FROM Clientes";
            $stm = $this-> dbCnx -> prepare($sql);
            $stm -> execute();
            return $stm -> fetchAll();
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    public function get_Cliente($id){
        try {
            $sql="SELECT * FROM Clientes WHERE id_cliente = :id";
            $stm = $this-> dbCnx -> prepare($sql);
            $stm->bindParam(":id",$id);
            $stm -> execute();
            return $stm -> fetchAll();
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    public function post_Cliente($idPersona){
        try {
            $sql="INSERT INTO Clientes(idetificador_persona) VALUES (:id_per)";
            $stm = $this-> dbCnx -> prepare($sql);
            $stm->bindParam(":id_per",$idPersona);;
            $stm->execute();
            return "Cliente Agregado";
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }
    
    public function put_Cliente($id,$idPersona){
        try {
            $stm = $this-> dbCnx -> prepare("UPDATE Clientes SET idetificador_persona=:id_per WHERE id_cliente = :id");
            $stm->bindParam(":id",$id);
            $stm->bindParam(":id_per",$idPersona);
            $stm -> execute();
            return "Cliente Actualizado";
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    public function delete_Cliente($id){
        try {
            $sql="DELETE FROM Clientes WHERE id_cliente = :id";
            $stm = $this-> dbCnx -> prepare();
            $stm->bindParam(":id",$id);
            $stm -> execute();
            return "Cliente Eliminado";
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }
}
?>