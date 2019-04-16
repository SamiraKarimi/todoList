$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});
//click on X to delete Todo
$("ul").on("click", "span", function(e) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    var val = $(this).val();
    $(this).val("");
    $("ul").append("<li><span> X </span>" + val + "</li>");
  }
});
