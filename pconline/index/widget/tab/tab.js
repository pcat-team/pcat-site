var $ = require("common:pc-jquery");

$(".tab-menu li").hover(function() {
	var index = $(this).index();
	$(this).addClass('current').siblings().removeClass("current");
	$(".tab-content").eq(index).addClass("tab-content-current").siblings().removeClass('tab-content-current');

});

exports.name = "My name is tab";