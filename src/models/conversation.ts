import { Database } from "../config";
import { DataTypes } from "sequelize";

const sequelize = Database.sequelize;

const Conversation = sequelize.define(
  "conversations",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    deleted_at: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    underscored: true,
  }
);

export default Conversation;
