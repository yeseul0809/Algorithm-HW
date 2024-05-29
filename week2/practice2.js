// 문제 정의:
// 주어진 문자열에서 각 단어를 반전시키시오. 단어의 순서는 그대로 유지되어야 합니다.

// 예시:

// 입력: "the sky is blue"
// 출력: "eht yks si eulb"

// 입력: "hello world"
// 출력: "olleh dlrow"

// 의사코드
// 공백을 기준으로 나눠서 배열에 넣는다. (split)
// 배열의 인덱스 -> 배열요소 문자열의 인덱스로 접근
// 단어의 끝단어를 첫단어로 추가하는 새로운 문자열을 만든다.
// answer 배열에 넣는다. 다시 반복할때 문자열 초기화
// answer 배열안의 요소를 join 으로 문자열로 만든 후 반환

function reverseEachWord(s) {
  const arr = s.split(" ");
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    let backString = ""; // 반복 시작 전 초기화!!!!!(저번에도 안했었음..)
    for (let j = arr[i].length - 1; j >= 0; j--) {
      backString += arr[i][j];
    }
    answer.push(backString);
  }
  return answer.join(" ");
}

// 간결한 코드
// function reverseEachWord(s) {
//   return s
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .join(" ");
// }

function testReverseEachWord() {
  const testCases = [
    { input: "the sky is blue", expected: "eht yks si eulb" },
    { input: "hello world", expected: "olleh dlrow" },
    { input: "a b c d", expected: "a b c d" },
    { input: "Palindrome", expected: "emordnilaP" },
    { input: "I love coding", expected: "I evol gnidoc" },
  ];

  testCases.forEach(({ input, expected }, index) => {
    try {
      const result = reverseEachWord(input);
      if (result !== expected)
        throw new Error(`Expected ${expected}, but got ${result}`);
      console.log(`Test ${index + 1}: Passed`);
    } catch (error) {
      console.log(`Test ${index + 1}: Failed - ${error.message}`);
    }
  });
}

// 테스트 함수 호출
testReverseEachWord();
