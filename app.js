/* VARIABLES */
const questions = {
  // EASY QUESTIONS
  EASY: [
    {
      question: 'Which is the largest planet in our solar system?',
      answers: [
        {
          answer: 'Saturn',
          correct: false,
        },
        {
          answer: 'Mars',
          correct: false,
        },
        {
          answer: 'Jupiter',
          correct: true,
        },
        {
          answer: 'Venus',
          correct: false,
        },
      ],
      info:
        'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined.',
    },
    {
      question: 'Which is the heaviest element?',
      answers: [
        {
          answer: 'Lead',
          correct: false,
        },
        {
          answer: 'Uranium',
          correct: true,
        },
        {
          answer: 'Hydrogen',
          correct: false,
        },
        {
          answer: 'Titanium',
          correct: false,
        },
      ],
      info:
        'The heaviest element found in any appreciable amount in nature is uranium, atomic number 92.',
    },
    {
      question: 'Who founded Tesla Motors?',
      answers: [
        {
          answer: 'Eberhard & Tarpenning',
          correct: true,
        },
        {
          answer: 'Nicola Tesla',
          correct: false,
        },
        {
          answer: 'Elon Musk',
          correct: false,
        },
        {
          answer: 'Bill Gates',
          correct: false,
        },
      ],
      info:
        'Founded as Tesla Motors, Tesla was incorporated on July 1, 2003, by Martin Eberhard and Marc Tarpenning. Elon Musk joined the company in 2004.',
    },
    {
      question: 'Luke Skywalker is the main protagonist of which movie series?',
      answers: [
        {
          answer: 'Lucky Luke',
          correct: false,
        },
        {
          answer: 'Star Trek',
          correct: false,
        },
        {
          answer: 'Stargate',
          correct: false,
        },
        {
          answer: 'Star Wars',
          correct: true,
        },
      ],
      info:
        'Portrayed by Mark Hamill, Luke Skywalker is the main protagonist of the original film trilogy of the Star Wars franchise.',
    },
    {
      question: "Which boxer was known as The People's Champion?",
      answers: [
        {
          answer: 'Muhammad Ali',
          correct: true,
        },
        {
          answer: 'Mike Tyson',
          correct: false,
        },
        {
          answer: 'Floyd Mayweather',
          correct: false,
        },
        {
          answer: 'Joe Frazier',
          correct: false,
        },
      ],
      info:
        "Muhammad Ali (1942 – 2016) was a professional boxer, activist, entertainer and philanthropist. Nicknamed The Greatest and The People's Champion, he is widely regarded as one of the most significant and celebrated figures of the 20th century and as one of the greatest boxers of all time.",
    },
    {
      question: 'Who was the richest person in the world in 2020?',
      answers: [
        {
          answer: 'Bill Gates',
          correct: false,
        },
        {
          answer: 'Jeff Bezos',
          correct: true,
        },
        {
          answer: 'Elon Musk',
          correct: false,
        },
        {
          answer: 'Warren Buffet',
          correct: false,
        },
      ],
      info:
        "Amazon founder Jeff Bezos was, in 2020, the world's wealthiest person for the third year in a row, worth $113 billion.",
    },
    {
      question: 'Who is the god of thunder in Norse mythology?',
      answers: [
        {
          answer: 'Odin',
          correct: false,
        },
        {
          answer: 'Loki',
          correct: false,
        },
        {
          answer: 'Heimdall',
          correct: false,
        },
        {
          answer: 'Thor',
          correct: true,
        },
      ],
      info:
        'Thor is the god of thunder and lightning in Norse mythology, associated with strength, storms, hallowing and fertility.',
    },
    {
      question: 'The Roman god of war shares the same name with which planet?',
      answers: [
        {
          answer: 'Jupiter',
          correct: false,
        },
        {
          answer: 'Saturn',
          correct: false,
        },
        {
          answer: 'Mercury',
          correct: false,
        },
        {
          answer: 'Mars',
          correct: true,
        },
      ],
      info:
        'Mars was the Roman god of war and second only to Jupiter in the Roman pantheon.',
    },
    {
      question: 'Who is the god of thunder in Greek mythology?',
      answers: [
        {
          answer: 'Apollo',
          correct: false,
        },
        {
          answer: 'Zeus',
          correct: true,
        },
        {
          answer: 'Hades',
          correct: false,
        },
        {
          answer: 'Afrodite',
          correct: false,
        },
      ],
      info:
        'Zeus is the sky and thunder god in ancient Greek religion, who rules as king of the gods of Mount Olympus.',
    },
    {
      question: 'LOL is Internet slang for what?',
      answers: [
        {
          answer: 'Lord of Love',
          correct: false,
        },
        {
          answer: 'Love of Life',
          correct: false,
        },
        {
          answer: 'Laughing out Loud',
          correct: true,
        },
        {
          answer: 'Lots of Laughter',
          correct: false,
        },
      ],
      info:
        'LOL, or lol, is an initialism for "laughing out loud" and a popular element of Internet slang.',
    },
    {
      question: 'Stockholm is the capital city of which country?',
      answers: [
        {
          answer: 'Switzerland',
          correct: false,
        },
        {
          answer: 'Sweden',
          correct: true,
        },
        {
          answer: 'Norway',
          correct: false,
        },
        {
          answer: 'Denmark',
          correct: false,
        },
      ],
      info:
        'Stockholm is the capital and most populous urban area of Sweden as well as in Scandinavia.',
    },
    {
      question: 'Which is the largest ocean on Earth?',
      answers: [
        {
          answer: 'The Atlantic Ocean',
          correct: false,
        },
        {
          answer: 'The Pacific Ocean',
          correct: true,
        },
        {
          answer: 'The Arctic Ocean',
          correct: false,
        },
        {
          answer: 'The Indian Ocean',
          correct: false,
        },
      ],
      info:
        "The Pacific Ocean is the largest and deepest of Earth's oceanic divisions. It extends from the Arctic Ocean in the north to the Southern Ocean in the south and is bounded by the continents of Asia and Australia in the west and the Americas in the east.",
    },
    {
      question: 'How many signs are there in the Zodiac?',
      answers: [
        {
          answer: '10',
          correct: false,
        },
        {
          answer: '11',
          correct: false,
        },
        {
          answer: '12',
          correct: true,
        },
        {
          answer: '13',
          correct: false,
        },
      ],
      info:
        'There are 12 signs of the zodiac according to Western astrology, which literally means the “circle of animals”.',
    },
    {
      question: 'Botany is the scientific study of what?',
      answers: [
        {
          answer: 'Plants',
          correct: true,
        },
        {
          answer: 'Animals',
          correct: false,
        },
        {
          answer: 'Robots',
          correct: false,
        },
        {
          answer: 'Rocks',
          correct: false,
        },
      ],
      info: 'Botany is the science of plant life and a branch of biology.',
    },
    {
      question:
        'If a male donkey is called a "jack", a female donkey is called what?',
      answers: [
        {
          answer: 'Mary',
          correct: false,
        },
        {
          answer: 'Jenny',
          correct: true,
        },
        {
          answer: 'Dame',
          correct: false,
        },
        {
          answer: 'Lady',
          correct: false,
        },
      ],
      info:
        'A male donkey or ass is called a jack, a female a jenny or jennet; a young donkey is a foal.',
    },
    {
      question:
        'The ultraviolet rays from the sun help the skin produce which vitamin?',
      answers: [
        {
          answer: 'Vitamin B',
          correct: false,
        },
        {
          answer: 'Vitamin C',
          correct: false,
        },
        {
          answer: 'Vitamin D',
          correct: true,
        },
        {
          answer: 'Vitamin E',
          correct: false,
        },
      ],
      info:
        "When your skin is exposed to sunlight, it makes vitamin D from cholesterol. The sun's ultraviolet B (UVB) rays hit cholesterol in the skin cells, providing the energy for vitamin D synthesis to occur.",
    },
    {
      question: 'What does a seismologist study?',
      answers: [
        {
          answer: 'Space',
          correct: false,
        },
        {
          answer: 'String Theory',
          correct: false,
        },
        {
          answer: 'Earthquakes',
          correct: true,
        },
        {
          answer: 'Asteroids',
          correct: false,
        },
      ],
      info:
        'Seismologists study shock waves created by earthquakes and volcanic activity. They also work in oil, gas and minerals exploration.',
    },
    {
      question: "Which is the world's highest mountain?",
      answers: [
        {
          answer: 'Mount Everest',
          correct: true,
        },
        {
          answer: 'Mount Fuji',
          correct: false,
        },
        {
          answer: 'Mount Kilimanjaro',
          correct: false,
        },
        {
          answer: 'Mount Matterhorn',
          correct: false,
        },
      ],
      info:
        "Mount Everest is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas.",
    },
    {
      question: 'The Eiffel Tower can be found in which city?',
      answers: [
        {
          answer: 'Barcelona',
          correct: false,
        },
        {
          answer: 'London',
          correct: false,
        },
        {
          answer: 'Paris',
          correct: true,
        },
        {
          answer: 'Rome',
          correct: false,
        },
      ],
      info:
        'Rumor has it that the Eiffel Tower was originally intended to be built in Barcelona, Spain. However, due to authorities in Barcelona turning down the proposal for its construction it can now be found in Paris, France.',
    },
    {
      question: 'How many legs does a spider have?',
      answers: [
        {
          answer: '6',
          correct: false,
        },
        {
          answer: '8',
          correct: true,
        },
        {
          answer: '10',
          correct: false,
        },
        {
          answer: '4',
          correct: false,
        },
      ],
      info:
        'Spiders are arachnids, and like all arachnids, have eight legs. Spiders are different from insects, which have only 6 legs.',
    },
    {
      question: 'How many sides does a pentagon have?',
      answers: [
        {
          answer: '5',
          correct: true,
        },
        {
          answer: '6',
          correct: false,
        },
        {
          answer: '8',
          correct: false,
        },
        {
          answer: '10',
          correct: false,
        },
      ],
      info:
        'In geometry, a pentagon (from the Greek πέντε pente and γωνία gonia, meaning five and angle) is any five-sided polygon or 5-gon.',
    },
    {
      question: 'How many edges does a cube have?',
      answers: [
        {
          answer: '6',
          correct: false,
        },
        {
          answer: '8',
          correct: false,
        },
        {
          answer: '10',
          correct: false,
        },
        {
          answer: '12',
          correct: true,
        },
      ],
      info:
        'The cube is the only regular hexahedron and is one of the five Platonic solids. It has 6 faces, 12 edges, and 8 vertices.',
    },
    {
      question: 'Which body parts continue to grow throughout life?',
      answers: [
        {
          answer: 'Hands and feet',
          correct: false,
        },
        {
          answer: 'Arms and legs',
          correct: false,
        },
        {
          answer: 'Ears and nose',
          correct: true,
        },
        {
          answer: 'Eyes and lips',
          correct: false,
        },
      ],
      info:
        "While the rest of our body shrinks as we get older, our noses, earlobes and ear muscles keep getting bigger. That's because they're made mostly of cartilage cells, which divide more as we age.",
    },
    {
      question: "What is Batman's real name?",
      answers: [
        {
          answer: 'Clark Kent',
          correct: false,
        },
        {
          answer: 'Bruce Wayne',
          correct: true,
        },
        {
          answer: 'Peter Parker',
          correct: false,
        },
        {
          answer: 'Tony Stark',
          correct: false,
        },
      ],
      info:
        'In the DC Universe continuity, Batman is the alias of Bruce Wayne, a wealthy American playboy, philanthropist, and owner of Wayne Enterprises based in Gotham City.',
    },
    {
      question: "What color is Scooby Doo's collar?",
      answers: [
        {
          answer: 'Green',
          correct: false,
        },
        {
          answer: 'Blue',
          correct: true,
        },
        {
          answer: 'Red',
          correct: false,
        },
        {
          answer: 'Yellow',
          correct: false,
        },
      ],
      info:
        'Scooby Doo is the eponymous character and protagonist of the animated television franchise of the same name created in 1969. He is a Great Dane who wears a blue collar.',
    },
    {
      question: 'What dog breed is Snoopy from the comic Peanuts?',
      answers: [
        {
          answer: 'Dalmatian',
          correct: false,
        },
        {
          answer: 'Beagle',
          correct: true,
        },
        {
          answer: 'Border Collie',
          correct: false,
        },
        {
          answer: 'Bulldog',
          correct: false,
        },
      ],
      info:
        'Snoopy is an anthropomorphic beagle in the American comic strip Peanuts by Charles M. Schulz.',
    },
    {
      question: 'Who was known as the King of Rock N Roll?',
      answers: [
        {
          answer: 'Michael Jackson',
          correct: false,
        },
        {
          answer: 'Elvis Presley',
          correct: true,
        },
        {
          answer: 'James Brown',
          correct: false,
        },
        {
          answer: 'Eric Clapton',
          correct: false,
        },
      ],
      info:
        'The King of Rock N Roll is a nickname most commonly associated with American rock and roll icon, Elvis Presley.',
    },
  ],

  // MEDIUM QUESTIONS
  MEDIUM: [
    {
      question: 'Who discovered DNA?',
      answers: [
        {
          answer: 'Watson & Crick',
          correct: false,
        },
        {
          answer: 'Albert Einstein',
          correct: false,
        },
        {
          answer: 'Nicola Tesla',
          correct: false,
        },
        {
          answer: 'Friedrich Miescher',
          correct: true,
        },
      ],
      info:
        'Many people believe that biologist James Watson and physicist Francis Crick discovered DNA in the 1950s. In reality, DNA was first identified in the late 1860s by Swiss chemist Friedrich Miescher.',
    },
    {
      question: 'Which of these is the smallest unit of computer memory?',
      answers: [
        {
          answer: 'Kilobyte (KB)',
          correct: true,
        },
        {
          answer: 'Gigabyte (GB)',
          correct: false,
        },
        {
          answer: 'Megabyte (MB)',
          correct: false,
        },
        {
          answer: 'Terabyte (TB)',
          correct: false,
        },
      ],
      info:
        'The kilobyte (abbreviated "K" or "KB") is the smallest unit of measurement greater than a byte. It precedes the megabyte, which contains 1,000,000 bytes.',
    },
    {
      question: 'Which planet is the hottest in our solar system?',
      answers: [
        {
          answer: 'Jupiter',
          correct: false,
        },
        {
          answer: 'Mercury',
          correct: false,
        },
        {
          answer: 'Venus',
          correct: true,
        },
        {
          answer: 'Mars',
          correct: false,
        },
      ],
      info:
        'Venus is the second planet from the sun and has a temperature that is maintained at 462 degrees Celsius, no matter where you go on the planet. It is the hottest planet in the solar system.',
    },
    {
      question: 'Which country produces the most coffee in the world?',
      answers: [
        {
          answer: 'Colombia',
          correct: false,
        },
        {
          answer: 'Brazil',
          correct: true,
        },
        {
          answer: 'Mexico',
          correct: false,
        },
        {
          answer: 'Vietnam',
          correct: false,
        },
      ],
      info:
        'In 2018, Brazil, the top coffee producing country, accounted for 40 percent of the global coffee supply. Vietnam, was the second largest coffee producer, accounting for roughly 20 percent of the world coffee production.',
    },
    {
      question: 'What is the national dish of Italy?',
      answers: [
        {
          answer: 'Pasta Bolognese',
          correct: true,
        },
        {
          answer: 'Pizza Margherita',
          correct: false,
        },
        {
          answer: 'Pasta Carbonara',
          correct: false,
        },
        {
          answer: 'Pizza Capricciosa',
          correct: false,
        },
      ],
      info:
        'Ragu alla Bolognese, also known simply as Bolognese, is recognized as the national dish of Italy, and it enjoys widespread popularity by Italians both domestically and abroad.',
    },
    {
      question: 'What percentage of our bodies is made up of water?',
      answers: [
        {
          answer: '40-45%',
          correct: false,
        },
        {
          answer: '50-55%',
          correct: false,
        },
        {
          answer: '60-65%',
          correct: true,
        },
        {
          answer: '80-85%',
          correct: false,
        },
      ],
      info:
        'Most of the human body is water, with an average of roughly 60%. The amount of water in the body changes slightly with age, sex, and hydration levels.',
    },
    {
      question: 'What name is used to refer to a group of frogs?',
      answers: [
        {
          answer: 'A fraug',
          correct: false,
        },
        {
          answer: 'A squad',
          correct: false,
        },
        {
          answer: 'An army',
          correct: true,
        },
        {
          answer: 'A hoop',
          correct: false,
        },
      ],
      info: 'A group of frogs is called an "army".',
    },
    {
      question: 'How many hearts does an octopus have?',
      answers: [
        {
          answer: '5',
          correct: false,
        },
        {
          answer: '4',
          correct: false,
        },
        {
          answer: '3',
          correct: true,
        },
        {
          answer: '8',
          correct: false,
        },
      ],
      info:
        'Octopuses have three hearts; a systemic heart that circulates blood around the body and two branchial hearts that pump it through each of the two gills.',
    },
    {
      question: 'Who was the first President of the United States?',
      answers: [
        {
          answer: 'Abraham Lincoln',
          correct: false,
        },
        {
          answer: 'Thomas Jefferson',
          correct: false,
        },
        {
          answer: 'George Washington',
          correct: true,
        },
        {
          answer: 'Theodore Roosevelt',
          correct: false,
        },
      ],
      info:
        'George Washington was an American political leader, military general, statesman, and Founding Father who served as the first president of the United States.',
    },
    {
      question: 'Who invented the telephone?',
      answers: [
        {
          answer: 'Benjamin Franklin',
          correct: false,
        },
        {
          answer: 'Alexander Graham Bell',
          correct: true,
        },
        {
          answer: 'Albert Einstein',
          correct: false,
        },
        {
          answer: 'Stephen Hawking',
          correct: false,
        },
      ],
      info:
        'Alexander Graham Bell (1847 – 1922) was a Scottish-born inventor, scientist, and engineer who is credited with inventing and patenting the first practical telephone.',
    },
    {
      question: 'Albert Einstein was what kind of scientist?',
      answers: [
        {
          answer: 'Theoretical Physicist',
          correct: true,
        },
        {
          answer: 'Astronomer',
          correct: false,
        },
        {
          answer: 'Cosmologist',
          correct: false,
        },
        {
          answer: 'Astrobiologist',
          correct: false,
        },
      ],
      info:
        'Albert Einstein (1879 – 1955) was a German-born theoretical physicist, universally acknowledged to be one of the two greatest physicists of all time, the other being Isaac Newton.',
    },
    {
      question: 'Robert Oppenheimer is often credited as being what?',
      answers: [
        {
          answer: 'Father of the Atomic Bomb',
          correct: true,
        },
        {
          answer: 'Father of Modern Physics',
          correct: false,
        },
        {
          answer: 'Inventor of the Light Bulb',
          correct: false,
        },
        {
          answer: 'Founder of Coca Cola',
          correct: false,
        },
      ],
      info:
        'Robert Oppenheimer is among those who are credited with being the "father of the atomic bomb" for their role in the Manhattan Project, the World War II undertaking that developed the first nuclear weapons.',
    },
    {
      question: 'How many years did the 100 Years War last?',
      answers: [
        {
          answer: '100',
          correct: false,
        },
        {
          answer: '10',
          correct: false,
        },
        {
          answer: '116',
          correct: true,
        },
        {
          answer: '99',
          correct: false,
        },
      ],
      info:
        'The 100 Years War was a long struggle between England and France over succession to the French throne. It lasted from 1337 to 1453, which means that it lasted for 116 years.',
    },
    {
      question:
        'The Hanging Gardens were among the seven wonders of the ancient world and could be found in which city?',
      answers: [
        {
          answer: 'Athens',
          correct: false,
        },
        {
          answer: 'Babylon',
          correct: true,
        },
        {
          answer: 'Jerusalem',
          correct: false,
        },
        {
          answer: 'Rome',
          correct: false,
        },
      ],
      info:
        'The Hanging Gardens of Babylon were the fabled gardens which adorned the capital of the Neo-Babylonian Empire, built by its greatest king Nebuchadnezzar II (r. 605-562 BCE). One of the Seven Wonders of the Ancient World, they are the only wonder whose existence is disputed amongst historians.',
    },
    {
      question: 'Who of these is known as the "Father of History"?',
      answers: [
        {
          answer: 'Plato',
          correct: false,
        },
        {
          answer: 'Herodotus',
          correct: true,
        },
        {
          answer: 'Socrates',
          correct: false,
        },
        {
          answer: 'Aristotle',
          correct: false,
        },
      ],
      info:
        'Herodotus has been called the “father of history.” An engaging narrator with a deep interest in the customs of the people he described, he remains the leading source of original historical information not only for Greece between 550 and 479 BCE but also for much of western Asia and Egypt at that time.',
    },
    {
      question:
        "Which of Newton's Laws states that 'for every action, there is an equal and opposite reaction'?",
      answers: [
        {
          answer: 'The Second Law of Thermodynamics',
          correct: false,
        },
        {
          answer: 'The Law of Attraction',
          correct: false,
        },
        {
          answer: 'The Third Law of Motion',
          correct: true,
        },
        {
          answer: 'The Law of Gravity',
          correct: false,
        },
      ],
      info:
        "Formally stated, Newton's third law (The Law of Motion) is: For every action, there is an equal and opposite reaction. The statement means that in every interaction, there is a pair of forces acting on the two interacting objects. The size of the forces on the first object equals the size of the force on the second object.",
    },
    {
      question:
        'Dolly was the first-ever living creature to be cloned. What type of animal was she?',
      answers: [
        {
          answer: 'A Sheep',
          correct: true,
        },
        {
          answer: 'A Mouse',
          correct: false,
        },
        {
          answer: 'A Goat',
          correct: false,
        },
        {
          answer: 'A Cow',
          correct: false,
        },
      ],
      info:
        'Dolly (1996 – 2003) was a female domestic sheep, and the first mammal cloned from an adult somatic cell, using the process of nuclear transfer.',
    },
    {
      question: 'What is Russian physiologist Ivan Pavlov famous for?',
      answers: [
        {
          answer: 'The Placebo Effect',
          correct: false,
        },
        {
          answer: 'Theory of Mind',
          correct: false,
        },
        {
          answer: 'Classical Conditioning',
          correct: true,
        },
        {
          answer: 'The Three Stages of Denial',
          correct: false,
        },
      ],
      info:
        'Ivan Pavlov was a Russian physiologist best known in psychology for his discovery of classical conditioning.',
    },
    {
      question: 'How old is the Earth?',
      answers: [
        {
          answer: '6000 years',
          correct: false,
        },
        {
          answer: '4.5 billion years',
          correct: true,
        },
        {
          answer: '5.6 million years',
          correct: false,
        },
        {
          answer: '350 000 years',
          correct: false,
        },
      ],
      info:
        'Scientists have calculated that Earth is 4.54 billion years old, with an error range of 50 million years.',
    },
    {
      question: 'What part of the brain controls hunger?',
      answers: [
        {
          answer: 'Corpus Callosum',
          correct: false,
        },
        {
          answer: 'The Pineal Gland',
          correct: false,
        },
        {
          answer: 'The Temporal Lobe',
          correct: false,
        },
        {
          answer: 'The Hypothalamus',
          correct: true,
        },
      ],
      info:
        'Within the hypothalamus are nerve cells that, when activated, produce the sensation of hunger.',
    },
  ],

  // HARD QUESTIONS
  HARD: [
    {
      question: 'What is the distance of a light-year?',
      answers: [
        {
          answer: '9.5 trillion km',
          correct: true,
        },
        {
          answer: '5.7 billion km',
          correct: false,
        },
        {
          answer: '2.8 million km',
          correct: false,
        },
        {
          answer: '6.3 quadrillion km',
          correct: false,
        },
      ],
      info:
        'The light-year is a unit of length used to express astronomical distances and is equivalent to about 9.46 trillion kilometres (9.46×1012 km) or 5.88 trillion miles (5.88×1012 mi).',
    },
    {
      question: 'What year was the original iPhone released?',
      answers: [
        {
          answer: '2005',
          correct: false,
        },
        {
          answer: '2006',
          correct: false,
        },
        {
          answer: '2007',
          correct: true,
        },
        {
          answer: '2008',
          correct: false,
        },
      ],
      info:
        'The iPhone is the first smartphone designed and marketed by Apple Inc. After years of rumors and speculation, it was officially announced in January 2007.',
    },
    {
      question: 'In which city in India would you find the Taj Mahal?',
      answers: [
        {
          answer: 'Delhi',
          correct: false,
        },
        {
          answer: 'Mumbai',
          correct: false,
        },
        {
          answer: 'Agra',
          correct: true,
        },
        {
          answer: 'Kolkata',
          correct: false,
        },
      ],
      info:
        'The Taj Mahal is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra.',
    },
    {
      question:
        'What was the first planet discovered with the aid of a telescope?',
      answers: [
        {
          answer: 'Mars',
          correct: false,
        },
        {
          answer: 'Venus',
          correct: false,
        },
        {
          answer: 'Uranus',
          correct: true,
        },
        {
          answer: 'Saturn',
          correct: false,
        },
      ],
      info:
        'Uranus was the first planet to be discovered using a telescope, as Mercury, Venus, Mars, Jupiter and Saturn were all bright enough to be easily visible to the naked eye. It was discovered in 1781.',
    },
    {
      question: 'The first vaccine protected against which disease?',
      answers: [
        {
          answer: 'Smallpox',
          correct: true,
        },
        {
          answer: 'Polio',
          correct: false,
        },
        {
          answer: 'Measles',
          correct: false,
        },
        {
          answer: 'Whooping Cough',
          correct: false,
        },
      ],
      info:
        'The smallpox vaccine was the first vaccine to be developed against a contagious disease. In 1796, the British doctor Edward Jenner demonstrated that an infection with the relatively mild cowpox virus conferred immunity against the deadly smallpox virus.',
    },
    {
      question: 'Hypertension is another name for what condition?',
      answers: [
        {
          answer: 'Anxiety',
          correct: false,
        },
        {
          answer: 'Dry Skin',
          correct: false,
        },
        {
          answer: 'High Blood Pressure',
          correct: true,
        },
        {
          answer: 'Headache',
          correct: false,
        },
      ],
      info:
        'Hypertension, also known as high blood pressure, is a long-term medical condition in which the blood pressure in the arteries is persistently elevated.',
    },
    {
      question: 'What does RAM stand for?',
      answers: [
        {
          answer: 'Random Allocated Memory',
          correct: false,
        },
        {
          answer: 'Redirected Action Memory',
          correct: false,
        },
        {
          answer: 'Readily Available Memory',
          correct: false,
        },
        {
          answer: 'Random Access Memory',
          correct: true,
        },
      ],
      info:
        'RAM stands for Random Access Memory, a component that allows your computer to store data short-term for quicker access.',
    },
    {
      question: 'Where would you find the "Spanish Steps"?',
      answers: [
        {
          answer: 'Madrid, Spain',
          correct: false,
        },
        {
          answer: 'Rome, Italy',
          correct: true,
        },
        {
          answer: 'Athens, Greece',
          correct: false,
        },
        {
          answer: 'Mexico City. Mexico',
          correct: false,
        },
      ],
      info:
        'The Spanish Steps are a set of steps in Rome, Italy, climbing a steep slope between the Piazza di Spagna at the base and Piazza Trinità dei Monti, dominated by the Trinità dei Monti church at the top.',
    },
    {
      question:
        'What animal has fingerprints that are nearly identical to human fingerprints?',
      answers: [
        {
          answer: 'Koala Bears',
          correct: true,
        },
        {
          answer: 'Chimpanzees',
          correct: false,
        },
        {
          answer: 'Orangutans',
          correct: false,
        },
        {
          answer: 'Gibbons',
          correct: false,
        },
      ],
      info:
        'The fingerprints of a koala are so indistinguishable from humans that they have on occasion been confused at a crime scene.',
    },
    {
      question: 'How many Earths could fit inside the Sun?',
      answers: [
        {
          answer: '13 000',
          correct: false,
        },
        {
          answer: '130 000',
          correct: false,
        },
        {
          answer: '1 300 000',
          correct: true,
        },
        {
          answer: '13 000 000',
          correct: false,
        },
      ],
      info:
        'The Sun is large enough that approximately 1.3 million Earths could fit inside.',
    },
    {
      question: 'What was the original name of New York City?',
      answers: [
        {
          answer: 'New London',
          correct: false,
        },
        {
          answer: 'New Amsterdam',
          correct: true,
        },
        {
          answer: 'New Paris',
          correct: false,
        },
        {
          answer: 'New Manchester',
          correct: false,
        },
      ],
      info:
        'New York City was originally New Amsterdam, the capital of the Dutch colony known as New Netherland.',
    },
    {
      question: 'The ancient city of Chichén Itzá was built by who?',
      answers: [
        {
          answer: 'The Aztecs',
          correct: false,
        },
        {
          answer: 'The Olmecs',
          correct: false,
        },
        {
          answer: 'The Mayans',
          correct: true,
        },
        {
          answer: 'The Inca',
          correct: false,
        },
      ],
      info:
        'Chichen Itza was a large pre-Columbian city built by the Maya people of the Terminal Classic period.',
    },
    {
      question: 'Coulrophobia is the irrational fear of what?',
      answers: [
        {
          answer: 'Cauldrons',
          correct: false,
        },
        {
          answer: 'Clowns',
          correct: true,
        },
        {
          answer: 'Crows',
          correct: false,
        },
        {
          answer: 'Kitchen Utilities',
          correct: false,
        },
      ],
      info: 'Coulrophobia is the abnormal fear of clowns.',
    },
    {
      question: 'The flag of the European Union has how many stars on it?',
      answers: [
        {
          answer: '11',
          correct: false,
        },
        {
          answer: '12',
          correct: true,
        },
        {
          answer: '13',
          correct: false,
        },
        {
          answer: '14',
          correct: false,
        },
      ],
      info:
        'The flag of the European Union features a circle of 12 gold stars on a blue background.',
    },
    {
      question: 'What animal has the largest eyes?',
      answers: [
        {
          answer: 'The Blue Whale',
          correct: false,
        },
        {
          answer: 'The Elephant',
          correct: false,
        },
        {
          answer: 'The Colossal Squid',
          correct: true,
        },
        {
          answer: 'The Sperm Whale',
          correct: false,
        },
      ],
      info:
        'The colossal squid has the largest animal eyes ever studied. It possibly has the largest eyes that have ever existed during the history of the animal kingdom. In a living colossal squid they measure about 27 cm across — about the size of a soccer ball.',
    },
    {
      question:
        'Crying after sex is a normal response and is also called what?',
      answers: [
        {
          answer: 'Postintercourse Lacrimation',
          correct: false,
        },
        {
          answer: 'Postclimactic Sadness',
          correct: false,
        },
        {
          answer: 'Postcoital Depression',
          correct: false,
        },
        {
          answer: 'Postcoital Dysphoria',
          correct: true,
        },
      ],
      info:
        'Postcoital dysphoria refers to feelings of deep sadness or agitation after consensual sex, even if the encounter was loving, satisfying, or enjoyable. In some cases, people become tearful or depressed after orgasm.',
    },
    {
      question: 'What is the little dot above a lowercase "i" or "j" called?',
      answers: [
        {
          answer: 'Tittle',
          correct: true,
        },
        {
          answer: 'Dottle',
          correct: false,
        },
        {
          answer: 'Apastrophe',
          correct: false,
        },
        {
          answer: 'Crown',
          correct: false,
        },
      ],
      info:
        'A tittle or superscript dot is a small distinguishing mark, such as a diacritic in the form of a dot on a lowercase i or j.',
    },
    {
      question:
        'In 1952, the United States Air Force created Project Blue Book to study what?',
      answers: [
        {
          answer: 'Submarine Communication',
          correct: false,
        },
        {
          answer: 'Homing Pidgeons',
          correct: false,
        },
        {
          answer: 'Unidentified Flying Objects',
          correct: true,
        },
        {
          answer: 'Alien Life on Venus',
          correct: false,
        },
      ],
      info:
        'Project Blue Book was one of a series of systematic studies of unidentified flying objects (UFOs) conducted by the United States Air Force. It started in 1952, the third study of its kind, following projects Sign (1947) and Grudge (1949).',
    },
    {
      question:
        'In 1917, Finland declared its independence from which country?',
      answers: [
        {
          answer: 'Sweden',
          correct: false,
        },
        {
          answer: 'Russia',
          correct: true,
        },
        {
          answer: 'Norway',
          correct: false,
        },
        {
          answer: 'Poland',
          correct: false,
        },
      ],
      info:
        'Finland declared its independence from Russia following the Bolshevik Revolution of November, 1917.',
    },
    {
      question: 'What is a haboob?',
      answers: [
        {
          answer: 'A type of sandstorm',
          correct: true,
        },
        {
          answer: 'A type of bird',
          correct: false,
        },
        {
          answer: 'A type of plant',
          correct: false,
        },
        {
          answer: 'A body part',
          correct: false,
        },
      ],
      info:
        'A haboob is a type of intense dust storm carried on an atmospheric gravity current, also known as a weather front. Haboobs occur regularly in dry land area regions throughout the world.',
    },
    {
      question:
        'In what country did the competition called "wife carrying" originate?',
      answers: [
        {
          answer: 'Iceland',
          correct: false,
        },
        {
          answer: 'Scotland',
          correct: false,
        },
        {
          answer: 'Ireland',
          correct: false,
        },
        {
          answer: 'Finland',
          correct: true,
        },
      ],
      info:
        'Wife carrying is a contest originating in Finland in which male competitors race while each carrying a female teammate. The objective is for the male to carry the female through a special obstacle track in the fastest time.',
    },
    {
      question: 'Where do kiwi fruits originally come from?',
      answers: [
        {
          answer: 'China',
          correct: true,
        },
        {
          answer: 'New Zealand',
          correct: false,
        },
        {
          answer: 'Australia',
          correct: false,
        },
        {
          answer: 'Brazil',
          correct: false,
        },
      ],
      info:
        'The original fruit is from the Far East, having been grown in what is now modern-day China for many centuries. It was only at the turn of the 20th Century, in 1904, that it arrived on New Zealand shores.',
    },
  ],
};

