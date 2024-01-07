// Környezeti változók szerkesztéséhez. Ennek segítségével
// dolgozzuk fel a .env állomány értékeit.
require('dotenv').config();

// path node modul beimportálása a könyvtárrendszer kezeléséhez.
const path = require('path');

// Szerver létrehozása és beállítása.
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3500; // .env-ből vett érték.
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

// Statikus mappa beállítása. Ez legyen a public mappa.
app.use(express.static(path.join(__dirname, 'public')));

// ejs megjelenítő motor beállítása.
const ejs = require('ejs'); // Nem feltétlenül szükséges, de írjuk be.
app.set('view engine', 'ejs');

// A szerver válasza (res - response) a böngésző kérésére (req - request).
app.get('/', (req, res) => {
    try {
        res.status(200).render('index');
    } catch (error) {
        res.status(500).json({ message: `Valami nem jó! (${error.message})` });
    }
});

// masik route-hoz tartozó lekérés.
app.get('/masik', (req, res) => {
    try {
        res.status(200).render('masik.ejs');
    } catch (error) {
        res.status(500).json({ message: `Valami nem jó! (${error.message})` });
    }
});

// 404-es (File Not Found) hiba kezelése.
app.get('*', (req, res) => {
    try {
        res.status(200).render('404.ejs');
    } catch (error) {
        res.status(500).json({ message: `Valami nem jó! (${error.message})` });
    }
});
