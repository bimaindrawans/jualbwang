const fs = require('fs')
const crypto = require('crypto')
const axios = require('axios')

function getProduk(digiuser, digiapi) {
  let code = "pricelist";

  let hasho = crypto
    .createHash("md5")
    .update(digiuser + digiapi + code)
    .digest("hex");

  var config = {
    method: "POST", // Set the HTTP method to POST
    url: "https://api.digiflazz.com/v1/price-list", // Set the target URL
    data: {
      cmd: "prepaid",
      username: digiuser,
      sign: hasho,
    },
  };

  axios(config)
    .then(function (response) {
      let data = JSON.stringify(response.data.data);
       console.log("Sukses");
      // Simpan data ke file
      fs.writeFileSync("./Pengaturan/database/datadigiflaz.json", data);
      let dataup = JSON.parse(fs.readFileSync("./Pengaturan/database/datadigiflaz.json"));
      let updatedData = JSON.stringify(dataup);
      fs.writeFileSync("./Pengaturan/database/datadigiflaz.json", updatedData);
    })

    .catch((error) => {
      console.log("Gagal");
    });
}

module.exports = { getProduk }