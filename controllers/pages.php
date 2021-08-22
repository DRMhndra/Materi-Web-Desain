<?php 
	require_once 'assets/data.php';
	if ( isset($_GET["page"])) {
		$page = $_GET["page"];
		if ( preg_match('~\W~', $page)) {
			echo 'Sorry';
		}else{
			foreach ($urls as $url) {
				if ( in_array($page, $url) ) {
					include_once 'materi/'.$url["url"];
				}
			}
		}
	}else{
		include_once 'materi/html/perkenalan.html';
	}