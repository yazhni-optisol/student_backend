const { Model} = require('sequelize');
const {User}=require('../models/user')
const{Course}=require('./course')

 module.exports = (sequelize, DataTypes) => {
  class Enroll extends Model {
    static associate(models){
        this.belongsTo(models.Information)
        this.belongsTo(models.Course)
      }
  }
  
  Enroll.init({
              id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false,
                },
                uid: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    validate: {
                        notNull: {
                            msg: "userID cannot be empty"
                        }
                    }
                              
                },
                cid: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    validate: {
                        notNull: {
                            msg: "userID cannot be empty"
                        }
                    },
                    references: {
                        model: Course,
                        key: "id"
                    }            
                },
              
  }, {
    sequelize,
    modelName: 'Enroll'
  })
  console.log(Enroll === sequelize.models.Enroll); // true
 

  return Enroll;
};
 
//User.Information = User.belongsTo(Information);