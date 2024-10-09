import Hotel from "../models/HotelModel.js";

export const getAllHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findAll();
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "terjadi kesalahan saat getAllHotel",
    });
  }
};

export const getHotelById = async (req, res) => {
  try {
    const { id } = req.params; // Mengambil ID dari parameter URL
    const hotel = await Hotel.findByPk(id); // Menggunakan findByPk untuk mencari berdasarkan primary key
    if (!hotel) {
      return res.status(404).json({ message: "Hotel tidak ditemukan" });
    }
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan saat mengambil id",
      error: error.message,
    });
  }
};

export const createHotel = async (req, res) => {
  try {
    const { hotelName, location, rating, contactNumber } = req.body;
    const hotel = await Hotel.create({
      hotelName,
      location,
      rating,
      contactNumber,
    });
    res.status(201).json({
      message: "Hotel berhasil dibuat",
      data: hotel,
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal membuat Hotel",
      error: error.message,
    });
  }
};

export const updateHotel = async (req, res) => {
  try {
    const { hotelName, location, rating, contactNumber } = req.body;
    const data = await Hotel.update(
      { hotelName, location, rating, contactNumber },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json("data berhasil terupdate");
  } catch (err) {
    res.status(500).json({ err: err.message, message: "gagal mengupdate Hotel" });
  }
};

export const deleteHotel = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Hotel.destroy({ where: { id: id } });
    if (deleted) {
      res.status(200).json({ message: `Hotel dengan ID ${id} berhasil dihapus` });
    } else {
      res.status(404).json({ message: `Hotel dengan ID ${id} tidak ditemukan` });
    }
  } catch (error) {
    res.status(500).json({ error: error.message, message: "Gagal menghapus Hotel" });
  }
};