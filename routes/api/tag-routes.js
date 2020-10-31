const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
router.get('/', (req, res) => {
  Tag.findAll({
    attributes: ['id', 'tag_name'],
// be sure to include its associated Product data
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock']
    }
  })
  .then(tagResults => res.json(tagResults))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// find a single tag by its `id`
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'tag_name'],
// be sure to include its associated Product data
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock']
    }
  })
  .then(tagResults => res.json(tagResults))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create a new tag
router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name
  })
  .then(tagResults => res.json(tagResults))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  Tag.update({
    tag_name: req.body.tag_name
  },
  {
    where: {
      id: req.params.id
    }
  })
  .then(tagResults => res.json(tagResults))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete on tag by its `id` value
router.delete('/:id', (req, res) => {
  Tag.destroy(
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(tagResults => res.json(tagResults))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
