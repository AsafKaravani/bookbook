import express, { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

// Create a new user
router.post("/", async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password, address, phoneNumber } =
      req.body;
    const newUser = await prisma.user.create({
      data: { firstName, lastName, email, password, address, phoneNumber, createdAt: new Date(), updatedAt: new Date() },
    });
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Unable to create user" });
  }
});

// Get all users
router.get("/", async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch users" });
  }
});

// Get a user by ID
router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({ where: { id: Number(id) } });
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch user" });
  }
});

// Update a user by ID
router.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { firstName, lastName, email, password, address, phoneNumber } =
    req.body;
  try {
    const updatedUser = await prisma.user.update({
      where: { id: Number(id) },
      data: { firstName, lastName, email, password, address, phoneNumber, updatedAt: new Date() },
    });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Unable to update user" });
  }
});

// Delete a user by ID
router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.user.delete({ where: { id: Number(id) } });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Unable to delete user" });
  }
});

export default router;
