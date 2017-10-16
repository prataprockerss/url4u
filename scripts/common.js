$(window).load(function(){
  // hide loader on page load
  hidePageLoader();
  new Clipboard('.copy-btn');
})

function showPageLoader(){
  $('.loader').show();
}
function hidePageLoader(){
  $('.loader').hide();
}
