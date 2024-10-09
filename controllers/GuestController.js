import Guest from "../models/GuestModel.js";

export const getAllGuest = async (req, res) => {
  try {
    const guest = await Guest.findAll();
    res.status(200).json(guest);
  } catch (error) {
    res
      .status(500)
      .json({
        error: error.message,
        message: "terjadi kesalahan saat getAllGuest",
      });
  }
};

export const getGuestById = async (req, res) => {
  try {
    const { id } = req.params; // Mengambil ID dari parameter URL
    const guest = await Guest.findByPk(id); // Menggunakan findByPk untuk mencari berdasarkan primary key
    if (!guest) {
      return res.status(404).json({ message: "Guest tidak ditemukan" });
    }
    res.status(200).json(guest);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Terjadi kesalahan saat mengambil id",
        error: error.message,
      });
  }
};

export const createGuest = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber } = req.body;
    const guest = await Booking.create({
      firstName,
      lastName,
      email,
      phoneNumber,
    });
    res.status(201).json({
      message: "Guest berhasil dibuat",
      data: guest,
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal membuat Guest",
      error: error.message,
    });
  }
};

export const updateGuest = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber } = req.body;
    const data = await Booking.update(
      { firstName, lastName, email, phoneNumber },
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
      .json({ err: err.message, message: "gagal mengupdate Guest" });
  }
};

export const deleteGuest = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Guest.destroy({ where: { id: id } });
    res.status(200).json(`Guest ke ${id} berhasil dihapus`);
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message, message: "gagal menghapus Guest" });
  }
};
