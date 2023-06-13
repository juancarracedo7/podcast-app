const axios = require('axios');
const Podcast = require('../models/podcast');

const getPodcast = async (req, res) => {
  try {
    const response = await axios.get("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json");
    const feed = response.data.feed;
    const entries = feed.entry;

    const podcasts = entries.map((entry) => ({
      name: entry["im:name"].label,
      image: entry["im:image"][2].label,
      description: entry.summary.label,
      price: parseFloat(entry["im:price"].attributes.amount),
      title: entry.title.label,
      link: entry.link.attributes.href,
      artist: entry["im:artist"].label,
      category: entry.category.attributes.label,
      releaseDate: entry["im:releaseDate"].label,
    }));

    await Podcast.bulkCreate(podcasts);

    res.json(podcasts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getPodcast };
