/**
 * 
 */
 
 
 $(document).ready(function(){
		// 시작 시에 id에 포커스
		$('#id').focus();
			
			// 엔터키 눌렀을 때 무조건 submit되지 않도록
			// 문서 전체에 이벤트 처리
			// [Enter] 키의 아스키 코드 값 : 13
			$(document).on('keydown', function(e){
				if(e.keyCode == 13)return false;	
			});
		
		// newMemberForm의 submit 버튼 눌렀을 때
		$('#newMemberForm').on('submit', function(){
						
			// 아이디를 입력하지 않은 경우
			if($('#id').val() == ""){
				alert("아이디를 입력하세요.");
				$('#id').focus();
				return false; // 서버로 전송되지 않도록
			}
			
			// 비밀번호를 입력하지 않은 경우
			if($('#pwd').val() == ""){
				alert("비밀번호를 입력하세요.");
				$('#pwd').focus();
				return false; // 서버로 전송되지 않도록
			}
			
		});
		
		
		
}); // ready() 종료