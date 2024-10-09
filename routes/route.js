import express from "express";
import {
  createBooking,
  deleteBooking,
  getAllBooking,
  getBookingById,
  updateBooking,
} from "../controllers/BookingController.js";
import {
  createGuest,
  deleteGuest,
  getAllGuest,
  getGuestById,
  updateGuest,
} from "../controllers/GuestController.js";
import {
  createHotel,
  deleteHotel,
  getAllHotel,
  getHotelById,
  updateHotel,
} from "../controllers/HotelController.js";
import {
  createPayment,
  deletePayment,
  getAllPayment,
  getPaymentById,
  updatePayment,
} from "../controllers/PaymentController.js";
import {
  createRoom,
  deleteRoom,
  getAllRoom,
  getRoomById,
  updateRoom,
} from "../controllers/RoomController.js";

const router = express.Router();

router.get("/booking", getAllBooking);
router.get("/booking/:id", getBookingById);
router.post("/createBooking", createBooking);
router.put("/updateBooking/:id", updateBooking);
router.delete("/deleteCustomer/:id", deleteBooking);

router.get("/guest", getAllGuest);
router.get("/guest/:id", getGuestById);
router.post("/createGuest", createGuest);
router.put("/updateGuest/:id", updateGuest);
router.delete("/deleteGuest/:id", deleteGuest);

router.get("/hotel", getAllHotel);
router.get("/hotel/:id", getHotelById);
router.post("/createHotel", createHotel);
router.put("/updateHotel/:id", updateHotel);
router.delete("/deleteHotel/:id", deleteHotel);

router.get("/payment", getAllPayment);
router.get("/payment/:id", getPaymentById);
router.post("/createPayment", createPayment);
router.put("/updatePayment/:id", updatePayment);
router.delete("/deletePayment/:id", deletePayment);

router.get("/room", getAllRoom);
router.get("/room/:id", getRoomById);
router.post("/createRoom", createRoom);
router.put("/updateRoom/:id", updateRoom);
router.delete("/deleteRoom/:id", deleteRoom);

export default router;
