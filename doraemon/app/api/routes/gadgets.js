// src/app/api/gadgets/route.js (or src/pages/api/gadgets.js for Next.js 13+)
import { MongoClient } from "mongodb";
const uri =
  "mongodb+srv://monunanabala:monu@cluster0.2q9pxvx.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

export async function GET() {
  try {
    await client.connect();
    const db = client.db("Doraemon");
    const collection = db.collection("Gadgets");

    // Fetch all products
    const gadgets = await collection.find({}).toArray();

    return new Response(JSON.stringify(gadgets), { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return new Response("Failed to fetch gadgets", { status: 500 });
  } finally {
    await client.close();
  }
}
