let questions = [
    {
    question: "NAG-ARAL AKO ____ FILIPINO.?",
    answer: "NG",
    options: [
      "NG",
      "NANG",
    ]
  },
    {
    question: "UNTI-UNTI ____ NAUUBOS ANG MGA PUNO.",
    answer: "NANG",
    options: [
      "NG",
      "NANG"
    ]
  },
    {
    question: "AKYAT ____ AKYAT ANG MGA BATA SA HAGDAN.",
    answer: "NANG",
    options: [
      "NG",
      "NANG"
    ]
  },
    {
    question: "NAG-ARAL AKO ____ MABUTI.",
    answer: "NANG",
    options: [
      "NG",
      "NANG",
    ]
  },
    {
    question: "ANG GANDA ____ REGALO MO SA AKIN.",
    answer: "NG",
    options: [
      "NG",
      "NANG",
    ]
  },
   {
     question:"NAGLARO KAMI ____ ISANG ORAS.",
     answer:"NG",
     options: [
       "NG",
       "NANG",
       ]
   },
   {
     question:"NAGKAROON NA ____ KALAWANG ANG KOTSE NAMIN ____ TUMAGAL.",
     answer:"NG,NANG",
     options: [
       "NG,NANG",
       "NANG,NG",
       ]
   },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  {
     question:"MARAMING HALAMAN ANG ITINANIM ____ MGA PAMILYANG TUMIRA DITO.",
     answer:"NG",
     options: [
       "NG",
       "NANG"
       ]
   },
   {
     question:"NAPAKABANGO ____ MGA NILULUTONG PAGKAINN.",
     answer:"NG",
     options: [
       "NG",
       "NANG"
       ]
   },
   {
     question:"Maglagay ka ___ pitong plato para sa hapunan natin.",
     answer:"ng",
     options: [
       "ng",
       "nang"
       ]
   },
  
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];
let shuffledArray = questions.sort((a, b) => 0.5 - Math.random());
