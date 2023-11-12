import { MongoClient, ObjectId } from "mongodb";

const mongoUrl = process.env.MONGODB_CONNECTION_URL;

export async function POST(req, res) {
    const body = await req.json();
    console.log(body);
    const client = await MongoClient.connect(mongoUrl);

    const db = client.db();
    const todoCollection = db.collection("task");
    const result = await todoCollection.insertOne(body);
    console.log(result);

    client.close();
    return new Response(JSON.stringify(result));
}

export async function DELETE(req, res) {
  const { _id } = await req.json();
  console.log(_id)
  const client = await MongoClient.connect(mongoUrl, {
      serverSelectionTimeoutMS: 5000,
  });

  const db = client.db();
  const todoCollection = db.collection("task");
  const result = await todoCollection.deleteOne({ _id: new ObjectId(_id) });
  console.log(result)

  client.close();
  return new Response(JSON.stringify({ message: "Todo Deleted" }))
}

export async function GET(req, res) {
    const client = await MongoClient.connect(mongoUrl);

    const db = client.db();
    const todoCollection = db.collection("task");
    const result = await todoCollection.find().toArray();
    console.log(result);

    client.close();
    return new Response(JSON.stringify({ data: result }));
}

export async function PUT(req, res) {
   const { _id, completedTask } = await req.json();
  console.log(completedTask);

  const client = await MongoClient.connect(mongoUrl);
  const db = client.db();
  const todoCollection = db.collection("task");
  const result = await todoCollection.updateOne(
    { _id: new ObjectId(_id) },
    { $set: completedTask }
  );
  console.log(result);

  client.close();
    return new Response(JSON.stringify({result: result}));
}
