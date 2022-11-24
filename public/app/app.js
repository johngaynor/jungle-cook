var _db = "";
var userExists = false;
var userDisplayName = "";
var _userProfileInfo = "";

function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  // let userDisplayName = displayName;

  if (pageID != "") {
    $.get(`pages/${pageID}/${pageID}.html`, function (data) {
      $("#app").html(data);
    });
  } else {
    $.get(`pages/browse/browse-full.html`, function (data) {
      $("#app").html(data);
    });
  }
}

function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
  $("#navSignOut").hide();
  $("#navYourRecipes").hide();
}

function loadLists() {
  let listString = "<ul>";
  $.each(_userProfileInfo.lists, function (idx, list) {
    listString += `<p>list stuff #${idx}, other stuff ${list.listItems.length}</p>`;
  });
  listString += "</ul>";
  $("#app").append(listString);
}

// loadListItems => just change LISTS to _userProfileInfo.lists[]

function addMainList() {
  let newListName = $("#listName").val();
  let newListObj = {
    name: newListName,
    listItems: [],
  };

  _userProfileInfo.lists.push(newListObj);
  updateUserInfo(_userProfileInfo);
  loadLists();
  $("#listName").val("");
}

function updateUserInfo(userObj) {
  let id = firebase.auth().currentUser.uid;
  // if theres a user logged in, it will get the uid
  _db
    .collection("Users")
    .doc(id)
    .update(userObj)
    .then(() => {
      console.log("updated doc");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("update error " + errorMessage);
    });
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

function initFirebase() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      _db = firebase.firestore();
      console.log("app.js > line 36 > auth change logged in");
      userExists = true;
      if (user.displayName) {
        $(".nav-links").append(`<div id="nav-fName">${user.displayName}</div>`);
      }
    } else {
      _db = "";
      _userProfileInfo = "";
      console.log("app.js > line 38 > auth change logged out");
      userExists = false;
      displayName = "";
      $("#navCreate").click(function () {
        console.log("clicked create");

        setTimeout(function () {
          location.href = "#login";
        }, 50);
      });
    }
  });
}

function createAccount() {
  let fName = $("#fname").val();
  let lName = $("#lname").val();
  let email = $("#signup-email").val();
  let password = $("#signup-password").val();
  let fullName = fName + " " + lName;
  let userObj = {
    firstName: fName,
    lastName: lName,
    email: email,
    lists: [],
  };
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

      _db
        .collection("Users")
        .doc(user.uid)
        .set(userObj)
        .then(() => {
          console.log("doc added");
          _userProfileInfo = userObj;
          console.log("create userInfo ", _userProfileInfo);
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log("create error " + errorMessage);
          // ..
        });

      userDisplayName = fName;
      $("#fname").val("");
      $("#lname").val("");
      $("#signup-email").val("");
      $("#signup-password").val("");
      $("#navLogin").hide();
      $("#navSignOut").show();
      $("#navYourRecipes").show();
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

function updateUserContent() {
  location.href = "#create";
  // console.log(window.location.hash);
  // if (window.location.hash === "#create") {
  //   $("#app").html();
  // } else {
  //   console.log("error loading " + errorMessage);
  // }
}

function logInUpdatePage(user) {
  location.href = "#create";
  console.log("update page works");
  setTimeout(function () {
    console.log("page loaded correctly");
    $("#header-fName").html(`hey ${user.displayName}, create your recipe!`);
  }, 50);
  // 15ms is the lowest I could go for it to still work, should probably set it higher in case other computers don't load as fast
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
      $("#navLogin").hide();
      $("#navSignOut").show();
      $("#navYourRecipes").show();

      logInUpdatePage(user);
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
      $("#navYourRecipes").hide();
      $("#nav-fName").remove();
    })
    .catch((error) => {
      console.log("Error signing out " + error);
    });
}

$(document).ready(function () {
  try {
    let app = firebase.app();
    initFirebase();
    // signInAnon();
  } catch (error) {
    console.log("error ", error);
  }
  initURLListener();
  navListeners();
});

// function userUpdateContent() {
//   $(document)
//     .then(function () {
//       $("#header-fName").html();
//     })
//     .catch(console.log("loading error"));
// }
