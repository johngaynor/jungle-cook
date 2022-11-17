function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");

  if (pageID != "") {
    $.get(`pages/${pageID}/${pageID}.html`, function (data) {
      $("#app").html(data);
    });
  } else {
    $.get(`pages/login/login.html`, function (data) {
      $("#app").html(data);
    });
  }
}

function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

function navListeners() {
  $(".nav-bars").click(function (e) {
    $(".nav-bars").toggleClass("active");
    $(".nav-links").toggleClass("active");
  });

  $(".nav-links a").click(function (e) {
    $(".nav-bars").removeClass("active");
    $(".nav-links").removeClass("active");
  });
}

function intiFirebase() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("app.js > line 36 > auth change logged in");
    } else {
      console.log("app.js > line 38 > auth change logged out");
    }
  });
}

function createAccount() {
  let fName = $("#fname").val();
  let lName = $("#lname").val();
  let email = $("#signup-email").val();
  let password = $("#signup-password").val();
  let fullName = fName + " " + lName;
  console.log("create " + fName + " " + lName);

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log("created account");
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("create error " + errorMessage);
      // ..
    });
}

function signInAnon() {
  firebase
    .auth()
    .signInAnonymously()
    .then(() => {
      // Signed in..
      console.log("signed in");
      $("#navLogin").hide();
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("Error signing in " + errorCode + " " + errorMessage);
    });
}

function signOut() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("signed out");
      $("#navSignOut").hide();
      $("#navLogin").show();
    })
    .catch((error) => {
      console.log("Error signing out " + error);
    });
}

$(document).ready(function () {
  try {
    let app = firebase.app();
    intiFirebase();
    // signInAnon();
  } catch (error) {
    console.log("error ", error);
  }
  initURLListener();
  navListeners();
});
