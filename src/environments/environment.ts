// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: 'AIzaSyD1YIHoUOOetahbtdMqch7FgukiI3znVTs',
      authDomain: 'lan-planner-677d3.firebaseapp.com',
      databaseURL: 'https://lan-planner-677d3.firebaseio.com',
      projectId: 'lan-planner-677d3',
      storageBucket: 'lan-planner-677d3.appspot.com',
      messagingSenderId: '56536057486'
  }
};
