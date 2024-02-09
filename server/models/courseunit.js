'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CourseUnit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CourseUnit.belongsTo(models.Course);
    }
  }
  CourseUnit.init({
    courseId: {
      type: DataTypes.NUMBER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "CourseId must not be empty"
        },
        notNull: {
          msg: "CourseId must not be null"
        }
      }
    },
    courseUnitName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "CourseUnitName must not be empty"
        },
        notNull: {
          msg: "CourseUnitName must not be null"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'CourseUnit',
  });
  return CourseUnit;
};