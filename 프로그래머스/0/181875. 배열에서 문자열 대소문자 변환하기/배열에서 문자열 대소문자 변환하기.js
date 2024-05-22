function solution(strArr) {
  // 주어진 배열을 하나하나 순회하면서
  const answer = strArr.map((str, index) => {
    if (index % 2 === 0) {
      // 짝수 인덱스의 문자열은 소문자로 변환
      return str.toLowerCase();
    } else {
      // 홀수 인덱스의 문자열은 대문자로 변환
      return str.toUpperCase();
    }
  });
  return answer;
}
