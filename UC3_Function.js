const PartTime = 1;
const FullTime = 2;
const PartTimeHrs = 4;
const FullTimeHrs = 8;
const EmpWagesPerHrs = 20;
 let EmpHrs =0;
let AttendanceCheck = Math.floor(Math.random() * 3);

function getWorkingHours(AttendanceCheck)
{
  switch(AttendanceCheck)
   {
      case PartTime:

       // EmpHrs = PartTimeHrs;
       // console.log("Emp daily wages for PartTime work is : " + PartTimeHrs*EmpWagesPerHrs);
      //  break;
       return PartTimeHrs;
      case FullTime:
       // EmpHrs = FullTimeHrs;
      //  console.log("Emp daily wages for FullTime work is : " + FullTimeHrs*EmpWagesPerHrs);   
       // break;
       return FullTimeHrs;
        default:
       // EmpHrs = 0;
       return 0;
   }
}

empHrs = getWorkingHours(AttendanceCheck);
let EmpWage = empHrs*EmpWagesPerHrs;
console.log("Employee Working hours ="+ empHrs + ", Employee = "+ EmpWage);