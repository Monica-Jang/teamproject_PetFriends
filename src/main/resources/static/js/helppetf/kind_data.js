/**
 * 각 동물 종류에 대한 세부 품종의 코드를 저장한다.
 * export 하여 adoption_main.js에서 사용함.
 */
 

export const kindOptions = {
	417000: [ // 강아지
		{ value: "any", text: "강아지" },
		{ value: "000054", text: "골든 리트리버" },
		{ value: "000056", text: "그레이 하운드" },
		{ value: "000055", text: "그레이트 덴" },
		{ value: "000118", text: "그레이트 피레니즈" },
		{ value: "000115", text: "기타" },
		{ value: "000037", text: "꼬똥 드 뚤레아" },
		{ value: "000081", text: "네오폴리탄 마스티프" },
		{ value: "000204", text: "노르포크 테리어" },
		{ value: "000083", text: "노리치 테리어" },
		{ value: "00216", text: "노퍽 테리어" },
		{ value: "000082", text: "뉴펀들랜드" },
		{ value: "000038", text: "닥스훈트" },
		{ value: "000039", text: "달마시안" },
		{ value: "000040", text: "댄디 딘몬트 테리어" },
		{ value: "000043", text: "도고 까니리오" },
		{ value: "000042", text: "도고 아르젠티노" },
		{ value: "000153", text: "도고 아르젠티노" },
		{ value: "000041", text: "도베르만" },
		{ value: "000120", text: "도사" },
		{ value: "000219", text: "도사 믹스견" },
		{ value: "000155", text: "동경견" },
		{ value: "000069", text: "라브라도 리트리버" },
		{ value: "000071", text: "라사 압소" },
		{ value: "000142", text: "라이카" },
		{ value: "000093", text: "래빗 닥스훈드" },
		{ value: "000167", text: "랫 테리어" },
		{ value: "000070", text: "레이크랜드 테리어" },
		{ value: "000166", text: "로디지안 리즈백" },
		{ value: "000094", text: "로트와일러" },
		{ value: "000121", text: "로트와일러" },
		{ value: "000223", text: "로트와일러 믹스견" },
		{ value: "000152", text: "마리노이즈" },
		{ value: "000073", text: "마스티프" },
		{ value: "000146", text: "말라뮤트" },
		{ value: "000072", text: "말티즈" },
		{ value: "000159", text: "맨체스터테리어" },
		{ value: "000076", text: "미니어쳐 닥스훈트" },
		{ value: "000075", text: "미니어쳐 불 테리어" },
		{ value: "000079", text: "미니어쳐 슈나우저" },
		{ value: "000078", text: "미니어쳐 푸들" },
		{ value: "000077", text: "미니어쳐 핀셔" },
		{ value: "000074", text: "미디엄 푸들" },
		{ value: "000080", text: "미텔 스피츠" },
		{ value: "000114", text: "믹스견" },
		{ value: "000133", text: "바센지" },
		{ value: "000012", text: "바셋 하운드" },
		{ value: "000017", text: "버니즈 마운틴 독" },
		{ value: "000015", text: "베들링턴 테리어" },
		{ value: "000164", text: "벨기에 그로넨달" },
		{ value: "000157", text: "벨기에 쉽독" },
		{ value: "000148", text: "벨기에 테뷰런" },
		{ value: "000016", text: "벨지안 셰퍼드 독" },
		{ value: "000020", text: "보더 콜리" },
		{ value: "000021", text: "보르조이" },
		{ value: "000022", text: "보스턴 테리어" },
		{ value: "000024", text: "복서" },
		{ value: "000208", text: "볼로네즈" },
		{ value: "000023", text: "부비에 데 플랑드르" },
		{ value: "000026", text: "불 테리어" },
		{ value: "000027", text: "불독" },
		{ value: "000169", text: "브뤼셀그리펀" },
		{ value: "000025", text: "브리타니 스파니엘" },
		{ value: "000019", text: "블랙 테리어" },
		{ value: "000013", text: "비글" },
		{ value: "000018", text: "비숑 프리제" },
		{ value: "000014", text: "비어디드 콜리" },
		{ value: "000162", text: "비즐라" },
		{ value: "000085", text: "빠삐용" },
		{ value: "000096", text: "사모예드" },
		{ value: "000095", text: "살루키" },
		{ value: "000001", text: "삽살개" },
		{ value: "000034", text: "샤페이" },
		{ value: "000104", text: "세인트 버나드" },
		{ value: "000031", text: "센트럴 아시안 오브차카" },
		{ value: "000099", text: "셔틀랜드 쉽독" },
		{ value: "000122", text: "셰퍼드" },
		{ value: "000123", text: "슈나우져" },
		{ value: "000097", text: "스코티쉬 테리어" },
		{ value: "000132", text: "스코티시 디어하운드" },
		{ value: "000154", text: "스태퍼드셔 불 테리어" },
		{ value: "000222", text: "스태퍼드셔 불 테리어 믹스견" },
		{ value: "000105", text: "스탠다드 푸들" },
		{ value: "000124", text: "스피츠" },
		{ value: "000100", text: "시바" },
		{ value: "000103", text: "시베리안 허스키" },
		{ value: "000151", text: "시베리안라이카" },
		{ value: "000139", text: "시잉프랑세즈" },
		{ value: "000101", text: "시츄" },
		{ value: "000102", text: "시코쿠" },
		{ value: "000098", text: "실리햄 테리어" },
		{ value: "000136", text: "실키테리어" },
		{ value: "000202", text: "아나톨리안 셰퍼드" },
		{ value: "000160", text: "아메리칸 불독" },
		{ value: "000203", text: "아메리칸 스태퍼드셔 테리어" },
		{ value: "000221", text: "아메리칸 스태퍼드셔 테리어 믹스견" },
		{ value: "000008", text: "아메리칸 아키다" },
		{ value: "000131", text: "아메리칸 에스키모" },
		{ value: "000009", text: "아메리칸 코카 스파니엘" },
		{ value: "000119", text: "아메리칸 핏불 테리어" },
		{ value: "000220", text: "아메리칸 핏불 테리어 믹스견" },
		{ value: "000150", text: "아메리칸불리" },
		{ value: "000210", text: "아메리칸토이테리어" },
		{ value: "000011", text: "아프간 하운드" },
		{ value: "000010", text: "아키다" },
		{ value: "000106", text: "아이리쉬 세터" },
		{ value: "000035", text: "아이리쉬 울프 하운드" },
		{ value: "000030", text: "아이리쉬테리어" },
		{ value: "000033", text: "아펜핀셔" },
		{ value: "000004", text: "알라스칸 맬러뮤트" },
		{ value: "000229", text: "알래스칸 클리카이" },
		{ value: "000002", text: "애프가니탄 하운드" },
		{ value: "000164", text: "앵글로" },
		{ value: "000005", text: "에어데일 테리어" },
		{ value: "000228", text: "에스트렐라 마운틴 독" },
		{ value: "000168", text: "에스키모" },
		{ value: "000006", text: "에스파뇨레" },
		{ value: "000003", text: "엉글리쉬 불 테리어" },
		{ value: "000029", text: "엉글리쉬 콕 스파니엘" },
		{ value: "000137", text: "엉글리쉬 불도그" },
		{ value: "000141", text: "엉글리쉬시각" },
		{ value: "000007", text: "와이머리너" },
		{ value: "000148", text: "와이어 폭스 테리어" },
		{ value: "000028", text: "와이어헤어 테리어" },
		{ value: "000058", text: "웨스트 하일랜드 테리어" },
		{ value: "000067", text: "웨일스 스프링어 스파니엘" },
		{ value: "000107", text: "웨스트 하일랜드 화이트 테리어" },
		{ value: "000032", text: "웰시코기" },
		{ value: "000059", text: "웰시테리어" },
		{ value: "000061", text: "웰시스프링어 스파니엘" },
		{ value: "000056", text: "요크셔 테리어" },
		{ value: "000011", text: "유로피안 트레이닝 셰퍼드" },
		{ value: "000061", text: "이탈리안 그레이 하운드" },
		{ value: "000154", text: "잉글리쉬 불 테리어" },
		{ value: "000001", text: "잉글리쉬 마스티프" },
		{ value: "000028", text: "잉글리쉬 코커 스파니엘" },
		{ value: "000045", text: "잉글리쉬 포인터" },
		{ value: "000053", text: "자이언트 슈나우져" },
		{ value: "000062", text: "재패니즈 스피츠" },
		{ value: "000061", text: "잭 러셀 테리어" },
		{ value: "000052", text: "저먼 셰퍼드 독" },
		{ value: "000165", text: "저먼 와이어헤어드 포인터" },
		{ value: "000051", text: "저먼 포인터" },
		{ value: "215", text: "저먼 헌팅 테리어" },
		{ value: "000156", text: "제주개" },
		{ value: "000129", text: "제페니즈칭" },
		{ value: "000067", text: "진도견" },
		{ value: "000035", text: "차우차우" },
		{ value: "000033", text: "차이니즈 크레스티드 독" },
		{ value: "000032", text: "치와와" },
		{ value: "000028", text: "카네 코르소" },
		{ value: "000158", text: "카레리안 베어독" },
		{ value: "000144", text: "카이훗" },
		{ value: "000030", text: "캐벌리어 킹 찰스 스파니엘" },
		{ value: "000029", text: "케니스펜더" },
		{ value: "000064", text: "케리 블루 테리어" },
		{ value: "000207", text: "케언 테리어" },
		{ value: "000002", text: "코리아 트라이 하운드" },
		{ value: "000068", text: "코리안 마스티프" },
		{ value: "000125", text: "코카 스파니엘" },
		{ value: "000141", text: "코카 푸" },
		{ value: "000145", text: "코카시안오브차카" },
		{ value: "000036", text: "콜리" },
		{ value: "000066", text: "클라인스피츠" },
		{ value: "000065", text: "키슈" },
		{ value: "000063", text: "키스 훈드" },
		{ value: "000140", text: "토이 맨체스터 테리어" },
		{ value: "000107", text: "토이 푸들" },
		{ value: "000106", text: "티베탄 마스티프" },
		{ value: "000209", text: "파라오 하운드" },
		{ value: "000086", text: "파슨 러셀 테리어" },
		{ value: "000088", text: "팔렌" },
		{ value: "000090", text: "퍼그" },
		{ value: "000087", text: "페키니즈" },
		{ value: "000138", text: "페터데일테리어" },
		{ value: "000089", text: "포메라니안" },
		{ value: "000126", text: "포인터" },
		{ value: "000127", text: "폭스테리어" },
		{ value: "000128", text: "푸들" },
		{ value: "000091", text: "풀리" },
		{ value: "000003", text: "풍산견" },
		{ value: "000161", text: "프레사까나리오" },
		{ value: "000050", text: "프렌치 불독" },
		{ value: "000168", text: "프렌치 브리타니" },
		{ value: "000049", text: "플랫 코티드 리트리버" },
		{ value: "000147", text: "플롯하운드" },
		{ value: "000092", text: "피레니안 마운틴 독" },
		{ value: "000048", text: "필라 브라질레이로" },
		{ value: "000135", text: "핏불테리어" },
		{ value: "000224", text: "핏불테리어 믹스견" },
		{ value: "000206", text: "허배너스" },
		{ value: "000130", text: "화이트리트리버" },
		{ value: "000134", text: "화이트테리어" },
		{ value: "000111", text: "휘펫" }],
	422400: [ // 고양이
		// 동물 종류는 422400(고양이), any(품종에 대한 파라피터 전송 없음)으로
		// 데이터 요청을 보내면 이상하게 강아지에 대한 데이터가 섞여 들어온다.
		// (동물종류 "강아지" 선택시에는 문제없음)
		// 왜인지는 모르겠으나 문제가 있으니 "any"를 주석처리 해두고
		// 기본 선택값을 "한국 고양이"로 만들어 두었다.
		// { value: "any", text: "고양이" }, 
		{ value: "000200", text: "한국 고양이" },
		{ value: "000201", text: "고양이" },
		{ value: "000201", text: "기타" },
		{ value: "000170", text: "노르웨이 숲" },
		{ value: "000218", text: "니벨룽" },
		{ value: "000171", text: "데본 렉스" },
		{ value: "000172", text: "러시안 블루" },
		{ value: "00213", text: "레그돌" },
		{ value: "000173", text: "레그돌-라가머핀" },
		{ value: "000174", text: "맹크스" },
		{ value: "000175", text: "먼치킨" },
		{ value: "000176", text: "메인쿤" },
		{ value: "000212", text: "믹스묘" },
		{ value: "000177", text: "발리네즈" },
		{ value: "000178", text: "버만" },
		{ value: "000179", text: "벵갈" },
		{ value: "000180", text: "봄베이" },
		{ value: "000216", text: "브리티쉬롱헤어" },
		{ value: "000181", text: "브리티시 쇼트헤어" },
		{ value: "000182", text: "사바나캣" },
		{ value: "000183", text: "샤트룩스" },
		{ value: "000184", text: "샴" },
		{ value: "000185", text: "셀커크 렉스" },
		{ value: "000186", text: "소말리" },
		{ value: "000187", text: "스노우 슈" },
		{ value: "000188", text: "스코티시폴드" },
		{ value: "000189", text: "스핑크스" },
		{ value: "000190", text: "시베리안 포레스트" },
		{ value: "000191", text: "싱가퓨라" },
		{ value: "000192", text: "아메리칸 쇼트헤어" },
		{ value: "000193", text: "아비시니안" },
		{ value: "000194", text: "재패니즈밥테일" },
		{ value: "000195", text: "터키시 앙고라" },
		{ value: "000196", text: "통키니즈" },
		{ value: "00214", text: "페르시안" },
		{ value: "000197", text: "페르시안-페르시안 친칠라" },
		{ value: "000198", text: "하바나 브라운" },
		{ value: "000199", text: "하일랜드 폴드" }],
	429900: [ // 기타
		//{ value: "any", text: "기타 동물" }, 
		// 기타 동물에서 기타 동물이라는 분류가 존재하지만, 하나뿐이라 
		// 기존의 기본 선택(any)를 주석 처리 하고 value가 "000117"인 "기타 동물"을 자동적으로 선택되게 만들었다.
		{ value: "000117", text: "기타 동물" }
	]
};

//export default kindOptions;