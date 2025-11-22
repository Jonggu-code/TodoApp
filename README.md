<p align="center">
  <img src="https://github.com/Jonggu-code/Study/blob/main/frontend-study/02-react-typescript/src/days/typescript-project-todolist/public/thumbnail.gif">
</p>

# To-Do App — React + TypeScript

React + TypeScript 기반에서 상태 관리 / 커스텀 훅 / 아키텍처 설계 를
종합적으로 경험하기 위해 제작했습니다.

## 🌐 배포 주소

Vercel 배포 링크

## 🎯 프로젝트 목적과 의도

1. **React + TS 기반 실전 아키텍처 경험**
2. 컴포넌트/훅/타입 레이어를 명확히 분리하여 유지보수성 확보
3. Motion 기반 고급 UI/UX 경험
4. 위에서 아래까지(레이아웃 → UI → 기능 → 도메인 로직) 플로우 구성

단순 CRUD를 넘어서,
**“하나의 작은 웹앱”을 혼자서 처음부터 끝까지 설계하는 경험**을 목표로 했습니다.

## 🚀 주요 기능

### ✔ 기본 기능

- Todo 추가 / 삭제 / 완료 체크
- Enter 입력 및 자동 포커스
- 완료 시 체크박스 표시
- 필터링 (전체 / 미완료 / 완료)
- 로컬스토리지 저장

### ✔ 고급 기능

- **드래그 앤 드롭 정렬 (Framer Motion Reorder.Group / Reorder.Item)**
- **Undo 기능 (마지막 삭제 항목 복원)**
- **검색(SearchBar) 기능**
- **StatsBar: 전체/완료 개수 표시**
- **Alert/Confirm Modal 시스템**
- **로딩 UI: Spinner / LoadingDots**
- **TodayLabel: 오늘 날짜 자동 표시**
- **ClickGuard로 모달 외부 클릭 감지**

## 🧱 기술 스택

- React 18
- TypeScript
- Vite
- Framer Motion (Reorder 기반 Drag & Drop)
- Custom Hooks (useTodo, useTodoItem, useLocalStorage, useAlert 등)
- Tailwind CSS

## 📁 폴더 구조

```sql
src/
 ┣ components/
 ┃ ┣ layout/
 ┃ ┃ ┗ Index.tsx
 ┃ ┣ todo/
 ┃ ┃ ┣ FilterBtn.tsx
 ┃ ┃ ┣ SearchBar.tsx
 ┃ ┃ ┣ StatsBar.tsx
 ┃ ┃ ┣ TodayLabel.tsx
 ┃ ┃ ┣ TodoInput.tsx
 ┃ ┃ ┣ TodoItem.tsx
 ┃ ┃ ┣ TodoList.tsx
 ┃ ┃ ┗ UndoBar.tsx
 ┃ ┣ ui/
 ┃ ┃ ┣ icons/
 ┃ ┃ ┃ ┣ CancelIcon.tsx
 ┃ ┃ ┃ ┣ SearchIcon.tsx
 ┃ ┃ ┃ ┗ UndoIcon.tsx
 ┃ ┃ ┗ Modal/
 ┃ ┃ ┃ ┣ LoadingDots.tsx
 ┃ ┃ ┃ ┗ Spinner.tsx
 ┣ hooks/
 ┃ ┣ useAlert.ts
 ┃ ┣ useAutoFocus.ts
 ┃ ┣ useClickGuard.ts
 ┃ ┣ useLocalStorage.ts
 ┃ ┣ useTodo.ts
 ┃ ┗ useTodoItem.ts
 ┣ types/
 ┃ ┣ filter.ts
 ┃ ┣ modal.ts
 ┃ ┣ props.ts
 ┃ ┗ todo.ts
 ┣ App.tsx
 ┣ index.css
 ┗ main.tsx
```

## 🔧 주요 로직 소개

### ✔ `useTodo` — Todo 전체 비즈니스 로직

- Todo 추가 / 삭제 / 토글
- Drag & Drop 시 순서 업데이트
- Undo 기능
- 로컬스토리지 자동 동기화
- 필터링 및 검색 처리

### ✔ `useTodoItem` — 단일 Todo 관련 로직

- 체크박스 토글
- 삭제 애니메이션 (fade-out)
- 할 일 수정 기능

### ✔ Drag & Drop (Framer Motion)

- Reorder.Group + Reorder.Item
- 자연스러운 이동 + transition 세팅
- 순서 변경 시 storage와 즉시 sync

### ✔ UI 컴포넌트

- Spinner, LoadingDots
- Modal
- Custom Icons
- UndoBar, StatsBar, TodayLabel 등 UI 요소 분리

## 📊 결과 및 성과

| 항목           | 수치                                                    |
| -------------- | ------------------------------------------------------- |
| 총 컴포넌트 수 | **21개**                                                |
| 커스텀 훅 개수 | **6개**                                                 |
| 타입 파일 수   | **4개**                                                 |
| 폴더 개편 횟수 | **2회**                                                 |
| UX 개선 요소   | **7개 (search, stats, modal, undo, drag, fade-out 등)** |
| 기능 확장률    | 기본 Todo 대비 **400% 이상 기능 확장**                  |

## 💡 배운 점 & 인사이트

- 파일/폴더 구조가 커질수록 책임 분리가 얼마나 중요한지 체감
- 커스텀 훅으로 비즈니스 로직을 모으니 유지보수가 엄청 쉬워짐
- Framer Motion 기반 Drag & Drop이 DOM 기반 DnD보다 훨씬 안정적인 경험 제공
- 타입을 세분화(filter, modal, props 등)하면 컴파일 오류로 많은 실수를 예방 가능
- UI/UX는 “기능”보다 중요할 수 있다는 점을 깨달음

## 🔭 향후 계획

- 다크 모드 지원
- 모바일 반응형 지원
- 전역 상태 (Zustand or Jotai) 적용
- 테스트 코드 (React Testing Library) 도입
- 백엔드 연결 버전 제작 (Express or Supabase)

## 📚 참고 자료

- React 공식 문서
- TypeScript Handbook
- Framer Motion Reorder Docs
- LocalStorage MDN Docs
