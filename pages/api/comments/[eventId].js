import { connect, insert, getAllDocuments } from "@/helpers/db-util";

// comment section
async function handler(req, res) {
  const eventId = req.query.eventId;

  let client;
  try {
    client = await connect();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed!" });
    return;
  }

  if (req.method === "POST") {
    const { email, name, text } = req.body;
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    // const db = client.db()
    // const result = await db.collection('comments').insertOne(newComment);

    // console.log(result)

    let result;

    try {
      result = await insert(client, "comments", newComment);
      newComment.id = result.insertedId;
      res.status(201).json({ message: "Added comment.", comment: newComment });
    } catch (error) {
      req.status(500).json({ message: "Inserting comment failed!" });
    }

  }
  if (req.method === "GET") {
    try {
      const documents = await getAllDocuments(client, "comment", { _id: -1 }); // going to sort by id in decending order
      res.status(200).json({ comments: documents });
    } catch (error) {
      res.status(500).json({ message: "Failed to get the documents" });
    }
  }
  client.close();
}

export default handler;
