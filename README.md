# CarePulse - 의료 예약 관리 시스템

## 프로젝트 개요
CarePulse는 환자와 의료진을 연결하는 현대적인 의료 예약 관리 시스템입니다. 환자는 간편하게 진료 예약을 신청하고, 관리자는 효율적으로 예약을 관리할 수 있습니다.

## 주요 기능
- **환자 등록 및 인증**: 이메일 기반 사용자 인증 시스템
- **진료 예약 시스템**: 의사 선택 및 희망 날짜/시간 예약
- **관리자 대시보드**: 예약 현황 통계 및 관리 기능
- **실시간 알림**: Twilio를 통한 SMS 알림 서비스
- **파일 업로드**: 의료 문서 업로드 기능

## 기술 스택

### Frontend
- **프레임워크**: Next.js 14.2.3 (App Router)
- **언어**: TypeScript 5
- **스타일링**: 
  - TailwindCSS 3.4.1
  - Radix UI (헤드리스 UI 컴포넌트)
  - Class Variance Authority (컴포넌트 변형 관리)
  - Tailwind Merge (클래스 병합 최적화)

### 상태 관리 및 폼
- **React Hook Form 7.51.4**: 폼 상태 관리
- **Zod 3.23.6**: 스키마 검증 및 타입 안전성
- **@hookform/resolvers**: Zod와 React Hook Form 통합

### UI 컴포넌트 라이브러리
- **@radix-ui/react-***: 접근성을 고려한 헤드리스 UI 컴포넌트
  - Alert Dialog, Checkbox, Dialog, Dropdown Menu
  - Label, Popover, Radio Group, Select, Separator
- **React Datepicker 6.9.0**: 날짜/시간 선택
- **React Phone Number Input 3.4.1**: 국제 전화번호 입력
- **React Dropzone 14.2.3**: 파일 업로드
- **Input OTP 1.4.2**: OTP 입력 컴포넌트
- **Lucide React 0.378.0**: 아이콘 라이브러리

### Backend 및 서비스
- **Appwrite (node-appwrite 12.0.1)**: 
  - 백엔드 서비스 (인증, 데이터베이스, 파일 저장)
  - 실시간 데이터베이스
  - 사용자 관리
- **Twilio 5.0.4**: SMS 알림 서비스
- **Sentry (@sentry/nextjs 9.39.0)**: 에러 모니터링

### 데이터 테이블
- **@tanstack/react-table 8.21.3**: 고급 테이블 기능

### 개발 도구
- **ESLint**: 코드 린팅
- **Prettier**: 코드 포맷팅
- **PostCSS & Autoprefixer**: CSS 후처리

## 프로젝트 구조
```
carepulse/
├── app/                    # Next.js App Router
│   ├── admin/             # 관리자 대시보드
│   ├── api/               # API 라우트
│   └── patients/          # 환자 관련 페이지
├── components/            # React 컴포넌트
│   ├── forms/            # 폼 컴포넌트
│   ├── table/            # 테이블 컴포넌트
│   └── ui/               # UI 기본 컴포넌트
├── lib/                   # 유틸리티 및 설정
│   ├── actions/          # 서버 액션
│   └── validation.ts     # Zod 스키마
└── public/               # 정적 파일
```

## 주요 컴포넌트 설명

### 인증 흐름
1. **PatientForm**: 환자 초기 등록 (이름, 이메일, 전화번호)
2. **RegisterForm**: 상세 정보 등록 (개인정보, 의료 정보)
3. **PasskeyModal**: 관리자 인증 (OTP)

### 예약 관리
- **AppointmentForm**: 예약 생성/수정/취소
- **DataTable**: 예약 목록 관리 (관리자)
- **StatusBadge**: 예약 상태 표시

### 파일 처리
- **FileUploader**: Dropzone 기반 파일 업로드
- Appwrite Storage 연동

## 환경 변수 설정
```env
# Appwrite
PROJECT_ID=
API_KEY=
DATABASE_ID=
PATIENT_COLLECTION_ID=
DOCTOR_COLLECTION_ID=
APPOINTMENT_COLLECTION_ID=
NEXT_PUBLIC_BUCKET_ID=
NEXT_PUBLIC_ENDPOINT=

# Twilio (SMS)
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=

# Sentry
SENTRY_AUTH_TOKEN=
```

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 린트 검사
npm run lint
```

## 배포
- Vercel Platform 권장
- Next.js 자동 최적화 지원

## 라이선스
© 2025 CarePulse