import Booking from "../../models/BookingModel.js";
import Guest from "../../models/GuestModel.js";
import Hotel from "../../models/HotelModel.js";
import Payment from "../../models/PaymentModel.js";
import Room from "../../models/RoomModel.js";

export default async function clean() {
  await Booking.destroy({
    where: {},
    force: true,
    cascade: true,
  });
  await Payment.destroy({
    where: {},
    force: true,
    cascade: true,
  });
  await Guest.destroy({
    where: {},
    force: true,
    cascade: true,
  });
  await Hotel.destroy({
    where: {},
    force: true,
    cascade: true,
  });
  await Room.destroy({
    where: {},
    force: true,
    cascade: true,
  });
}
