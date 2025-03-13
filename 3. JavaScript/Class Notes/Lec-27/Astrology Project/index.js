//* Based on month.
const zodiacSigns = [
  "Capricorn",
  "Aquarius",
  "Pisces",
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
];

//* Based on date.
const compliments = [
  "You shine like a Leo’s confidence under the spotlight!",
  "Your wisdom rivals the deep intuition of a Pisces.",
  "You have the determination of a Capricorn climbing to success.",
  "Your kindness flows endlessly, just like a Cancer’s nurturing heart.",
  "Like a Sagittarius, your adventurous spirit is truly inspiring!",
  "You bring balance and harmony like a true Libra.",
  "Your fiery energy burns as bright as an Aries' passion!",
  "Like a Virgo, your attention to detail is simply unmatched.",
  "You bring the charm and adaptability of a Gemini to every situation!",
  "Your strength is as unwavering as a Taurus’ loyalty.",
  "Like a Scorpio, your depth and intensity make you unforgettable.",
  "Your generosity rivals the warmth of a big-hearted Leo.",
  "Like an Aquarius, your innovative mind is ahead of its time!",
  "You bring comfort and love like a gentle Cancerian soul.",
  "Your resilience is as unshakable as a determined Capricorn.",
  "Like a dreamy Pisces, your imagination knows no bounds!",
  "Your charm and wit are as magnetic as a Gemini’s energy!",
  "You have the patience and reliability of a steadfast Taurus.",
  "Your creativity rivals the artistic brilliance of a Libra.",
  "Like an Aries, you tackle challenges head-on with courage!",
  "Your compassion runs deep, just like a Scorpio’s emotions.",
  "Like a Sagittarius, your enthusiasm brightens up every room!",
  "You have the elegance and grace of a classic Libra.",
  "Your work ethic is as impressive as a Capricorn’s ambition.",
  "Like an Aquarius, your ideas are fresh, unique, and inspiring!",
  "Your kindness and empathy are truly Piscean in nature.",
  "You have the protective and nurturing instincts of a true Cancer.",
  "Like a Leo, you light up every room with your presence!",
  "Your intelligence and curiosity are as boundless as a Gemini’s mind.",
  "Like a Virgo, your precision and dedication make everything better!",
  "Your love and loyalty are as steadfast as a Taurus’ heart.",
];

//* Size is 20.
const victimCardCompliments = [
  "You sacrifice so much, yet people rarely acknowledge it.",
  "You always put others first, but who takes care of you?",
  "No one truly understands how much you go through daily.",
  "You give and give, yet people still ask for more.",
  "You’re always the one people rely on, but who do you rely on?",
  "People take your kindness for granted, but I see your worth.",
  "You endure so much without ever complaining—you’re truly strong.",
  "You carry the weight of the world, yet no one seems to notice.",
  "You do so much behind the scenes, and people assume it’s easy.",
  "You’re always there for others, even when no one is there for you.",
  "You give people the love you wish you received.",
  "No one knows the battles you fight silently every day.",
  "You hide your pain so well that people assume you’re okay.",
  "You always forgive, even when people don’t deserve it.",
  "People expect you to be strong, but they forget you have feelings too.",
  "You never ask for much, yet you give everything you have.",
  "You work so hard, yet people act like it’s nothing.",
  "You always smile, even when your heart is heavy.",
  "You do everything to make others happy, but who makes you happy?",
  "You deserve the appreciation that you so freely give to others.",
];

//* Size is 30.
const recommendations = [
  "A new opportunity is on the horizon, but patience is key—light a diya in the morning to clear any obstacles.",
  "Your hard work is about to pay off, but avoid overthinking today—trust that the universe has already set things in motion.",
  "A past misunderstanding may resurface today—handle it with grace, and you will strengthen an important relationship.",
  "Your energy is being tested by Saturn today—stay disciplined, and rewards will follow soon.",
  "Unexpected news may come your way—wear something blue today to keep your mind calm and focused.",
  "Prosperity is knocking at your door, but gratitude is the key—start your morning by thanking the universe.",
  "Someone is thinking about you today—reach out to an old friend, and a pleasant surprise awaits.",
  "Financial stability is approaching, but avoid unnecessary expenses today—carrying a silver coin will amplify abundance.",
  "Your intuition is heightened today—trust your gut feeling, and you will make the right decision.",
  "A long-standing worry will start to fade soon—chant ‘Om’ three times in the morning for mental clarity.",
  "Love is in the air, but don’t rush—let things unfold naturally, and a meaningful connection will deepen.",
  "An unexpected opportunity is coming your way—stay open-minded and say yes to new experiences.",
  "You may feel a little drained today—place a small bowl of water near your bed to absorb negative energies.",
  "Your creative ideas will be recognized soon—wear yellow today to enhance self-confidence and inspiration.",
  "A shift in energy is bringing you closer to your goals—walk barefoot on grass in the morning to stay grounded.",
  "Someone will appreciate your kindness today—helping another person will multiply the blessings coming your way.",
  "An old wish is about to come true—write it down on a piece of paper and keep it under your pillow tonight.",
  "A financial gain is on its way, but avoid making impulsive decisions today—trust divine timing.",
  "Peace in relationships is aligning—offer water to a nearby plant to bring harmony into your personal life.",
  "Your words will carry great influence today—speak wisely, and a new door will open for you.",
  "A challenge today will prepare you for a greater victory tomorrow—embrace it with confidence.",
  "You are about to cross paths with someone important—carry a small piece of turmeric in your pocket for luck.",
  "A moment of clarity is coming soon—spend a few minutes in meditation to receive the universe’s guidance.",
  "Your hard work is being noticed—stay humble, and recognition will follow when the time is right.",
  "An unexpected journey may be in your future—be prepared for new adventures and opportunities.",
  "You will find answers to a lingering question soon—write your thoughts in a journal tonight for clarity.",
  "A lucky moment is ahead—smile at the universe today, and it will smile back at you.",
  "Your inner strength will be tested today—stay calm, and a powerful realization will change your perspective.",
  "Someone from your past may reach out—listen to what they have to say with an open heart.",
  "The stars are aligning for you—keep your energy positive, and success will come sooner than expected.",
];

