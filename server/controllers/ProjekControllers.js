const { projek } = require('../models')
const fs = require('fs');
const path = require('path');

class ProjekController {
    static getProjeks (req,res) {
            projek.findAll()
                .then(result => {
                    res.json(result)
                })
                .catch(err => {
                    res.json(err)
                })
    }

    static add(req, res) {
            const { judul, text, nama_link, masukan_link } = req.body;
    
            // gambar diambil dari multer
            const gambar = req.file ? '/img/projek/' + req.file.filename : null;
    
            projek.create({
                judul,
                text,
                nama_link,
                masukan_link,
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
            const { judul, text, nama_link, masukan_link } = req.body;
            const id = +req.params.id;
            const gambarBaru = req.file ? '/img/projek/' + req.file.filename : null;
    
            projek.findByPk(id)
                .then(data => {
                    if (!data) {
                        return res.json({ message: "Data tidak ditemukan" });
                    }
    
                    // Hapus gambar lama jika ada upload baru
                    if (gambarBaru && data.gambar) {
                        const namaFileLama = data.gambar.replace('/img/projek/', '');
                        const oldPath = path.join(__dirname, '../img/projek', namaFileLama);
    
                        if (fs.existsSync(oldPath)) {
                            fs.unlinkSync(oldPath);
                        }
                    }
    
                    // Data yang mau diupdate
                    const updateData = { judul, text, nama_link, masukan_link };
                    if (gambarBaru) updateData.gambar = gambarBaru;
    
                    return projek.update(updateData, { where: { id } });
                })
                .then(result => res.json({ message: "Update berhasil", result }))
                .catch(err => res.json(err));
    }

    static delete(req, res) {
                    const id = +req.params.id;
            
                    projek.findByPk(id)
                        .then(data => {
                            if (!data) {
                                return res.json({ message: "Data tidak ditemukan" });
                            }
            
                            // hapus file gambar jika ada
                            if (data.gambar) {
                                const namaFile = data.gambar.replace('/img/projek/', '');
                                const filePath = path.join(__dirname, '../img/projek', namaFile);
            
                                if (fs.existsSync(filePath)) {
                                    fs.unlinkSync(filePath);
                                }
                            }
            
                            return projek.destroy({ where: { id } });
                        })
                        .then(result => res.json({ message: "Data & gambar berhasil dihapus" }))
                        .catch(err => res.json(err));
    }
    

}

module.exports = ProjekController;