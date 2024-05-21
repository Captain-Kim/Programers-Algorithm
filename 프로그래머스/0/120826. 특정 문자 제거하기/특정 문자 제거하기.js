function solution(my_string, letter) {
    let answer = '';
    // my_string에서 letter를 찾아서 모두 '' 빈 문자열로 대체
    answer = my_string.replaceAll(letter, '');
    return answer;
}