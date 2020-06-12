var apikey = ""
// 출력 영역 저장
var disp = null;
var pageno = 1;

$(function() {
	// 출력 영역 찾기
	disp = document.getElementById("disp");
	//검색 함수 호출
	search();
	//스크롤 하는 위치가 문서의 가장 하단이라면
	$(window).scroll(function(){
		//스크롤 위치
		var scrollHeight = $(window).scrollTop() + $(window).height();
		//현재 출력 중인 문서 높이
		var documentHeight = $(document).height();

		// 스크롤의 높이와 문서의 높이가 같을 때
		if (scrollHeight == documentHeight) {
			search(pageno+1)
		}

	});
	
	$('#searchbtn').click(function(){
		search();
	});
	
	

});

// 페이지 번호를 매개변수로 받아서 페이지 번호에 해당하는 데이터를 찾아와서 disp 영역에 출력하는 함수
function search(no) {
	// 페이지 번호를 설정
	if (no == undefined) {
		pageno = 1;
	} else {
		pageno = no;
	}

	// ajax 요청
	$.ajax({
		url : "https://dapi.kakao.com/v2/search/vclip",
		headers : {Authorization : 'KakaoAK 2f24472d352fc42d5294e927030552b6'},
		type : "get",
		data : {
			query : 
				//document.getElementById("clipname").value,
				$("#clipname").val(),
			size : 30,
			page : pageno
		},
		success : function(result){
			//검색 버튼 눌렀을 때는 지우고 쓰기
			if(pageno == 1){
				disp.innerHTML = '';
			}
			//데이터 출력
			var documents = result.documents;
			for (var i = 0; i < documents.length; i++) {
				var d = documents[i];
				disp.innerHTML += 
					'<p><a href="' + d.url +'">' + d.title + '</a></p>';
			}
		}

	});
}
