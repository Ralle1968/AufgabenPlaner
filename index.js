firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    $(".login-cover").hide();
    var dialog = document.querySelector('dialog');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    dialog.close();
  } else {
     //No user is signed in.
     $(".login-cover").show();
     var dialog = document.querySelector('dialog');
     if (! dialog.showModal) {
       dialogPolyfill.registerDialog(dialog);
     }
     // dialog.showModal();
   }
});

  var dialog1 = document.querySelector('#signIn');
  var showDialogButton = document.querySelector('#show-dialog');
    // if (! dialog.showModal) {
    //   dialogPolyfill.registerDialog(dialog);
    // }
  showDialogButton.addEventListener('click', function() {
    dialog1.showModal();
  });
    
  dialog1.querySelector('.close').addEventListener('click', function() {
    dialog1.close();
  });

  var dialog2 = document.querySelector('#register');
  var showDialogButton = document.querySelector('#show-register');
    // if (! dialog.showModal) {
    //   dialogPolyfill.registerDialog(dialog);
    // }
  showDialogButton.addEventListener('click', function() {
    dialog2.showModal();
  });
    
  dialog2.querySelector('.close').addEventListener('click', function() {
    dialog2.close();
  });

  $('#loginBtn').click(function(){
    var email = $('#loginEmail').val();
    var password = $('#loginPassword').val();
    if (email !="" && password !="") {
      $('#loginProgress').show();
      $('#loginBtn').hide();
      $('#closeBtn').hide();

      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
        $('#loginError').show().text(error.message);
        $('#loginProgress').hide();
        $('#loginBtn').show();
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