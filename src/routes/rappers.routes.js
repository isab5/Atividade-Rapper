import { Router } from "express";

const rappersRoutes = Router();

let rappers = [
{
    id: Math.floor(Math.random() * 1000),
    nome: "Shawn Corey Carter",
    idade: 54,
    descricaoFisica: "Alto, negro, dread/crespo",
    envolvimento: true,
},
{
    id: Math.floor(Math.random() * 1000),
    nome: "Marshall Bruce Mathers III",
    idade: 51,
    descricaoFisica: "Branco, barba, cabelo preto, estatura média",
    envolvimento: false,
},
];

rappersRoutes.get("/", (req, res) => {
return res.status(200).json(rappers);
});

rappersRoutes.post("/", (req, res) => {
    const { nome, idade, descricaoFisica, envolvimento } = req.body;
    
    console.log(Number.isInteger(idade));

    if (!nome) {
    return res.status(400).json({
        message: "O campo nome é obrigatório!",
    });
    }

    if (envolvimento != 'sim' && envolvimento != 'não') {
    return res.status(400).send({
        message: "Digite 'sim' ou 'não'",
    });
    }

    const novoSuspeito = {
    id: Math.floor(Math.random() * 1000),
    nome,
    idade,
    descricaoFisica,
    envolvimento,
    };

    rappers.push(novoSuspeito);

    return res.status(201).json({
    message: "Suspeito cadastrado com sucesso!",
    novoSuspeito,
    });
});


rappersRoutes.get("/:id", (req, res) => {
    const { id } = req.params;

    const rapper = rappers.find((musico) => musico.id == id);

    if (!rapper) {
return res
        .status(404)
        .json({ message: `Suspeito com id ${id} não encontrado!` });
    }

    return res.status(200).json(rapper);
});

rappersRoutes.put("/:id", (req, res) => {
    const { id } = req.params;
    const { nome, idade, descricaoFisica, envolvimento } = req.body;
    
    const rapper = rappers.find((r) => r.id == id);

    console.log(Number.isInteger(idade));

    if (!nome) {
    return res.status(400).json({
        message: "O campo nome é obrigatório!",
    });
    }

    if (envolvimento != 'sim' && envolvimento != 'não') {
    return res.status(400).send({
        message: "Digite 'sim' ou 'não'",
    });
    }
    
    rapper.nome = nome;
    rapper.idade = idade;
    rapper.descricaoFisica = descricaoFisica;
    rapper.envolvimento = envolvimento;
    
    return res.status(200).json({
        message: "Cadastro atualizado com sucesso!",
        rapper,
    });
});

rappersRoutes.delete("/:id", (req, res) => {
    const { id } = req.params;

    const rapper = rappers.find((musician) => musician.id == id);

    if (!rapper) {
    return res
        .status(404)
        .json({ message: `Suspeito com id ${id} não encontrado!` });
    }

    rappers = rappers.filter((musician) => musician.id != id);

    return res.status(200).json({
    message: "Cadastro removido com sucesso!",
    rapper,
    });
});

export default rappersRoutes;