/* =============================================
   TastyAdda — script.js
   ============================================= */

/* ─────────────────────────────────────────────
   1. NAVBAR SCROLL EFFECT
───────────────────────────────────────────── */
const navbar = document.getElementById('mainNav');
const hamburgerIcon = document.getElementById('hamburgerIcon');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navbarCollapse = document.getElementById('navbarNav');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 0);
});

// Hamburger icon toggle
hamburgerBtn.addEventListener('click', () => {
  const isOpen = navbarCollapse.classList.contains('show');
  hamburgerIcon.className = isOpen ? 'fa-solid fa-bars' : 'fa-solid fa-xmark';
});

// Close navbar on link click (mobile)
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (navbarCollapse.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse) bsCollapse.hide();
      hamburgerIcon.className = 'fa-solid fa-bars';
    }
  });
});

/* ─────────────────────────────────────────────
   2. HERO VIDEO + CAPTION SLIDER
───────────────────────────────────────────── */
const heroSlides = document.querySelectorAll('.hero-slide');
const heroCaptions = document.querySelectorAll('.hero-caption');
const heroDots = document.querySelectorAll('.hero-dot');
let currentHero = 0;
let heroTimer = null;

function goToHeroSlide(index) {
  heroSlides[currentHero].classList.remove('active');
  heroCaptions[currentHero].classList.remove('active');
  heroDots[currentHero].classList.remove('active');

  currentHero = (index + heroSlides.length) % heroSlides.length;

  heroSlides[currentHero].classList.add('active');
  heroCaptions[currentHero].classList.add('active');
  heroDots[currentHero].classList.add('active');
}

function startHeroSlider() {
  heroTimer = setInterval(() => {
    goToHeroSlide(currentHero + 1);
  }, 5000);
}

heroDots.forEach(dot => {
  dot.addEventListener('click', () => {
    clearInterval(heroTimer);
    goToHeroSlide(parseInt(dot.dataset.index));
    startHeroSlider();
  });
});

startHeroSlider();

/* ─────────────────────────────────────────────
   3. MENU CARD — VIDEO HOVER
───────────────────────────────────────────── */
document.querySelectorAll('.menu-card').forEach(card => {
  const video = card.querySelector('video');
  if (!video) return;
  card.addEventListener('mouseenter', () => {
    video.play().catch(() => {});
  });
  card.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});

