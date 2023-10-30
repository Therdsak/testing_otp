const axios = require("axios");
const otpController = {
  postRequestOtp(req, res) {
    axios
      .post("https://otp.thaibulksms.com/v2/otp/request", req.body)
      .then(function (response) {
        res.json(response.body.data);
      })
      .catch(function (error) {
        res.json(error.response.data);
      });
  },
  
  postVerifyOtp(req, res, next) {
    axios
      .post("https://otp.thaibulksms.com/v2/otp/verify", req.body)
      .then(function (response) {
        res.json(response.body.data);
      })
      .catch(function (error) {
        res.json(error.response.data);
      });
  },
};

module.exports = otpController;
