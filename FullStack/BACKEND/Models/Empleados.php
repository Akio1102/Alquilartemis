<?php

require_once("Pdo.php");

class Empleados extends ConexionPdo{
    
    protected $id_empleado;
    protected $id_persona;
    protected $usuario;
    protected $password;
    protected $id_constructora;

    public function __construct($id_empleado=0,$id_persona= 0, $usuario="",$password= "", $id_constructora=0){
        $this->id_empleado = $id_empleado;
        $this->id_persona = $id_persona;
        $this->usuario = $usuario;
        $this->password = $password;
        $this->id_constructora = $id_constructora;
        parent::__construct();
    }
    
    //Getters
    public function getId_empleado(){
        return $this->id_empleado;
    }

    public function getId_persona(){
        return $this->id_persona;
    }

    public function getUsuario(){
        return $this->usuario;
    }

    public function getPassword(){
        return $this->password;
    }

    public function getId_constructora(){
        return $this->id_constructora;
    }

    //Setters
    public function setId_empleado($id_empleado){
        $this->id_empleado =$id_empleado;
    }

    public function setId_persona($id_persona){
        $this->id_persona =$id_persona;
    }

    public function setUsuario($usuario){
        $this->usuario =$usuario;
    }

    public function setPassword($password){
        $this->password =$password;
    }

    public function setId_constructora($id_constructora){
        $this->id_constructora =$id_constructora;
    }

    public function get_Personas(){
        try {
            $stm = $this-> dbCnx -> prepare("SELECT id_persona,nombre FROM Personas");
            $stm -> execute();
            return $stm -> fetchAll();
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    public function get_Contructoras(){
        try {
            $stm = $this-> dbCnx -> prepare("SELECT id_constructora,nombre FROM Constructoras");
            $stm -> execute();
            return $stm -> fetchAll();
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    public function insert_Empleados(){
        try {
            $stm = $this-> dbCnx -> prepare("INSERT INTO Empleados(id_persona,usuario,password,id_constructora) VALUES (:idPers,:user,:pass,:idCons)");
            $stm->bindParam(":idPers",$this->id_persona);
            $stm->bindParam(":user",$this->usuario);
            $stm->bindParam(":pass",MD5($this->password));
            $stm->bindParam(":idCons",$this->id_constructora);
            $stm->execute();
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    public function get_Empleados(){
        try {
            $sql = "SELECT Empleados.id_empleado, Personas.nombre, Personas.telefono, Empleados.usuario, Constructoras.nombre AS nombre_constructora FROM Empleados INNER JOIN Personas ON Empleados.id_persona = Personas.id_persona INNER JOIN Constructoras ON Empleados.id_constructora = Constructoras.id_constructora;
            ";
            $stm = $this-> dbCnx -> prepare($sql);
            $stm -> execute();
            return $stm -> fetchAll();
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }
    
    public function delete_Empleados(){
        try {
            $stm = $this-> dbCnx -> prepare("DELETE FROM Empleados  WHERE id_persona = :id");
            $stm->bindParam(":id",$this->id_persona);
            $stm -> execute();
            return $stm -> fetchAll();
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }
    
/*     public function selectOne(){
        try {
            $stm = $this-> dbCnx -> prepare("SELECT * FROM Personas WHERE id_persona = :id");
            $stm->bindParam(":id",$this->id_persona);
            $stm -> execute();
            return $stm -> fetchAll();
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }
 */
    public function update_Empleados(){
        try {
            $stm = $this-> dbCnx -> prepare("UPDATE Empleados  SET nombre=:nom ,telefono=:tel , sexo=:sex , direccion=:dire
            WHERE id_persona = :id");
            $stm->bindParam(":id",$this->id_persona);
            $stm->bindParam(":nom",$this->nombre);
            $stm->bindParam(":tel",$this->telefono);
            $stm->bindParam(":sex",$this->sexo);
            $stm->bindParam(":dire",$this->direccion);
            $stm -> execute();
            return $stm -> fetchAll();
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }
}
/* $xd = new Personas();
print_r($xd); */
?>