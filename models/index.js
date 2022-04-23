// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Categories have many Products
Category.hasMany(Product);

// Products belongsTo Category
Product.belongsTo(Category);


// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
    through: {
        model: ProductTag,
        unique: false,
    },
    as: "alias_1",
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
    through: {
        model: ProductTag,
        unique: false,
    },
    as: "alias_2",
});

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
};
