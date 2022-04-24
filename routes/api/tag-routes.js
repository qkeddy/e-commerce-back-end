// Initialize Express.js router object
const router = require("express").Router();

// Import references to the route models
const { Tag, Product, ProductTag } = require("../../models");

/** **************************************
 ** The `/api/tags` endpoint
 *  **************************************/

// Find all tags with associated product data
router.get("/", async (req, res) => {
    try {
        const tagData = await Tag.findAll({
            include: [
                {
                    model: Product,
                    through: ProductTag,
                    as: "associated_products",
                },
            ],
        });
        res.status(200).json(tagData);
    } catch (err) {
        res.status(500).json(err.toString());
    }
});

// Find a single tag by its `id` with associated product data
router.get("/:id", async (req, res) => {
    try {
        // Pass in the URL parameter location id
        const tagData = await Tag.findByPk(req.params.id, {
            include: [
                {
                    model: Product,
                    through: ProductTag,
                    as: "associated_products",
                },
            ],
        });
        if (!tagData) {
            res.status(404).json({ message: "No tag found with this id" });
            return;
        }
        res.status(200).json(tagData);
    } catch (err) {
        res.status(500).json(err.toString());
    }
});

// Create a new tag
router.post("/", async (req, res) => {
    try {
        const tagData = await Tag.create(req.body);
        res.status(200).json(tagData);
    } catch (err) {
        res.status(400).json(err.errors);
    }
});

// Update a tag's name by its `id` value
router.put("/:id", async (req, res) => {
    try {
        const tagData = await Tag.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!tagData) {
            res.status(404).json({ message: "No tag found with this id" });
            return;
        }
        res.status(200).json(tagData);
    } catch (err) {
        res.status(500).json(err.toString());
    }
});

// Delete on tag by its `id` value
router.delete("/:id", async (req, res) => {
    try {
        const tagData = await Tag.destroy({
            where: { id: req.params.id },
        });
        if (!tagData) {
            res.status(404).json({ message: "No tag found with this id" });
        }
        res.status(200).json(tagData);
    } catch (err) {
        res.status(500).json(err.toString());
    }
});

module.exports = router;
