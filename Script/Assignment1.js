//Please mark PERSIST LOGS in CONSOLE to see the OUTPUT

var employee = {
	firstName: null,
	lastName: null,
	email: null,
	contact: null,
	address: null,
	username: null,
	pass_word: null,
	gender: null,
	qualification: null,
	experience: null,
	languages: []
};

var qualification_list = ["10th","12th","Graduate","Post Graduate"];

var experience_list = ["Fresher","6 Months","1 Year","> 1 Year"];

// Constructor 
function language(name,isEnabled){
	this.name=name;
	this.isEnabled=isEnabled;
}

var languages_list = [
	new language("C/C++",false),
	new language("Java",true),
	new language("C#",true),
	new language("PHP",false),
	new language("Python",false)
];

function createListsAndCheckBox(){
	
	// Code for creating Qualification Drop down
	var qualification = document.getElementById("qualification_section");
    var select_ = document.createElement("select");
    select_.id = "qualification";
    select_.name = "qualification";
    qualification.appendChild(select_);
    for (var i = 0; i < qualification_list.length; i++) {
        var opt = document.createElement("option");
        opt.value = qualification_list[i];
        opt.text = qualification_list[i];
        select_.appendChild(opt);
    }
	
	// Code for creating Experience Drop down
	var experience = document.getElementById("experience_section");
    var select__ = document.createElement("select");
    select__.id = "experience";
    select_.name = "experience";
    experience.appendChild(select__);
    for (var i = 0; i < experience_list.length; i++) {
        var optn = document.createElement("option");
        optn.value = experience_list[i];
        optn.text = experience_list[i];
        select__.appendChild(optn);
    }
	
	// Code for creating Check box
    for(var i=0 ; i<languages_list.length ; i++){
        var check = document.createElement('input');  
        check.setAttribute('type', 'checkbox');  
        check.setAttribute('id', languages_list[i].name);      
        check.setAttribute('value', languages_list[i].name);   
        check.setAttribute('name', 'languages');      
		if(languages_list[i].isEnabled === true){
			check.setAttribute('checked',true);
		}			
        var label = document.createElement('label');  
        label.setAttribute('for', languages_list[i].name);     
        label.appendChild(document.createTextNode(languages_list[i].name)); 
        
        coding_languages.appendChild(check);  
        coding_languages.appendChild(label);  
        coding_languages.appendChild(document.createElement('br')); 
    }
}

function getDetails(){
	
		//Storing employee details in Employee object
		employee.firstName= document.getElementById('firstName').value;
		employee.lastName= document.getElementById('lastName').value;
		employee.email= document.getElementById('email').value;
		employee.contact= document.getElementById('phone').value;
		employee.address= document.getElementById('address').value;
		employee.username= document.getElementById('username').value;
		employee.pass_word= document.getElementById('password').value;
		employee.gender= document.getElementById('gender').value;
		employee.qualification= document.getElementById('qualification').value;
		employee.experience= document.getElementById('experience').value;
		var checkedList= document.getElementsByName("languages");
		for(var i =0 ; i < checkedList.length ; i++) {
			if(checkedList[i].checked) {
				employee.languages.push(checkedList[i].value);
			}
		}
		
		//displaying on console
		console.log("Employee Details : ");
		console.log("First Name : " + employee.firstName);
		console.log("Last Name : " + employee.lastName);
		console.log("Email : " + employee.email);
		console.log("Contact Number : " + employee.contact);
		console.log("Address : " + employee.address);
		console.log("User Name : " + employee.username);
		console.log("Password : " + employee.pass_word);
		console.log("Gender : " + employee.gender);
		console.log("Qualification : " + employee.qualification);
		console.log("Experience : " + employee.experience);
		console.log("Coding Languages : ");
		for(i=0;i<employee.languages.length;i++) {
			console.log(employee.languages[i]);
		}
		
		alert("See the Output");
 }