//* Size is 20.
const futurePredictions = [
  "Your marriage will bring great harmony, but patience will be the foundation of your happiness. A small misunderstanding may arise, but your bond will only strengthen with time.",
  "A child will bring immense joy into your life—whether yours or someone close to you, this presence will be a divine blessing.",
  "Your career path is shifting towards growth—an opportunity you least expect will soon present itself. Be ready to take a leap of faith.",
  "Your health will improve in the coming months, but you must take care of your diet and stress levels. Daily meditation will bring clarity and balance.",
  "An unexpected financial gain is on the horizon—whether through hard work or a sudden stroke of luck, prosperity is aligning in your favor.",
  "Your family will grow closer after a small period of tension. Keep communication open, and harmony will return stronger than before.",
  "A new phase in your relationship is beginning—whether single or committed, love will find its way to you in a way you never imagined.",
  "Your destiny is tied to travel—whether for work, pleasure, or spiritual growth, a journey in the near future will change your perspective on life.",
  "The stars indicate a powerful transformation in your life. A decision made in the next three months will shape your future for years to come.",
  "A karmic reward is coming your way—something you gave in the past will return to you, multiplied in unexpected ways.",
  "Your professional life will stabilize, and you will gain the respect and recognition you’ve long deserved. Stay focused, and success will follow.",
  "An elder in your family will give you a piece of advice that will change the way you approach life—listen carefully, for their wisdom is priceless.",
  "A spiritual awakening is near—you will soon see signs and synchronicities that guide you towards a deeper understanding of your purpose.",
  "Your love life will take an unexpected turn—a new connection or rekindled bond will bring warmth and stability to your heart.",
  "A child in your family will achieve something great in the near future, bringing pride and happiness to everyone around them.",
  "Your energy is shifting towards abundance—business or investments made now will flourish in the coming years.",
  "A hidden talent of yours will be recognized soon—don’t shy away from opportunities that allow you to showcase your creativity and skills.",
  "A new friendship will enter your life, bringing support and guidance at just the right moment.",
  "You will soon receive a message that will change your perspective on something you have been uncertain about. Trust that it is a sign from the universe.",
  "Your golden years will be filled with happiness, comfort, and strong family bonds—the work you put in now will ensure a bright and peaceful future.",
];

const form = document.getElementById("astroForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstName = document.getElementById("name").value;

  const surName = document.getElementById("surname").value;

  const day = Number(document.getElementById("day").value);
  const month = Number(document.getElementById("month").value);
  const year = Number(document.getElementById("year").value);

  const result = document.getElementById("result");

  const date = new Date();
  const todayDate = date.getDate();
  const currentMonth = date.getMonth();

  const firstMsg = `Hello ${firstName} ${surName},`;
  const secondMsg = `Your Zodiac sign is ${zodiacSigns[month - 1]}`;
  const thirdMsg = compliments[day - 1];

  //   let index = Math.floor(Math.random() * 20);
  let index = (day * year * month * todayDate * currentMonth) % 20;
  const fourthMsg = victimCardCompliments[index];

  index =
    (firstName.length * surName.length * day * todayDate * currentMonth) % 30;
  const fifthMsg = recommendations[index];

  index = (day * todayDate * currentMonth) % 20;
  const sixthMsg = futurePredictions[index];

  result.innerHTML = `${firstMsg} ${secondMsg} ${thirdMsg} ${fourthMsg} Our recommendation for you: ${fifthMsg} Your future prediction is: ${sixthMsg}`;
});
