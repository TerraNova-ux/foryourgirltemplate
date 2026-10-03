const assets = {
  background: "Vintage Stitched Valentine Scrapbook Page.png",
  gift: "Watercolour Floral Gift Box with Golden Bow.png",
  openGift: "Watercolour Floral Gift Box with Bow (2).png",
  bouquet: "tulip bouquet sticker.png",
  chocolate: "Watercolour Chocolate Gift Wrapper.png",
  envelope: "Open_Watercolour_Envelope_with_Golden_Bow-removebg-preview.png",
  gingham: "Gingham Envelope with Floral Ribbon Bow-fotor-bg-remover-20261001201030.png",
  yes: "Hand-Drawn_Cream__Yes__Button-removebg-preview.png",
  no: "Vintage_Floral_No_Button-removebg-preview.png",
  sayYes: "Vintage_Say_Yes_Heart_Badge-removebg-preview.png",
  arrow: "Whimsical_Vintage_Floral_Arrow-removebg-preview.png",
  kitten: "Blushing Kitten with Floating Hearts.png",
  questionKitten: "1098596902885903787-fotor-bg-remover-20261001201848.png",
  crying: "download (3)-fotor-bg-remover-20261001202822.png",
  couple: "452752568814892371-removebg-preview.png",
};

const app = document.querySelector("#app");
const parents = { 2: 1, 3: 2, 4: 3, 5: 3, 6: 5, 7: 5, 8: 5, 9: 8 };

function imageButton(src, alt, destination, className = "") {
  return `<button class="art-button ${className}" type="button" data-go="${destination}" aria-label="${alt}"><img src="${src}" alt="" /></button>`;
}

function backButton() {
  return `<button class="back-button" type="button" data-back aria-label="Go back"><img src="${assets.arrow}" alt="" /></button>`;
}

