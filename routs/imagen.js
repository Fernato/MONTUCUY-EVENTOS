const {Router} = require('express');
const router = Router();


const {crearImagen} = require('../controllers/imagenController');
const upload = require('../controllers/upload');

router.post('/newImagen', upload.single('imagen') ,crearImagen)


module.exports = router;