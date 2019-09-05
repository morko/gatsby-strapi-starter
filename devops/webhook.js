/**
 * This is a simple Webhook module that should work with e.g. GitHub.
 * 
 * To use this with a custom client requester should sign the `request.body`
 * with a similar algroithm as the `sign` function does in this module.
 * Naturally the `SECRET` should match between server and client.
 * 
 * TODO:
 *   - Implement greater control based on the Payload.
 *     - See https://developer.github.com/webhooks/#payloads for GitHub payload.
 */
const http = require('http');
const path = require('path');
const crypto = require('crypto');
const exec = require('child_process').exec;

const SECRET = 'secret';
const PORT = 8738;
const REPO = path.join(__dirname, '..');
const BUILD_CMD = 'npm run build';

function sign(data) {
  return 'sha1=' +
    crypto
      .createHmac('sha1', SECRET)
      .update(data.toString())
      .digest('hex');
}

function rebuildRepository() {
  exec(
    `cd ${REPO} && git pull && ${BUILD_CMD}`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    }
  );
}

const server = http.createServer(function(req, res) {

  req.on('data', function(chunk) {
    let signature = sign(chunk);

    // check that the signatures match
    if (crypto.timingSafeEqual(req.headers['x-hub-signature'], signature)) {
      rebuildRepository();
    }
  });

  res.end();
});

console.info(`Starting Webhook on port ${PORT}.`);
server.listen(PORT);
