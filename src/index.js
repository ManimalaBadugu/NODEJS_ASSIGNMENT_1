const fs = require('fs/promises')


const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
    fs.writeFile(fileName, fileContent, (err) =>{
        if(err){
            console.log(err)
        }
        console.log("write success")
        }
    )
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	const data=await fs.readFile(fileName,{encoding:'utf-8'},(err,data)=>{
		if(err){
			console.log(err)
		}
	})
	return data
}

const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
    fs.appendFile(fileName,fileContent, (err) =>{
        if(err){
            console.log(err)
        }
        console.log("appended successfully")
    })
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
    fs.unlink(fileName, (err) =>{
        if(err){
            console.log(err)
        }
        console.log("Deleted Successfully")
    })
}


module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }