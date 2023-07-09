/**
 * Open Closed Principle
 * 
 * - Function, classes and modules should be extensible but not modifiable
 */


/**
 * For Example: Let say we have list of work hours and empolyee detail
 * So, if define our function in this way
 */

// class ManageSalaries {
//     constructor() {
//         this.salaryRates = [
//             { id: 1, role: 'developer', rate: 100},
//             { id: 2, role: 'architect', rate: 200},
//             { id: 3, role: 'manager', rate: 300}
//         ]
//     } 

//     calculateSalary(empId, hours) {
//         const workingRate = this.salaryRates.find((emp) => {
//             return emp.id === empId
//         });

//          return `$${workingRate.rate * hours} USD`
//     }
// }

// const salaryCounter = new ManageSalaries();
// console.log(salaryCounter.calculateSalary(2, 34))


/** 
 * In above function there is one problem, so now whenever we will define
 * a new salary rate and new then we will have to modify codebase for that
 * 
 * SO, OCP says, once funtion, class or such thing has been defined
 * then after that it should be exstinsible not modifable
 * 
 * so here we can add a new method instead of adding that item manually
 * in constructor
 */


// Open for extension and closed for modification


class ManageSalaries {
    constructor() {
        this.salaryRates = [
            { id: 1, role: 'developer', rate: 100},
            { id: 2, role: 'architect', rate: 200},
            { id: 3, role: 'manager', rate: 300}
        ]
    } 

    calculateSalary(empId, hours) {
        const workingRate = this.salaryRates.find((emp) => {
            return emp.id === empId
        });

         return `$${workingRate.rate * hours} USD`
    }

    addSalary(salaryStructure) {
        // handle edge cases
        this.salaryRates.push(salaryStructure)
    }
}

const salaryCounter = new ManageSalaries();

salaryCounter.addSalary({ id: 4, role: 'ux engineer', rate: 50})

console.log(salaryCounter.calculateSalary(4, 34))
