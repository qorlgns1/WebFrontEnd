//숫자와 문자열을 더하기 때문에 앞의 숫자를 "100"으로 변환
document.writeln(100+ "200"+ "<br/>");
//문자열과 숫자는 곱하기가 안되는데 문자열을 100으로 변환해서 수행
document.writeln("100" * 200 + "<br/>");

//강제 형 변환
document.writeln(100+ Number("200")+ "<br/>");
var n = 100
//숫자를 문자열로 변환해서 사용
document.writeln(n.toString()+ 200+ "<br/>");
