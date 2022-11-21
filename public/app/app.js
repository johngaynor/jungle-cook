var userExists = false;
var userDisplayName = "";

function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  // let userDisplayName = displayName;

  if (pageID != "") {
    $.get(`pages/${pageID}/${pageID}.html`, function (data) {
      $("#app").html(data);
    });
    // $("#header-fName").html(`<p>${userDisplayName}<p>`);
  } else {
    $.get(`pages/home/home.html`, function (data) {
      $("#app").html(data);
    });
  }
}

function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
  $("#navSignOut").hide();
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
      // if (user.displayName) {
      //   $(".create-header-name").html(displayName);
      // }
      userExists = true;
      if (user.displayName) {
        $(".nav-links").append(`<div id="nav-fName">${user.displayName}</div>`);
        $("#header-fName").html("new");
      }
    } else {
      console.log("app.js > line 38 > auth change logged out");
      userExists = false;
      displayName = "";
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
      firebase.auth().currentUser.updateProfile({
        displayName: fName,
      });
      userDisplayName = fName;
      $("#fname").val("");
      $("#lname").val("");
      $("#signup-email").val("");
      $("#signup-password").val("");
      $("#navLogin").hide();
      $("#navSignOut").show();
      $(".nav-links").append(`<div id="nav-fName">${userDisplayName}</div>`);
      // $("#nav-fName").html(fName);
      // $.get(`pages/your-recipes/your-recipes.html`, function (data) {
      //   $("#app").html(data);
      // });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("create error " + errorMessage);
      // ..
    });
}

function logIn() {
  let email = $("#login-email").val();
  let password = $("#login-password").val();

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log("logged in");
      // $("#login-email").val("");
      // $("#login-password").val("");
      $("#navLogin").hide();
      $("#navSignOut").show();
      // $("#header-fName").remove();
      location.href = "#create";
      // $(".create").html(`hey ${user.displayName}, do stuff`);

      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("logged in error " + errorMessage);
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
      $("#nav-fName").remove();
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
