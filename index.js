const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Aqui se mostrara la pagina principal del proyecto.");
});
const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
