const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    inventory: [
      {
        size: { type: String },
        items: { type: Number },
        type: Schema.Types.Mixed,
      },
    ],

    occasionType: { type: String, default: "Party", trim: true },
    brandInfo: { type: mongoose.Schema.Types.Mixed },
    categoryId: { type: Schema.Types.ObjectId, ref: "Category" },
    categoryName: { type: String },
    subCategoryId: { type: Schema.Types.ObjectId, ref: "SubCategory" },
    subCategoryName: { type: String },


    adminId: { type: mongoose.Types.ObjectId, ref: "User" },
    shopId: { type: mongoose.Types.ObjectId, ref: "Shop" },

    locationName: { type: String, trim: true },
    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },
      coordinates: {
        type: [Number],
        default: [0, 0],
      },
    },

    createdBy: { type: mongoose.Types.ObjectId },
  },
  {
    toObject: {
      transform: function (_, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        if (
          "location" in ret &&
          "type" in ret.location &&
          "coordinates" in ret.location &&
          Array.isArray(ret.location.coordinates) &&
          ret.location.coordinates.length > 1
        ) {
          ret.location = [
            ret.location.coordinates[1],
            ret.location.coordinates[0],
          ];
        }
        return ret;
      },
    },
    timestamps: true,
  }
);

productSchema.index({ name: 1 }, { sparse: true });
productSchema.index({ description: 1 }, { sparse: true });

productSchema.index(
  { name: "text", brandInfo: "text" },
  { weights: { name: 10, brandInfo: 6 } },
  { collation: { locale: "en", strength: 2 } }
);

module.exports = mongoose.model("Product", productSchema, "Product");
