// mobile menu
const navMobile = document.querySelector('.nav-mobile');
const menu = document.querySelector('.fa-bars');
const cancel = document.querySelector('.fa-xmark');

menu.addEventListener('click', () => {
  navMobile.style.display = 'block';
});

cancel.addEventListener('click', () => {
  navMobile.style.display = 'none';
});

// more button
document.addEventListener('DOMContentLoaded', () => {
  const moreBtn = document.querySelector('.btn2');
  // const speakers = document.querySelectorAll('.more');
  const speakers = document.querySelectorAll('.speakers-parent .speaker:nth-child(n+2)');

  moreBtn.addEventListener('click', () => {
    speakers.forEach((speaker) => {
      speaker.style.display = 'flex';
    });
    moreBtn.style.display = 'none';
  });
});

// dynamic page

const speakers = [
  {
    name: 'Elon Musk',
    image: 'resources/images/elon.jpeg',
    description: 'Chief Executive Officer at SpaceX and Tesla',
    information: `Elon Musk is a billionaire entrepreneur and engineer.
                  He is the CEO of Tesla, SpaceX, Neuralink and The Boring Company.
                  He's known for ambitious plans to revolutionize transportation,
                  space travel, and energy.`,
  },
  {
    name: 'Anne Wojcicki',
    image: 'resources/images/anne.jpg',
    description: 'Co-founder and CEO, 23andMe',
    information: `Anne Wojcicki is an American entrepreneur and the co-founder and CEO of 23andMe,
                  a personal genomics and biotechnology company. She is known for her innovative
                  approach to personal health and wellness through genetic testing and analysis.
                  She is also known for her philanthropic efforts, including investments in
                  education and public health initiatives.`,
  },
  {
    name: 'Melanie Perkins',
    image: 'resources/images/melanie.webp',
    description: 'Co-founder and CEO, Canva',
    information: `Melanie Perkins is an Australian entrepreneur and the co-founder and
                  CEO of Canva, a graphic design platform. She co-founded the company
                  in 2013 and has overseen its rapid growth into a publicly traded company

                  valued at over $15 billion. Perkins is known for her leadership in the
                  technology and design industries and her passion for making design
                  accessible and affordable for everyone.`,
  },
  {
    name: 'Mark Zuckerberg',
    image: 'resources/images/mark.jpg',
    description: 'Chief Executive Officer, Meta Technologies',
    information: `Mark Zuckerberg is an American technology entrepreneur and philanthropist.
                  He is the co-founder and CEO of Facebook, the world's largest social network.
                  He is also a co-founder of the Chan Zuckerberg Initiative, a philanthropic
                  organization focused on advancing human potential.`,
  },
  {
    name: 'Daniel Ek',
    image: 'resources/images/daniel.webp',
    description: 'Chief Executive Officer, Spotify',
    information: `Daniel Ek is a Swedish entrepreneur and the CEO of Spotify,
                  the world's largest music streaming service. He co-founded the company in 2006
                  with Martin Lorentzon and has overseen its growth into a publicly traded company
                  with over 345 million users worldwide.`,
  },
  {
    name: 'Larry Page',
    image: 'resources/images/larry.jpg',
    description: 'Founder, Google and Alphabet Inc.',
    information: `Larry Page is a tech entrepreneur and computer scientist.
                  Co-founded Google, served as CEO, now CEO of Alphabet.
                  Pioneered search engine technology and drives innovation, sustainability.`,
  },
];

const speakersDiv = document.querySelector('.speakers-parent');

let speakersDivContent = '';
speakers.forEach((speaker) => {
  speakersDivContent += `
  
  <div class="speaker">
    <div class="speaker-image-div">
      <div class="speaker-image">
        <img alt="" src="resources/images/bw_tile.PNG" class="tile"/>
        <img alt="" src=${speaker.image} class="speaker-pic" />
      </div>
    </div>
    <div class= "speakers-child">
      <h3>${speaker.name}</h3>
      <p class="speaker-description">${speaker.description}</p>
      <div class="underline2"></div>
      <p class="speaker-information">${speaker.information}</p>
    </div>
  </div>
  `;
});

speakersDiv.innerHTML = speakersDivContent;