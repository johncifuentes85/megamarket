<?php require_once "format/top_view_search.php" ?>

<section class="bg-light" id="section_categories">
    <div class="container py-5">
        <div class="row text-center py-3">
            <div class="col-lg-6 m-auto">
                <h1 class="h1">Explora Nuestras Categorías</h1>
                <p>
                    ¡Todo lo Que Necesitas en un Solo Lugar!
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-3 mb-3">
                <div class="card h-100" id="card_category">
                    <a href="#">
                        <img src="../assets/img/aseo.jpg" class="card-img-top" alt="..." id="img_category">
                    </a>
                    <div class="card-body" id="card-body_j">
                        <a href="#" class="h2 text-decoration-none text-dark">Implementos de aseo</a>
                        <!-- <p class="card-text mt-3">
                                Mantén tu hogar limpio y fresco con nuestros productos de limpieza de alta calidad. Desde detergentes hasta productos de cuidado personal, cuidamos de tu higiene y bienestar.
                            </p>                            -->
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-3 mb-3">
                <div class="card h-100" id="card_category">
                    <a href="#">
                        <img src="../assets/img/productos_lacteos.jpeg" class="card-img-top" alt="..." id="img_category">
                    </a>
                    <div class="card-body" id="card-body_j">
                        <a href="#" class="h2 text-decoration-none text-dark">Productos lacteos</a>
                        <!-- <p class="card-text mt-3">
                                Descubre productos lácteos frescos y deliciosos. Desde leche hasta yogur y queso, nuestros lácteos son una fuente de nutrición y sabor.
                            </p>                            -->
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-3 mb-3">
                <div class="card h-100" id="card_category">
                    <a href="#">
                        <img src="../assets/img/vegetables.jpg" class="card-img-top" alt="..." id="img_category">
                    </a>
                    <div class="card-body" id="card-body_j">
                        <a href="#" class="h2 text-decoration-none text-dark">Vegetales</a>
                        <!-- <p class="card-text mt-3">
                                Disfruta de una variedad de verduras frescas y saludables. Nuestras verduras son seleccionadas con cuidado para garantizar la frescura y calidad que mereces.
                            </p>                           -->
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-3 mb-3">
                <div class="card h-100" id="card_category">
                    <a href="#">
                        <img src="../assets/img/bebidas_gaseosas.jpg" class="card-img-top" alt="..." id="img_category">
                    </a>
                    <div class="card-body" id="card-body_j">
                        <a href="#" class="h2 text-decoration-none text-dark">Bebidad gaseosas</a>
                        <!-- <p class="card-text mt-3">
                                Refréscate con nuestra selección de bebidas, que incluye agua, refrescos, jugos naturales y bebidas energéticas. Satisfacemos tu sed con las mejores opciones.
                            </p>                            -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="container py-5" id="section_bulletin">
    <div class="col-auto">
        <div class="row text-center py-3">
            <div class="col-lg-6 m-auto">
                <h2 class="h2">Suscríbete a nuestro newsletter</h2>
                <p>
                    ¡Mantente al tanto de las últimas ofertas y novedades de MegaMarket!
                </p>
            </div>
        </div>
        <label class="sr-only" for="subscribeEmail">Correo electronico</label>
        <div class="input-group mb-2">
            <input type="text" class="form-control bg-light border-light" id="subscribeEmail" placeholder="Correo electronico">
            <div class="input-group-text btn-success text-dark" id="suscribete">Suscríbete</div>
        </div>
    </div>
</section>

<section class="bg-light">
    <div class="container py-5">
        <div class="row" id="available_products">

        </div>
    </div>
</section>

<?php require_once "format/bottom_view.php" ?>