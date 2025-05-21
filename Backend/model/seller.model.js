const mongoose = require("mongoose");
const Seller = require("../db/model/Seller.js");
const Shop = require("../db/model/Shop.js");
const Product = require("../db/model/Product.js");

module.exports.createSeller = async (body) => {
  return new Promise(async (resolve) => {
    try {
      const {
        name,
        businessName,
        description,
        image,
        bannerImage,
        address,
        city,
        locationName,
        location,
      } = body;

      const sellerExistsWithBusinessName =
        await this.sellerExistsWithBusinessName(businessName);

      if (sellerExistsWithBusinessName) {
        return resolve({ already: "Business name already exists" });
      }

      const sellerExistsWithAddress = await this.sellerExistsWithAddress(
        address
      );

      if (sellerExistsWithAddress) {
        return resolve({ already: "Address already exists" });
      }

      const seller = await Seller.create({
        name,
        businessName,
        description,
        image,
        bannerImage,
        address,
        city,
        locationName,
        location,
      });

      if (!seller || seller.name === null || !seller.name) {
        return resolve({ error: "Error while creating Seller ID" });
      }

      return resolve(seller.toObject());
    } catch (error) {
      resolve({ error });
    }
  });
};

module.exports.getSellerProfile = async (id) => {
  return new Promise(async (resolve) => {
    try {
      const seller = await Seller.findOne({
        _id: new mongoose.Types.ObjectId(id),
      });

      // TODO: Total Sale, Products, Shops - through aggregation

      if (!seller || !"name" in seller) {
        return resolve({ notFound: "Seller Account not found" });
      }

      return resolve({
        data: {
          seller,
          sales,
          products,
          shops,
        },
      });
    } catch (error) {
      resolve({ error });
    }
  });
};

module.exports.getSellerAccounts = async (limit, page) => {
  return new Promise(async (resolve) => {
    try {
      const mongoLimit = limit || 8;
      const mongoSkip = page ? (parseInt(page) - 1) * mongoLimit : 0;
      const query = [];
      // Add Pagination
      const projection = {
        name: 1,
        businessName: 1,
        image: 1,
        shops: 1,
      };
      query.push(
        { $sort: { _id: -1 } },
        { $skip: mongoSkip },
        { $limit: mongoLimit },
        { $project: projection }
      );
      return resolve(await Seller.aggregate(query));
    } catch (error) {
      resolve({ error });
    }
  });
};

module.exports.getSellerProfileByBusinessName = async (bName) => {
  return new Promise(async (resolve) => {
    try {
      const seller = await Seller.find({
        businessName: bName,
      });

      if (!seller || !"name" in seller) {
        return resolve({ notFound: "Seller Account not found" });
      }

      return resolve(seller.toObject());
    } catch (error) {
      resolve({ error });
    }
  });
};

module.exports.updateSeller = async (id, body) => {
  return new Promise(async (resolve) => {
    try {
      const updateExpression = {};
      // Validate the incoming data
      const fieldsToUpdate = [
        "name",
        "businessName",
        "description",
        "image",
        "bannerImage",
        "address",
        "city",
        "locationName",
        "location",
      ];

      for (const field of fieldsToUpdate) {
        if (fieldsToUpdate.includes(field)) {
          updateExpression[field] = body[field];
        }
      }

      const sellerExistsWithBusinessName =
        await this.sellerExistsWithBusinessName(businessName);

      if (sellerExistsWithBusinessName) {
        return resolve({ already: "Business name already exists" });
      }

      const updatedResult = await Seller.findOneAndUpdate(
        { _id: new mongoose.Types.ObjectId(id) },
        updateExpression,
        {
          new: true,
          projection: projection || {},
        }
      );
      if (updatedResult || "name" in updatedResult) {
        return resolve({ notFound: `Seller Account not found` });
      }

      return resolve(updatedResult.toObject());
    } catch (error) {
      resolve({ error });
    }
  });
};

module.exports.getAllShops = async (search, page, limit) => {
  try {
    let query = [];
    const searchQuery = search || "";
    const mongoLimit = limit || 8;
    const sellerId = req.userId;
    const mongoSkip = page ? (parseInt(page) - 1) * mongoLimit : 0;
    if (searchQuery.trim().length > 1) {
      query.push({ $match: { $text: { $search: searchQuery } } });
    }
    const projection = {
      name: 1,
      profilePhoto: 1,
      media: 1,
      rating: 1,
      reviewCount: 1,
      city: 1,
    };

    // Add Pagination
    query.push(
      { $match: { sellerId: new mongoose.Types.ObjectId(sellerId) } },
      { $sort: { _id: -1 } },
      { $skip: mongoSkip },
      { $limit: mongoLimit },
      { $project: projection }
    );

    return await Shop.aggregate(query);
  } catch (error) {
    return { error };
  }
};

module.exports.sellerExistsWithBusinessName = async (bName) => {
  const seller = await Seller.findOne({ businessName: bName });
  return seller != null ? true : false;
};

module.exports.sellerExistsWithAddress = async (address) => {
  const seller = await Seller.findOne({ address });
  return seller != null ? true : false;
};
