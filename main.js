document.getElementById('issueInputForm').addEventListener('submit', saveIssue);

function saveIssue(e) {
	var issueDesc = document.getElementById('issueDescInput').value;
	var issueSeverity = document.getElementById('issueSeverityInput').value;
	var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
	var issueID = chance.guid();
	var issueStatus = 'Offen';
	var erl = '';
	var timestamp = new Date().getTime();
	var firebaseRef = firebase.database().ref();

	

	firebaseRef.child("Aufgabe: " + timestamp).set({
		id: issueID,
		description: issueDesc,
		severity: issueSeverity,
		assignedTo: issueAssignedTo,
		status: issueStatus,
		datum: timestamp
	});
	
	document.getElementById('issueInputForm').reset();
	$('#firebase').empty();	
	fetchIssues();
	e.preventDefault();
}

function setStatusClosed(timestamp) {
	
	var firebaseRef = firebase.database().ref();
	firebaseRef.child("Aufgabe: " + timestamp).update({
		status: "Erledigt!"
	});
	$('#firebase').empty();	
	
	fetchIssues();
}

function deleteIssue(timestamp) {
	//alert('Delete Aufgabe: ' + timestamp);
	var firebaseRef = firebase.database().ref();
	firebaseRef.child("Aufgabe: " + timestamp).remove();
	$('#firebase').empty();	
	
	fetchIssues();
}

function fetchIssues() {
	//$('#firebase').empty();	
	var firebaseRefread = firebase.database().ref();
	firebaseRefread.on("child_added", function(snap) {
		var id = snap.child('id').val();
		var desc = snap.child("description").val();
		var severity = snap.child("severity").val();
		var assignedTo = snap.child("assignedTo").val();
		var status = snap.child("status").val();
		var timestamp = snap.child("datum").val(); 
		var datum = new Date(snap.child("datum").val());
		

		$('#firebase').prepend(	'<div class="well">' +
								'<h6>Aufgaben-ID: ' + id + '</h6>' +
								'<p><span id="stat" class="label label-danger">' + status + '</span>'  +
								'<h3>' + desc + '</h3>' +
								'<p>Erstellt am: ' + ' ' + datum + '</p>' +
								'<p><span class="glyphicon glyphicon-time"></span>' + ' ' + severity + '</p>'  +
								'<p><span class="glyphicon glyphicon-user"></span>'	+ ' ' + assignedTo + '</p>' +
								'<a id=\''+ id +'\' href="#" onclick="setStatusClosed(\''+ timestamp +'\')" class="btn btn-warning">Erledigt!</a>' + ' ' +
								'<a href="#" onclick="deleteIssue(\''+ timestamp +'\')" class="btn btn-danger">Löschen</a>' +
								'</div>');
		
		if (snap.child("status").val()=='Erledigt!') {
		$('#' + id).hide();
		$('#stat').removeClass("label-danger");
		$('#stat').addClass("label-success");
		}
		
	});
}