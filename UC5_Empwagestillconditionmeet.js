const PartTime = 1;
const FullTime = 2;
const PartTimeHrs = 4;
const FullTimeHrs = 8;
const EmpWagesPerHrs = 20;
const NumOfWorkingDays = 20;
const MaxHrsInMonth = 160;
let empHrs = 0;
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


console.log("UC6_Storing Daily Wage in a Array UC7");
// UC6

function caldailywage(empHrs)
{
    return empHrs * EmpWagesPerHrs;
}
let EmpdailyWages = new Array();
while(totalEmpHrs <= MaxHrsInMonth && totalWorkingDays < NumOfWorkingDays)
{
    totalWorkingDays++;
    let AttendanceCheck = Math.floor(Math.random()*10);
    let empHrs = getWorkingHours(AttendanceCheck);
    totalEmpHrs += AttendanceCheck;

}
let EmpWage1 = caldailywage(totalEmpHrs);
console.log("Total Days = " + totalWorkingDays+" Days" + ",   Total Hrs = " + totalEmpHrs+" Hours" + ", Emp Wage = " +"Rs "+ EmpWage);

// UC7A - find the first occurrence when full Time wages was earned using find function
let totEmpWage = 0;
function sum(DailyWage)
{
    totEmpWage+= DailyWage;
}
EmpdailyWages.forEach(sum);
console.log("Total Days = " + totalWorkingDays+" Days" + ",   Total Hrs = " + totalEmpHrs+" Hours" + ", Emp Wage = " +"Rs "+ EmpWage);

function totalWages(totalWage,dailyWage)
{
    return totalWage + dailyWage;
}
console.log("UC7A - Emp Wage with reduce : " + EmpdailyWages.reduce(totalWages,0));

// UC 7B - show the day along with daily wages using map helper function
let dailycntr = 0;
function mapDayWithWage(dailyWage)
{
    dailycntr++;
    return dailycntr + " = "+ dailyWage;
}
let mapDayWithWageArr = EmpdailyWages.map(mapDayWithWage);
console.log("UC7B _ Daily Wages Map");
console.log(mapDayWithWageArr);

// 7C Show Days when full time wages of 160 were earned
function FullTimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
let fulldayWagesArr = mapDayWithWageArr.filter(FullTimeWage);
console.log("UC7C - Daily Wages filter when");
console.log(fulldayWagesArr);