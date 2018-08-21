$(document).ready(function(){
    process();
});



function process(){var a;var b=document.getElementById("error-enc");var e=document.getElementById("error-dec");var d=document.getElementById("text-enc").value,c=parseInt(document.getElementById("key-enc").value),f=0;for(a=0;a<c.length;a++)f+=parseInt(c.charAt(a));""==document.getElementById("key-enc").value&&(c=1);if(!isNaN(c)&&0<c&&1E9>c){b.style.display="none";b="35";for(a=0;a<d.length;a++)b+=c+parseInt(d.charCodeAt(a))+f+f+"42 35";a=document.getElementById("encrypted");a.innerHTML=b.substring(0,
b.length-2)}else b.style.display="block",a=document.getElementById("encrypted"),a.innerHTML="";b=document.getElementById("text-dec").value.substring(2);""!=b&&" "!=b.charAt(b.length-1)&&(b+=" ");b=""==b?"":b+"35";d=parseInt(document.getElementById("key-dec").value);for(a=c=0;a<d.length;a++)c+=parseInt(d.charAt(a));""==document.getElementById("key-dec").value&&(d=1);if(!isNaN(d)&&0<d&&1E9>d){e.style.display="none";e=b.split("42 35");b="";for(a=0;a<e.length;a++)b+=String.fromCharCode(parseInt(e[a])-
d-c-c);e=document.getElementById("decrypted");e.innerHTML=b}else e.style.display="block",e=document.getElementById("decrypted"),e.innerHTML=" "};


function deleteTextDec () {
    // document.getElementById("text-dec").value = "djkfshadpuifhsdpuifh" ; 
    console.log("hello");
    $('#text-dec').val('');
    $('#text-dec').val('');

}

function deleteTextEnc () {
    // document.getElementById("text-dec").value = "djkfshadpuifhsdpuifh" ; 
    console.log("hello");
    $('#text-enc').val('');
    $('#text-enc').val('');

}

function copyToClipboard() {
    var text = document.getElementById("encrypted").innerHTML;
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text); 

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}

$(function(){
setInterval(process, 200);
});

