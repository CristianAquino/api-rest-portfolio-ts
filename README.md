# [api-rest-portfolio-ts](https://api-rest-portfolio-ts.onrender.com/docs "api-rest-portfolio-ts")

## steps to initialize the project

---

:heavy_check_mark: create the package.json file with `pnpm init`  
:heavy_check_mark: proceed to install the modules with `pnpm add express cors jsonwebtoken bcryptjs cookie-parser zod`  
:heavy_check_mark: proceed to install the typescript dependencies with `pnpm add typescript ts-node-dev @types/express @types/cors @types/jsonwebtoken @types/bcryptjs @types/cookie-parser -D`  
:heavy_check_mark: create the tsconfig with `npx tsc --init`  
:heavy_check_mark: proceed to activate some tsconfig fields  
&nbsp;&nbsp;&nbsp;&nbsp;replace `rootDir:""` with `rootDir:"./src"`  
&nbsp;&nbsp;&nbsp;&nbsp;replace `outDir:""` with `outDir:"./dist"`  
&nbsp;&nbsp;&nbsp;&nbsp;enable `noFallthroughCasesInSwitch:true` prevents us from leaving a switch without return or break  
:heavy_check_mark: configure ts-node-dev in the package.json, for which we add `"dev":"ts-node-dev --respawn src/index.ts"`  
:heavy_check_mark: proceed to install the modules with `pnpm add typeorm reflect-metadata`  
:heavy_check_mark: proceed to install the typescript dependencies with `pnpm add @types/node -D`
:heavy_check_mark: proceed to install the database driver `pnpm add pg sqlite3`, we will use sqlite3 to perform the tests  
:heavy_check_mark: proceed to enable new configurations in tsconfig as `"experimentalDecorators": true`, `"strictPropertyInitialization": false` and `"emitDecoratorMetadata": true`
:heavy_check_mark: proceed to install swagger `"pnpm add swagger-ui-express swagger-jsdoc"` and types `"pnpm add @types/swagger-ui-express @types/swagger-jsdoc -D"`
:heavy_check_mark: proceed to install test `"pnpm add jest supertest ts-jest @types/jest @types/supertest -D"`
:heavy_check_mark: proceed to configure jest for node, we can find this in the file `"jest.config.ts"`

[TypeORM](https://typeorm.io/ "TypeORM")
[Swagger](https://editor.swagger.io/ "Swagger")
[Swagger data-models](https://swagger.io/docs/specification/data-models/data-types/ "Swagger data-models")

readme created in: [Editor.md](https://pandao.github.io/editor.md/en.html "Editor.md")
