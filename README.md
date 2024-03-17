# ngModelGroup

ngModelGroup in Angular forms is used to group multiple ngModel directives together. It allows you to manage related form controls as a group, which can be helpful for organizing and validating form data.

Here are a few reasons why you might use ngModelGroup:

Logical Grouping: If you have a set of form controls that are related to each other, such as contact information (name, email, phone), you can use ngModelGroup to group them together logically.

Validation: You can apply validation rules to the entire group using ngModelGroup, making it easier to validate a set of related fields at once.

Error Handling: When a form group contains multiple controls, you can display error messages for the entire group or individual controls within the group based on validation results.

Form Data Handling: When submitting the form, you can access the data from the grouped controls as an object within the larger form data structure.

Here's an example of how you might use ngModelGroup in an Angular form:


<form #myForm="ngForm">
  <div ngModelGroup="contactInfo">
    <input type="text" name="name" ngModel required>
    <input type="email" name="email" ngModel required>
    <input type="tel" name="phone" ngModel required>
  </div>
  <button type="submit" [disabled]="myForm.invalid">Submit</button>
</form>

In this example, ngModelGroup="contactInfo" groups the name, email, and phone inputs together under the contactInfo group. You can then access these fields as myForm.value.contactInfo.name, myForm.value.contactInfo.email, and myForm.value.contactInfo.phone in your component when handling form submission or validation.