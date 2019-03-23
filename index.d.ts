declare module 'nested-static' {
    type CallbackType = (subPath: string, staticPath: string) => void
    type NestedStaticType = (staticPath: string, callback: CallbackType) => void

    /**
     * @example
     * nestedStatic("./static", (subPath, staticPath)=>{
     *     // logger.log (`Folder Registered ${staticPath} to ${subPath}`)
     *     app.use(subPath, express.static(staticPath))
     * })
     */
    const nestedStatic: NestedStaticType
    export = nestedStatic
}