let iframe;

$(document).ready(function() {
  iframe = $("#iframe");

  $("#homeLink").click(function() {
    iframe.attr("src", "pages/home-content.html");
  });

  $("#profileLink").click(function() {
    iframe.attr("src", "pages/profile.html");
  });

  $("#pausesLink").click(function() {
    iframe.attr("src", "pages/pauses.html");
  });

  $("#rankingLink").click(function() {
    iframe.attr("src", "pages/ranking.html");
  });

});