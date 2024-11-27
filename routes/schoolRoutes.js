import express from "express";
import { addSchool, getSchools } from "../controllers/schoolConteroller.js";
const router = express.Router();

// for getting all schools
// # endPoints : http://localhost:5500/api/listSchools
router.get("/listSchools", getSchools);

// for adding a school
// # endPoints : http://localhost:5500/api/addSchool
router.post("/addSchool", addSchool);

export default router;
