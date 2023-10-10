<?php
//  class Connection{
//      public static function connect(){
//          define('servidor','localhost');
//          define('nombre_bd','megamarket');
//          define('usuario','root');
//          define('password','');     
//          $opciones = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8');
         
//          try{
//             $connection = new PDO("mysql:host=".servidor.";dbname=".nombre_bd, usuario, password, $opciones);             
//             return $connection; 
//          }catch (Exception $e){
//              die("El error de Conexión es :".$e->getMessage());
//          }         
//      }     
//  }


class DatabaseConnection {
    private $pdo;

    public function __construct() {
        // Archivo de configuración
        require_once 'credentials.php';

        // Cadena de conexión PDO
        $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME;

        // Opciones de PDO
        $options = array(
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_EMULATE_PREPARES   => false,
            PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",
        );

        // Conexión a la base de datos
        try {
            $this->pdo = new PDO($dsn, DB_USER, DB_PASS, $options);
        } catch (PDOException $e) {
            die("Error de conexión: " . $e->getMessage());
        }
    }

    public function getConnection() {
        return $this->pdo;
    }
}
?>

