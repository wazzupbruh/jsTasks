/**
 * 1. You need to write a parser, which takes the "./test.json" file
 * and will create a new JSON file with the name "./parsed.json" with the structure:
 * [
 *  {
 *    "docId": "http://doc.epam.com/077b1523-56f0-492a-b954-1269e3acc191"
 *  },
 *  {
 *    "docId": "http://doc.epam.com/077d3a4c-a2fe-4ab9-9046-89c0ce5c5b38"
 *  }
 *  .....
 * ]
 * where 077b1523-56f0-492a-b954-1269e3acc191 - is the value of the name attribute from the "./test.json" file
 * Please NOTE, that you should omit the ".html" extension
 *
 * Use the callback version of FS module.
 * DOCS:
 * 		Callback example: https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_callback_example
 * 		fs.readFile: https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_readfile_path_options_callback
 * 		fs.writeFile: https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback
 *
 * 2. Check yourself by running "npm run test:nodejs"
 *
 * Hint. Use the "done" callback function to synchronize operations.
 */
const fs = require("fs");

const jsonParser = (done) => {
  const data = JSON.parse(fs.readFileSync('tasks/nodeJs/parser/test.json'));
  const mappedNames = data.list.entries.map(el => el.entry.name = el.entry.name.split('.html').join(''));
  console.log(mappedNames);
  for(let i = 0; i < mappedNames.length; i++){
    data.list.entries[0].entry.name = mappedNames[i];
  }
    // -> перезапис початкового файлу із відформатованими проперті
  fs.writeFile('tasks/nodeJs/parser/test.json', JSON.stringify(data), (err) => {
    if (err) console.log(err);
  });
    // -> форматування даних для відповідності вимогам
  let d = [];
  for(let i = 0; i < mappedNames.length; i++){
    d.push({ "docId": `http://doc.epam.com/${mappedNames[i]}` });
  }
  // -> створення нового файлу в необхідному форматі
  fs.writeFile('tasks/nodeJs/parser/parsed.json', d, (err) => {
    if (err) console.log(err);
  });
  done();
};

module.exports = {
  jsonParser,
};
