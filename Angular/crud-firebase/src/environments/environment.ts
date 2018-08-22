// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyCeivcaaH59yokvvmp5hpS6qXYDZ9_JzKY",
    authDomain: "angular-crud-firebase-a6f37.firebaseapp.com",
    databaseURL: "https://angular-crud-firebase-a6f37.firebaseio.com",
    projectId: "angular-crud-firebase-a6f37",
    storageBucket: "",
    messagingSenderId: "158936382351"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
