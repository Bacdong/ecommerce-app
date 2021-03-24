# Ecommerce App - BookStore
## Reference Links
* [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Environment
* NodeJS: v12.19.0
* Angular: v11.2.1

## Install Environment
* Install packages:
```
cd vlaunch/
npm install
npm install --also=dev
```

* Config environments
```
cd vlaunch/
vi /src/environments/environment.prod.ts
vi /src/environments/environment.ts
```

* Generate a new component
```
cd vlaunch/
ng generate component <component-name>
ng generate directive|pipe|service|class|guard|interface|enum|module
```

## Web Serve
```
cd vlaunch/
ng serve
ng serve --port <Your port>
```

## Build & Deploy
* Build
```
cd vlaunch/
ng build
```

* Deploy
```
cd bash/prod
bash deploy_web.sh
```
