<?php
require_once '../database/config.php';

$f_product = clean_up((isset($_POST['f_product'])) ? $_POST['f_product'] : '');
$info_search_product = clean_up((isset($_POST['info_search_product'])) ? $_POST['info_search_product'] : '');
$id = clean_up((isset($_POST['id'])) ? $_POST['id'] : '');
$ref = clean_up((isset($_POST['ref'])) ? $_POST['ref'] : '');
$amount = clean_up((isset($_POST['amount'])) ? $_POST['amount'] : '');
$cost = clean_up((isset($_POST['cost'])) ? $_POST['cost'] : '');
$tax = clean_up((isset($_POST['tax'])) ? $_POST['tax'] : '');

try {
    switch ($f_product) {
        case 1:
            $query = "SELECT * FROM products";
            $result = $pdo->query($query);
            break;
        case 2:
            $query = "SELECT * FROM products WHERE CONCAT(product_name,' ', category) LIKE '%$info_search_product%'";
            $result = $pdo->query($query);
            break;
        case 3:
            $query = "SELECT products.id, products.ref, products.product_name, products.brand, products.category, products.description, products.specifications, products.sale_price, products.image, products.creation_date, products.creation_usser, SUM(inventories.amount) AS amount FROM products INNER JOIN inventories ON products.ref=inventories.ref WHERE products.id='$id'";
            $result = $pdo->query($query);
            break;
        case 4:
            $query = "INSERT INTO inventories(ref, amount, cost, tax, create_usser) VALUES ('$ref','$amount','$cost','$tax','BUY')";
            $result = $pdo->query($query);
            break;
        case 5:
            $query = "SELECT inventories.id, inventories.ref, SUM(inventories.amount) AS amount, inventories.cost, inventories.tax, inventories.create_date, inventories.create_usser, products.product_name, products.category FROM inventories INNER JOIN products ON inventories.ref = products.ref GROUP BY inventories.ref;";
            $result = $pdo->query($query);
            break;
        case 6:
            $query = "SELECT inventories.id, inventories.ref, inventories.amount, inventories.cost, inventories.tax, inventories.create_date, inventories.create_usser, products.product_name, products.category FROM inventories INNER JOIN products ON inventories.ref = products.ref WHERE inventories.create_usser = 'BUY'";
            $result = $pdo->query($query);
            break;
        case 7:
            $query = "SELECT * FROM products WHERE ref = '$ref'";
            $result = $pdo->query($query);
            break;
        case 8:
            $query = "INSERT INTO inventories(ref, amount, cost, tax, create_usser) VALUES ('$ref','$amount','$cost','$tax','ADMIN_TIENDA')";
            $result = $pdo->query($query);
            break;
    }

    if ($result) {
        $data = $result->fetchAll(PDO::FETCH_ASSOC);
        if ($data) {
            print json_encode($data, JSON_UNESCAPED_UNICODE);
        } else {
            echo "No se encontraron resultados.";
        }
    } else {
        echo "La consulta no se ejecutó correctamente.";
    }
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
