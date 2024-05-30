function solution(myString) {
    let answer = [];
    answer = myString.split("x");
    answer = answer.filter(item => item !== '');
    answer.sort();
    return answer;
}