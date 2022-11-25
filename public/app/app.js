var RECIPES = [
  {
    recipeName: "Supreme Pizza",
    recipeDesc:
      "Make pizza night super duper out of this world with homemade pizza. This recipe is supreme with vegetables and two types of meat. Yum!",
    recipeTime: "1hr 24min",
    recipeServings: "4 servings",
    recipeImage: "recipe-pizza.jpg",
    recipeIngOne: "1/4 batch pizza dough",
    recipeIngTwo: "2 tablespoons Last-Minute Pizza Sauce",
    recipeIngThree: "10 slices pepperoni",
    recipeIngFour: "1 cup cooked and crumbled Italian sausage",
    recipeIngFive: "2 large mushrooms, sliced",
    recipeIngSix: "1/4 bell pepper, sliced",
    recipeIngSeven: "1 tablespoon sliced black olives",
    recipeIngEight: "1 cup shredded mozzarella cheese",
    recipeInstOne:
      "Preheat the oven to 475°. Spray pizza pan with nonstick cooking or line a baking sheet with parchment paper.",
    recipeInstTwo:
      "Flatten dough into a thin round and place on the pizza pan.",
    recipeInstThree: "Spread pizza sauce over the dough.",
    recipeInstFour: "Layer the toppings over the dough in the order listed.",
    recipeInstFive:
      "Bake for 8 to 10 minutes or until the crust is crisp and the cheese melted and lightly browned.",
  },
  {
    recipeName: "Classic Burger",
    recipeDesc:
      "Sink your teeth into a delicious restaurant-style, hamburger recipe made from lean beef. Skip the prepackaged patties and take the extra time to craft up your own, and that little extra effort will be worth it.",
    recipeTime: "30 min",
    recipeServings: "4 servings",
    recipeImage: "recipe-burger.jpg",
    recipeIngOne: "no ingredients!",
    recipeIngTwo: "",
    recipeIngThree: "",
    recipeIngFour: "",
    recipeIngFive: "",
    recipeIngSix: "",
    recipeIngSeven: "",
    recipeIngEight: "",
    recipeInstOne: "no instructions!",
    recipeInstTwo: "",
    recipeInstThree: "",
    recipeInstFour: "",
    recipeInstFive: "",
  },
  {
    recipeName: "Chicken Biryani",
    recipeDesc:
      " Chicken Biryani is a bold and flavorful Indian dish with crazy tender bites of chicken with bell peppers in a deliciously spiced and fragrant rice.",
    recipeTime: "1hr 15min",
    recipeServings: "6 servings",
    recipeImage: "recipe-pilaf.jpg",
    recipeIngOne: "no ingredients!",
    recipeIngTwo: "",
    recipeIngThree: "",
    recipeIngFour: "",
    recipeIngFive: "",
    recipeIngSix: "",
    recipeIngSeven: "",
    recipeIngEight: "",
    recipeInstOne: "no instructions!",
    recipeInstTwo: "",
    recipeInstThree: "",
    recipeInstFour: "",
    recipeInstFive: "",
  },
  {
    recipeName: "Ch. Chow Mein",
    recipeDesc:
      "  A great Chow Mein comes down to the sauce - it takes more than just soy sauce and sugar! Jam packed with a surprising amount of hidden vegetables, customize this Chicken Chow Mein recipe using your protein of choice!",
    recipeTime: "20 min",
    recipeServings: "4 servings",
    recipeImage: "recipe-chowmein.jpg",
    recipeIngOne: "no ingredients!",
    recipeIngTwo: "",
    recipeIngThree: "",
    recipeIngFour: "",
    recipeIngFive: "",
    recipeIngSix: "",
    recipeIngSeven: "",
    recipeIngEight: "",
    recipeInstOne: "no instructions!",
    recipeInstTwo: "",
    recipeInstThree: "",
    recipeInstFour: "",
    recipeInstFive: "",
  },
];

var _db = "";
var userExists = false;
var userDisplayName = "";
var _userProfileInfo = "";

