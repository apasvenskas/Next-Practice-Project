import { MongoClient } from "mongodb";

async function connect(){
    const client = await MongoClient.connect
        ('mongodb+srv://audrius13toto:Kaskos1234@nextjs.vdn1m1j.mongodb.net/newsletter?retryWrites=true&w=majority&appName=NextJS')
        return client;
}

async function insert(client, document){
    const db = client.db();

    await db.collection('newsletter').insertOne(document); 
}

async function handler(req, res){
    if(req.method === 'POST'){ // only proceed if it is a post request
        console.log('Received body:', req.body);
        const userEmail = req.body.email;

        if(!userEmail || !userEmail.includes('@')){
            res.status(422).json({ message: 'Invalid email address.' });
            return;
        }

        let client; 

        // updated the function with connect and insert
        try {
            client = await connect();
        } catch (error) {
            res.status(500).json({message: 'Connecting to the database failed!'});
            return;
        }
        try {
            await insert(client, {email: userEmail})
            client.close();
        } catch(error){
            res.status(500).json({message: 'Inserting data failed!'});
            return;
        }
        console.log(userEmail);
        res.status(201).json({ message: 'Signed up!' })
    }
}

export default handler;