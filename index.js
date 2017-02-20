firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    $(".login-cover").hide();
    
    var dialog = document.querySelector('#signInAndRegister');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog1);
    }
    dialog.close();

  } else {
     //No user is signed in.
     $(".login-cover").show();
     var dialog = document.querySelector('#signInAndRegister');
     if (! dialog.showModal) {
       dialogPolyfill.registerDialog(dialog);
     }
    
     // dialog.showModal();
   }
});

  var dialog = document.querySelector('#signInAndRegister');
  var showDialogButton = document.querySelector('#show-dialog');
    // if (! dialog.showModal) {
    //   dialogPolyfill.registerDialog(dialog);
    // }
  showDialogButton.addEventListener('click', function() {
    dialog.showModal();
  });
    
  dialog.querySelector('.close').addEventListener('click', function() {
    dialog.close();
  });

  // var dialog2 = document.querySelector('#register');
  // var showDialogButton = document.querySelector('#show-register');
  //   // if (! dialog.showModal) {
  //   //   dialogPolyfill.registerDialog(dialog);
  //   // }
  // showDialogButton.addEventListener('click', function() {
  //   dialog2.showModal();
  // });
    
  // dialog2.querySelector('.close').addEventListener('click', function() {
  //   dialog2.close();
  // });

  $('#loginBtn').click(function(){
    var email = $('#loginEmail').val();
    var password = $('#loginPassword').val();
    if (email !="" && password !="") {
      $('#loginProgress').show();
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

   $('#registerBtn').click(function(){
    var email = $('#loginEmail').val();
    var password = $('#loginPassword').val();
    if (email !="" && password !="") {
      $('#loginProgress').show();
      $('#registerBtn').hide();
      $('#loginBtn').hide();
      $('#closeBtn').hide();

      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        $('#loginError').show().text(error.message);
        $('#loginProgress').hide();
        $('#registerBtn').show();
        $('#closeBtn').show();
      });

    }
  });

  $('#signOutBtn').click(function(){
    firebase.auth().signOut().then(function() {
    // Sign-out successful.
    }, function(error) {
    // An error happened.
    alert(error.message);
    });
  });