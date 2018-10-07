# Photobox Full Stack JS test

This test is designed for potential full stack developers to demonstrate their coding skills. It's intended to be done in less than 90 minutes, but don't hold back in showing your skills. We're mainly interested in seeing how you approach this problem and how far you'll get.

The test does not have any intentional bugs. So if you do find any, you can relay them back to us. Start by creating a fork, add your changes and send us a link back to your work.

## Deliverable

Your task is to create part of a listing page for the products that you receive from an API. The data for the listing page can be accessed via `/api/products` (see. /api folder). Tip: Where are the decimal indicators for the prices! :)

Please return at minimum a component and a test using `jest`. Feel free to import any modules that you feel you require or make any changes you deem necesary.

This is what a single product card should look like:

![listing page product card example](/src/images/design.png)

Behaviour of product cards at differen't breakpoints:
- Mobile (320px > screen < 480px): one product card per row
- Tablet (480px > screen < 768px): two product cards per row
- Desktop (768 px > screen < inf): three product cards per row

The product cards should be contained within 1024px and be aligned in the centre.

If the user types in any other URL, it should return a basic 404 page. Keep it stateless, if possible. If you want to impress, change express to koa and use redux.

## Main commands
``` bash
# Install the dependencies
yarn install

# Run website in dev (hot reload) mode ( http://localhost:3000 )
yarn dev

# Run the unit tests
yarn test
```

## Other useful commands
``` bash
# Create a development build
yarn build:dev

# Create a production build
yarn build:prod

# Serve content from build folder
yarn serve
```

## Solution

- I replaced _babel-preset-es2015_ with the more recent and recommended _babel-preset-env_ library to be able to use modern JS features (_.babelrc_ was updated accordingly)
- I upgraded _react-router_ to v4 and changed the related rendering code on the server as I was more familiar with that version
- I added _redux_ for state management using _sagas_
- I replaced _express_ with _koa_ even though I've never used it before as I like the challenge :)
- Implemented a _ProductCard_ component which represents a single product
- Adjusted the styles of the _HomePage_ to fulfill the criterias for responsiveness by adding media queries
- Implemented a _NotFoundPage_ which is being rendered a non matching route
- Changed the implemented API to return the list of products as a JSON
- Implemented some unit tests for the client application
- Consolidated the dependencies as some of them were not even used

## Future improvements

- [] Restructure backend code to have a clear seperation between routes and controllers
- [] Increase test coverage (add unit tests for the backend, implement tests for sagas and client API)
- [] Enhance styling