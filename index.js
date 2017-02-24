firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    alert(user.email);
    alert(user.uid);
    alert(user.displayName);
    $(".login-cover").hide();
    $("#cu").append(user.displayName);
    
  } else {
     //No user is signed in.
     $(".login-cover").show();
     //$("#cu").hide();
     document.getElementById('signinForm').reset();
     document.getElementById('registerForm').reset();
   }
});


var dialog = document.querySelector('#close');
dialog.addEventListener('click', function() {
  window.location = '../start.html'
});

 

$('#signinBtn').click(function(){
  var email = $('#signinEmail').val();
  var password = $('#signinPass').val();
  if (email !="" && password !="") {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
      $('#loginError').show().text(error.message);
    });
  }
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
    }, function(error) {
      // An error happened.
    });
  } else {
    // No user is signed in.

  }
});
     
});

  $('#signOutBtn').click(function(){
    firebase.auth().signOut().then(function() {
    alert("click!");
    window.location = '../start.html';
    }, function(error) {
    // An error happened.
    alert(error.message);
    });
  });