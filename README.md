# Mosaic
* Environment: node v10.4.1, npm 6.1.0

## Scripts 
* Install dependencies `npm i` 
* Run test `npm test` 
* Start app `npm start`
* App should be available on localhost port 3000 

## Challanges
* Usage of FileReader and Canvas
* Problem with `react-scripts-ts test` script (automatically starting in watch mode and even the watch mode doesn't work correctly), so i used plain jest

## Gaps
* Drawing in canvas is not asynchronous 
* Base64 Image is stored into redux - this solution is slow if you want to store large images.

## ​Areas​ ​for​ ​improvement 
* Variable mosaic circle radius
* Variable imgur gallery
* Better error handling in Sagas than just console.error
* Loaders / spinners if something takes long
* Resizing images
* More tests
* Styles
