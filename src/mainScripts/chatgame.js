import React, {useState, useEffect} from "react";
import fakeAnswers from "../fakeData/fakeAnswers"



function ChatGame() {

    const [story, setStory] = useState('');
    const [answers, setAnswers] = useState({A: '', B: '', C: ''})
    const [game, setGame] = useState();
    const [hero, setHeroStats] = useState({stats: {
        attack: 1,
        deffense: 1,
        healthPoints: 3,
        coin: 3, 
    }, 
    backpack : [], 

    decisions: {

    }
    })

    // mount first story, answers and game options
    useEffect( ()=> {
        setStory(fakeAnswers[0].story);
        setAnswers({A: fakeAnswers[0].A.content , B: fakeAnswers[0].B.content,C: fakeAnswers[0].C.content});
        setGame(fakeAnswers[0]);
    },[] )

  

    function makeDecision(param) {

        let condition = false;
        
        // decision A, B, C checking condition if its true upgrade hero, and if false hero need to take punish 
        
        if(param === 'A') {
            if(checkCondition(game.A.condition)) {
                upgradeHero(game.A.stats);
            } else {
                punishHero(param)
            }

        } 
        
        else if (param === 'B') {
            
            if(checkCondition(game.B.condition)) {
                upgradeHero(game.B.stats);
            } else {
                punishHero(param)
            }

        }

        else if (param === 'C') {

            if(checkCondition(game.C.condition)) {
                upgradeHero(game.C.stats);
            } else {
                punishHero(param)
            }
         
        }

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

    function checkDecision() {

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
            attack: newAttack, 
            deffense: newDeffense, 
            healthPoints: newHealthPoints, 
            coin: newCoin
        }})

        
    }
    function punishHero(param) {

    }

 

    return (
        <div>
            <main>
                

                    <div className="communicate">alert</div>  
                    
                    <div className="stats">{"att:"+hero.stats.attack} {"def:"+hero.stats.deffense}, {"coin:"+hero.stats.coin},{"hp:"+hero.stats.healthPoints}</div>
                    
                
                

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