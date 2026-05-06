const express = require('express');

const router = express.Router();



//Ruta temporal (mientras desarrollamos)

router.get('/', (req, res) => {

  res.json({ message: 'Ruta de usuarios - En desarrollo'});

});



// Registro temporal

router.get('/register', (req, res) => {

  res.json({ message: 'Registro de usuarios - En desarrollo'});

});



//Login temporal

router.get('/login', (req, res) => {

  res.json({ message: 'Logìn de usuarios - En desarrollo'});

});



module.exports = router;