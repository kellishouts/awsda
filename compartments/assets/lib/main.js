'use strict';

document.addEventListener('DOMContentLoaded', function () {
  //this handles navbar on click
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('#' + burger.dataset.target);

  burger.addEventListener('click', function () {
    burger.classList.toggle('is-active');
    nav.classList.toggle('is-active');
  });
});