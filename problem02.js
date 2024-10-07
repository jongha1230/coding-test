function solution(phone_number) {
    const length = phone_number.length;
    
    // 제한 조건 검사
    if (length < 4 || length > 20) {
        throw new Error("전화번호는 4자리 이상 20자리 이하여야 합니다.");
    }
    
    // 마지막 4자리를 제외한 나머지 부분을 *로 대체
    const maskedPart = '*'.repeat(length - 4);
    const lastFourDigits = phone_number.slice(-4);
    
    // 마스킹된 부분과 마지막 4자리를 합침
    return maskedPart + lastFourDigits;
}

solution("01033334444") // 	"*******4444"
solution("027778888") // 	"*****8888"
solution("123") // "전화번호는 4자리 이상 20자리 이하여야 합니다." + 에러 발생
