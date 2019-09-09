const path = require('path');
const exec = require('child_process').exec;
const { WebhookServer } = require('simple-webhooks');

const SECRET = 'secret';
const REPO = path.join(__dirname, '..');
const BUILD_CMD = 'npm run build';

const webhookServer = new WebhookServer({
  secret: SECRET,
  job: (data) => buildGatsby(data)
});

function buildGatsby() {
  exec(
    `cd ${REPO} && ${BUILD_CMD}`,
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

webhookServer.listen();