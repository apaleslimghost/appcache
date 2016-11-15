const express = require('express');
const app = express();

app.use(express.static('static'));

app.get('/*', (req, res) => res.send(`
<!doctype html>
${req.url}
<iframe src="/manifest.html">
`));

app.listen(8123);
