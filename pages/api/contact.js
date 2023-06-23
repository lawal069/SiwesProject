import { connectMongoDB } from "@/libs/MongoConnect";
import ContactUs from "@/models/ContactModel";

export default async function handler(req, res){
    if (req.method !== 'POST') {
        res.status(405).send({msg: 'ONly POST request are allowed'});
        return
    }

    const {name, email, subject, message} = req.body;

    try {
        await connectMongoDB();
        ContactUs.create({ name, email, subject, message }).then((data) => {
            console.log(data);
            res.status(201).send(data);
        });
    } catch (err) {
        console.log(err)
        res.status(400).send({err, msg: 'Something went wrong'})
    }

    // connectMongoDB().catch(err => res.json(err))

    // if(req.method === 'POST'){
    //     if(!req.body) return res.status(400).json({error: 'Data is missing'})

    //     const {name, email, subject, message} = req.body;

    //     const messageExist = await ContactUs.findOne({email})

    //     if(messageExist) {
    //         return res.status(409).json({error: 'Message already received'})
    //     }
    //     else {
    //         ContactUs.create({
    //             name,
    //             email,
    //             subject,
    //             message,
    //         }, ())
    //     }
    // }
    // else{
    //     res.status(405).json({error: 'Method Not Allowed'})
    // }
}