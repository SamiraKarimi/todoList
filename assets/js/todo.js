$("li").click(function() {
  $(this).toggleClass("completed");
});
//click on X to delete Todo
$("span").click(function(e) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  event.stopPropagation();
});
