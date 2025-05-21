const model = require("../model/review.model.js");

module.exports.createReview = async (req, res) => {
  const review = await model.createReview(req.body);
  if (review && "id" in review) {
    return res.successResponse("Review created successfully", review);
  } else if (review && "already" in review) {
    return res.errorResponse(review.already, 400);
  } else if (review && "notFound" in review) {
    return res.errorResponse(review.notFound, 404);
  }
  return res.internalErrorResponse("Something went wrong");
};

module.exports.deleteReview = async (req, res) => {
  const rid = req.params.rid;
  const review = await model.deleteReview(rid);
  if (review && "id" in review) {
    return res.successResponse("Review deleted successfully", review);
  } else if (review && "notFound" in review) {
    return res.notFoundResponse(review.notFound);
  }
  return res.internalErrorResponse("Something went wrong");
};


