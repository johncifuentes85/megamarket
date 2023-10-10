$(document).ready(function () {
  $("#login").click(function () {
    email = $.trim($("#email").val());
    password = $.trim($("#password").val());

    $.ajax({
      url: "../app/controller/login.php",
      type: "POST",
      dataType: "json",
      data: {
        email: email,
        password: password,
      },
      success: function (data) {
        if (data) {
          window.location.href = "dashboard";
        }
      },
      error: function (xhr, status, error) {},
    });
  });
});