/* ─────────────────────────────────────────────
   4. MENU MODAL
───────────────────────────────────────────── */
const menuData = {
  veg: {
    title: '🥗 Veg Menu',
    items: [
      { name: 'Paneer Tikka', desc: 'Marinated cottage cheese grilled to perfection', price: '₹149', image: './images/menu/paneer_tikka.jpg' },
      { name: 'Dal Makhani', desc: 'Slow-cooked black lentils in a rich creamy gravy', price: '₹129', image: './images/menu/dalmakhani.jpg' },
      { name: 'Aloo Paratha', desc: 'Crispy flatbread stuffed with spiced potatoes', price: '₹89', image: './images/menu/aloopratha.jpg' },
      { name: 'Veg Biryani', desc: 'Fragrant basmati rice layered with mixed vegetables', price: '₹169', image: './images/menu/vegbiryani.jpg' },
      { name: 'Palak Paneer', desc: 'Creamy spinach curry with soft cottage cheese', price: '₹159', image: './images/menu/palakpaneer.jpg' },
      { name: 'Chole Bhature', desc: 'Fluffy deep-fried bread with spiced chickpeas', price: '₹119', image: './images/menu/cholebhature.jpg' },
    ]
  },
  nonveg: {
    title: '🍗 Non-Veg Menu',
    items: [
      { name: 'Chicken Biryani', desc: 'Aromatic basmati with tender chicken pieces', price: '₹219',  image: './images/menu/chickencurry.jpg' },
      { name: 'Butter Chicken', desc: 'Slow-cooked chicken in a creamy tomato gravy', price: '₹199',  image: './images/menu/butterchicken.jpg' },
      { name: 'Chicken Tikka', desc: 'Smoky grilled chicken in aromatic spices', price: '₹179',  image: './images/menu/chickentikka.jpg' },
      { name: 'Mutton Curry', desc: 'Rich and spicy mutton in traditional masala', price: '₹269',  image: './images/menu/muttoncurry.jpg' },
      { name: 'Fish Fry', desc: 'Crispy golden fish fillets with mint chutney', price: '₹189',  image: './images/menu/fishfry.jpg' },
      { name: 'Egg Curry', desc: 'Boiled eggs in a tangy onion-tomato gravy', price: '₹129',  image: './images/menu/eggcurry.jpg' },
    ]
  },
  bread: {
    title: '🍞 Bread Menu',
    items: [
      { name: 'Garlic Naan', desc: 'Soft leavened bread brushed with garlic butter', price: '₹49',  image: './images/menu/garlicnan.jpg' },
      { name: 'Tandoori Roti', desc: 'Whole wheat flatbread baked in tandoor oven', price: '₹29',  image: './images/menu/tandooriroti.jpg' },
      { name: 'Stuffed Paratha', desc: 'Crispy flatbread with a savory stuffing of your choice', price: '₹79',  image: './images/menu/stuffedparatha.jpg' },
      { name: 'Puri', desc: 'Deep-fried fluffy puffed bread, golden and crisp', price: '₹39',  image: './images/menu/poori.jpg' },
      { name: 'Missi Roti', desc: 'Spiced gram flour flatbread with herbs', price: '₹45',  image: './images/menu/missiroti.jpg' },
      { name: 'Laccha Paratha', desc: 'Layered flaky flatbread cooked in butter', price: '₹59',  image: './images/menu/lacchaparatha.jpg' },
    ]
  },
  dessert: {
    title: '🍰 Dessert Menu',
    items: [
      { name: 'Gulab Jamun', desc: 'Soft milk-solid dumplings soaked in rose syrup', price: '₹69', image: './images/menu/gulabjamun.jpg' },
      { name: 'Rasmalai', desc: 'Soft chhena patties in saffron-flavored cream', price: '₹89', image: './images/menu/rasmalai.jpg' },
      { name: 'Chocolate Cake', desc: 'Moist dark chocolate sponge with ganache frosting', price: '₹149', image: './images/menu/chocolatecake.jpg' },
      { name: 'Kulfi', desc: 'Traditional dense Indian ice cream in pistachio flavor', price: '₹79', image: './images/menu/kulfi.jpg' },
      { name: 'Jalebi', desc: 'Crispy spirals soaked in warm sugar syrup', price: '₹59', image: './images/menu/jalebi.jpg' },
      { name: 'Gajar Halwa', desc: 'Slow-cooked carrot pudding with cardamom and nuts', price: '₹99', image: './images/menu/gajarhalwa.jpg' },
    ]
  },
  drinks: {
    title: '🥤 Drinks Menu',
    items: [
      { name: 'Mango Lassi', desc: 'Thick chilled yogurt blended with Alphonso mango', price: '₹89', image: './images/menu/mango.jpg' },
      { name: 'Masala Chai', desc: 'Spiced milk tea with ginger, cardamom and cloves', price: '₹39', image: './images/menu/chai.jpg' },
      { name: 'Fresh Lime Soda', desc: 'Chilled fresh lime with sparkling water and mint', price: '₹49', image: './images/menu/limesoda.jpg' },
      { name: 'Cold Coffee', desc: 'Blended iced coffee with milk and sugar', price: '₹79', image: './images/menu/coldcoffee.jpg' },
      { name: 'Strawberry Shake', desc: 'Fresh strawberry milkshake with ice cream', price: '₹99', image: './images/menu/stawberryshake.jpg' },
      { name: 'Tender Coconut', desc: 'Fresh tender coconut water, chilled and natural', price: '₹59', image: './images/menu/coconut.jpg' },
    ]
  }
};

