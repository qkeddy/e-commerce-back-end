// Initialize Express.js router object
const router = require("express").Router();

// Import references to the route models
const { Category, Product } = require("../../models");

/** **************************************
 ** The `/api/categories` endpoint
 *  **************************************/

// Find all categories and the associated products
router.get("/", async (req, res) => {
    try {
        const categoryData = await Category.findAll({
            include: [
                {
                    model: Product,
                },
            ],
        });
        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err.toString());
    }
});

// Find one category by its `id` value and the associated product(s)
router.get("/:id", async (req, res) => {
    console.log(req.params.id);
    try {
        const categoryData = await Category.findByPk(req.params.id, {
            include: [
                {
                    model: Product,
                },
            ],
        });
        if (categoryData) {
            res.status(200).json(categoryData);
        } else {
            res.status(404).json({
                message: "No category found with that id",
            });
            return;
        }
    } catch (err) {
        res.status(500).json(err.toString());
    }
});

// Create a new category
router.post("/", async (req, res) => {
    try {
        const categoryData = await Category.create(req.body);
        res.status(200).json(categoryData);
    } catch (err) {
        res.status(400).json(err.errors);
    }
});

router.put("/:id", (req, res) => {
    // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
    // delete a category by its `id` value
});

module.exports = router;
