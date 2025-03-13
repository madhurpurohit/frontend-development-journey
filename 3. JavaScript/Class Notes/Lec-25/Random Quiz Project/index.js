const questionSet = [
  {
    question: "Who has the most centuries in international cricket?",
    options: [
      "Sachin Tendulkar",
      "Virat Kohli",
      "Ricky Ponting",
      "Jacques Kallis",
    ],
    answer: "Sachin Tendulkar",
  },
  {
    question: "Who is known as the 'Master Blaster' of cricket?",
    options: ["Shahid Afridi", "Sachin Tendulkar", "Chris Gayle", "Brian Lara"],
    answer: "Sachin Tendulkar",
  },
  {
    question: "Which country won the first ICC T20 World Cup?",
    options: ["India", "Pakistan", "Australia", "Sri Lanka"],
    answer: "India",
  },
  {
    question: "Who holds the record for the most wickets in ODI cricket?",
    options: [
      "Muttiah Muralitharan",
      "Shane Warne",
      "Wasim Akram",
      "Javagal Srinath",
    ],
    answer: "Muttiah Muralitharan",
  },
  {
    question:
      "What is the highest score ever made by a player in a single Test inning?",
    options: ["Brian Lara", "Don Bradman", "Chris Gayle", "Virender Sehwag"],
    answer: "Brian Lara",
  },
  {
    question: "Which cricketer has scored the most runs in T20 internationals?",
    options: ["Virat Kohli", "Chris Gayle", "Rohit Sharma", "Shikhar Dhawan"],
    answer: "Virat Kohli",
  },
  {
    question: "Who is the fastest player to reach 1000 runs in ODI cricket?",
    options: [
      "Hashim Amla",
      "Virat Kohli",
      "Shikhar Dhawan",
      "Quinton de Kock",
    ],
    answer: "Virat Kohli",
  },
  {
    question:
      "Who was the first player to score a double century in a One Day International match?",
    options: [
      "Virender Sehwag",
      "Sourav Ganguly",
      "Shikhar Dhawan",
      "Ricky Ponting",
    ],
    answer: "Virender Sehwag",
  },
  {
    question:
      "Which player has the most sixes in an international cricket match?",
    options: ["Shahid Afridi", "Chris Gayle", "MS Dhoni", "Adam Gilchrist"],
    answer: "Shahid Afridi",
  },
  {
    question:
      "Which country has won the most number of ICC Cricket World Cups?",
    options: ["Australia", "India", "West Indies", "Pakistan"],
    answer: "Australia",
  },
  {
    question:
      "Which player holds the record for the most runs in a single World Cup tournament?",
    options: [
      "Ricky Ponting",
      "Sachin Tendulkar",
      "Viv Richards",
      "Matthew Hayden",
    ],
    answer: "Matthew Hayden",
  },
  {
    question:
      "Who holds the record for the most wickets in a single World Cup tournament?",
    options: [
      "Muttiah Muralitharan",
      "Shane Warne",
      "Glenn McGrath",
      "Wasim Akram",
    ],
    answer: "Glenn McGrath",
  },
  {
    question: "Which cricketer has the most Test runs of all time?",
    options: [
      "Brian Lara",
      "Sachin Tendulkar",
      "Ricky Ponting",
      "Jacques Kallis",
    ],
    answer: "Sachin Tendulkar",
  },
  {
    question:
      "Who was the first cricketer to score 100 international centuries?",
    options: [
      "Shahid Afridi",
      "Virat Kohli",
      "Sachin Tendulkar",
      "Ricky Ponting",
    ],
    answer: "Sachin Tendulkar",
  },
  {
    question: "Which cricketer has the most ducks in ODI cricket?",
    options: ["Shahid Afridi", "Wasim Akram", "Chris Gayle", "Moin Khan"],
    answer: "Shahid Afridi",
  },
  {
    question:
      "Who was the first cricketer to score a century in a T20 World Cup?",
    options: [
      "Suresh Raina",
      "Shane Watson",
      "Chris Gayle",
      "Brendon McCullum",
    ],
    answer: "Chris Gayle",
  },
  {
    question:
      "Which cricketer has the highest batting average in Test cricket?",
    options: ["Don Bradman", "Virat Kohli", "Jacques Kallis", "Steve Smith"],
    answer: "Don Bradman",
  },
  {
    question: "Which player has the most catches in international cricket?",
    options: [
      "Ricky Ponting",
      "Sachin Tendulkar",
      "Jacques Kallis",
      "Mahela Jayawardene",
    ],
    answer: "Jacques Kallis",
  },
  {
    question: "Which cricketer has the most runs in a single IPL season?",
    options: ["Virat Kohli", "Chris Gayle", "David Warner", "Rohit Sharma"],
    answer: "Virat Kohli",
  },
  {
    question: "Who is the fastest bowler in the history of cricket?",
    options: ["Brett Lee", "Shane Bond", "Shoaib Akhtar", "Dale Steyn"],
    answer: "Shoaib Akhtar",
  },
  {
    question:
      "Which cricketer has the most number of 5-wicket hauls in Test cricket?",
    options: [
      "Shane Warne",
      "Muttiah Muralitharan",
      "Anil Kumble",
      "Glenn McGrath",
    ],
    answer: "Muttiah Muralitharan",
  },
  {
    question:
      "Who is the first cricketer to reach 5000 runs in T20 internationals?",
    options: ["Virat Kohli", "Chris Gayle", "Shikhar Dhawan", "Rohit Sharma"],
    answer: "Virat Kohli",
  },
  {
    question:
      "Which cricketer has the record for the most number of runs in a single IPL match?",
    options: [
      "David Warner",
      "Shane Watson",
      "Chris Gayle",
      "Brendon McCullum",
    ],
    answer: "Chris Gayle",
  },
  {
    question:
      "Who was the first cricketer to score a triple century in Test cricket?",
    options: ["Don Bradman", "Brian Lara", "Virender Sehwag", "Wasim Akram"],
    answer: "Donald Bradman",
  },
  {
    question: "Who was the first bowler to take 400 wickets in ODI cricket?",
    options: [
      "Wasim Akram",
      "Muttiah Muralitharan",
      "Shane Warne",
      "Anil Kumble",
    ],
    answer: "Wasim Akram",
  },
  {
    question: "Which country hosted the 1996 Cricket World Cup?",
    options: ["India", "Pakistan", "Sri Lanka", "Bangladesh"],
    answer: "India",
  },
  {
    question:
      "Which cricketer was nicknamed 'The Wall' for his strong defense?",
    options: [
      "Rahul Dravid",
      "Steve Waugh",
      "Alastair Cook",
      "Kumar Sangakkara",
    ],
    answer: "Rahul Dravid",
  },
  {
    question:
      "Who was the first player to score 10,000 runs in One Day Internationals?",
    options: [
      "Sachin Tendulkar",
      "Brian Lara",
      "Ricky Ponting",
      "Shahid Afridi",
    ],
    answer: "Sachin Tendulkar",
  },
  {
    question: "Which cricketer has hit the most sixes in ODI cricket?",
    options: ["Shahid Afridi", "Chris Gayle", "MS Dhoni", "Adam Gilchrist"],
    answer: "Shahid Afridi",
  },
  {
    question: "Which country won the ICC Champions Trophy in 2013?",
    options: ["India", "Pakistan", "Sri Lanka", "England"],
    answer: "India",
  },
  {
    question:
      "Who holds the record for the most runs in a single ICC T20 World Cup?",
    options: [
      "Chris Gayle",
      "Virat Kohli",
      "Shane Watson",
      "Mahela Jayawardene",
    ],
    answer: "Chris Gayle",
  },
  {
    question:
      "Who was the first cricketer to hit 200 runs in a single ODI match?",
    options: [
      "Virender Sehwag",
      "Sourav Ganguly",
      "Shikhar Dhawan",
      "Chris Gayle",
    ],
    answer: "Virender Sehwag",
  },
  {
    question:
      "Which cricketer holds the record for the most centuries in the IPL?",
    options: ["Chris Gayle", "Virat Kohli", "David Warner", "Shane Watson"],
    answer: "Chris Gayle",
  },
  {
    question:
      "Who was the first cricketer to reach 300 wickets in T20 internationals?",
    options: ["Shahid Afridi", "Dwayne Bravo", "Lasith Malinga", "Rashid Khan"],
    answer: "Shahid Afridi",
  },
  {
    question:
      "Which cricketer has the most number of runs in World Cup history?",
    options: [
      "Sachin Tendulkar",
      "Ricky Ponting",
      "Brian Lara",
      "Kumar Sangakkara",
    ],
    answer: "Sachin Tendulkar",
  },
  {
    question: "Which cricketer has the fastest fifty in T20 internationals?",
    options: ["Shahid Afridi", "Chris Gayle", "Yuvraj Singh", "Martin Guptill"],
    answer: "Yuvraj Singh",
  },
  {
    question:
      "Which cricketer was the first to score 1000 runs in a single T20 World Cup?",
    options: [
      "Virat Kohli",
      "Shane Watson",
      "Chris Gayle",
      "Mahela Jayawardene",
    ],
    answer: "Chris Gayle",
  },
  {
    question: "Which country has won the most ICC Champions Trophies?",
    options: ["India", "Australia", "Pakistan", "Sri Lanka"],
    answer: "India",
  },
  {
    question:
      "Who is the only cricketer to have scored 100 international centuries?",
    options: [
      "Shahid Afridi",
      "Virat Kohli",
      "Sachin Tendulkar",
      "Ricky Ponting",
    ],
    answer: "Sachin Tendulkar",
  },
  {
    question:
      "Which bowler has taken the most wickets in a single ICC World Cup?",
    options: [
      "Shane Warne",
      "Muttiah Muralitharan",
      "Glenn McGrath",
      "Wasim Akram",
    ],
    answer: "Glenn McGrath",
  },
  {
    question:
      "Who holds the record for the most wickets in a single T20 World Cup?",
    options: ["Shane Warne", "Lasith Malinga", "Dwayne Bravo", "Irfan Pathan"],
    answer: "Shane Warne",
  },
  {
    question:
      "Which cricketer has hit the most sixes in the history of Test cricket?",
    options: ["Shahid Afridi", "Chris Gayle", "Adam Gilchrist", "Ben Stokes"],
    answer: "Shahid Afridi",
  },
  {
    question: "Which cricketer is known as the 'Little Master'?",
    options: [
      "Sunil Gavaskar",
      "Sachin Tendulkar",
      "Brian Lara",
      "Jacques Kallis",
    ],
    answer: "Sunil Gavaskar",
  },
  {
    question:
      "Who was the first cricketer to take 500 wickets in One Day Internationals?",
    options: [
      "Wasim Akram",
      "Muttiah Muralitharan",
      "Shane Warne",
      "Anil Kumble",
    ],
    answer: "Wasim Akram",
  },
  {
    question:
      "Which cricketer has the most number of Man of the Match awards in ODI cricket?",
    options: [
      "Sachin Tendulkar",
      "Shane Watson",
      "Ricky Ponting",
      "Jacques Kallis",
    ],
    answer: "Sachin Tendulkar",
  },
  {
    question:
      "Who is the only cricketer to have scored 200 in both Test and ODI formats?",
    options: [
      "Chris Gayle",
      "Virender Sehwag",
      "Martin Guptill",
      "Rohit Sharma",
    ],
    answer: "Virender Sehwag",
  },
  {
    question:
      "Which cricketer was the first to hit 6 sixes in an over in an international match?",
    options: ["Yuvraj Singh", "Shahid Afridi", "Chris Gayle", "Ravi Shastri"],
    answer: "Yuvraj Singh",
  },
  {
    question:
      "Which cricketer has the fastest century in One Day Internationals?",
    options: [
      "Shahid Afridi",
      "Corey Anderson",
      "AB de Villiers",
      "Chris Gayle",
    ],
    answer: "AB de Villiers",
  },
  {
    question: "Which cricketer is known as 'The King of Spin'?",
    options: [
      "Shane Warne",
      "Muttiah Muralitharan",
      "Anil Kumble",
      "Ravi Ashwin",
    ],
    answer: "Shane Warne",
  },
  {
    question:
      "Who has the most number of half-centuries in T20 internationals?",
    options: ["Virat Kohli", "Shikhar Dhawan", "Chris Gayle", "Suresh Raina"],
    answer: "Virat Kohli",
  },
  {
    question: "Who holds the record for the most runs in a single ODI match?",
    options: [
      "Virat Kohli",
      "Sachin Tendulkar",
      "Chris Gayle",
      "Martin Guptill",
    ],
    answer: "Martin Guptill",
  },
  {
    question:
      "Who was the first cricketer to take 600 wickets in One Day Internationals?",
    options: [
      "Muttiah Muralitharan",
      "Shane Warne",
      "Anil Kumble",
      "Wasim Akram",
    ],
    answer: "Muttiah Muralitharan",
  },
  {
    question:
      "Which cricketer has the most number of centuries in T20 internationals?",
    options: ["Virat Kohli", "Chris Gayle", "David Warner", "Shane Watson"],
    answer: "Virat Kohli",
  },
  {
    question:
      "Which cricketer holds the record for the fastest 1000 runs in T20 internationals?",
    options: ["Virat Kohli", "Chris Gayle", "Shane Watson", "Faf du Plessis"],
    answer: "Virat Kohli",
  },
  {
    question: "Which bowler has taken the most wickets in an ICC World Cup?",
    options: [
      "Muttiah Muralitharan",
      "Shane Warne",
      "Glenn McGrath",
      "Wasim Akram",
    ],
    answer: "Glenn McGrath",
  },
  {
    question:
      "Who is the first cricketer to hit 500 runs in a single T20 World Cup?",
    options: [
      "Shane Watson",
      "Chris Gayle",
      "Virat Kohli",
      "Mahela Jayawardene",
    ],
    answer: "Chris Gayle",
  },
  {
    question: "Which cricketer has the highest batting average in ODI cricket?",
    options: [
      "Virat Kohli",
      "Don Bradman",
      "Sachin Tendulkar",
      "Jacques Kallis",
    ],
    answer: "Virat Kohli",
  },
  {
    question: "Who has the most number of wickets in international cricket?",
    options: [
      "Muttiah Muralitharan",
      "Shane Warne",
      "Wasim Akram",
      "Glenn McGrath",
    ],
    answer: "Muttiah Muralitharan",
  },
  {
    question:
      "Which cricketer has scored the most runs in a single IPL season?",
    options: ["Virat Kohli", "Chris Gayle", "David Warner", "Rohit Sharma"],
    answer: "Virat Kohli",
  },
  {
    question:
      "Which cricketer holds the record for the most number of centuries in ICC tournaments?",
    options: [
      "Virat Kohli",
      "Sachin Tendulkar",
      "Shane Watson",
      "Ricky Ponting",
    ],
    answer: "Virat Kohli",
  },
  {
    question:
      "Which cricketer has the most number of wickets in T20 internationals?",
    options: ["Shahid Afridi", "Lasith Malinga", "Dwayne Bravo", "Rashid Khan"],
    answer: "Shahid Afridi",
  },
  {
    question:
      "Who is the only cricketer to have taken a hat-trick in both Test and ODI cricket?",
    options: ["Shane Warne", "Jacques Kallis", "Wasim Akram", "Shahid Afridi"],
    answer: "Shane Warne",
  },
  {
    question:
      "Which cricketer holds the record for the most runs in a single IPL match?",
    options: ["Chris Gayle", "Virat Kohli", "David Warner", "Shane Watson"],
    answer: "Chris Gayle",
  },
  {
    question:
      "Which cricketer has the most number of centuries in Test cricket?",
    options: [
      "Brian Lara",
      "Ricky Ponting",
      "Jacques Kallis",
      "Sachin Tendulkar",
    ],
    answer: "Sachin Tendulkar",
  },
  {
    question:
      "Who is the fastest cricketer to take 400 wickets in One Day Internationals?",
    options: [
      "Shane Warne",
      "Muttiah Muralitharan",
      "Glenn McGrath",
      "Wasim Akram",
    ],
    answer: "Muttiah Muralitharan",
  },
  {
    question:
      "Which cricketer has the most number of half-centuries in the IPL?",
    options: ["David Warner", "Virat Kohli", "Shikhar Dhawan", "Rohit Sharma"],
    answer: "Shikhar Dhawan",
  },
  {
    question:
      "Which cricketer holds the record for the most wickets in a T20 World Cup?",
    options: ["Shane Warne", "Lasith Malinga", "Dwayne Bravo", "Shahid Afridi"],
    answer: "Shane Warne",
  },
  {
    question:
      "Who was the first cricketer to reach 10,000 runs in T20 internationals?",
    options: [
      "Shane Watson",
      "Chris Gayle",
      "Virat Kohli",
      "Mahela Jayawardene",
    ],
    answer: "Chris Gayle",
  },
  {
    question:
      "Which cricketer holds the record for the fastest ball bowled in cricket history?",
    options: ["Brett Lee", "Shane Bond", "Shoaib Akhtar", "Dale Steyn"],
    answer: "Shoaib Akhtar",
  },
  {
    question:
      "Which cricketer was the first to score 400 runs in a single Test match?",
    options: [
      "Chris Gayle",
      "Virender Sehwag",
      "Shivnarine Chanderpaul",
      "Brian Lara",
    ],
    answer: "Brian Lara",
  },
  {
    question: "Who holds the record for the most runs in a single T20 match?",
    options: ["Chris Gayle", "Brendon McCullum", "Virat Kohli", "David Warner"],
    answer: "Chris Gayle",
  },
  {
    question:
      "Which cricketer has taken the most wickets in a single IPL season?",
    options: [
      "Dwayne Bravo",
      "Lasith Malinga",
      "Jasprit Bumrah",
      "Sunil Narine",
    ],
    answer: "Dwayne Bravo",
  },
  {
    question: "Which cricketer has the most number of ducks in Test cricket?",
    options: ["Chris Gayle", "Shahid Afridi", "Mark Waugh", "Matthew Hayden"],
    answer: "Shahid Afridi",
  },
  {
    question:
      "Who is the fastest cricketer to score 1000 runs in T20 internationals?",
    options: ["Virat Kohli", "Shane Watson", "Chris Gayle", "David Warner"],
    answer: "Virat Kohli",
  },
  {
    question:
      "Which cricketer is the fastest to score 3000 runs in ODI cricket?",
    options: ["Virat Kohli", "AB de Villiers", "Ricky Ponting", "Shane Watson"],
    answer: "Virat Kohli",
  },
  {
    question: "Which cricketer has the most runs in T20 internationals?",
    options: ["Chris Gayle", "Virat Kohli", "Shikhar Dhawan", "Suresh Raina"],
    answer: "Virat Kohli",
  },
  {
    question:
      "Who was the first cricketer to take 400 wickets in T20 internationals?",
    options: ["Lasith Malinga", "Shahid Afridi", "Dwayne Bravo", "Rashid Khan"],
    answer: "Shahid Afridi",
  },
  {
    question:
      "Which cricketer has the highest batting average in One Day Internationals?",
    options: ["Virat Kohli", "Don Bradman", "Brian Lara", "Jacques Kallis"],
    answer: "Virat Kohli",
  },
  {
    question:
      "Who has the most number of wickets in the history of the T20 World Cup?",
    options: ["Shane Warne", "Lasith Malinga", "Dwayne Bravo", "Shahid Afridi"],
    answer: "Lasith Malinga",
  },
  {
    question:
      "Which cricketer was the first to score 1000 runs in a single T20 World Cup?",
    options: [
      "Chris Gayle",
      "Virat Kohli",
      "Mahela Jayawardene",
      "David Warner",
    ],
    answer: "Chris Gayle",
  },
  {
    question:
      "Who was the first cricketer to hit 50 sixes in One Day Internationals?",
    options: ["Shahid Afridi", "Chris Gayle", "MS Dhoni", "Mark Waugh"],
    answer: "Shahid Afridi",
  },
  {
    question:
      "Which cricketer has the fastest 200 runs in One Day Internationals?",
    options: [
      "Virender Sehwag",
      "Chris Gayle",
      "Shahid Afridi",
      "Martin Guptill",
    ],
    answer: "Chris Gayle",
  },
  {
    question:
      "Who is the first cricketer to take 100 wickets in T20 internationals?",
    options: ["Shahid Afridi", "Lasith Malinga", "Dwayne Bravo", "Rashid Khan"],
    answer: "Shahid Afridi",
  },
  {
    question:
      "Which cricketer holds the record for the most boundaries in a T20 World Cup match?",
    options: ["Chris Gayle", "Shane Watson", "David Warner", "Virat Kohli"],
    answer: "Chris Gayle",
  },
  {
    question:
      "Which cricketer is the fastest to score 10,000 runs in One Day Internationals?",
    options: ["Virat Kohli", "Shane Watson", "Brian Lara", "Sachin Tendulkar"],
    answer: "Virat Kohli",
  },
  {
    question:
      "Which cricketer has scored the most number of runs in a single ICC World Cup?",
    options: [
      "Sachin Tendulkar",
      "Ricky Ponting",
      "Kumar Sangakkara",
      "AB de Villiers",
    ],
    answer: "Sachin Tendulkar",
  },
  {
    question:
      "Who is the first cricketer to hit a century in all formats of international cricket?",
    options: ["Shahid Afridi", "Chris Gayle", "David Warner", "Martin Guptill"],
    answer: "Chris Gayle",
  },
  {
    question:
      "Which cricketer holds the record for the most wickets in the ICC World Cup?",
    options: [
      "Shane Warne",
      "Wasim Akram",
      "Glenn McGrath",
      "Muttiah Muralitharan",
    ],
    answer: "Wasim Akram",
  },
  {
    question:
      "Which cricketer has the most number of Man of the Series awards in ICC tournaments?",
    options: [
      "Sachin Tendulkar",
      "Shane Watson",
      "Virat Kohli",
      "AB de Villiers",
    ],
    answer: "Shane Watson",
  },
  {
    question:
      "Who holds the record for the most runs in a single Indian Premier League season?",
    options: ["Virat Kohli", "David Warner", "Shane Watson", "Chris Gayle"],
    answer: "Virat Kohli",
  },
  {
    question:
      "Who is the first cricketer to score 5000 runs in T20 internationals?",
    options: ["Chris Gayle", "Virat Kohli", "Shikhar Dhawan", "David Warner"],
    answer: "Virat Kohli",
  },
  {
    question:
      "Which cricketer has the most number of sixes in One Day Internationals?",
    options: ["Shahid Afridi", "Chris Gayle", "MS Dhoni", "Martin Guptill"],
    answer: "Shahid Afridi",
  },
  {
    question:
      "Who has the most number of wickets in international T20 cricket?",
    options: ["Shahid Afridi", "Dwayne Bravo", "Lasith Malinga", "Rashid Khan"],
    answer: "Shahid Afridi",
  },
  {
    question:
      "Which cricketer holds the record for the most centuries in ICC Champions Trophy?",
    options: ["Virat Kohli", "Shane Watson", "Ricky Ponting", "Jacques Kallis"],
    answer: "Virat Kohli",
  },
  {
    question:
      "Who was the first cricketer to hit 150 sixes in One Day Internationals?",
    options: ["Shahid Afridi", "Chris Gayle", "MS Dhoni", "Virender Sehwag"],
    answer: "Shahid Afridi",
  },
  {
    question:
      "Which cricketer has the most number of wickets in a single IPL season?",
    options: [
      "Dwayne Bravo",
      "Lasith Malinga",
      "Sunil Narine",
      "Jasprit Bumrah",
    ],
    answer: "Dwayne Bravo",
  },
  {
    question:
      "Who was the first cricketer to score 150 in a T20 international?",
    options: ["Chris Gayle", "Martin Guptill", "Virat Kohli", "Shane Watson"],
    answer: "Chris Gayle",
  },
  {
    question:
      "Which cricketer is the fastest to score 5000 runs in One Day Internationals?",
    options: ["Virat Kohli", "Chris Gayle", "Shane Watson", "AB de Villiers"],
    answer: "Virat Kohli",
  },
  {
    question:
      "Which cricketer has the most number of centuries in the Indian Premier League?",
    options: ["Chris Gayle", "David Warner", "Virat Kohli", "Shane Watson"],
    answer: "Chris Gayle",
  },
  {
    question:
      "Who holds the record for the most wickets in a single T20 World Cup?",
    options: ["Shane Warne", "Lasith Malinga", "Dwayne Bravo", "Shahid Afridi"],
    answer: "Lasith Malinga",
  },
];

