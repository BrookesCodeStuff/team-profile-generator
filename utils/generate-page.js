const fs = require('fs');

const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/team.html', fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'Team page created in: /dist/team.html',
      });
    });
  });
};

const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile('./src/css/style.css', './dist/style.css', (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'Style sheet copied!',
      });
    });
  });
};

module.exports = { writeFile, copyFile };
