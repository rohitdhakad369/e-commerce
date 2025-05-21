const mongoose = require("mongoose");

const Shop = require("../db/model/Shop.js");
const Seller = require("../db/model/Seller.js");
const Product = require("../db/model/Product.js");

module.exports.createShop = async (body, sellerId) => {
  return new Promise(async (resolve) => {
    try {
      const {
        name,
        description,
        profilePhoto,
        media,
        clothCount,
        listedClothCount,
        maxPrice,
        minPrice,
        rating,
        reviewCount,
        phoneNumber,
        isSaleLive,
        area,
        address,
        city,
        state,
        pincode,
        location,
        social,
      } = body;

      const shopExistsWithName = await this.shopExistsWithName(name);

      if (shopExistsWithName) {
        return resolve({ already: "Shop name already exists" });
      }

      const shop = await Shop.create({
        name,
        description,
        profilePhoto,
        media,
        clothCount,
        listedClothCount,
        minPrice,
        maxPrice,
        rating,
        reviewCount,
        sellerId,
        phoneNumber,
        isSaleLive,
        area,
        address,
        city,
        state,
        pincode,
        location,
        social,
      });

      if (!shop || shop.name === null || !shop.name) {
        return resolve({ error: "Error while creating Seller ID" });
      }

      await Seller.updateOne(
        { _id: new mongoose.Types.ObjectId(sellerId) },
        {
          $push: {
            shops: shop.id,
          },
        }
      );

      return resolve(shop.toObject());
    } catch (error) {
      resolve({ error });
    }
  });

module.exports.getShopEarnings = async (sid) => {
  return new Promise(async (resolve) => {
    try {
      const totalEarnings = Shop.aggregate([
        { $match: { _id: new mongoose.Types.ObjectId(sid) } },
        {
          $group: {
            _id: null,
            total: {
              $sum: "$productsSold.$productAmount",
            },
          },
        },
      ]);

      const data = {
        shopId: sid,
        totalEarnings,
      };

      // Return response
      return resolve({ data });
    } catch (error) {
      resolve({ error });
    }
  });
};

module.exports.deleteShop = async (id) => {
  return new Promise(async (resolve) => {
    try {
      // Delete All Products
      const products = await Product.deleteMany({
        shopId: new mongoose.Types.ObjectId(id),
      });

      // Delete the Shop
      const shop = await Shop.deleteOne({
        _id: new mongoose.Types.ObjectId(id),
      });

      // Return response
      return resolve({ data: "Shop Deleted Successfully" });
    } catch (error) {
      resolve({ error });
    }
  });
};

module.exports.shopExistsWithName = async (name) => {
  const seller = await Shop.findOne({ name });
  return seller != null ? true : false;
};}
