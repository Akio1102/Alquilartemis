<?php

require_once("Pdo.php");

class Login extends ConexionPdo{

    private $usuario;
    private $password;

    public function __construct($id = 0,$usuario="", $password = ""){
        $this->usuario = $usuario;
        $this->password = $password;
        parent::__construct();
    }

    //Getters
    public function getUsuario(){
      return $this->usuario;
    }

    public function getPassword(){
      return $this->password;
    }

    //Setters
    public function setUsuario($usuario){
      $this->usuario = $usuario;
    }

    public function setPassword($password){
      $this->password = $password;
    }
    
    public function login(){
      try {
        $sql = "SELECT * FROM Empleados WHERE usuario = :usuario AND password = :password";
        $stm = $this-> dbCnx -> prepare($sql);
        $stm->bindParam(":usuario",$this->usuario);
        $stm->bindParam(":password",md5($this->password));
        $stm->execute();
        $user = $stm -> fetchAll();
        if (count($user)>0) {
          session_start();
          $_SESSION["usuario"] = $user[0]["usuario"];
          $_SESSION["password"] = $user[0]["password"];
          return true;
        }else{
          false;
        }
      } catch (Exception $e) {
        return $e->getMessages();
      }
    }
}
?>