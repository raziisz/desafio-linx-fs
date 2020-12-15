class ProductController {
  constructor(repository) {
    this._repository = repository;
  }

  async show(req, res, next) {
    const { id } = req.params;

    return res.json({ message: 'show'});
  }
}

module.exports = ProductController;