const path = require("path");
const exec = require("child_process").exec;
const { WebhookServer } = require("simple-webhooks");

const SECRET = process.env.WEBHOOK_SECRET || "bad-secret-remove-immediately!";
const REPO_PATH = path.join(__dirname, "..");
const BUILD_CMD = "npm run build";

const webhookServer = new WebhookServer({
  secret: SECRET,
  job: data => buildGatsby(data),
});

function buildGatsby() {
  return new Promise((resolve, reject) => {
    console.log("STARTING BUILD");
    exec(
      BUILD_CMD,
      {
        cwd: REPO_PATH,
      },
      (error, stdout, stderr) => {
        console.log(stdout);
        console.error(stderr);
        console.log("FINISHED BUILD");
        resolve();
      }
    );
  });
}

webhookServer.listen();
