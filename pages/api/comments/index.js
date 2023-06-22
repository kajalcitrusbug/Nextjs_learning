import { comments } from "../../../data/comments";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    console.log("req.body.comment", req.body.comment);
    const comment = req.body.comment;
    console.log("comment", comment);
    const newComment = { id: Date.now(), text: comment };
    console.log("newComment", newComment);
    comments.push(newComment);
    res.status(201).json(newComment);
  }
}
