$(document).ready(function() {
  $("#eyesCard").click(function() {
    document.location.href = "pause-detail.html?pause=eyes";
  });

  $("#handsCard").click(function() {
    document.location.href = "pause-detail.html?pause=hands";
  });

  $("#legsCard").click(function() {
    document.location.href = "pause-detail.html?pause=legs";
  });

  $("#backCard").click(function() {
    document.location.href = "pause-detail.html?pause=back";
  });

  $("#headCard").click(function() {
    document.location.href = "pause-detail.html?pause=head";
  });

  $("#pauseButton").click(function() {
    alert("6");
  });
});
