# React Frontend for SalesLeader.AI

Bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) with a slightly modified structure for  simplicity. A simple express server was added to serve the bundle and offer a proxy api for interacting with multiple backends. Single command deployments with Elastic Beanstalk and Docker. Devvable with docker-compose.

### Installing

Yarn is preferred for package management. Run this to make sure you have the latest yarn
```
npm install -g yarn
```

```
git clone https://github.com/ScalableHuman/sales-leader-front.git  
cd sales-leader-front
yarn install
```


### Running in dev (hot reloading)
```
yarn start
```
Will install dependencies, start the proxy server on port 8080 and run the client on port 3000 with hot reloading. Same as `yarn dev`


### Building and serving
```
yarn build
yarn serve

(alternatively, to preview a prod build locally, just run)
yarn prod-preview
```
Will run on port 8080 from Express server

### Single step deployment
Deployment is done with Docker onto AWS Elastic Beanstalk. The awsconfig is not included in source control, but you can easily start your own by adding the aws cli and simply going through the prompts of `eb init` and `eb deploy`
