const PartTime = 1;
const FullTime = 2;
const PartTimeHrs = 4;
const FullTimeHrs = 8;
const EmpWagesPerHrs = 20;
const NumOfWorkingDays = 20;
const MaxHrsInMonth = 160;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while(totalEmpHrs <= MaxHrsInMonth && totalWorkingDays < NumOfWorkingDays)
{
    totalWorkingDays++;
    let AttendanceCheck = Math.floor(Math.random()*10);
    totalEmpHrs += AttendanceCheck;

}
let EmpWage = totalEmpHrs * EmpWagesPerHrs;
console.log("Total Days = " + totalWorkingDays+" Days" + ",   Total Hrs = " + totalEmpHrs+" Hours" + ", Emp Wage = " +"Rs "+ EmpWage);