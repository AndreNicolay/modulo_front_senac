import express from "express";
import type { Request, Response } from "express";

const app = express();

app.use(express.json());

// 1. Endpoint de Cadastro
app.post("/cadastro", (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400).json({ 
      error: "Dados obrigatórios ausentes. Envie username, email e password." 
    });
    return;
  }

  res.status(201).json({
    message: "Cadastro realizado com sucesso!",
    data: { username, email, password }
  });
});

// 2. Endpoint de Login
app.post("/login", (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ 
      error: "Dados obrigatórios ausentes. Envie email e password." 
    });
    return;
  }

  res.status(200).json({
    message: "Login realizado com sucesso!",
    data: { email, password }
  });
});

export { app };