const questions = {
  question0: {
    question: "Who is coming with you?",
    option0: {
      type: "string",
      content:
        "My children",
      country: "Tropical_Islands"
    },
    option1: {
      type: "string",
      content:
        "My friends",
      country: "Schlosshotel"
    },
    option2: {
      type: "string",
      content:
        "My colleagues",
      country: "Kempinski"
    },
    option3: {
      type: "string",
      content:
        "My SO",
      country: "Huttenhof"
    }
  },
  question1: {
    question: "Do you need a pool?",
    option0: {
      type: "string",
      content: "And a waterpark!",
      country: "Tropical_Islands"
    },
    option1: {
      type: "string",
      content: "As long as it looks good on Instagram",
      country: "Schlosshotel"
    },
    option2: {
      type: "string",
      content: "Not necessarily",
      country: "Kempinski"
    },
    option3: {
      type: "string",
      content: "A private one would be nice",
      country: "Huttenhof"
    }
  },
  question2: {
    question: "What is the budget like?",
    option0: {
      type: "string",
      content: "High! £400+ a night",
      country: "Tropical_Islands"
    },
    option1: {
      type: "string",
      content: "Medium: around £200 a night",
      country: "Huttenhof"
    },
    option2: {
      type: "string",
      content: "Fairly low: around £150 a night",
      country: "Schlosshotel"
    },
    option3: {
      type: "string",
      content: "Low: around £100 a night",
      country: "Kempinski"
    }
  },
  question3: {
    question:
      "How close do you want to be to the city center?",
    option0: {
      type: "string",
      content:
        "Right in the center!",
      country: "Kempinski"
    },
    option1: {
      type: "string",
      content:
        "Within walking distance",
      country: "Schlosshotel"
    },
    option2: {
      type: "string",
      content: "No need to be close",
      country: "Huttenhof"
    },
    option3: {
      type: "string",
      content:
        "Very far away!",
      country: "Tropical_Islands"
    }
  },
  question4: {
    question:
      "What amenity can you not live without?",
    option0: {
      type: "string",
      content: "A theme park",
      country: "Tropical_Islands"
    },
    option1: {
      type: "string",
      content: "A luxurious spa",
      country: "Schlosshotel"
    },
    option2: {
      type: "string",
      content: "Private villas",
      country: "Huttenhof"
    },
    option3: {
      type: "string",
      content: "Conference facilities",
      country: "Kempinski"
    }
  }
};


const result = {
  Tropical_Islands: [
    "Based on your responses, you're probably travelling with children and looking for somewhere where you, and the kids, will be relaxed and occupied.",
    "Tropical Islands is a hotel in a Nation Park south of Berlin. It is a gorgeous hotel but the main attraction is the largest indoor waterpark in Europe! It has a waterpark, a spa, and many activities including archery and mini-golf. This will be an unforgettable experience!",
    "Press the button to see its website, as well as those of some other great German hotels :)"
  ],
  Kempinski: [
    "Based on your responses you are probably looking to go somewhere with colleagues or friends where you will be right in the heart of Germany",
    "Hotel Adlon Kempinski is in the center of Berlin, right next to the Brandenburg Gate. It is an iconic and luxurious hotel with fancy restaurants and an amazing spa. As a 5 start hotel, you are sure to enjoy it!",
    "Press the button to see its website, as well as those of some other great German hotels :)"
  ],
  Schlosshotel: [
    "Based on your responses, you are an adventurous person looking for somewhere to chill with friends or family and enjoy some luxury service.",
    "Look no further than the Schlosshotel Kronberg to ensure you get the most out of your stay in Germany! It is set in 58 hectares of parkland, and the hotel is a luxury castle! It is fairly near to Frankfurt and is the perfect place for some insta-worthy shots!",
    "Press the button to see its website, as well as those of some other great German hotels :)"
  ],
  Huttenhof: [
    "Based on your responses you are looking for a relaxing, maybe romantic, getaway to somewhere private where you can truly enjoy the experience.",
    "Huttenhof is a beautiful, modern hotel in Bavaria. It is perfect for a secluded retreat where wellness is at the forefront. There are several pools, as well as a large spa and restaurants with world-class chefs.",
    "Press the button to see its website, as well as those of some other great German hotels :)",
  ]
};


var score = {
  Tropical_Islands: 0,
  Kempinski: 0,
  Schlosshotel: 0,
  Huttenhof: 0
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
    
    var highestScore = score["Tropical_Islands"];
    var highestcountry = "Tropical_Islands";
    if (highestScore < score["Schlosshotel"]) {
      highestScore = score["Schlosshotel"];
      highestcountry = "Schlosshotel";
    }
    if (highestScore < score["Kempinski"]) {
      highestScore = score["Kempinski"];
      highestcountry = "Kempinski";
    }
    if (highestScore < score["Huttenhof"]) {
      highestScore = score["Huttenhof"];
      highestcountry = "Huttenhof";
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


