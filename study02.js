//혼자 풀어보기..
//는 잘안되니까 문제풀이 보고라도 이해해보기

/*
1번 문제
전화번호 가리기 
010 1234 1234 => 010 **** 1234
번호 input 어떤 것이든 들어가도 위와 같은 결과가 나와야한다
010 0000 00000 => 010 **** 0000
*/

const num = "010-1234-1234";

function hashNum(num) {
  const hashNumber = num.split("-"); //num.split => 문자열을 배열로 바꿔줌
  hashNumber[1] = "****";
  return hashNumber.join("-"); // 배열로 바뀐 hashNumber을 다시 문자열로 바꿔서 리턴
}

console.log(hashNum(num));

/*
2번문제
로또번호 맞추기
랜덤생성 [1~45,1~45,1~45,1~45,1~45,1~45,1~45,]
input [?,?,?,?,?,?,?] =>
var

보너스 제외 순서 상관없이 3개 일치 => 4등
보너스 제외 순서 상관없이 4개 일치 => 4등
보너스 제외 순서 상관없이 5개 일치 => 3등
보너스 포함 순서 상관없이 6개 일치 => 2등
보너스 제외 순서 상관없이 6개 일치 => 1등
마지막 인덱스 = 보너스

*/
