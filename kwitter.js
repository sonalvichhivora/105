var firebaseConfig = {
    apiKey: "AIzaSyBTVZ1Hsop9Jt8k0mHEXegYSRWoZS3cQnE",
    authDomain: "igishka2-tssixm.firebaseapp.com",
    databaseURL: "https://newagent-fhepbr.firebaseio.com",
    projectId: "igishka2-tssixm",
    storageBucket: "igishka2-tssixm.appspot.com",
    messagingSenderId: "14896371054",
    appId: "1:14896371054:web:fc4e1d55b42d5a7f41dd7f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// ADD YOUR FIREBASE LINKS

function addUser() {

    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "kwitter_room.html";
  }