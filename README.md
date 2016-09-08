# angular-upgrade

This is a 10 phased approach towards upgrading your Angular 1 application to Angular 2.  Instead of going directly to Angular 2 
we have a number of best practices we can start adhering to immediately with Angular 1 (Phases 1-7).  These practices will
benefit us with our understanding of Angular 2 as well as help us write clean, testable, and maintainable code.  Many of them
are optional but recommended.

This repository is used for a presentation with the slides located here: https://docs.google.com/presentation/d/1ug2uBFY2Fx8sB6CgHvHdc-827xigh0nLWGZ1fv-kqzc/edit?usp=sharing

Please consult the official Angular upgrade documentation for the latest information.
https://angular.io/docs/ts/latest/guide/upgrade.html

## Phase 1

Evaluate your current angular 1 app and plan ahead.  This is just our starting point, basic Angular 1 application.

## Phase 2

Rule of One - only 1 view per component

## Phase 3 

Componentize our application - replace .directive and .controller with .component.

## Phase 4

Smart/Dumb components - follow the rules of stateful (smart) and stateless (dumb) components.  Create new dumb components liberally.

## Phase 5

Typescript - add typescript and start using it.

## Phase 6

Module Loader - use Webpack, SystemJS, or browserify so we can start using import statements.

## Phase 7

ng-metadata - use ng-metadata to take advantage of Angular 2-like decorators.

## Phase 8

ng-upgrade - bootstrap our application to run as a hybrid NG1/NG2 app.

## Phase 9

Start writing Angular 2 code.

## Phase 10

Remove Angular 1!
