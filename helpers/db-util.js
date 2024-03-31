import { MongoClient } from "mongodb";

export async function connect() {
  const client = await MongoClient.connect(
    "mongodb+srv://audrius13toto:Kaskos1234@nextjs.vdn1m1j.mongodb.net/newsletter?retryWrites=true&w=majority&appName=NextJS"
  );
  return client;
}

export async function insert(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(client, collection, sort){
  const db = client.db();

  const documents = await db
    .collection(collection)
    .find()
    .sort(sort)
    .toArray(); 

    return documents;
}
