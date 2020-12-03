'use strict';

const Sequelize = require(`sequelize`);
const {
  DB_HOST,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_DIALECT,
} = require(`../../../config-env`);
const {
  DataTypes
} = require(`sequelize`);
const {
  getLogger
} = require(`../logger`);
const logger = getLogger();
const {
  ExitCode
} = require(`../../constants`);
const {
  products,
  statuses,
  categories,
  collections,
  collectionsProducts,
  categoriesProducts,
  countries,
  states,
} = require(`../../../fill-db`);

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
});

const Address = require(`./models/address`)(sequelize);
const Cart = require(`./models/cart`)(sequelize);
const Category = require(`./models/category`)(sequelize);
const Collection = require(`./models/collection`)(sequelize);
const Country = require(`./models/country`)(sequelize);
const Order = require(`./models/order`)(sequelize);
const Product = require(`./models/product`)(sequelize);
const State = require(`./models/state`)(sequelize);
const Status = require(`./models/status`)(sequelize);
const User = require(`./models/user`)(sequelize);
const Wishlist = require(`./models/wishlist`)(sequelize);
const RefreshToken = require(`./models/refreshToken`)(sequelize);


User.belongsTo(Address, {
  as: `address`,
  foreignKey: `addressId`,
});

Address.hasMany(User, {
  as: `users`,
  foreignKey: `addressId`,
});

Country.hasMany(Address, {
  as: `addresses`,
  foreignKey: `countryId`,
});

Address.belongsTo(Country, {
  as: `country`,
  foreignKey: `countryId`,
});

State.hasMany(Address, {
  as: `addresses`,
  foreignKey: `stateId`,
});

Address.belongsTo(State, {
  as: `state`,
  foreignKey: `stateId`,
});

Cart.belongsTo(User, {
  as: `user`,
  foreignKey: `userId`,
});

User.belongsTo(Cart, {
  as: `cart`,
  foreignKey: `cartId`,
  constraints: false
});

Wishlist.belongsTo(User, {
  as: `user`,
  foreignKey: `userId`,
});

User.belongsTo(Wishlist, {
  as: `wishlist`,
  foreignKey: `wishlistId`,
  constraints: false
});

User.hasMany(Order, {
  as: `orders`,
  foreignKey: `userId`,
});

Order.belongsTo(User, {
  as: `user`,
  foreignKey: `userId`,
});

Order.belongsTo(Status, {
  as: `status`,
  foreignKey: `statusId`,
});

Status.hasMany(Order, {
  as: `orders`,
  foreignKey: `statusId`,
});

Wishlist.belongsToMany(Product, {
  through: `wishlistsProducts`,
  as: `products`,
  foreignKey: `wishlistId`,
});

Product.belongsToMany(Wishlist, {
  through: `wishlistsProducts`,
  as: `wishlists`,
  foreignKey: `productId`,
});

const CartsProducts = sequelize.define(`cartsProducts`, {
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  timestamps: false,
  paranoid: false,
});

Cart.belongsToMany(Product, {
  through: CartsProducts,
  as: `products`,
  foreignKey: `cartId`,
});

Product.belongsToMany(Cart, {
  through: CartsProducts,
  as: `carts`,
  foreignKey: `productId`,
});

Order.belongsToMany(Product, {
  through: `ordersProducts`,
  as: `products`,
  foreignKey: `orderId`,
});

Product.belongsToMany(Order, {
  through: `ordersProducts`,
  as: `orders`,
  foreignKey: `productId`,
});

const CollectionsProducts = sequelize.define(`collectionsProducts`, {}, {
  timestamps: false,
  paranoid: false,
});

Collection.belongsToMany(Product, {
  through: CollectionsProducts,
  as: `products`,
  foreignKey: `collectionId`,
});

Product.belongsToMany(Collection, {
  through: CollectionsProducts,
  as: `collections`,
  foreignKey: `productId`,
});

const CategoriesProducts = sequelize.define(`categoriesProducts`, {}, {
  timestamps: false,
  paranoid: false,
});

Category.belongsToMany(Product, {
  through: CategoriesProducts,
  as: `products`,
  foreignKey: `categoryId`,
});

Product.belongsToMany(Category, {
  through: CategoriesProducts,
  as: `categories`,
  foreignKey: `productId`,
});

const connect = async () => {
  logger.debug(`Start connecting to the data base...`);
  try {
    await sequelize.authenticate();
    logger.debug(`Connected successfully!`);
  } catch (err) {
    logger.error(`Connection error: ${err}`);
    process.exit(ExitCode.error);
  }
};

const initDb = async () => {
  await sequelize.sync({
    force: true
  });

  await Product.bulkCreate(products);
  await Status.bulkCreate(statuses);
  await Category.bulkCreate(categories);
  await CategoriesProducts.bulkCreate(categoriesProducts);
  await Collection.bulkCreate(collections);
  await CollectionsProducts.bulkCreate(collectionsProducts);
  await Country.bulkCreate(countries);
  await State.bulkCreate(states);

  logger.debug(`The stucture of the db is successfully created!`);
};

module.exports = {
  models: {
    Address,
    Cart,
    Collection,
    Country,
    Order,
    Product,
    State,
    Status,
    User,
    Wishlist,
    Category,
    RefreshToken,
  },
  initDb,
  connect,
  sequelize,
};
