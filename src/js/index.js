//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Layout from "./layout";

import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
	apiKey: "AIzaSyByGn1Fs5Iv55SQIi2icy26DB5Bu-EUdBA",
	authDomain: "mdc-authentication-e7d94.firebaseapp.com",
	projectId: "mdc-authentication-e7d94",
	storageBucket: "mdc-authentication-e7d94.appspot.com",
	messagingSenderId: "309575382482",
	appId: "1:309575382482:web:d0be29751e017f2f7ec40b",
	measurementId: "G-B2M8CTQ2MW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
