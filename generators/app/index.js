// File: generators/app/index.js

const Generator = require('yeoman-generator');

module.exports = class extends Generator {

  writing() {

    // Copy template files
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('index.html')  
    );

    this.fs.copyTpl(
      this.templatePath('src/main.js'),
      this.destinationPath('src/main.js'),
    );

    // Additional logic to add dependencies, 
    // customize templates etc

  }

  install() {
    
    this.npmInstall(); //auto install dependencies

  }

  end() {
    this.log('Project boilerplate created!')
  }
};