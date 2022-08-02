const router = require("express").Router();
const axios = require("axios");
require("dotenv").config();

router.post("/Contact", async (req, res) => {
  // console.log(req.body);
  const requestURL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${req.body.token}`;

  const searchData = {
    url: requestURL,
    method: "POST",
  };
  try {
    // console.log(searchData);
    const response = await axios(searchData);
    // console.log(response);

    if (response.data.success) {
      console.log("recaptcha success? " + response.data.success);

      res.send(response.data.success);
    } else {
      console.log("recaptcha failed:" + response.statusText);
    }
  } catch (err) {}
});

module.exports = router;
