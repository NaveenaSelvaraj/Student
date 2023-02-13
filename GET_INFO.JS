var survey_options = document.getElementById('survey_options');
var add_more_fields = document.getElementById('add_more_fields');
var remove_fields = document.getElementById('remove_fields');
var add = document.getElementById('add');
var student_list = document.getElementById('student_list');
var Save = document.getElementById('save');
var cancel = document.getElementById('cancel');


let t_number=1;
let data=JSON.parse(sessionStorage.getItem("students"));
data = data?.length > 0 ? data : [];

// const data2=[];
// {
//   "name":"naveena",
//   "age":"23",
//   "phone":"6789876",
//   "phone_1":"6789876",
//   "phone_2":"6789876"
// },
// {
//   "name":"naveena",
//   "age":"23",
//   "phone":"6789876",
//   "phone_1":"6789876",
//   "phone_2":"6789876"
// },
// {
//   "name":"naveena",
//   "age":"23",
//   "phone":"6789876",
//   "phone_1":"6789876",
//   "phone_2":"6789876"
// }

function add_student(){
  for(let i=0; i<=data.length;i++)
  {
    var input_tags = survey_options.getElementsByTagName('input');
  }
}

console.log(data);
add_more_fields.onclick = function(){
  var input_tags = survey_options.getElementsByTagName('input');

  //console.log(input_tags.length);

  if(input_tags.length > 2  && input_tags.length<=6)
   {
    t_number = t_number+1;
    var newField = document.createElement('input');
    newField.setAttribute('type','text');
    newField.setAttribute('name','survey_options[]');
    newField.setAttribute('class','survey_options');
    newField.setAttribute('size',50);
    newField.setAttribute('placeholder','Phone_number_'+t_number.toString());
    newField.setAttribute('id','Phone_number_'+t_number.toString());
    survey_options.appendChild(newField);
    var input_tags = survey_options.getElementsByTagName('input');  }
}

remove_fields.onclick = function(){
  var input_tags = survey_options.getElementsByTagName('input');
  t_number = t_number -1;
  if(input_tags.length > 3 ) {
    survey_options.removeChild(input_tags[(input_tags.length) - 1]);
  }
}

Save.onclick=function(){
let name=null;
let age=null;
let ph_num=null;
let Phone_number_2=null;
let Phone_number_3=null;

let Phone_number_4=null;
let Phone_number_5=null;


  var div2 = document.getElementById('survey_options');
   for(i = j = 0; i < div2.childNodes.length; i++)
   {
    if(div2.childNodes[i].id == 'name' && div2.childNodes[i].value.length > 0)
      {
        j++;
        var input = div2.childNodes[i];
        name=input.value;
        input.value=null;
      }   

      if(div2.childNodes[i].id == 'age' && div2.childNodes[i].value.length > 0)
      {
        j++;
        var input = div2.childNodes[i];
        age=input.value;
        input.value=null;
      } 
      if(div2.childNodes[i].id == 'ph_num' && div2.childNodes[i].value.length > 0)
      {
        j++;
        var input = div2.childNodes[i];
        ph_num=input.value;
        input.value=null;
      } 
      if(div2.childNodes[i].id == 'Phone_number_2' && div2.childNodes[i].value.length > 0)
      {
        j++;
        var input = div2.childNodes[i];
        Phone_number_2=input.value;
        input.value=null;
      } 
      if(div2.childNodes[i].id == 'Phone_number_3' && div2.childNodes[i].value.length > 0)
      {
        j++;
        var input = div2.childNodes[i];
        Phone_number_3=input.value;
        input.value=null;
      } 
      if(div2.childNodes[i].id == 'Phone_number_4' && div2.childNodes[i].value.length > 0)
      {
        j++;
        var input = div2.childNodes[i];
        Phone_number_4=input.value;
        input.value=null;
      } 
      if(div2.childNodes[i].id == 'Phone_number_5' && div2.childNodes[i].value.length > 0)
      {
        j++;
        var input = div2.childNodes[i];
        Phone_number_5=input.value;
        input.value=null;
      } 

  }

  console.log(name.length)
  console.log(age.length)
  console.log(ph_num.length)

  if(name.length > 0 && age.length > 0  && ph_num.length > 0  ){
  
    const student = {
      name:name,
      age:age,
      ph_num:ph_num,
      Phone_number_2:Phone_number_2,
      Phone_number_3:Phone_number_3,
      Phone_number_4:Phone_number_4,
      Phone_number_5:Phone_number_5
    };
  
  console.log(student);
  data.push(student);
  console.log(data);

  }
  else{
    alert("Enter valid data")
  }
  
var input_tags = survey_options.getElementsByTagName('input');
        //const phone1=input_tags.children.item("Phone_number_"+i.toString());
        //const phone1=input_tags.children.item("Phone_number_2");
       // const phone2=survey_options.children.item("Phone_number_2");
       //const phone1=survey_options.children.item("Phone number "+i.toString());
       // console.log(phone1);
       // console.log(phone2);





 //const name=survey_options.children.item("name");
  //const age=survey_options.getElementById("age");
//const age=GetElementInsideContainer(survey_options,"age");

  //console.log(age);
  
 //  const phone=survey_options.children.item("ph_num");
 //  console.log(name.value,age.value,phone.value)
  // var input_tags = survey_options.getElementsByTagName('input');
  // console.log(survey_options);
 //  const phone2=survey_options.children.item("age");
 //  console.log(phone2);

  for(let i=2;i<=t_number;i++){
    //const phone1=input_tags.children.item("Phone_number_"+i.toString());
    //const phone1=input_tags.children.item("Phone_number_2");
   // const phone2=survey_options.children.item("Phone_number_2");
   //const phone1=survey_options.children.item("Phone number "+i.toString());
   // console.log(phone1);
   // console.log(phone2);
  }
}

function GetElementInsideContainer(containerID, childID) {
var elm = document.getElementById(childID);
var parent = elm ? elm.parentNode : {};
return (parent.id && parent.id === containerID) ? elm : {};
  }
  
  count_add =1;
  add.onclick=function()
  {
  // console.log("hello world");
  // const node = document.getElementById("student_list");
  // const clone = node.cloneNode(true);
  // document.body.appendChild(clone);
  //  count_add ++;
  // console.log(count_add);
  sessionStorage.setItem("students",JSON.stringify(data));
  window.location.assign("/home_page.html"); 
  }