const fs = require("fs");
const yaml = require("js-yaml");
const githubLabelSync = require("github-label-sync");
require("dotenv").config();

const labelName = "simple"; // labels 폴더에 있는 레이블 파일 중 사용할 레이블 명
const repoName = "leemhoon00/typevocab-server"; // 레이블을 적용할 레포지토리 ex) user/repo

const labelData = yaml.load(
  fs.readFileSync(String("./labels/" + labelName + ".yaml"), "utf8")
);

githubLabelSync({
  accessToken: process.env.GITHUB_TOKEN,
  repo: repoName,
  labels: labelData,
}).then((diff) => {
  console.log(diff);
});
