const axios = require('axios');
const Podcast = require('../models/podcast');
const PodcastDetail = require('../models/podcastDetails');

const getPodcast = async (req, res) => {
  try {
    const response = await axios.get("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json");
    const feed = response.data.feed;
    const entries = feed.entry;

    const podcasts = entries.map((entry) => ({
      idPodcast: entry.id.attributes["im:id"],
      name: entry["im:name"].label,
      image: entry["im:image"][2].label,
      description: entry.summary ? entry.summary.label : '',
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

const getPodcastDetails = async (req, res) => {
  const trackId = req.params.trackId;

  try {
    const response = await axios.get(`https://itunes.apple.com/lookup?id=${trackId}&country=US&media=podcast&entity=podcastEpisode&limit=100`);
    const results = response.data.results;

    if (results && results.length > 0) {
      const detailsArray = results.map(result => {
        const { artistName, trackId, artworkUrl100 } = result;
        const { trackTimeMillis, releaseDate, previewUrl, episodeUrl, trackName } = result;
        return { artistName, trackName, trackTimeMillis, releaseDate, previewUrl, episodeUrl, trackId, artworkUrl100 };
      });

      const responsePodcast = await axios.get("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json");
      const feed = responsePodcast.data.feed;
      const entries = feed.entry;

      const podcasts = entries.map((entry) => ({
        description: entry.summary ? entry.summary.label : '',
      }));

      const combinedInfo = detailsArray.map((details, index) => ({
        ...details,
        description: podcasts[index] ? podcasts[index].description : '',
      }));

      await PodcastDetail.bulkCreate(combinedInfo);

      res.json(combinedInfo);
    } else {
      res.status(404).json({ error: 'Podcast not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getPodcast, getPodcastDetails };
