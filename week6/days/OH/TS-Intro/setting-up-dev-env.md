# Step 1: (only do this one time on your machine)
``` 
npm install -g typescript
```
# Step 2: (check the version of TypeScript and that it is installed)
```
tsc -v 
```
# Step 3: (create a new directory for your project)
```
mkdir my-ts-project
cd my-ts-project
```
# Step 4: (create an index.ts file)
```
touch index.ts
```
# Step 5: (open the index.ts file in your text editor)

# Step 6: (compile the TypeScript file)
```
tsc index.ts
```
# Step 7: (run the compiled JavaScript file)
```
node index.js
```
# Step 8: (configure typescript compiler)
```
tsc --init
```
# Step 9: (configure tsconfig.json file)
comment out the following lines:
```
"outDir": "./src",
"rootDir": "./dist",
"noEmitOnError": true,
```
# Step 10: 
- Going forward just run `tsc` to compile your TypeScript files




# Notes 
- TypeScript is a superset of JavaScript that adds static types to the language
- TypeScript code is compiled to JavaScript code before it is executed
- TypeScript files have a .ts extension
- TypeScript code can be compiled using the TypeScript compiler (tsc)
- Helpful video I recommend: https://www.youtube.com/watch?v=d56mG7DezGs