const express = require('express');
const app = express();
const cors = require('cors')
const router = ('./routes/index.js')

app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3001;

app.use(router);

app.listen(port, () => {
    //console.log(`Server listening on port ${port}`);

})

module.exports = app;