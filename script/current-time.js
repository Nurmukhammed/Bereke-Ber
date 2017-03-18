var today = new Date();
var month = today.getMonth() + 1;
var date = today.getDate();
var year = today.getFullYear();

function addZero (x) {
	if (x < 10) {
		return '0' + x;
	}
	return x;
}

document.getElementById('show-date').innerHTML =
' на ' + addZero(date) + '.' + addZero(month) + '.' + year;
