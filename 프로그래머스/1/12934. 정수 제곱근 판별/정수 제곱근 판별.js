function solution(n) {
    // n의 제곱근을 구하기
    const sqrt = Math.sqrt(n);
    // 제곱근이 정수인지 확인
    if (Number.isInteger(sqrt)) {
        // 제곱근이 정수라면 (sqrt + 1)의 제곱을 반환
        return (sqrt + 1) ** 2;
    } else {
        // 제곱근이 정수가 아니라면 -1을 반환
        return -1;
    }
}