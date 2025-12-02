const { profil } = require('../models')
const fs = require('fs');
const path = require('path');

class ProfilController {
    static getProfils (req,res) {
        profil.findAll()
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.json(err)
            })
    }
        
    static add(req, res) {
        const { judul, text } = req.body;

        // gambar diambil dari multer
        const gambar = req.file ? '/img/profil/' + req.file.filename : null;

        profil.create({
            judul,
            text,
            gambar
        })
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json(err);
        });
    }

    static update(req, res) {
        const { judul, text } = req.body;
        const id = +req.params.id;
        const gambarBaru = req.file ? '/img/profil/' + req.file.filename : null;

        profil.findByPk(id)
            .then(data => {
                if (!data) {
                    return res.json({ message: "Data tidak ditemukan" });
                }

                // Hapus gambar lama jika ada upload baru
                if (gambarBaru && data.gambar) {
                    const namaFileLama = data.gambar.replace('/img/profil/', '');
                    const oldPath = path.join(__dirname, '../img/profil', namaFileLama);

                    if (fs.existsSync(oldPath)) {
                        fs.unlinkSync(oldPath);
                    }
                }

                // Data yang mau diupdate
                const updateData = { judul, text };
                if (gambarBaru) updateData.gambar = gambarBaru;

                return profil.update(updateData, { where: { id } });
            })
            .then(result => res.json({ message: "Update berhasil", result }))
            .catch(err => res.json(err));
    }
        

    static delete(req, res) {
        const id = +req.params.id;

        profil.findByPk(id)
            .then(data => {
                if (!data) {
                    return res.json({ message: "Data tidak ditemukan" });
                }

                // hapus file gambar jika ada
                if (data.gambar) {
                    const namaFile = data.gambar.replace('/img/profil/', '');
                    const filePath = path.join(__dirname, '../img/profil', namaFile);

                    if (fs.existsSync(filePath)) {
                        fs.unlinkSync(filePath);
                    }
                }

                return profil.destroy({ where: { id } });
            })
            .then(result => res.json({ message: "Data & gambar berhasil dihapus" }))
            .catch(err => res.json(err));
    }
}

module.exports = ProfilController;