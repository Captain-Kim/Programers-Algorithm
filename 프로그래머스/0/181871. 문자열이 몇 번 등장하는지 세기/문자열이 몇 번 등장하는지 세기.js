function solution(myString, pat) {
    let includePatCount = 0; // pat이 myString에 몇 번 포함되는지
    // 횟수를 할당하는 변수
    let firstLocationPat = myString.indexOf(pat);
    // myString에서 pat이 처음 등장하는 index의 값을 할당하는 변수
    
    // indexOf는 문자열에 해당 문자가 포함되어 있지 않으면 -1을 반환하기 때문에
    // while의 조건식은 더이상 pat이 myString에 없을 때까지 반복을 돌라는 의미
    while (firstLocationPat !== -1) {
        // 즉 발견이 되면 includePatCount를 최초 0번에서 1씩 카운트를 늘려나가고
        includePatCount++;
        // pat이 발견이 되면 다음 index로 이동시켜서 계속 검증함.
        firstLocationPat = myString.indexOf(pat, firstLocationPat + 1)
    }
    return includePatCount;
}