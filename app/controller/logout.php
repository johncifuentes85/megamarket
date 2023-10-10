<?php
session_start();
if ($_SESSION["s_usuario"] === null) {
    header("Location: ../index.php");
}
error_reporting(0);

session_start();
unset($_SESSION["s_usuario"]);
session_destroy();
header("Location: ../../index");
?>