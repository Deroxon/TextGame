function answerB() {

    let tableofContent = [
        "armor",
        'Center',
        "Love",
        "Bribe guards",
        'Center',
        'Heavy metal boots (2def)',
        'Light heal (1hp)',
        'Two-sided axe (4 coins)',
        'Attack group of Goblins',
        'Search Alchemic Table',
        'Attack him',
        'Drink Prototype',
        'Pick up the berries',
        'Pay them (4coins)',
    ]
    let tableofStats = [
        {hp: 0, att: 0, def: 1, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 1},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: -2},
        {hp: 0, att: 0, def: 0, coin: -1},
        {hp: 0, att: 0, def: 2, coin: -3},
        {hp: 1, att: 0, def: 0, coin: -1},
        {hp: 0, att: 3, def: 0, coin: -4},
        {hp: 0, att: 0, def: 1, coin: 4},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 1, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: -4},
    ]
    let tableofStoryline = [
        'You choosed armor which one is making you safer, you get 1 deffense point',

        'You went center and find small goblin with coin, goblin runaway from u and dropped coin which one u lift it',

        'You choosed Love, the old man is smiling but he start to terryfing you, but he stands up and goes to the forest and slowly dissapering. You heared a quiet laugh.',

        'The guards let you to enter the city, and one of them is giving u advice, always choose right',

        'The cup was empty, man with big hat seems to be happy. You lost 1 coin ',

        'You choosed Heavy metal boots, your deffense increase by 2. The Seller is telling you, that local medic is looking for information about giant Snake and he is speaking about strange old man living in the cave, near west Gate',

        'You has been healed by 1 Health point.',

        'You buyed two-sided axe, you gain 3 attack',

        'You killed them All they had 4 gold, and old armlet, which one is improve your deffense by 1',

        'You found a strange crystal broadcasting strange aqua light, it seems expensive. You took it',

        'You tried to attack him but stranger was faster, but you blocked power attack, your eyes couldnt keep up his moves anymore. He stunned you. After when you wake up, you was pinned to chair, stranger showed himself, his half face was without skin, you see bones, he grabed ur hand and started praying. You was confused, thats why you didn\'t tell anything  ',

        'After you drinked the potion, your muscles are a bit shaking and u can feel your body becoming small and not painful changes. You gained 1 attack.',

        'There was a wild fox in bush,he tried to attack u, but your armor protects you from any damage',

        'You decided to pay the robbers, you lost 4 coins but they spare ur life.',


    ]
    let tableofPenaltyStoryline = [
        '',
        '',
        '',
        'You dont have enough money to pay guards. The guards hitted you but let you in. You lost 1 healthPoint.',
        '',
        'You tried to pay, but you dont have enough coins, seller is speaking \"There is old man living in local cave, in front of west Gate, she is crazy, but he will help u in today\'s world, when u visit him, tell him, that im sending you  \"',
        "You had no money to Pay this, There was no point to come here",

        "You had no money to Pay for axe, There was no point to come here",

        'Goblins were stronger and they defeat you. U got hit by 2 health points, and they steal you part of armor. You lost 1 deffense point ',

        '',

        'You tried to attack him but stranger was faster, and you lost 1 health Points your eyes couldnt keep up his moves. He stunned you. After when you wake up, you was pinned to chair, stranger showed himself, his half face was without skin, you see bones, he grabed ur hand and started praying. You was confused, thats why you didn\'t tell anything  ',

        'After you drinked the potion, you cant feel effect beacuse your body is to weak to adapt the changes. You vomit the potion.',

        'When u was picking berries, wilf fox get out of bush and attacked u, you lost 1 healthPoint',

        'You was trying to pay the robbers but you dont have enough coins to pay them. They beat you up. You lost 2 health Points. '
    ]
    
    let tableofCondition = [
        'hp1',
        'hp1',
        'hp1',
        'co2',
        'hp1',
        'co3',
        'co1',
        'co4',
        'at6',
        'hp1',
        'at4',
        'hp2',
        'de2',
        'co4',

    ]
    let tableofPenalty = [
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: -1, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: -2, att: 0, def: -1, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: -1, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: -1, att: 0, def: 0, coin: 0},
        {hp: -2, att: 0, def: 0, coin: 0},
    ]
    let tableofCheckDec = [
        '',
        '',
        '',
        '',
        '',
        '1',
        '1',
        '0',
        '',
        '',
        '',
        '5',
        '',
        '',
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
        'co4',
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
        {hp: 0, att: 0, def: 0, coin: 1},
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
        'You selled your old sword. You get 1 coin.',
        '',
        '',
        '',
        '\"You said you know about this place from the seller from city.  I\'m really glad to hear that, take this necklage, he will help u later\". The necklage emits small power, you gained 1 atttack, 1 deffense, 1 healthPoint ',
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
        '',
        '',
    ]
    let decResultB = [
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 1, def: 0, coin:1},
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
        {hp: 0, att: 0, def: 0, coin: 0},
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
        '\"You said you know about this place from the seller from city.  I\'m really glad to hear that, take this ring of deffender, he will help u later\". The ring seems protect you. You gained 1 armor.',
        '',
        '',
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
        '',
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



export default answerB