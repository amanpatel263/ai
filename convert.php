<!DOCTYPE html>
<html>
<head>
    <title>Currency Converter</title>
    <style>
      :root {
  background-color: rgb(84, 82, 82);
}
        body {
            font-family: Arial, sans-serif;
            
        }
        
        .container {
            max-width: 400px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        
        .input-group {
            margin-bottom: 10px;
        }
        
        .input-group input {
            width: 100%;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
        }
        
        .input-group select {
            width: 100%;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
        }
        
        .btn {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        
        .result {
            font-weight: bold;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Currency Converter</h2>
        
        <div class="input-group">
            <input type="number" id="amount" placeholder="Enter amount" step="0.01">
        </div>
        
        <div class="input-group">
            <select id="from">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="JPY">JPY</option>
                <option value="CAD">CAD</option>
                <option value="AUD">AUD</option>
                <option value="CHF">CHF</option>
                <option value="CNY">CNY</option>
                <option value="SEK">SEK</option>
                <option value="NZD">NZD</option>
                <option value="MXN">MXN</option>
                <option value="SGD">SGD</option>
                <option value="HKD">HKD</option>
                <option value="NOK">NOK</option>
                <option value="KRW">KRW</option>
                <option value="TRY">TRY</option>
                <option value="INR">INR</option>
                <option value="RUB">RUB</option>
                <option value="BRL">BRL</option>
                <option value="ZAR">ZAR</option>
                
                <!-- Add more currency options here -->
            </select>
        </div>
        
        <div class="input-group">
            <select id="to">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="JPY">JPY</option>
                <option value="CAD">CAD</option>
                <option value="AUD">AUD</option>
                <option value="CHF">CHF</option>
                <option value="CNY">CNY</option>
                <option value="SEK">SEK</option>
                <option value="NZD">NZD</option>
                <option value="MXN">MXN</option>
                <option value="SGD">SGD</option>
                <option value="HKD">HKD</option>
                <option value="NOK">NOK</option>
                <option value="KRW">KRW</option>
                <option value="TRY">TRY</option>
                <option value="INR">INR</option>
                <option value="RUB">RUB</option>
                <option value="BRL">BRL</option>
                <option value="ZAR">ZAR</option>
            
                <!-- Add more currency options here -->
            </select>
        </div>
        
        <button class="btn" onclick="convert()">Convert</button>
        
        <div class="result" id="result"></div>
    </div>
    
    <script>
        function convert() {
            var amount = document.getElementById("amount").value;
            var from = document.getElementById("from").value;
            var to = document.getElementById("to").value;
            
            // Make an API call to get the conversion rate
            var apiUrl = "https://api.exchangerate-api.com/v4/latest/" + from;
            
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    var conversionRate = data.rates[to];
                    var result = (amount * conversionRate).toFixed(2);
                    document.getElementById("result").innerHTML = amount + " " + from + " = " + result + " " + to;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    </script>
</body>
</html>
