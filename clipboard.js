$("#clipboard").click(function(){
  var holdtext = $("#instructions").html();
  copied = holdtext.createTextRange();
  copied.execCommand("Copy");
});