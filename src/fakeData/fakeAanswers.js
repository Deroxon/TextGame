function answerA() {

    let tableofContent = [
        "water",
        'bucket',
        'router'
    ]
    let tableofStats = [
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
    ]
    let tableofStoryline = [
        'you choosed water',
        'you choosed bucket',
        'you choosed route',
    ]
    let tableofPenaltyStoryline = [
        'you choosed water',
        'you choosed bucket but you are to weak to hold it and you dropped bucket into abyss',
        'you choosed route',
    ]
    let tableofCondition = [
        'hp0',
        'hp3',
        'hp0'
    ]
    let tableofPenalty = [
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 1},
        {hp: 0, att: 0, def: 0, coin: 0},
    ]
    let tableofCheckDec = [
        '',
        '0',
        ''
    ]
    
    // A decision Condition
    
    let decConditionA = [
        '',
        '',
        ''
    ]
    let decResultA = [
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
    ]
    
    let decFalseResultA = [
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
    ]
    
    let decResultAtextline = [
        '',
        '',
        '',
    ]
    
    let decFalseResultATextline = [
        '',
        '',
        '',
    ]
    
    // B decision condition
    
    let decConditionB = [
        '',
        'at1',
        ''
    ]
    let decResultB = [
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 1, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
    ]
    
    let decFalseResultB = [
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
    ]
    
    let decResultBtextline = [
        '',
        'Beacuse you took armor, you are getting stronger to carry it everyday, you got 1 attack point',
        '',
    ]
    
    let decFalseResultBTextline = [
        '',
        'You are too weak to get stronger, by carring armor',
        '',
    ]
    
    // C decision Condition
    
    
    let decConditionC = [
        '',
        '',
        ''
    ]
    let decResultC = [
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
    ]
    
    let decFalseResultC = [
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
    ]
    
    let decResultCtextline = [
        '',
        '',
        '',
    ]
    
    let decFalseResultCTextline = [
        '',
        '',
        '',
    ]
    
    let tableAAAAA = []
    
    for(let i= 0; i <tableofContent.length; i++) {
        const A = { 
            content: tableofContent[i],
            stats: tableofStats[i],
            storyline: tableofStoryline[i],
            penaltyStoryline: tableofPenaltyStoryline[i],
            condition: tableofCondition[i],
            penalty: tableofPenalty[i],
            checkDec: tableofCheckDec[i],
    
            decConditionA: decConditionA[i],
            decResultA: decResultA[i],
            decFalseResultA: decFalseResultA[i],
            decResultAtextline: decResultAtextline[i],
            decFalseResultATextline: decFalseResultATextline[i],
    
    
            decConditionB: decConditionB[i],
            decResultB: decResultB[i],
            decFalseResultB: decFalseResultB[i],
            decResultBtextline: decResultBtextline[i],
            decFalseResultBTextline: decFalseResultBTextline[i],
    
            decConditionC: decConditionC[i],
            decResultC: decResultC[i],
            decFalseResultC: decFalseResultC[i],
            decResultCtextline: decResultCtextline[i],
            decFalseResultCTextline: decFalseResultCTextline[i],
    
        }
        
        tableAAAAA.push(A);
        console.log('executing code')
    }

    return {
        tableAAAAA
    }
}



export default answerA