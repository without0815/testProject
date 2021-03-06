seajs.config({

	// 别名配置
	alias : {
		'jquery' : 'js/jquery/jquery'
	},
	// 路径配置
	paths : {
		'example' : './example/popBox/',
		'color' : './example/color/js/'
	},
	// 变量配置
	vars : {
		'locale' : 'zh-cn'
	},
	// 映射配置
	map : [],
	// 预加载项
	preload : [ 'jquery' ],
	// 调试模式
	debug : true,
	// Sea.js 的基础路径
	'base' : './',
	// 文件编码
	charset : 'utf-8'
});
