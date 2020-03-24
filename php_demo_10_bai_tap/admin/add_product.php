<?php require_once 'header.php'; ?>
<div class="container-fluid">
	<div class="row">
		<div class="col-md-3">
			<div class="list-group">
				<h3>Tìm kiếm danh mục</h3>
				<ul>
					<li class="list-group-item"><input type="" name="" placeholder="Theo Mã danh mục"></li>
					<li class="list-group-item"><input type="" name="" placeholder="Theo tên danh mục"></li>
					<li class="list-group-item"><input type="" name="" placeholder="Khác"></li>
					<li class="list-group-item">
						<button type="" class="btn btn-sm btn-success">Tìm kiếm</button>
					</li>
				</ul>
			</div>
		</div>
		<div class="col-md-9">
			<div class="">
				<h2>Thêm danh mục</h2>
				<div class="row">
					<?php
					$types = ['image/jpeg','image/png','image/jpg', 'image/gif'];
					$errors =[];
					$check_upload = false;
					if(!empty($_POST['pro_name'])){
						$pro_name = $_POST['pro_name'];
						// $image_link = $_POST['image_link'];
						$pro_price = $_POST['pro_price'];
						$pro_price_sale = $_POST['pro_price_sale'];
						$pro_status = $_POST['pro_status'];
						$_cate_id = $_POST['_cate_id'];
						$file = $_FILES['pro_image'];
						$f_name = $file['name'];
						$image_path = 'images/'.$f_name;
						$tmp_name = $file['tmp_name'];
						$type = $file['type'];
						$sql = "INSERT INTO product (name, image, status, price, price_sale, category_id) VALUES ('$pro_name','$image_path', '$pro_status', '$pro_price', '$pro_price_sale', '$_cate_id')";
						if (in_array($type, $types)) {
							$check_upload = move_uploaded_file($tmp_name, 'images/'.$f_name);
							mysqli_query($conn, $sql);
							header("location:add_product.php");
						} else {
							echo "<h4 style='color:red; background: #ccc; padding: 6px;'><i style='padding: 6px;' class='glyphicon glyphicon-warning-sign
							'></i>Định dạng ảnh không đúng!</h4>";
							// print_r($errors);
						}
					}
					if (isset($_GET['id'])) {
						$id = $_GET['id'];
						$sql = "DELETE FROM product WHERE id = $id";
						mysqli_query($conn, $sql);
								// echo 'Đã xóa';
								// $_GET['id'] = false;
						header("location:add_product.php");
					}
					?>
					<form action="" method="POST" class="form-inline"  enctype="multipart/form-data">
						<table class="table table-hover">
							<thead>
								<tr>
									<th><label class="" for="">Tên sản phẩm</label></th>
									<td><input required="" name="pro_name" class="form-control" id="" placeholder="Product name"></td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th><label class="" for="">Ảnh sẩn phẩm</label></th>
									<td><input type="file" name="pro_image" class="form-control "></td>
								</tr>
								<tr>
									<th><label class="" required for="">Giá</label></th>
									<td><input type="" name="pro_price" class="form-control" id="" placeholder="GIá bán"></td>
								</tr>
								<tr>
									<th><label class="" for="">Khuyến mại</label></th>
									<td><input type="" name="pro_price_sale" class="form-control" id="" placeholder="GIá khuyến mại"></td>
								</tr>
								<tr>
									<th><label class="" for="">Trạng thái</label></th>
									<td><input type="" name="pro_status" class="form-control" id="" placeholder="Trạng thái"></td>
								</tr>
								<tr>
									<th><label class="" for="">Danh mục</label></th>
									<td>
										<select name="_cate_id" class="form-control">
											<?php foreach ($cats as $cat){ ?>
												<option value="<?php echo $cat['id'];?>"><?php echo $cat['name'];?></option>
											<?php } ?>
										</select>
									</td>
								</tr>
							</tbody>
						</table>
						<hr>
						<button type="submit" class="btn btn-sm btn-success">Thêm mới</button>
					</form>
				</div>
			</div>
			<div class="container-fluid">
				<table class="table table-bordered table-hover">
					<h2>Tất cả danh mục</h2>
					<thead>
						<tr>
							<th>Mã sản phẩm</th>
							<th>Tên sản phẩm</th>
							<th>Ảnh</th>
							<th>Giá</th>
							<th>Trạng thái</th>
							<th>Nhóm hàng</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<?php foreach ($pros as $value){
							?>
							<tr>
								<td><?php echo $value['id']; ?></td>
								<td><?php echo $value['name']; ?></td>
								<td><img src="<?php echo $value['image']; ?>" alt="" style="width: 60px; text-align: center;"></td>
								<td><?php echo number_format($value['price']); ?> vnđ</td>
								<td><?php echo $value['status']; ?></td>
								<td><?php 
								$cate_id = $value['category_id'];
								$sql_show = "SELECT category.name FROM category JOIN product ON category.id = $cate_id";
								$query_2 = mysqli_query($conn, $sql_show);
								$row = mysqli_fetch_assoc($query_2);
								echo $row['name'];
								?>
							</td>
							<td> 
								<div class="">
									<a class="btn btn-sm btn-success" href="">Chi tiết</a>
									<a onclick="return confirm('xóa sản phẩm???')" class="btn btn-sm btn-danger" href="add_product.php?id=<?php echo $value['id'];?>">remove</a>
								</div>
							</td>	
						</tr>
					<?php } ?>
				</tbody>
			</table>
		</div>
	</div>
</div>
</div>
<?php include_once 'footer.php'; ?>
