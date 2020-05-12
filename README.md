# Generator Hooks

This is a library with [generator](https://github.com/asyncapi/generator/) hooks that are used in more than one template. Use these hooks to not double your work. Read Generator documentation to understand how to configure your template to use external hooks.

This library consists of the following hooks:
|Hook name|Hook type|Description|
|---|---|---|
| `createAsyncapiFile` | `generate:after` | It creates AsyncAPI file with content of the spec file passed to the generator. |