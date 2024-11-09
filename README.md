# EMIT

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7.

## OpenAI API Connection
EMIT requires an OpenAI API key to communicate with ChatGPT.

In order to set the project's API key, find `environment.ts` at location `./src/environments/`. Duplicate the file and name it `environment.development.ts`, it **must** be named correctly for the program to find it.

After that simply set the variable `OPENAI_API_KEY` in `environment.development.ts` to your key. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
