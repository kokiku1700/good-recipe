const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });

const dbConnenct = async() => {
    try {
        const connenct = await mongoose.connect(process.env.REACT_APP_DB_CONNECT);
        console.log("DB connect");
    } catch ( err ) {
        console.log(err);
    }
};

module.exports = dbConnenct;