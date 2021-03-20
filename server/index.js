import express from 'express';
import cors from 'cors';
import path from 'path';
import 'dotenv/config';
import axios from 'axios';
import { getFormattedDate } from './utilities/time';

const app = express();
const port = process.env.PORT || 8080;
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  // If running in production mode serve static files from build
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('/', (req, res) => {
    res.sendFile(
      path.join(__dirname, '../client/build', 'index.html'),
    );
  });
}
https: app.get(
  '/data/:startTime/:endTime/:minMagnitude/:latitude/:longitude/:radius',
  async (req, res) => {
    const startTime = req.params.startTime;
    const endTime = req.params.endTime;
    const minMagnitude = req.params.minMagnitude;
    const latitude = req.params.latitude;
    const longitude = req.params.longitude;
    const radius = req.params.radius;

    const earthquakeQuery = `starttime=${startTime}&endtime=${endTime}&minmagnitude=${minMagnitude}&latitude=${latitude}&longitude=${longitude}&maxradiuskm=${radius}`;
    const url = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&${earthquakeQuery}`;

    const earthquakeResponse = await makeEarthquakeApiCall(url);

    if (
      earthquakeResponse.status !== 200 ||
      earthquakeResponse.data.metadata.status !== 200
    ) {
      res.json({
        error:
          'An Error occurred. Unable to successfully make request to earthquake.usgs.gov API',
      });
      return;
    }
    const earthquakes = earthquakeResponse.data.features;
    const numberOfEarthquakes =
      earthquakeResponse.data.metadata.count;
    const first100 = earthquakes
      .slice(0, 100)
      .map(({ properties: { mag, place, time } }) => {
        return { mag, place, time: getFormattedDate(time) };
      });

    const sortedByMagAsc = earthquakes.sort((a, b) => {
      return b.properties.mag - a.properties.mag;
    });

    const getColProps = ({ properties: { mag, place, time } }) => {
      return {
        mag,
        place,
        time: getFormattedDate(time),
      };
    };

    const median = getColProps(
      sortedByMagAsc[Math.floor(sortedByMagAsc.length / 2)],
    );
    const maxMag = getColProps(sortedByMagAsc[0]);
    const minMag = getColProps(
      sortedByMagAsc[sortedByMagAsc.length - 1],
    );

    res.json({
      median,
      maxMag,
      minMag,
      numberOfEarthquakes,
      first100,
    });
  },
);

const makeEarthquakeApiCall = async (url) => {
  try {
    const res = await axios.get(url);
    return res;
  } catch (error) {
    return { status: 400 };
  }
};

app.listen(port, () => {
  console.log('Server listening on port: ' + port);
});
