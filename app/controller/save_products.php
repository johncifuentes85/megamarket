<?php
require_once '../database/config.php';
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtén los datos del formulario
    $ref_product = $_POST["ref_product"];
    $product_name = $_POST["product_name_product"];
    $brand = $_POST["brand_product"];
    $category = $_POST["category_product"];
    $description = $_POST["description_product"];
    $specifications = $_POST["specifications_product"];
    $sale_price = $_POST["sale_price_product"];
    $image = $_FILES["image_product"]["name"];


    // Verifica si se ha subido un archivo correctamente
    if (isset($_FILES["image_product"]) && $_FILES["image_product"]["error"] == UPLOAD_ERR_OK) {
        $target_dir = "../../assets/img_product/"; // Directorio donde se guardarán las imágenes
        $target_file = $target_dir . basename($_FILES["image_product"]["name"]); // Ruta completa del archivo

        // Mueve el archivo subido al directorio de destino
        if (move_uploaded_file($_FILES["image_product"]["tmp_name"], $target_file)) {
         
            $query = "INSERT INTO products(ref, product_name, brand, category, description, specifications, sale_price, image) VALUES ('$ref_product','$product_name', '$brand','$category','$description','$specifications','$sale_price','$image')";
            $result = $pdo->query($query);

        header("Location: ../../view/dashboard");
        exit();

        } else {
            echo "Hubo un error al cargar la imagen.";
        }
    } else {
        echo "No se ha seleccionado ningún archivo o hubo un error en la carga de la imagen.";
    }
}
?>
