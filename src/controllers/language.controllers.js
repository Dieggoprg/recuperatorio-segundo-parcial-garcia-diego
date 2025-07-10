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

export const updateLanguage = async (req , res) => {

    const { id } = req.params;
    const {name, paradigm, release_year } = req.body;

     try {

        if (!name || !paradigm || !release_year) {return res.status(400).json("Faltan campos obligatorios (nombre, paradigma o año de lanzamiento)")}

        if (parseInt(release_year) != release_year) {return res.status(400).json("El campo 'AÑO DE LANZAMIENTO' debe ser un número entero")}

       const nameUnique = await Language.findOne({ where: { name } });
        if (nameUnique) {return res.status(400).json({ message: "El nombre ya está en uso" })}

        const [updated] = await Language.update(req.body, { where: { id } });

        if (updated > 0) {return res.status(200).json("Actualización con éxito"); 
        } else {return res.status(404).json("No se encontró el Lenguaje para actualizar")}

    } catch (error) {
        return res.status(500).json("Ocurrió un error al actualizar el Lenguaje");
    }
};

export const deleteLanguage = async (req, res) => {
    const { id } = req.params;

    try {
        const eliminado = await Language.destroy({ where: { id } });

        if (eliminado > 0) {
            return res.status(200).json("Lenguaje eliminado con éxito");
        } else {
            return res.status(404).json("No se encontró el Lenguaje para eliminar");
        }
    } catch (error) {
        return res.status(500).json("Error al intentar eliminar el Lenguaje");
    }
};




