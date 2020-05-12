const fs = require('fs');
const path = require('path');

function createAsyncapiFile(generator) {
  const asyncapi = generator.originalAsyncAPI;
  let extension;
  
  try {
    JSON.parse(asyncapi);
    extension = 'json';
  } catch (e) {
    extension = 'yaml';
  }

  fs.writeFileSync(path.resolve(generator.targetDir, `asyncapi.${extension}`), asyncapi);
}

module.exports = {
  'generate:after': createAsyncapiFile
};