// document.getElementById("myTable").rows[0].cells[0]

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

// var ran = false ;

var used = [] ;
for ( var i = 0 ; i < 99 ; ++i )
  used.push(false) ;

var now = 0 ;
var cnt = 0 ;

function newnum() {
    ++now ;
    document.getElementById("cir").classList.remove("crcl1") ;
    document.getElementById("cir").classList.toggle("crcl") ;
    document.getElementById("welcometext").style.visibility = "hidden" ;
    document.getElementById("bignum").classList.toggle("bnanim") ;
    
    if (now==2 && cnt < 100) {
        now = 0 ;

        // Main action
        var num = Math.floor(Math.random()*100) ;
        while ( num==0 || used[num] ) {
            num = Math.floor(Math.random()*100) ;
        }
        console.log(num) ;
        cnt++ ;
        // document.getElementById("slang").textContent = slangs[num] ;
        // document.getElementById("slang").style.color = colors[num] ;

        var r = Math.floor(num/10); var c = num%10 ;
        document.getElementById("checkgrid").rows[r].cells.item(c).classList.add("smallnum") ;
        document.getElementById("checkgrid").rows[r].cells.item(c).style.visibility = "visible" ;
        document.getElementById("checkgrid").rows[r].cells.item(c).innerHTML = num ;

        if (Math.floor(num/10) == 0) {
            num = '0'+num ;
        }
        document.getElementById("bignum").style.visibility = "visible" ;
        document.getElementById("bignum").textContent = num ;


    }
    

}