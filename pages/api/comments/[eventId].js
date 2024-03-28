// comment section
function handler(req, res){
    const eventId = req.query; 
    if(req.method === 'POST'){
        const { email, name, text } = req.body
        if(
            !email.includes('@') ||
            !name ||
            name.trim() === '' ||
            !text ||
            text.trim() === ''
        ) {
            res.status(422).jason({ message: 'Invalid input.' }); 
            return; 
        }
        
        const newComment = {
            id: new Date().toISOString(), 
            email,
            name,
            text
        }
        console.log(newComment)
        res.status(201).json({ message: 'Added comment.', comment: newComment })
    }
    if(req.method === 'GET'){
        const dummyList = [
            { id: 'c1', name: 'Audrius', text: 'A first comment!'}
        ];
        res.status(200).json({ comments: dummyList });
    }
}

export default handler; 