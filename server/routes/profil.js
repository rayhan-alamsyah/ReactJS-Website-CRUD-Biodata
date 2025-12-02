const ProfilRoute= require('express').Router()
const ProfilController = require('../controllers/ProfileControllers.js')
const multer = require('multer');
const path = require('path');

// ===== SETUP MULTER UPLOAD =====
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../img/profil')); // folder upload
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // nama file unik
    }
});

const upload = multer({ storage });

ProfilRoute.get('/',ProfilController.getProfils);
ProfilRoute.post('/', upload.single('gambar'), ProfilController.add);
ProfilRoute.put('/:id', upload.single('gambar'), ProfilController.update);
ProfilRoute.delete('/:id',ProfilController.delete);

module.exports = ProfilRoute