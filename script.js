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
  const speakers = document.querySelectorAll('.more');

  moreBtn.addEventListener('click', () => {
    speakers.forEach((speaker) => {
      speaker.style.display = 'flex';
    });
    moreBtn.style.display = 'none';
  });
});

// dynamic page

const speaker = document.querySelector('.speakers-parent');

function speak() {
  speaker.innerHTML = `<div class="speakers">
    <img class="speaker-pic" src="resources/images/elon.jpeg" alt="" />
    <img class="tile" src="resources/images/bw_tile.PNG" alt="" />
    <div class="speakers-child">
      <h2>Elon Musk</h2>
      <h4>Chief Executive Officer at SpaceX and Tesla</h4>
      <div class="underline2"></div>
      <p>
        Elon Musk is a billionaire entrepreneur and engineer. He is the CEO
        of Tesla, SpaceX, Neuralink and The Boring Company. He's known for
        ambitious plans to revolutionize transportation, space travel, and
        energy.
      </p>
    </div>
  </div>
  <div class="speakers more">
    <img class="speaker-pic" src="resources/images/anne.jpg" alt="" />
    <img class="tile" src="resources/images/bw_tile.PNG" alt="" />
    <div class="speakers-child">
      <h2>Anne Wojcicki</h2>
      <h4>Co-founder and CEO, 23andMe</h4>
      <div class="underline2"></div>
      <p>
      Anne Wojcicki is an American entrepreneur and the co-founder and CEO of 23andMe, a personal genomics and biotechnology company. She is known for her innovative approach to personal health and wellness through genetic testing and analysis. She is also known for her philanthropic efforts, including investments in education and public health initiatives
      </p>
    </div>
  </div>
  <div class="speakers more">
    <img class="speaker-pic" src="resources/images/melanie.webp" alt="" />
    <img class="tile" src="resources/images/bw_tile.PNG" alt="" />
    <div class="speakers-child">
      <h2>Melanie Perkins</h2>
      <h4>Co-founder and CEO, Canva</h4>
      <div class="underline2"></div>
      <p>
      Melanie Perkins is an Australian entrepreneur and the co-founder and CEO of Canva, a graphic design platform. She co-founded the company in 2013 and has overseen its rapid growth into a publicly traded company valued at over $15 billion. Perkins is known for her leadership in the technology and design industries and her passion for making design accessible and affordable for everyone.
      </p>
    </div>
  </div>
  <div class="speakers more">
    <img class="speaker-pic" src="resources/images/mark.jpg" alt="" />
    <img class="tile" src="resources/images/bw_tile.PNG" alt="" />
    <div class="speakers-child">
      <h2>Mark Zuckerberg
      </h2>
      <h4>Chief Executive Officer, Meta Technologies</h4>
      <div class="underline2"></div>
      <p>
      Mark Zuckerberg is an American technology entrepreneur and philanthropist. He is the co-founder and CEO of Facebook, the world's largest social network. He is also a co-founder of the Chan Zuckerberg Initiative, a philanthropic organization focused on advancing human potential.
      </p>
    </div>
  </div>
  <div class="speakers more">
    <img class="speaker-pic" src="resources/images/daniel.webp" alt="" />
    <img class="tile" src="resources/images/bw_tile.PNG" alt="" />
    <div class="speakers-child">
      <h2>Daniel Ek</h2>
      <h4>Chief Executive Officer, Spotify</h4>
      <div class="underline2"></div>
      <p>
      Daniel Ek is a Swedish entrepreneur and the CEO of Spotify, the world's largest music streaming service. He co-founded the company in 2006 with Martin Lorentzon and has overseen its growth into a publicly traded company with over 345 million users worldwide.
      </p>
    </div>
  </div>
  <div class="speakers more">
    <img class="speaker-pic" src="resources/images/larry.jpg" alt="" />
    <img class="tile" src="resources/images/bw_tile.PNG" alt="" />
    <div class="speakers-child">
      <h2>Larry Page</h2>
      <h4>Founder, Google and Alphabet Inc.</h4>
      <div class="underline2"></div>
      <p>
      Larry Page is a tech entrepreneur and computer scientist. Co-founded Google, served as CEO, now CEO of Alphabet. Pioneered search engine technology and drives innovation, sustainability.
      </p>
    </div>
  </div>
`;
}

speak();
