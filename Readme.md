# Papperlapapp Coffee Prediction

This is the overly complex coffee price prediction module used the [papperlapapp-talk](https://enterjs.de/veranstaltung-82695-0-we-will-mock-you-mocking-in-frontend-tests-erklaert.html) at [enterjs](https://enterjs.de)

### Doing a new release
1. Bump version in package.json and `npm i`
2. Do a release
   1. Click on release
   2. Draft a release
   3. Click on `tags` and create a new tag, preferably matching the version you specified in the `package.json`
   4. The GitHub Action will then create a release and push it to Github Package Repository
      1. Have a look at the corresponding action run if in doubt.
   5. More details [here](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository) 