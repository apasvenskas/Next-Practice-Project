import { MongoClient } from "mongodb";

// comment section
async function handler(req, res){
    const eventId = req.query; 

    const client = await MongoClient.connect
    ('mongodb+srv://audrius13toto:Kaskos1234@nextjs.vdn1m1j.mongodb.net/newsletter?retryWrites=true&w=majority&appName=NextJS');

    if(req.method === 'POST'){
        const { email, name, text } = req.body
        if(
            !email.includes('@') ||
            !name ||
            name.trim() === '' ||
            !text ||
            text.trim() === ''
        ) {
            res.status(422).json({ message: 'Invalid input.' }); 
            return; 
        }
        
        const newComment = {
            email,
            name,
            text,
            eventId
        }

        const db = client.db()
        const result = await db.collection('comments').insertOne(newComment);

        console.log(result)

        newComment.id = result.insertedId;

        res.status(201).json({ message: 'Added comment.', comment: newComment })
    }
    if(req.method === 'GET'){
        const dummyList = [
            { id: 'c1', name: 'Audrius', text: 'A first comment!'}
        ];
        res.status(200).json({ comments: dummyList });
    }
    client.close();
}

export default handler; 