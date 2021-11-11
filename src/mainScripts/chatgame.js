import React, {useState, useEffect} from "react";
import fakeAnswers from "../fakeData/fakeAnswers"
import {GiTwoCoins, GiBroadsword, GiShield, GiHearts} from "react-icons/gi";
import { IconContext } from "react-icons";


function ChatGame() {

    const [story, setStory] = useState('');
    const [decResultText, setResultText] = useState('') 
    const [answers, setAnswers] = useState({A: '', B: '', C: ''})
    const [game, setGame] = useState();
    const [actualStory, CountStory] = useState(0);
    const [alert, setAlert] = useState("alert");
    const [upgrades, setUpgrades] = useState([]);
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


    useEffect( () => {
        // if we go to nextStory we sum Heroes stats and display it
        sumHeroUpgrades();
    }, [actualStory])


 

  
    // param A,B,C
    function makeDecision(param) {
        console.error('makeDecision')
        let condition = false;
       
        // decision A, B, C checking condition if its true upgrade hero, and if false hero need to take punish 

        if(param === 'A') {
            // checking condition if the player fullfill it
            
            if(checkCondition(game.A.condition)) {
                // upgrade hero if yes
                console.log('upgrading A hero')
                upgradeHero(game.A.stats);
            } else {
                // punish, if there is any punish
                console.log(game.A.penalty)
                upgradeHero(game.A.penalty)
                console.log('use penalty')
            }
            checkiFDecision(param) // A

           
        
            setAlert(game.A.storyline);

        } 
        
        else if (param === 'B') {
            
            if(checkCondition(game.B.condition)) {
                upgradeHero(game.B.stats);
            } else {
                upgradeHero(game.B.penalty)
                console.log('use penalty')
            }
            checkiFDecision(param) 

           
           
            setAlert(game.B.storyline);

        }

        else if (param === 'C') {

            if(checkCondition(game.C.condition)) {
                upgradeHero(game.C.stats);
            } else {
                console.log('use penalty')
                upgradeHero(game.C.penalty)
            }
            checkiFDecision(param) 



            setAlert(game.C.storyline);
         
        }
        // setting result of player answer and making new story
        fakeAnswers[actualStory].result = param;
        nextStory();

    }

    // decision to think
    function checkCondition(condition) {
        console.error('checkCondition')

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
                    console.log('nie zwracam')
                    return false;
                }
            }
            break;

            //deffens
            case 'de': {
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


    function sumHeroUpgrades() {

        console.error("sum hero Updates")

        let sumAttack = hero.stats.attack;
        let sumDeffense = hero.stats.deffense;
        let sumHealthPoints = hero.stats.healthPoints;
        let sumCoins= hero.stats.coin;

        for(let i= 0; i<upgrades.length; i++) {
            sumAttack = sumAttack +upgrades[i].att
            sumDeffense = sumDeffense + upgrades[i].def
            sumHealthPoints = sumHealthPoints + upgrades[i].hp
            sumCoins = sumCoins + upgrades[i].coin
        }

        
        
        /// PROBLEM IS THE OVERWRITING VALUES
        // setting new values to hero
        setHeroStats({stats: {
            attack: sumAttack, 
            deffense: sumDeffense, 
            healthPoints: sumHealthPoints, 
            coin: sumCoins
        }})

    }



    function upgradeHero(...param) {
        setUpgrades(upgrades => [...upgrades, param[0] ]);
    }
    

    function checkiFDecision(param) {
        console.error('checkIfDecision')

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
        console.error('checkDecision')
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

        // displaying choosedAnswerResult and upgrading hero if the hero is making condition or upgrade him like penalty if dont
        
            if(grabdecisionofStory === "A") {

                    if(checkCondition(choosedAnswer.decConditionA) ) {
                        upgradeHero(choosedAnswer.decResultA)
                        setResultText(choosedAnswer.decResultAtextline)
                    }
                    else {
                        upgradeHero(choosedAnswer.decFalseResultA)
                        setResultText(choosedAnswer.decFalseResultATextline)
                    }

                    
                   

                
            }
            else if (grabdecisionofStory === "B") {

                if(checkCondition(choosedAnswer.decConditionA)) {
                    upgradeHero(choosedAnswer.decResultB)
                    setResultText(choosedAnswer.decResultBtextline)

                }
                else {
                    upgradeHero(choosedAnswer.decFalseResultB)
                    setResultText(choosedAnswer.decFalseResultBTextline)
                }


                
                
            }
            else if (grabdecisionofStory === "C") {

                if(checkCondition(choosedAnswer.decConditionA)) {
                    upgradeHero(choosedAnswer.decResultC)
                    setResultText(choosedAnswer.decResultCtextline)
                }
                else {
                    upgradeHero(choosedAnswer.decFalseResultC)
                    setResultText(choosedAnswer.decFalseResultCTextline)
                }
                
               
                
            }

            
            

        


            

        
    }


    function nextStory() {
        console.error('nextStory')
      
        

        // setting game  and count story
        CountStory(actualStory+1);
        setGame(fakeAnswers[actualStory + 1]);
       

        // setting answers of the next part of story
        setAnswers({
            A: fakeAnswers[actualStory +1].A.content,
            B: fakeAnswers[actualStory +1].B.content, 
            C: fakeAnswers[actualStory +1].C.content, 
        })
        
        // set story
        setStory(fakeAnswers[actualStory +1].story)

    }

    
    // 2. Think how decision would work
    // 5. write more stories
    // 7. function which one taking u to next story in mainLine
    // 8. make animation of fading

    console.log(upgrades)
    console.log(hero)

    return (
        <div>
            <main>
                

                    
                    
                    <div className="stats">

                        <IconContext.Provider value={{className: "icon", }}>
                             <GiBroadsword />  
                        </IconContext.Provider>
                        {hero.stats.attack}

                        <IconContext.Provider value={{className: "icon", }}>
                             <GiShield />  
                        </IconContext.Provider>
                        {hero.stats.deffense+ " "}

                        <IconContext.Provider value={{className: "icon", }}>
                             <GiTwoCoins />  
                        </IconContext.Provider>
                        {hero.stats.coin}

                        <IconContext.Provider value={{className: "icon", }}>
                             <GiHearts />  
                        </IconContext.Provider>
                        {hero.stats.healthPoints} 
                    </div>
                    
          
               
               
                <div className="communicate">{alert}</div>  
                <div className="story">

                <p> {decResultText} </p> 

                  <p>{story} </p>  

     
                </div>

             
                <div className="answers">
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