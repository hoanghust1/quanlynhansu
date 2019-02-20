const table = 'nhanvien'

const util = require('util')
const mysql = require('mysql')
const conn = require('./../connection')

module.exports = {
    list: (req, res) => {
        let sql = 'SELECT * FROM nhanvien'
        conn.query(sql, (err, results) => {
            if (err) throw err
            res.json(results)
        })
    },

    search: (req, res) => {
        let sql = 'SELECT * FROM nhanvien WHERE manv = ?'
        conn.query(sql, [req.params.manv], (err, results) => {
            if (err) throw err
            res.json(results[0])
        })
    },
    add: (req, res) => {
        let message = '';
        let manv = req.body.manv;
        let tennv = req.body.tennv;
        let ngaysinh = req.body.ngaysinh;
        let gioitinh = req.body.gioitinh;
        let diachi = req.body.diachi;
        let sdt = req.body.sdt;
        let manvQuery = "SELECT * FROM `nhanvien` WHERE manv = '" + manv + "'";

        conn.query(manvQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (result.length > 0) {
                message = 'Mã Nhân Viên Đã tồn tại';
                res.send(message);
            } else {
                let sqladd = `INSERT INTO nhanvien(manv, tennv, ngaysinh, gioitinh, diachi, sdt) VALUES(${manv},'${tennv}','${ngaysinh}','${gioitinh}','${diachi}',${sdt})`;
                // let sqladd = "INSERT INTO `nhanvien` (manv, tennv, ngaysinh, gioitinh, diachi, sdt) VALUES ('" +
                //     manv + "', '" + tennv + "', '" + ngaysinh + "', '" + gioitinh + "', '" + diachi + "', '" + sdt + "')";
                console.log(sqladd);
                conn.query(sqladd, (err, result) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    res.redirect('/nhanvien');
                });
            }
        });
    },
    update: (req, res) => {
        let lenh = req.body.lenh;
        let manv = req.params.manv;
        console.log(lenh)
        if (lenh === "update") {
            let tennv = req.body.tennv;
            let ngaysinh = req.body.ngaysinh;
            let gioitinh = req.body.gioitinh;
            let diachi = req.body.diachi;
            let sdt = req.body.sdt;
            let sqlupdate = "UPDATE `nhanvien` SET tennv ='" + tennv + "',ngaysinh = '" + ngaysinh + "',gioitinh = '" + gioitinh + "',diachi = '" + diachi + "',sdt = '" + sdt + "' WHERE manv = '" + manv + "'";
            console.log(sqlupdate)
            conn.query(sqlupdate, [tennv, ngaysinh, gioitinh, diachi, sdt, manv], (err, result) => {
                if (err) {
                    return res.status(500).send(err);
                }
                res.redirect('/nhanvien');
            });
        }
        if (lenh === "xoanhavin") {
            console.log("Chạy đến đâu")
            let sql = "delete from `nhanvien` where manv = '" + manv + "'"
            console.log(sql)
            conn.query(sql, [manv], (err, response) => {
                if (err) {
                    return res.status(500).send(err);
                }
                res.redirect('/nhanvien');
            });
        }
    }
}