/* DOM OBJECTS */
const app = document.querySelector('.app');

/* FUNCTIONS */
const loadGame = () => {
  // Initialize difficulty
  let difficulty = null;

  // Render difficulty select screen
  renderDifficultySelectScreen();

  // Select Difficulty
  selectDifficulty();

  handleStartBtn();
};

// Render Difficulty Select Screen
const renderDifficultySelectScreen = () => {
  app.innerHTML = `
  <div class="difficulty-screen">
    <span class="select-difficulty-heading">
      SELECT DIFFICULTY
    </span>
    <div class="difficulty-btns-container">
      <button class="difficulty-btn" value="EASY">
        EASY
      </button>
      <button class="difficulty-btn" value="MEDIUM">
        MEDIUM
      </button>
      <button class="difficulty-btn" value="HARD">
        HARD
      </button>
    </div>
    <button class="start-btn" disabled>
        START
    </button>
  </div>
  `;
};

// Select Difficulty
const selectDifficulty = () => {
  const difficultyBtn = document.querySelectorAll('.difficulty-btn');
  const startBtn = document.querySelector('.start-btn');

  difficultyBtn.forEach((button) => {
    button.addEventListener('click', (e) => {
      setDifficulty(e);
      updateDifficultyBtns(difficultyBtn);
      updateStartBtnState(startBtn);
    });
  });
};

