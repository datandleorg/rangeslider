## Range Slider

Custom Range slider 

```jsx
<RangeSlider
   min={0}
   max={100}
   step={1}
   value={value}
   onChange={(e) => {
     setValue(e.target.value);
   }}
 />
```

## Run & Build
```
 npm install
 npm run start
 npm run build
```
## Demo Link (Netlify)
[https://reverent-bartik-7bd35b.netlify.app/](https://reverent-bartik-7bd35b.netlify.app/)

## Dependency
     "react": "^16.13.1",
     "react-dom": "^16.13.1",
     "styled-components": "^5.1.0"
    
## Dev Dependencies
    "@babel/core": "^7.9.6",
    "@babel/preset-env": "^7.9.6",
    "@babel/preset-react": "^7.9.4",
    "babel-loader": "^8.1.0",
    "css-loader": "^3.5.3",
    "react-hot-loader": "^4.12.21",
    "style-loader": "^1.2.1",
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.11",
    "webpack-dev-server": "^3.10.3",
    "webpack-merge": "^4.2.2"
