module.exports = {
    danhsachnv: (req, res) => {
        let query = "SELECT * FROM `nhanvien` ORDER BY manv ASC";
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/danhsachnv');
            }
            res.json(result);
        });
    },
};