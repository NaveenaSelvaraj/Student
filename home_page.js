var add = document.getElementById('add');
var studentdetails = JSON.parse(sessionStorage.getItem("students"));
console.log(studentdetails);


let count =1;
  const map1 = studentdetails?.map(x => {


    // <div id="student" class="flip-card">
    //   <div class="flip-card-inner">
    //     <div class="flip-card-front">
    //       <h1>John Doe</h1>
    //     </div>
    //     <div class="flip-card-back">
    //       <p id="sname"><span>Name: </span> Naveena S</p>
    //       <p id="sage" ><span>age: </span>23</p>
    //       <p id="sphone" ><span>Phone Number: </span>78614298725</p>
    //     </div>
    //   </div>
    // </div>

   

    
   console.log(x);
//    var div = document.createElement("div");
//     var attr = document.createAttribute("id");
//     var p = document.createElement("p"); //create the paragraph tag
//     p.classList += 'album'; // give it a class by adding to the list
//     p.innerHTML = '<h2>1975</h2>'; // add html text or make another element if needed.
//     attr.value="student-details_"+count.toString();
//     div.setAttributeNode(attr);
//     div.appendChild(p); 
//     document.body.appendChild(div);
//     count = count + 1;

    var div = document.createElement('div');
    div.setAttribute('class','flip-card');
    div.setAttribute('id','student_'+count.toString());

    var div2 = document.createElement('div');
    div2.setAttribute('class','flip-card-inner');

    var div4 = document.createElement('div');
    div4.setAttribute('class','flip-card-front');

    var p1 = document.createElement('p');
    p1.innerHTML = '<h1>'+x.name+'</h1>';

    div4.appendChild(p1);
    div2.appendChild(div4); 
    div.appendChild(div2); 


    var div3 = document.createElement('div');
    div3.setAttribute('class','flip-card-back');
    var p2 = document.createElement('p');
    p2.innerHTML = '<span>Name: </span>'+x.name;

    var p3 = document.createElement('p');
    p3.innerHTML = '<span>Age: </span>'+x.age;

    var p4 = document.createElement('p');
    p4.innerHTML = '<span>Phone Number: </span>'+x.ph_num;





    div3.appendChild(p2); 
    div3.appendChild(p3);
    div3.appendChild(p4);

    if(x?.Phone_number_2?.length >0  ){



        var p5 = document.createElement('p');
        p5.innerHTML = '<span>Phone Number 2: </span>'+x?.Phone_number_2;
        div3.appendChild(p5);


    }

    if(x?.Phone_number_3?.length >0){


        var p6 = document.createElement('p');
        p6.innerHTML = '<span>Phone Number 3: </span>'+x?.Phone_number_3;
        div3.appendChild(p6);


    }
    if( x?.Phone_number_4?.length >0){

        var p7 = document.createElement('p');
        p7.innerHTML = '<span>Phone Number 4: </span>'+x?.Phone_number_4;
        div3.appendChild(p7); 
        
    }

    if( x?.Phone_number_5?.length >0){

        var p7 = document.createElement('p');
        p7.innerHTML = '<span>Phone Number 5: </span>'+x?.Phone_number_5;
        div3.appendChild(p7); 
        
    }







    

    div2.appendChild(div3);

    var studentdetails = document.getElementById('studentdetails');
    studentdetails.appendChild(div);
    console.log(studentdetails);
    // survey_options.appendChild(newField);
    // var input_tags = survey_options.getElementsByTagName('input');


  
  });


  add.onclick=function(){
  window.location.assign("/get_info1.html"); 
  }