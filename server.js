const express = require('express');
const app = express();

app.use(express.static('static'));

app.get('/*', (req, res) => res.send(`
<!doctype html>
${req.url}
<div id="date"></div>
<iframe src="/manifest.html" style="width:0; height:0; visibility:collapse; display:none;"></iframe>
<script src="/app.js"></script>
`));

app.listen(8123);
