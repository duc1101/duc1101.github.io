<?php include_once 'header.php'; ?>
<div class="col-md-9">
	<div id="carousel-id" class="carousel slide" data-ride="carousel">
		<ol class="carousel-indicators">
			<li data-target="#carousel-id" data-slide-to="0" class=""></li>
			<li data-target="#carousel-id" data-slide-to="1" class=""></li>
			<li data-target="#carousel-id" data-slide-to="2" class="active"></li>
		</ol>
		<div class="carousel-inner">
			<div class="item">
				<img style="min-width: 100%;" src="public/images/slider/slide-1.jpg">
			</div>
			<div class="item">
				<img style="min-width: 100%;" src="public/images/slider/slide-2.jpg">
			</div>
			<div class="item active">
				<img style="min-width: 100%;" src="public/images/slider/slide-3.jpg">
			</div>
		</div>
		<a class="left carousel-control" href="#carousel-id" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a>
		<a class="right carousel-control" href="#carousel-id" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>
	</div>
</div>
</div>
<h1 style="color: #FFFF79FF; background: green; padding: 2px 11px;">
	Các sản phẩm bán chạy nhất
</h1>
<div class="row">
	<?php for ($i = 0, $a=0; $a < 6; $i=$i+3, $a++): ?>
		<div class="col-xs-4 col-sm-4 col-md-3 col-lg-3">
			<div class="thumbnail">
				<img src="<?php echo 'admin/'.$pros[$i]['image']; ?>" alt="">
				<div class="caption">
					<h3><?php echo $pros[$i]['name']; ?></h3>
					<p>
						<?php echo number_format($pros[$i]['price']); ?> vnđ
					</p>
					<p>
						<a href="#" class="btn btn-success">Chi tiết</a>
						<a href="#" class="btn btn-default pull-right">Cart</a>
					</p>
				</div>
			</div>
		</div>
	<?php endfor ?>
</div>
<h1 style="color: #FFFF79FF; background: green; padding: 2px 11px;">
	Các sản phẩm mới
</h1>
<div class="row">
	<?php for ($i = 1, $a=0; $a < 6; $i=$i+3, $a++): ?>
		<div class="col-xs-4 col-sm-4 col-md-3 col-lg-3">
			<div class="thumbnail">
				<img src="<?php echo 'admin/'.$pros[$i]['image']; ?>" alt="">
				<div class="caption">
					<h3><?php echo $pros[$i]['name']; ?></h3>
					<p>
						<?php echo number_format($pros[$i]['price']); ?> vnđ
					</p>
					<p>
						<a href="#" class="btn btn-success">Chi tiết</a>
						<a href="#" class="btn btn-default pull-right">Cart</a>
					</p>
				</div>
			</div>
		</div>
	<?php endfor ?>
</div>
<h1 style="color: #FFFF79FF; background: green; padding: 2px 11px;">
	Các sản phẩm chất lượng
</h1>
<div class="row">
	<?php for ($i = 2, $a=0; $a < 6; $i=$i+3, $a++): ?>
		<div class="col-xs-4 col-sm-4 col-md-3 col-lg-3">
			<div class="thumbnail">
				<img src="<?php echo 'admin/'.$pros[$i]['image']; ?>" alt="">
				<div class="caption">
					<h3><?php echo $pros[$i]['name']; ?></h3>
					<p>
						<?php echo number_format($pros[$i]['price']); ?> vnđ
					</p>
					<p>
						<a href="#" class="btn btn-success">Chi tiết</a>
						<a href="#" class="btn btn-default pull-right">Cart</a>
					</p>
				</div>
			</div>
		</div>
	<?php endfor ?>
</div>
<?php include_once 'footer.php'; ?>