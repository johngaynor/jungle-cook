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
var _userProfileInfo = {};

// this area is for browse.html functionality //////////////
function returnToDefaultRecipes() {
  console.log("clicked go back");
  $("#recipe-full-back").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 0);
    $("#app").html(`<div class="recipes">
  <div class="recipes-content">
    <h1>Recipes: Try some today!</h1>
    <div class="recipes-container">

    </div>
  </div>
</div>`);
    loadDefaultRecipes();
  });
}

function loadDefaultRecipeFull(index) {
  console.log(
    `clicked default recipe idx=${index}, running function loadDefaultRecipeFull`
  );
  $("#app").html(`<div class="recipe-full">
      <div class="recipe-full-content">
        <div class="recipe-full-basic">
          <div class="recipe-full-img">
            <h2 class="recipe-sideways-heading">${RECIPES[index].recipeName}</h2>
            <img src="images/${RECIPES[index].recipeImage}" alt="" />
          </div>
          <div class="recipe-full-desc">
            <h2>Description:</h2>
            <p>
            ${RECIPES[index].recipeDesc}
            </p>
            <h3>Total Time:</h3>
            <p>${RECIPES[index].recipeTime}</p>
            <h3>Servings:</h3>
            <p>${RECIPES[index].recipeServings}</p>
          </div>
        </div>
        <div class="recipe-full-ingredients">
          <h2>Ingredients:</h2>
          <li>${RECIPES[index].recipeIngOne}</li>
          <li>${RECIPES[index].recipeIngTwo}</li>
          <li>${RECIPES[index].recipeIngThree}</li>
          <li>${RECIPES[index].recipeIngFour}</li>
          <li>${RECIPES[index].recipeIngFive}</li>
          <li>${RECIPES[index].recipeIngSix}</li>
          <li>${RECIPES[index].recipeIngSeven}</li>
          <li>${RECIPES[index].recipeIngEight}</li>
        </div>
        <div class="recipe-full-inst">
          <h2>Instructions:</h2>
          <li>${RECIPES[index].recipeInstOne}</li>
          <li>${RECIPES[index].recipeInstTwo}</li>
          <li>${RECIPES[index].recipeInstThree}</li>
          <li>${RECIPES[index].recipeInstFour}</li>
          <li>${RECIPES[index].recipeInstFive}</li>
        </div>
        <div class="recipe-full-btns">
          <div class="recipe-full-btn" id="recipe-full-back">Go Back</div>
        </div>
      </div>
    </div>
    `);
  $("html, body").animate({ scrollTop: 0 }, 0);

  returnToDefaultRecipes();
}

function loadDefaultRecipes() {
  $.each(RECIPES, function (index, recipe) {
    $(".recipes-container").append(`<div class="recipe-box" id="${index}">
    <div class="recipe-img">
    <div class="recipe-buttons">
        <div
          id="recipe-btn-view"
          onclick="loadDefaultRecipeFull(${index})"
          class="recipe-btn"
        >
          View
        </div>
      </div>
      <img src="images/${recipe.recipeImage}" alt="" />
    </div>
    <div class="recipe-desc">
      <h1>${recipe.recipeName}</h1>
      <h2>
      ${recipe.recipeDesc}
      </h2>
      <div class="recipe-time-servings">
        <div class="recipe-time-img">
        </div>
        <p>${recipe.recipeTime}</p>
      </div>
      <div class="recipe-time-servings">
        <div class="recipe-servings-img"></div>
        <p>${recipe.recipeServings}</p>
      </div>
    </div>
  </div>`);
  });
}
///////////////////////////////////////////////////////////

