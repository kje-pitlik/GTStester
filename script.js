// Wait for the page to load
window.onload = function() {
	// Get the file input element
	var fileInput = document.getElementById('jsonFile');

	// Add an event listener for when the user selects a file
	fileInput.addEventListener('change', function(e) {
		// Get the selected file
		var file = e.target.files[0];

		// Create a new FileReader object
		var reader = new FileReader();

		// Add an event listener for when the FileReader has loaded the file
		reader.addEventListener('load', function(e) {
			// Parse the JSON file
			var jsonData = JSON.parse(e.target.result);

			// Get the image grid table
			var imageGrid = document.getElementById('imageGrid');

// Populate the table headers from the JSON
imageGrid.rows[0].cells[1].textContent = jsonData.colHeader1;
imageGrid.rows[0].cells[2].textContent = jsonData.colHeader2;
imageGrid.rows[0].cells[3].textContent = jsonData.colHeader3;
imageGrid.rows[1].cells[0].textContent = jsonData.rowHeader1;
imageGrid.rows[2].cells[0].textContent = jsonData.rowHeader2;
imageGrid.rows[3].cells[0].textContent = jsonData.rowHeader3;


			// Populate the table with the images
			for (var i = 2; i <= 9; i++) {
				// Get the image URL
				var imageUrl = jsonData.puzzles[0].correctGridOrder[i-1].url;

				// Get the table cell to populate
				var rowIndex = Math.ceil(i / 3);
				var colIndex = (i % 3 == 0) ? 3 : i % 3;
				var cell = imageGrid.rows[rowIndex].cells[colIndex];

				// Create a new image element and set its source to the URL
				var image = new Image();
				image.src = imageUrl;
				image.style.maxWidth = '25%';
				image.style.height = 'auto';

				// Add the image to the table cell
				cell.appendChild(image);
			}
		});

		// Read the selected file as text
		reader.readAsText(file);
	});
};
