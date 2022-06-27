/**
 *  joinForm.js
 */

$(document).ready(function(){
	$('#id').focus();
	
	$('#hp1').on('keyup', function(){
		if($(this).val().length == 3){
			$('#hp2').focus();
		}
	})
	
	$('#hp2').on('keyup', function(){
		if($(this).val().length == 4){
			$('#hp3').focus();
		}
	})
	
	

	$(document).on('keydown',function(e){
		if(e.keyCode == 13) return false;
	});
	
	$('#newMemberForm').on('submit',function(){
		
		if($('#id').val()==""){
			alert("아이디를 입력하세요");
			$('#id').focus();
			return false;
		}
		
		
		var password = document.getElementById('password');
		var passwordCheck = document.getElementById('passwordCheck');
		
		if(password.value==""){
			alert("비밀번호를 입력하세요");
			$('#password').focus();
			return false;
		}
		
		if(password.value != passwordCheck.value){
			alert("비밀번호 확인이 일치하지 않습니다");
			passwordCheck.value = "";
			passwordCheck.focus();
			return false;
		}
		
		var email = document.getElementById('email1');
		
		if(email.value==""){
			alert("이메일을 입력하세요");
			$('#email1').focus();
			return false;
		}
		
		var chk = false;
		for(var i=0; i<newMemberForm.emailRcv.length; i++){
			if(newMemberForm.emailRcv[i].checked == true)
				chk = true;
		}
		
	
		if(chk == false) {
			alert("이메일 수신 여부를 선택하세요");
			return false;
		}
		
		var agreement1 = document.getElementById('agreement1');
		var agreement2 = document.getElementById('agreement2');
		
		if(agreement1.checked == false || agreement2.checked == false) {
			alert("모두 동의해야 합니다");
			return false;
		}
	});
});