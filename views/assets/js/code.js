
function make()
{
    var content=document.getElementById("content").value;
    if(content!="")
    {
        $.post('/makehtml',{content:content},function(data,status){
            if(data=="ERR1")
            {
                document.getElementById("url").innerHTML="Ahh! you forget to write the code";
            }
            else
            {
                document.getElementById("url").innerHTML="Your webpage is live at <a style='font-color:dodgerblue; text-decoration:none;' href='"+data+"' >"+data+"</a>" ;
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
    document.getElementById("content").value="<!DOCTYPE html>\r\n<html>\r\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n<head>\r\n<title>My Web Page<\/title>\r\n<\/head>\r\n<style>\r\n\r\n<\/style>\r\n<body>\r\n\r\n\r\n<script>\r\n\r\n<\/script>\r\n<\/body>\r\n<\/html>\r\n";
}
function Copy()
{

    var copyText = document.getElementById("content");
    copyText.select();
    document.execCommand("copy");
    document.getElementById("copybtn").value="Copied";
}