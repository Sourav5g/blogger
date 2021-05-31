// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import firebase from "firebase";

export const environment = {
  production: false,
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 firebaseConfig : {
  apiKey: "AIzaSyCp5fba-ndeHyVQBLuAHrSxvoesp5eZlf8",
  authDomain: "fir-ace37.firebaseapp.com",
  databaseURL: "https://fir-ace37-default-rtdb.firebaseio.com",
  projectId: "fir-ace37",
  storageBucket: "fir-ace37.appspot.com",
  messagingSenderId: "584647936743",
  appId: "1:584647936743:web:bf6f4c1c574b8c998bb042",
  measurementId: "G-1V7XCB3QWD"
}
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
