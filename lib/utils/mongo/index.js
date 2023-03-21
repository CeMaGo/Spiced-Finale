import { MongoClient } from "mongodb";

const URI = process.env.MongoDB_URI;
const options = {};

if (!URI) throw new Error("Please add your MongoURI to .env.local");

let client = new MongoClient(URI, option);
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
