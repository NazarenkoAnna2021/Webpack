const axios = require('axios');

exports.getWestMidlandsStatistic = async () => {
    const companies = await axios.get('http://api.adzuna.com/v1/api/jobs/gb/history?app_id=a61ea6ed&app_key=66f78daf363c4fd26fc7dd17200800d6&location0=UK&location1=West Midlands&content-type=application/json');
    
    return { result: { data: companies.data, status: 201 } }
}

exports.getLondonStatistic = async () => {
    const companies = await axios.get('http://api.adzuna.com/v1/api/jobs/gb/history?app_id=a61ea6ed&app_key=66f78daf363c4fd26fc7dd17200800d6&location0=UK&location1=London');

    return { result: { data: companies.data, status: 201 } }
} 