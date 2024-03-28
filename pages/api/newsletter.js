import { MongoClient } from "mongodb";

async function handler(req, res){
    if(req.method === 'POST'){ // only proceed if it is a post request
        console.log('Received body:', req.body);
        const userEmail = req.body.email;

        if(!userEmail || !userEmail.includes('@')){
            res.status(422).json({ message: 'Invalid email address.' });
            return;
        }

        const client = await MongoClient.connect
        ('mongodb+srv://audrius13toto:Kaskos1234@nextjs.vdn1m1j.mongodb.net/newsletter?retryWrites=true&w=majority&appName=NextJS')
            const db = client.db();
            await db.collection('emails').insertOne({email: userEmail})
            client.close();
        console.log(userEmail);
        res.status(201).json({ message: 'Signed up!' })
    }
}

export default handler;