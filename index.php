<?php include("./brand.php"); ?>
<?php include("./helper.php"); ?>

<!DOCTYPE html>
<html>
<head>
	<?php include("./head.php"); ?>
	<title>99freetoolAI.com</title>
	<meta name="description" content="">
	<meta name="keywords" content="">
	
</head>
<body>
<?php include("./header.php"); ?>




<div class="container">
		
	<div class="wrapper">
    <div class="typing-demo">
    Welcome to 99freetoolAI.com
    </div>
	<style>.wrapper {
  height: 40vh;
  /*This part is important for centering*/
  display: grid;
  place-items: center;
}

.typing-demo {
  width: 22ch;
  animation: typing 2s steps(24), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family:Georgia;
  font-size: 2em;
}

@keyframes typing {
  from {
    width: 0
  }
}
    
@keyframes blink {
  50% {
    border-color: transparent
  }
}</style>
</div>
	
	<div class='row' style='border: 1px solid #CCC; margin: 10px; padding: 10px; box-shadow: 2px 2px 0px 0px #CCC; border-radius: 10px; overflow: hidden;'>	
		<div style='text-align: center; margin: 10px;'>
			<?php
				if(isset($_POST['submit'])) {
					uploadAndConvert();
				}
			?>
		</div>

		<div class="row" style='text-align: center; border: 1px dashed #CCC; padding: 20px; max-width: 1200px; margin: 20px auto; border-radius: 10px;'>
			<form action="" method="post" enctype="multipart/form-data">
				<input type="file" class="form-control-file" name="fileToUpload" id="fileToUpload" required />
				<input class="btn btn-primary" type="submit" value="Upload Image" name="submit" style='margin: 10px;' />
			</form>
		</div>
	</div>
	
	<hr />
	
	
	<div class="row">
		<img src='./img/png.png' style="max-width: 500px; margin-bottom: 10px;" class="rounded mx-auto d-block" alt="" />
		
	</div>



<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
	  <img class="card-img-top" src="./img/doller.png"  style="max-width: 350px; margin-bottom: 20px;"alt="Card image cap">
        <h5 class="card-title">Live Currency Converter</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="convert.php" class="btn btn-primary">Use it</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
	  <img class="card-img-top" src="./img/pdf.png"  style="max-width: 500px; max-height: 350px; margin-bottom: 50px;"alt="Card image cap">
        <h5 class="card-title">Image to Pdf</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="pdf.php" class="btn btn-primary">Use it</a>
      </div>
    </div>
  </div>

  <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
	  <img class="card-img-top" src="./img/Maths.png"  style="max-width: 500px; margin-bottom: 50px;"alt="Card image cap">
        <h5 class="card-title">Automatic Maths table Generater</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="table.php" class="btn btn-primary">Use it</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
	  <img class="card-img-top" src="./img/tic.png"  style="max-width: 500px; max-height: 380px; margin-bottom: 10px;"alt="Card image cap">
        <h5 class="card-title">Games</h5>
        <p class="card-text">Tic Tac Toe Game </p>
        <a href="Game.php" class="btn btn-primary">Play Now</a>
      </div>
    </div>
  </div>
</div>

</div>








		
	                  <a href="AI.php"><h2>WELCOME TO AI</h2></a>



	
<?php include("./footer.php"); ?>




</body>
</html>