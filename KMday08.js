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
        content: "[1등잡티세럼] 아이소이 세럼 더블기획(1+1)",
        price: 39800,
    },
    {
        ranking: 3,
        id: 185110,
        type: "cream",
        title: "닥터지",
        content: "[2천만크림]닥터지 수딩크림 70ml(1+1)",
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
        content: "자작나무 수분 선크림 (1+1)",
        price: 25000,
    },
    {
        ranking: 6,
        id: 149846,
        type: "makeup",
        title: "헤라",
        content: "[한정] 쉐딩 하이라이터 (1+1)",
        price: 59400,
    },
    {
        ranking: 7,
        id: 173710,
        type: "sun block",
        title: "큐어",
        content: "김정문알로에큐어수딩젤 150ml (1+1)",
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
const cream = getBestLists
    .filter((getBestList) => getBestList.type === "cream")
    .map((getBestList) => getBestList.title);

console.log(cream);

// 2.가격이 낮은 순대로 다시 정렬
const lowprice = getBestLists
    .map((getBestList) => getBestList.price)
    .sort((a, b) => a - b);

console.log(lowprice);

//아..근데 전체 오브젝트를 정렬하고 싶다....

//3.  랭킹 3<->5 교체되었음

//4. 종류별로 묶어서 정렬?(크림/선케어/마스크팩/메이크업/비타민 순으로)
