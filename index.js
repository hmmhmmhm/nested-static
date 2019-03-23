const fs = require("fs")

let nestedStatic = (staticPath, callback, subPath = '/') => {
	let files = fs.readdirSync(staticPath)

	for(let file of files){
		fs.stat(staticPath + '/' + file, (error, stats)=>{
			if(error || !stats.isDirectory()) {
				callback(subPath, staticPath, file)
				return
			}
			nestedStatic(staticPath + '/' + file, callback, subPath + file + '/')
		})
	}
}

module.exports = nestedStatic