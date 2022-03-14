const connection = require('../config/connection');

const upVoteDB = (post_id) => {
    return connection.query({
        text   : 'UPDATE posts SET vote = vote + 1 WHERE id = ($1);',
        values : [post_id]
    })
}

module.exports = { upVoteDB };