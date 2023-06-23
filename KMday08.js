const getBestLists = [
    {
        ranking: 1,
        id: 186780,
        type: "mask sheet",
        title: "러븀",
        content: "[단독선런칭]유자겔마스크 5매",
        price: 16250,
    },
    {
        ranking: 2,
        id: 152093,
        type: "skincare",
        title: "아이소이",
        content: "[1등잡티세럼] 아이소이 세럼 더블기획 (1+1) ",
        price: 39800,
    },
    {
        ranking: 3,
        id: 185110,
        type: "cream",
        title: "닥터지",
        content: "[2천만크림]닥터지 수딩크림 70ml (1+1) ",
        price: 26600,
    },
    {
        ranking: 4,
        id: 149568,
        type: "vitamin",
        title: "오쏘몰",
        content: "멀티비타민&미네랄 14입",
        price: 61500,
    },

    {
        ranking: 5,
        id: 171650,
        type: "sun block",
        title: "라운드랩",
        content: "자작나무 수분 선크림 (1+1) ",
        price: 25000,
    },
    {
        ranking: 6,
        id: 149846,
        type: "makeup",
        title: "헤라",
        content: "[한정] 쉐딩 하이라이터 (1+1) ",
        price: 59400,
    },
    {
        ranking: 7,
        id: 173710,
        type: "sun block",
        title: "큐어",
        content: "김정문알로에큐어수딩젤 150ml (1+1) ",
        price: 9400,
    },
    {
        ranking: 8,
        id: 182272,
        type: "cream",
        title: "마일드랩",
        content: "센텔라스카연고 30g",
        price: 27000,
    },
];

//1. 크림 종류만 보고싶음 (단, 이름만)
console.log(`---------------1---------------------`);

const cream = getBestLists
    .filter((getBestList) => getBestList.type === "cream")
    .map((getBestList) => getBestList.title);

console.log(cream);

// 2.가격이 낮은 순대로 다시 정렬
console.log(`---------------2---------------------`);

const lowprice = getBestLists
    .sort((a, b) => a.price - b.price)
    .map(
        (getBestList) =>
            `${getBestList.title}, ${getBestList.price}, ${getBestList.type}`
    );
//.map((a) => `${a.key1}, ${a.key2}, ${a.key3}`)
//-------------> 이런식으로 백쿼터 양쪽 끝에 한번만 ${},${}로 원하는 값만큼 추가하면 추가한 값만큼 보임!!! (수현님이 알려주심!!!)

console.log(lowprice);

//3. 종류별로 묶어서 정렬?(크림/선케어/마스크팩/메이크업/비타민 순으로)
console.log(`---------------3---------------------`);

const cream1 = getBestLists.filter(
    (getBestList) => getBestList.type === "cream"
);
const suncare = getBestLists.filter(
    (getBestList) => getBestList.type === "sun block"
);
const mask = getBestLists.filter(
    (getBestList) => getBestList.type === "mask sheet"
);
const makeup = getBestLists.filter(
    (getBestList) => getBestList.type === "makeup"
);
const vitamin = getBestLists.filter(
    (getBestList) => getBestList.type === "vitamin"
);

console.log(cream1, suncare, mask, makeup, vitamin);

// console.log(
//     `종류별로 나누면 ${cream1}, ${suncare}, ${mask}, ${makeup}, ${vitamin}이다`
// );
//119는 왜 도대체 ${}안에 결과값이 object로만 나오는 것인가...

// 4.  랭킹 3<->5 교체되었음
console.log(`---------------4---------------------`);

const getBestListClear = getBestLists.sort((a, b) => a.ranking - b.ranking);
//위에서 2. 낮은 가격대로 정렬되있어서 초기화 함

const change = getBestListClear.slice(2, 3);
const change3 = getBestListClear.splice(2, 1, getBestLists[4]);
const change5 = getBestListClear.splice(4, 1, change);

console.log(getBestListClear);

//125번째 줄에서 change 들어간게 좀다르게 정렬되는데..[ 1,2,5[change] 6,7,8] 가운데 []없애고 싶으면 어떻게 할까..?
//새로 찍으면 복사본이라 undefined 나옴.. 하....

//5. 1+1인 제품 갯수와 타이틀만 출력
console.log(`---------------5---------------------`);

// const findFreeItems = getBestLists.map((getBestList) => getBestList.content);

// const get1free = findFreeItems.filter(
//     (findFreeItem) => findFreeItem == included("1 + 1")
// );
// // .map((getBestList)=> getBestList)

// console.log(get1free);

//배열내에서 키에서 특정 단어가 포함된것만 찾고 싶은데 모르겠다.....
//1+1인 상품만 찾고 싶은데...ㅠㅠㅠㅠㅠㅠ
