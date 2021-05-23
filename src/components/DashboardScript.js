const DashScript = () => {
    function myFunction() {
        var x = document.getElementById("nav4");
        if (window.getComputedStyle(x).display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    } //nav4---edite1
    
    function myFunction1() {
        var x = document.getElementById("nav5");
        if (window.getComputedStyle(x).display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    } //nav5---edite1
    
    function myFunction6() {
        var x = document.getElementById("nav1");
        if (window.getComputedStyle(x).display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    
    function myFunction7() {
        var x = document.getElementById("nav2");
        if (window.getComputedStyle(x).display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    
    DivContainer1 = document.getElementById("div-container");
    
    function myFunction2() {
        var x = document.createElement("INPUT");
        x.setAttribute("type", "text");
        DivContainer1.appendChild(x);
    } //---Add INPUT
    
    /*end test1*/
    
    /*start test2*/
    
    function myFunction8() {
        var x = document.getElementById("nav8");
        if (window.getComputedStyle(x).display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    
    function myFunction9() {
        var x = document.getElementById("nav9");
        if (window.getComputedStyle(x).display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    
    /*end test2*/
    
    /*start test4*/
    
    function myFunction3() {
        var x = document.getElementById("nav7");
        if (window.getComputedStyle(x).display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    } //nav7--edit
    
    function myFunction4() {
        var x = document.getElementById("nav6");
        if (window.getComputedStyle(x).display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    } //nav7--edit1
    
    DivContainer1 = document.getElementById("div-container");
    
    function myFunction5() {
        var x = document.createElement("INPUT");
        x.setAttribute("type", "text");
        DivContainer1.appendChild(x);
    } //---Add INPUT
    
    /*end test4*/
    
    /*start test7*/
    
    $(document).ready(function() {
        $("#sidebar1").click(function() {
            $("#Description1").toggle();
        });
    });
    
    /*end test7*/
    
    
    return (
          DashScript;
            
        );
}

 
export default DashScript;