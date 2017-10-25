$(document).ready(() => {
  $('#nav-dropdown').hide();
	$('.product-photo').show();
	$('.login-button').on('click', () => {
		$('.login-form').toggle();
	});
});