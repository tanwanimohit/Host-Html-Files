	let editor = ace.edit("content");
	editor.setTheme("ace/theme/eclipse");
	editor.setOption("fontSize", 17);
	editor.setOption("printMarginColumn", "60");
	editor.session.setMode("ace/mode/html");
		
	function make()
	{
		var content=editor.getValue();
		if(content!="")
		{
			$.post('/makehtml',{content:content},function(data,status){							
				if(data=="ERR1")
				{	
					document.getElementById("url").innerHTML="Ahh! you forget to write the code";
				}
				else
				{
					document.getElementById("url").innerHTML="Your Webpage is live!<br> <a style='font-color:dodgerblue; text-decoration:none;' href='"+data+"' >"+data+"</a>" ;
				}
			});
		}
		else
		{
			alert("Ahh! you forget to write the code");
		}
		
	}
	function load()
	{
		editor.setValue("<!DOCTYPE html>\r\n<html>\r\n<head><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\r\n<title>My Web Page<\/title>\r\n<style>\r\n\r\n<\/style>\r\n<\/head>\r\n<body>\r\n\r\n\r\n<script>\r\n\r\n<\/script>\r\n<\/body>\r\n<\/html>\r\n");
	}
	function Copy()
	{
	
		var copyText = document.getElementById("content");
		copyText.select();
		document.execCommand("copy");
		document.getElementById("copybtn").value="Copied";
	}
