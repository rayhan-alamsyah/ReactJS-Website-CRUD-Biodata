const ProjekRoute = require('express').Router()
const ProjekController = require('../controllers/ProjekControllers')
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../img/projek')); // folder upload
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // nama file unik
    }
});

const upload = multer({ storage });

ProjekRoute.get('/',ProjekController.getProjeks);
ProjekRoute.post('/', upload.single('gambar'), ProjekController.add);
ProjekRoute.put('/:id', upload.single('gambar'), ProjekController.update);
ProjekRoute.delete('/:id',ProjekController.delete);

module.exports = ProjekRoute;