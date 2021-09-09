const body = document.querySelector('body');
const openMenu = document.getElementById('open_menu');
const closeMenu = document.getElementById('mobile_menu_close');
const mobileMenu = document.getElementById('mobile_menu');
const speakersSection = document.querySelector('.speakers');
const mainProgramSection = document.querySelector('.main_program');
const speakersFooter = document.getElementById('speakers_footer');
const logoSection = document.getElementById('blured');

// Event Listeners for closing and opening the menu
openMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
  body.style.overflow = 'hidden';
  mainProgramSection.style.filter = 'blur(10px)';
  speakersFooter.style.filter = 'blur(10px)';
  logoSection.style.filter = 'blur(10px)';
});

closeMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  body.style.overflow = 'scroll';
  mainProgramSection.style.filter = 'blur(0px)';
  speakersFooter.style.filter = 'blur(0px)';
  logoSection.style.filter = 'blur(0px)';
});

// Dynamically generating speakers list

const speakers = [
  {
    name: 'Richard Stallman',
    occupation: 'American free software movement activist and GNU founder',
    talk: 'Richard Stallman doesn\'t like bloatware',
    imageUrl: 'img/richard_stallman1.png',
  },
  {
    name: 'Linus Torvalds',
    occupation: 'Creator of Linux OS',
    talk: 'Linus doesn\'t like CPP',
    imageUrl: 'img/linus1.png',
  },
  {
    name: 'Dennis Ritchie',
    occupation: 'Computer scientist and creator of C language',
    talk: 'We resurrected Mr Dennis from his grave for this event',
    imageUrl: 'img/ritchie1.png',
  },
];
// Loop through speakers and fill the section in mobile version
let htmlDocument = '';

speakers.forEach((item) => {
  htmlDocument += `<div class="speaker flex">
  <div class="speaker_pics"><img class="speaker_pic" src="${item.imageUrl}"></div>
  <div class="speaker_text">
      <p class="speaker_name">${item.name}</p>
      <p class="speaker_who orange">${item.occupation}</p>
      <div class="border_bottom"></div>
      <p class="speaker_what">${item.talk}</p>
  </div>
</div>`;
});

speakersSection.innerHTML = htmlDocument;

// Loop through speakers and fill the section in desktop version
const desktopSpeakers = [
  {
    name: 'Richard Stallman',
    occupation: 'American free software movement activist and GNU founder',
    talk: 'Richard Stallman doesn\'t like bloatware',
    imageUrl: 'img/speaker1.png',
    speaker: 'speaker1',
    margin: ['left_margin', 'right_margin'],
  },
  {
    name: 'Linus Torvalds',
    occupation: 'Creator of Linux OS',
    talk: 'Linus doesn\'t like CPP',
    imageUrl: 'img/speaker2.png',
    speaker: 'speaker2',
    margin: ['left_margin', 'right_margin'],
  },
  {
    name: 'Dennis Ritchie',
    occupation: 'Computer scientist and creator of C language',
    talk: 'We resurrected Mr Dennis from his grave for this event',
    imageUrl: 'img/speaker3.png',
    speaker: 'speaker3',
    margin: ['left_margin', 'right_margin'],
  },
  {
    name: 'Richard Stallman',
    occupation: 'American free software movement activist and GNU founder',
    talk: 'Richard Stallman doesn\'t like bloatware',
    imageUrl: 'img/speaker4.png',
    speaker: 'speaker4',
    margin: ['left_margin', 'right_margin'],
  },
  {
    name: 'Richard Stallman',
    occupation: 'American free software movement activist and GNU founder',
    talk: 'Richard Stallman doesn\'t like bloatware',
    imageUrl: 'img/speaker5.png',
    speaker: 'speaker5',
    margin: ['left_margin', 'right_margin'],
  },
  {
    name: 'Richard Stallman',
    occupation: 'American free software movement activist and GNU founder',
    talk: 'Richard Stallman doesn\'t like bloatware',
    imageUrl: 'img/speaker6.png',
    speaker: 'speaker6',
    margin: ['left_margin', 'right_margin'],
  },
];

let htmlDocumentDesktop = '';

desktopSpeakers.forEach((item) => {
  htmlDocumentDesktop += `<div class="speaker flex ${item.speaker} ${item.margin[0]}">
    <div class="speaker_pics"><img class="speaker_pic" src="${item.imageUrl}"></div>
    <div class="speaker_text">
        <p class="speaker_name">${item.name}</p>
        <p class="speaker_who orange">${item.occupation}</p>
        <div class="border_bottom"></div>
        <p class="speaker_what">${item.talk}</p>
    </div>
</div>`;
});

const grid = document.querySelector('.grid');
grid.innerHTML = htmlDocumentDesktop;