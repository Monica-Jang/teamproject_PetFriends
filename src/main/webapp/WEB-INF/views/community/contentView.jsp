<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>contentView</title>
<jsp:include page="/WEB-INF/views/include_jsp/include_css_js.jsp" />
<link rel="stylesheet"
	href="/static/css/community/community_contentview.css">
<script>
	   function toggleComments() {
	        var commentsSection = document.getElementById("commentsSection");
	        commentsSection.style.display = commentsSection.style.display === "none" || commentsSection.style.display === "" ? "block" : "none";
	    }

	    function toggleReplyForm(commentId) {
	        var isLoggedIn = "${sessionScope.loginUser != null ? 'true' : 'false'}";
	        
	        if (isLoggedIn === "false") { // 'true' 또는 'false' 문자열로 비교
	            alert("로그인이 필요합니다.");
	            return;
	        }

	        var replyForm = document.getElementById("replyForm-" + commentId);
	        replyForm.style.display = replyForm.style.display === "none" || replyForm.style.display === "" ? "block" : "none";
	    }

	    function checkLoginAndFocus(textarea) {
	        var isLoggedIn = "${sessionScope.loginUser != null ? 'true' : 'false'}";

	        if (isLoggedIn === "false") {
	            alert("로그인이 필요합니다.");
	            textarea.blur();
	        } else {
	            textarea.focus();
	        }
	    }

	    function initializeLikeButton() {
	        <!--var isliked = "${isliked}"; // 서버에서 변환된 'isliked' 값-->
	        var likeButton = document.getElementById("like-button");
	        likeButton.innerHTML = isliked === 1 ? "❤️" : "🤍";
	    }

	    function updateLike() {
	        var isLoggedIn = "${sessionScope.loginUser != null ? 'true' : 'false'}";

	        if (isLoggedIn === "false") {
	            alert("로그인이 필요합니다.");
	            return;
	        }

	        var memCode = '${sessionScope.loginUser.mem_code}';
	        var boardNo = '${contentView.board_no}';
	        var memName = '${sessionScope.loginUser.mem_nick}';

	        var xhr = new XMLHttpRequest();
	        xhr.open("POST", "/community/updateLike", true);
	        xhr.setRequestHeader("Content-Type", "application/json");
	        xhr.onreadystatechange = function () {
	            if (xhr.readyState === 4 && xhr.status === 200) {
	                var response = JSON.parse(xhr.responseText);
	                var likes = response.likes;
	                var likesCount = response.likesCount;

	                document.getElementById("likes-count").innerText = likesCount;
	                document.getElementById("like-button").innerHTML = likes ? "❤️" : "🤍";
	            }
	        };
	        xhr.send(JSON.stringify({ mem_code: memCode, board_no: boardNo, mem_nick: memName }));
	    }

	    window.onload = initializeLikeButton;
	</script>



