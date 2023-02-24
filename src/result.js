const {myFileWriter,myFileUpdater,myFileReader,myFileDeleter} = require('./index.js')
myFileWriter('input.txt','Hello World')
myFileUpdater('input.txt','Hello Welcome to Nodejs')
myFileReader('input.txt')
myFileDeleter('input.txt')

