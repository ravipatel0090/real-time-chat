import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";

class User extends Model {
    public id!: number;
    public email!: string;
    public password!: string;
    public firstName!: string;
    public lastName!: string;
    public sessionToken?:string
}

User.init({
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: true },
    sessionToken: { type: DataTypes.STRING, allowNull: true },
}, {
    sequelize, tableName: 'users'
});

export default User;