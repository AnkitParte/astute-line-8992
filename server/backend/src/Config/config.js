const mongoose = require("mongoose");
// feedback: fw18_0044 - Never share the secret credentials and push to github
// use env variables
function connect() {
    return mongoose.connect(`mongodb+srv://vijay:12345@cluster0.ggexotb.mongodb.net/hellobonsai`);
}

module.exports = connect;
