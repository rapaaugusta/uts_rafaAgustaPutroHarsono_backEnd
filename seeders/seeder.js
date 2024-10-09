import Booking from "../models/BookingModel.js";
import Guest from "../models/GuestModel.js";
import Hotel from "../models/HotelModel.js";
import Payment from "../models/PaymentModel.js";
import Room from "../models/RoomModel.js";
import clean from "./helpers/clean.js";
import "../models/index.js";

const createSeeder = async () => {
  await clean();
  const guest = await Guest.create({
    firstName: "Rafa",
    lastName: "Agusta",
    email: "rafaagusta@gmail.com",
    phoneNumber: "08xx-xxxx-xxxx",
  });

  const hotel = await Hotel.create({
    hotelName: "Santika",
    location: "Bintaro",
    rating: "5",
    contactNumber: "654-321",
  });
  const room = await Room.create({
    roomNumber: "100",
    roomType: "A",
    price: "200000",
    availability: "Available",
    hotelId: hotel.dataValues.id,
  });
  const booking = await Booking.create({
    checkInDate: "2025 - 1 - 1",
    checkOutDate: "2025 - 1 - 2",
    totalPrice: "500000",
    guestId: guest.dataValues.id,
    roomId: room.dataValues.id,
  });


  const payment = await Payment.create({
    amount: "500000",
    paymentDate: "2025 - 1 - 1",
    paymentMethod: "Cash",
    bookingId: booking.dataValues.id,
  });


  return { booking, guest, hotel, payment, room };
};

const guest = await createSeeder();
console.log(guest);