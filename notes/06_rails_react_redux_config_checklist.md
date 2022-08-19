# Project Setup Checklist
Here's a Rails/React/Redux setup checklist. It should only serve as a reminder. Ask a TA if you don't understand why you're configuring something on this list.

1. `rails new --database=postgresql --skip-turbolinks`

  * Add `--database=postgresql` if using Postgres.
  * Add `--skip-turbolinks` to skip the turbolinks gem.

2. Update your Gemfile.

  * better_errors
  * binding_of_caller
  * pry-rails
  * annotate
  * bcrypt
  * jquery-rails (When using rails 5.1+)

3. bundle install

4. **When using Rails 5.1+, update your `application.js` manifest to include:**

  * //= require jquery
  * //= require rails-ujs (if not already there)

5. Update your `.gitignore` to include: `node_modules/` `bundle.js` * `bundle.js.map`

6. git add .

  * Notice that the node_modules folder and bundle.js and bundle.js.map files are not staged. This is because you have ignored them by placing them in your .gitignore files

7. `git commit -m "<message>"`

8. go to git hub and follow instructions that are shown when you create a new repository

  * after following instructions you should notice that your master branch is now named main and that your project is now on github.

9. `npm init --yes` to create a package.json file with the default setup.

10. Create a frontend folder at the root of your project with an entry file inside of it.

11. npm install

  * webpack
  * webpack-cli
  * react
  * react-dom
  * react-router-dom
  * redux
  * react-redux
  * @babel/core
  * @babel/preset-react
  * @babel/preset-env
  * babel-loader

12. Create a webpack.config.js file.

  * The entry point should be in frontend, e.g. `entry: 'frontend/index.jsx'`.
  * The output path should be `'app/assets/javascripts'`.
  * Configure your `module.rules` to use Babel transpilation for:
    * JSX
    * ES6
  * Include `devtool: 'source-map'`.

13. git commit again (Verify that your .gitignore works).

  * git push your skeleton.