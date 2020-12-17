const { Router } = require('express');
const productFactory = require('./factories/productsFactory');

const { productController } = productFactory();
const router = Router();

router.get('/', (req, res) => {
  return res.send("It's works");
});

//Routes
/**
 *  @swagger
 * 
 *  /products/{id}:
 *   get:
 *    tags:
 *      - Products
 *    description: Returns a single product
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: id
 *        description: Product's id
 *        in: path
 *        required: true
 *        type: integer
 *      - name: response
 *        description: Product type return
 *        in: query
 *        required: false
 *        type: string
 *    responses:
 *      '200':
 *         description: A single product
 *         schema: 
 *            $ref: ´#/definitions/Product
 */
router.get('/products/:id', productController.show);

module.exports = router;
