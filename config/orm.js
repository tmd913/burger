const connection = require('./connection');

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

function selectAll(cb) {
    connection.query(
        `SELECT * FROM burgers`,
        function (err, data) {
            if (err) { return res.status(500).end(); }

            cb(data);
        }
    );
}

function insertOne(burger_name, cb) {
    connection.query(
        `INSERT INTO burgers (burger_name) VALUES (?)`,
        [burger_name],
        function (err, data) {
            if (err) { return res.status(500).end(); }

            cb(data);
        }
    );
}

function updateOne(id, cb) {
    connection.query(
        `UPDATE burgers SET devoured = 1 WHERE id = ?`,
        [id],
        function (err, data) {
            if (err) { return res.status(500).end(); }

            cb(data);
        }

    );
}

function deleteOne(id, cb) {
    connection.query(
        `DELETE FROM burgers WHERE id = ?`,
        [id],
        function (err, data) {
            if (err) { return res.status(500).end(); }

            cb(data);
        }

    );
}

module.exports = {
    selectAll: selectAll,
    insertOne: insertOne,
    updateOne: updateOne,
    deleteOne: deleteOne
};