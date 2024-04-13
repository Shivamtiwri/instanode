const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 4000;
const cors = require("cors");
const router = require("./Router/router");
const bip39 = require("bip39");
const Wallet = require("ethereumjs-wallet");
const crypto = require("crypto");

app.use(cors(8));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Start Servre...!");
});

app.use(router);
// app.post("/wallet-api", (req, res) => {
//   const { phrase } = req.body;
//   //   const aesKey = generateAesKey();
//   //   console.log("Random AES-256 Key (Base64):", aesKey);
//   if (
//     phrase ===
//     "APPIDftyUftyEUrnfsjincfjwdnjicvnjisdv455654v12r1v51d65v12s65d1vsd1v1s651vsr1v65sr1vrsy"
//   ) {
//     try {
//       const mnemonic = bip39.generateMnemonic();
//       const seed = bip39.mnemonicToSeed(mnemonic);
//       const wallet = Wallet.generate(seed);
//       const address = wallet.getAddressString();
//       const privateKey = wallet.getPrivateKeyString();

//       //   function encryptData(data, key) {
//       //     const cipher = crypto.createCipher("aes-256-cbc", key);
//       //     let encryptedData = cipher.update(data, "utf-8", "hex");
//       //     encryptedData += cipher.final("hex");
//       //     return encryptedData;
//       //   }

//       //   // Example usage

//       //   const encryptionKey = "mZKKymksdHzEN2f9gDxgV4lNUJlmn//8sJemKdT5DZQ=";

//       //   const privateKey1 = encryptData(privateKey, encryptionKey);
//       //   const address1 = encryptData(address, encryptionKey);
//       //   const mnemonic1 = encryptData(mnemonic, encryptionKey);

//       res.status(200).json({
//         Response_code: 200,
//         data: {
//           address,
//           privateKey,
//           mnemonic,
//         },
//         msg: "Get data... !",
//       });
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   } else {
//     res.status(201).json({
//       Response_code: 201,
//       msg: "Key not Match... !",
//     });
//   }
// });

app.listen(port, () => {
  console.log(`styart server= ${port}`);
});
