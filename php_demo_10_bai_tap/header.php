<?php 
include_once 'config/connect.php';
include_once 'admin/function.php';
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<!-- Latest compiled and minified CSS & JS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="public/css/style.css">
</head>
<body>
	<nav class="navbar navbar-default" role="navigation">
		<div class="container-fluid">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="index.php">Home</a>
			</div>

			<!-- Collect the nav links, forms, and other content for toggling -->
			<div class="collapse navbar-collapse navbar-ex1-collapse">
				<ul class="nav navbar-nav">
					<li class=""><a href="products.php">Products</a></li>
					
				</ul>
				<form class="navbar-form navbar-left" role="search">
					<div class="form-group">
						<input type="text" class="form-control" placeholder="Search">
					</div>
					<button type="submit" class="btn btn-default">Tìm kiếm</button>
				</form>
				<ul class="nav navbar-nav navbar-right">
					<li><a href="#">Đăng nhập</a></li>
				</ul>
			</div><!-- /.navbar-collapse -->
		</div>
	</nav>
	<div class="container-fluid _banner">
		<div class="col-md-3">
			<h3 style="color: green;">Danh mục sản phẩm</h3>
			<div class="list-group position-fixed">
				<?php foreach ($cats as $value) { ?>
					<a href="#" class="list-group-item _a_effect"><span><?php echo $value['name']; ?></span></a>
				<?php } ?>
			</div>
		</div>

