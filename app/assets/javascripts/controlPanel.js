var controlPanel = {
	onControlPanelClick: function() {
		$('#control-panel div').click(controlPanel.changeState);
	},

	changeState: function(event) {
		if(!$(this).hasClass('active')) {
			$('#control-panel div').removeClass('active');
			$(this).addClass('active');
			state = $(this).data('state');
		}
	},
}

$(function() {
	controlPanel.onControlPanelClick();
});