const fs = require("fs");
const yaml = require("js-yaml");
const githubLabelSync = require("github-label-sync");

require("dotenv").config();

const labelData = yaml.load(
  fs.readFileSync("./lables/simple-dev-label.yaml", "utf8")
);

githubLabelSync({
  accessToken: process.env.GITHUB_TOKEN,
  repo: "leemhoon00/typevocab-server",
  labels: labelData,
}).then((diff) => {
  console.log(diff);
});
