interface type {
    Name:string, Dose: number, Frequency:string
}

let Medicine:type = {Name:'Levofloxacin', Dose: 500, Frequency: 'B.D'};

console.log('\nInformation related to medicine of the patient:\n');
console.log(`Patient Medicine is ${Medicine.Name}`);
console.log(`Dose is ${Medicine.Dose}`);
console.log(`Frequency of taking it is ${Medicine.Frequency}`);


