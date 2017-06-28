const $ = require('jquery');
const bluebird = require('bluebird');


for(let i = 0; i <= 50; i++){
$('.yeardial').append($(`<option value=${i}> ${i} </option>`))
}

$.get('/api/gender', result =>{
	result.forEach( gender => {
		$('#gender').append($(`<option value=${gender.name}> ${gender.name.replace(/_/g,' ')} </option>`))
	})
})

$.get('/api/race', result =>{
	result.forEach( race => {
		$('#race').append($(`<option value=${race.name}> ${race.name.replace(/_/g,' ')} </option>`))
	})
})

$.get('/api/orientation', result =>{
	result.forEach( orientation => {
		$('#orientation').append($(`<option value=${orientation.name}> ${orientation.name} </option>`))
	})
})

$('form').submit( (event) => {
	event.preventDefault();
	let [p1, age, p2, gender, p3, race, p4, orientation, p5, writingSample, button] = $(event.target).children()
	console.log($(event.target).children())
	$.post('/api', {
		age: $(age).val() || 0,
		gender: $(gender).val(),
		race: $(race).val(),
		orientation: $(orientation).val(),
		writingSample: $(writingSample).val()
	}, result => {
		console.log(result)

		$('#flash-message').text('Successfully Added - Thank You!')

		setTimeout( () => {
			location.reload()
		}, 3000)
	})
})
