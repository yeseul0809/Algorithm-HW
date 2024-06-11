# 재귀 함수(Recursion) 이해하기

## 재귀 함수란 무엇인가요?

재귀 함수는 함수가 자기 자신을 호출하여 문제를 해결하는 프로그래밍 기법입니다. 이는 문제를 더 작고 관리하기 쉬운 하위 문제로 분해할 수 있게 해줍니다.

재귀 함수는 두 가지 주요 부분으로 나눌 수 있습니다:

1. **기본 사례(Base Case)**: 재귀 호출이 끝나는 조건입니다.
2. **재귀 사례(Recursive Case)**: 함수가 수정된 인수로 자기 자신을 호출하는 부분입니다.

## 왜 재귀 함수를 사용할까요?

재귀 함수는 비슷한 하위 작업으로 정의할 수 있는 작업에 유용합니다. 트리 탐색, 팩토리얼 계산, 피보나치 수열과 같은 문제에 대해 더 직관적이고 구현하기 쉬울 수 있습니다.

## 예제: 피보나치 수열

피보나치 수열은 각 숫자가 0과 1로 시작하여 앞의 두 숫자의 합이 되는 일련의 숫자입니다.

### 피보나치 수열 정의

- F(0) = 0
- F(1) = 1
- F(n) = F(n - 1) + F(n - 2), for n > 1

### 재귀적 구현

다음은 JavaScript에서 재귀 함수를 사용하여 피보나치 수열을 구현한 간단한 예제입니다:

```javascript
function fibonacci(n) {
  if (n === 0) return 0; // 기본 사례 1
  if (n === 1) return 1; // 기본 사례 2
  return fibonacci(n - 1) + fibonacci(n - 2); // 재귀 사례
}
```

## 작동 원리

1. **기본 사례(Base Case)**:
   n이 0이면, 함수는 0을 반환합니다.
   n이 1이면, 함수는 1을 반환합니다.

2. **재귀 사례(Recursive Case)**:
   그 외의 값에 대해서는 함수가 n - 1과 n - 2로 자기 자신을 호출하고 그 결과를 더합니다.

## 재귀 시각화

fibonacci(4)의 예를 들어 보겠습니다:

```javascript
fibonacci(4)
= fibonacci(3) + fibonacci(2)
= (fibonacci(2) + fibonacci(1)) + (fibonacci(1) + fibonacci(0))
= ((fibonacci(1) + fibonacci(0)) + fibonacci(1)) + (fibonacci(1) + fibonacci(0))
= ((1 + 0) + 1) + (1 + 0)
= 2 + 1
= 3
```