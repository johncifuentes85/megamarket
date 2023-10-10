$(document).ready(function () {
  var current_url = window.location.href;
  if (current_url.indexOf("shop") !== -1) {
    $.ajax({
      url: "../app/controller/products.php",
      type: "POST",
      dataType: "json",
      data: { f_product: 1 },
      success: function (data) {
        let available_products = document.getElementById("available_products");
        available_products.innerHTML = "";
        for (let item of data) {
          available_products.innerHTML += `
          <div class="col-12 col-md-4 mb-4">
          <div class="card h-100">
              <a href="product?id=${item.id}">
                  <img src="../assets/img_product/${item.image}" class="card-img-top" alt="...">
              </a>
              <div class="card-body">
                  <ul class="list-unstyled d-flex justify-content-between">
                      <li>
                          <i class="text-warning fa fa-star"></i>
                          <i class="text-warning fa fa-star"></i>
                          <i class="text-warning fa fa-star"></i>
                          <i class="text-warning fa fa-star"></i>
                          <i class="text-warning fa fa-star"></i>
                          <i class="text-warning fa fa-star"></i>
                          <i class="text-warning fa fa-star"></i>
                      </li>
                      <li class="text-muted text-right">$${item.sale_price}</li>
                  </ul>
                  <a href="product.html" class="h2 text-decoration-none text-dark">${item.product_name}</a>                          
              </div>
          </div>
      </div>    
                     `;
        }
      },
      error: function (xhr, status, error) {
        console.error("Error en la solicitud:", status, error);
      },
    });
  }

  $("#search_product").click(function () {
    $("#search").modal("hide");
    var section_categories = document.getElementById("section_categories");
    var section_bulletin = document.getElementById("section_bulletin");
    section_categories.style.display = "none";
    section_bulletin.style.display = "none";

    info_search_product = $.trim($("#info_search_product").val());

    $.ajax({
      url: "../app/controller/products.php",
      type: "POST",
      dataType: "json",
      data: { f_product: 2, info_search_product: info_search_product },
      success: function (data) {
        let available_products = document.getElementById("available_products");
        available_products.innerHTML = "";
        for (let item of data) {
          available_products.innerHTML += `
          <div class="col-12 col-md-4 mb-4">
          <div class="card h-100">
              <a href="product?id=${item.id}">
                  <img src="../assets/img_product/${item.image}" class="card-img-top" alt="...">
              </a>
              <div class="card-body">
                  <ul class="list-unstyled d-flex justify-content-between">
                      <li>
                          <i class="text-warning fa fa-star"></i>
                          <i class="text-warning fa fa-star"></i>
                          <i class="text-warning fa fa-star"></i>
                          <i class="text-warning fa fa-star"></i>
                          <i class="text-warning fa fa-star"></i>
                          <i class="text-warning fa fa-star"></i>
                          <i class="text-warning fa fa-star"></i>
                      </li>
                      <li class="text-muted text-right">$${item.sale_price}</li>
                  </ul>
                  <a href="product.html" class="h2 text-decoration-none text-dark">${item.product_name}</a>                          
              </div>
          </div>
      </div>    
                     `;
        }
      },
      error: function (xhr, status, error) {
        let available_products = document.getElementById("available_products");
        available_products.innerHTML = "";
        available_products.innerHTML += `         
            <h1>Búsqueda sin resultados</h1>   
          `;
      },
    });
  });

  if (current_url.indexOf("product") !== -1) {
    function id_product(id) {
      var parameter = new URLSearchParams(window.location.search);
      return parameter.get(id);
    }

    var id = id_product("id");

    $.ajax({
      url: "../app/controller/products.php",
      type: "POST",
      dataType: "json",
      data: { f_product: 3, id: id },
      success: function (data) {
        let card_product = document.getElementById("card_product");
        card_product.innerHTML = "";
        for (let item of data) {
          var sale_price = parseInt(item.sale_price);
          // Formatear el precio como moneda
          var sale_price = sale_price.toLocaleString("es-CO", {
            style: "currency",
            currency: "COP",
          });
          card_product.innerHTML += `
          <section class="bg-light">
            <div class="container pb-5">
              <div class="row">
                  <div class="col-lg-5 mt-5">
                      <div class="card mb-3">
                          <img class="card-img img-fluid" src="../assets/img_product/${item.image}" alt="Card image cap" id="product-detail">
                      </div>
                  </div>
                  <div class="col-lg-7 mt-5">
                      <div class="card">
                          <div class="card-body">  
                              <p class="h6">Ref:<p id='ref'>${item.ref}</p></p>                        
                              <h1 class="h2" id='product_name'>${item.product_name}</h2>    
                              <p class="h3 py-2">${sale_price}</p>                          
                              <p class="h3 py-2" id='sale_price' style='display: none'>${item.sale_price}</p>
                              <p class="py-2">
                                  <i class="fa fa-star text-warning"></i>
                                  <i class="fa fa-star text-warning"></i>
                                  <i class="fa fa-star text-warning"></i>
                                  <i class="fa fa-star text-warning"></i>
                                  <i class="fa fa-star text-secondary"></i>
                              </p>
                              <ul class="list-inline">
                                  <li class="list-inline-item">
                                      <h6>Marca:</h6>
                                  </li>
                                  <li class="list-inline-item">
                                      <p class="text-muted"><strong>${item.brand}</strong></p>
                                  </li>
                              </ul>

                              <h6>Descripcion:</h6>
                              <p>${item.description}</p>

                              <h6>Especificaciones:</h6>
                              <p>${item.specifications}</p>

                              <h6>Cantidad disponible:</h6>
                              <p>${item.amount}</p>

                              <form action="" method="GET">
                                <input type="hidden" name="product-title" value="Activewear">
                              <div class="row">
                                  <div class="col-auto">
                                      <ul class="list-inline pb-3">
                                          <li class="list-inline-item text-right">
                                              Cantidad
                                              <input type="hidden" name="product-quanity" id="product-quanity" value="1">
                                          </li>
                                          <li class="list-inline-item"><span class="btn btn-success" id="btn_minus">-</span></li>
                                          <li class="list-inline-item"><span class="badge bg-secondary" id="var-value">1</span></li>
                                          <li class="list-inline-item"><span class="btn btn-success" id="btn_plus">+</span></li>
                                      </ul>
                                  </div>
                              </div>
                              <div class="row pb-3">
                                  <div class="col d-grid">
                                      <button type="button" class="btn btn-success btn-lg" value="addtocard" id='add_to_cart'>Agregar a carrito</button>
                                  </div>
                              </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </section>
          `;
        }
      },
      error: function (xhr, status, error) {},
    });
  }

  var cart = {};

  $(document).on("click", "#add_to_cart", function () {
    product_quanity = $.trim($("#product-quanity").val());
    ref = $("#ref").text();
    sale_price = $("#sale_price").text();
    product_name = $("#product_name").text();
    var picture = $("#product-detail");
    var url_picture = picture.attr("src");

    if (cart[ref]) {
      // Actualiza la cantidad
      cart[ref].quantity += parseInt(product_quanity);
    } else {
      // Agrega un nuevo producto al carrito
      cart[ref] = {
        quantity: parseInt(product_quanity),
        price: sale_price,
        name: product_name,
        picture: url_picture,
        ref: ref,
      };
    }

    localStorage.setItem("carrito", JSON.stringify(cart));

    var amount_cart = Object.keys(cart).length;
    $("#amount_cart").text(amount_cart);
  });

  var cart = JSON.parse(localStorage.getItem("carrito")) || {};
  var amount_cart = Object.keys(cart).length;
  $("#amount_cart").text(amount_cart);

  if (current_url.indexOf("cart") !== -1) {
    var cart = JSON.parse(localStorage.getItem("carrito")) || {};
    let info_cart = document.getElementById("info_cart");

    var total = 0;
    var iva = 0;
    var subtotal = 0;
    // Sumar los precios de todos los productos
    for (var ref in cart) {
      if (cart.hasOwnProperty(ref)) {
        total += cart[ref].price * cart[ref].quantity;
        iva = total * 0.16;
        subtotal = total - iva;
      }
    }
    // Formatear el precio como moneda
    var total = total.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
    });

    // Formatear el precio como moneda
    var iva = iva.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
    });

    // Formatear el precio como moneda
    var subtotal = subtotal.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
    });

    info_cart.innerHTML = "";
    $.each(cart, function (ref, producto) {
      var sale_price = parseInt(producto.price);
      // Formatear el precio como moneda
      var sale_price = sale_price.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
      });
      info_cart.innerHTML += `      
        <div class="card mb-3" style="max-width: 540px;">
          <div class="row g-0">
              <div class="col-md-4">
                  <img src="${producto.picture}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                  <div class="card-body">
                      <h5 class="card-title">${producto.name}</h5>
                      <ul class="list-unstyled d-flex justify-content-between">
                        <li class="text-muted text-right">ref: </li>
                        <h6 class="card-title ref_cart" id='ref_cart'>${producto.ref}</h6>
                      </ul>  
                      <ul class="list-unstyled d-flex justify-content-between">
                          <li>
                              <i class="text-warning fa fa-star"></i>
                              <i class="text-warning fa fa-star"></i>
                              <i class="text-warning fa fa-star"></i>
                              <i class="text-muted fa fa-star"></i>
                              <i class="text-muted fa fa-star"></i>
                          </li>
                          <li class="text-muted text-right">${sale_price}</li>
                      </ul>
                      <ul class="list-unstyled d-flex justify-content-between">
                        <li class="text-muted text-right">Cantidad: </li>
                        <li class="text-muted text-right">${producto.quantity}</li>
                      </ul>
                      <button type="button" class="btn btn-outline-danger bi bi-trash3" id='delete_product'></button>
                  </div>
              </div>
          </div>    
        `;
    });

    let info_cart_totals = document.getElementById("info_cart_totals");
    info_cart_totals.innerHTML = "";
    info_cart_totals.innerHTML += `
    <div class="container">
        <div class="row text-left p-2 pb-3">
            <h4>Totales</h4>
            <hr class="hr">
            <table class="table table-borderless">
                <tbody>
                    <tr>
                        <td>SUBTOTAL</td>
                        <td>${subtotal}</td>
                    </tr>
                    <tr>
                        <td>IVA</td>
                        <td>${iva}</td>
                    </tr>
                    <tr>
                        <td>DESCUENTOS</td>
                        <td>$ 0</td>
                    </tr>
                    <tr>
                        <th scope="row">TOTAL</th>
                        <th scope="row">${total}</th>
                    </tr>
                </tbody>
            </table>
            <div class="row pb-3">
                <div class="col d-grid">
                    <button type="button" class="btn btn-success btn-lg" name="submit" value="addtocard" id='buy'>Comprar</button>
                </div>
            </div>
        </div>
    </div>
    `;
  }

  $(document).on("click", "#delete_product", function () {
    $(this).closest(".card").remove();
    cart = $(this).closest(".card");
    ref = cart.find("#ref_cart").text();

    var cart = JSON.parse(localStorage.getItem("carrito")) || {};

    // Verifica si la referencia existe en el objeto y, si es así, elimínala
    if (cart.hasOwnProperty(ref)) {
      delete cart[ref];
    }

    // Almacena el objeto actualizado en el almacenamiento local
    localStorage.setItem("carrito", JSON.stringify(cart));

    var amount_cart = Object.keys(cart).length;
    $("#amount_cart").text(amount_cart);

    var total = 0;
    var iva = 0;
    var subtotal = 0;
    // Sumar los precios de todos los productos
    for (var ref in cart) {
      if (cart.hasOwnProperty(ref)) {
        total += cart[ref].price * cart[ref].quantity;
        iva = total * 0.16;
        subtotal = total - iva;
      }
    }
    // Formatear el precio como moneda
    var total = total.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
    });

    // Formatear el precio como moneda
    var iva = iva.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
    });

    // Formatear el precio como moneda
    var subtotal = subtotal.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
    });

    let info_cart_totals = document.getElementById("info_cart_totals");
    info_cart_totals.innerHTML = "";
    info_cart_totals.innerHTML += `
    <div class="container">
        <div class="row text-left p-2 pb-3">
            <h4>Totales</h4>
            <hr class="hr">
            <table class="table table-borderless">
                <tbody>
                    <tr>
                        <td>SUBTOTAL</td>
                        <td>${subtotal}</td>
                    </tr>
                    <tr>
                        <td>IVA</td>
                        <td>${iva}</td>
                    </tr>
                    <tr>
                        <td>DESCUENTOS</td>
                        <td>$ 0</td>
                    </tr>
                    <tr>
                        <th scope="row">TOTAL</th>
                        <th scope="row">${total}</th>
                    </tr>
                </tbody>
            </table>
            <div class="row pb-3">
                <div class="col d-grid">
                    <button type="button" class="btn btn-success btn-lg" name="button" value="addtocard" id='buy'>Comprar</button>
                </div>
            </div>
        </div>
    </div>
    `;
  });

  $(document).on("click", "#buy", function () {
    var cart = JSON.parse(localStorage.getItem("carrito")) || {};

    var cart = JSON.parse(localStorage.getItem("carrito")) || {};

    // Recorre el objeto cart y muestra sus valores
    for (var ref in cart) {
      if (cart.hasOwnProperty(ref)) {
        var item = cart[ref];

        ref = item.ref;
        amount = item.quantity * -1;
        cost = parseInt(item.price) * 0.84;
        tax = parseInt(item.price) * 0.16;

        $.ajax({
          url: "../app/controller/products.php",
          type: "POST",
          dataType: "json",
          data: {
            f_product: 4,
            ref: ref,
            amount: amount,
            cost: cost,
            tax: tax,
          },
          success: function (data) {
            
          },
          error: function (xhr, status, error) {},
        });
      }
    }

    localStorage.removeItem("carrito");

    $("#amount_cart").text(0);
    $(".card").remove();

   
    let info_cart_totals = document.getElementById("info_cart_totals");
    info_cart_totals.innerHTML = "";
    info_cart_totals.innerHTML += `
    <div class="container">
        <div class="row text-left p-2 pb-3">
            <h4>Totales</h4>
            <hr class="hr">
            <table class="table table-borderless">
                <tbody>
                    <tr>
                        <td>SUBTOTAL</td>
                        <td>$ 0</td>
                    </tr>
                    <tr>
                        <td>IVA</td>
                        <td>$ 0</td>
                    </tr>
                    <tr>
                        <td>DESCUENTOS</td>
                        <td>$ 0</td>
                    </tr>
                    <tr>
                        <th scope="row">TOTAL</th>
                        <th scope="row">$ 0</th>
                    </tr>
                </tbody>
            </table>
            <div class="row pb-3">
                <div class="col d-grid">
                    <button type="button" class="btn btn-success btn-lg" name="button" value="addtocard" id='buy'>Comprar</button>
                </div>
            </div>
        </div>
    </div>
    `;

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Gracias por su compra',
      showConfirmButton: false,
      timer: 1500
    })
  });


  $("#suscribete").on("click", function (event) {
    $("#subscribeEmail").val('');
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Gracias por suscríbete a nuestro newsletter',
      showConfirmButton: false,
      timer: 1500
    })
  })
});