// this area is for firebase login/signup /////////////////
function initFirebase() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      _db = firebase.firestore();
      console.log(">> auth change logged in");
      userExists = true;
      console.log("userExists = " + userExists);

      if (user.displayName) {
        userDisplayName = user.displayName;
      }
    } else {
      _db = "";
      _userProfileInfo = {};
      console.log(">> auth change logged out");
      userExists = false;
      userDisplayName = "";
      console.log("userExists = " + userExists);
    }
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
      $("#navLogin").hide();
      $("#navSignOut").show();
      $("#navYourRecipes").show();
      _db
        .collection("Users")
        .doc(user.uid)
        .get()
        .then((doc) => {
          _userProfileInfo = doc.data();
          console.log("login userInfo ", _userProfileInfo);
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;

          console.log("user data retrieval error " + errorMessage);
        });
      console.log("changing from login to your-recipes");
      location.href = "#your-recipes";
      setTimeout(function () {
        // console.log("delayed user recipe loadin");
        loadUserRecipes();
      }, 500);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Login failed: username and/or password is incorrect.");
      console.log("logged in error " + errorMessage);
      $("#login-password").val("");
      $("#signup-password").val("");
      $("#signup-email").val("");
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
    recipes: [],
  };
  console.log("create " + fullName);

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
          console.log("create error " + errorCode + " " + errorMessage);
        });

      userDisplayName = fName;
      $("#fname").val("");
      $("#lname").val("");
      $("#signup-email").val("");
      $("#signup-password").val("");
      $("#navLogin").hide();
      $("#navSignOut").show();
      $("#navYourRecipes").show();
      // console.log("changing from login to your-recipes");
      // setTimeout(function () {
      //   location.href = "#your-recipes";
      // }, 1000);
      location.href = "#your-recipes";

      // setTimeout(function () {
      //   loadUserRecipes();
      //   console.log("delayed loading");
      // }, 50);
    })

    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(
        "Sign up failed: email is invalid or an account already exists with this email."
      );
      console.log("create error " + errorCode + " " + errorMessage);
      $("#signup-password").val("");
      $("#login-password").val("");
    });
}

// still some things to fix with creating an account

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
      location.href = "#home";
    })
    .catch((error) => {
      console.log("Error signing out " + error);
    });
}
///////////////////////////////////////////////////////////

// this area is for user recipe functions /////////////////
function returnToUserRecipes() {
  $("html, body").animate({ scrollTop: 0 }, 0);
  $("#app").html(`<div class="your-recipes">
  <div class="your-recipes-content">
    <h1 id="your-recipes-header">Hey ${_userProfileInfo.firstName}, here are your recipes!</h1>
    <div class="your-recipes-container"></div>
  </div>
</div>`);
  loadUserRecipes();
}

