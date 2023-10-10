<?php require_once "format/top_view.php" ?>

<section class="container py-5">
    <div class="container">
        <div class="row text-center py-3">
            <div class="col-lg-6 m-auto">
                <div class="card" id="card_login">
                    <div class="card-body">
                        <a class="navbar-brand text-success logo h1 align-self-center" href="index">
                            MegaMarket
                        </a>
                        <div class="container">
                            <form class="mt-3 mb-3">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Correo Electronico</label>
                                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                                    <input type="password" class="form-control" id="password">
                                </div>
                                <button type="button" class="btn btn-success btn-lg" value="addtocard" id="login">Ingresar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php require_once "format/bottom_view.php" ?>