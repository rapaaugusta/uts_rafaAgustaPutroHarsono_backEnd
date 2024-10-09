import Booking from "../models/BookingModel.js";

export const getAllBooking = async (req, res) => {
  try {
    const booking = await Booking.findAll();
    res.status(200).json(booking);
  } catch (error) {
    res
      .status(500)
      .json({
        error: error.message,
        message: "terjadi kesalahan saat getAllBooking",
      });
  }
};

export const getBookingById = async (req, res) => {
  try {
    const { id } = req.params; // Mengambil ID dari parameter URL
    const booking = await Booking.findByPk(id); // Menggunakan findByPk untuk mencari berdasarkan primary key
    if (!booking) {
      return res.status(404).json({ message: "Booking tidak ditemukan" });
    }
    res.status(200).json(booking);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Terjadi kesalahan saat mengambil id",
        error: error.message,
      });
  }
};

export const createBooking = async (req, res) => {
  try {
    const { checkInDate, checkOutDate, totalPrice } = req.body;
    const booking = await Booking.create({
      checkInDate,
      checkOutDate,
      totalPrice,
    });
    res.status(201).json({
      message: "Booking berhasil dibuat",
      data: booking,
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal membuat Booking",
      error: error.message,
    });
  }
};

export const updateBooking = async (req, res) => {
  try {
    const { checkInDate, checkOutDate, totalPrice } = req.body;
    const data = await Booking.update(
      { checkInDate, checkOutDate, totalPrice },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json("data berhasil terupdate");
  } catch (err) {
    res
      .status(500)
      .json({ err: err.message, message: "gagal mengupdate Booking" });
  }
};

export const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Booking.destroy({ where: { id: id } });
    res.status(200).json(`Booking ke ${id} berhasil dihapus`);
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message, message: "gagal menghapus Booking" });
  }
};
