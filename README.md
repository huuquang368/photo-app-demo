# Mini Project: Photo App

### 1. Setup ReactJS App via Create React App

> Link: https://create-react-app.dev/docs/getting-started/

### 2. Add SCSS support

npm i --save-dev node-sass

### 3. Add react router

npm i --save react-router-dom

### 4. Add UI lib

npm i --save reactstrap

## Folder Structure

src
|** assets
| |** images
| |** styles (global styles)
|
|** components (shared components)
|
|** features
|** Photo
|** components
| |** PhotoList
| |** PhotoCard
| |** PhotoForm
|
|** pages
| |** MainPage
| |** AddEditPage
|** photoSlice.js
|\_\_ index.js

## Routing

- lazy load components.
- Load by features.

## Custom Field

- props:
  - name
  - value
  - onChange
  - onBlur: touched

## Random Photo control

RandomPhoto render RandomPhotoField
Props

- name
- imageUrl
- onImageUrlChange
- onRandomButtonBlur

Formik, Yup

## Redux toolkit:

```js
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'
import store = configureStore({ reducer: rootReducer })
```
