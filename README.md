## asymetrix
![screencapture-asymetrix-vercel-app-2023-06-21-17_14_09](https://github.com/dongkyun2331/asymetrix/assets/119479530/89bf779e-289e-4f77-8039-dd77b605f4b3)

# BodyApp.jsx
상태(State) 설정: useState를 사용하여 상태 값을 설정하고 관리합니다. 예를 들어, number, rewards, locked, statistic, remainingTime, inputValue 등의 상태가 있습니다.

시간 관련 기능: moment 라이브러리를 사용하여 시간과 관련된 작업을 수행합니다. 특히, 남은 시간을 업데이트하는 데 사용됩니다.

애니메이션 효과: useEffect 훅을 이용하여 숫자, 잠긴 금액, 보상 및 통계와 관련된 값들을 일정 시간 동안 애니메이션화하여 부드럽게 변화하도록 합니다.

슬라이더 구현: react-slick 라이브러리를 사용하여 이미지 또는 콘텐츠를 슬라이드로 표시하는 컴포넌트를 생성합니다.

입력 관리 및 클릭 이벤트 핸들링: 사용자의 입력을 받아 상태를 업데이트하고, 버튼 클릭과 같은 이벤트에 대한 핸들러를 구현합니다.

화면 스타일링: CSS 파일을 통해 스타일을 지정하며, 일부 요소들은 동적으로 클래스를 토글하여 모달이나 다른 요소들을 표시하거나 가리도록 합니다.
