# FloodMonitoringApp

## About the app

This website was created as a submission for the jHub Coding Scheme which aims "to give serving personnel the opportunity to gain valuable coding and AI skills, whilst getting paid to do so, so that they might use these skills to enable an information advantage".

This particular challenge is to create a dynamic website that makes multiple calls to a Government API. It must also use a framework. I chose to use the Angular Framework after completing Maximilian Schwarzmüller's [Angular - The Complete Guide course](https://www.udemy.com/course/the-complete-guide-to-angular-2) on Udemy.

This website was created using:
- [Angular](https://angular.dev)
- [Tailwind](https://tailwindcss.com)
- [Flowbite](https://flowbite.com)

I have used the [Government Flood Warning API](https://environment.data.gov.uk/flood-monitoring/doc/reference) to fetch data about current flood warnings and to list all the areas included in the API.

The flood warning data is fetched and displayed in a form that can be sorted and filtered.

The areas can be displayed within a radius of a postcode. To convert the post codes to latitude and longitude, I used the [Postcode & Geolocation API for the UK API](https://api.postcodes.io).

More details about this website and technical details of I created it will be [posted on my blog](https://alan-henry.co.uk/blog) soon.

## Running and building the app

### Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

Run `npm build` to build the project. The build artifacts will be stored in the `dist/` directory.

<!-- ## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). -->

<!-- ## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities. -->
