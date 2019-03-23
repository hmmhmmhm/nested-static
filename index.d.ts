declare module 'nested-static' {
    interface IFolderType {
        subPath: string,
        staticPath: string
    }
    type CallbackType = (folders: IFolderType[]) => void
    type NestedStaticType = (staticPath: string, callback: CallbackType) => void

    /**
     * @example
     * nestedStatic(`${__dirname}/../static`, (folders)=>{
     *     for(let {staticPath, subPath} of folders){
     *         console.log (`Folder Registered ${staticPath} to ${subPath}`)
     *         app.use(subPath, express.static(staticPath))
     *     }
     * })
     */
    const nestedStatic: NestedStaticType
    export = nestedStatic
}