const { Mongoose } = require('mongoose');
const mongoose = require('mongoose');

const dbConnect = async () => {
	try {
		await mongoose.connect(
			'mongodb+srv://canan:090519@cluster0.b4rcd.mongodb.net/mernStack',
			{
				useCreateIndex: true,
				useFindAndModify: false,
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		);
		console.log('Database connection successfull');
	} catch (error) {
		console.log('dtabase connection error :', error);
	}
};

module.exports = dbConnect;

// process.env.MONGODB_URI
