const model = require("../model/cart.model.js");

module.exports.getMyCart = async (req, res) => {
  const userId = req.userId;
  const response = await model.getMyCart(userId);
  if (response && "id" in response) {
    return res.successResponse("Cart fetched successfully");
  } else if (response && "notFound" in response) {
    return res.notFoundResponse(response.notFound);
  }
  return res.internalErrorResponse("Something went wrong");
};

module.exports.removeItem = async (req, res) => {
  const userId = req.userId;
  const { productId } = req.body;
  const response = await model.removeItem(userId, productId);
  if (response && "id" in response) {
    return res.successResponse("Item Removed from cart successfully");
  } else if (response && "notFound" in response) {
    return res.notFoundResponse(response.notFound);
  }
  return res.internalErrorResponse("Something went wrong");
};

module.exports.removeAllItem = async (req, res) => {
  const userId = req.userId;
  const response = await model.removeAllItem(userId);
  if (response && "id" in response) {
    return res.successResponse("Item Removed from cart successfully");
  } else if (response && "notFound" in response) {
    return res.notFoundResponse(response.notFound);
  }
  return res.internalErrorResponse("Something went wrong");
};
