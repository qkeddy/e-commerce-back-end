// Initialize the API Express Router and the actual routes to each API
const router = require("express").Router();
const categoryRoutes = require("./category-routes");
const productRoutes = require("./product-routes");
const tagRoutes = require("./tag-routes");

// Open the routes by defining the URI path
router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);
router.use("/tags", tagRoutes);

// Export the router object
module.exports = router;
