import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const Language = sequelize.define("Lenguage", {
    name : {type:DataTypes.STRING, allowNull: false},

    paradigm : {type: DataTypes.STRING, allowNull: false},

    release_year: {type: DataTypes.INTEGER}
})