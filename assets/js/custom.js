'use strict';
$(document).ready(function() {

    var all_panels = $('.mm-accordion > li > ul').hide();

    $('.mm-accordion > li > a').click(function() {
        console.log('Hello world!');
        var target =  $(this).next();
        if(!target.hasClass('active')){
            all_panels.removeClass('active').slideUp();
            target.addClass('active').slideDown();
        }
      return false;
    });
 
    $('.product-links-wap a').click(function(){
      var this_src = $(this).children('img').attr('src');
      $('#product-detail').attr('src',this_src);
      return false;
    });

    $(document).on("click", "#btn_minus", function () {
      var val = $("#var-value").html();
      val = (val=='1')?val:val-1;
      $("#var-value").html(val);
      $("#product-quanity").val(val);
      return false;
    });

    $(document).on("click", "#btn_plus", function () {
      var val = $("#var-value").html();
      val++;
      $("#var-value").html(val);
      $("#product-quanity").val(val);
      return false;
    });
    $('.btn-size').click(function(){
      var this_val = $(this).html();
      $("#product-size").val(this_val);
      $(".btn-size").removeClass('btn-secondary');
      $(".btn-size").addClass('btn-success');
      $(this).removeClass('btn-success');
      $(this).addClass('btn-secondary');
      return false;
    });


});
