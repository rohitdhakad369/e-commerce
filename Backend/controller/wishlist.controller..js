const model = require("../model/wishlist.model.js");

module.exports.createWishlist = async (req, res) => {
  const response = await model.createWishlist(req.body);
  if (response && "id" in response) {
    return res.successResponse("Wishlist created successfully", response);
  } else if (response && "already" in response) {
    return res.status(202).json({ data: "Wishlist Already Added." });
  }
  return res.internalErrorResponse("Something went wrong");
};

