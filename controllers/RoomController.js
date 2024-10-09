import Room from "../models/RoomModel.js";

export const getAllRoom = async (req, res) => {
  try {
    const room = await Room.findAll();
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "terjadi kesalahan saat getAllRoom",
    });
  }
};

export const getRoomById = async (req, res) => {
  try {
    const { id } = req.params; // Mengambil ID dari parameter URL
    const room = await Room.findByPk(id); // Menggunakan findByPk untuk mencari berdasarkan primary key
    if (!room) {
      return res.status(404).json({ message: "Room tidak ditemukan" });
    }
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan saat mengambil id",
      error: error.message,
    });
  }
};

export const createRoom = async (req, res) => {
  try {
    const { roomNumber, roomType, price, availability } = req.body;
    const room = await Room.create({
      roomNumber,
      roomType,
      price,
      availability,
    });
    res.status(201).json({
      message: "Room berhasil dibuat",
      data: room,
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal membuat Room",
      error: error.message,
    });
  }
};

export const updateRoom = async (req, res) => {
  try {
    const { roomNumber, roomType, price, availability } = req.body;
    const data = await Room.update(
      { roomNumber, roomType, price, availability },
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
      .json({ err: err.message, message: "gagal mengupdate Room" });
  }
};

export const deleteRoom = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Room.destroy({ where: { id: id } });
    res.status(200).json(`Room ke ${id} berhasil dihapus`);
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message, message: "gagal menghapus Room" });
  }
};