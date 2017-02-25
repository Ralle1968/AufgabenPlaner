firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    // alert(user.email);
    // alert(user.uid);
    // alert(user.displayName);
    //window.location = '../start.html'
    $(".login-cover").hide();
    $("#cu").append(user.displayName);
    $("#signOutBtn").prepend(user.displayName);
    
  } else {
     //No user is signed in.
     $(".login-cover").show();
     //$("#cu").hide();
    }
});


var closer = document.querySelector('#signOutBtn');
closer.addEventListener('click', function() {
  firebase.auth().signOut().then(function() {
  alert("click!");
  window.location = 'start.html';
  }, function(error) {
  // An error happened.
  alert(error.message);
  });
});

 

$('#signinBtn').click(function(){
  var email = $('#signinEmail').val();
  var password = $('#signinPass').val();
  if (email !="" && password !="") {

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
      $('#loginError').show().text(error.message);
    });
  }
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
    // User is signed in.
    window.location ="../aufgaben.html"
    } else {
    // No user is signed in.

  }
});
  document.getElementById('signinForm').reset();
});

 $('#registerBtn').click(function(){
  var email = $('#registerEmail').val();
  var password = $('#registerPass').val();
  var name = $('#registerName').val();
  
  if (email !="" && password !="" && name !="") {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      $('#loginError').show().text(error.message);
    });
    }
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
    // User is signed in.
    user.updateProfile({
      displayName: name,
      photoURL: 'http://www.verdi-fes.de'
    }).then(function() {
      // Update successful.
      alert("Neu jetzt: " + user['displayName']);
      $("#cu").append(user.displayName);
      $("#signOutBtn").prepend(user.displayName);
    }, function(error) {
      // An error happened.
    });
  } else {
    // No user is signed in.

  }
});
  document.getElementById('registerForm').reset();   
});

$(document).ready(function(){
  $('#close').click(function(){
    
    alert("click!");
    window.location = '../start.html';
  }); 
});