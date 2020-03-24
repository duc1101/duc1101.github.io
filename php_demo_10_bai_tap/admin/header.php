<?php require_once 'function.php'; ?>
	<!DOCTYPE html>
	<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>Admin - quản lý</title>
		<!-- Latest compiled and minified CSS & JS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
	</head>
	<body>
		<nav class="navbar navbar-default" role="navigation">
			<div class="container">
				<!-- Brand and toggle get grouped for better mobile display -->
				<div class="navbar-header">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="../index.php">Người dùng</a>
				</div>
				<!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-collapse navbar-ex1-collapse">
					<ul class="nav navbar-nav">
						<li class="active"><a href="index.php">Tổng quan</a></li>
						<li><a href="#">Báo cáo</a></li>
					</ul>
					<ul class="nav navbar-nav navbar">
						<!-- <li><a href="#">Link</a></li> -->
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown">Quản lý <b class="caret"></b></a>
							<ul class="dropdown-menu">
								<li><a href="add_category.php">Thêm Danh Mục</a></li>
								<li><a href="add_product.php">Thêm Sản Phẩm</a></li>
								<li><a href="#">Nhân viên</a></li>
								<li><a href="#">Khách hàng</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
