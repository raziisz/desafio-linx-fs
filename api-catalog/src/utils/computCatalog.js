const { createReadStream } = require('fs');
const { resolve, join } = require('path');
const { createInterface } = require('readline');

class ComputCatalog {
  constructor() {}

  compCatalogJson() {

    const fileDir = resolve(__dirname, "dataset");
    const filePath = join(fileDir, "catalog.json");

    const readable = createReadStream(filePath);
    const rl = createInterface({
      input: readable
    });

    rl.on('line', line => {
      const data = JSON.parse(line);

      //save data
    });

  }
}