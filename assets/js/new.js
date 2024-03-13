function myfunction() {
    var x = document.getElementById("new");
    var y = document.getElementById("new1");
    var image=document.getElementById("myImage");
    if (x.style.visibility == "hidden") {
      x.style.visibility = "visible";
      y.style.visibility = "hidden";
      document.getElementById("body").style.backgroundColor="white";
      // document.getElementById("header").style.backgroundColor="white";
      document.getElementById("body").style.color="black";
      ['probox1','probox2','probox3'].forEach(function(id){
        document.getElementById(id).style.background="white";
      });
      ['text','text1','text2','insideText','insideText1','insideText2','insideText3','insideText4','insideText5','insideText6','insideText7','text12','project1','project2','project3','project_head'].forEach(function(id){
            document.getElementById(id).style.color="#45505b";
      });
      {
      var element=document.getElementById("hero");
  element.classList.toggle("hero");
  element.classList.remove("hero1");}
  contact(1);
  // document.getElementById("subhead").style.background="#f7f8f9";
      image.src="https://user-images.githubusercontent.com/52069700/138040124-a7fc25e5-2dfe-4d37-9416-62fc66452152.png";
    } else {
      x.style.visibility = "hidden";
      y.style.visibility = "visible";
      document.getElementById("body").style.backgroundColor="#282c34";
      // document.getElementById("header").style.backgroundColor="#282c34";
      ['probox1','probox2','probox3'].forEach(function(id){
        document.getElementById(id).style.background="#0d0d0d";
      });

      ['body','text','text1','text2','insideText','insideText1','insideText2','insideText3','insideText4','insideText5','insideText6','insideText7','text12','project1','project2','project3','project_head'].forEach(function(id){
        document.getElementById(id).style.color="white";
  });
  var element=document.getElementById("hero");
  element.classList.toggle("hero1");
  element.classList.remove("hero");
  image.src="https://user-images.githubusercontent.com/52069700/138040372-1300c904-9963-4840-8c51-aa753a817e44.png";
  contact(0);
    // document.getElementById("subhead").style.background="#343A49";

    }

  }

  function contact(x)
  {
if(x==1)
{
  console.log("Prashant");
  //   ['loc','locd','mail','maild','phone','phoned'].forEach(function(id){
  //     document.getElementById(id).style.color="white";
  //   });
  // }
  //   else{
  //     ['loc','locd','mail','maild','phone','phoned'].forEach(function(id){
  //       document.getElementById(id).style.color="#45505b";
  //     });
  
    }
  }