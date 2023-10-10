<?php require_once "format/top_view.php" ?>

<div id="mm-carousel" class="carousel slide" data-bs-ride="carousel">
    <ol class="carousel-indicators">
        <li data-bs-target="#mm-carousel" data-bs-slide-to="0" class="active"></li>
        <li data-bs-target="#mm-carousel" data-bs-slide-to="1"></li>
        <li data-bs-target="#mm-carousel" data-bs-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <div class="container">
                <div class="row p-5">
                    <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                        <img class="img-fluid" src="../assets/img/carousel_shop.png" alt="">
                    </div>
                    <div class="col-lg-6 mb-0 d-flex align-items-center">
                        <div class="text-align-left align-self-center">
                            <h1 class="h1 text-success"><b>MegaMarket</b></h1>
                            <h3 class="h2">Donde la confianza y la calidad se encuentran</h3>
                            <p>
                                En <b>MegaMarket</b>, la frescura y calidad son garantía. Su amplia selección de
                                alimentos frescos, productos de limpieza y más, cumple con los estándares más altos.
                                Además, el personal siempre está dispuesto a brindar asesoramiento y ayuda en lo que
                                necesites. En <b>MegaMarket</b>, confianza y calidad van de la mano.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="carousel-item">
            <div class="container">
                <div class="row p-5">
                    <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                        <img class="img-fluid" src="../assets/img/carousel_vegetables.png" alt="">
                    </div>
                    <div class="col-lg-6 mb-0 d-flex align-items-center">
                        <div class="text-align-left">
                            <h1 class="h1">Verduras de la más alta calidad</h1>
                            <h3 class="h2">Directamente a tu hogar</h3>
                            <p>
                                En <strong>MegaMarket</strong>, la frescura y calidad de las verduras son
                                insuperables. Ofrecemos una amplia variedad de verduras recién cosechadas del campo,
                                que puedes disfrutar desde la comodidad de tu hogar.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="carousel-item">
            <div class="container">
                <div class="row p-5">
                    <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                        <img class="img-fluid" src="../assets/img/carousel_jabones.png" alt="">
                    </div>
                    <div class="col-lg-6 mb-0 d-flex align-items-center">
                        <div class="text-align-left">
                            <h1 class="h1"> Productos de Limpieza Pensados en Ti</h1>
                            <h3 class="h2">Adaptados a tu Diversidad</h3>
                            <p>
                                En <strong>MegaMarket</strong>, comprendemos que cada hogar es único, y por eso
                                ofrecemos una amplia gama de productos de limpieza diseñados para satisfacer todas
                                tus necesidades. Ya sea que estés buscando productos específicos para limpiar,
                                desinfectar o simplemente mantener tu hogar impecable, <strong>MegaMarket</strong>
                                tiene lo que necesitas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <a class="carousel-control-prev text-decoration-none w-auto ps-3" href="#mm-carousel" role="button" data-bs-slide="prev">
        <i class="fas fa-chevron-left"></i>
    </a>
    <a class="carousel-control-next text-decoration-none w-auto pe-3" href="#mm-carousel" role="button" data-bs-slide="next">
        <i class="fas fa-chevron-right"></i>
    </a>
</div>

<section class="container py-5">
    <div class="container py-5">
        <div class="row text-center py-3">
            <div class="col-lg-6 m-auto">
                <h1 class="h1">¡Grandes Descuentos!</h1>
                <p>
                    Sabemos lo importante que es ahorrar sin comprometer la calidad. Es por eso que te ofrecemos
                    grandes descuentos en una amplia gama de productos.
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-4 mb-4">
                <img src="../assets/img/promo1.webp" class="card-img-top" alt="..." id="img_d">
            </div>
            <div class="col-12 col-md-4 mb-4">
                <img src="../assets/img/promo2.webp" class="card-img-top" alt="..." id="img_d">
            </div>
            <div class="col-12 col-md-4 mb-4">
                <img src="../assets/img/promo3.webp" class="card-img-top" alt="..." id="img_d">
            </div>
        </div>
    </div>
</section>

<section class="bg-light">
    <div class="container py-5">
        <div class="row text-center py-3">
            <div class="col-lg-6 m-auto">
                <h1 class="h1">¡Gracias por elegirnos!</h1>
                <p>
                    En <strong>MegaMarket</strong>, nos enorgullece ser tu elección de confianza cuando se trata de
                    abastecer tu hogar y cuidar de tu bienestar. Somos mucho más que un simple supermercado; somos
                    una marca comprometida con la excelencia en todos los aspectos.
                </p>
            </div>
        </div>
    </div>
</section>

<section class="container py-5">
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

<?php require_once "format/bottom_view.php" ?>