import { Router } from "express";

const rappersRoutes = Router();

let rappers = [
{
    id: Math.floor(Math.random() * 1000),
    nome: "Shawn Corey Carter",
    idade: 54,
    descricaoFisica: "Alto, negro, dread/crespo",
    suspeito: true,
},
];

rappersRoutes.get("/", (req, res) => {
return res.status(200).json(rappers);
});

export default rappersRoutes;