// Set Difficulty
const setDifficulty = (e) => {
  difficulty = e.target.value;
};

// Update Difficulty Buttons
const updateDifficultyBtns = (difficultyBtn) => {
  difficultyBtn.forEach((button) => {
    button.value === difficulty
      ? button.classList.add('is-selected')
      : button.classList.remove('is-selected');
  });
};

// Update Start Button State
const updateStartBtnState = (startBtn) => {
  if (!(difficulty === null)) {
    startBtn.removeAttribute('disabled');
  }
};

// Handle Start Button
const handleStartBtn = () => {
  const startBtn = document.querySelector('.start-btn');

  startBtn.addEventListener('click', () => {
    playGame();
  });
};

// Play Game
const playGame = () => {
  // Initialize score and round number
  let totalScore = 0;
  let roundNumber = 1;

  // Get Random Questions
  const randomQuestions = getRandomQuestions();

  // Start Round
  startRound(totalScore, roundNumber, randomQuestions);
};

// Render Game Screen
const renderGameScreen = () => {
  app.innerHTML = `
  <div class="game-screen">
    <header class="stats-container">
      <span class="round-number-container"></span>
      <span class="score"></span>
    </header>

    <div class="main-container">
      <div class="question-container"></div>
      <div class="info-container hidden">
        <h3 class="round-result"></h3>
        <span class="info-text"></span>
        <button class="next-btn">NEXT</button>
      </div>
    </div>

    <div class="answers-container"></div>

  </div>
  `;
};

