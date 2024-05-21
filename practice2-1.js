// 문자열에서 가장 많이 등장한 문자 찾기
// 문제 정의:
// 주어진 문자열에서 가장 많이 등장하는 문자를 반환하라. 만약 여러 개라면 그 중 아무거나 반환하라.

// 조건:

// 대소문자를 구분한다.
// 공백도 하나의 문자로 간주한다.
// 예시:

// 입력: "banana"
// 출력: 'a' (혹은 'n')
// 문자열에서 가장 많이 등장한 문자 찾기
// 문제 정의:
// 주어진 문자열에서 가장 많이 등장하는 문자를 반환하라. 만약 여러 개라면 그 중 아무거나 반환하라.

// 조건:

// 대소문자를 구분한다.
// 공백도 하나의 문자로 간주한다.
// 예시:

// 입력: "banana"
// 출력: 'a' (혹은 'n')

function mostFrequentChar(s) {
  // 문자열 내 각 문자의 개수 저장 -> (ex1 문제 for...of 풀이로 수정해보기)
  // 정렬하기위해 key-value 쌍으로 배열만들기
  // ex) [['a', 3], ['b', 2], ['c', 1]]
  // value 값에 따라 내림차순 정렬 (sort사용, idx [1] 로 비교하기.)
  // 결과 배열의 idx 가 [0][0]인 값 반환

  const arr = {};
  for (const i of s) {
    arr[i] ? arr[i]++ : (arr[i] = 1);
  }
  const result = Object.entries(arr).sort((a, b) => b[1] - a[1]);
  return result[0][0];
}

// 테스트 코드
function testMostFrequentChar() {
  const testCases = [
    { input: "banana", expected: ["a", "n"] },
    { input: "apple", expected: ["p"] },
    { input: "mississippi", expected: ["i", "s"] },
    { input: "aabbcc", expected: ["a", "b", "c"] },
  ];

  testCases.forEach(({ input, expected }, index) => {
    try {
      const result = mostFrequentChar(input);
      if (!expected.includes(result))
        throw new Error(`Expected one of ${expected}, but got ${result}`);
      console.log(`Test ${index + 1}: Passed`);
    } catch (error) {
      console.log(`Test ${index + 1}: Failed - ${error.message}`);
    }
  });
}

// 테스트 함수 호출 : 터미널에 node practice2-1.js 실행
testMostFrequentChar();

function mostFrequentChar(s) {
  // 이곳에 함수 작성을 해주세요.
}

// 테스트 코드
function testMostFrequentChar() {
  const testCases = [
    { input: "banana", expected: ["a", "n"] },
    { input: "apple", expected: ["p"] },
    { input: "mississippi", expected: ["i", "s"] },
    { input: "aabbcc", expected: ["a", "b", "c"] },
  ];

  testCases.forEach(({ input, expected }, index) => {
    try {
      const result = mostFrequentChar(input);
      if (!expected.includes(result))
        throw new Error(`Expected one of ${expected}, but got ${result}`);
      console.log(`Test ${index + 1}: Passed`);
    } catch (error) {
      console.log(`Test ${index + 1}: Failed - ${error.message}`);
    }
  });
}

// 테스트 함수 호출 : 터미널에 node practice2-1.js 실행
testMostFrequentChar();
