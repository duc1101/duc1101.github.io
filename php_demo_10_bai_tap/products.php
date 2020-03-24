<?php include_once 'header.php'; ?>
<div class="col-md-9">
	<h1 style="padding-left: 11px; background: #ccc;">
		Tất cả sản phẩm
	</h1>
	<div class="row">
		<?php foreach ($pros as $value): ?>
			<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
				<div class="thumbnail">
					<img src="<?php echo 'admin/'.$value['image']; ?>" alt="">
					<div class="caption">
						<h3><?php echo $value['name']; ?></h3>
						<p>
							<?php echo number_format($value['price']); ?> vnđ
						</p>
						<p>
							<a href="#" class="btn btn-success">Chi tiết</a>
							<a href="#" class="btn btn-default pull-right">Cart</a>
						</p>
					</div>
				</div>
			</div>
		<?php endforeach ?>
		<div class="foot_products pull-right">
			<ul class="pagination">
				<li><a href="#">&laquo;</a></li>
				<li><a href="#">1</a></li>
				<li class="active"><a href="#">2</a></li>
				<li><a href="#">3</a></li>
				<li><a href="#">4</a></li>
				<li><a href="#">5</a></li>
				<li><a href="#">&raquo;</a></li>
			</ul>
		</div>
	</div>
</div>
</div>
<?php include_once 'footer.php'; ?>