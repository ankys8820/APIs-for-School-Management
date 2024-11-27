import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "school_db",
});

db.connect((err) => {
  if (err) {
    console.log("Database Connection Failed !!!", err);
    return;
  }

  console.log("We are connected to school_db");
});

// for getting allSchools
const getSchools = async (req, res) => {
  const q = "SELECT * FROM schools";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
    }
    return res.json(data);
  });
};
// for adding a single school
const addSchool = async (req, res) => {
  // query
  const q =
    "INSERT INTO schools(`name`, `address`, `latitude`, `longitude`) VALUES (?)";

  const values = [
    req.body.name,
    req.body.address,
    req.body.latitude,
    req.body.longitude,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
};

export { getSchools, addSchool };
