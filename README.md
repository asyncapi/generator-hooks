# Generator Hooks

This is a library with [generator](https://github.com/asyncapi/generator/) hooks that are used in more than one template. Use these hooks to not double your work. Read Generator documentation to understand how to configure your template to use external hooks.

This library consists of the following hooks:
|Hook name|Hook type|Description|
|---|---|---|
| `createAsyncapiFile` | `generate:after` | It creates AsyncAPI file with content of the spec file passed to the generator. By default it created the file in the root of the generation output directory. This hook also supports custom parameters that user can pass to template generation. Parameter called `asyncapiFileDir` allows user to specify the location where spec file should be created. To make your template users use this parameter, you need to add it to the configuration of your template like other parameters |



## Using Hooks library in custom template

1. Add `@asyncapi/generator-hooks` to `dependencies` of your template
    ```bash
    npm install @asyncapi/generator-hooks --save 
    ```
2. Configure your template what hooks you want to use in the template configuration file:
    ```json
    {
        "hooks": {
            "@asyncapi/generator-hooks": "createAsyncapiFile"
        }
    }
    ```
3. (Optional) In case the hook that you want to use supports parameters, specify in the configuration what parameters users can specify:
    ```json
    {
        "parameters": {
            "asyncapiFileDir": {
                "description": "Custom location of the AsyncAPI file that you provided as an input in generation. By default it is located in the root of the output directory"
                "required": false
            }
        },
        "hooks": {
            "@asyncapi/generator-hooks": "createAsyncapiFile"
        }
    }
    ```




