# Contact 페이지 이메일 수신 설정 변경 작업 기록

**작업 일자**: 2025-01-24  
**작업자**: AI Assistant  
**프로젝트**: ecoable-website  

## 📋 작업 요청사항
- Contact 페이지 문의하기 기능의 수신 이메일 주소를 `khcha@ecoable.co.kr`로 변경
- 보내는 메일 주소를 사용자가 입력하는 이메일로 설정

## ✅ 완료된 작업

### 1. **이메일 수신 주소 변경**
- **파일**: `src/app/api/send-email/route.ts`
- **변경사항**:
  - 수신 이메일 주소를 `jing309@gmail.com`에서 `khcha@ecoable.co.kr`로 변경 (68번째 줄)
  - mailto 링크도 새 주소로 변경 (47번째 줄)

### 2. **발송자 설정 개선**
- **파일**: `src/app/api/send-email/route.ts` 
- **변경사항**:
  - `replyTo: email` 필드 추가 (69번째 줄)
  - 사용자가 입력한 이메일 주소로 답장 가능하도록 설정
  - 기존 Gmail SMTP 설정은 유지하되 답장 주소만 사용자 이메일로 설정

## 🔧 기술적 세부사항

### 이메일 발송 로직 개선사항
1. **수신자 변경**: `to: 'khcha@ecoable.co.kr'`
2. **답장 주소 설정**: `replyTo: email` (사용자 입력 이메일)
3. **발송자 유지**: `from: process.env.EMAIL_USER` (기존 Gmail 계정)

### 왜 replyTo를 사용했는가?
- 직접 사용자 이메일을 `from`으로 사용하면 SPF/DKIM 설정 문제로 스팸 처리될 가능성
- `replyTo` 필드를 사용하면 수신자가 답장 시 사용자 이메일로 직접 회신 가능
- 이메일 전달성과 보안성을 모두 확보

## 📧 변경된 이메일 플로우

### 이전 플로우
```
사용자 문의 → Gmail SMTP → jing309@gmail.com
```

### 현재 플로우 
```
사용자 문의 → Gmail SMTP → khcha@ecoable.co.kr
                     ↪ Reply-To: 사용자 이메일
```

### 수신자 경험
- 이메일은 `khcha@ecoable.co.kr`에서 수신
- 답장 버튼 클릭 시 자동으로 문의자 이메일 주소가 수신자로 설정됨
- 별도의 이메일 주소 복사/붙여넣기 불필요

## 📁 변경된 파일 목록
- `src/app/api/send-email/route.ts`
  - Line 47: mailto 링크 수신 주소 변경
  - Line 68: SMTP 수신 주소 변경  
  - Line 69: replyTo 필드 추가

## 🧪 테스트 방법

### 테스트 시나리오
1. `http://localhost:3000/contact` 접속
2. 문의하기 폼 작성:
   - 성함: 테스트 사용자
   - 소속: 테스트 회사  
   - 연락처: 010-1234-5678
   - 이메일: test@example.com
   - 문의사항: 이메일 설정 테스트
3. "문의 보내기" 버튼 클릭
4. `khcha@ecoable.co.kr`에서 이메일 수신 확인
5. 수신된 이메일에서 "답장" 클릭 시 `test@example.com`이 수신자로 설정되는지 확인

### 예상 결과
- ✅ `khcha@ecoable.co.kr`로 문의 이메일 자동 발송
- ✅ 답장 시 문의자 이메일 주소 자동 설정
- ✅ 기존 Gmail SMTP 설정 정상 작동

## 📝 추가 참고사항
- Gmail 앱 비밀번호 설정은 기존과 동일하게 유지
- 환경 변수 `.env.local` 설정 변경 불필요
- Contact 페이지 UI는 변경사항 없음

---
**작업 완료 시간**: 약 10분  
**난이도**: ⭐⭐ (쉬움)  
**상태**: ✅ 완료
