import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
apiKey: "AIzaSyCugSb3p6_Oid1SOxEcXWjs2ftd8qwqpos",
  authDomain: "votingapp-483f1.firebaseapp.com",
  databaseURL: "https://votingapp-483f1-default-rtdb.firebaseio.com",
  projectId: "votingapp-483f1",
  storageBucket: "votingapp-483f1.appspot.com",
  messagingSenderId: "446922170336",
  appId: "1:446922170336:web:ee1a5927e877ccf1a2d585"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();