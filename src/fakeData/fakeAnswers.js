let fakeAnswers= [
    {
        story: "You woke up in small village named Opros, in the Kingdom of Renor. You came from poor family, but recently in the kingdom there are increased attacks from monsters, you decide to change something in ur life and go to dangerously adventure, your friend the blacksmith offer you one item which one could help you. Choose Wisely",

        A: {
            content: 'sword',
            stats: {hp: 0, att: 1, def: 0, coin: 0},
            storyline: "You choosed Sword which one is making you stronger, you get 1 attack point",
            condition: "hp1", // hp 1 if yes + if no there is nothing
            penalty: {hp: 0, att: 0, def: 0, coin: 0}, // penalty
            
            checkDec: '', // checking story of decision in act for example 5

            decCondtionA: '', // condition to make
            decResultA: '', // stats to make or make to future history
            decResultAtextline: '', // textline to decisione maked

            decCondtionB: '',
            decResultB: '',
            decResultBtextline: '',

            decCondtionC: '',
            decResultC: '',
            decResultCtextline: '',
        },
        B: {
            content: 'armor',
            stats: {hp: 0, att: 0, def: 1, coin: 0},
            storyline: "You choosed armor which one is making you safer, you get 1 deffense point",
            condition: "hp1",
            penalty:  {hp: 0, att: 0, def: 0, coin: 0},
            checkDec: '', // checking story of decision in act for example 5

            decCondtionA: '', // condition to make
            decResultA: '', // stats to make or make to future history
            decResultAtextline: '', // textline to decisione maked

            decCondtionB: '',
            decResultB: '',
            decResultBtextline: '',

            decCondtionC: '',
            decResultC: '',
            decResultCtextline: '',
        },

        C: {
            content: 'shield',
            stats: {hp: 0, att: 0, def: 1, coin: 0},
            storyline: "You choosed shield which one is making you safer, you get 1 deffense point",
            condition: "hp1",
            penalty:  {hp: 0, att: 0, def: 0, coin: 0},
            checkDec: '',

            decCondtionA: '', 
            decResultA: '',
            decResultAtextline: '', 

            decCondtionB: '',
            decResultB: '',
            decResultBtextline: '',

            decCondtionC: '',
            decResultC: '',
            decResultCtextline: '',
        },
        result: ''
    },
///////////////////////////////////////////////////////////////////////////////////

    {
        story: "Your next steps was going to city Versola, wherein you can get more knowledge about monsters who attacking this kingdom, you went to forest beacuse it was the fastest way to get to the city. The road is quiet, until you get to crossroad, you need to choose way u go.  ",

        A: {
            content: 'Right',
            stats: {hp: 0, att: 0, def: 0, coin: 1},
            storyline: "when u went right u find coin covered with blood, there become scary and in ur way u see giant Snake coming to u, unforuanetly you have not time to reaction and snake bites u, he was no posioneus and u walk forward",
            condition: "at4", // hp 1 if yes + if no there is nothing
            penalty: {hp: -1, att: 0, def: 0, coin: 0}, // penalty
            
            checkDec: '0', // checking story of decision in act for example 5

            decCondtionA: 'hp0', // condition to make
            decResultA: {hp: 0, att: 0, def: 0, coin: 0}, // stats to make or make to future history
            decResultAtextline: 'U pick sword in ur hands but unforunatly is not helping u cause the snake was too fast', // textline to decisione maked

            decCondtionB: 'def2',
            decResultB: {hp: 1, att: 0, def: 0, coin: 0},
            decResultBtextline: 'The armor is protecting you of damage',

            decCondtionC: 'def2',
            decResultC: {hp: 1, att: 0, def: -1, coin: 0},
            decResultCtextline: 'Shield is protecting you of damage, but snake pulls out your shield when u need to run. You just lost 1 deffense',
        },
        B: {
            content: 'Center',
            stats: {hp: 0, att: 0, def: 1, coin: 0},
            storyline: "You went center and find small goblin with coin, goblin runaway from u and dropped coin which one u lift it",
            condition: "hp1",
            penalty:  {hp: 0, att: 0, def: 0, coin: 0},
            checkDec: '',
            decParametrs: '',

            decCondtionA: '', 
            decResultA: '',
            decResultAtextline: '', 

            decCondtionB: '',
            decResultB: '',
            decResultBtextline: '',

            decCondtionC: '',
            decResultC: '',
            decResultCtextline: '',
        },

        C: {
            content: 'Left',
            stats: {hp: 0, att: 1, def: 0, coin: 0},
            storyline: "You choosed go to left, and see the bag, you decide to open it and find elixir of strength",
            condition: "hp1",
            penalty:  {hp: 0, att: 0, def: 0, coin: 0},
            checkDec: '',
            decParametrs: '',

            decCondtionA: '', 
            decResultA: '',
            decResultAtextline: '', 

            decCondtionB: '',
            decResultB: '',
            decResultBtextline: '',

            decCondtionC: '',
            decResultC: '',
            decResultCtextline: '',
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

            decCondtionA: '', // condition to make
            decResultA: '', // stats to make or make to future history
            decResultAtextline: '', // textline to decisione maked

            decCondtionB: '',
            decResultB: '',
            decResultBtextline: '',

            decCondtionC: '',
            decResultC: '',
            decResultCtextline: '',
        },
        B: {
            content: 'armor',
            stats: {hp: 0, att: 0, def: 1, coin: 0},
            storyline: "You choosed armor which one is making you safer, you get 1 deffense point",
            condition: "hp1",
            penalty:  {hp: 0, att: 0, def: 0, coin: 0},
            checkDec: '', // checking story of decision in act for example 5

            decCondtionA: '', // condition to make
            decResultA: '', // stats to make or make to future history
            decResultAtextline: '', // textline to decisione maked

            decCondtionB: '',
            decResultB: '',
            decResultBtextline: '',

            decCondtionC: '',
            decResultC: '',
            decResultCtextline: '',
        },

        C: {
            content: 'shield',
            stats: {hp: 0, att: 0, def: 1, coin: 0},
            storyline: "You choosed shield which one is making you safer, you get 1 deffense point",
            condition: "hp1",
            penalty:  {hp: 0, att: 0, def: 0, coin: 0},
            checkDec: '',

            decCondtionA: '', 
            decResultA: '',
            decResultAtextline: '', 

            decCondtionB: '',
            decResultB: '',
            decResultBtextline: '',

            decCondtionC: '',
            decResultC: '',
            decResultCtextline: '',
        },
        result: ''
    },



    [

    ]
]

export default fakeAnswers