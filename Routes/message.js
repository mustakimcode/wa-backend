import Message from "../Models/Message.js";
import Express from "express";
const message = Express();

message.get("/messages", (req, res) => {
  Message.find().then((data) => {
    res.send(data);
  });
});
message.post("/messages/add", (req, res) => {
  let message = new Message(req.body);
  message
    .save()
    .then((todo) => {
      res.status(200).json({ todo: "todo added successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("adding new todo failed");
    });
});
message.post("/messages/update/:id", (req, res) => {
  Message.findById(req.params.id, function (err, message) {
    if (!message) res.status(404).send("data is not found");
    else message.message_description = req.body.message_description;
    message.message_responsible = req.body.message_responsible;
    message.message_priority = req.body.message_priority;
    message.message_completed = req.body.message_completed;
    message
      .save()
      .then((message) => {
        res.json("Message updated!");
      })
      .catch((err) => {
        res.status(400).send("Update not possible");
      });
  });
});


export default message;