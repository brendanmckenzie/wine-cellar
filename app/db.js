import sqlite from 'react-native-sqlite';

class Database {
    open(callback) {
        sqlite.open('data.sqlite3', callback);
    }

    ensureStructure() {
        this.open((err, db) => {
            db.executeSQL('create table if not exists wines (' +
                'id integer primary key asc,' +
                'winery text,' +
                'name text,' +
                'variety text,' +
                'year text,' +
                'bought text,' +
                'consumed text,' +
                'notes text,' +
                'drink_by text )', null,
            () => {},
            (err) => {
                if (err) throw err;

                db.close();
            });
        });
    }

    loadData(callback) {
        this.open((err, db) => {
            const data = [];

            db.executeSQL('select * from wines', null,
            (row) => data.push(row),
            (err) => {
                if (err) throw err;

                db.close();

                callback(data);
            });
        });
    }

    addItem(item, callback) {
        this.open((err, db) => {
            db.executeSQL('insert into wines ( winery, name, variety, year, drink_by, bought, consumed, notes ) values ( ?, ?, ?, ?, ?, ?, ?, ? )',
                [item.winery, item.name, item.variety, item.year, item.drinkBy, item.bought, item.consumed, item.notes],
                () => {},
                (err) => {
                    if (err) throw err;

                    var retId = null;

                    db.executeSQL('select last_insert_rowid() as id', null,
                        (row) => { retId = row['id'] },
                        (err) => {
                            if (err) throw err;

                            item['id'] = retId;

                            db.close();

                            callback(item);
                        })

                });
        });
    }

    updateItem(item, callback) {
        this.open((err, db) => {
            db.executeSQL('update wines set winery = ?, name = ?, variety = ?, year = ?, drink_by = ?, bought = ?, consumed = ?, notes = ? where id = ?',
                [item.winery, item.name, item.variety, item.year, item.drinkBy, item.bought, item.consumed, item.notes, item.id],
                () => {},
                (err) => {
                    if (err) throw err;

                    db.close();

                    callback(item);
                });
        });
    }
}

const db = new Database();

export default db;
