'use strict';
module.exports = function (app) {
  var nhanvienCtrl = require('./controllers/NhanVienController');

  // todoList Routes
  app.route('/nhanvien')
    .get(nhanvienCtrl.list)
    .post(nhanvienCtrl.add);


  app.route('/nhanvien/:manv')
    .get(nhanvienCtrl.search)
    .post(nhanvienCtrl.update)

  // app.route('/xoanhanvien/:manv')
  //   .post(nhanvienCtrl.update)
};