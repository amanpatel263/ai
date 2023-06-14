<!DOCTYPE html>
<html>
<head>
  <title>Math Table Generator</title>
  <style>
    .container {
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
    }
    .form-group {
      margin-bottom: 20px;
    }
    label {
      display: block;
      margin-bottom: 5px;
    }
    input[type="number"] {
      width: 100%;
      padding: 5px;
      font-size: 16px;
    }
    button {
      padding: 10px 20px;
      font-size: 16px;
    }
    table {
      margin-top: 20px;
      border-collapse: collapse;
    }
    th, td {
      padding: 10px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="form-group">
      <label for="number">Enter a number:</label>
      <input type="number" id="number" min="1" step="1">
    </div>
    <button id="generateBtn">Generate Table</button>
    <table id="table"></table>
  </div>

  <script>
    function generateTable() {
      var number = document.getElementById('number').value;
      var table = document.getElementById('table');
      table.innerHTML = ''; // Clear previous table

      for (var i = 1; i <= 10; i++) {
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        cell1.textContent = i;
        cell2.textContent = i * number;
      }
    }

    document.getElementById('generateBtn').addEventListener('click', generateTable);
  </script>
</body>
</html>
