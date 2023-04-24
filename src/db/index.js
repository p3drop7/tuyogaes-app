import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('profile.db')

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS profile (id INTEGER PRIMARY KEY, userId TEXT, userName TEXT, userSurname TEXT, userEmail TEXT, image TEXT);',
                [],
                () => {
                    resolve();
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
    return promise;
}

export const insertProfile = (userId, userName, userSurname, userEmail, image) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `INSERT INTO profile (userId, userName, userSurname, userEmail, image) VALUES (?, ?, ?, ?, ?);`,
                [userId, userName, userSurname, userEmail, image],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
    return promise;
}

export const fetchProfile = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM profile',
                [],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
    return promise;
}