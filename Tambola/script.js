var slans = {}

var used = [] ;
for ( var i = 0 ; i < 100 ; ++i )
  used.push(false) ;

var now = 0 ;
var cnt = 0 ;

function newnum() {
    ++now ;
    document.getElementById("cir").classList.remove("crcl1") ;
    document.getElementById("cir").classList.toggle("crcl") ;
    document.getElementById("welcometext").style.visibility = "hidden" ;
    document.getElementById("bignum").classList.toggle("bnanim") ;
    
    if ( cnt==100 ) 
        return ;

    if (now==2) {
        now = 0 ;

        // Main action
        var num = Math.floor(Math.random()*100) ;
        while ( num==0 || used[num]==true ) {
            num = Math.floor(Math.random()*100) ;
        }
        console.log(num) ;
        cnt++ ;
        // document.getElementById("slang").textContent = slangs[num] ;
        // document.getElementById("slang").style.color = colors[num] ;

        var r = Math.floor(num/10); var c = num%10 ;
        document.getElementById("checkgrid").rows[r].cells.item(c).classList.add("smallnum") ;
        document.getElementById("checkgrid").rows[r].cells.item(c).style.visibility = "visible" ;
        document.getElementById("checkgrid").rows[r].cells.item(c).style.border = "1px solid #333" ;
        document.getElementById("checkgrid").rows[r].cells.item(c).innerHTML = num ;
        used[num] = true;

        num = num.toString() ;

        if ( num.length == 1) {
            num = "0"+num ;
        }
        document.getElementById("bignum").style.visibility = "visible" ;
        document.getElementById("bignum").textContent = num ;


    }
    

}