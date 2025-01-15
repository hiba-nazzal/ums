import { DataTypes , Sequelize } from 'sequelize';
import { sequelize } from "../connection.js";


const UserModel = sequelize.define('User',
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        userName:{
            type:DataTypes.STRING,
            allowNull:false,

        },
        email:{
            type:DataTypes.STRING,
            allowNull:false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        confirmEmail:{
            type:DataTypes.BOOLEAN,
            defaultValue:false
        },
        profilPic:{
            type:DataTypes.STRING,
            allowNull:true
        }
    }
  );
 
  export default UserModel;