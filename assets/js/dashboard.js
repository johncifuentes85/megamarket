$(document).ready(function () {
  var current_url = window.location.href;

  if (current_url.indexOf("dashboard") !== -1) {
    $.ajax({
      url: "../app/controller/products.php",
      type: "POST",
      dataType: "json",
      data: {
        f_product: 1,
      },
      success: function (data) {
        // Crear un título
        var title = $("<h1>").addClass("h2").text("Productos");

        // Crear un grupo de botones
        var buttonGroup = $("<div>").addClass("btn-toolbar mb-2 mb-md-0");
        var buttonGroupInner = $("<div>")
          .addClass("btn-group me-2")
          .appendTo(buttonGroup);

        // Agregar botones al grupo
        $("<button>")
          .addClass("btn btn-sm btn-outline-secondary")
          .text("Crear producto")
          .attr("data-bs-toggle", "modal")
          .attr("data-bs-target", "#create_product")
          .appendTo(buttonGroupInner);

        // Crear la tabla y su encabezado
        var table = $("<table>").addClass("table");
        var thead = $("<thead>").appendTo(table);
        var tr = $("<tr>").appendTo(thead);

        $("<th>").text("#").appendTo(tr);
        $("<th>").text("Ref").appendTo(tr);
        $("<th>").text("Producto").appendTo(tr);
        $("<th>").text("Categoria").appendTo(tr);
        $("<th>").text("Precio").appendTo(tr);

        // Agregar filas de datos
        var tbody = $("<tbody>").appendTo(table);

        $.each(data, function (index, item) {
          var row = $("<tr>").appendTo(tbody);
          $("<td>")
            .text(index + 1)
            .appendTo(row);
          $("<td>").text(item.ref).appendTo(row);
          $("<td>").text(item.product_name).appendTo(row);
          $("<td>").text(item.category).appendTo(row);
          $("<td>").text(item.sale_price).appendTo(row);
        });

        $("#container_dashboard")
          .empty() // Limpia el contenedor si ya contiene elementos previos
          .append(title)
          .append(buttonGroup)
          .append(table);
      },
      error: function (xhr, status, error) {
        // Manejar el error aquí
      },
    });
  }

  function init_dashboard() {
    $.ajax({
      url: "../app/controller/products.php",
      type: "POST",
      dataType: "json",
      data: {
        f_product: 5,
      },
      success: function (data) {
        // Crear un título
        var title = $("<h1>").addClass("h2").text("Panel de inventario");

        // Crear un grupo de botones
        var buttonGroup = $("<div>").addClass("btn-toolbar mb-2 mb-md-0");
        var buttonGroupInner = $("<div>")
          .addClass("btn-group me-2")
          .appendTo(buttonGroup);

        // Agregar botones al grupo
        $("<button>")
          .addClass("btn btn-sm btn-outline-secondary")
          .text("Ingresar artículo")
          .attr("data-bs-toggle", "modal")
          .attr("data-bs-target", "#enter_article")
          .appendTo(buttonGroupInner);

        $("<button>")
          .addClass("btn btn-sm btn-outline-secondary")
          .text("Salida artículo")
          .attr("data-bs-toggle", "modal")
          .attr("data-bs-target", "#article_output")
          .appendTo(buttonGroupInner);

        // Crear la tabla y su encabezado
        var table = $("<table>").addClass("table");
        var thead = $("<thead>").appendTo(table);
        var tr = $("<tr>").appendTo(thead);

        $("<th>").text("#").appendTo(tr);
        $("<th>").text("Ref").appendTo(tr);
        $("<th>").text("Producto").appendTo(tr);
        $("<th>").text("Categoria").appendTo(tr);
        $("<th>").text("Costo").appendTo(tr);
        $("<th>").text("Iva").appendTo(tr);
        $("<th>").text("Cantidad").appendTo(tr);

        // Agregar filas de datos
        var tbody = $("<tbody>").appendTo(table);

        $.each(data, function (index, item) {
          var row = $("<tr>").appendTo(tbody);
          $("<td>")
            .text(index + 1)
            .appendTo(row);
          $("<td>").text(item.ref).appendTo(row);
          $("<td>").text(item.product_name).appendTo(row);
          $("<td>").text(item.category).appendTo(row);
          $("<td>").text(item.cost).appendTo(row);
          $("<td>").text(item.tax).appendTo(row);
          $("<td>").text(item.amount).appendTo(row);
        });

        $("#container_dashboard")
          .empty() // Limpia el contenedor si ya contiene elementos previos
          .append(title)
          .append(buttonGroup)
          .append(table);
      },
      error: function (xhr, status, error) {
        // Manejar el error aquí
      },
    });
  }

  $("#Inventario").on("click", function (event) {
    init_dashboard()
  });

  $("#Ventas").on("click", function (event) {
    $.ajax({
      url: "../app/controller/products.php",
      type: "POST",
      dataType: "json",
      data: {
        f_product: 6,
      },
      success: function (data) {
        // Crear un título
        var title = $("<h1>").addClass("h2").text("Ventas");

        // Crear un grupo de botones
        var buttonGroup = $("<div>").addClass("btn-toolbar mb-2 mb-md-0");
        var buttonGroupInner = $("<div>")
          .addClass("btn-group me-2")
          .appendTo(buttonGroup);

        // Crear la tabla y su encabezado
        var table = $("<table>").addClass("table");
        var thead = $("<thead>").appendTo(table);
        var tr = $("<tr>").appendTo(thead);

        $("<th>").text("#").appendTo(tr);
        $("<th>").text("Ref").appendTo(tr);
        $("<th>").text("Producto").appendTo(tr);
        $("<th>").text("Categoria").appendTo(tr);
        $("<th>").text("Costo").appendTo(tr);
        $("<th>").text("Iva").appendTo(tr);
        $("<th>").text("Cantidad").appendTo(tr);

        // Agregar filas de datos
        var tbody = $("<tbody>").appendTo(table);

        $.each(data, function (index, item) {
          var row = $("<tr>").appendTo(tbody);
          $("<td>")
            .text(index + 1)
            .appendTo(row);
          $("<td>").text(item.ref).appendTo(row);
          $("<td>").text(item.product_name).appendTo(row);
          $("<td>").text(item.category).appendTo(row);
          $("<td>").text(item.cost).appendTo(row);
          $("<td>").text(item.tax).appendTo(row);
          $("<td>").text(item.amount).appendTo(row);
        });

        $("#container_dashboard")
          .empty() // Limpia el contenedor si ya contiene elementos previos
          .append(title)
          .append(buttonGroup)
          .append(table);
      },
      error: function (xhr, status, error) {
        // Manejar el error aquí
      },
    });
  });

  $("#product_name").attr("readonly", true);
  $("#product_name").prop("disabled", true);
  $("#product_name_output").attr("readonly", true);
  $("#product_name_output").prop("disabled", true);

  $("#ref").change(function () {
    ref = $.trim($("#ref").val());
    $.ajax({
      url: "../app/controller/products.php",
      type: "POST",
      dataType: "json",
      data: {
        f_product: 7,
        ref: ref,
      },
      success: function (data) {
        $("#product_name").val(data[0].product_name);
      },
      error: function (xhr, status, error) {},
    });
  });

  $("#ref_output").change(function () {
    ref = $.trim($("#ref_output").val());
    $.ajax({
      url: "../app/controller/products.php",
      type: "POST",
      dataType: "json",
      data: {
        f_product: 7,
        ref: ref,
      },
      success: function (data) {
        $("#product_name_output").val(data[0].product_name);
      },
      error: function (xhr, status, error) {},
    });
  });

  $("#save_enter_article").on("click", function (event) {
    ref = $.trim($("#ref").val());
    product_name = $.trim($("#product_name").val());
    amount = $.trim($("#amount").val());
    cost = $.trim($("#cost").val());
    tax = $.trim($("#tax").val());

    $.ajax({
      url: "../app/controller/products.php",
      type: "POST",
      dataType: "json",
      data: {
        f_product: 8,
        ref: ref,
        amount: amount,
        cost: cost,
        tax: tax,
      },
      success: function (data) {},
      error: function (xhr, status, error) {},
    });
    $("#enter_article").modal("hide");
    init_dashboard();
  });

  $("#save_article_output").on("click", function (event) {
    ref = $.trim($("#ref_output").val());
    product_name = $.trim($("#product_name_output").val());
    amount = parseInt($.trim($("#amount_output").val())) * -1;
    cost = $.trim($("#cost_output").val());
    tax = $.trim($("#tax_output").val());

    $.ajax({
      url: "../app/controller/products.php",
      type: "POST",
      dataType: "json",
      data: {
        f_product: 8,
        ref: ref,
        amount: amount,
        cost: cost,
        tax: tax,
      },
      success: function (data) {},
      error: function (xhr, status, error) {},
    });
    $("#article_output").modal("hide");
    init_dashboard();
  });

});
