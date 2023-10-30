const otp = require('../controllers/otp');

module.exports = function(app) {
    app.post('/otp/request-otp', otp.postRequestOtp);
    app.post('/otp/verify-otp', otp.postVerifyOtp);
}
