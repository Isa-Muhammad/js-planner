window.addEventListener('load', function() {
  initialize()
  loadWeeks()
  loadTopics()
  loadNotes()
  loadResources()

});

function initialize() {

  const loggedInUser = null;

  let drp = document.getElementById("target");
  let drg = document.getElementById("drag");
  let logInBtn = document.getElementById("LoginButton");
  let signUpBtn = document.getElementById("SignupButton");
  let logOutBtn = document.getElementById("logOutBtn");
  let SignUplnk = document.getElementById("signUplnk");
  let signlnk = document.getElementById("SignInlnk");
  let addWeekBtn = document.getElementById("addWeekBtn");
  let addTopicBtn = document.getElementById("addTopicBtn");
  let addNoteBtn = document.getElementById("addNoteBtn");
  let addResBtn = document.getElementById("addResBtn");



  drg.addEventListener("dragstart", function(e) {
    dragstart_handler(e);
  })
  drg.draggable = "true"
  drp.addEventListener("dragover", function(e) {
    dragover_handler(e);
  })
  drp.addEventListener("drop", function(e) {
    drop_handler(e);
  })
  logInBtn.addEventListener("click", login);
  logOutBtn.addEventListener("click", logOut);
  signUpBtn.addEventListener("click", submitUser);
  SignUplnk.addEventListener("click", switchToAccForm);
  signlnk.addEventListener("click", switchToSignInForm);
  addWeekBtn.addEventListener("click", function() {
    submitWeek();
    addWeek();
  });
  addTopicBtn.addEventListener("click", function() {
    submitTopic();
    addTopic();
  });
  addNoteBtn.addEventListener("click", function() {
    submitNote();
    addNote();
  });
  addResBtn.addEventListener("click", function() {
    submitRes();
    addResources();
  });
}


/*switch to account form*/
function switchToAccForm() {
  console.log("switching");
  let accForm = document.getElementById("accountForm");
  let signInForm = document.getElementById("logIn");

  if (accForm.style.display === "block") {
    accForm.style.display = "none";
    signInForm.style.display = "block";
  } else {
    accForm.style.display = "block";
    signInForm.style.display = "none";
  }
}


/*switch to sign in form*/
function switchToSignInForm() {
  let accForm = document.getElementById("accountForm");
  let signInForm = document.getElementById("logIn");

  if (signInForm.style.display === "block") {
    signInForm.style.display = "none";
    accForm.style.display = "block";
  } else {
    signInForm.style.display = "block";
    accForm.style.display = "none";
  }
}

//logout the app
function logOut() {
  let appPage = document.getElementById("app-page");
  let signInForm = document.getElementById("logIn");

  if (signInForm.style.display === "block") {
    signInForm.style.display = "none";
    appPage.style.display = "block";
  } else {
    signInForm.style.display = "block";
    appPage.style.display = "none";
    location.reload(); //reload page after log out
  }

}



/*show app page*/
function switchToAppPage() {
  let signInForm = document.getElementById("logIn");
  let appPage = document.getElementById("app-page");

  if (appPage.style.display === "block") {
    appPage.style.display = "none";
    signInForm.style.display = "block";
  } else {
    appPage.style.display = "block";
    signInForm.style.display = "none";
  }
}

/*ADD TEXT TO WEEKS*/
function addWeek() {
  const input = document.getElementById("weekInput");
  const li = document.createElement("li");
  const ol = document.getElementById("weekDisplay");
  var btn = document.createElement("BUTTON");
  document.body.appendChild(btn);
  btn.textContent = ' X'
  btn.classList = 'remove'
  li.textContent = input.value
  if (input.value != '') {
    ol.appendChild(li)
    li.appendChild(btn)
  }
}

/*ADD TEXT TO TOPIC*/
function addTopic() {
  const input = document.getElementById("topicInput");
  const li = document.createElement("li");
  const ol = document.getElementById("topicDisplay");
  var btn = document.createElement("BUTTON");
  document.body.appendChild(btn);
  btn.textContent = ' X'
  btn.classList = 'remove'
  li.textContent = input.value
  if (input.value != '') {
    ol.appendChild(li)
    li.appendChild(btn)
  }
}




/*ADD TEXT TO NOTES*/
function addNote() {
  const input = document.getElementById("noteInput");
  const li = document.createElement("li");
  const ol = document.getElementById("noteDisplay");
  var btn = document.createElement("BUTTON");
  document.body.appendChild(btn);
  btn.textContent = ' X'
  btn.classList = 'remove'
  li.textContent = input.value
  if (input.value != '') {
    ol.appendChild(li)
    li.appendChild(btn)
  }
}

