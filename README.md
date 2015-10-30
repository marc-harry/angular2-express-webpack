# Angular2 Express Webpack Starter


### Quick start
> Clone/Download the repo then edit `app.ts` inside [`/src/app/app.ts`](/src/app/app.ts) or `server.ts` inside [`/server/server.ts`](/server/server.ts)

```bash
# clone our repo
git clone https://github.com/marc-harry/angular2-express-webpack.git 

# change directory to our repo
cd angular2-webpack

# install the repo with npm
npm install

# install the typescript typings with tsd
tsd install

# start the server
gulp # or npm start
```
go to [http://localhost:3000](http://localhost:3000) in your browser


## Other commands 

### build files
```bash
npm run build  # or webpack  # or gulp
```

### run tests 
```bash
npm run test  # or karma start
```

### run webdriver (for end-to-end)
```bash
npm run webdriver-start  # or webdriver-manager start
```

### run end-to-end tests
```bash
# make sure you have webdriver running and a sever for the client app
npm run e2e  # or protractor
```