## 🚚 길거리음식 위치 공유 커뮤니티 웹사이트, `Go!Street` 

🤔 매번 달라지는 길거리음식 위치를 찾느라 불편함을 겪으셨나요? <br/>
🌭 Go!Street에서 자유롭게 길거리음식 위치를 공유해보세요!


📆 개발 기간: 2022.10.25 ~ 2022.11.03 약 1주 진행 (이후 틈틈이 리팩토링 진행-ing) <br/>
👀 [Client] JavaScript → TypeScript로 마이그레이션 진행 <br/>
👀 [Deploy] Heroku 유료 전환으로 인해 Heroku → fly.io로 배포 마이그레이션 진행

<br/>

## 💫 Demo

| **회원가입** | **로그인** |
|:-:|:-:|
| ![street signup](https://user-images.githubusercontent.com/64299610/206670033-e207ccb1-2c9f-46b0-aa86-1197dd828ea5.gif) | ![street login](https://user-images.githubusercontent.com/64299610/206670088-e6640152-8426-4b84-9696-929873f2ddb7.gif) |
| **게시글 업로드** | **게시글 수정 & 삭제** |
| ![street upload](https://user-images.githubusercontent.com/64299610/206670214-bf8c2c8d-d380-48fb-a62a-ee7a65b02ebe.gif) | ![street edit](https://user-images.githubusercontent.com/64299610/206670257-67399413-7d0c-4215-ab86-7d0977ee4394.gif) |
| **댓글 등록 및 수정, 삭제** | **게시글 정렬(최신순, 인기순) & 글 더 불러오기** |
| ![street reple](https://user-images.githubusercontent.com/64299610/206670292-5afa0ebf-03b5-4cfa-85ce-2c42cbecaca6.gif) | ![street sort](https://user-images.githubusercontent.com/64299610/206670374-bfed54c0-8ee0-4a7c-b49e-c59020a7abe8.gif) |
| **프로필 사진 변경** |  **게시글 검색** |
| ![street profile](https://user-images.githubusercontent.com/64299610/206670422-736fb5d3-9a56-4aac-875b-de0dc1f0d196.gif) | ![street search](https://user-images.githubusercontent.com/64299610/206670472-158bad82-4649-44d1-876a-27888aa8c5e3.gif)  |


<br/>

## 🛠 Tech Stack
### Front-end

| TypeScript | React | Redux-Toolkit | Emotion | Axios |
| :--------: | :---: | :-----------: | :-----: | :---: |
| <img src="https://user-images.githubusercontent.com/52682603/138834262-a7af2293-e398-416d-8dd3-ff5fab8cb80d.png" width="70"> | <img src="https://cdn.discordapp.com/attachments/981829325018001499/1025803392729219143/React-icon.svg.png" alt="img" width="70" /> | <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567749614/noticon/zgdaxpaif5ojeduonygb.png" width="70"> | <img src="https://user-images.githubusercontent.com/64299610/206627396-d5c28891-4818-4fc4-b0ff-509c05de9b77.png" width="70" /> | <img src="https://user-images.githubusercontent.com/64299610/206627749-78aa9392-cbba-4c77-9370-cf147d46ae6f.svg" alt="axios" width="100" /> |

<br/>

### Back-end

| Node.js | Express | MongoDB | Mongoose | Firebase Authentication |
| :-----: | :-----: | :-----: | :------: | :---------------------: |
| <img src="https://user-images.githubusercontent.com/64299610/206628162-0b21fee7-954f-428e-bd57-9786b454681d.svg" width="80"> | <img src="https://user-images.githubusercontent.com/64299610/206628742-cf7472a7-18d9-43c4-8433-7a63afe7de4c.png" width="100"/> | <img src="https://user-images.githubusercontent.com/64299610/206629428-2fe256c4-27b1-44c2-a7ac-bcea53805934.svg" width="100"> | <img src="https://user-images.githubusercontent.com/64299610/206630046-10183545-640c-409c-b687-1e9ed51a27d9.png" width="80"> | <img src="https://user-images.githubusercontent.com/64299610/206630555-b48ee1f2-c05e-4aef-8b79-20d9b041fde0.svg" width="110"> |


<br/>

### Deploy

| fly.io | 
| :----: |
| <img src="https://user-images.githubusercontent.com/64299610/206631805-9f5b01de-e3fb-47a9-962b-698ddb9ad0de.svg" width="80px"> |

<br/>

## 📨 Commit Message Convention

| Tag Name | Description                                           |
| -------- | ----------------------------------------------------- |
| feat     | 새로운 기능을 추가할 경우                             |
| fix      | 버그를 고친 경우                                      |
| design   | CSS 등 사용자 UI 디자인 변경                          |
| style    | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우 |
| chore    | 빌드 테스트 업데이트, 패키지 매니저를 설정하는 경우   |
| refactor | 코드 리팩토링                                         |
| comment  | 필요한 주석 추가 및 변경                              |
| docs     | 문서를 수정한 경우                                    |
| rename   | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우    |
| remove   | 파일을 삭제하는 작업만 수행한 경우                    |
