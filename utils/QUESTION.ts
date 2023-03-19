const FRONT_TECH_QUESTIONS = [
  "시간복잡도와 공간복잡도가 무엇인지 설명해주실 수 있을까요?",
  "스택, 큐에 대해 설명해주실 수 있을까요?",
  "배열, 링크드리스트를 비교하여 설명해주실 수 있을까요?",
  "CORS란 무엇이고 어떻게 허용할 수 있나요?",
  "사용자 패스워드를 전송하고 보관하는 방법을 설명해주실 수 있을까요?",
  "var, let, const 에 대해 설명해주실 수 있을까요?",
  "Promise란 무엇인지 설명해주실 수 있을까요?",
  "Hoisting이란 무엇인지 설명해주실 수 있을까요?",
  "async/await 이란 무엇인지 설명해주실 수 있을까요?",
  "개발자로서 본인의 장단점과 근거가 되는 경험을 말씀해주실 수 있을까요?(협업 능력 제외)",
  "Arrow Function 이란 무엇인지 설명해주실 수 있을까요?",
  "‘==’와 ‘===’ 연산자의 차이는 무엇인지 설명해주실 수 있을까요?",
  "Virtual DOM이란 무엇이고 Real DOM과의 차이는 무엇인가요?",
  "즐겨 보는 테크 유튜버나 뉴스레터가 있다면 알려주실 수 있을까요?",
  "useRef 에 대해 아는 만큼 설명해주실 수 있을까요?",
  "리액트 컴포넌트의 라이프사이클에 대해 설명해주실 수 있을까요?",
  "JSX란 무엇인가요?",
  "최근에 본 기술 아티클에 대해 설명해주실 수 있을까요?",
  "포트폴리오에서 시간복잡도를 낮춘 사례가 있다면 설명해주실 수 있을까요?",
  "세션과 쿠키를 비교하여 설명해주실 수 있을까요?",
  "브라우저에서 이용할 수 있는 스토리지는 무엇이 있는지 설명해주실 수 있을까요?",
  "가장 인상 깊게 읽었던 책과 그 이유에 대해 알려주실 수 있을까요?",
  "ContextAPI 란 무엇인가요?",
  "이분탐색이 무엇이고 시간복잡도는 어떻게 되며 그 이유는 무엇인가요?",
  "트리, 그래프를 비교하여 설명해주실 수 있을까요?",
  "HTTP에 비해 HTTPS가 더 안전한 원리를 설명해주실 수 있을까요?",
  "앞으로 3개월, 6개월, 1년 동안 어떤 것을 공부할 계획인지, 그리고 그러한 계획을 세운 이유는 무엇인지 알려주실 수 있을까요?",
  "삶에서 중요하게 생각하는 가치가 있다면 무엇인가요?",
  "TCP 3 way handshake란 무엇인지 설명해주실 수 있을까요?",
  "우리 회사에 지원한 동기를 말씀해주실 수 있을까요?",
  "TCP 와 UDP 를 비교하여 설명해주실 수 있을까요?",
  "Base64 인코딩이란 무엇인가요?",
  "프로세스와 스레드를 비교하여 설명해주실 수 있을까요?",
  "즐겁고 행복했던 경험을 하나 이야기해주실 수 있을까요?",
  "깊은 복사와 얕은 복사의 차이는 무엇이고 JS에서 각각을 구현하는 방법은 어떻게 되는지 설명해주실 수 있을까요?",
  "개발자가 되기로 한 이유에 대해 말씀해주실 수 있을까요?",
  "JS의 passed by value 와 passed by reference 에 대해 아는 만큼 설명해주실 수 있을까요?",
  "고차 함수란 무엇인지 설명해주실 수 있을까요?",
  "힘들고 쉽지 않았지만 극복한 경험을 하나 이야기해주실 수 있을까요?",
  "VanillaJS와 비교하여 리액트를 사용하는 이유에 대해 설명해주실 수 있을까요?",
  "상태의 불변성이 중요한 이유가 무엇인가요?",
  "Lazy loading과 Code splitting에 대해 아는 만큼 설명해주실 수 있을까요?",
  "Server Side Rendering, Client Side Rendering, Static Site Generation 의 장단점을 설명해주실 수 있을까요?",
  "Event bubbling 과 capturing 을 비교하여 설명해주실 수 있을까요?",
  "재미있게 공부한 알고리즘이 있다면 설명해주실 수 있을까요?",
  "https://naver.com을 주소창에 입력했을 때 일어나는 과정에 대해 아는 만큼 설명해주실 수 있을까요?",
  "상태관리의 대표적인 도구 하나와 그것의 원리에 대해 구체적으로 설명해주실 수 있을까요? 예를 들어 리덕스라면 리덕스가 무엇이고 어떻게 활용이 되는지, 어떤 흐름으로 데이터가 들어왔다가 나가는지, 데이터 흐름은 양방향인지 단방향인지, 어떤 함수가 데이터를 가져오게 해주는지 등을 언급해주시면 좋습니다.",
  "브라우저 렌더링 과정에 대해 아는 만큼 설명해주실 수 있을까요? 예를 들어 화면에서 DOM이 어떻게 결정되고, CSS는 어떻게 입혀지는지 등을 언급해주시면 좋습니다.",
  "Web Vital을 개선할 수 있는 방안에 대해 설명해주실 수 있을까요? 예를 들어 LCP, CLS, FID 각각의 개념, 진단법, 각 지표 개선에 효과적인 조치 방안을 언급해주시면 좋습니다.",
];

export default FRONT_TECH_QUESTIONS;
