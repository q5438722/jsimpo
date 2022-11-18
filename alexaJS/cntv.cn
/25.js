

var ad_paomadeng_switch = {

	pmd01:{
		pmd_1890 : false,
		pmd_1891 : false,
		pmd_1892 : false,
		pmd_1893 : false,
		pmd_1894 : false,
		pmd_1895 : false,
		pmd_1896 : false,
		pmd_1897 : false,
		pmd_1898 : false,
		pmd_1899 : false,
		pmd_1900 : false,
		pmd_1901 : false,
		pmd_1902 : false,
		pmd_1903 : false,
		pmd_1904 : false,
		pmd_1905 : false,
		pmd_1906 : false,
		pmd_1907 : false,
		pmd_1908 : false,
		pmd_1909 : false,
		pmd_1910 : false,
		pmd_1911 : false,
		pmd_1912 : false,
		pmd_1913 : false,
		pmd_1914 : false
	},
	

	pmd02:{
		pmd_1915 : false,
		pmd_1916 : false,
		pmd_1917 : false,
		pmd_1918 : false,
		pmd_1919 : false,
		pmd_1920 : false,
		pmd_1921 : false,
		pmd_1922 : false,
		pmd_1923 : false,
		pmd_1924 : false,
		pmd_1925 : false,
		pmd_1926 : false,
		pmd_1927 : false,
		pmd_1928 : false,
		pmd_1929 : false,
		pmd_1930 : false,
		pmd_1931 : false,
		pmd_1932 : false,
		pmd_1933 : false,
		pmd_1934 : false,
		pmd_1935 : false,
		pmd_1936 : false,
		pmd_1937 : false,
		pmd_1938 : false,
		pmd_1939 : false
	}

};
var pao01 = [];
var pao02=[];
for(var i=1890;i<1914;i++){
	if(eval("ad_paomadeng_switch.pmd01.pmd_"+i)){
		pao01.push(i)
	}
};
for(var i=1915;i<1939;i++){
	if(eval("ad_paomadeng_switch.pmd02.pmd_"+i)){
		pao02.push(i)
	}
};

if(pao01.length>0){
	var newpao01 = pao01.toString();
	CCTV_2020ad_1116._ajax('//galaxy.bjcathay.com/s?z=cathay&c='+newpao01+'&op=7','cntvPczh_1890',function(data){
		data.clickUrl = decodeURI(data.clickUrl);
		//$("#cntvPczh_1890").attr('href',data.clickUrl);
		
		if(data.eventExposure!=''){
			$("body").append('<iframe frameborder="0" width="0" height="0" scrolling="no" src="'+data.eventExposure+'" style="display:none;"></iframe>')
		}
	})
	function cntvPczh_1891(data){
	
	}
	function cntvPczh_1892(data){
	
	}
	function cntvPczh_1893(data){
	
	}
	function cntvPczh_1894(data){
	
	}
	function cntvPczh_1895(data){
	
	}
	function cntvPczh_1896(data){
	
	}
	function cntvPczh_1897(data){
	
	}
	function cntvPczh_1898(data){
	
	}
	function cntvPczh_1899(data){
	
	}
	function cntvPczh_1900(data){
	
	}
	function cntvPczh_1901(data){
	
	}
	function cntvPczh_1902(data){
	
	}
	function cntvPczh_1903(data){
	
	}
	function cntvPczh_1904(data){
	
	}
	function cntvPczh_1905(data){
	
	}
	function cntvPczh_1906(data){
	
	}
	function cntvPczh_1907(data){
	
	}
	function cntvPczh_1908(data){
	
	}
	function cntvPczh_1909(data){
	
	}
	function cntvPczh_1910(data){
	
	}
	function cntvPczh_1911(data){
	
	}
	function cntvPczh_1912(data){
	
	}
	function cntvPczh_1913(data){
	
	}
	function cntvPczh_1914(data){
	
	}
}
if(pao02.length>0){
	var newpao02 = pao02.toString();

	CCTV_2020ad_1116._ajax('//galaxy.bjcathay.com/s?z=cathay&c='+newpao02+'&op=7','cntvPczh_1915',function(data){
		data.clickUrl = decodeURI(data.clickUrl);
		
		if(data.eventExposure!=''){
			$("body").append('<iframe frameborder="0" width="0" height="0" scrolling="no" src="'+data.eventExposure+'" style="display:none;"></iframe>')
		}
	})
	function cntvPczh_1916(data){
	
	}
	function cntvPczh_1917(data){
	
	}
	function cntvPczh_1918(data){
	
	}
	function cntvPczh_1919(data){
	
	}
	function cntvPczh_1920(data){
	
	}
	function cntvPczh_1921(data){
	
	}
	function cntvPczh_1922(data){
	
	}
	function cntvPczh_1923(data){
	
	}
	function cntvPczh_1924(data){
	
	}
	function cntvPczh_1925(data){
	
	}
	function cntvPczh_1926(data){
	
	}
	function cntvPczh_1927(data){
	
	}
	function cntvPczh_1928(data){
	
	}
	function cntvPczh_1929(data){
	
	}
	function cntvPczh_1930(data){
	
	}
	function cntvPczh_1931(data){
	
	}
	function cntvPczh_1932(data){
	
	}
	function cntvPczh_1933(data){
	
	}
	function cntvPczh_1934(data){
	
	}
	function cntvPczh_1935(data){
	
	}
	function cntvPczh_1936(data){
	
	}
	function cntvPczh_1937(data){
	
	}
	function cntvPczh_1938(data){
	
	}
	function cntvPczh_1939(data){
	
	}
}



