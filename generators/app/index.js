'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the glorious ${chalk.red('generator-hipsterstack')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'slug',
        message: 'Your project slug'
      },
      {
        type: 'input',
        name: 'title',
        message: 'Your project title'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Your project description'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(this.templatePath(), this.destinationRoot(), this.props, undefined, {
      globOptions: {
        dot: true,
        ignore: ['.DS_STORE', '.cache', '.vscode', '.git', 'node_modules', 'dist']
      }
    });
  }

  install() {
    this.installDependencies();
  }
};
