<?php include("./brand.php"); ?>
<?php include("./helper.php"); ?>




<!DOCTYPE html>
<html lang="en">
<head>
<head>
	<?php include("./head.php"); ?>
	<title>Site Map</title>
	<meta name="description" content="">
	<meta name="keywords" content="">
	
</head>
<body>
<?php include("./header.php"); ?>
<div class="wrapper">
     
     



  
<div class="cont">
    <h1 class="title">Site Map</h1>
    <ul class="sitemap">
      <li><a href="index.php">Home</a></li>
      <li>
        <a href="tool.php">Tools</a>
        <ul>
          <li><a href="index.php">PNG to JPG Converter</a></li>
          <li><a href="convert.php">Live Currency Converter</a></li>
          <li><a href="table.php">Automatic Maths Table Generator</a></li>
          <li><a href="pdf.php">Image to Pdf</a></li>
        </ul>
      </li>
      <li>
        <a href="">Games</a>
        <ul>
          <li><a href="Game.php">Tic Tac Toe</a></li>
        </ul>
      </li>
      <li><a href="AI.php">AI</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="privacy policy.php">Privacy Policy</a></li>
      <li><a href="Contact Us">Contact Us</a></li>
    </ul>
  </div>




     <br><br>
      

<pre>                                                  Thank you for choosing <a href="mailto:info@99freetoolai.com">info@99freetoolai.com</a> We look forward to hearing from you!

                                                                             The 99freetoolai.com Team</pre>
     
     <style>
    .wrapper{
        height: 100vh;
        
  /*This part is important for centering*/
  

  
    }
    body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
  
}

.cont {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  margin-bottom: 20px;
}

ul.sitemap {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul.sitemap > li {
  margin-bottom: 10px;
}

ul.sitemap > li > a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

ul.sitemap ul {
  list-style: none;
  padding: 0;
  margin: 5px 0 0 20px;
}

ul.sitemap ul li {
  margin-bottom: 5px;
}

ul.sitemap ul li a {
  color: #666;
  font-weight: normal;
}


     </style>
    </div>

    <?php include("./footer.php"); ?>
</body>
</html>