const Pool = require('pg').Pool;

const pool = new Pool({
    host: '127.0.0.1',
    port: 5432,
    user: 'web',
    password: 'CoJgYPjFu0c0mGoN3XgbPzzjGuWMqHG2eyCLl7ULbP',
    database: 'postgres',
});

module.exports = pool;
