const { Router } = require('express');
const productFactory = require('./factories/productsFactory');

const { productController } = productFactory();
const router = Router();

router.get('/', (req, res) => {
  return res.send("It's works");
});

//Products
router.get('/products/:id', productController.show);

module.exports = router;