function editUserRecipe(index) {
  console.log("clicked edit user-recipe idx=" + index);

  $("#app").html(`<div class="create">
    <h1 id="header-fName">Hey ${userDisplayName}, edit your recipe!</h1>
    <div class="create-container">
      <form action="" class="create-form">
        <div class="create-basic">
          <input type="text" id="create-img" placeholder="Add Recipe Image" />
          <input
            type="file"
            id="create-file"
            accept="image/*"
            placeholder="Add Recipe Image"
          />
          <label for="create-file">Attach File</label>
          <input type="text" id="create-name" placeholder="${_userProfileInfo.recipes[index].recipeName}" />
          <input
            type="text"
            id="create-description"
            placeholder="${_userProfileInfo.recipes[index].recipeDesc}"
          />
          <input type="text" id="create-time" placeholder="${_userProfileInfo.recipes[index].recipeTime}" />
          <input
            type="text"
            id="create-serving-size"
            placeholder="${_userProfileInfo.recipes[index].recipeServings}"
          />
        </div>
        <p>Enter Ingredients:</p>
        <div class="create-ingredients">
          <input type="text" id="ing1" placeholder="${_userProfileInfo.recipes[index].recipeIngOne}" />
          <input type="text" id="ing2" placeholder="${_userProfileInfo.recipes[index].recipeIngTwo}" />
          <input type="text" id="ing3" placeholder="${_userProfileInfo.recipes[index].recipeIngThree}" />
          <input type="text" id="ing4" placeholder="${_userProfileInfo.recipes[index].recipeIngFour}" />
          <input type="text" id="ing5" placeholder="${_userProfileInfo.recipes[index].recipeIngFive}" />
          <input type="text" id="ing6" placeholder="${_userProfileInfo.recipes[index].recipeIngSix}" />
          <input type="text" id="ing7" placeholder="${_userProfileInfo.recipes[index].recipeIngSeven}" />
          <input type="text" id="ing8" placeholder="${_userProfileInfo.recipes[index].recipeIngEight}" />
          <input type="text" id="ing9" placeholder="${_userProfileInfo.recipes[index].recipeIngNine}" />
          <input type="text" id="ing10" placeholder="${_userProfileInfo.recipes[index].recipeIngTen}" />
        </div>
        <p>Enter Instructions:</p>
        <div class="create-instructions">
        <input type="text" id="inst1" placeholder="${_userProfileInfo.recipes[index].recipeInstOne}" />
        <input type="text" id="inst2" placeholder="${_userProfileInfo.recipes[index].recipeInstTwo}" />
        <input type="text" id="inst3" placeholder="${_userProfileInfo.recipes[index].recipeInstThree}" />
        <input type="text" id="inst4" placeholder="${_userProfileInfo.recipes[index].recipeInstFour}" />
        <input type="text" id="inst5" placeholder="${_userProfileInfo.recipes[index].recipeInstFive}" />
        <input type="text" id="inst6" placeholder="${_userProfileInfo.recipes[index].recipeInstSix}" />
        <input type="text" id="inst7" placeholder="${_userProfileInfo.recipes[index].recipeInstSeven}" />
        <input type="text" id="inst8" placeholder="${_userProfileInfo.recipes[index].recipeInstEight}" />
        <input type="text" id="inst9" placeholder="${_userProfileInfo.recipes[index].recipeInstNine}" />
        <input type="text" id="inst10" placeholder="${_userProfileInfo.recipes[index].recipeInstTen}" />
        </div>
  
        <div id="create-submit" onclick="createRecipeSubmit()">Create Recipe</div>
      </form>
    </div>
  </div>`);

  $("html, body").animate({ scrollTop: 0 }, 0);
}

function loadUserRecipeFull(index) {
  $("#app").html(`<div class="recipe-full">
  <div class="recipe-full-content">
    <div class="recipe-full-basic">
      <div class="recipe-full-img">
        <h2 class="recipe-sideways-heading">${_userProfileInfo.recipes[index].recipeName}</h2>
        <img src="images/${_userProfileInfo.recipes[index].recipeImage}" alt="" />
      </div>
      <div class="recipe-full-desc">
        <h2>Description:</h2>
        <p>
        ${_userProfileInfo.recipes[index].recipeDesc}
        </p>
        <h3>Total Time:</h3>
        <p>${_userProfileInfo.recipes[index].recipeTime}</p>
        <h3>Servings:</h3>
        <p>${_userProfileInfo.recipes[index].recipeServings}</p>
      </div>
    </div>
    <div class="recipe-full-ingredients">
      <h2>Ingredients:</h2>
      <li>${_userProfileInfo.recipes[index].recipeIngOne}</li>
      <li>${_userProfileInfo.recipes[index].recipeIngTwo}</li>
      <li>${_userProfileInfo.recipes[index].recipeIngThree}</li>
      <li>${_userProfileInfo.recipes[index].recipeIngFour}</li>
      <li>${_userProfileInfo.recipes[index].recipeIngFive}</li>
      <li>${_userProfileInfo.recipes[index].recipeIngSix}</li>
      <li>${_userProfileInfo.recipes[index].recipeIngSeven}</li>
      <li>${_userProfileInfo.recipes[index].recipeIngEight}</li>
      <li>${_userProfileInfo.recipes[index].recipeIngNine}</li>
      <li>${_userProfileInfo.recipes[index].recipeIngTen}</li>
    </div>
    <div class="recipe-full-inst">
      <h2>Instructions:</h2>
      <li>${_userProfileInfo.recipes[index].recipeInstOne}</li>
      <li>${_userProfileInfo.recipes[index].recipeInstTwo}</li>
      <li>${_userProfileInfo.recipes[index].recipeInstThree}</li>
      <li>${_userProfileInfo.recipes[index].recipeInstFour}</li>
      <li>${_userProfileInfo.recipes[index].recipeInstFive}</li>
      <li>${_userProfileInfo.recipes[index].recipeInstSix}</li>
      <li>${_userProfileInfo.recipes[index].recipeInstSeven}</li>
      <li>${_userProfileInfo.recipes[index].recipeInstEight}</li>
      <li>${_userProfileInfo.recipes[index].recipeInstNine}</li>
      <li>${_userProfileInfo.recipes[index].recipeInstTen}</li>
    </div>
    </div>
    <div class="recipe-full-btns">
    <div class="recipe-full-btn"
    onclick="returnToUserRecipes()"
    id="your-recipe-full-back">Go Back</div>
    <div
      class="recipe-full-btn"
      id="recipe-full-edit"
      onclick="editUserRecipe(${index})"
    >
      Edit Recipe
    </div>
  </div>
  </div>
</div>
`);

  $("html, body").animate({ scrollTop: 0 }, 0);
}

