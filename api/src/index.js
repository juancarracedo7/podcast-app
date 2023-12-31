const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./database/index");
const Podcast = require("../src/models/podcast");
const PodcastDetail = require("./models/podcastDetails");

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use(require("./routes/index"));

// Sincronizar modelo con la base de datos

const connect = async () => {
  await Podcast.sync();
  await PodcastDetail.sync();
  console.log("Podcast table created");
};

// Iniciar el servidor
async function startServer() {
  try {
    await db.sync({ force: true });
    console.log("Conexión exitosa a la base de datos");
    await connect();
    app.listen(3001, () => {
      console.log("Servidor en ejecución en el puerto 3001");
    });
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
}

startServer();
