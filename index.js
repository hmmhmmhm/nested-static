const fs = require("fs")
const path = require("path")

const nestedStatic = (staticPath, subPath = '/') => {
	let files = fs.readdirSync(staticPath)
	let folders = [{subPath,staticPath}]

	for(let file of files){
		let stats = fs.statSync(staticPath + '/' + file)
		if(! stats.isDirectory()) continue
		let collectedDatas = nestedStatic(staticPath + '/' + file, subPath + file + '/')

		for(let collectedData of collectedDatas)
			folders.push(collectedData)
	}

	return folders
}

module.exports = (preStaticPath, callback) => {
	let staticPath = path.resolve(preStaticPath)
	let folders = nestedStatic(staticPath)
	callback(folders)
}