import { connectMongoDB } from "@/libs/MongoConnect";
import Enroll from "@/models/EnrollModel";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ msg: "Only POST re  uest are allowed" });
    return;
  }

  const {
    firstName,
    lastName,
    department,
    phoneNumber,
    gender,
    email,
    address,
    pName,
    pNumber,
    occupation,
    relationship,
    pAddress,
  } = req.body;

  try {
    await connectMongoDB();
    Enroll.create({
      pNumber,
      occupation,
      relationship,
      pAddress,
      firstName,
      lastName,
      department,
      phoneNumber,
      gender,
      email,
      address,
      pName,
    }).then((data) => {
      console.log(data);
      res.status(201).send(data);
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ err, msg: "Something went wrong" });
  }
}
