const { keys } = require('../../keys')

//Connect DataBase
const mongoose = require('mongoose');

const setAdditional = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const handleError = (error) => {
    mongoose.connection.on('error', err => {
        console.log(err);
    });
}
const dbFunc = async () => {
    const messageSuccess = ">> Connection to the database successfully"
    const messageError = ">> Connection database error"

    try {
        const db = await mongoose.connect(keys.URI_DB, setAdditional);
        db ? console.log(messageSuccess) : console.log(messageError)

    } catch (error) {
        handleError(error);
    }
}


module.exports = dbFunc