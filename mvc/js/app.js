studant.forEach(studants => {
    studants.media = {}

    for(let subject in studants.media){
        studants.media[subject] = avarege(...studants.grades[subject])
    }
});

console.log(studant)