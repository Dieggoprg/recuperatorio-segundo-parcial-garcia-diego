import { Language } from "../models/language.model.js";


export const createLanguage = async (req , res) => {
    const {name, paradigm, release_year } = req.body;
    try {
     if (!name || !paradigm || !release_year) {return res.status(400).json("Faltan campos obligatorios (nombre, paradigma o año de lanzamiento)")}

     if (parseInt(release_year) != release_year) {return res.status(400).json("El campo 'AÑO DE LANZAMIENTO' debe ser un número entero")}

       const nameUnique = await Language.findOne({ where: { name } });
        if (nameUnique) {return res.status(400).json({ message: "El nombre ya está en uso" })}
        
        const language = await Language.create(req.body)
        return res.status(201).json(language)
    } catch (error) {
        return res.status(500).json("Ocurrió un Error al crear el Personaje...")
    }
}