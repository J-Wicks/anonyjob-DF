const $ = require ('jquery');
const bluebird = require('bluebird');


for(let i = 0; i <= 50; i++){
$('.yeardial').append($(`<option value=${i}> ${i} </option>`))	
}


$('form').submit( (event) => { 
	event.preventDefault();
	let [age, gender, race, orientation, yearsWork, yearsMgmt, yearsExec, writingSample, button] = $(event.target).children()
	$.post('/api', {
		age: $(age).val(),
		gender: $(gender).val(),
		race: $(race).val(),
		orientation: $(orientation).val(),
		yearsWork: $(yearsWork).val(),
		yearsMgmt: $(yearsMgmt).val(),
		yearsExec: $(yearsExec).val(),
		writingSample: $(writingSample).val()
	}, result => {
		console.log(result)
	})
})