# nested-static
🗂️ Helps register nested folders to the express module.

> THIS MODULE SUPPORT **<u>TYPESCRIPT(.d.ts)</u>**

When using Express module, if you register a folder as a function such as us, Can experience it, the folder in that folder does not automatically register a url. nested-static helps you register nested folders in these situations.

## Installation

```bash
npm install nested-static --save
```

## Example

```js
const nestedStatic = require("nested-static")

nestedStatic(`${__dirname}/../static`, (folders)=>{
    for(let {staticPath, subPath} of folders){
        console.log (`Folder Registered ${staticPath} to ${subPath}`)
        app.use(subPath, express.static(staticPath))
    }
})
```

## License

MIT Licensed. (Copyleft)