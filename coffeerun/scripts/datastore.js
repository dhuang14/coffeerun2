(function(window) {
  'use strict';
  var App = window.App || {};
  const $ = window.jQuery;

  const SERVER_URL = 'http://localhost:2403/coffeeorders/';

  function DataStore() {}

  DataStore.prototype.add = function(val, cb) {
    console.log(cb);
    $.post(SERVER_URL, val, res => cb(res));
  };
  DataStore.prototype.get = function(key, cb) {
    $.get(SERVER_URL + key, res => cb(res));
  };
  DataStore.prototype.getAll = function(cb) {
    $.get(SERVER_URL, res => cb(res));
  };
  DataStore.prototype.remove = function(key) {
    $.ajax(SERVER_URL + key, {
      type: 'DELETE',
    });
  };

  App.DataStore = DataStore;
  window.App = App;
})(window);
