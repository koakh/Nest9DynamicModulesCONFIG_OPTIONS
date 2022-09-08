Hello I'm fighting hard to create a dynamic module that I can share in my projects
and always fails on the `CONFIG_OPTIONS` is a provider problem

I use the bellow oficial example from nestjs samples
https://github.com/nestjs/nest/tree/master/sample/25-dynamic-modules
to **expose the problem** if I use the dynamic module `config.module.ts` in main `app.module.ts` everything works,
the big problem is when I try to use the `config.module.ts` on another module, ex `test.module.ts` it always fails, with bellow error
```
Error: Nest can't resolve dependencies of the ConfigService (?). Please make sure that the argument CONFIG_OPTIONS at index [0] is available in the TestModule context.

Potential solutions:
- If CONFIG_OPTIONS is a provider, is it part of the current TestModule?
- If CONFIG_OPTIONS is exported from a separate @Module, is that module imported within TestModule?
  @Module({
    imports: [ /* the Module containing CONFIG_OPTIONS */ ]
  })
```
only work on root app.modules.ts :)

has anyone knows how can I override this annoying error, I try many combinations, without success

I create a repository <https://github.com/koakh/Nest9DynamicModulesCONFIG_OPTIONS> to be more easy to see and replicate the error and hope some one helps me solve this mistery

thanks

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
