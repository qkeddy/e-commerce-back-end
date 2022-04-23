// Require supporting NPM modules
const express = require("express");
const routes = require("./routes");

// Initialize the Express.js server
const app = express();
const PORT = process.env.PORT || 3001;

// Standard middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Turn on routes
app.use(routes);

// Sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT} 🚀`));
});
