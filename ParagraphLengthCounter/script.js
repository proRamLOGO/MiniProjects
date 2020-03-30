var limit ;
var limit_exists = false ;

//Get Limit If exists
function registerlimit() {
    limit = document.getElementById("target").value ;
    var re = RegExp('^[0-9]*$') ;
    if ( re.test(limit) && limit.length > 0 ) {
        // console.log("Valid number"+limit) ;
        limit = parseInt(limit) ;
        if ( limit != 0 ) {
            limit_exists = true ;
            console.log(limit/5) ;
            document.getElementById("target").style.backgroundSize = "100% 4px, auto" ;
            document.getElementById("left").style.color = "#333" ;
        }
    } else {
        limit_exists = false ;
        document.getElementById("target").value = "" ;
        console.log("here") ;
        document.getElementById("target").style.backgroundSize = "0" ;
        document.getElementById("left").style.color = "#F4F4F4" ;
    }
    countWords() ;
};

function countWords() {

    if ( limit_exists ) {
        document.getElementById("left").innerHTML = "No. of Words Remaining : "+limit ;
    }

    if ( document.getElementById("content").value == "" )
        return ;
    
    text = document.getElementById("content").value.split(" ") ;
    document.getElementById("written").innerHTML = "No. of Words Written : "+text.length ;
    
    if ( limit_exists ) {
        var em = limit - text.length ;
        document.getElementById("left").innerHTML = "No. of Words Remaining : "+em ;
        
        if ( em < 0 ) {
            document.getElementById("left").style.color = "red" ;
            document.getElementById("written").style.color = "#333" ;
        }
        else if ( em == 0 ) {
            document.getElementById("left").style.color = "green" ;
            document.getElementById("written").style.color = "green" ;
        }
        else {
            document.getElementById("left").style.color = "#333" ;
            document.getElementById("written").style.color = "#333" ;
        }
    }

};