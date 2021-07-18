const questions = {
  question0: {
    question: "Who is coming with you?",
    option0: {
      type: "string",
      content:
        "My children",
      country: "Hideaway"
    },
    option1: {
      type: "string",
      content:
        "My friends",
      country: "Kuredu"
    },
    option2: {
      type: "string",
      content:
        "My colleagues",
      country: "Paradise_Island"
    },
    option3: {
      type: "string",
      content:
        "My SO",
      country: "Pullman"
    }
  },
  question1: {
    question: "Do you need a pool?",
    option0: {
      type: "string",
      content: "And a waterpark!",
      country: "Hideaway"
    },
    option1: {
      type: "string",
      content: "As long as it looks good on Instagram",
      country: "Kuredu"
    },
    option2: {
      type: "string",
      content: "Not necessarily",
      country: "Paradise_Island"
    },
    option3: {
      type: "string",
      content: "A private one would be nice",
      country: "Pullman"
    }
  },
  question2: {
    question: "What is the budget like?",
    option0: {
      type: "string",
      content: "High! £400+ a night",
      country: "Hideaway"
    },
    option1: {
      type: "string",
      content: "Medium: around £200 a night",
      country: "Pullman"
    },
    option2: {
      type: "string",
      content: "Fairly low: around £150 a night",
      country: "Kuredu"
    },
    option3: {
      type: "string",
      content: "Low: around £100 a night",
      country: "Paradise_Island"
    }
  },
  question3: {
    question:
      "How close do you want to be to the city center?",
    option0: {
      type: "string",
      content:
        "Right in the center!",
      country: "Paradise_Island"
    },
    option1: {
      type: "string",
      content:
        "Within walking distance",
      country: "Kuredu"
    },
    option2: {
      type: "string",
      content: "No need to be close",
      country: "Pullman"
    },
    option3: {
      type: "string",
      content:
        "Very far away!",
      country: "Hideaway"
    }
  },
  question4: {
    question:
      "What amenity can you not live without?",
    option0: {
      type: "string",
      content: "A theme park",
      country: "Hideaway"
    },
    option1: {
      type: "string",
      content: "A luxurious spa",
      country: "Kuredu"
    },
    option2: {
      type: "string",
      content: "Private villas",
      country: "Pullman"
    },
    option3: {
      type: "string",
      content: "Conference facilities",
      country: "Paradise_Island"
    }
  }
};


const result = {
  Hideaway: [
    "Based on your responses, you're probably travelling with children and looking for somewhere where you, and the kids, will be relaxed and occupied.",
    "Hideaway Beach Resort is a luxurious destination with many over water and beach front villas designed with elegance in mind. It has a floating aquapark with entertainment and watersports such as windsurfing and sailing. This is truly a 5 star resort!",
    "Press the button to see its website, as well as those of some other amazing Maldives hotels :)"
  ],
  Paradise_Island: [
    "Based on your responses you are probably looking to go somewhere with colleagues or friends where you will be right in the heart of Dubai",
    "Paradise_Island is exactly what you expect from the Maldives: white beaches, glorious sunshine, elegant huts. But, it also has business facilities so you can get some work done while you are there!",
    "Press the button to see its website, as well as those of some other amazing Maldives hotels :)"
  ],
  Kuredu: [
    "Based on your responses, you are an adventurous person looking for somewhere to chill with friends or family and enjoy some luxury service.",
    "Look no further than the Kuredu Island Resort to ensure you get the most out of your stay in the Maldives! It has a modern spa and sensational watersports, with food made in beach-front restaurants. This will certainly be a holiday to remember!",
    "Press the button to see its website, as well as those of some other amazing Maldives hotels :)"
  ],
  Pullman: [
    "Based on your responses you are looking for a relaxing, maybe romantic, getaway to somewhere private where you can truly enjoy the experience.",
    "Pullman Maldives Resort is a truly luxury hotel with private villas and pools, as well as a host of amazing activities and restaurants with food made by world-class chefs. This will be the most relaxing hotel ever!",
    "Press the button to see its website, as well as those of some other amazing Maldives hotels :)",
  ]
};


var score = {
  Hideaway: 0,
  Paradise_Island: 0,
  Kuredu: 0,
  Pullman: 0
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
    
    var highestScore = score["Hideaway"];
    var highestcountry = "Hideaway";
    if (highestScore < score["Kuredu"]) {
      highestScore = score["Kuredu"];
      highestcountry = "Kuredu";
    }
    if (highestScore < score["Paradise_Island"]) {
      highestScore = score["Paradise_Island"];
      highestcountry = "Paradise_Island";
    }
    if (highestScore < score["Pullman"]) {
      highestScore = score["Pullman"];
      highestcountry = "Pullman";
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


