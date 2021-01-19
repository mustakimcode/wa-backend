import User from "../Models/User.js";
import Express from "express";
const user = Express();

user.get("/users", (req, res) => {
  User.find().then((data) => {
    res.send(data);
  });
});
user.post("/user/add", (req, res) => {
  let message = new User(req.body);
  message
    .save()
    .then((user) => {
      res.status(200).json({ message: "user added successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("adding new user failed");
    });
});
user.post("/user/update/:id", (req, res) => {
  User.findById(req.params.id, function (err, message) {
    if (!message) res.status(404).send("data is not found");
    else message.message_description = req.body.message_description;
    message.message_responsible = req.body.message_responsible;
    message.message_priority = req.body.message_priority;
    message.message_completed = req.body.message_completed;
    message
      .save()
      .then((message) => {
        res.json("User updated!");
      })
      .catch((err) => {
        res.status(400).send("Update not possible");
      });
  });
});

export default user;