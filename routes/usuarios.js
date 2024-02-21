const { usuariosGET, usuariosPUT, usuariosPOST, usuariosDELETE, usuariosPATCH} = require('../controllers/usuarios.controller');
const { Router} = require('express');

const router = Router();

router.get('/', usuariosGET);
router.put('/:id', usuariosPUT);
router.post('/', usuariosPOST);
router.delete('/', usuariosDELETE);
router.patch('/', usuariosPATCH );

router.get('/', (req, res) => {
    res.send('Hello Mundo Maria Sofia Galanmmmmm')
  });
router.get('/api2', (req, res) => {
    res.send('Hello Mundo Samu de nn')
  });



module.exports = router;
