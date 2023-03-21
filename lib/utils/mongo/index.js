import { MongoClient } from "mongodb";

const URI = process.env.MONGODB_URL;
const options = {};

if (!URI) throw new Error("Please add your MongoURI to .env");

let client = new MongoClient(URI, options);
let clientPromise;

if (process.env.NODE_ENV !== "production") {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = client_connect();
}

export default clientPromise;
