const PartTime = 1;
const FullTime = 2;
const PartTimeHrs = 4;
const FullTimeHrs = 8;
const EmpWagesPerHrs = 20;


function getWorkingHrs(AttendanceCheck)
{
 switch(AttendanceCheck)
 {
    case PartTime:
        return PartTimeHrs;
       // console.log("Emp daily wages for PartTime work is : " + PartTimeHrs*EmpWagesPerHrs);
        
    case FullTime:
        return FullTimeHrs;
       // console.log("Emp daily wages for FullTime work is : " + FullTimeHrs*EmpWagesPerHrs);   
        
        default:
        return 0;
  }
}
let EmpHrs = 0;
let AttendanceCheck = Math.floor(Math.random() * 10) % 3;
EmpHrs = getWorkinghrs(AttendanceCheck);
let EmpWage = EmpHrs* EmpWagesPerHrs;
console.log("EmpWage : " + EmpWage);