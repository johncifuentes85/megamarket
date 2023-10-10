<?php
require_once '../database/config.php';

$email = clean_up((isset($_POST['email'])) ? $_POST['email'] : '');
$password = clean_up((isset($_POST['password'])) ? $_POST['password'] : '');

try {
    $query = "SELECT * FROM usuarios WHERE usuario='$email' AND password=MD5('$password')";
    $result = $pdo->query($query);

    if ($result) {
        $data = $result->fetchAll(PDO::FETCH_ASSOC);
        session_start();
        $_SESSION["s_usuario"] = $email;
        $data = count($data);
        if ($data) {
            print json_encode($data, JSON_UNESCAPED_UNICODE);
        } else {
            echo "No se encontraron resultados.";
        }
    } else {
        $_SESSION["s_usuario"] = null;
        echo "La consulta no se ejecutó correctamente.";
    }
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
