'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Course.hasMany(models.CourseUnit);
    }
  }
  Course.init({
    courseName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "CourseName must not be empty"
        },
        notNull: {
          msg: "CourseName must not be null"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};