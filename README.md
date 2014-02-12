Grunt---Web-Config-Transforms
=============================
Demonstration of how the grunt-targethtml package can be used to produce a web.config file suitable for deployment to different environments, sans config transforms or needing to rebuild a project.

The web.config file is provisioned for development, but will be transformed for either test, staging or live when grunt is executed.

To run the example:
- Checkout the project
- Install node and npm if not already installed
- Open a command line/bash/terminal window
- Navigate to the checked out code
- Run 'npm install -g grunt-cli' to install grunt-cli
- Run 'npm install' to install local dependencies
- Then type either:
  - 'grunt test' - for a test web.config
  - 'grunt staging' - for a staging web.config
  - 'grunt live' - for a live web.config
  
The transformed web.config will be available in the 'transformed' directory. The location of where the transformed web.config should be saved can be configured in Gruntfile.js

For more information on how to use grunt-targethtml, please visit https://github.com/changer/grunt-targethtml