/*ADD TEXT TO RESOURCES*/
function addResources() {
  const input = document.getElementById("resourceInput");
  const li = document.createElement("li");
  const ol = document.getElementById("resourceDisplay");
  var btn = document.createElement("BUTTON");
  document.body.appendChild(btn);
  btn.textContent = ' X'
  btn.classList = 'remove'
  li.textContent = input.value
  if (input.value != '') {
    ol.appendChild(li)
    li.appendChild(btn)
  }
}





//Add a new week to the db
async function submitWeek() {
  const title = document.getElementById('weekInput');
  if (title.value == "") return;

  const submitButton = document.getElementById('addWeekBtn');
  submitButton.disabled = true;

  let url = '/api/weeks';
  url += '?title=' + encodeURIComponent(title.value);

  const response = await fetch(url, {
    method: 'post'
  });


  submitButton.disabled = false;


  if (!response.ok) {
    console.error('error adding week', response.status, response.statusText);
  } else {
    weekAdded();
  }
}

function weekAdded() {
  document.getElementById('weekInput').value = '';
  console.log("week added!");
}


//Add  new topic to the db
async function submitTopic() {
  const title = document.getElementById("topicInput");
  if (title.value == "") return;

  const submitButton = document.getElementById("addTopicBtn");
  submitButton.disabled = true;

  let url = '/api/topics';
  url += '?title=' + encodeURIComponent(title.value);

  const response = await fetch(url, {
    method: 'post'
  });


  submitButton.disabled = false;


  if (!response.ok) {
    console.error('error adding topic', response.status, response.statusText);
  } else {
    topicAdded();
  }
}

function topicAdded() {
  document.getElementById("topicInput").value = ""; //clear textbox
  console.log("Topic added!");
}




//Add  new note to the db
async function submitNote() {
  const title = document.getElementById("noteInput");
  if (title.value == "") return;

  const submitButton = document.getElementById("addNoteBtn");
  submitButton.disabled = true;

  let url = '/api/notes';
  url += '?title=' + encodeURIComponent(title.value);

  const response = await fetch(url, {
    method: 'post'
  });


  submitButton.disabled = false;


  if (!response.ok) {
    console.error('error adding note', response.status, response.statusText);
  } else {
    noteAdded();
  }
}

function noteAdded() {
  document.getElementById("noteInput").value = "";
  console.log("Note added!");
}


//Add  new resource to the db
async function submitRes() {
  const title = document.getElementById("resourceInput");
  if (title.value == "") return;

  const submitButton = document.getElementById("addResBtn");
  submitButton.disabled = true;

  let url = '/api/resources';
  url += '?title=' + encodeURIComponent(title.value);

  const response = await fetch(url, {
    method: 'post'
  });


  submitButton.disabled = false;


  if (!response.ok) {
    console.error('error adding resource', response.status, response.statusText);
  } else {
    resAdded();
  }
}

function resAdded() {
  document.getElementById("resourceInput").value = "";
  console.log("Res added!");
}


//Add a new user to the db
async function submitUser() {
  const email = document.getElementById('logAccEmail');
  const password = document.getElementById('logAccPass');
  if (email.value == "") return;
  if (password.value == "") return;


  let url = '/api/users';
  url += '?email=' + encodeURIComponent(email.value);
  url += '&password=' + encodeURIComponent(password.value);

  const response = await fetch(url, {
    method: 'post'
  });

  if (!response.ok) {
    console.error('error submitting user', response.status, response.statusText);
  } else {
    userSubmitted();
  }
}

function userSubmitted() {
  if (document.getElementById('logAccEmail').value == '') {
    setStatus("Please enter email");
    throw response;
  } else if (document.getElementById('logAccPass').value == '') {
    setStatus("Please enter password");
    throw response;
  } else {
    document.getElementById('logAccEmail').value = '';
    document.getElementById('logAccPass').value = '';
    switchToSignInForm();
  }
}



//log in function
async function login() {
  const email = document.getElementById('logEmail');
  const pass = document.getElementById('logPass');

  let url = '/api/login';
  url += '?email=' + encodeURIComponent(email.value);
  url += '&pass=' + encodeURIComponent(pass.value);

  //Check login against logins on server
  const response = await fetch(url);

  if (!response.ok) {
    setStatus("The Username or Password is incorrect");
    throw response;
  } else if (document.getElementById('logEmail').value == '') {
    setStatus("Please enter email");
  } else if (document.getElementById('logPass').value == '') {
    setStatus("Please enter password");
  } else {
    console.log("logged in");
    switchToAppPage();
  }
};


//clear error message
function clearStatus() {
  let status = document.getElementById('status');
  status.textContent = "";
  status.setAttribute("style", "opacity: 0; top:-10vh;");
}

//display error message
function setStatus(text) {
  let status = document.getElementById('status');
  status.textContent = text;
  status.setAttribute("style", "opacity: 1; top:0;");

  window.setTimeout(clearStatus, 5000);
}