function loadUserRecipes() {
  $.each(_userProfileInfo.recipes, function (index, recipe) {
    $(".your-recipes-container").append(`<div class="recipe-box" id="${index}">
    <div class="recipe-img">
    <div class="recipe-buttons">
        <div
          id="recipe-btn-view"
          onclick="loadUserRecipeFull(${index})"
          class="recipe-btn"
        >
          View
        </div>
        <div 
        class="recipe-btn" 
        onclick="editUserRecipe(${index})"
        id="recipe-btn-edit">Edit Recipe</div>
        <div
        id="recipe-btn-delete"
        onclick="deleteUserRecipe()"
        class="recipe-btn">Delete</div>
      </div>
      <img src="images/${recipe.recipeImage}" alt="" />
    </div>
    <div class="recipe-desc">
      <h1>${recipe.recipeName}</h1>
      <h2>
      ${recipe.recipeDesc}
      </h2>
      <div class="recipe-time-servings">
        <div class="recipe-time-img">
        </div>
        <p>${recipe.recipeTime}</p>
      </div>
      <div class="recipe-time-servings">
        <div class="recipe-servings-img"></div>
        <p>${recipe.recipeServings}</p>
      </div>
    </div>
  </div>`);
  });
}
///////////////////////////////////////////////////////////

// this area is for creating/deleting user recipes ////////
let ingredientIndex = 3;
let instructionIndex = 3;

function addIngredient() {
  if (ingredientIndex < 10) {
    $(".create-ingredients").append(
      `<input type="text" id="ing${
        ingredientIndex + 1
      }" placeholder="Ingredient #${ingredientIndex + 1}" />`
    );

    ingredientIndex++;
  } else {
    $(".create-ingredients").append(
      `<p class="create-add-error">Cannot add more than 10 ingredients!</p>`
    );
    $(".ingredient-add").remove();
    console.log("hit ingredient limit");
  }
}

function addInstruction() {
  if (instructionIndex < 10) {
    $(".create-instructions").append(
      `<input type="text" id="inst${
        instructionIndex + 1
      }" placeholder="Instruction #${instructionIndex + 1}" />`
    );

    instructionIndex++;
  } else {
    $(".create-instructions").append(
      `<p>Cannot add more than 10 instructions!</p>`
    );
    $(".instruction-add").remove();

    console.log("hit instruction limit");
  }
}

