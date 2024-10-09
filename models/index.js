import db from "../utils/connection.js";
import Booking from "./BookingModel.js";
import Guest from "./GuestModel.js";
import Hotel from "./HotelModel.js";
import Payment from "./PaymentModel.js";
import Room from "./RoomModel.js";

Hotel.hasMany(Room, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Room.belongsTo(Hotel, {
  foreignKey: "hotelId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Room.hasMany(Booking, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Guest.hasMany(Booking, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Booking.belongsTo(Guest, {
  foreignKey: "guestId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Booking.belongsTo(Room, {
  foreignKey: "roomId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Booking.hasOne(Payment, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Payment.belongsTo(Booking, {
  foreignKey: "bookingId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

await db.sync();