// 장르 버튼 오픈 함수
function genre() {
  document.querySelector("#table").style.display = "block";
}

// 영화 종류/정보
const movie = [
  {
    name: " 거짓말의 거짓말 ",
    views: 200,
    date: 10,
    genre: "comedy",
  },
  {
    name: " 데이브 샤펠 ",
    views: 100,
    date: 20,
    genre: "comedy",
  },
  {
    name: " 보스 베이비 ",
    views: 300,
    date: 30,
    genre: "comedy",
  },
  {
    name: " 경우의 수 ",
    views: 250,
    date: 15,
    genre: "romance",
  },
  {
    name: " 남자친구 ",
    views: 50,
    date: 25,
    genre: "romance",
  },
  {
    name: " 러브 ",
    views: 350,
    date: 5,
    genre: "romance",
  },
  {
    name: " 검은 미로 ",
    views: 150,
    date: 35,
    genre: "thriller",
  },
  {
    name: " 라이어 게임 ",
    views: 400,
    date: 40,
    genre: "thriller",
  },
  {
    name: " 반역자들 ",
    views: 450,
    date: 45,
    genre: "thriller",
  },
];

// 코미디 버튼 오픈 함수
function comedyOpen() {
  const comedy = movie.filter((gen) => gen.genre === "comedy");
  comedy.forEach((title) => document.write(title.name));
}

// 로맨스 버튼 오픈 함수
function romanceOpen() {
  const romance = movie.filter((gen) => gen.genre === "romance");
  romance.forEach((title) => document.write(title.name));
}

// 스릴러 버튼 오픈 함수
function thrillerOpen() {
  const thriller = movie.filter((gen) => gen.genre === "thriller");
  thriller.forEach((title) => document.write(title.name));
}
