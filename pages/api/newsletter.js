function handler(req, res){
    if(req.method === 'POST'){ // only proceed if it is a post request
        console.log('Received body:', req.body);
        const userEmail = req.body.email;

        if(!userEmail || !userEmail.includes('@')){
            res.status(422).json({ message: 'Invalid email address.' });
            return;
        }
        console.log(userEmail);
        res.status(201).json({ message: 'Signed up!' })
    }
}

export default handler;