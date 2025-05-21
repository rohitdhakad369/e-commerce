const model = require("../model/order.model.js");

module.exports.create_order = async (req, res) => {
  const userId = req.userId;
  const response = await model.create_order(userId, req.body);
  console.log(response);
  if (response && "data" in response) {
    return res.successResponse("Order created successfully", response);
  } else if (response && "notFound" in response) {
    return res.notFoundResponse(response.notFound);
  } else if (response.error === undefined)
    return res.internalErrorResponse("Product not found");
  return res.internalErrorResponse(response.error);
};


