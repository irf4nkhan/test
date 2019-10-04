var code = `const constantMock = window.fetch;
 window.fetch = function() {

    return new Promise((resolve, reject) => {
        constantMock.apply(this, arguments)
            .then((response) => {
                if(response.type != "cors"){
                    
					
					
					response.clone().text().then(function(re){
						if(response.url.match(/https\\:\\/\\/www\\.zillow\\.com\\/search\\/GetSearchPageState\\.htm/gi)){
					
					     var texExt = document.getElementById("responseExt");
						if(texExt){
							texExt.parentNode.removeChild(texExt);
						}
						
						var te1 = document.createElement("textarea");
						    te1.style.display = "none";
							te1.id = "responseExt";
							te1.innerHTML = re;
						    document.body.appendChild(te1);
					
						}
					})
					
					
					
                }
                resolve(response);
            })
            .catch((error) => {
                reject(response);
            })
    });
 };`


var script = document.createElement("script");
script.innerHTML = code;

document.documentElement.appendChild(script);