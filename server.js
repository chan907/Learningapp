const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// serve static files from current folder
app.use(express.static(__dirname));

// home route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${PORT}`);
});