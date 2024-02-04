const express = require('express');
const axios = require('axios');

const app = express();

app.get('/tiktok', async (req, res) => {
  const { url } = req.query;

  const options = {
    method: 'POST',
    url: 'https://all-media-downloader1.p.rapidapi.com/tiktok',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'b38444b5b7mshc6ce6bcd5c9e446p154fa1jsn7bbcfb025b3b',
      'X-RapidAPI-Host': 'all-media-downloader1.p.rapidapi.com'
    },
    data: {
      url: url
    }
  };

  try {
    const response = await axios.request(options);
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
