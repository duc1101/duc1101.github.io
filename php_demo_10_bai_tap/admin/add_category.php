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
				<?php 
				// mysqli_query($conn, "SELECT 'name' FROM category");
				if(!empty($_POST['cate_name'])){
					$cate_name = $_POST['cate_name'];
					$cate_id_parent = $_POST['cate_id_parent'];
					$cate_status = $_POST['cate_status'];
					$name_cates = [];
					foreach ($cats as $value) {
						$name_cates[] = $value['name']; //lập danh sách tên danh mục
					}
					// print_r($name_cates);
					if (!in_array($cate_name, $name_cates)) { // kiểm tra xem danh mục đã có chưa
						$sql = "INSERT INTO category(name, status, parent_id) VALUES ('$cate_name','$cate_status', '$cate_id_parent')";
						mysqli_query($conn, $sql);
						header("location:add_category.php");

					} else {
						echo "<h4 style='color:red; background: #ccc; padding: 6px;'><i style='padding: 6px;' class='glyphicon glyphicon-warning-sign
								'></i>Tên danh mục đã tồn tại!!!</h4>";
					}

				}
				?>
				<h2>Thêm danh mục</h2>
				<div class="row">
					<form action="" method="POST" class="form-inline" role="form">
						<div class="form-group">
							<label class="" for="">Tên danh mục</label>
							<input required="" name="cate_name" class="form-control" id="" placeholder="Category name">
						</div>
						<div class="form-group">
							<label class="" for="">Id parent</label>
							<input type="" name="cate_id_parent" class="form-control" id="" placeholder="Id parent">
						</div>
						<div class="form-group">
							<label class="" for="">Trạng thái</label>
							<input type="" name="cate_status" class="form-control" id="" placeholder="Trạng thái">
						</div>
						<br>
						<button type="submit" class="btn btn-sm btn-success">Thêm mới</button>
					</form>
				</div>
			</div>
			<div class="container-fluid">
				<table class="table table-bordered table-hover">
					<h2>Tất cả danh mục</h2>
					<thead>
						<tr>
							<th>Mã danh mục</th>
							<th>Tên danh mục</th>
							<th>Status</th>
							<th>Id parent</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<?php 
						if (!empty($_GET['id'])) {
							$id = $_GET['id'];
							$sql = "DELETE FROM category WHERE id = $id";
							if (mysqli_query($conn, $sql)){
								echo 'Đã xóa';
								header("location:add_category.php");
							}else{
								echo "<h4 style='color:red; background: #ccc; padding: 11px;'><i style='padding: 6px;' class='glyphicon glyphicon-warning-sign
								'></i>Còn sản phẩm trong danh mục!</h4>";
							}
						}
						foreach ($cats as $value) { 
							?>
							<tr>
								<td><?php echo $value['id']; ?></td>
								<td><?php echo $value['name']; ?></td>
								<td><?php echo $value['status']; ?></td>
								<td><?php echo $value['parent_id']; ?></td>
								<td> 
									<a onclick="return confirm('xóa danh mục???')" href="add_category.php?id=<?php echo $value['id']; ?>"><div class="btn btn-sm btn-danger">remove</div></a>
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