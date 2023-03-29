import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    const userMongo = process.env.MONGO_USER;
    const passwordMongo = process.env.MONGO_PW;
    const databaseMongo = process.env.MONGO_DB;
    const connectionString = `mongodb+srv://${userMongo}:${passwordMongo}@mongotemplatecluster.hrx7eky.mongodb.net/${databaseMongo}`;
    const { connection } = await mongoose.connect(connectionString, {
      userNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
    });
    if (connection.readyState.State == 1) {
      return await Promise.resolve(true);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export default connectMongo;
