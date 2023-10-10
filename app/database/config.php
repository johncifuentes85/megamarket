<?php
// if (!isset($_SESSION["s_usuario"]) || empty($_SESSION["s_usuario"])) {
//     header("Location: ../index.php");
//     exit(); // Asegura que el script se detiene después de la redirección
// }
// error_reporting(0);

// Clase de conexión
require_once '../database/connection.php';
// Instancia de la clase DatabaseConnection
$databaseConnection = new DatabaseConnection();
// Obtener la conexión PDO
$pdo = $databaseConnection->getConnection();

require_once '../database/sql_security.php';

date_default_timezone_set("America/Bogota");
setlocale(LC_TIME, "es_CO");
$today =  date("Y-m-d");
$hour = date("H:i:s");
$date_c =  date(DATE_RFC2822);
$date2 =  date("Y-m-d", strtotime("+3 day"));
$date3 =  date("Y-m-d", strtotime("-30 day"));

?>
