if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL_URL = "mongodb://127.0.0.1:27017/explorecache";
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => console.log(err));

async function main() {
  //   await mongoose.connect(MONGO_URL);
  await mongoose.connect(MONGO_URL_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  // A-D-M-I-N
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "66abafef7669dafcccd4c66b", //replace with objId
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};
initDB();
