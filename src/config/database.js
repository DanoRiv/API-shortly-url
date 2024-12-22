import { connect } from 'mongoose';
import { config } from 'dotenv';

const connectDatabase = async()=> {
  try {
    const dbUri = process.env.MONGO_URI
    await connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('MongoDB connection established')
  } catch (error) {
    console.error('MongoDB connection error: ' + error.message)
    process.exit(1)
  }
}

export default connectDatabase;
