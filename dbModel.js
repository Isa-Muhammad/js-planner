'use strict';

const mysql = require('mysql');

const config = require('./config');

const sql = mysql.createConnection(config.mysql);




//add week to db
module.exports.addWeek = (title) => {
  return new Promise((resolve, reject) => {

    // now add the file to the DB
    const dbRecord = {
      title: title
    };

    sql.query(sql.format('INSERT INTO weeks SET ?', dbRecord), (err, result) => {
      if (err) {
        reject(['failed sql insert', err]);
        return;
      }

      resolve({
        id: result.insertId,
        title: dbRecord.title
      });
    });
  });
};

//add topic to db
module.exports.addTopic = (title) => {
  return new Promise((resolve, reject) => {

    // now add the file to the DB
    const dbRecord = {
      title: title
    };

    sql.query(sql.format('INSERT INTO topics SET ?', dbRecord), (err, result) => {
      if (err) {
        reject(['failed sql insert', err]);
        return;
      }

      resolve({
        id: result.insertId,
        title: dbRecord.topics
      });
    });
  });
};


//add note to db
module.exports.addNote = (title) => {
  return new Promise((resolve, reject) => {

    // now add the file to the DB
    const dbRecord = {
      title: title
    };

    sql.query(sql.format('INSERT INTO notes SET ?', dbRecord), (err, result) => {
      if (err) {
        reject(['failed sql insert', err]);
        return;
      }

      resolve({
        id: result.insertId,
        title: dbRecord.notes
      });
    });
  });
};

//add resources to db
module.exports.addResource = (title) => {
  return new Promise((resolve, reject) => {

    // now add the file to the DB
    const dbRecord = {
      title: title
    };

    sql.query(sql.format('INSERT INTO resources SET ?', dbRecord), (err, result) => {
      if (err) {
        reject(['failed sql insert', err]);
        return;
      }

      resolve({
        id: result.insertId,
        title: dbRecord.resources
      });
    });
  });
};

//add user to db
module.exports.addUser = (email, password) => {
  return new Promise((resolve, reject) => {

    // now add the file to the DB
    const dbRecord = {
      email: email,
      password: password
    };

    sql.query(sql.format('INSERT INTO user SET ?', dbRecord), (err, result) => {
      if (err) {
        reject(['failed sql insert', err]);
        return;
      }

      resolve({
        id: result.insertId,
        email: dbRecord.email,
        password: dbRecord.password
      });
    });
  });
};

//validate login
module.exports.checkLogin = (email, pass) => {
  return new Promise((resolve, reject) => {

    sql.query(sql.format('select * from user where email = ? and password = ?', [email, pass]), (err, result) => {
      if (err) {
        reject(['failed sql query', err]);
        return;
      }

      const retval = [];

      result.forEach((row) => {

        retval.push({
          email: row.email,
          pass: row.password
        });
      });


      resolve(retval);
    });
  });
};


// load weeks from db
module.exports.listWeeks = () => {
  return new Promise((resolve, reject) => {
    let query = 'select weeks.id, weeks.title from weeks '



    sql.query(query, (err, data) => {
      if (err) {
        reject(['failed to run query', err]);
        return;
      }

      const retval = [];
      data.forEach((row) => {
        retval.push({
          id: row.id,
          title: row.title,
        });
      });


      resolve(retval);
    });

  });

};

// load topics from db
module.exports.listTopics = () => {
  return new Promise((resolve, reject) => {
    let query = 'select topics.id, topics.title from topics '



    sql.query(query, (err, data) => {
      if (err) {
        reject(['failed to run query', err]);
        return;
      }

      const retval = [];
      data.forEach((row) => {
        retval.push({
          id: row.id,
          title: row.title,
        });
      });


      resolve(retval);
    });

  });

};

// load notes from db
module.exports.listNotes = () => {
  return new Promise((resolve, reject) => {
    let query = 'select notes.id, notes.title from notes '



    sql.query(query, (err, data) => {
      if (err) {
        reject(['failed to run query', err]);
        return;
      }

      const retval = [];
      data.forEach((row) => {
        retval.push({
          id: row.id,
          title: row.title,
        });
      });


      resolve(retval);
    });

  });

};

// load resources from db
module.exports.listResources = () => {
  return new Promise((resolve, reject) => {
    let query = 'select resources.id, resources.title from resources '



    sql.query(query, (err, data) => {
      if (err) {
        reject(['failed query', err]);
        return;
      }

      const retval = [];
      data.forEach((row) => {
        retval.push({
          id: row.id,
          title: row.title,
        });
      });


      resolve(retval);
    });

  });

};

//delete weeks
module.exports.deleteWeeks = (id) => {
  return new Promise((resolve, reject) => {
    console.log("DELETE FROM weeks WHERE id=" + id)
    sql.query("DELETE FROM weeks WHERE id=" + id, (err) => {

      if (err) {
        reject(['error deleting', err]);
        return;
      }
      console.log("Delete weeks with mysql success !")

      resolve();
    });
  });
};

//delete topics
module.exports.deleteTopics = (id) => {
  return new Promise((resolve, reject) => {
    console.log("DELETE FROM topics WHERE id=" + id)
    sql.query("DELETE FROM topics WHERE id=" + id, (err) => {

      if (err) {
        reject(['error deleting', err]);
        return;
      }
      console.log("Delete topics with mysql success !")

      resolve();
    });
  });
};

//delete notes
module.exports.deleteNotes = (id) => {
  return new Promise((resolve, reject) => {
    console.log("DELETE FROM notes WHERE id=" + id)
    sql.query("DELETE FROM notes WHERE id=" + id, (err) => {

      if (err) {
        reject(['error deleting', err]);
        return;
      }
      console.log("Delete notes with mysql success !")

      resolve();
    });
  });
};


//delete resources
module.exports.deleteResources = (id) => {
  return new Promise((resolve, reject) => {
    console.log("DELETE FROM resources WHERE id=" + id)
    sql.query("DELETE FROM resources WHERE id=" + id, (err) => {

      if (err) {
        reject(['error deleting', err]);
        return;
      }
      console.log("Delete resources with mysql success !")

      resolve();
    });
  });
};