function randomQuestion() {
  //* Method-1
  //   const questions = new Set();

  //   while (questions.size != 5) {
  //     const index = Math.floor(Math.random() * 100);
  //     questions.add(questionSet[index]);
  //   }

  //   return [...questions];

  //* Method-2 TC:-O(NlogN).
  //   questionSet.sort(() => Math.random() - 0.5);

  //   return questionSet.slice(0, 5);

  //* Method-3 TC:-O(N) Fisher Algorithm.
  let length = questionSet.length - 1;
  const arr = [];

  for (let i = 0; i < 5; i++) {
    const index = Math.floor(Math.random() * length);
    arr.push(questionSet[index]);

    // Swap index & last index elements.
    [questionSet[index], questionSet[length - 1]] = [
      questionSet[length - 1],
      questionSet[index],
    ];

    length--;
  }

  return arr;
}

const form = document.querySelector("form");
const problemSet = randomQuestion();
const originalAnswer = {};
const isTimerTriggered = false;

//* For Timer.
let totalTime = 60;
function updateTimer() {
  const timer = document.getElementById("timer");
  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;

  if (seconds < 10) timer.innerHTML = `Time Left:- ${minutes}:0${seconds}`;
  else timer.innerHTML = `Time Left:- ${minutes}:${seconds}`;

  if (totalTime > 0) {
    totalTime--;
  } else {
    isTimerTriggered = true;
    clearInterval(timeInterval);
    disableInputs();
    handleFormSubmission();
  }
}

