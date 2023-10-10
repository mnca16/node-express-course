Global variables: 

- Anywhere in your aplication you can access them.
- You can console them and get specific info about your code and locations. 


Some of the most important global variables:
- __dirname: Path to current directory.
- __filename: File name.
- require: Function to use modules (CommonJS).
- module: Info about current module (file).
- process: Info about env where the program is being executed.

Modules:
- Encapsulated code.
- Every file in node is a module.
- You can share part of your program
- In order to export a code, you need to use the global variable module with the object exports.
- In order to acces to the code you want to share you us the global variable require inside the file you need the code. 

Built-in Modules
- OS: Info about current oparating system
- PATH: Path of your program 
- FS: Async and sync functions
- HTTP: Server <3_<3 the coolest one!!! 

General notes:
- We have access to setIntervan and setTimeout methods 
- Built in os modules -> https://nodejs.org/api/os.html

