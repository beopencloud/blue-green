const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello Aliou!');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