function createRecipeSubmit() {
  let newRecipeName = $("#create-name").val();
  let newRecipeDesc = $("#create-description").val();
  let newRecipeTime = $("#create-time").val();
  let newRecipeServings = $("#create-name").val();
  // let newRecipeImage =
  let newRecipeIngOne = $("#ing1").val();
  let newRecipeIngTwo = $("#ing2").val();
  let newRecipeIngThree = $("#ing3").val();
  let newRecipeIngFour = $("#ing4").val();
  let newRecipeIngFive = $("#ing5").val();
  let newRecipeIngSix = $("#ing6").val();
  let newRecipeIngSeven = $("#ing7").val();
  let newRecipeIngEight = $("#ing8").val();
  let newRecipeIngNine = $("#ing9").val();
  let newRecipeIngTen = $("#ing10").val();
  let newRecipeInstOne = $("#inst1").val();
  let newRecipeInstTwo = $("#inst2").val();
  let newRecipeInstThree = $("#inst3").val();
  let newRecipeInstFour = $("#inst4").val();
  let newRecipeInstFive = $("#inst5").val();
  let newRecipeInstSix = $("#inst6").val();
  let newRecipeInstSeven = $("#inst7").val();
  let newRecipeInstEight = $("#inst8").val();
  let newRecipeInstNine = $("#inst9").val();
  let newRecipeInstTen = $("#inst10").val();

  console.log("initial newRecipeInstFour = " + newRecipeInstFour);

  if (newRecipeIngFour == undefined) {
    newRecipeIngFour = "";
  }

  if (newRecipeIngFive == undefined) {
    newRecipeIngFive = "";
  }

  if (newRecipeIngSix == undefined) {
    newRecipeIngSix = "";
  }

  if (newRecipeIngSeven == undefined) {
    newRecipeIngSeven = "";
  }

  if (newRecipeIngEight == undefined) {
    newRecipeIngEight = "";
  }

  if (newRecipeIngNine == undefined) {
    newRecipeIngNine = "";
  }

  if (newRecipeIngTen == undefined) {
    newRecipeIngTen = "";
  }

  // begin instructions

  if (newRecipeInstOne != "") {
    newRecipeInstOne = "1. " + $("#inst1").val();
  }

  if (newRecipeInstTwo != "") {
    newRecipeInstTwo = "2. " + $("#inst2").val();
  }

  if (newRecipeInstThree != "") {
    newRecipeInstThree = "3. " + $("#inst3").val();
  }

  if (newRecipeInstFour == undefined) {
    newRecipeInstFour = "";
  } else {
    newRecipeInstFour = "4. " + $("#inst4").val();
    console.log("changed newRecipeInstFour = " + newRecipeInstFour);
  }

  if (newRecipeInstFive == undefined) {
    newRecipeInstFive = "";
  } else {
    // newRecipeInsFive = "5. " + $("#inst5").val();
  }

  if (newRecipeInstSix == undefined) {
    newRecipeInstSix = "";
  } else {
    // newRecipeInstSix = "6. " + $("#inst6").val();
  }

  if (newRecipeInstSeven == undefined) {
    newRecipeInstSeven = "";
  } else {
    // newRecipeInstSeven = "7. " + $("#inst7").val();
  }

  if (newRecipeInstEight == undefined) {
    newRecipeInstEight = "";
  } else {
    // newRecipeInstEight = "8. " + $("#inst8").val();
  }

  if (newRecipeInstNine == undefined) {
    newRecipeInstNine = "";
  } else {
    // newRecipeInstNine = "9. " + $("#inst9").val();
  }

  if (newRecipeInstTen == undefined) {
    newRecipeInstTen = "";
  } else {
    // newRecipeInstTen = "10. " + $("#inst10").val();
  }

  let newRecipeObj = {
    recipeName: newRecipeName,
    recipeDesc: newRecipeDesc,
    recipeTime: newRecipeTime,
    recipeServings: newRecipeServings,
    recipeImage: "",
    recipeIngOne: newRecipeIngOne,
    recipeIngTwo: newRecipeIngTwo,
    recipeIngThree: newRecipeIngThree,
    recipeIngFour: newRecipeIngFour,
    recipeIngFive: newRecipeIngFive,
    recipeIngSix: newRecipeIngSix,
    recipeIngSeven: newRecipeIngSeven,
    recipeIngEight: newRecipeIngEight,
    recipeIngNine: newRecipeIngNine,
    recipeIngTen: newRecipeIngTen,
    recipeInstOne: newRecipeInstOne,
    recipeInstTwo: newRecipeInstTwo,
    recipeInstThree: newRecipeInstThree,
    recipeInstFour: newRecipeInstFour,
    recipeInstFive: newRecipeInstFive,
    recipeInstSix: newRecipeInstSix,
    recipeInstSeven: newRecipeInstSeven,
    recipeInstEight: newRecipeInstEight,
    recipeInstNine: newRecipeInstNine,
    recipeInstTen: newRecipeInstTen,
  };

  // left off at 12:49 on the last video

  console.log(newRecipeObj);

  _userProfileInfo.recipes.push(newRecipeObj);
  updateUserInfo(_userProfileInfo);
  loadUserRecipes();

  $("#create-img").val("");
  $("#create-name").val("");
  $("#create-description").val("");
  $("#create-time").val("");
  $("#create-serving-size").val("");
  $("#ingOne").val("");
  $("#ingTwo").val("");
  $("#ingThree").val("");
  $("#instOne").val("");
  $("#instTwo").val("");
  $("#instThree").val("");
  $("html, body").animate({ scrollTop: 0 }, "slow");
  alert("Your recipe has been submitted!");
}

