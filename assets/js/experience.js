AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Microsoft Engage Mentee",
    cardImage: "assets/images/experience-page/microsoft.png",
    place: "Microsoft",
    time: "(June 2021 - July 2021)",
    desp: "<li>Worked on agile and scrum based methodology where tasks were allocated in sprints and weekly reviews were conducted</li> <li>Made changes in the current progressive web app of MS Teams Clone and integrated new features. </li> <li>SocketIO, NodeJS , HTML, CSS, JS, EJS were used in developing the project</li>",
  },
  {
    title: "Web Developer",
    cardImage: "assets/images/experience-page/thingq.PNG",
    place: "Cisco ThingQBator",
    time: "(October - November, 2021)",
    desp: "<li>Developed user interfaces with modern JavaScript frameworks, HTML5 and CSS3 for a video chat application.</li><li>Studied basic project requirements with assigned technical lead and planned development strategies.</li><li>Troubleshot and debugged code ensuring compatibility with devices, browsers, and operating systems.</li><li>Studied user requirements and implemented requirements into solutions.</li>",
  },

];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards



const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Hackathon Section


const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Google Developer Students Club",
    subtitle: "ML Hackathon",
    image: "assets/images/experience-page/gdsc.png",
    desp: "A Machine Learning Hackathon organized by GDSC Amrita.",
    Githublink: "https://drive.google.com/file/d/1OPmgbJ6c5I4E42M0JcIR1s4T4o-1rNLH/view?usp=sharing",
  },
  {
    title: "Hackon 2.0",
    subtitle: "HackerRank Global Diversity Hackathon",
    image: "assets/images/experience-page/hackon.png",
    desp: "The second edition of HackOn Hackathon which  focused on ways to foster innovation while raising awareness on mental health and diversity.",
    Githublink: "https://hackoncertificates.s3.ap-south-1.amazonaws.com/hackon/certificates/Mahesh+Venkateswaran+Iyer.jpg",
  },
  
  

];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, Githublink}) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
           
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <div class="blog-slider__text"><a href=" ${Githublink}" target ="_blank" color="black"> View</a></div>
          
          
        </div>
        
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
