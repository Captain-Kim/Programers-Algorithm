function solution(num_list) {
    let answer;
    let odds = [];
    let evens = [];

    num_list.forEach(num => {
        if (num % 2 === 0) {
            evens.push(num);
        } else {
            odds.push(num);
        }
    });

    let oddStr = odds.join('');
    let evenStr = evens.join('');

    let oddNum = parseInt(oddStr);
    let evenNum = parseInt(evenStr);

    answer = oddNum + evenNum;
    return answer;
}
