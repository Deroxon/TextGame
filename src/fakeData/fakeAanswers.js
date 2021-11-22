function answerA() {

    let tableofContent = [
        "Short sword",
        'Right',
        'Money',
        'Climb up',
        'Left',
        'Leather gloves (1def)',
        'Medium healing (2hp)',
        'Shape Sword (3coins)',
        'Attack goblin',
        'Search under the bed',
        'Run',
        'Drink Original Potion',
        'Go forward',
        'Atack Them',
        'Tell truth',
        'Let him speak',
        'Accept mision',
        'leave the dog',
        'knee',
        'escape',


    ]
    let tableofStats = [
        {hp: 0, att: 1, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 1},
        {hp: 0, att: 0, def: 0, coin: 1},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: -1},
        {hp: 0, att: 0, def: 1, coin: -3},
        {hp: 2, att: 0, def: 0, coin: -2},
        {hp: 0, att: 2, def: 0, coin: -3},
        {hp: 0, att: 0, def: 0, coin: 1},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 1, def: 2, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 1, coin: 5},
        {hp: 1, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: -1, def: -1, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
    ]
    let tableofStoryline = [
        'You choosed short sword which one is making you stronger, you get 1 attack point',
        
        "When u went right u find coin covered with blood. U gain a coin there become scary and in ur way u see giant Snake coming to u, you are so strong, that's why you dodged his attack",

        'Old man is smiling but this smile become terryfing, he stand up and he is going to the forest and his silhouette is slowly dissapering, u can see he left 2 coins on the ground. You gained 2 coins',

        'You climbed up to the walls, and get to the City',

        'Big hat is showing u empty cup, you lost 1 coin',

        'You choosed leather Gloves, your deffense increase by 1. The Seller is telling you, that local medic is looking for information about giant Snake and he is trading another information for that.',

        'Your wounds has been healed. You gain 2 healthPoints.',

        'You bought shape sword, your attack is increase by 2',

        'You attacked the goblin and take him down, he had 1 coin. The goblins near you didnt notice your presence. You walked away',

        'There was a something looks like rat under the bed, it try to bites u but u deffend yourself',

        'Stranger grabbed you when u was trying to run from him, he pick up big stuff and you has been stunned, but luckily you have enough armor. After when you wake up, you was pinned to chair, stranger himself, his half face was without skin, you see bones, he grabed ur hand and started praying. You was confused, thats why you didn\'t tell anything ',

        'After you drinked the potion, your skin become harder and seems like light armor, your muscles are shaking and your body slowly adapt the changes. After 10 minutes of pain and changes you look around, and stranger leads you out of the cave. You gain 1 attack and 2 armor.',

        'You decided to not stay in this place any longer.',

        'The fight was quickly, the man who was speaking first was trying to thrust with his sword but you cut him in half. The man from right with giant axe charge on you and make a sweeping strike, you dodged it and make counter, which one knocked down him, last man just escape, when he saw his partners on the ground.From the leader you picked up 5 coins, and took his shield which one grat\'s you 1 armor more ',

        ' \" I\'m from small village Opros, but i camed from Versola, on my way i met some bad people, thanks for helping me.  \" Young man told \"Opros.. let me bring my grandpa, he know you and he will talk with you about Opros... \" ',

        'The old man is still take a breath and start talking:',

        'You are accepting the mission, old man seems satisfactioned, and wishing u good luck. \"Last advice for you is that, that orcs are powerful and most common, they almost all have 6 attack, single goblin has 2 attack, ogres are strong and they have 15attack \"  ',

        'You decided to leave the dog for his own destiny.',

        'You attacked the knee, the cut was excelent, but the Orc is still standing, he hitted u with his blade, the cut was shallow but it weakened you. You lost 1armor and 1 attack. ',

        'You escaped from the Orc, he was too slow to catch you up. ',

    ]
    let tableofPenaltyStoryline = [
        '',

        'When u went right u find coin covered with blood, there become scary and in ur way u see giant Snake coming to u, unforuanetly you have not time to reaction and snake bites, he was no posioneus and u walk forward',

        '',

        'You climbed but when u was on the top you fell, you lost 1 health Point',

        '',

        'You tried to pay, but you dont have enough coins, seller is speaking \"There is old man living in local cave, in front of west Gate, she is crazy, but he unstable, when u visit him, tell him, that im sending you  \"',

        "You had no money to Pay this, There was no point to come here",

        'You had no coins to pay off the sword. You are leaving with empty hands.',

        'The goblin was stronger and faster, he dealt you 1 dmg',

        'You are keep checking under the bed and see the strange creature looks like bigger rat. It attack\'s and bited you. You lost 1 health point. ',

        'Stranger grabbed you when u was trying to run from him, he pick up big stuff and you has been stunned. You lost 1 health Point. After when you wake up, you started feeling headache, your hands was pinned to chair. After few minutes stranger showed himself, his half face was without skin, you see bones, he grabed ur hand and started praying. You was confused, thats why you didn\'t tell anything ',

        'After you drinked the potion, your skin become harder, your muscles are shaking and but your body can\'t adapt the changes, some of your skin is destroyed. After 10 minutes of pain and changes you look around, and leads you out of the cave.',

        'The fight was quickly, the man who was speaking first was trying to thrust with his sword but you deffend yourself, unexpectedly the second came from behind and knock you up. You lost 4 coins, 2 healthPoints and they steal ur part of armor, which one is taking from u 2 deffense points ',

        '',
        '',
        '',
        '',

        'You attacked the knee, the cut was too shallow, Orc start to counter he hitted u with his blade, the cut was painful, you feel the weakened. You lost 2 attack points, 1 healthPoint and 1 deffense. ',

        '',

    ]
    let tableofCondition = [
        'hp1',
        'at4',
        'hp1',
        'at3',
        'hp1',
        'co3',
        'co2',
        'co3',
        'at2',
        'de3',
        'de3',
        'hp2',
        'hp1',
        'at7',
        'hp1',
        'hp1',
        'hp1',
        'hp1',
        'at5',
        'hp1',
    ]
    let tableofPenalty = [
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: -1, att: 0, def: 0, coin: 1},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: -1, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: -1, att: 0, def: 0, coin: 0},
        {hp: -1, att: 0, def: 0, coin: 0},
        {hp: -1, att: 0, def: 0, coin: 0},
        {hp: -1, att: 0, def: 1, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: -2, att: 0, def: -2, coin: -4},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: -1, att: -2, def: -1, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
    ]
    let tableofCheckDec = [
        '',
        '0',
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
        '',
        '',
        '',
        '',
        '',
        '',
    ]
    
    // A decision Condition
    
    let decConditionA = [
        '',
        'at4',
        '',
        '',
        '',
        '',
        'hp1',
        'co3',
        '',
        '',
        '',
        'hp1',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',

    ]
    let decResultA = [
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 1, att: 0, def: 0, coin: 0},
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
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
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
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
    ]
    
    let decResultAtextline = [
        '',
        'U pick sword in ur hands and deffense yourself of the giant snake',
        '',
        '',
        '',
        '',
        ' \" I heared that you met giant snake, i will pay you 1 coin if u decribe him, i need to make medicine to my mother \". After you told the healer about big snake he is giving u 1 coin',
        'You selled your old sword and u gain 1 coin for that',
        '',
        '',
        '',
        '\"You said you know about this place from the seller from city.  I\'m really glad to hear that, take this necklage, he will help u later\". The necklage emits small power, you gained 1 atttack, 1 deffense, 1 healthPoint ',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
    ]
    
    let decFalseResultATextline = [
        '',
        'Snake was too strong and too fast for you, you lost the fight, even with the sword',
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
        '',
        '',
        '',
        '',
    ]
    
    // B decision condition
    
    let decConditionB = [
        '',
        'de2',
        '',
        '',
        '',
        'hp1',
        'hp1',
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
        '',
        '',
        '',
    ]
    let decResultB = [
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 1, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 1, def: 0, coin: 1},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 1, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
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
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
    ]
    
    let decResultBtextline = [
        '',
        'The armor is protecting you of damage and you could runaway',
        '',
        '',
        '',
        '\" Wait i recognize this coin! You was in old forest? this coin belongs to my son... If u have it i guess he is dead, can i offer you 2 coins and this grindstone?\" You are accepting the offer and you lost 1 coin and gain 2 coins and 1 attack point ',
        '',
        '',
        '',
        '',
        '',
        '\"You said you know about this place from the seller from city.  I\'m really glad to hear that, take this ring of deffender, he will help u later\". The ring seems protect you. You gained 1 armor.',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
    ]
    
    let decFalseResultBTextline = [
        '',
        'Armor is not protecting u of the damage',
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
        '',
        '',
        '',
        '',
    ]
    
    // C decision Condition
    
    
    let decConditionC = [
        '',
        'de2',
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
        '',
        '',
        '',
        '',
    ]
    let decResultC = [
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 1, att: 0, def: 0, coin: 0},
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
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
    ]
    
    let decFalseResultC = [
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 1, att: 0, def: -1, coin: 0},
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
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
        {hp: 0, att: 0, def: 0, coin: 0},
    ]
    
    let decResultCtextline = [
        '',
        'Shield is protecting you of damage, and you can runaway',
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
        '',
        '',
        '',
        '',
    ]
    
    let decFalseResultCTextline = [
        '',
        'Shield is protecting you from the damage but the snake pulls it out and you lose your shield. You lost 1 deffense',
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



export default answerA