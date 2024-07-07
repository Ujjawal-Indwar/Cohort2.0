//WAP to print particular gender from the array

const genderNames = ["Ujj", "Suj", "Poo"];
const gender = ['M', 'M', 'F'];

for (let i = 0; i < genderNames.length; i++){
    if (gender[i] == 'M') {
        console.log(genderNames[i]);
    }
}