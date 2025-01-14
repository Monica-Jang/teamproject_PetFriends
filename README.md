# project_Petfriend

### 실제 사이트인 '펫프렌즈' 기반의 펫 라이프 종합 쇼핑몰 커뮤니티   
****개발 기간**** : 2024.10.14 ~ 2024.11.21     
****개발 인원**** : 5명     
****담당 업무**** : Git 담당자     
****언어**** : JDK 11, HTML/CSS, JavaScript     
****프레임워크**** : Spring 5.3.24, Spring Boot 2.6.12, MyBatis 2.2.2     
****DataBase**** : Oracle 11g XE     


### <담당 세부기능>
#### 고객단 : 반려동물 관련 서비스 페이지  
#### 관리자단 : 게시물 관리, 예약 및 안내문 관리 페이지     

[시설찾기]   
1. 카카오맵API를 이용한 회원의 배송주소 기반 동물병원, 반려동물 동반 가능 시설 찾기
* 카테고리(병원, 시설)에 따른 검색결과를 지도 위의 마커와 리스트로 표현
2. 마커와 리스트를 클릭 시 로드뷰를 표시
* 주소의 좌표와 가장 가까운 로드뷰를 호출
3. 지정한 주소는 우편번호찾기 API를 통해 변경 가능
* 변경시 지도가 재구성되며 새로운 결과를 표시

[펫티쳐]  
1. 반려동물 관련 유튜브 영상 열람 
* 각종 필터링에 따른 결과를 표시
2. 유튜브 iframe API를 이용해 실제 유튜브의 영상을 스트리밍
* 관리자가 작성한 게시물이며 연결된 관리자 페이지에서 수정 및 게시 가능

[입양센터]  
1. 현재 보호중인 구조동물들의 목록 표시
* 공공데이터포털의 오픈API를 이용해 보호소에서 보호중인 동물들의 목록 표시
2. 각각 동물들의 세부정보 표시
* 지역, 동물종류, 성별 등의 정보와 보호중인 보호소의 지도 표시

[펫호텔]  
1. 펫 호텔링 서비스 예약
* 유저의 데이터베이스에 등록되어 있는 반려동물들의 정보를 불러와 사용가능
2. 다중 폼(form) 동시 제출
* 여러마리의 동물을 한번에 예약할 수 있음
3. 펫캠(CCTV열람) 서비스
* 연결된 CCTV 캠을 통한 영상 열람 가능
4. 연결된 관리자 페이지에서 소개, 안내 문구와 예약된 건들을 관리 
* 소개, 안내글의 수정, 예약건들의 상태 변경

---


 