function openMenuModal(category) {
  const data = menuData[category];
  if (!data) return;

  document.getElementById('menuModalTitle').textContent = data.title;
  const grid = document.getElementById('menuItemsGrid');
  grid.innerHTML = '';

  data.items.forEach(item => {
    const col = document.createElement('div');
    col.className = 'col-md-4 col-6';
    col.innerHTML = `
      <div class="menu-item-card">
        <img src="${item.image}" alt="${item.name}"/>
        <div class="menu-item-info">
          <h6>${item.name}</h6>
          <p class="item-desc">${item.desc}</p>
          <span class="item-price">${item.price}</span>
          <button class="btn btn-sm btn-order w-100">Add to Cart</button>
        </div>
      </div>
    `;
    grid.appendChild(col);
  });

  const modal = new bootstrap.Modal(document.getElementById('menuModal'));
  modal.show();
}

// Also open modal on card click
document.querySelectorAll('.menu-card').forEach(card => {
  card.addEventListener('click', (e) => {
    if (!e.target.closest('.btn-order')) {
      openMenuModal(card.dataset.category);
    }
  });
});

/* ─────────────────────────────────────────────
   5. REVIEWS SLIDER
───────────────────────────────────────────── */
const reviewCards = document.querySelectorAll('.review-card');
const reviewDots = document.querySelectorAll('.review-dot');
const reviewPrev = document.getElementById('reviewPrev');
const reviewNext = document.getElementById('reviewNext');
let currentReview = 0;
let reviewTimer = null;

function goToReview(index) {
  reviewCards[currentReview].classList.remove('active');
  reviewDots[currentReview].classList.remove('active');

  currentReview = (index + reviewCards.length) % reviewCards.length;

  reviewCards[currentReview].classList.add('active');
  reviewDots[currentReview].classList.add('active');
}

function startReviewSlider() {
  reviewTimer = setInterval(() => goToReview(currentReview + 1), 4000);
}

reviewNext.addEventListener('click', () => {
  clearInterval(reviewTimer);
  goToReview(currentReview + 1);
  startReviewSlider();
});

reviewPrev.addEventListener('click', () => {
  clearInterval(reviewTimer);
  goToReview(currentReview - 1);
  startReviewSlider();
});

reviewDots.forEach(dot => {
  dot.addEventListener('click', () => {
    clearInterval(reviewTimer);
    goToReview(parseInt(dot.dataset.index));
    startReviewSlider();
  });
});

startReviewSlider();

/* ─────────────────────────────────────────────
   6. CONTACT FORM VALIDATION
───────────────────────────────────────────── */
document.getElementById('submitContact').addEventListener('click', () => {
  const name = document.getElementById('contactName');
  const phone = document.getElementById('contactPhone');
  const address = document.getElementById('contactAddress');
  let valid = true;

  [name, phone, address].forEach(field => {
    if (!field.value.trim()) {
      field.classList.add('is-invalid');
      valid = false;
    } else {
      field.classList.remove('is-invalid');
    }
  });

  if (valid) {
    document.getElementById('formSuccess').classList.remove('d-none');
    name.value = ''; phone.value = ''; address.value = '';
    document.getElementById('contactEmail').value = '';
    document.getElementById('contactMessage').value = '';
    setTimeout(() => {
      document.getElementById('formSuccess').classList.add('d-none');
    }, 4000);
  }
});

// Remove invalid class on input
['contactName', 'contactPhone', 'contactAddress'].forEach(id => {
  document.getElementById(id).addEventListener('input', function () {
    if (this.value.trim()) this.classList.remove('is-invalid');
  });
});

/* ─────────────────────────────────────────────
   7. SMOOTH SCROLL for nav links
───────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 70;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ─────────────────────────────────────────────
   8. GALLERY LIGHTBOX (simple)
───────────────────────────────────────────── */
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    if (!img) return;

    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed; inset: 0; background: rgba(0,0,0,0.92);
      z-index: 9999; display: flex; align-items: center; justify-content: center;
      cursor: zoom-out;
    `;

    const pic = document.createElement('img');
    pic.src = img.src;
    pic.alt = img.alt;
    pic.style.cssText = `
      max-width: 90vw; max-height: 90vh; border-radius: 12px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.6);
    `;

    overlay.appendChild(pic);
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    overlay.addEventListener('click', () => {
      document.body.removeChild(overlay);
      document.body.style.overflow = '';
    });
  });
});