//load week from database
async function loadWeeks() {
  weekDisplay.innerHTML = "";
  const response = await fetch("/api/weeks", {
    method: "GET"
  });
  if (response.ok) {
    const data = await response.json();
    console.log(data)
    for (i = 0; i < data.length; i++) {

      const li = document.createElement('li')
      li.id = data[i].id
      var btn = document.createElement("BUTTON");
      document.body.appendChild(btn);
      btn.textContent = ' X'
      btn.classList = 'remove'
      btn.id = data[i].id
      li.textContent = data[i].title
      weekDisplay.appendChild(li)
      li.appendChild(btn)
      delWeeks(btn)

    }

  }
}

//load topic data onto html page
async function loadTopics() {
  topicDisplay.innerHTML = "";
  const response = await fetch("/api/topics", {
    method: "GET"
  });
  if (response.ok) {
    const data = await response.json();
    console.log(data)
    for (i = 0; i < data.length; i++) {

      const li = document.createElement('li')
      li.id = data[i].id
      var btn = document.createElement("BUTTON");
      document.body.appendChild(btn);
      btn.textContent = ' X'
      btn.classList = 'remove'
      btn.id = data[i].id
      li.textContent = data[i].title
      topicDisplay.appendChild(li)
      li.appendChild(btn)
      del(btn)

    }


  }
}

//load note data onto html page
async function loadNotes() {
  noteDisplay.innerHTML = "";
  const response = await fetch("/api/notes", {
    method: "GET"
  });
  if (response.ok) {
    const data = await response.json();
    console.log(data)
    for (i = 0; i < data.length; i++) {

      const li = document.createElement('li')
      li.id = data[i].id
      var btn = document.createElement("BUTTON");
      document.body.appendChild(btn);
      btn.textContent = ' X'
      btn.classList = 'remove'
      btn.id = data[i].id
      li.textContent = data[i].title
      noteDisplay.appendChild(li)
      li.appendChild(btn)
      delNotes(btn)
    }

  }
}

//load resource data onto html page
async function loadResources() {
  resourceDisplay.innerHTML = "";
  const response = await fetch("/api/resources", {
    method: "GET"
  });
  if (response.ok) {
    const data = await response.json();
    console.log(data)
    for (i = 0; i < data.length; i++) {

      const li = document.createElement('li')
      li.id = data[i].id
      var btn = document.createElement("BUTTON");
      document.body.appendChild(btn);
      btn.textContent = ' X'
      btn.classList = 'remove'
      btn.id = data[i].id
      li.textContent = data[i].title
      resourceDisplay.appendChild(li)
      li.appendChild(btn)
      delRes(btn)
    }

  }
}

// drag habdler
function dragstart_handler(ev) {
  // Add the target element's id to the data transfer object
  ev.dataTransfer.setData("text", ev.target.id);
  ev.dropEffect = "move";
}

// drag over handler
function dragover_handler(ev) {
  ev.preventDefault();
  // Set the dropEffect to move
  ev.dataTransfer.dropEffect = "move"
}

//drop handler
function drop_handler(ev) {
  ev.preventDefault();
  // Get the id of the target and add the moved element to the target's DOM
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function del(item) {
  item.addEventListener('click', function(event) {
    console.log('hi')
    requestDelete(event);
  })
}

function delWeeks(item) {
  item.addEventListener('click', function(event) {
    console.log('hi')
    requestWeekDelete(event);
  })
}

function delNotes(item) {
  item.addEventListener('click', function(event) {
    console.log('hi')
    requestNoteDelete(event);
  })
}

function delRes(item) {
  item.addEventListener('click', function(event) {
    console.log('hi')
    requestResDelete(event);
  })
}



//delete topics
async function requestDelete(e) {
  if (e.target.id && window.confirm('Delete?')) {
    console.log('hi')
    await fetch('/api/topics/delete/' + e.target.id, {
      method: 'DELETE'
    });
    loadTopics();
  }
}

//delete weeks
async function requestWeekDelete(e) {
  if (e.target.id && window.confirm('Delete?')) {
    console.log('hi')
    await fetch('/api/weeks/delete/' + e.target.id, {
      method: 'DELETE'
    });
    loadWeeks();
  }
}

//delete notes
async function requestNoteDelete(e) {
  if (e.target.id && window.confirm('Delete?')) {
    console.log('hi')
    await fetch('/api/notes/delete/' + e.target.id, {
      method: 'DELETE'
    });
    loadNotes();
  }
}

//delete resources
async function requestResDelete(e) {
  if (e.target.id && window.confirm('Delete?')) {
    console.log('hi')
    await fetch('/api/resources/delete/' + e.target.id, {
      method: 'DELETE'
    });
    loadResources();
  }
}
