// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzeyFopk-wYX8Boh6OclVBdjHL9OjXFS8",
  authDomain: "let-s-chat-2dc64.firebaseapp.com",
  databaseURL: "https://let-s-chat-2dc64-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-2dc64",
  storageBucket: "let-s-chat-2dc64.appspot.com",
  messagingSenderId: "551087854037",
  appId: "1:551087854037:web:ce4c894360dc063140ed5c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Start of Code
var Username = localStorage.getItem("Username");
document.getElementById("Username_Display").innerHTML = "Welcome " + Username + "!";

function getData() {
  firebase.database().ref("/").on('value',
    function (snapshot) {
      document.getElementById("output").innerHTML =
        "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code
        console.log("Room_Name: " + Room_names);
        row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>" + Room_names + "</div> <hr>"
        document.getElementById("output").innerHTML += row;
        //End code
      });
    });
}
getData();

function addRoom() {
  Room_Name = document.getElementById("Room_Name_Input").value;
  console.log(Room_Name);
  if (Room_Name == "") {
    window.alert("The message cannot be blank");
  } else {
    localStorage.setItem("Room_Name", Room_Name);
    firebase.database().ref("/").child(Room_Name).update({
      purpose: "Adding Room Name"
    });
    window.location = "kwitter_page.html";
  }
}

function redirectToRoomName(Room_ID) {
  console.log(Room_ID);
  localStorage.setItem("Room_Name", Room_ID);
  window.location = "kwitter_page.html";
}

function logout(){
    localStorage.removeItem("Username");
      localStorage.removeItem("Room_Name");
      window.location="index.html";
}