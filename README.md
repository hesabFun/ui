# HeasbFun - User interface

Free, open source and cross-platform finance application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# Installing Cordova

Have node, npm and cordova installed.

```
npm install -g cordova
```

Then, run:

```
npm install
```
inside both `ui` and `cordova` folders.

And then, run:

```
cordova platform add android
```
for android, and: 
```
cordova platform add ios
```
for ios. of course for ios, you might need some environmental specifications.

After that, make sure you have all the cordova necessities by running these commands inside `cordova` folder:

```
cordova platform ls
```
and: 
```
cordova requirements
```

## Building the Mobile App
  
Inside the cordova folder, run:
  
```
cordova build android
```
or ios. and after command is done, cordova will show the result folder for the app. (for android it would be `/ui/platforms/android/build/outputs/apk/android-debug.apk`)
