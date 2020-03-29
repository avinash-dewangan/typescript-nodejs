#how to setup typescript :

step1 install nodejs with https://nodejs.org/en/

step2 check version with command
    node -version
    npm -version
step3 create project folder and open this folder vs code.

step4 create package.json file with type below command
    $ npm init

step4 install type script with this command
    npm install -D typescript

step5 create tsconfig.json file with this command
    npx tsc --init

step6 compile ts to js file run with 
    tsc

step7 check the package.json file and tsconfig.json file for configuration


step8 install DevDependencies for automatically compile ts file to js file
    $ npm install -D ts-node  
    $ npm install -D ts-node-dev
    $ npm install -D nodemon : watching file when changes any file restart server

step9 use CLI command for run dev, production
    $ npm run dev   :  for running only devloper not created js file
    $ npm run build :  for running only production server and created js file in dist folder

step10 star server with below command
    npm start

step11 please manually configure file in "package.json" file
    {
    "name": "typescript-nodejs",
    "version": "1.0.0",
    "description": "",
    "main": "/scr/app.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node dist/app.js",
        "dev": "nodemon src/app.ts",
        "build": "tsc -p ."

    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
        "ts-node": "^8.8.1",
        "ts-node-dev": "^1.0.0-pre.44",
        "typescript": "^3.8.3",
        "nodemon": "^2.0.2"
    },
    "dependencies": {
        
    }
    }
step12 please manually configure file in "tsconfig.json" file
    {
    "compilerOptions": {
        /* Basic Options */
        // "incremental": true,                   /* Enable incremental compilation */
        "target": "es5",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
        "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
        // "lib": [],                             /* Specify library files to be included in the compilation. */
        // "allowJs": true,                       /* Allow javascript files to be compiled. */
        // "checkJs": true,                       /* Report errors in .js files. */
        // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
        // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
        // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
        // "sourceMap": true,                     /* Generates corresponding '.map' file. */
        // "outFile": "./",                       /* Concatenate and emit output to single file. */
        "outDir": "./dist",                        /* Redirect output structure to the directory. */
        "rootDir": "./src",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
        // "composite": true,                     /* Enable project compilation */
        // "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information */
        // "removeComments": true,                /* Do not emit comments to output. */
        // "noEmit": true,                        /* Do not emit outputs. */
        // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
        // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
        // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

        /* Strict Type-Checking Options */
        "strict": true,                           /* Enable all strict type-checking options. */
        // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
        // "strictNullChecks": true,              /* Enable strict null checks. */
        // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
        // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
        // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
        // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
        // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */

        /* Additional Checks */
        // "noUnusedLocals": true,                /* Report errors on unused locals. */
        // "noUnusedParameters": true,            /* Report errors on unused parameters. */
        // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
        // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */

        /* Module Resolution Options */
        "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
        // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
        // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
        // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
        // "typeRoots": [],                       /* List of folders to include type definitions from. */
        // "types": [],                           /* Type declaration files to be included in compilation. */
        // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
        "esModuleInterop": true,                  /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
        // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */
        // "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules. */

        /* Source Map Options */
        // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */
        // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */
        // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
        // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

        /* Experimental Options */
        // "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
        // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */

        /* Advanced Options */
        "forceConsistentCasingInFileNames": true  /* Disallow inconsistently-cased references to the same file. */
    }
    }









