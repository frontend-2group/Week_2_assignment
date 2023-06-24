console.log(Math.floor(Math.random()*10)+1)

console.log(Math.floor(Math.random()*45)+1)

// 퀴즈
// 1번 문제
// 전화번호 가리기
// 010-1234-1234 => 010-****-1234
// 번호 input 어떤 것이든 들어가도 위와 같은 결과가 나와야한다
// 010-0000-0000 => 010-****-0000

const ph = [0,1,0,"-",7,7,9,4,"-",5,6,0,3]
ph.splice(4,4, "*","*","*","*")
const diary = ph.join(" ");
console.log(diary)



// 로또번호 맞추기
// 번호 랜덤 생성 [1~45, 1~45, ... 7개]
// 변수로 진행
// input [1,2,3,4,5,6,7] 넣고싶은 값 넣기
// 2개일치 - >> 5등
// 3개일치 -> 4등
// 4개일치 ->> 3등
// 보너스 포함 6개일치 ->> 2등
// 보너스 제외 6개 일치 -> 1등
// 마지막 인덱스 = 보너스

const input = [1,2,3,4,5,6,7]
const lotto = []
let sum=0;
let bonus=0;

let result;
for(let i=0; i<6; i++){
    lotto[i]=Math.floor(Math.random()*10)+1

    if(lotto[i]===input[i]){
        sum += 1;
    }
}


lotto[6]=Math.floor(Math.random()*10)+1

if(lotto[6]===input[6])bonus += 1;

let total = sum + bonus;
switch(total){
    case 0 : result = "꽝"; break;
    case 1 : result = "1개맞았습니다"; break;
    case 2 : result = "2개! 아쉽군요"; break;
    case 3 : result = "3개! 5등 용돈으로 쓰세요"; break;
    case 4 : result = "4개! 4등 쏠쏠하게 벌었는데요"; break;
    case 5 : result = "5개! 3등! 얼마받으셨어요!? "; break;
    case 6 : result = "2등!! 너무 부러워요!"; break;
}

if(total===6&&lotto[6]===input[6]){
    result ="1등!!! 인생 피셨군요!!"
}

console.log(sum)
console.log(bonus)
console.log(total)

console.log(result)