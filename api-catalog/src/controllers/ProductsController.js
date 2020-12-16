class ProductController {
  constructor(repository) {
    this._repository = repository;
    this.show = this.show.bind(this)
  }

  async show(req, res, next) {
    const { id } = req.params;
    const { response } = req.query;
    
    let complete = response === 'complete';
    try {
      const result = await this._repository.getProduct(id, complete);
      
      if (result)
        return res.json(result);
      
      return res.status(404).json({ message: 'Not found product'});
    } catch (error) {
      next(error);
    }
    
  }
}

module.exports = ProductController;