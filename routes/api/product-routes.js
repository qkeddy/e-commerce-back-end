const router = require("express").Router();
const { Product, Category, Tag, ProductTag } = require("../../models");

/** **************************************
 ** The `/api/products` endpoint
 *  **************************************/

// Get all products and with associated Category and Tag data
router.get("/", async (req, res) => {
    try {
        const productData = await Product.findAll({
            // Category and Tag need to be treated as separate  elements in the array for the include include. This creates two left outer joins as 1) product by category and 2) product by productTag.
            include: [
                { model: Category },
                {
                    model: Tag,
                    through: ProductTag,
                    as: "product_tags",
                },
            ],
        });
        res.status(200).json(productData);
    } catch (err) {
        res.status(500).json(err.toString());
    }
});

// Get a single product by its `id` with its associated Category and Tag data
router.get("/:id", async (req, res) => {
    try {
        const productData = await Product.findByPk(req.params.id, {
            include: [
                { model: Category },
                {
                    model: Tag,
                    through: ProductTag,
                    as: "product_tags",
                },
            ],
        });
        if (!productData) {
            res.status(404).json({
                message: "No product found with this id",
            });
            return;
        }
        res.status(200).json(productData);
    } catch (err) {
        res.status(500).json(err.toString());
    }
});

// Create new product
router.post("/", async (req, res) => {
    /* req.body should look like this...
    {
      "name": "Basketball",
      "price": 200.00,
      "stock": 3,
      "tag_id": [1, 2, 3, 4],
			"category_id": 5
    }
  */
    await Product.create(req.body)
        .then((product) => {
            // if there's product tags, we need to create pairings to bulk create in the ProductTag model
            if (req.body.tag_id.length) {
                const productTagIdArr = req.body.tag_id.map((tag_id) => {
                    return {
                        product_id: product.id,
                        tag_id,
                    };
                });
                return ProductTag.bulkCreate(productTagIdArr);
            }
            // if no product tags, just respond
            res.status(200).json(product);
        })
        .then((productTag_id) => res.status(200).json(productTag_id))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
});

// Update product by its `id` value
router.put("/:id", async (req, res) => {
    // update product data
    await Product.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
        .then((product) => {
            // find all associated tags from ProductTag
            return ProductTag.findAll({ where: { product_id: req.params.id } });
        })
        .then((productTags) => {
            // get list of current tag_ids
            const productTag_id = productTags.map(({ tag_id }) => tag_id);
            // create filtered list of new tag_ids
            const newProductTags = req.body.tag_id
                .filter((tag_id) => !productTag_id.includes(tag_id))
                .map((tag_id) => {
                    return {
                        product_id: req.params.id,
                        tag_id,
                    };
                });
            // figure out which ones to remove
            const productTagsToRemove = productTags.filter(({ tag_id }) => !req.body.tag_id.includes(tag_id)).map(({ id }) => id);

            // run both actions
            return Promise.all([ProductTag.destroy({ where: { id: productTagsToRemove } }), ProductTag.bulkCreate(newProductTags)]);
        })
        .then((updatedProductTags) => res.json(updatedProductTags))
        .catch((err) => {
            // console.log(err);
            res.status(400).json(err);
        });
});

// Delete one product by its `id` value
router.delete("/:id", async (req, res) => {
    try {
        const productData = await Product.destroy({
            where: { id: req.params.id },
        });
        if (!productData) {
            res.status(404).json({ message: "No product found with this id" });
            return;
        }
        res.status(200).json(productData);
    } catch (err) {
        res.status(500).json(err.toString());
    }
});

module.exports = router;
