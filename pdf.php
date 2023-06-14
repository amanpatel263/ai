<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Image to PDF Converter</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    
    h1 {
      color: #333;
      font-size: 28px;
      margin-bottom: 20px;
    }
    
    #file-input {
      display: none;
    }
    
    .button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #4CAF50;
      color: white;
      text-decoration: none;
      font-size: 16px;
      border-radius: 4px;
      cursor: pointer;
    }
    
    .button:hover {
      background-color: #45a049;
    }
  </style>
</head>
<body>
  <h1>Image to PDF Converter</h1>
  
  <input type="file" id="file-input" multiple>
  <button class="button" onclick="selectImages()">Select Images</button>
  <button class="button" onclick="convertToPDF()">Convert to PDF</button>
  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.debug.js"></script>

  <script>
    var selectedFiles = [];
    
    function selectImages() {
      var fileInput = document.getElementById('file-input');
      fileInput.click();
      fileInput.onchange = function(e) {
        selectedFiles = Array.from(e.target.files);
      };
    }
    
    function convertToPDF() {
      if (selectedFiles.length === 0) {
        alert('Please select images to convert.');
        return;
      }
    
      var pdf = new jsPDF();
      var loadedImages = 0;
    
      function convertNextImage(index) {
        if (index >= selectedFiles.length) {
          pdf.save('converted_images.pdf');
          return;
        }
    
        var reader = new FileReader();
        reader.onload = function (e) {
          var imgData = e.target.result;
          var img = new Image();
          img.onload = function () {
            var imgWidth = pdf.internal.pageSize.getWidth();
            var imgHeight = (imgWidth * this.height) / this.width;
            pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
            loadedImages++;
            if (loadedImages === selectedFiles.length) {
              pdf.save('converted_images.pdf');
            } else {
              pdf.addPage();
              convertNextImage(index + 1);
            }
          };
          img.src = imgData;
        };
        reader.readAsDataURL(selectedFiles[index]);
      }
    
      convertNextImage(0);
    }
    
  </script>
</body>
</html>
