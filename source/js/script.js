document.addEventListener('DOMContentLoaded',function(){
  var drop_menu = document.querySelector('.drop-menu');
  var tgl_btn = document.querySelector('.page-header__logo-toogle');
  var cls_btn = document.querySelector('.drop-menu__toogle-btn');
  var hidden_rate = document.querySelector('.hidden-rates');
  var show_rate_btn = document.querySelector('.profile__button');
  var hide_rate_btn = document.querySelector('.hidden-rates');
  var logo_header = document.querySelector('.page-header__logo-image');
  var logo_header_drop = document.querySelector('.page-header__logo-image-drop');

  tgl_btn.addEventListener('click',function(){
    drop_menu.classList.add('drop-menu--active');
  });

  cls_btn.addEventListener('click',function(){
    drop_menu.classList.remove('drop-menu--active');
  });

  show_rate_btn.addEventListener('click', function(){
    hidden_rate.classList.add('hidden-rates--show');
  });

  hide_rate_btn.addEventListener('click', function(){
    hidden_rate.classList.remove('hidden-rates--show');
  });

});
