Grunt---Web-Config-Transforms
=============================
Demonstration of how the grunt-target html package can be used to produce a web.config file suitable for deployment to different environments, sans config transforms or needing to rebuild a project.

To run the example:
- Checkout the project
- Install node and npm if not already installed
- Open a command line/bash/terminal window
- Navigate to the checked out code
- Run 'npm install -g grunt-cli' to install grunt cli
- Run 'npm install' to install local dependencies
- The type:
  - 'grunt test' - for a web.config ready for test
  - 'grunt staging' - for a web.config ready for staging
  - 'grunt live' - for a web.config ready for live
  
The transformed web.config file will be available in the 'transformed' directory. The location of where the transformed web.config should be saved can be configured in Gruntfile.js

For more information on how to use grunt-targethtml, please visit https://github.com/changer/grunt-targethtml
