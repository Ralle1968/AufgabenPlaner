firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    $(".login-cover").hide();
    $("#cu").append(user.email);
    
  } else {
     //No user is signed in.
     $(".login-cover").show();
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
  //var name = $('#userName').val();
  if (email !="" && password !="") {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      $('#loginError').show().text(error.message);
    });
  }
});

  $('#signOutBtn').click(function(){
    firebase.auth().signOut().then(function() {
    alert("click!");
    }, function(error) {
    // An error happened.
    alert(error.message);
    });
  });