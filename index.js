const fs = require('fs')
const path = require('path')
const MongoClient = require('mongodb').MongoClient

// Configuration
const connectionString = ''
const fileToUploadPath = ''
const databaseName = ''
const bucketName = ''
const filePath = ''

// Initialization
const fileName = path.basename(filePath)
const chunkSizeBytes = 1048576

// Definition
const start = async () => {
  const client = await MongoClient.connect(connectionString)
  const database = client.db(databaseName)
  const bucket = new mongodb.GridFSBucket(database, { bucketName });

  fs.createReadStream(fileToUploadPath).
    pipe(bucket.openUploadStream(fileName, {
      chunkSizeBytes
    }))
}

// Execution
start()
