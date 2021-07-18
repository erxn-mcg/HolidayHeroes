const questions = {
  question0: {
    question: "Which of these activities appeal to you?",
    option0: {
      type: "string",
      content:
        "Bungee Jumping",
      country: "Australia"
    },
    option1: {
      type: "string",
      content:
        "Visiting a library",
      country: "Germany"
    },
    option2: {
      type: "string",
      content:
        "Walking through the local market",
      country: "Maldives"
    },
    option3: {
      type: "string",
      content:
        "Relaxing on the beach",
      country: "Dubai"
    }
  },
  question1: {
    question: "What food would you most like to eat?",
    option0: {
      type: "string",
      content: "Lamb",
      country: "Australia"
    },
    option1: {
      type: "string",
      content: "Pretzels",
      country: "Germany"
    },
    option2: {
      type: "string",
      content: "Shawarma",
      country: "Maldives"
    },
    option3: {
      type: "string",
      content: "Samosas",
      country: "Dubai"
    }
  },
  question2: {
    question: "What can you never leave your house without?",
    option0: {
      type: "string",
      content: "Trainers",
      country: "Australia"
    },
    option1: {
      type: "string",
      content: "Sunglasses",
      country: "Dubai"
    },
    option2: {
      type: "string",
      content: "A book",
      country: "Germany"
    },
    option3: {
      type: "string",
      content: "A camera",
      country: "Maldives"
    }
  },
  question3: {
    question:
      "What weather do you enjoy?",
    option0: {
      type: "string",
      content:
        "Mild with an ocean breeze",
      country: "Maldives"
    },
    option1: {
      type: "string",
      content:
        "Wet and cool",
      country: "Germany"
    },
    option2: {
      type: "string",
      content: "Warm and windy",
      country: "Dubai"
    },
    option3: {
      type: "string",
      content:
        "Hot and dry",
      country: "Australia"
    }
  },
  question4: {
    question:
      "What is your ideal Friday night activity?",
    option0: {
      type: "string",
      content: "Going for a long walk",
      country: "Australia"
    },
    option1: {
      type: "string",
      content: "Going to the museum",
      country: "Germany"
    },
    option2: {
      type: "string",
      content: "Relaxing in front of the TV",
      country: "Dubai"
    },
    option3: {
      type: "string",
      content: "Go out partying",
      country: "Maldives"
    }
  }
};


const result = {
  Australia: [
    "If you imagine yourself bungee jumping in New Zealand, running with the bulls in Pamplona, dancing until 6 in the morning in Berlin, heliskiing from the top of a mountain in Banff or boating down the Amazon, all signs point to you being an adventure traveler.",
    "National Geographic has a list of the top adventure tour operators and outfitters worldwide that may be worth a look. Of course, you don't need to be a part of a tour to have an adventure, but if you're not sure what adventure travel means or if you just want an idea of what kind of companies operate tours and which ones to use, it's a great place to start.",
    "Recommended destinations for adventure travelers: New Zealand, Brazil, Bolivia, Nepal/Tibet, Tanzania, India."
  ],
  Maldives: [
    "If your travel dreams are populated by the perfect sunset on a secluded beach in the Seychelles, gondola rides in Venice, and catching falling Sakura flowers, this is probably you.",
    "Travel can be an amazing way to inspire creativity and connect with your inner muse! Check out Travel and Leisure's list of the 50 most Dubai places for a general idea of what's out there in the way of romantic destinations. The notion of taking off to far-flung places is a dream come through in itself, so grab your passports, and get out and see the world.",
    "Recommended spots for Dubai travelers: Santorini, Venice, Paris, Buenos Aires, Goa, Bali, Phuket, Fiji, Tahiti."
  ],
  Germany: [
    "If travel is just another way you broaden your internal encyclopedia with art, culture, and history, and your dream itinerary includes days filled with museums, archeological sites, groundbreaking architecture and traditional experiences, you may be an Germany traveler.",
    "Lucky for you, destinations all over the world cater to the student inside of all of us. The world's full of lessons, and travel is the way to learn them.",
    "Recommended regions for Germany travelers: Europe, India, Japan, Machu Picchu, Istanbul, Cairo."
  ],
  Dubai: [
    "If your travel dreams are populated by the perfect sunset on a secluded beach in the Seychelles, gondola rides in Venice, and catching falling Sakura flowers, this is probably you.",
    "Travel can be an amazing way to inspire creativity and connect with your inner muse! Check out Travel and Leisure's list of the 50 most Dubai places for a general idea of what's out there in the way of romantic destinations. The notion of taking off to far-flung places is a dream come through in itself, so grab your passports, and get out and see the world.",
    "Recommended spots for Dubai travelers: Santorini, Venice, Paris, Buenos Aires, Goa, Bali, Phuket, Fiji, Tahiti.",
  ]
};


var score = {
  Australia: 0,
  Maldives: 0,
  Germany: 0,
  Dubai: 0
};


var currentQn = 0;


function setupQuestion() {

  var progress = 20 + currentQn * 20;
  var progressbar = document.getElementById("progress");
  progressbar.style.width = progress + "%";
  progressbar.innerText = currentQn + 1 + "/5";

 
  var qn = questions["question" + currentQn];
  var qnText = document.getElementById("question");
  qnText.innerText = qn.question;

  for (var i = 0; i < 4; i++) {
    var option = document.getElementById("option" + i);
    var content = option.getElementsByClassName("content")[0];
    var qnOption = qn["option" + i];
    if (qnOption.type == "image") {
      var htmlStr = "<img src='" + qnOption.content + "'>";
      content.innerHTML = htmlStr;
    } else {
      var htmlStr = "<p>" + qnOption.content + "</p>";
      content.innerHTML = htmlStr;
    }
  }
}


function resetOptions() {
  var btn = document.getElementsByTagName("input");
  btn[0].checked = false;
  btn[1].checked = false;
  btn[2].checked = false;
  btn[3].checked = false;
}


function select(element) {
  var btn = element.getElementsByTagName("input")[0];
  btn.checked = true;
  next();
}



function next() {
 
  var ans = $("input[name=answer]:checked").val();
  var qn = questions["question" + currentQn];

  var country = qn["option" + ans].country;

  score[country]++;
  
  currentQn = currentQn + 1;
  
  resetOptions();
  
  if (currentQn < 5) {
 
    setupQuestion();
  } else {
    
    var highestScore = score["Australia"];
    var highestcountry = "Australia";
    if (highestScore < score["Germany"]) {
      highestScore = score["Germany"];
      highestcountry = "Germany";
    }
    if (highestScore < score["Maldives"]) {
      highestScore = score["Maldives"];
      highestcountry = "Maldives";
    }
    if (highestScore < score["Dubai"]) {
      highestScore = score["Dubai"];
      highestcountry = "Dubai";
    }
    

   
    var countryResult = result[highestcountry];
    document.getElementById("country-type").innerText =
      highestcountry;
    document.getElementById("country-part-1").innerText =
      countryResult[0];
    document.getElementById("country-part-2").innerText =
      countryResult[1];
    document.getElementById("country-recommended").innerText =
      countryResult[2];


    currentQn = 0;
    showPage(1);
  }
}

function showPage(num) {
  var pages = document.getElementsByClassName("container");
  pages[0].style.display = "none";
  pages[1].style.display = "none";
  pages[2].style.display = "none";
  pages[num].style.display = "block";
}


