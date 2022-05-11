
      
      //MODALS

//CHANGE LAN MODAL

var languageModal = document.getElementById("changeLanguageModal");
var lnBtn = document.getElementById("lnBtn");
var closeLanguage = document.getElementById("closeLN");

// When the user clicks the button, open the modal 
lnBtn.onclick = function() {
  languageModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeLanguage.onclick = function() {
  languageModal.style.display = "none";
}


//SIGN IN MODAL
var signInModal = document.getElementById("signInUpModal");
var signinBtn = document.getElementById("signinBtn");
var closeSignIn = document.getElementById("closeSignIn");


const showSignInModal = () => {
  signInModal.style.display = "block";
  imageInfoModal.style.display="none"
  signUpmodal.style.display = "none";
}


closeSignIn.onclick = function() {
  signInModal.style.display = "none";
}


//SIGN UP MODAL
var signUpmodal= document.getElementById("signUp");
var closeSignUp = document.getElementById("closeSignUp");
var phoneSignUp=document.getElementsByClassName("phone-btn");
const showSignUpModal = () => {
    signUpmodal.style.display = "block";
    imageInfoModal.style.display="none"
    signInModal.style.display = "none";
  }
  closeSignUp.onclick = function() {
    signUpmodal.style.display = "none";
  }


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == languageModal) {
     languageModal.style.display = "none";
  }
  if (event.target == signUpmodal) {
    signUpmodal.style.display = "none";
  }
  if (event.target == signInModal) {
    signInModal.style.display = "none";
  }
}