// Start Round
const startRound = (totalScore, roundNumber, randomQuestions) => {
  // Get Current Question
  const currentQuestion = randomQuestions[roundNumber - 1];

  // Render Game Screen
  renderGameScreen();

  const score = document.querySelector('.score');
  const roundNumberContainer = document.querySelector(
    '.round-number-container'
  );
  const questionContainer = document.querySelector('.question-container');
  const infoContainer = document.querySelector('.info-container');
  const roundResult = document.querySelector('.round-result');
  const infoText = document.querySelector('.info-text');
  const answersContainer = document.querySelector('.answers-container');
  const nextBtn = document.querySelector('.next-btn');

  // Render Data Onto Screen
  questionContainer.innerHTML = currentQuestion.question;
  infoText.innerHTML = currentQuestion.info;
  updateScore(score, totalScore);
  roundNumberContainer.innerHTML = `Round: ${roundNumber} of 10`;

  // Render Buttons
  renderAnswerBtns(currentQuestion, answersContainer);

  const answerBtn = document.querySelectorAll('.answer-btn');

  answerBtn.forEach((button) => {
    button.addEventListener('click', (e) => {
      if (e.target.value === 'true') {
        button.classList.add('correct-btn');
        roundResult.innerHTML = 'Correct!';
        roundResult.classList.add('correct-result');

        totalScore++;
      } else {
        roundResult.innerHTML = 'Incorrect!';
        roundResult.classList.add('incorrect-result');
        button.classList.add('incorrect-btn');
      }

      if (roundNumber === 10) {
        renderResultScreen(totalScore);
      }

      updateAnswerBtnState(answerBtn);

      revealInfo(infoContainer);

      updateScore(score, totalScore);
    });
  });

  nextBtn.addEventListener('click', () => {
    roundNumber++;
    startRound(totalScore, roundNumber, randomQuestions);
  });
};

