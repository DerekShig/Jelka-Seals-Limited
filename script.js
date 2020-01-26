$(document).ready(function() {

	$(window).on("load", function(){
	    $('.cover-page').addClass('animated fadeInDown');
	});

  // $('.btn-modal').on('click', function() {
  //     $("#showImg").empty();
  //     var image = $(this).attr("name");
  //     $("#showImg").append(`<img class='img-fluid' src="${image}"/>`)

  //     $(".modal-title").empty();
  //     var txt = $(this).attr("id");
  //     $(".modal-title").append(`<p>${txt}</p>`);
  // });

  $('td img').attr('data-toggle', 'modal');
  $('td img').attr('data-target', '#myModal');

  $('td img').on('click', function() {

    $("#showImg").empty();
    var image = $(this).attr("src");
    $("#showImg").append(`<img class='img-fluid' src="${image}"/>`)

    $(".modal-title").empty();
    var txt = $(this).attr("id");
    $(".modal-title").append(`<p>${txt}</p>`);

  });

});