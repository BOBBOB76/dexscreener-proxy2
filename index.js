const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

app.get('/api', async (req, res) => {
  const target = req.query.url;
  if (!target) return res.status(400).send('Missing URL param');
  try {
    const result = await axios.get(target);
    res.json(result.data);
  } catch (e) {
    res.status(500).send(e.toString());
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Proxy server running on port ${port}`));
