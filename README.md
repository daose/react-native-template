# React Native Template

The app covers:

- Global state management with [`redux`](http://redux.js.org/)
- Async requests with fetch and [`redux-saga`](https://github.com/redux-saga/redux-saga)
- Form validation with [`redux-form`](https://github.com/erikras/redux-form)
- Navigation with [`react-navigation`](https://github.com/react-community/react-navigation)

## Installation

1. Install [yarn](https://yarnpkg.com/en/)
2. Run `yarn install`
3. Run `react-native run-android` (or `ios`)
  - If it doesn't work make sure the JS server is running first with `yarn start`

For `Maps` demo on android, you'll need to provide your own [Google API key](https://code.google.com/apis/console/).
In `./android/app/apikeys.properties`, fill in your own API key. (remember to rerun `react-native run-android` afterwards!)
