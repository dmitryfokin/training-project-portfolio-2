$(document).ready(function () {

	$('#project-cards-list').mixItUp()

	$('.form-callback__input, .form-callback__textarea').focus(function (e) {
		e.preventDefault()

		$(this).parent().children(".fake-placeholder").addClass('active')
	})

	$('.form-callback__input, .form-callback__textarea').blur(function (e) {
		e.preventDefault()

		$(this).parent().children(".fake-placeholder").removeClass('active')
	})
})