function answerC() {

    let tableofContent = [
        "shield",
        'Left',
        'Knowledge',
        'Fight guards',
        'Right',
        'Dont buy anything',
        'Leave place',
        'Leave place',
        'Quiet escape',
        'Search in the shelfs',
        'Talk to Stranger',
        'Dont drink any potion',
        'Search destroyed house',
        'Try to run',
    ]
    let tableofStats = [
        {hp: 0, att: 0, def: 1, coin: 0},
        {hp: 0, att: 1, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 3},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 1, att: 0, def: 0, coin: 0},
        {hp: 1, att: 0, def: 0, coin: 2},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 3},
        {hp: 0, att: 0, def: 0, coin: 0},
    ]
    let tableofStoryline = [
        'You choosed shield which one is making you safer, you get 1 deffense point',

        'You choosed go to left, and see the bag, you decide to open it and find elixir of strength',

        'The old man seems impressed, you hear his voice but you cant see he is moving his mouth \"No one before you tell me the knowledge is most important hehehe.. \". After his laugh he stands up and slowly going to forest, his silhouette is dissapering.',

        'The fight is starting when you knocked up 1 of them very fast, and the second has no time to react for your hit',

        'You choosed well, the ball was in this cup, man with black hat seems angry, but you win 3 coins',

        'You didnt buy anything, the seller is telling you to get out of his store, but when you are leaving, there incoming customer who\'s speaking \"You was right, oldMan helped me  \", you are leaving confused and still thinking about this situation  ',

        "You choose to not heal urself, you are leaving the healer",

        'You decide tonot buy anything and leave the blacksmith.',

        'Beacuse your deffense is pretty good, you could escape quiet and nobody of them spots you. On your way there was a healing weed, which one is restore you 1 health Point',

        'You choosed to search shelfs, in two of them you found health potion and some coins. You get 1 health point and 2 coins',

        'You choosed to talk with stranger, he is coming closer and u both take a seat, \"I didnt expect the guest, who is not try to run or kill me, that\'s interesting. You can rest now, i won\'t hurt you. I know its suspicous but trust me im not doing experiments on living humans, also I\'m not killing them. \" ',

        '\" I dont trust you old man, i won\'t do it, if you respect me like human, let me leave. \" The old man seems dissatisfactioned \"I understand, leave then and don\'t come back, i have a lot of work, but good luck in ur adventures. \" ',

        'You came to house, and started searching for useful things, you entering the room looks like the living room with the chimmney with 3 corpses around, the shadow in corner is becoming closer and there is a skeleton going on you. You hitted him once and he fell apart. 3 coins dropped from him, you wondering if 3 coins are associated with this 3 corps.. ',

        'When you was trying to run they followed u and they was throwing, knives on you but your armor was good enough to protect you from the damage. You succesfully runaway',

    ]
    let tableofPenaltyStoryline = [
        '',
        '',
        '',
        'The fight is starting you knocked up 1 of them very fast, but second guard brings u down, you lost 2 coins and 1 healthPoint, but when they were grabbing ur coins you flit to the city ',
        '',
        '',
        '',
        '',
        'Beacuse your deffense wast too low, the goblin spotted you, so you needed to run and dont look on anything',
        '',
        '',
        '',
        'You came to house, and started searching for useful things, you entering the room looks like the living room with the chimmney with 3 corpses around, the shadow in corner is becoming closer and there is a skeleton going on you. You hitted him once but he counter it. You has been damaged, after hit u see no chance in this duel, you runaway and lost 1 healthPoint',

        'When you was trying to run they followed u and they was throwing, one of them throw knives on you, and u started bleeding, they caught u grab ur coins and beated u, u losted 5coins and 2 healthPoint',
    ]
    let tableofCondition = [
        'hp1',
        'hp1',
        'hp1',
        'at3',
        'hp1',
        'hp1',
        'hp1',
        'hp1',
        'de3',
        'hp1',
        'hp1',
        'hp1',
        'at4',
        'de5',
    ]
    let tableofPenalty = [
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: -1, att: 0, def: 0, coin: -2},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: -1, att: 0, def: 0, coin: 0},
        {hp: -2, att: 0, def: 0, coin: -5},

    ]
    let tableofCheckDec = [
        '',
        '',
        '',
        '',
        '',
        '1',
        '1',
        '',
        '',
        '',
        '',
        '5',
        '',
        '5',
    ]
    
    // A decision Condition
    
    let decConditionA = [
        '',
        '',
        '',
        '',
        '',
        '',
        'hp1',
        '',
        '',
        '',
        '',
        'hp1',
        '',
        '',
    ]
    let decResultA = [
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 1},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 1, att: 1, def: 1, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
    ]
    
    let decFalseResultA = [
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
    ]
    
    let decResultAtextline = [
        '',
        '',
        '',
        '',
        '',
        '',
        ' \" I heared that you met giant snake, i will pay you 1 coin if u decribe him, i need to make medicine to my mother \". After you told the healer about big snake he is giving u 1 coin',
        '',
        '',
        '',
        '',
        '\"Wait, you said you know about this place from the seller from city.  I\'m really glad to hear that, take this necklage, he will help u later\". The necklage emits small power, you gained 1 atttack, 1 deffense, 1 healthPoint ',
        '',
        '',
        
    ]
    
    let decFalseResultATextline = [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
    ]
    
    // B decision condition
    
    let decConditionB = [
        '',
        '',
        '',
        '',
        '',
        'hp1',
        '',
        '',
        '',
        '',
        '',
        'hp1',
        'de6',
    ]
    let decResultB = [
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 1, def: 0, coin: 1},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 1, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
    ]
    
    let decFalseResultB = [
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: -1, att: 0, def: 0, coin: 0},
    ]
    
    let decResultBtextline = [
        '',
        '',
        '',
        '',
        '',
        '\" Wait i recognize this coin! You was in old forest? this coin belongs to my son... If u have it i guess he is dead, can i offer you 2 coins and this grindstone?\" You are accepting the offer and you lost 1 coin and gain 2coins and 1 attack point ',
        '',
        '',
        '',
        '',
        '',
        '\"Wait, you said you know about this place from the seller from city.  I\'m really glad to hear that, take this ring of deffender, he will help u later\". The ring seems protect you. You gained 1 armor.',
        '',
        'The metal boots was slowing u down during escape, but your deffense is too much for knives to pierce the armor.',

    ]
    
    let decFalseResultBTextline = [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        'The metal boots was slowing u down during escape, you got 1 more damage.',
    ]
    
    // C decision Condition
    
    
    let decConditionC = [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
    ]
    let decResultC = [
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
    ]
    
    let decFalseResultC = [
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
    ]
    
    let decResultCtextline = [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
    ]
    
    let decFalseResultCTextline = [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
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



export default answerC