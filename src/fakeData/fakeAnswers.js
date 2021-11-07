let fakeAnswers= [
    {
        story: "You woke up in small village named Opros, in the Kingdom of Renor. You came from poor family, but recently in the kingdom there are increased attacks from monsters, you decide to change something in ur life and go to dangerously adventure, your friend blacksmith offer you one item which one could help you. Choose Wisely",

        A: {
            content: 'sword',
            stats: {hp: 0, att: 1, def: 0, coin: 0},
            storyline: "You choosed Sword which one is making you stronger, you get 1 attack point",
            condition: "hp1",
            penalty: {hp: 0, att: 0, def: 0, coin: 0},
            checkDec: ''
        },
        B: {
            content: 'helmet',
            stats: {hp: 0, att: 0, def: 1, coin: 0},
            storyline: "You choosed helmet which one is making you safer, you get 1 deffense point",
            condition: "hp1",
            penalty:  {hp: 0, att: 0, def: 0, coin: 0},
            checkDec: ''
        },

        C: {
            content: 'shield',
            stats: {hp: 0, att: 0, def: 1, coin: 0},
            storyline: "You choosed shield which one is making you safer, you get 1 deffense point",
            condition: "hp1",
            penalty:  {hp: 0, att: 0, def: 0, coin: 0},
            checkDec: ''
        },
        result: ''
    },
    [

    ]
]

export default fakeAnswers