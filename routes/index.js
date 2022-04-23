// Initialize Express.js router object
const router = require("express").Router();

// Initialize route to API path (./api/index.js)
const apiRoutes = require("./api");

// Open the route by defining the URI path to "/api"
router.use("/api", apiRoutes);

// Display a message when an undefined route is requested
router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>");
});

// Export the router object
module.exports = router;
