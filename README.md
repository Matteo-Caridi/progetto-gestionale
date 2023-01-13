# ValutazionePreliminare

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.4.

Per quanto riguarda la fetch dei dati, ho utilizzato un servizio online che permette di settare una tabella con delle colonne, caratterizzandole per tipologia, e che successivamente espone delle api sulla qualche possiamo effettuare le nostre request. L'url utilizzato all'interno del service dovrebbe avere una durata di 30 gg. 
Il servizio in questione si trova al seguente indirizzo: https://retool.com/api-generator/.

Settaggi utilizzati:

- firstName: type People/firstName
- lastName: type People/lastName
- address: type location
- phone: type People/phone
- username: type People/Interest
- password: type IMEI

Alcuni tipi non erano disponibili esattamente come dovrebbero essere, ad esempio username o password. Ho fatto in modo di usare dei tipi che permettessero di avere i campi valorizzati, ad esempio il tipo IMEI permette di avere delle sequenze numeriche randomiche.

![image](https://user-images.githubusercontent.com/77775829/212306707-79a6ce35-1da1-4172-90ab-61fd30a15da2.png)

Questo mi ha permesso di simulare delle http request senza dover imbastire un microservizio da zero.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
