"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Note.belongsTo(models.User, { foreignKey: "user_id" });
      Note.hasMany(models.Todo, { foreignKey: "note_id" });
    }
  }
  Note.init(
    {
      title: DataTypes.STRING,
      note: DataTypes.STRING,
      tag: DataTypes.STRING,
      status: DataTypes.STRING,
      type: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Note",
    }
  );
  return Note;
};
