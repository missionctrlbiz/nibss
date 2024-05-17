/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import jQuery from 'jquery';
jQuery(function ($) {
    // Your jQuery code here
    "use strict";
  
    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
      $('.sidebar, .content').toggleClass("open");
      return false;
    });
  });