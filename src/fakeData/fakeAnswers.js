let fakeAnswers= [
    {
        story: "You woke up in small village named Opros, in the Kingdom of Renor. You came from poor family, but recently in the kingdom there are increased attacks from monsters, you decide to change something in ur life and go to dangerously adventure, your friend the blacksmith offer you one item which one could help you. Choose Wisely",

        A: {
            content: 'sword',
            stats: {hp: 0, att: 1, def: 0, coin: 0},
            storyline: "You choosed Sword which one is making you stronger, you get 1 attack point",
            condition: "hp0", // hp 1 if yes + if no there is nothing
            penalty: {hp: 0, att: 0, def: 0, coin: 0}, // penalty
            
            checkDec: '', // checking story of decision in act for example 5

            decConditionA: '', // condition to make
            decResultA: {hp: 0, att: 0, def: 0, coin: 0},// stats to make or make to future history
            decFalseResultA: {hp: 0, att: 0, def: 0, coin: 0}, 
            decResultAtextline: '', // textline to decisione maked
            decFalseResultATextline: '',

            decConditionB: '',
            decResultB: {hp: 0, att: 0, def: 0, coin: 0},
            decFalseResultA: {hp: 0, att: 0, def: 0, coin: 0},
            decResultBtextline: '',
            decFalseResultBTextline: '',

            decConditionC: '',
            decResultC: {hp: 0, att: 0, def: 0, coin: 0},
            decFalseResultA: {hp: 0, att: 0, def: 0, coin: 0},
            decResultCtextline: '',
            decFalseResultCTextline: '',
        },
        B: {
            content: 'armor',
            stats: {hp: 0, att: 0, def: 1, coin: 0},
            storyline: "You choosed armor which one is making you safer, you get 1 deffense point",
            condition: "hp1",
            penalty:  {hp: 0, att: 0, def: 0, coin: 0},
            checkDec: '', // checking story of decision in act for example 5

            decConditionA: '', // condition to make
            decResultA: {hp: 0, att: 0, def: 0, coin: 0}, // stats to make or make to future history
            decFalseResultA: {hp: 0, att: 0, def: 0, coin: 0},
            decResultAtextline: '',
            decFalseResultATextline: '', // textline to decisione maked

            decConditionB: '',
            decResultB: {hp: 0, att: 0, def: 0, coin: 0},
            decFalseResultA: {hp: 0, att: 0, def: 0, coin: 0},
            decResultBtextline: '',
            decFalseResultBTextline: '',

            decConditionC: '',
            decResultC: {hp: 0, att: 0, def: 0, coin: 0},
            decFalseResultA: {hp: 0, att: 0, def: 0, coin: 0},
            decResultCtextline: '',
            decFalseResultCTextline: '',
        },

        C: {
            content: 'shield',
            stats: {hp: 0, att: 0, def: 1, coin: 0},
            storyline: "You choosed shield which one is making you safer, you get 1 deffense point",
            condition: "hp1",
            penalty:  {hp: 0, att: 0, def: 0, coin: 0},
            checkDec: '',

            decConditionA: '', 
            decResultA: {hp: 0, att: 0, def: 0, coin: 0},
            decFalseResultA: {hp: 0, att: 0, def: 0, coin: 0},
            decResultAtextline: '',
            decFalseResultATextline: '', 

            decConditionB: '',
            decResultB: {hp: 0, att: 0, def: 0, coin: 0},
            decFalseResultA: {hp: 0, att: 0, def: 0, coin: 0},
            decResultBtextline: '',
            decFalseResultBTextline: '',

            decConditionC: '',
            decResultC: {hp: 0, att: 0, def: 0, coin: 0},
            decFalseResultA: {hp: 0, att: 0, def: 0, coin: 0},
            decResultCtextline: '',
            decFalseResultCTextline: '',
        },
        result: ''
    },
///////////////////////////////////////////////////////////////////////////////////

    {
        story: "Your next steps was going to city Versola, wherein you can get more knowledge about monsters who attacking this kingdom, you went to forest beacuse it was the fastest way to get to the city. The road is quiet, until you get to crossroad, you need to choose way u go.  ",

        A: {
            content: 'Right',
            stats: {hp: 0, att: 0, def: 0, coin: 1},
            storyline: "when u went right u find coin covered with blood, there become scary and in ur way u see giant Snake coming to u, unforuanetly you have not time to reaction and snake bites, he was no posioneus and u walk forward",
            condition: "at4", // hp 1 if yes + if no there is nothing
            penalty: {hp: -1, att: 0, def: 0, coin: 0}, // penalty
            
            checkDec: '0', // checking story of decision in act for example 5

            decConditionA: 'at4', // condition to make
            decResultA: {hp: 1, att: 0, def: 0, coin: 0}, // stats to make or make to future history
            decFalseResultA: {hp: 0, att: 0, def: 0, coin: 0},
            decResultAtextline: 'U pick sword in ur hands and deffense yourself of the giant snake', // textline to decisione maked
            decFalseResultATextline: 'Snake was too strong and too fast for you, you lost even with the sword',

            decConditionB: 'de2',
            decResultB: {hp: 1, att: 0, def: 0, coin: 0},
            decFalseResultB: {hp: 0, att: 0, def: 0, coin: 0},
            decResultBtextline: 'The armor is protecting you of damage and you could runaway',
            decFalseResultBTextline: 'Armor is not protecting u of the damage',

            decConditionC: 'de2',
            decResultC: {hp: 1, att: 0, def: 0, coin: 0},
            decFalseResultC: {hp: 1, att: 0, def: -1, coin: 0},
            decResultCtextline: 'Shield is protecting you of damage, and you can runaway',
            decFalseResultCTextline: "Shield is protecting you from the damage but the snake pulls it out and you lose your shield. You lost 1 deffense"
        },
        B: {
            content: 'Center',
            stats: {hp: 0, att: 0, def: 0, coin: 1},
            storyline: "You went center and find small goblin with coin, goblin runaway from u and dropped coin which one u lift it",
            condition: "hp1",
            penalty:  {hp: 0, att: 0, def: 0, coin: 0},
            checkDec: '',
            decParametrs: '',

            decConditionA: '', 
            decResultA: {hp: 0, att: 0, def: 0, coin: 0},
            decFalseResultA: {hp: 0, att: 0, def: 0, coin: 0},
            decResultAtextline: '',
            decFalseResultATextline: '' ,

            decConditionB: '',
            decResultB: {hp: 0, att: 0, def: 0, coin: 0},
            decFalseResultB: {hp: 0, att: 0, def: 0, coin: 0},
            decResultBtextline: '',
            decFalseResultBTextline: '',

            decConditionC: '',
            decResultC: {hp: 0, att: 0, def: 0, coin: 0},
            decFalseResultC: {hp: 0, att: 0, def: 0, coin: 0},
            decResultCtextline: '',
            decFalseResultCTextline: '',
        },

        C: {
            content: 'Left',
            stats: {hp: 0, att: 1, def: 0, coin: 0},
            storyline: "You choosed go to left, and see the bag, you decide to open it and find elixir of strength",
            condition: "hp1",
            penalty:  {hp: 0, att: 0, def: 0, coin: 0},
            checkDec: '',
            decParametrs: '',

            decConditionA: '', 
            decResultA: {hp: 0, att: 0, def: 0, coin: 0},
            decFalseResultA: {hp: 0, att: 0, def: 0, coin: 0},
            decResultAtextline: '', 
            decFalseResultATextline: '',

            decConditionB: '',
            decResultB: {hp: 0, att: 0, def: 0, coin: 0},
            decFalseResultB: {hp: 0, att: 0, def: 0, coin: 0},
            decResultBtextline: '',
            decFalseResultBTextline: '',

            decConditionC: '',
            decResultC: {hp: 0, att: 0, def: 0, coin: 0},
            decFalseResultC: {hp: 0, att: 0, def: 0, coin: 0},
            decResultCtextline: '',
            decFalseResultCTextline: '',
        },
        result: ''
    },
////////////////////////////////////////////////////////////////////////////////
{
    story: "You woke up in small village named Opros, in the Kingdom of Renor. You came from poor family, but recently in the kingdom there are increased attacks from monsters, you decide to change something in ur life and go to dangerously adventure, your friend the blacksmith offer you one item which one could help you. Choose Wisely",

    A: {
        content: 'sword',
        stats: {hp: 0, att: 1, def: 0, coin: 0},
        storyline: "You choosed Sword which one is making you stronger, you get 1 attack point",
        condition: "hp1", // hp 1 if yes + if no there is nothing
        penalty: {hp: 0, att: 0, def: 0, coin: 0}, // penalty
        
        checkDec: '', // checking story of decision in act for example 5

        decConditionA: '', // condition to make
        decResultA: {hp: 0, att: 0, def: 0, coin: 0},// stats to make or make to future history
        decFalseResultA: {hp: 0, att: 0, def: 0, coin: 0}, 
        decResultAtextline: '', // textline to decisione maked
        decFalseResultATextline: '',

        decConditionB: '',
        decResultB: {hp: 0, att: 0, def: 0, coin: 0},
        decFalseResultA: {hp: 0, att: 0, def: 0, coin: 0},
        decResultBtextline: '',
        decFalseResultBTextline: '',

        decConditionC: '',
        decResultC: {hp: 0, att: 0, def: 0, coin: 0},
        decFalseResultA: {hp: 0, att: 0, def: 0, coin: 0},
        decResultCtextline: '',
        decFalseResultCTextline: '',
    },
    B: {
        content: 'armor',
        stats: {hp: 0, att: 0, def: 1, coin: 0},
        storyline: "You choosed armor which one is making you safer, you get 1 deffense point",
        condition: "hp1",
        penalty:  {hp: 0, att: 0, def: 0, coin: 0},
        checkDec: '', // checking story of decision in act for example 5

        decConditionA: '', // condition to make
        decResultA: {hp: 0, att: 0, def: 0, coin: 0}, // stats to make or make to future history
        decFalseResultA: {hp: 0, att: 0, def: 0, coin: 0},
        decResultAtextline: '',
        decFalseResultATextline: '', // textline to decisione maked

        decConditionB: '',
        decResultB: {hp: 0, att: 0, def: 0, coin: 0},
        decFalseResultA: {hp: 0, att: 0, def: 0, coin: 0},
        decResultBtextline: '',
        decFalseResultBTextline: '',

        decConditionC: '',
        decResultC: {hp: 0, att: 0, def: 0, coin: 0},
        decFalseResultA: {hp: 0, att: 0, def: 0, coin: 0},
        decResultCtextline: '',
        decFalseResultCTextline: '',
    },

    C: {
        content: 'shield',
        stats: {hp: 0, att: 0, def: 1, coin: 0},
        storyline: "You choosed shield which one is making you safer, you get 1 deffense point",
        condition: "hp1",
        penalty:  {hp: 0, att: 0, def: 0, coin: 0},
        checkDec: '',

        decConditionA: '', 
        decResultA: {hp: 0, att: 0, def: 0, coin: 0},
        decFalseResultA: {hp: 0, att: 0, def: 0, coin: 0},
        decResultAtextline: '',
        decFalseResultATextline: '', 

        decConditionB: '',
        decResultB: {hp: 0, att: 0, def: 0, coin: 0},
        decFalseResultA: {hp: 0, att: 0, def: 0, coin: 0},
        decResultBtextline: '',
        decFalseResultBTextline: '',

        decConditionC: '',
        decResultC: {hp: 0, att: 0, def: 0, coin: 0},
        decFalseResultA: {hp: 0, att: 0, def: 0, coin: 0},
        decResultCtextline: '',
        decFalseResultCTextline: '',
    },
    result: ''
},

{
    story: "You woke up in small village named Opros, in the Kingdom of Renor. You came from poor family, but recently in the kingdom there are increased attacks from monsters, you decide to change something in ur life and go to dangerously adventure, your friend the blacksmith offer you one item which one could help you. Choose Wisely",

    A: {
        content: 'sword',
        stats: {hp: 0, att: 1, def: 0, coin: 0},
        storyline: "You choosed Sword which one is making you stronger, you get 1 attack point",
        condition: "hp1", // hp 1 if yes + if no there is nothing
        penalty: {hp: 0, att: 0, def: 0, coin: 0}, // penalty
        
        checkDec: '', // checking story of decision in act for example 5

        decConditionA: '', // condition to make
        decResultA: {hp: 0, att: 0, def: 0, coin: 0},// stats to make or make to future history
        decFalseResultA: {hp: 0, att: 0, def: 0, coin: 0}, 
        decResultAtextline: '', // textline to decisione maked
        decFalseResultATextline: '',

        decConditionB: '',
        decResultB: {hp: 0, att: 0, def: 0, coin: 0},
        decFalseResultA: {hp: 0, att: 0, def: 0, coin: 0},
        decResultBtextline: '',
        decFalseResultBTextline: '',

        decConditionC: '',
        decResultC: {hp: 0, att: 0, def: 0, coin: 0},
        decFalseResultA: {hp: 0, att: 0, def: 0, coin: 0},
        decResultCtextline: '',
        decFalseResultCTextline: '',
    },
    B: {
        content: 'armor',
        stats: {hp: 0, att: 0, def: 1, coin: 0},
        storyline: "You choosed armor which one is making you safer, you get 1 deffense point",
        condition: "hp1",
        penalty:  {hp: 0, att: 0, def: 0, coin: 0},
        checkDec: '', // checking story of decision in act for example 5

        decConditionA: '', // condition to make
        decResultA: {hp: 0, att: 0, def: 0, coin: 0}, // stats to make or make to future history
        decFalseResultA: {hp: 0, att: 0, def: 0, coin: 0},
        decResultAtextline: '',
        decFalseResultATextline: '', // textline to decisione maked

        decConditionB: '',
        decResultB: {hp: 0, att: 0, def: 0, coin: 0},
        decFalseResultA: {hp: 0, att: 0, def: 0, coin: 0},
        decResultBtextline: '',
        decFalseResultBTextline: '',

        decConditionC: '',
        decResultC: {hp: 0, att: 0, def: 0, coin: 0},
        decFalseResultA: {hp: 0, att: 0, def: 0, coin: 0},
        decResultCtextline: '',
        decFalseResultCTextline: '',
    },

    C: {
        content: 'shield',
        stats: {hp: 0, att: 0, def: 1, coin: 0},
        storyline: "You choosed shield which one is making you safer, you get 1 deffense point",
        condition: "hp1",
        penalty:  {hp: 0, att: 0, def: 0, coin: 0},
        checkDec: '',

        decConditionA: '', 
        decResultA: {hp: 0, att: 0, def: 0, coin: 0},
        decFalseResultA: {hp: 0, att: 0, def: 0, coin: 0},
        decResultAtextline: '',
        decFalseResultATextline: '', 

        decConditionB: '',
        decResultB: {hp: 0, att: 0, def: 0, coin: 0},
        decFalseResultA: {hp: 0, att: 0, def: 0, coin: 0},
        decResultBtextline: '',
        decFalseResultBTextline: '',

        decConditionC: '',
        decResultC: {hp: 0, att: 0, def: 0, coin: 0},
        decFalseResultA: {hp: 0, att: 0, def: 0, coin: 0},
        decResultCtextline: '',
        decFalseResultCTextline: '',
    },
    result: ''
},


    [

    ]
]

export default fakeAnswers