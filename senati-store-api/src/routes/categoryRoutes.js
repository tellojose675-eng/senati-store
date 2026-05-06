const express = require('express');

const router = express.Router();



//Ruta temporal (mientras desarrollamos)

router.get('/', (req, res) => {

  res.json({ message: 'Ruta de categorìas - En desarrollo'});

});



module.exports = router;