'use strict';

/*
logger.js

This file contains the code for the various logging functions
of the library.

Author: Eric James Foster
License: ISC
*/

var colors = require('clivi');

//DONE:90 Add second argument for log ID purposes, figure best way to approach this.
//Console.log alias function.                                                  //DONE:140 Make sure date is logging properly.
var log = function log(text, style, tyme) {
  var colr = Array.isArray(style) ? style[0] : style,
      styl = Array.isArray(style) ? style[1] : null,
      tym = tyme || false;

  var time = new Date(),
      hours = time.getHours(),
      mins = time.getMinutes(),
      secs = time.getSeconds();
  if (secs <= 9) {
    secs = '0' + String(secs);
  }
  if (mins <= 9) {
    mins = '0' + String(mins);
  }
  var abbr = hours >= 12 ? 'pm' : 'am';
  var stan = hours >= 13 ? hours - 12 : hours; //DONE:40 Either fix singular hours, or choose alternate.
  if (stan === 0) {
    hours = stan + 12;
  } else {
    hours = stan;
  }
  time = hours + ':' + mins + ':' + secs + abbr;

  var t = tym ? time : '';

  if (typeof document === 'undefined') {
    return console.log(colors(text, { fg: colr, style: styl }) + '   '.repeat(10) + t);
  } else {
    var color = colr,
        bgColor = styl,
        css = 'background: ' + bgColor + '; color: ' + color;

    return console.log('%c' + text + '%s', css, '   '.repeat(10) + t);
  }
};

//Console.error alias function.
var err = function err(text, tyme) {
  var colr = 'red',
      styl = 'bold',
      tym = tyme || false;

  var time = new Date(),
      hours = time.getHours(),
      mins = time.getMinutes(),
      secs = time.getSeconds();
  if (secs <= 9) {
    secs = '0' + String(secs);
  }
  if (mins <= 9) {
    mins = '0' + String(mins);
  }
  var abbr = hours >= 12 ? 'pm' : 'am';
  var stan = hours >= 13 ? hours - 12 : hours;
  if (stan === 0) {
    hours = stan + 12;
  } else {
    hours = stan;
  }
  time = hours + ':' + mins + ':' + secs + abbr;

  var t = tym ? time : '';

  if (typeof document === 'undefined') {
    return console.log(colors(text, { fg: colr, style: styl }) + '   '.repeat(10) + t);
  } else {
    var color = colr,
        bgColor = '',
        css = 'background: ' + bgColor + '; color: ' + color;

    return console.error('%c' + text + '%s', css, '   '.repeat(10) + t);
  }
};

//Console.error alias function.
var error = function error(text) {
  return console.error(text);
};

//Console.info alias function.
var info = function info(text, tyme) {
  var colr = '#008cff',
      styl = 'bold',
      tym = tyme || false;

  var time = new Date(),
      hours = time.getHours(),
      mins = time.getMinutes(),
      secs = time.getSeconds();
  if (secs <= 9) {
    secs = '0' + String(secs);
  }
  if (mins <= 9) {
    mins = '0' + String(mins);
  }
  var abbr = hours >= 12 ? 'pm' : 'am';
  var stan = hours >= 13 ? hours - 12 : hours;
  if (stan === 0) {
    hours = stan + 12;
  } else {
    hours = stan;
  }
  time = hours + ':' + mins + ':' + secs + abbr;

  var t = tym ? time : '';

  if (typeof document === 'undefined') {
    colr = 'blueBright';
    return console.log(colors(text, { fg: colr, style: styl }) + '   '.repeat(10) + t);
  } else {
    var color = colr,
        bgColor = '',
        css = 'background: ' + bgColor + '; color: ' + color;

    return console.info('%c' + text + '%s', css, '   '.repeat(10) + t);
  }
};

//Console.warn alias function.
var warn = function warn(text, tyme) {
  var colr = 'orange',
      styl = 'bold',
      tym = tyme || false;

  var time = new Date(),
      hours = time.getHours(),
      mins = time.getMinutes(),
      secs = time.getSeconds();
  if (secs <= 9) {
    secs = '0' + String(secs);
  }
  if (mins <= 9) {
    mins = '0' + String(mins);
  }
  var abbr = hours >= 12 ? 'pm' : 'am';
  var stan = hours >= 13 ? hours - 12 : hours;
  if (stan === 0) {
    hours = stan + 12;
  } else {
    hours = stan;
  }
  time = hours + ':' + mins + ':' + secs + abbr;

  var t = tym ? time : '';

  if (typeof document === 'undefined') {
    colr = 'yellow';
    colr = 'blueBright';
    return console.log(colors(text, { fg: colr, style: styl }) + '   '.repeat(10) + t);
  } else {
    var color = colr,
        bgColor = '',
        css = 'background: ' + bgColor + '; color: ' + color;

    return console.warn('%c' + text + '%s', css, '   '.repeat(10) + t);
  }
};

var inspect = function inspect(obj) {
  return console.log(obj);
};

module.exports = {
  log: log,
  err: err,
  info: info,
  warn: warn,
  inspect: inspect
};