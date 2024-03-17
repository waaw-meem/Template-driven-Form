import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // SECOND METHOD TO TARGET FORM CONTROLS
  @ViewChild('detail') signupForm!: NgForm;

  isSubmitted = false

  // CREATING A SIMPLE JS OBJECT WHICH IS NOT RELATE WITH FORM
  user = {
    username:'',
    email:'',
    secret:'',
    questionAnswer:'',
    gender:'',
  }

  SubmitForm(detail: NgForm) {
   this.isSubmitted = true
   this.user.username = this.signupForm.value.userData.username
   this.user.email = this.signupForm.value.userData.email
   this.user.secret = this.signupForm.value.selection
   this.user.questionAnswer = this.signupForm.value.questionAnswer
   this.user.gender = this.signupForm.value.gender

   // RESET FORM VALUE
   this.signupForm.reset()
  }
  
  // SUGGESTED USERNAME FUNCTION
  suggestedUserName(){
    const suguserName = 'SuperUser'
    // THIS IS NOT A GOOD PRACTICE
    // this.signupForm.setValue({
    //   userData:{
    //     username:suguserName,
    //     email:''
    //   },
    //   selection:'pet',
    //   questionAnswer:'boona',
    //   gender:'Male'
    // })

    // BEST PRACTICE
    this.signupForm.form.patchValue({
      userData:{
        username:suguserName
      },
    })
  }

  // FIRST METHOD TO TARGET FORM CONTROLS
  title = 'Form-Handling';
  defaultValue = 'teacher'
  answer = ''

  genderList: string[] = ['Male', 'Female', 'Other'];
  selectedGender: string = '';

  // SubmitForm(form:NgForm){
  //   console.log(form)
  // }



  
}