// Get Random Questions
const getRandomQuestions = () => {
  const source = questions[difficulty];
  const quantity = 10;
  const maxRange = questions[difficulty].length;
  const randomIndexes = generateRandomIndexes(quantity, maxRange);
  const newArray = fillNewArray(randomIndexes);

  // Generate Random Indexes
  function generateRandomIndexes(quantity, maxRange) {
    const set = new Set();
    while (set.size < quantity) {
      set.add(Math.floor(Math.random() * maxRange));
    }

    return [...set];
  }

  // Fill New Array
  function fillNewArray(randomIndexes) {
    const arr = [];

    for (i = 0; i < randomIndexes.length; i++) {
      arr.push(source[randomIndexes[i]]);
    }

    return arr;
  }

  return newArray;
};

// Render Answers
const renderAnswerBtns = (currentQuestion, answersContainer) => {
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.classList.add('answer-btn');
    button.innerHTML = `${answer.answer}`;
    button.value = `${answer.correct}`;
    answersContainer.appendChild(button);
  });
};

// Update Answer Button State
const updateAnswerBtnState = (answerBtn) => {
  answerBtn.forEach((button) => {
    button.setAttribute('disabled', 'true');

    if (button.value === 'true') {
      button.classList.add('correct-btn');
    }
  });
};

// Reveal Info
const revealInfo = (infoContainer) => {
  infoContainer.classList.remove('hidden');
};

// Update Total Points
const updateScore = (score, totalScore) => {
  score.innerHTML = `Score: ${totalScore}`;
};

// Render Result Screen
const renderResultScreen = (totalScore) => {
  app.innerHTML = `
  <div class="result-screen">
    <p>You answered</p>
    <p class="results">${totalScore} out of 10</p>
    <p>questions correctly!</p>

    <button class="play-again-btn">Play Again</button>
  </div>
  `;

  const playAgainBtn = document.querySelector('.play-again-btn');

  playAgainBtn.addEventListener('click', () => {
    loadGame();
  });
};

/* GAME */
loadGame();
