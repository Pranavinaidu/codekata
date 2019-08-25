(function(){class ApplicationForm{
    constructor(){
        this.$name=document.querySelector("#name");
        this.$dob=document.querySelector("#dob");
        this.$gender=document.querySelectorAll(".gender-input");
        this.$college=document.querySelector("#cName");
        this.$branch=document.querySelector("#branch");
        this.$year=document.querySelector("#inputYear");
        this.$marks=document.querySelector("#marks");
        this.$resume=document.querySelector("#resume");
        this.$known=document.querySelectorAll(".checkbox-input");
        this.$form=document.querySelector("form");
        this.$submit = document.querySelector('#submit');
        this.$loadingIndicator = document.querySelector('#loadingIndicator');

        this.$form.addEventListener('submit', event => {
            this.onFormSubmit(event);
          });
    }
    isChecked(){
        let checkbox=[];
        let checks = document.querySelectorAll('input[type=checkbox]:checked');
        for (let i = 0; i < checks.length; i++) {
             checkbox.push(checks[i].value); }
             return checkbox;
    }
    
    getFormValues() {
        return {
          name: this.$name.value,
          dob: this.$dob.value,
          gender: document.querySelector("input[name=\"gender\"]:checked").value,
          college: this.$college.value,
          branch: this.$branch.value,
          year: this.$year.value,
          marks:this.$marks.value,
          resume:document.querySelector("#resume").value,
          known:this.isChecked()
        };
    }
      validateForm(formValues){
        const result = {
            name:validateUserName(formValues.name),
            dob:validateDob(formValues.dob),
            gender:validateGender(formValues.gender),
            college:validateUserName(formValues.college),
            branch:validateBranch(formValues.branch),
            year:validateYear(formValues.year),
            marks:validateMarks(formValues.marks),
            resume:validateResume(formValues.resume),
            known: validateCheckbox(formValues.known)
        };
        
          let field, isValid = true;
          for(field in result) {
            isValid = isValid && result[field];
          }
        
          return {
            isValid,
            result,
          };
          function validateUserName(name) {
            let letters = /^[A-Za-z .]+$/;
            if(name.length > 3){
                return name.match(letters)
            }
            }
            function validateBranch(branch){
                let letters = /^[A-Za-z .-]+$/;
                if(branch.length > 2){
                    return branch.match(letters)
                } 
            }
            function validateDob(date){
                let curDate=new Date().toISOString();
                let today=curDate.split("T")[0] ;
                let tyear=today.split("-");
                let dyear=date.split("-");
                if ((tyear[0]-dyear[0]) < 18){
                    console.log(tyear[0]-dyear[0]);
                    return false;
                }else
                return true;
            }
            function validateGender(gender){
                if(gender=="Male"||gender=="Female"){
                    return true;}
                else
                    {return false;}
            }
            function validateYear(year){
                if(year=='1'||year=='2'||year=='3'||year=='4')
                    return true;
                else
                    return false;
            }
            function validateMarks(marks){
                var x = parseFloat(marks);
                if (isNaN(x) || x < 0 || x > 100) {
                    return false;
            }
            else
                return true;
            }
            function validateResume(resume){
                if(resume==""){
                    alert("upload file");
                    return false;}   
                else
                    return true;
            }
            function validateCheckbox(known){
                const acceptedValues = ['College','Friends','Relatives','job sites'];
                const found = known.some(r=> acceptedValues.indexOf(r) >= 0)
                return found;
            }
    
}   
    
    onFormSubmit(event) {
        event.preventDefault();

        const formValues = this.getFormValues();
        const formStatus = this.validateForm(formValues);

        if(formStatus.isValid) {
        this.clearErrors();
        this.submitForm(formValues);
        } else {
        this.clearErrors();
        this.highlightErrors(formStatus.result);
        }
    }

highlightErrors(result) {
    if(!result.name) {
      this.$name.classList.add("is-invalid");
    }
    if(!result.dob){
        this.$dob.classList.add("is-invalid");  
    }
    if(!result.college) {
        this.$college.classList.add("is-invalid");
    }
    if(!result.branch) {
        this.$branch.classList.add("is-invalid");
    }
    if(!result.gender) {
        this.$gender.classList.add("is-invalid");
    }
    if(!result.year) {
        this.$year.classList.add("is-invalid");
    }
    if(!result.marks) {
        this.$marks.classList.add("is-invalid");
    }
    if(!result.resume) {
        this.$resume.classList.add("is-invalid");
    }
    if(!result.known) {
        alert("please check the checkbox");
    }
}
clearErrors(){
    this.$name.classList.remove("is-invalid");
    this.$dob.classList.remove("is-invalid");
    this.$college.classList.remove("is-invalid");
    this.$branch.classList.remove("is-invalid");
    //this.$gender.classList.remove("is-invalid");
    this.$year.classList.remove("is-invalid");
    this.$marks.classList.remove("is-invalid");
    this.$resume.classList.remove("is-invalid");
    //this.$known.classList.remove("is-invalid");
}

    submitForm(formValues) {
        console.log(formValues);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange=function(){
            if(this.readyState==4 && this.status==200)
                console.log(this);
            // else
            //     console.log("error");
        }
        xhttp.open('POST','https://testt1.free.beeceptor.com/data',true);
        xhttp.setRequestHeader("Content-Type","application/json");
        xhttp.send(JSON.stringify(formValues));
    }
    
}    

const myApplicationForm=new ApplicationForm();
})()
