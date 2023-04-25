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
      
      // Get the puzzle object
      var puzzle = jsonData.puzzles[0];

      // Set the column headers
      document.getElementById('colHeader1').innerHTML = puzzle.oszlopFejlec1;
      document.getElementById('colHeader2').innerHTML = puzzle.oszlopFejlec2;
      document.getElementById('colHeader3').innerHTML = puzzle.oszlopFejlec3;

      // Set the row headers
      document.getElementById('rowHeader1').innerHTML = puzzle.sorFejlec1;
      document.getElementById('rowHeader2').innerHTML = puzzle.sorFejlec2;
      document.getElementById('rowHeader3').innerHTML = puzzle.sorFejlec3;

      // Set the images and placeholders in the table cells
      for (var i = 1; i <= 3; i++) {
        for (var j = 1; j <= 3; j++) {
          var imgSrc = puzzle.correctGridOrder[(i-1)*3+j].url;
          var placeholder = puzzle.correctGridOrder[(i-1)*3+j].placeholder;
          var cell = document.getElementById('imageGrid').rows[i].cells[j];
          cell.innerHTML = '<img src="' + imgSrc + '"><br>' + placeholder;
        }
      }
    });

    // Read the selected file as text
    reader.readAsText(file);
  });
};
