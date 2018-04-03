'use static';

const express = require('express');

const config = require("./config");

const db = require('./dbModel');

const app = express();


// static files
app.use('/', express.static(config.webpages, {
  extensions: ['html']
}));


// server api
app.get('/api/login', validateLogin);
app.post('/api/users', addUser);
app.post('/api/weeks', addWeeks);
app.get('/api/weeks', showWeeks);
app.delete('/api/weeks/delete/:id', delWeeks);
app.post('/api/topics', addTopics);
app.get('/api/topics', showTopics);
app.delete('/api/topics/delete/:id', delTopics);
app.post('/api/notes', addNotes);
app.get('/api/notes', showNotes);
app.delete('/api/notes/delete/:id', delNotes);
app.post('/api/resources', addResources);
app.get('/api/resources', showResources);
app.delete('/api/resources/delete/:id', delresources);

//start the server
app.listen(8080, (err) => {
  if (err) console.error("server could not start", err);
  else console.log('server started successfully');
});

//functionality

//validate log in
async function validateLogin(req, res) {
  try {
    const retval = await db.checkLogin(req.query.email, req.query.pass);

    if (retval.length === 1) {
      res.send(200);
    } else {
      res.send(401);
    }

  } catch (e) {
    error(res, e);
  }
}

//add user to database
async function addUser(req, res) {
  try {
    const retval = await db.addUser(req.query.email, req.query.password);
    if (req.accepts('html')) {
      res.json(200);
    } else {
      // request that accepts JSON will instead get the data
      res.json(retval);
    }

  } catch (e) {
    error(res, e);
  }
}

//add weeks to database
async function addWeeks(req, res) {
  try {
    const retval = await db.addWeek(req.query.title);
    if (req.accepts('html')) {
      res.json(200);
    } else {
      // request that accepts JSON will instead get the data
      res.json(retval);
    }

  } catch (e) {
    error(res, e);
  }
}


//async function deleteWeeks(req,res){}

//add topics to database
async function addTopics(req, res) {
  try {
    const retval = await db.addTopic(req.query.title);
    if (req.accepts('html')) {
      res.json(200);
    } else {
      // request that accepts JSON will instead get the data
      res.json(retval);
    }

  } catch (e) {
    error(res, e);
  }
}


//add notes to database
async function addNotes(req, res) {
  try {
    const retval = await db.addNote(req.query.title);
    if (req.accepts('html')) {
      res.json(200);
    } else {
      // request that accepts JSON will instead get the data
      res.json(retval);
    }

  } catch (e) {
    error(res, e);
  }
}



//add resources to database
async function addResources(req, res) {
  try {
    const retval = await db.addResource(req.query.title);
    if (req.accepts('html')) {
      res.json(200);
    } else {
      // request that accepts JSON will instead get the data
      res.json(retval);
    }

  } catch (e) {
    error(res, e);
  }
}

//get weeks from db
async function showWeeks(req, res) {
  try {
    const weeks = await db.listWeeks();
    res.json(weeks);
  } catch (e) {
    error(res, e);
  }
}

//get topics from db
async function showTopics(req, res) {
  try {
    const topics = await db.listTopics();
    res.json(topics);
  } catch (e) {
    error(res, e);
  }
}

//get notes from db
async function showNotes(req, res) {
  try {
    const notes = await db.listNotes();
    res.json(notes);
  } catch (e) {
    error(res, e);
  }
}

//get resources from db
async function showResources(req, res) {
  try {
    const resources = await db.listResources();
    res.json(resources);
  } catch (e) {
    error(res, e);
  }
}

//delete weeks
async function delWeeks(req, res) {
  try {
    console.log(req.params.id);
    await db.deleteWeeks(req.params.id);
    console.log("successfully deleted from DB " + req.params.id);
    res.sendStatus(200);
  } catch (e) {
    if (e.status === 'deleted') {
      res.sendStatus(410); // already gone
    } else {
      error(res, e);
    }
  }
}

//delete topics
async function delTopics(req, res) {
  try {
    console.log(req.params.id);
    await db.deleteTopics(req.params.id);
    console.log("successfully deleted from DB " + req.params.id);
    res.sendStatus(200);
  } catch (e) {
    if (e.status === 'deleted') {
      res.sendStatus(410); // already gone
    } else {
      error(res, e);
    }
  }
}

//delete notes
async function delNotes(req, res) {
  try {
    console.log(req.params.id);
    await db.deleteNotes(req.params.id);
    console.log("successfully deleted from DB " + req.params.id);
    res.sendStatus(200);
  } catch (e) {
    if (e.status === 'deleted') {
      res.sendStatus(410); // already gone
    } else {
      error(res, e);
    }
  }
}

//delete resources
async function delresources(req, res) {
  try {
    console.log(req.params.id);
    await db.deleteResources(req.params.id);
    console.log("successfully deleted from DB " + req.params.id);
    res.sendStatus(200);
  } catch (e) {
    if (e.status === 'deleted') {
      res.sendStatus(410); // already gone
    } else {
      error(res, e);
    }
  }
}

function error(res, msg) {
  res.sendStatus(500);
  console.error(msg);
}
