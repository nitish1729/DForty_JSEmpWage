const PartTime = 1;
const FullTime = 2;
const PartTimeHrs = 4;
const FullTimeHrs = 8;
const EmpWagesPerHrs = 20;
let EmpHrs =0;
let AttendanceCheck = Math.floor(Math.random() * 3);
switch(AttendanceCheck)
{
    case PartTime:
        EmpHrs = PartTimeHrs;
        console.log("Emp daily wages for PartTime work is : " + PartTimeHrs*EmpWagesPerHrs);
        break;
    case FullTime:
        EmpHrs = FullTimeHrs;
        console.log("Emp daily wages for FullTime work is : " + FullTimeHrs*EmpWagesPerHrs);   
        break;
        default:
        EmpHrs = 0;
}