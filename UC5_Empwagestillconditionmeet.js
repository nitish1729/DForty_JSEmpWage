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
    let AttendanceCheck = Math.floor(Math.random()*5);
    totalEmpHrs += getWorkingHrs(AttendanceCheck);

}
let EmpWage = totalEmpHrs * EmpWagesPerHrs;
console.log("Total Days : " + totalWorkingDays + "Total Hrs : " + totalEmpHrs + " Emp Wage " + EmpWage);