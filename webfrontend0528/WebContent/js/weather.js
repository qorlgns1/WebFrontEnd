//문서 구조를 파악하고 나면 - document.ready
$(function() {
	//요청 주소 만들기
	// API 요청 URL 변수
	var addr = 'http://api.openweathermap.org/data/2.5/weather?q=seoul&APPID=8cb79fa7fc8457f9fc0c7c59625471a1';
	// 로딩 이미지 표시
	$('#weather_info .load_img').show();

	//ajax 요청
	//url이 데이터를 가져올 주소
	//type은 요청 방식
	//data는 파라미터
	$.ajax({
		url : addr,
		type : 'get',
		data : {},
		success : function(result) {
			//데이터 확인
			//console.log(result);

			// 국가명, 일출/일몰
			var sys = result.sys;
			// 도시이름 정보 - 문자열
			var name = result.name;
			// 날씨 - 배열
			var weather = result.weather;
			// 온도 -객체
			var main = result.main;
			
			var country = sys.country;  	// 국가명
			var temp = main.temp; 			// 현재 온도
			var temp_min = main.temp_min; 	// 최저 온도
			var temp_max = main.temp_max; 	// 최고 온도
			
			var wmain = weather[0].main; 	// 구름 상태(Cloudiness)
			var wid = weather[0].id; 		// 날씨상태 id 코드
			var icon = weather[0].icon;		// 날씨 아이콘 정보

			// 날씨 아이콘
			var icon_url = 'http://openweathermap.org/img/w/' + icon;
			
			//데이터 출력
			//도시이름과 국가를 출력
			$('.city').html(name + "/" + country);
			//아이콘 출력
			$('.icon').html("<img src='" + icon_url + ".png'/>");
			//구름 상태 출력
			$('.w_id').html(wmain);
			//온도 출력
			$('.temp_min').html(parseInt(temp_min-273.15)  + '&deg;' + ' min');
			$('.temp_max').html(parseInt(temp_max-273.15)  + '&deg;' + ' max');
			$('.temp').html(parseInt((temp-32)/1.8) + '&deg;');
			// 데이터 로딩 후 로딩이미지 제거
			$('#weather_info .load_img').hide();
			
		}
	})
});