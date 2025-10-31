# Angular Gym Studio Project

## Description
A management system for a gymnastics studio, built with Angular.  
The system enables lesson management, participant registrations, and secure login with role-based access.

## Users
- **Admin**: Can add new lessons and manage lesson details  
- **Teacher**: Can view lessons and manage participant registrations  

## Main Features
- Login screen with role-based redirection (Admin or Teacher)
- Lesson list displaying:
  - Lesson name
  - Instructor
  - Price
  - Date
  - Time  
- Registration form per lesson with input validation  
- Ability to view and delete participant registrations  

## Technologies Used
- Angular  
- Angular Material  
- ag-grid  
- Reactive Forms  
- Routing  

## Bonus Features Implemented
- User route protection using Angular Guards  
- Highlighting rows of unpaid participants in the registration table  
- Custom directive to highlight empty fields on login

---

# Development & Setup

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.0.

## Development Server

Run the following to start the development server:

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The app will reload automatically upon code changes.

## Code Generation

Generate new components, directives, or pipes using:

```bash
ng generate component component-name
```

For all available schematics:

```bash
ng generate --help
```

## Building the Project

To compile the project:

```bash
ng build
```

Build artifacts will be stored in the `dist/` folder. Production builds are optimized.

## Running Tests

Unit tests with [Karma](https://karma-runner.github.io):

```bash
ng test
```

## End-to-End Tests

To run e2e tests:

```bash
ng e2e
```

Note: You'll need to configure your preferred e2e framework.

## Additional Resources

Visit the [Angular CLI Documentation](https://angular.dev/tools/cli) for more details.
