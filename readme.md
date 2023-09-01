# 내가 쓰려고 만든 Github Label 템플릿

Issue & Pull Request에 사용할 레이블을 정의합니다.

## 사용법

해당 레포지토리를 클론합니다.

```bash
git clone https://github.com/leemhoon00/github-customLabel.git
```

<br>
의존성 패키지를 설치합니다.

```bash
cd github-customLabel
npm install
```

<br>

루트 폴더에 `.env` 파일을 생성하고, `GITHUB_TOKEN`을 입력합니다.

```
GITHUB_TOKEN=YOUR_GITHUB_TOKEN  # 깃허브 액세스 토큰
```

<br>

labels 폴더에 있는 파일 중 사용할 템플릿을 선택해 index.js에 입력합니다.

```javscript
const labelName = "simple-dev-label";
```

<br>
레이블을 적용할 레포지토리를 index.js에 입력합니다.

```javscript
repo: "username/repo-name"
```

프로그램을 실행시키고 깃허브 레포지토리의 레이블을 확인합니다.

```bash
npm start
```

<br>

## 레이블 템플릿

`simple-dev-label`

![simple-dev-label](sample-images/sample-dev.png)

## Contributing

저보다 잘 꾸미시는 분 하나 만들어서 PR 날려주세요..