import { Router } from "express";

const router = Router();

router.get("/", (req, res) => res.json({ message: "Hello from Docker Cathy Heaven is Awesome  is🎉" }));

router.get("/health", (req, res) => {
  res.status(200).json({ message: "Everything is good here 👀" });
});

export default router;
