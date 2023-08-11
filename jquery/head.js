$(document).ready(function () {
  $("#toggleBtn").click(function () {
    $("#toggle").toggle(()=>{
      this.getAnimations
    });
  });

  function handleResize() {
    if ($(window).width() >= 768) {
      $('#toggle').hide();
    }else{
      null
    } 
  }

  // Initial call to handleResize
  handleResize();

  // Call handleResize on window resize
  $(window).resize(handleResize);

});
