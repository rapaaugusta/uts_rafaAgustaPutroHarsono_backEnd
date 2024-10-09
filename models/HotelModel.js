import { DataTypes } from "sequelize"
import db from "../utils/connection.js"

const Hotel = db.define(

  "Hotel",
  {
    hotelId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    hotelName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    contactNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "hotel",
  }
)

export default Hotel