const express = require('express');
const app = express();
const cors = require('cors');

const router = require('./routes/router');

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3001;

router(app);
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);

})

module.exports = app;