// 문제 1: 문자열 내 각 문자의 개수 반환
// 문제 정의:
// 주어진 문자열에서 각 문자가 몇 번 등장하는지 세어라. 결과는 객체 형태로 반환한다.

// 조건:
// 대소문자를 구분한다.
// 공백도 하나의 문자로 간주한다.
// 빈 문자열이 주어질 수도 있다.
// 예시:

// 입력: "hello world"
// 출력: {'h': 1, 'e': 1, 'l': 3, 'o': 2, ' ': 1, 'w': 1, 'r': 1, 'd': 1}

// 입력: "hello World"
// 출력: {'h': 1, 'e': 1, 'l': 3, 'o': 2, ' ': 1, 'W': 1, 'r': 1, 'd': 1}

function countCharacters(s) {
  // 결과를 저장할 객체 선언
  // 입력받은 문자열을 순회한다.(문자열의 길이만큼)
  // 결과 객체에 해당 문자가 있다면 +1 해주고, 없다면 1.
  // 결과를 반환한다.

  const result = {};
  for (let i = 0; i < s.length; i++) {
    result[s[i]] ? result[s[i]]++ : (result[s[i]] = 1);
  }
  return result;
}

// 테스트 코드
function testCountCharacters() {
  const testCases = [
    {
      input: "hello world",
      expected: { h: 1, e: 1, l: 3, o: 2, " ": 1, w: 1, r: 1, d: 1 },
    },
    { input: "banana", expected: { b: 1, a: 3, n: 2 } },
    { input: "", expected: {} },
    { input: "aabbcc", expected: { a: 2, b: 2, c: 2 } },
  ];

  testCases.forEach(({ input, expected }, index) => {
    try {
      const result = countCharacters(input);
      const isEqual = JSON.stringify(result) === JSON.stringify(expected);
      if (!isEqual)
        throw new Error(
          `Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(
            result
          )}`
        );
      console.log(`Test ${index + 1}: Passed`);
    } catch (error) {
      console.log(`Test ${index + 1}: Failed - ${error.message}`);
    }
  });
}

// 테스트 함수 호출 : 터미널에 node practice1.js 실행
testCountCharacters();
