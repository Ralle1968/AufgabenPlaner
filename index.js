firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    $(".login-cover").hide();
  

  } else {
     //No user is signed in.
     $(".login-cover").show();
     
   }
});

// var dialog = document.querySelector('#close');
// dialog.addEventListener('click', function() {
//   window.location = '../start.html'
// });

 

$('#signinBtn').click(function(){
  var email = $('#signinEmail').val();
  var password = $('#signinPass').val();
  if (email !="" && password !="") {
    $('#loginBtn').hide();
    $('#closeBtn').hide();
    $('#registerBtn').hide();
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
      $('#loginError').show().text(error.message);
      $('#loginProgress').hide();
      $('#loginBtn').show();
      $('#closeBtn').show();
    });

  }
});

  //  $('#registerBtn').click(function(){
  //   var email = $('#registerEmail').val();
  //   var password = $('#registerPassword').val();
  //   if (email !="" && password !="") {
  //     $('#loginProgress').show();
  //     $('#registerBtn').hide();
  //     $('#loginBtn').hide();
  //     $('#closeBtn').hide();

  //     firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  //       // Handle Errors here.
  //       $('#loginError').show().text(error.message);
  //       $('#loginProgress').hide();
  //       $('#registerBtn').show();
  //       $('#closeBtn').show();
  //     });

  //   }
  // });

  $('#signOutBtn').click(function(){
    firebase.auth().signOut().then(function() {
    alert("click!");
    }, function(error) {
    // An error happened.
    alert(error.message);
    });
  });