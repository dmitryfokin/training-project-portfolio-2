$(document).ready(function () {

	// filter projects
	$('#project-cards-list').mixItUp()


	// form callback
	$('.form-callback__input, .form-callback__textarea').focus(function (e) {
		e.preventDefault()

		$(this).parent().children(".fake-placeholder").addClass('active')
	})

	$('.form-callback__input, .form-callback__textarea').blur(function (e) {
		e.preventDefault()
		if (!(this).value.trim()) {
			$(this).parent().children(".fake-placeholder").removeClass('active')
		}
	})
})