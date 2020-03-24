<?php 
	$conn = mysqli_connect('localhost', 'root', '', 'demo_10_technology');// khai báo biến toàn cục
	function _show($table_name){
		global $conn;// gọi biến toàn cục
		$result = [];
		$sql = "SELECT * FROM $table_name";
		// query ở đây
		$query = mysqli_query($conn,$sql);
		foreach ($query as $key => $value) {
			$result[] = $value;
		}
		return $result;
	}
	$cats = _show('category');
	$pros = _show('product');
	?>