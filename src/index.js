import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server corriendo en el puerto ${PORT}`));
