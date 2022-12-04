# N320 Jungle Cook

This assignment is a fully functioning CRUD application that allows users to create, read, update, and display data specific to their account. Jungle Cook is a cooking site for users to view default site recipes as well as create their own to be stored on Firebase.

# Deployed Link

https://john-webdev-74469.web.app/

# Project Highlights

## User Login

This was the first project we've done that has involved user login functionality. This was accomplished using Firebase via functions such as .onAuthStateChanged and .createUserWithEmailAndPassword.

## Storing User Data on Firebase and Locally

Additional code was necessary to update both Firestore and the local user profile. In the global variable \_userProfileInfo, we set it to an empty string by default. We then used various functions such as .doc(user.uid) and \_userProfileInfo = doc.data() to update the profile locally. \_userProfileInfo was used throughout the application to loop through user recipes and display them dynamically.

```js
function loadUserRecipes() {
  $.each(_userProfileInfo.recipes, function (index, recipe) {
    $(".your-recipes-container").append(`<div class="recipe-box" id="${index}">
    </div>`);
  });
}
```
