const URL = require('url');

const { GET_WEST_MIDLANDS_STATISTIC, GET_LONDON_STATISTIC } = require('../constants/routes');
const { getWestMidlandsStatistic, getLondonStatistic } = require('../requests/requests');

const router = async ({ req, res, body }) => {
    let result, error;
    const { method, url } = req;
    const { pathname } = URL.parse(url, true);
    switch (true) {
        case method === 'GET' && pathname === GET_WEST_MIDLANDS_STATISTIC:
            ({ result, error } = await getWestMidlandsStatistic());
            break;

        case method === 'GET' && pathname === GET_LONDON_STATISTIC:
            ({ result, error } = await getLondonStatistic ());
            break;

        default:
            res.statusCode = 404;
            return res.end(JSON.stringify({ error: 'Route Not Found' }));
    }

    if (error) {
        res.statusCode = error.status;
        return res.end(JSON.stringify({ error }));
    }
    res.statusCode = result.status;
    res.end(JSON.stringify(result.data));
};

module.exports = { router };