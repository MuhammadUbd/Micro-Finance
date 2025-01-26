// // import Admin from "../models/Admin.js";
// import jwt from "jsonwebtoken";
// import { Admin } from "../model/adminModel.js";

// // Generate a JWT token
// const generateToken = (id) => {
//     return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
// };

// // Controller functions
// export const createAdmin = async (req, res) => {
//     try {
//         const { name, email, password } = req.body;

//         // Check if admin already exists
//         const existingAdmin = await Admin.findOne({ email });
//         if (existingAdmin) {
//             return res.status(400).json({ message: "Admin already exists." });
//         }

//         // Create new admin
//         const admin = await Admin.create({ name, email, password });
//         res.status(201).json({ message: "Admin created successfully.", admin });
//     } catch (error) {
//         res.status(500).json({ message: "Error creating admin.", error });
//     }
// };

// export const getAdmins = async (req, res) => {
//     try {
//         const admins = await Admin.find();
//         res.status(200).json(admins);
//     } catch (error) {
//         res.status(500).json({ message: "Error fetching admins.", error });
//     }
// };

// export const updateAdmin = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const updatedData = req.body;

//         const admin = await Admin.findByIdAndUpdate(id, updatedData, { new: true });
//         if (!admin) {
//             return res.status(404).json({ message: "Admin not found." });
//         }

//         res.status(200).json({ message: "Admin updated successfully.", admin });
//     } catch (error) {
//         res.status(500).json({ message: "Error updating admin.", error });
//     }
// };

// export const deleteAdmin = async (req, res) => {
//     try {
//         const { id } = req.params;

//         const admin = await Admin.findByIdAndDelete(id);
//         if (!admin) {
//             return res.status(404).json({ message: "Admin not found." });
//         }

//         res.status(200).json({ message: "Admin deleted successfully." });
//     } catch (error) {
//         res.status(500).json({ message: "Error deleting admin.", error });
//     }
// };

// export const loginAdmin = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         const admin = await Admin.findOne({ email });
//         if (!admin) {
//             return res.status(404).json({ message: "Admin not found." });
//         }

//         const isMatch = await admin.comparePassword(password);
//         if (!isMatch) {
//             return res.status(400).json({ message: "Invalid credentials." });
//         }

//         const token = generateToken(admin._id);
//         res.status(200).json({ message: "Login successful.", token });
//     } catch (error) {
//         res.status(500).json({ message: "Error logging in.", error });
//     }
// };
