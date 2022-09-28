const mongoose = require("mongoose");

function connect() {
    return mongoose.connect(`mongodb+srv://vijay:12345@cluster0.ggexotb.mongodb.net/hellobonsai`);
}

module.exports = connect;