</head>
<body>

	<jsp:include page="/WEB-INF/views/include_jsp/header.jsp" />

	<div class="container">

		
		<h1 class="post-title">${contentView.board_title}</h1>
		<div class="post-header">
			<img src="/static/Images/pet/${contentView.pet_img}" alt="프로필 이미지"
				class="profile-image" /> <span class="user-name">${contentView.user_id}</span>
			<span class="post-time">${contentView.board_created}</span>
		</div>
		<hr />
		<div class="post-content">${contentView.board_content}</div>
		<hr />
		<div class="post-footer">
			<!-- 왼쪽 끝에 위치할 댓글 및 좋아요 버튼 -->
			<div class="left-buttons">
				
					<span id="likes-count">${contentView.board_likes}</span>
				
					<!-- 좋아요 버튼 -->
					            <button id="like-button" onclick="updateLike()">
					                <c:choose>
					                    <c:when test="${isliked == 1}">
					                        ❤️ <!-- 채워진 하트: 이미 좋아요를 누른 경우 -->
					                    </c:when>
					                    <c:otherwise>
					                        🤍 <!-- 빈 하트: 아직 좋아요를 누르지 않은 경우 -->
					                    </c:otherwise>
					                </c:choose>
					            </button>
				<span>💬	
					<button onclick="toggleComments()" class="main_comment-button">댓글</button>
					${contentView.board_comment_count}
				</span>
			</div>
			<div class="edit-delete-buttons">
				<c:if test="${sessionScope.loginUser ne null}">
					<c:if test="${sessionScope.loginUser.mem_code eq contentView.mem_code}">
						<!-- 오른쪽 끝에 위치할 수정 및 삭제 버튼 -->
						<form action="/community/modifyView" method="get">
							<input type="hidden" name="board_no"
								value="${contentView.board_no}">
							<button type="submit" class="main_edit-button">수정</button>
						</form>

						<form action="/community/delete" method="post"
							onsubmit="return confirm('정말 삭제하시겠습니까?')">
							<input type="hidden" name="board_no"
								value="${contentView.board_no}">
							<button type="submit" class="main_delete-button">삭제</button>
						</form>
					</c:if>
				</c:if>
			</div>
		</div>
		<!-- 댓글 목록 영역 -->

		<div id="commentsSection" class="comment-section"
			style="display: none;">
			<h3>댓글 목록</h3>
			 


			<c:forEach var="comment" items="${commentList}">
				<div class="comment"
					style="padding-left: ${comment.comment_order_no * 20}px;">
					<img src="/static/Images/pet/${comment.pet_img}"
													alt="Profile Image" class="profile-image">
					<span class="user-name">${comment.user_id}</span>: <span
						class="comment-content preformatted-text">${fn:escapeXml(comment.comment_content)}</span>
					<span class="comment-time">${comment.created_date}</span>

					<div class="button-group">
						<button onclick="toggleReplyForm(${comment.comment_no})">댓글</button>

						
						<form action="/community/replyDelete" method="post"
							onsubmit="return confirm('정말 삭제하시겠습니까?')">
							<input type="hidden" name="comment_no"
								value="${comment.comment_no}"> <input type="hidden"
								name="board_no" value="${contentView.board_no}"> <input
								type="hidden" name="parent_comment_no"
								value="${comment.parent_comment_no}"> <input
								type="hidden" name="comment_level"
								value="${comment.comment_level}"> <input type="hidden"
								name="comment_order_no" value="${comment.comment_order_no}">
							 <c:if test="${sessionScope.loginUser.mem_nick eq comment.user_id}">
								<button type="submit" class="delete-button">삭제</button>
							</c:if>
						</form>
						
					</div>
					<!-- 대댓글 입력 폼 -->
					<div id="replyForm-${comment.comment_no}" class="reply-section"
						style="display: none;">
						<form action="/community/commentReply" method="post" >
							<input type="hidden" name="mem_code" value="${sessionScope.loginUser.mem_code}">
							<input type="hidden" name="mem_nick" value="${sessionScope.loginUser.mem_nick}">
							<input type="hidden" name="board_no" value="${contentView.board_no}"> 
								<input type="hidden" name="comment_no" value="${comment.comment_no}"> 
								<input type="hidden" name="parent_comment_no" value="${comment.parent_comment_no}"> 
								<input type="hidden" name="comment_level" value="${comment.comment_level}"> 
								<input type="hidden" name="comment_order_no" value="${comment.comment_order_no}">
							
							<textarea name="comment_content" placeholder="대댓글을 입력하세요..."
								required></textarea>
							<button type="submit" >댓글 달기</button>
						</form>
					</div>

					<!-- 대댓글 리스트 -->
					<c:forEach var="commentReply" items="${commentReplyList}"
						varStatus="status">
						<c:if
							test="${commentReply.parent_comment_no == comment.comment_no}">
							<div class="commentReply"
								style="padding-left: ${(commentReply.comment_order_no) * 50}px;">
									
									<img src="/static/Images/pet/${commentReply.pet_img}"
								alt="Profile Image" class="profile-image">
								<span class="user-name">${commentReply.user_id}</span>:  <span
									class="commentReply-content preformatted-text">${fn:escapeXml(commentReply.comment_content)}</span>
								<span class="commentReply-time">${commentReply.created_date}</span>

								<div class="button-group">
									<button onclick="toggleReplyForm(${commentReply.comment_no})">댓글</button>

									<!-- 대댓글 삭제 버튼: 현재 로그인한 사용자와 대댓글 작성자가 같을 경우만 보이기 -->
									<c:if test="${sessionScope.loginUser.mem_nick == commentReply.user_id}">
									<form action="/community/replyDelete" method="post"
										onsubmit="return confirm('정말 삭제하시겠습니까?')">
										<input type="hidden" name="mem_nick" value="${sessionScope.loginUser.mem_nick}">
										<input type="hidden" name="mem_code" value="${sessionScope.loginUser.mem_code}">
										<input type="hidden" name="comment_no"
											value="${commentReply.comment_no}"> <input
											type="hidden" name="board_no" value="${contentView.board_no}">
										<input type="hidden" name="parent_comment_no"
											value="${commentReply.parent_comment_no}"> <input
											type="hidden" name="comment_level"
											value="${commentReply.comment_level}"> <input
											type="hidden" name="comment_order_no"
											value="${commentReply.comment_order_no}">
										<button type="submit" class="delete-button">삭제</button>
									</form>
								 </c:if> 
								</div>
								<div id="replyForm-${commentReply.comment_no}"
									class="reply-section" style="display: none;">
									<form action="/community/commentReply" method="post">
									<input type="hidden" name="mem_nick" value="${sessionScope.loginUser.mem_nick}">
									<input type="hidden" name="mem_code" value="${sessionScope.loginUser.mem_code}">
										<input type="hidden" name="board_no"
											value="${contentView.board_no}"> <input type="hidden"
											name="comment_no" value="${commentReply.comment_no}">
										<input type="hidden" name="parent_comment_no"
											value="${commentReply.parent_comment_no}"> <input
											type="hidden" name="comment_level"
											value="${commentReply.comment_level}"> <input
											type="hidden" name="comment_order_no"
											value="${commentReply.comment_order_no}">
										<textarea name="comment_content" placeholder="대댓글을 입력하세요..."
											required></textarea>
										<button type="submit">댓글 달기</button>
									</form>
								</div>
							</div>
						</c:if>
					</c:forEach>
				</div>
			</c:forEach>

			<!-- 댓글 작성 폼 -->
			<div class="comment-input">
				<form action="/community/comment" method="post" >
					
					<input type="hidden" name="mem_code" value="${sessionScope.loginUser.mem_code}">
					<input type="hidden" name="mem_nick" value="${sessionScope.loginUser.mem_nick}">
					<input type="hidden" name="board_no"
						value="${contentView.board_no}">
					
					<c:if test="${sessionScope.loginUser ne null}">
					<textarea name="comment_content" placeholder="댓글을 입력하세요..."
						required onclick="checkLoginAndFocus(this)"></textarea>	
					<button type="submit" >댓글 달기</button>					
					</c:if>
					
					<c:if test="${sessionScope.loginUser eq null}">				
					<textarea name="comment_content" placeholder="로그인이 필요합니다."
						required onclick="checkLoginAndFocus(this)"></textarea>	
					</c:if>				
				
				
				</form>
			</div>
		</div>
	</div>

	<footer>
		<jsp:include page="/WEB-INF/views/include_jsp/footer.jsp" />
	</footer>


</body>
</html>