function pageMarkup(page) {
  switch (page) {
    case 1:
      return `<section class="page page-one"><div class="heart-scatter" aria-hidden="true"><span>♥</span><span>♥</span><span>♥</span><span>♥</span></div><div class="page-content"><h1 class="script-title">I made this for you</h1>${imageButton(assets.gift, "Open your gift", 2, "closed-gift")}<p class="script-copy">Click to open</p></div><img class="kitten-side" src="${assets.kitten}" alt="A blushing kitten surrounded by hearts" /></section>`;
    case 2:
      return `<section class="page page-two"><div class="page-content">${imageButton(assets.openGift, "Open the gift again", 3, "open-gift")}<p class="script-copy">Click again my love</p></div>${backButton()}</section>`;
    case 3:
      return `<section class="page page-three"><div class="page-content"><img class="kitty-question" src="${assets.questionKitten}" alt="A kitten offering pink tulips" /><h1 class="script-title">My love do you love me?</h1><span class="pink-heart" aria-hidden="true">♥</span><div class="yes-no-row">${imageButton(assets.yes, "Yes", 5)}${imageButton(assets.no, "No", 4)}</div></div>${backButton()}</section>`;
    case 4:
      return `<section class="page page-four"><div class="page-content"><img class="crying-art" src="${assets.crying}" alt="A sad cartoon character" /><p class="prompt">why did you say no it hurt so bad</p>${imageButton(assets.sayYes, "Say yes", 5)}</div>${backButton()}</section>`;
    case 5:
      return `<section class="page page-five"><div class="page-content"><h1 class="page-title">This is for youuuu my girl</h1><div class="gift-row">${imageButton(assets.bouquet, "Open the bouquet", 6, "gift-choice")}${imageButton(assets.chocolate, "Open the chocolate", 7, "gift-choice chocolate-choice")}${imageButton(assets.gingham, "Open the letter", 8, "gift-choice letter-choice")}</div><p class="prompt">click one by one on each</p></div><img class="couple-art" src="${assets.couple}" alt="A sweet couple illustration" />${backButton()}</section>`;
    case 6:
      return `<section class="page page-six"><div class="floating-hearts" aria-hidden="true"><span>♥</span><span>♥</span><span>♥</span><span>♥</span></div><div class="page-content"><img class="bouquet-art" src="${assets.bouquet}" alt="A bouquet of pink tulips" /><div class="script-copy"><p>These beautiful flowers for my beautiful girl</p><p>You deserve more than this.</p><p>I promise to give it all to you</p><p>I love you Sumiko</p></div></div>${backButton()}</section>`;
    case 7:
      return `<section class="page page-seven"><div class="floating-hearts" aria-hidden="true"><span>♥</span><span>♥</span><span>♥</span><span>♥</span></div><div class="page-content"><img class="chocolate-art" src="${assets.chocolate}" alt="A wrapped chocolate gift" /><h1 class="page-title">YOU ARE SWEETER THAN A CHOCOLATE :3</h1><div class="script-copy"><p>My love, My life, My beautiful, My Sweetheart</p><p>You are the sweetest and cutest girl I've ever seen</p><p>no one will ever compare to you to our love.</p><p>you are the best thing that has happened to me</p><p>Te Amo</p></div></div>${backButton()}</section>`;
    case 8:
      return `<section class="page page-eight"><div class="page-content"><button class="art-button envelope-wrap" type="button" data-go="9" aria-label="Open the letter"><img class="envelope-art" src="${assets.envelope}" alt="Watercolor envelope with a golden bow" /></button></div>${backButton()}</section>`;
    case 9:
      return `<section class="page page-nine"><article class="letter-paper"><h1>This is for you<br />my love</h1><p>My love, My pretty one, Mi Hermosa Reina, Mi mamacita, Mi princesa, Mi señorita, mi cariño, Mi amorcito, Mi bebe, mi vida, mi niña preciosa.</p><p>You are my girlfriend, my wife, my everything. I love spending my every moment with you.</p><p>I want to see you happy, give you all my love and my commitment of always being yours, your sweet talks, the way you annoy me, everything is cute about you, even your presence is cute, and when I say you are mine and only mine I really mean it fully and always will.</p><p>Because you are mine and only mine, I wish I could give you a hug and lots of kisses to tell you I will always love you and support you. I know it's been difficult for both of us but we've always stayed together, forgive each other and always loved each other.</p><p>It's almost 6 months and I've loved spending my every day with you. I hope you heal from the things that you're going through. I wish I was there for you to tell you it will soon be fine. Please take care of yourself. I only want you and only you.</p><p class="letter-signoff">Te amo Mi Sumiko<br />I love you 3000 (more than it and more than my life itself)</p></article>${backButton()}</section>`;
    default:
      return "";
  }
}

function currentPage() {
  const match = window.location.hash.match(/^#page-(\d)$/);
  return match ? Number(match[1]) : 1;
}

function render() {
  const page = currentPage();
  app.innerHTML = pageMarkup(page) || pageMarkup(1);
  document.title = `A Little Gift for You | Page ${page}`;
}

function navigate(page) {
  history.pushState({ loveSite: true, page }, "", `#page-${page}`);
  render();
}

if (!/^#page-[1-9]$/.test(window.location.hash)) {
  history.replaceState({ loveSite: true, page: 1, depth: 0 }, "", "#page-1");
} else if (!history.state?.loveSite) {
  history.replaceState({ loveSite: true, page: currentPage(), depth: 0 }, "", window.location.hash);
}

document.addEventListener("click", (event) => {
  const destination = event.target.closest("[data-go]");
  if (destination) {
    navigate(Number(destination.dataset.go));
    return;
  }

  if (event.target.closest("[data-back]")) {
    if (history.state?.loveSite && history.state.depth > 0) {
      history.back();
    } else {
      navigate(parents[currentPage()] || 1);
    }
  }
});

window.addEventListener("popstate", render);
render();