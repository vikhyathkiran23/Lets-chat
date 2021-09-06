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

  //Start Code
  var user_name=localStorage.getItem("Username");
  var room_name=localStorage.getItem("Room_Name");

  function Send() {
    Msg = document.getElementById("Message_Input").value;
    if (Msg == "") {
        window.alert("The message cannot be blank");
    } else {
        firebase.database().ref(room_name).push({
            Name: user_name,
            Message: Msg,
            Like: 0
        });
    }
    document.getElementById("Message_Input").value = "";
}