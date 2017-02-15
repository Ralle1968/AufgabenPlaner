// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     // User is signed in.
//     $(".login-cover").hide();
//   } else {
//     //No user is signed in.
//     $("#login-dialog").hide();
//     // var dialog = document.querySelector('#login-dialog');
//     // if (! dialog.showModal) {
//     //   dialogPolyfill.registerDialog(dialog);
//     // }
//     // dialog.showModal();
//   }
// });

  var dialog = document.querySelector('dialog');
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