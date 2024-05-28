/* 

문제: 일관된 문자열의 개수 세기
문제 요구사항 (정의)

주어진 문자열 allowed와 문자열 배열 words가 있습니다.
 allowed 문자열은 서로 다른 문자들로 이루어져 있습니다. 
 각 words 배열의 문자열이 allowed에 있는 문자들만 포함하고 있을 때, 
 그 문자열을 "일관된 문자열"이라고 합니다. 여러분의 목표는 words 배열에서 일관된 문자열의 개수를 세는 것입니다.

인풋 아웃풋 예시

예제 1

입력 : allowed = "ab" ,  words = ["ad", "bd", "aaab", "baa", "badab"]
출력 : 2

설명 : "aaab"와 "baa"가 일관된 문자열입니다. 이들은 'a'와 'b'만 포함하고 있습니다.

예제 2

입력 :  allowed = "abc" , words = ["a", "b", "c", "ab", "ac", "bc", "abc"]
출력 : 7
설명 : 모든 문자열이 일관된 문자열입니다. 모두 'a', 'b', 'c'로만 구성되어 있습니다.

예제 3

입력 :allowed = "cad", words = ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"]
출력 : 4
설명 : "cc", "acd", "ac", "d"가 일관된 문자열입니다.

*/

function countConsistentStrings(allowed, words) {
  // 문자의 개수를 세는 count 변수 선언
  // 각각의 문자가 allowed 배열 안에 있는지 순회하며 true,false 구분 (이중배열)
  // 처음엔 true 로 가정
  // 동일한 문자가 있으면 count++
  // count return

  let count = 0;

  for (const i of words) {
    let exist = true;

    for (const word of i) {
      if (!allowed.includes(word)) {
        exist = false;
        break;
      }
    }

    if (exist) count++;
  }
  return count;
}

function testCountConsistentStrings() {
  function runTestCase(allowed, words, expected) {
    const result = countConsistentStrings(allowed, words);
    const passed = result === expected;
    console.log(
      `allowed: "${allowed}", words: ${JSON.stringify(
        words
      )}, expected: ${expected}, got: ${result} - ${
        passed ? "PASSED" : "FAILED"
      }`
    );
  }

  // 예제 1
  runTestCase("ab", ["ad", "bd", "aaab", "baa", "badab"], 2);

  // 예제 2
  runTestCase("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"], 7);

  // 예제 3
  runTestCase("cad", ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"], 4);

  // 추가 테스트 케이스 1
  runTestCase("a", ["a", "aa", "aaa", "b", "ab"], 3);

  // 추가 테스트 케이스 2
  runTestCase("xyz", ["x", "y", "z", "xy", "xz", "yz", "xyz", "xyza"], 7);

  // 추가 테스트 케이스 3
  runTestCase("wxyz", ["wx", "wy", "wz", "xyz", "wxyz"], 5);

  // 추가 테스트 케이스 4
  runTestCase("abc", ["def", "ghi", "jkl"], 0);

  // 추가 테스트 케이스 5
  runTestCase("mno", ["m", "n", "o", "mn", "no", "mo", "mno", "mnop"], 7);

  // 추가 테스트 케이스 6
  runTestCase("lmn", ["lm", "ln", "mn", "lmno"], 3);

  // 추가 테스트 케이스 7
  runTestCase("abc", ["ab", "bc", "ca", "aabbcc", "abcabc"], 5);

  console.log("테스트 완료");
}

// 테스트 함수 호출      'node time-attack-week-1-1.js'     라고 터미널에 쳐주세요
testCountConsistentStrings();
