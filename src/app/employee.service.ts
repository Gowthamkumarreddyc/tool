import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient ) { }
 
  // profile
  
  get(){
    return this.http.get("http://localhost:3000/profile")
  }
  
  // education details

   getEducationDetails(){
    return this.http.get("http://localhost:3000/educationdetails")
   }
   addEducation(data:any){
    return this.http.post("http://localhost:3000/educationdetails",data)
   }
   updateEducation(data:any , id:any){
    return this.http.put("http://localhost:3000/educationdetails/" +id,data)
   }

   deleteEducation(id:any){
    return this.http.delete("http://localhost:3000/educationdetails/"+id)
   }
// experience details

   getExperienceDetails(){
    return this.http.get("http://localhost:3000/experiencedetails")
   }

   addExperience(data:any){
    return this.http.post("http://localhost:3000/experiencedetails",data)
   }
   updateExperience(data:any , id:any){
    return this.http.put("http://localhost:3000/experiencedetails/" +id,data)
   }

   deleteExperience(id:any){
    return this.http.delete("http://localhost:3000/experiencedetails/"+id)
   }

}
