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

            console.log('Adding burger...');
            cb(data);
        }
    );
}

function updateOne(id, burger_name, devoured, cb) {
    connection.query(
        `UPDATE burgers SET burger_name = ?, devoured = ? WHERE id = ?`,
        [burger_name, devoured, id],
        function (err, data) {
            if (err) { return res.status(500).end(); }

            console.log(`Updating burger with id = ${id}`);
            cb(data);
        }

    );
}

module.exports = {
    selectAll: selectAll,
    insertOne: insertOne,
    updateOne: updateOne
};