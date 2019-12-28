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
  var filter = document.querySelector('.filter');
  var open_filter = document.querySelector('.filter__open-filter');
  var close_filter = document.querySelector('.filter__close-filter');
  var close_filter_btn = document.querySelector('.filter__close-btn');
  var fellow_filter = document.querySelector('.fellow-filter');

  tgl_btn.addEventListener('click',function(){
    drop_menu.classList.add('drop-menu--active');
  });

  cls_btn.addEventListener('click',function(){
    drop_menu.classList.remove('drop-menu--active');
  });

  if (show_rate_btn){
    show_rate_btn.addEventListener('click', function(){
      hidden_rate.classList.add('hidden-rates--show');
    });
  }

  if (hide_rate_btn) {
    hide_rate_btn.addEventListener('click', function(){
      hidden_rate.classList.remove('hidden-rates--show');
    });
  }

  if (country_list) {
    country_list.addEventListener('click', function(event){
    for (var i = 0; i < letter_list.length; i++) {
      letter_list[i].classList.remove('country-list__letter--active');
      if (event.target.classList.contains('country-list__letter')) {
        event.target.classList.add('country-list__letter--active');
      }
    }
  });
  }

  if (open_filter) {
    open_filter.addEventListener('click', function(){
      filter.classList.remove('filter--hidden');
    });
  }

  if (close_filter || close_filter_btn) {
    close_filter.addEventListener('click', function(){
      filter.classList.add('filter--hidden');
    });
    close_filter_btn.addEventListener('click', function(){
    filter.classList.add('filter--hidden');
    });
  }

  if (fellow_filter) {
    fellow_filter.addEventListener('click', function(event){
      if (event.target.classList.contains('fellow-filter__open')) {
        event.target.classList.toggle('fellow-filter__open--opened');
      }
    });
  }

});
