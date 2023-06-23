// 2주차 과제 
// 선정 사이트 : 2023 여름 무진장| 무신사 (https://www.musinsa.com/app/)

// 상품 품목별 코드
const productSortCode = [
    {topwear: 001},
    {bottomwear: 002},
    {shoes: 003},
    {acc: 004},
    {perfume: 005},
]

// 상품 정보
const products = [
    {
        id: 01,
        thumbImg: '',
        brandName: '카뮤어',
        productSort: 001,
        discountRage: 50,
        discountPrice: 34000,
        salesRate: '270개 판매됨',
    },
    {
        id: 02,
        thumbImg: '',
        brandName: '푸마',
        productSort: 003,
        discountRage: 59,
        discountPrice: 19900,
        salesRate: '142개 판매됨',
    },
    {
        id: 03,
        thumbImg: '',
        productSort: 005,
        brandName: '에스더블유나인틴',
        discountRage: 40,
        discountPrice: 53400,
        salesRate: '123개 판매됨',
    },
    {
        id: 04,
        thumbImg: '',
        brandName: '라퍼지스토어',
        productSort: 002,
        discountRage: 50,
        discountPrice: 36000,
        salesRate: '9,809개 판매됨',
    },
    {
        id: 05,
        thumbImg: '',
        brandName: '반스',
        productSort: 003,
        discountRage: 73,
        discountPrice: 29000,
        salesRate: '189개 판매됨',
    },
    {
        id: 06,
        thumbImg: '',
        brandName: '아디다스',
        productSort: 003,
        discountRage: 60,
        discountPrice: 55900,
        salesRate: '18개 판매됨',
    },
];

// 50% 세일하는 품목만 모아보기
console.log('----------------- 01-1 -----------------');

const halfDiscount = products.filter((product) => product.discountRage === 50);
console.log(halfDiscount);

// 50% 이상 세일하는 품목만 모아보기
console.log('----------------- 01-2 -----------------');

const overHalfDiscount = products.filter((product) => product.discountRage >= 50);
console.log(overHalfDiscount);



// 신발만 모아보기
console.log('----------------- 02 -----------------');

const findShoes = products.map((product, index) => {
    
    if( product.productSort === 003 ) return index + 1;
    else return -1;

})
.filter((product) => product != -1);

console.log(findShoes);



// 가격이 낮은 순으로 정렬
console.log('----------------- 03-1 -----------------');
const lowerPrice = products.sort((a, b) => a.discountPrice - b.discountPrice)
.map((products) => `${products.discountPrice} | ${products.id}, ${products.brandName}`);

console.log(lowerPrice);


// 할인율이 높은 순으로 정렬
console.log('----------------- 03-2 -----------------');

const highDiscount = products.sort((a, b) => b.discountRage - a.discountRage)
.map((products) => `${products.discountRage}% | ${products.id}, ${products.brandName}`);

console.log(highDiscount);



// 특정 브랜드 제품 삭제하기
console.log('----------------- 04 -----------------');

const deleteProduct = products.find((product) => product.brandName === '아디다스');

console.log(deleteProduct);
