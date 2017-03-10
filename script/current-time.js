var today = new Date();
var month = today.getMonth() + 1;
var date = today.getDate();
var year = today.getFullYear();

function currentTime (date, month) {
	if (month < 10) {
	month = '0' + month;
	return month;
	}
	if (month == 10) {
	return month;
	}
	if (date < 10) {
	date = '0' + date;
	return date;
	}
	if (date == 10) {
	return date;
	}
}

document.getElementById('show-date').innerHTML =
' на ' + currentTime(date) + '.' + currentTime(month) + '.' + year;
