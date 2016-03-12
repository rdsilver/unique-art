var saveButton = {
	onSaveButtonClick: function() {
		$('#save_button').click(saveButton.saveArt);
	},

	saveArt: function(event) {

    var artStringArr = [];
    _.each(shapeList, shape => {
      artStringArr.push(`${shape.x},${shape.y},${shape.shapeType},${shape.color.levels}`)
    })

    $.post('../artworks',
       {
         'artString': JSON.stringify(artStringArr)
       },
       function (response, status) {
         alert(response.status);
       }
    );
	},

  onUpdateButtonClick: function() {
		$('#update_button').click(saveButton.updateArt);
	},

  updateArt: function(event) {

    var artStringArr = [];
    var dataId = $('#edit').data('id');

    _.each(shapeList, shape => {
      artStringArr.push(`${shape.x},${shape.y},${shape.shapeType},${shape.color.levels}`)
    })

    $.ajax({
      url: '/artworks/' + dataId,
      type: 'PUT',
      data: {
             'artString': JSON.stringify(artStringArr),
             'id': dataId
            },
      success: function(data) {
        alert('Updated!');
      }
    });
	}

}

$(function() {
  saveButton.onSaveButtonClick();
  saveButton.onUpdateButtonClick();
});