function disableInputs() {
  const inputs = document.querySelectorAll('input[type="radio"]');
  inputs.forEach((input) => {
    input.disabled = true; // Disable radio buttons
  });
}

updateTimer();
const timeInterval = setInterval(updateTimer, 1000);

problemSet.forEach((obj, index) => {
  const divElem = document.createElement("div");
  divElem.className = "question";

  originalAnswer[`q${index + 1}`] = obj["answer"];

  const paraElem = document.createElement("p");
  paraElem.textContent = `${index + 1}. ${obj["question"]}`;

  divElem.appendChild(paraElem);

  obj["options"].forEach((data) => {
    const labelElem = document.createElement("label");

    const inputElem = document.createElement("input");
    inputElem.type = "radio";
    inputElem.name = `q${index + 1}`;
    inputElem.value = data;

    labelElem.appendChild(inputElem);
    labelElem.appendChild(document.createTextNode(data));

    divElem.appendChild(labelElem);
    divElem.append(document.createElement("br"));
  });

  form.appendChild(divElem);
});

const btnElem = document.createElement("button");
btnElem.type = "submit";
btnElem.className = "submit-btn";
btnElem.textContent = "Submit";

form.appendChild(btnElem);

const resetBtn = document.querySelector(".reset-btn");

function handleFormSubmission() {
  const data = new FormData(form);
  const userAnswer = Array.from(data.entries());

  let result = 0;

  //* This will ignore the unanswered questions, so it might be lead to incorrect scoring.
  //   for (let [key, value] of userAnswer) {
  //     if (value === originalAnswer[key]) {
  //       result++;
  //     }
  //   }

  //* For unanswered question & correct output we use loops.
  // Check all 5 questions (q1 to q5)
  for (let i = 1; i <= 5; i++) {
    const userAnswer = data.get(`q${i}`); // Returns null if unanswered
    if (userAnswer === originalAnswer[`q${i}`]) result++;
  }

  const output = document.getElementById("result");
  output.style.display = "block";
  output.textContent = `${result} out of 5 is correct.`;

  const correctAnswer = document.getElementById("answer");
  correctAnswer.style.display = "block";
  const head = document.createElement("p");
  head.id = "center";
  head.textContent = "Correct Answer Of All Questions.";

  correctAnswer.appendChild(head);

  const answer = [];
  let count = 1;

  while (answer.length != 5) {
    const position = `q${count++}`;
    const insert = `${originalAnswer[position]}`;
    answer.push(insert);
  }

  answer.forEach((data, index) => {
    const para = document.createElement("p");
    para.textContent = `${index + 1}. ${data}`;

    correctAnswer.appendChild(para);
  });

  btnElem.style.display = "none";
  resetBtn.style.display = "block";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!isTimerTriggered) {
    disableInputs();
    handleFormSubmission();
  }
});

resetBtn.addEventListener("click", (event) => {
  event.preventDefault();

  //* For reload the whole website.
  location.reload();
  resetBtn.style.display = "none";
  btnElem.style.display = "block";
});

setTimeout(handleFormSubmission, 60000);
setTimeout(disableInputs, 60000);
