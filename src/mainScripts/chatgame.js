import React, {useState, useEffect} from "react";
import fakeAnswers from "../fakeData/fakeAnswers"



function ChatGame() {

    const [story, setStory] = useState('');
    const [answers, setAnswers] = useState({A: '', B: '', C: ''})
    const [game, setGame] = useState();

    useEffect( ()=> {
        setStory(fakeAnswers[0].story);
        setAnswers({A: fakeAnswers[0].A.content , B: fakeAnswers[0].B.content,C: fakeAnswers[0].C.content});
        setGame(fakeAnswers[0]);
    },[] )

    console.log(game)

    function makeDecision(param) {

        if(param === 'A') {
            
        } 
        
        else if (param === 'B') {

        }

        else if (param === 'C') {
         
        }

    }

    function checkCondition() {

    }

    function checkDecision() {

    }

    function upgradeHero() {
        
    }

 

    return (
        <div>
            <main>
                

                    <div className="communicate">alert</div>  
                    
                    <div className="stats">att deff, coin, bacfasdfsadfsdk</div>
                    
                
                

                <div className="story">{story}</div>
        
                <div className="answers">answers
                    <ul>
                        <li onClick={() => makeDecision("A")}>A: {answers.A}</li>
                        <li onClick={() => makeDecision("B")}>B: {answers.B}</li>
                        <li onClick={() => makeDecision("C")}>C: {answers.C}</li>
                    </ul>

                </div>

            </main>
            
        </div>
    )

}

export default ChatGame;