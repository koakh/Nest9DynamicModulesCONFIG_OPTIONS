```shell
$ git chekout https://github.com/koakh/Nest9DynamicModulesCONFIG_OPTIONS.git
$ cd Nest9DynamicModulesCONFIG_OPTIONS
$ npm i
$ npm run start:debug

[Nest] 6029  - 09/08/2022, 12:51:48 AM     LOG [NestFactory] Starting Nest application...
[Nest] 6029  - 09/08/2022, 12:51:48 AM     LOG [InstanceLoader] ConfigModule dependencies initialized +22ms
[Nest] 6029  - 09/08/2022, 12:51:48 AM   ERROR [ExceptionHandler] Nest can't resolve dependencies of the ConfigService (?). Please make sure that the argument CONFIG_OPTIONS at index [0] is available in the TestModule context.

Potential solutions:
- If CONFIG_OPTIONS is a provider, is it part of the current TestModule?
- If CONFIG_OPTIONS is exported from a separate @Module, is that module imported within TestModule?
  @Module({
    imports: [ /* the Module containing CONFIG_OPTIONS */ ]
  })

Error: Nest can't resolve dependencies of the ConfigService (?). Please make sure that the argument CONFIG_OPTIONS at index [0] is available in the TestModule context.

Potential solutions:
- If CONFIG_OPTIONS is a provider, is it part of the current TestModule?
- If CONFIG_OPTIONS is exported from a separate @Module, is that module imported within TestModule?
  @Module({
    imports: [ /* the Module containing CONFIG_OPTIONS */ ]
  })

    at Injector.lookupComponentInParentModules (/mnt/storage/Development/@SurrealDB/Nest9DynamicModulesCONFIG_OPTIONS/node_modules/@nestjs/core/injector/injector.js:241:19)
    at Injector.resolveComponentInstance (/mnt/storage/Development/@SurrealDB/Nest9DynamicModulesCONFIG_OPTIONS/node_modules/@nestjs/core/injector/injector.js:194:33)
    at resolveParam (/mnt/storage/Development/@SurrealDB/Nest9DynamicModulesCONFIG_OPTIONS/node_modules/@nestjs/core/injector/injector.js:116:38)
    at async Promise.all (index 0)
    at Injector.resolveConstructorParams (/mnt/storage/Development/@SurrealDB/Nest9DynamicModulesCONFIG_OPTIONS/node_modules/@nestjs/core/injector/injector.js:131:27)
    at Injector.loadInstance (/mnt/storage/Development/@SurrealDB/Nest9DynamicModulesCONFIG_OPTIONS/node_modules/@nestjs/core/injector/injector.js:57:13)
    at Injector.loadProvider (/mnt/storage/Development/@SurrealDB/Nest9DynamicModulesCONFIG_OPTIONS/node_modules/@nestjs/core/injector/injector.js:84:9)
    at async Promise.all (index 4)
    at InstanceLoader.createInstancesOfProviders (/mnt/storage/Development/@SurrealDB/Nest9DynamicModulesCONFIG_OPTIONS/node_modules/@nestjs/core/injector/instance-loader.js:44:9)
    at /mnt/storage/Development/@SurrealDB/Nest9DynamicModulesCONFIG_OPTIONS/node_modules/@nestjs/core/injector/instance-loader.js:29:13
```
