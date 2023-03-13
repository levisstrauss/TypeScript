--------------- TypeScript in Action -------------->

      - Install Node
      - npm i -g typescript ->To install typescript
      - tsc -v -> to get the version of typescript install
      - tsc to compile the code
      - tsc --init -> To create a configuration file
      - Module in configuration file:
           "rootDir": "./src/fundamentals", typescript file dir
      - Emit in configuration file:
           "outDir": "./dist", Javascript file Dir
      - "removeComments": true,  To remove all the comments in JS file
      - "noEmitOnError": true, Not generate any file if error
      - "sourceMap": true,   To debug the typescript code
      - "noImplicitReturns": true, to check all the return type
      - "noUnusedParameters": true,  If we forgot to use a params
      -  "noUnusedLocals": true,  If we forgot to use a local variable

      - Run the javaScript code using node: node index.js
          
--------- Built-in types ------------->

      - any, unknown, never, enum, tuple
      - The explicit type checking can be turn off:
          "noImplicitAny": true; but be carefull 
     
