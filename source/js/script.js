document.addEventListener('DOMContentLoaded',function(){
  var drop_menu = document.querySelector(".drop-menu");
  var tgl_btn = document.querySelector(".page-header__logo-toogle");

  tgl_btn.addEventListener('click',function(){
    drop_menu.classList.toggle("drop-menu--active");
  })

});
