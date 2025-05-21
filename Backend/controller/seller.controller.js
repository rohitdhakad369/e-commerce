const model = require("../model/seller.model.js");


module.exports.getSellerAccount = async (req, res) => {
  const id = req.params.id;
  const response = await model.getSellerProfile(id);
  if (response && "id" in response) {
    return res.successResponse("Seller Account fetched successfully", response);
  } else if (response && "notfound" in response) {
    return res.notFoundResponse(response.notFound);
  }
  return res.internalErrorResponse("Something went wrong");
};


module.exports.updateSellerAccount = async (req, res) => {
  const userId = req.params.id;
  const response = await model.updateSeller(userId, req.body);
  if (response && "data" in response) {
    return res.successResponse("Account Updated", response.data);
  } else if (response && "already" in response) {
    return res.alreadyExistsResponse(response.already);
  } else if (response && "notFound" in response) {
    return res.notFoundResponse(response.notFound);
  }
  res.internalErrorResponse("Something went wrong");
};

module.exports.updateSellerProfile = async (req, res) => {
  const userId = req.id;
  const response = await model.updateSeller(userId, req.body);
  if (response && "data" in response) {
    return res.successResponse("Account Updated", response.data);
  } else if (response && "notFound" in response) {
    return res.notFoundResponse(response.notFound);
  }
  res.internalErrorResponse("Something went wrong");
};

module.exports.deleteSellerAccount = async (req, res) => {
  const id = req.params.id;
  const response = await model.deleteSellerId(id);
  if (response && "data" in response) {
    return res.successResponse("Account Updated", response.data);
  } else if (response && "notFound" in response) {
    return res.notFoundResponse(response.notFound);
  }
  res.internalErrorResponse("Something went wrong");
};

