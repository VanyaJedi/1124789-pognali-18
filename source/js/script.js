document.addEventListener('DOMContentLoaded',function(){
  var drop_menu = document.querySelector('.drop-menu');
  drop_menu.classList.remove('drop-menu--nojs');
  var tgl_btn = document.querySelector('.page-header__logo-toogle');
  var cls_btn = document.querySelector('.drop-menu__toogle-btn');
  var hidden_rate = document.querySelector('.hidden-rates');
  var show_rate_btn = document.querySelector('.profile__button');
  var hide_rate_btn = document.querySelector('.hidden-rates');
  var logo_header = document.querySelector('.page-header__logo-image');
  var logo_header_drop = document.querySelector('.page-header__logo-image-drop');
  var letter_list = document.querySelectorAll('.country-list__letter');
  var country_list = document.querySelector('.country-list');

  tgl_btn.addEventListener('click',function(){
    drop_menu.classList.add('drop-menu--active');
  });

  cls_btn.addEventListener('click',function(){
    drop_menu.classList.remove('drop-menu--active');
  });

 // show_rate_btn.addEventListener('click', function(){
 //   hidden_rate.classList.add('hidden-rates--show');
 // });

 // hide_rate_btn.addEventListener('click', function(){
 //   hidden_rate.classList.remove('hidden-rates--show');
 // });

  country_list.addEventListener('click', function(event){
    for (var i = 0; i < letter_list.length; i++) {
      letter_list[i].classList.remove('country-list__letter--active');
      event.target.classList.add('country-list__letter--active');
    }
  });

  //letter_list.addEventListener('click', function(){
  //  console.log("1");
  //  for (var i = 0; i <= letter_list.length; i++) {
  //    letter_list[i].classList.remove('country-list__letter--active');
  //  }
  //})


});
