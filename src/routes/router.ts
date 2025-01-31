import { Router } from "express";

const router = Router();

router.get("/", (req, res) => res.json({ message: "Aws is Awesome. Deployed by Merging PR" }));

router.get("/health", (req, res) => {
  res.status(200).json({ message: "Everything is good here 👀" });
});

export default router;
