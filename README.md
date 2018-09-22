# SmartStack

## SmartStack is a client dapp built in react app (CRA) that consumes the SmartStackAPI

## Links
https://www.youtube.com/watch?v=NO2DaxhoWHk

https://github.com/Remchi/bookworm-react


//------------------------------------------------------------------------------------------------------------------------------------
## Steps
==> rails new vitalix --api -d mysql -T --no-rdoc --no-ri

//------------------------------------------------------------------------------------------------------------------------------------
==> rails generate model Project title:string desc:string

//------------------------------------------------------------------------------------------------------------------------------------


## In the top-level vitalix folder
==> create-react-app vitalix

//------------------------------------------------------------------------------------------------------------------------------------

==> rails g controller Projects

//------------------------------------------------------------------------------------------------------------------------------------

==> rails s -p 3001



curl -G http://localhost:3001/api/v1/projects

//------------------------------------------------------------------------------------------------------------------------------------

==> npm install webpack -g

==> npm install -g webpack-cli

==> cd vitalix && npm install webpack --save-dev


//------------------------------------------------------------------------------------------------------------------------------------

==> npm install webpack-dev-server --save-dev
//------------------------------------------------------------------------------------------------------------------------------------
https://thinkster.io/tutorials/build-a-real-world-react-redux-application

//------------------------------------------------------------------------------------------------------------------------------------
## Dev
Inside that directory, you can run several commands:

  yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd smartstack
  yarn start

//------------------------------------------------------------------------------------------------------------------------------------

## Prod

==> yarn build


//------------------------------------------------------------------------------------------------------------------------------------
## Steps
==> create-react-app smartstack

==> yarn add react-router

==> yarn add react-router-dom

==> yarn add semantic-ui-react semantic-ui-css


Add material-ui
https://github.com/mui-org/material-ui

==> yarn add @material-ui/core

//------------------------------------------------------------------------------------------------------------------------------------


# Update node to latest on mac

  ==> node -v
v9.7.1

==> brew update

==> brew upgrade node

==> node -v
v10.9.0

//------------------------------------------------------------------------------------------------------------------------------------

==> yarn add --dev eslint prettier eslint-config-airbnb@^15.0.1 eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-import eslint-plugin-jsx-a11y@^5.1.1

==> npm i eslint-plugin-prettier@latest --save-dev

yarn add eslint-loader --dev

==> npm install --save-dev eslint-config-prettier

==> npm install --save eslint-config-airbnb

//------------------------------------------------------------------------------------------------------------------------------------