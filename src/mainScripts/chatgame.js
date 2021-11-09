import React, {useState, useEffect} from "react";
import fakeAnswers from "../fakeData/fakeAnswers"



function ChatGame() {

    const [story, setStory] = useState('');
    const [decResultText, setResultText] = useState('') 
    const [answers, setAnswers] = useState({A: '', B: '', C: ''})
    const [game, setGame] = useState();
    const [actualStory, CountStory] = useState(0);
    const [alert, setAlert] = useState("alert");
    const [hero, setHeroStats] = useState({stats: {
        attack: 1,
        deffense: 1,
        healthPoints: 3,
        coin: 3, 
    }, 
    backpack : [], 
    })

    // mount first story, answers and game options
    useEffect( ()=> {
        setStory(fakeAnswers[0].story);
        setAnswers({A: fakeAnswers[0].A.content , B: fakeAnswers[0].B.content,C: fakeAnswers[0].C.content});
        setGame(fakeAnswers[0]);
    },[] )

  
    // param A,B,C
    function makeDecision(param) {

        let condition = false;
        
        // decision A, B, C checking condition if its true upgrade hero, and if false hero need to take punish 

        if(param === 'A') {
            // checking condition if the player fullfill it
            if(checkCondition(game.A.condition)) {
                // upgrade hero if yes
                upgradeHero(game.A.stats);
            } else {
                // punish, if there is any punish
                punishHero(param)
            }
            checkiFDecision(param) // A

          
        
            setAlert(game.A.storyline);

        } 
        
        else if (param === 'B') {
            
            if(checkCondition(game.B.condition)) {
                upgradeHero(game.B.stats);
            } else {
                punishHero(param)
            }
           
            setAlert(game.B.storyline);

        }

        else if (param === 'C') {

            if(checkCondition(game.C.condition)) {
                upgradeHero(game.C.stats);
            } else {
                punishHero(param)
            }

            setAlert(game.C.storyline);
         
        }
        // setting result of player answer and making new story
        fakeAnswers[actualStory].result = param;
        nextStory();

    }

    // decision to think
    function checkCondition(condition) {

        console.log(condition);
        // attribute
        let takeWhat = condition.slice(0,2);
        // value
        let takeCon = condition.slice(2,5);
        takeCon = Number(takeCon);

        // destrukturyzacja w obiekcie hero, obiektu stats
        let {healthPoints, attack, deffense, coins } = hero.stats;

        switch (takeWhat) {

            //healthpoints
            case 'hp': 
                if(healthPoints >= takeCon) {
                    return true;
                } else {
                    return false;
                }
            break;

            // attack
            case 'at': {
                if(attack >= takeCon) {
                    return true;
                } else {
                    return false;
                }
            }
            break;

            //deffens
            case 'def': {
                if(deffense >= takeCon) {
                    return true;
                } else {
                    return false;
                }
            }
            break;

            //coin
            case 'co': {
                if(coins >= takeCon) {
                    return true;
                } else {
                    return false;
                }
            }
            break

            //decision i need to think how decision will work
            case 'dc': {

            }
        }

        
        

    }



    function upgradeHero(...param) {

        console.log(param[0])
        // setting variables which one making new values in heros stats
        let newAttack = param[0].att + hero.stats.attack;
        let newDeffense = param[0].def + hero.stats.deffense;
        let newHealthPoints = param[0].hp + hero.stats.healthPoints;
        let newCoin= param[0].coin + hero.stats.coin;
        
        // setting new values to hero
        setHeroStats({stats: {
            attack:  newAttack, 
            deffense: newDeffense, 
            healthPoints: newHealthPoints, 
            coin: newCoin
        }})

        
    }
    function punishHero(param) {

    }

    function checkiFDecision(param) {

        if(param === "A") {
            if(game.A.checkDec === '') {
                return false
            }
            else { // if there is anything in checkDec
                checkDecision(game.A.checkDec, "A" );
            }
        }

        else if (param === "B") {
            if(game.B.checkDec === ''){
                return false;
            } 
            else {
                checkDecision(game.B.checkDec, "B");
            }
        }

        else if (param === "C") {
            if(game.C.checkDec === ''){
                return false;
            } 
            else {
                checkDecision(game.C.checkDec, "B");
            }
        }
        

    }


    function checkDecision(checkdec, ans) {

        // example '2' 
        console.log(checkdec)
        checkdec = Number(checkdec);

        // result of second story choosed
        let grabdecisionofStory = fakeAnswers[checkdec].result // example 'B'
        console.log(grabdecisionofStory)

        // choosing which one answer decResult i should choose
        let choosedAnswer;

        if(ans === 'A') {
            choosedAnswer = game.A;
        }
        else if (ans=== 'B') {
            choosedAnswer = game.B;
        }

        else if (ans === 'C') {
            choosedAnswer = game.C;
        }

        // displaying choosedAnswerResult and doing it
            if(grabdecisionofStory === "A") {
                setResultText(choosedAnswer.decResultAtextline)
            }
            else if (grabdecisionofStory === "B") {
                setResultText(choosedAnswer.decResultBtextline)
            }
            else if (grabdecisionofStory === "C") {
                setResultText(choosedAnswer.decResultCtextline)
            }
            

        


            

        
    }


    function nextStory() {

        

        // setting game  and count story
        setGame(fakeAnswers[actualStory + 1]);
        CountStory(actualStory+1);

        // setting answers of the next part of story
        setAnswers({
            A: fakeAnswers[actualStory +1].A.content,
            B: fakeAnswers[actualStory +1].B.content, 
            C: fakeAnswers[actualStory +1].C.content, 
        })
        
        // set story
        setStory(fakeAnswers[actualStory +1].story)
        
    }

    
    // 1. Make punish system with const penalty or temporary
    // 2. Think how decision would work
    // 3. Make prettier css styles
    // 4. checkDecision function
    // 5. write more stories
    // 6. more RWD
    // 7. function which one taking u to next story in mainLine



    return (
        <div>
            <main>
                

                    <div className="communicate">{alert}</div>  
                    
                    <div className="stats">{"att:"+hero.stats.attack} {"def:"+hero.stats.deffense}, {"coin:"+hero.stats.coin},{"hp:"+hero.stats.healthPoints}</div>
                    
                
                

                <div className="story">

                <p> {decResultText} </p> 

                    {story}

      
                </div>
        
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