function loadDefaultRecipes() {
  $.each(RECIPES, function (index, recipe) {
    $(".recipes-container").append(`<div class="recipe-box" id="${index}">
    <div class="recipe-img">
    <img src="images/${recipe.recipeImage}" alt="" />
    </div>
    <div class="recipe-desc">
      <h1>${recipe.recipeName}</h1>
      <p>
      ${recipe.recipeDesc}
      </p>
      <div class="recipe-time">
        <div class="recipe-time-img"></div>
        <p>${recipe.recipeTime}</p>
      </div>
      <div class="recipe-servings">
        <div class="recipe-servings-img"></div>
        <p>${recipe.recipeServings}</p>
      </div>
    </div>
  </div>`);

    loadFullRecipe();
  });
}

function initDefaultRecipeStyling() {
  $("#app").html(`<div class="recipes">
  <div class="recipes-content">
    <h1>Recipes: Try some today!</h1>
    <div class="recipes-container">

    </div>
  </div>
</div>`);
}

function returnToRecipes() {
  $("#recipe-full-back").click(function () {
    initDefaultRecipeStyling();
    loadDefaultRecipes();
  });
}

function loadFullRecipe() {
  $(".recipe-box").click(function (e) {
    let recipeIndex = e.currentTarget.id;
    console.log("clicked " + recipeIndex);
    $("#app").html(`<div class="recipe-full">
    <div class="recipe-full-content">
      <div class="recipe-full-basic">
        <div class="recipe-full-img">
          <h2 class="recipe-sideways-heading">${RECIPES[recipeIndex].recipeName}</h2>
          <img src="images/${RECIPES[recipeIndex].recipeImage}" alt="" />
        </div>
        <div class="recipe-full-desc">
          <h2>Description:</h2>
          <p>
          ${RECIPES[recipeIndex].recipeDesc}
          </p>
          <h3>Total Time:</h3>
          <p>${RECIPES[recipeIndex].recipeTime}</p>
          <h3>Servings:</h3>
          <p>${RECIPES[recipeIndex].recipeServings}</p>
        </div>
      </div>
      <div class="recipe-full-ingredients">
        <h2>Ingredients:</h2>
        <li>${RECIPES[recipeIndex].recipeIngOne}</li>
        <li>${RECIPES[recipeIndex].recipeIngTwo}</li>
        <li>${RECIPES[recipeIndex].recipeIngThree}</li>
        <li>${RECIPES[recipeIndex].recipeIngFour}</li>
        <li>${RECIPES[recipeIndex].recipeIngFive}</li>
        <li>${RECIPES[recipeIndex].recipeIngSix}</li>
        <li>${RECIPES[recipeIndex].recipeIngSeven}</li>
        <li>${RECIPES[recipeIndex].recipeIngEight}</li>
      </div>
      <div class="recipe-full-inst">
        <h2>Instructions:</h2>
        <li>${RECIPES[recipeIndex].recipeInstOne}</li>
        <li>${RECIPES[recipeIndex].recipeInstTwo}</li>
        <li>${RECIPES[recipeIndex].recipeInstThree}</li>
        <li>${RECIPES[recipeIndex].recipeInstFour}</li>
        <li>${RECIPES[recipeIndex].recipeInstFive}</li>
      </div>
      <div class="recipe-full-btns">
        <div id="recipe-full-back">Go Back</div>
      </div>
    </div>
  </div>
  `);

    returnToRecipes();
  });
}

// how to get it to refresh the scroll position when reloading the content?

function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  // let userDisplayName = displayName;

  if (pageID != "") {
    $.get(`pages/${pageID}/${pageID}.html`, function (data) {
      $("#app").html(data);

      loadDefaultRecipes();
    });
  } else {
    $.get(`pages/your-recipes/your-recipes.html`, function (data) {
      $("#app").html(data);

      loadDefaultRecipes();
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

// default recipe info
// {
//   recipeName: "",
//   recipeDesc:
//     "",
//   recipeTime: "",
//   recipeServings: "",
//   recipeImage: "",
//   recipeIngOne: "",
//   recipeIngTwo: "",
//   recipeIngThree: "",
//   recipeIngFour: "",
//   recipeIngFive: "",
//   recipeIngSix: "",
//   recipeIngSeven: "",
//   recipeIngEight: "",
//   recipeInstOne: "",
//   recipeInstTwo: "",
//   recipeInstThree: "",
//   recipeInstFour: "",
//   recipeInstFive: "",
// },