function deleteUserRecipe(index) {
  console.log(_userProfileInfo.recipes);
  _userProfileInfo.recipes.splice(index, 1);
  console.log(_userProfileInfo.recipes);
  updateUserInfo(_userProfileInfo);
  $(".your-recipes-container").html("");
  loadUserRecipes();
}
///////////////////////////////////////////////////////////

// function logInUpdatePage(user) {
//   location.href = "#create";
//   console.log("update page works");
// }

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
      console.log("update doc error " + errorMessage);
    });
}

// this area is for url navigation & nav functionality ////
function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");

  if (pageID != "") {
    $.get(`pages/${pageID}/${pageID}.html`, function (data) {
      $("#app").html(data);

      if (pageID == `browse`) {
        loadDefaultRecipes();
      }

      if (pageID == `your-recipes`) {
        loadUserRecipes();
        $("#your-recipes-header").html(
          `hey ${userDisplayName}, here are your recipes!`
        );
      }

      if (pageID == `create`) {
        $("#header-fName").html(`hey ${userDisplayName}, create your recipe!`);
      }
    });
  } else {
    $.get(`pages/create/create.html`, function (data) {
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

function navListeners() {
  $(".nav-bars").click(function (e) {
    $(".nav-bars").toggleClass("active");
    $(".nav-links").toggleClass("active");
    $(".navHolder").toggleClass("active-nav");
  });

  $(".nav-links a").click(function (e) {
    $(".nav-bars").removeClass("active");
    $(".nav-links").removeClass("active");
  });
}

function createRouting() {
  if (userExists == false) {
    setTimeout(function () {
      location.href = "#login";
    }, 50);
  }
}
///////////////////////////////////////////////////////////

$(document).ready(function () {
  try {
    let app = firebase.app();
    initFirebase();
  } catch (error) {
    console.log("firebase error ", error);
  }
  initURLListener();
  navListeners();
});

// RANDOM NOTES

// individual error messages for specific errors (i.e. login error for invalid password vs too many failed attempts)

// trying to figure out how to create an alert that does not require the user to dismiss it

// if the recipe name is too long w/o spaces it runs off the page, how to fix? text-overflow?
