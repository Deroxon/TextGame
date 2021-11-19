import answerA from "../fakeData/fakeAanswers"
import answerB from "../fakeData/fakeBanswers"
import answerC from "../fakeData/fakeCanswers"
import story from "../fakeData/fakeStory"


// fake answers are imported and instert by for
let fakeAnswers= [
    
]


console.log(answerA());
console.log(answerB());
console.log(answerC());
console.log(story);

for(let i= 0; i<story.length; i++) {
    let A = answerA()
    let B = answerB()
    let C = answerC()

    let obj = {
        story: story[i],
        A: A.tableAAAAA[i],
        B: B.tableAAAAA[i],
        C: C.tableAAAAA[i],
        result: '',
        resultCondition: false,
    }

    fakeAnswers.push(obj)


}


export default fakeAnswers