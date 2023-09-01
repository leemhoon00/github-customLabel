const fs = require("fs");
const yaml = require("js-yaml");
const githubLabelSync = require("github-label-sync");
require("dotenv").config();

const labelName = "simple-dev-label"; // labels 폴더에 있는 레이블 파일 중 사용할 레이블 명

const labelData = yaml.load(
  fs.readFileSync(String("./labels/" + labelName + ".yaml"), "utf8")
);

githubLabelSync({
  accessToken: process.env.GITHUB_TOKEN,
  repo: "leemhoon00/typevocab-server", // 레이블을 적용할 레포지토리 ex) user/repo
  labels: labelData,
}).then((diff) => {
  console.log(diff);
});
