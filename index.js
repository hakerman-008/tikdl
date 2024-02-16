const express = require('express');
const axios = require('axios');

const app = express();

app.get('/tiktok', async (req, res) => {
  const { url } = req.query;

  try {
    const response = await axios.get(`https://tools.betabotz.eu.org/tools/tiktokdl?url=${encodeURIComponent(url)}`);
    const videoUrl = response.data.result.data.play;

    res.json({ videoUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
