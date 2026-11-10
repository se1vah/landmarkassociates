/**
 * Landmark Associates - Official Web Application Logic
 * High-performance, fully responsive, interactive client features
 */

// Data Models
const PRODUCTS = [
  {
    id: "col-box-9x9",
    name: "Column Box",
    dimension: "9' × 9'",
    category: "column-boxes",
    categoryName: "Column Boxes",
    image: "images/products/material_column_box.jpg",
    description: "Heavy-duty steel column box shuttering mould designed for casting reinforced concrete square & rectangular columns. Fabricated with rigid structural angle framing and heavy-gauge sheet.",
    specs: {
      gauge: "Heavy MS Plate",
      application: "Pillar & Column Concrete Casting",
      durability: "High Load Bearing",
      finish: "Anti-Corrosive Primer Coated"
    }
  },
  {
    id: "side-sheet-7x1-6",
    name: "Side Sheet",
    dimension: "7' × 1'6\"",
    category: "sheets",
    categoryName: "Centering & Side Sheets",
    image: "images/products/material_centering_sheet.jpg",
    description: "Extended length side centering sheet with reinforced side flanging, ideal for beam sides, wall forms, and slab perimeter shuttering.",
    specs: {
      gauge: "12-14 Gauge MS Steel",
      application: "Beam Sides & Slab Edges",
      durability: "Precision Pressed Edges",
      finish: "Rust Resistant Coated"
    }
  },
  {
    id: "sheet-5x1-6",
    name: "Centering Sheet",
    dimension: "5' × 1'6\"",
    category: "sheets",
    categoryName: "Centering & Side Sheets",
    image: "images/products/material_centering_sheet.jpg",
    description: "Standard 5ft centering plate widely utilized across residential and commercial slab casting. Provides smooth concrete ceiling finish.",
    specs: {
      gauge: "Heavy Gauge Steel Sheet",
      application: "Floor Slab Formwork",
      durability: "Stiffened Channel Backing",
      finish: "Industrial Grade"
    }
  },
  {
    id: "side-sheet-4x1-6",
    name: "Side Sheet",
    dimension: "4' × 1'6\"",
    category: "sheets",
    categoryName: "Centering & Side Sheets",
    image: "images/products/material_centering_sheet.jpg",
    description: "Versatile medium side sheet for concrete beams, lintels, and slab border formwork, ensuring rigid alignment and zero slurry leakage.",
    specs: {
      gauge: "Precision Fabricated MS",
      application: "Beam & Lintel Sides",
      durability: "Repeatable High Cycles",
      finish: "Shop Primed"
    }
  },
  {
    id: "side-sheet-3x1-6",
    name: "Side Sheet",
    dimension: "3' × 1'6\"",
    category: "sheets",
    categoryName: "Centering & Side Sheets",
    image: "images/products/material_centering_sheet.jpg",
    description: "Compact side sheet engineered for tighter beam depths, drops, and intermediate concrete shuttering requirements.",
    specs: {
      gauge: "Heavy Gauge Steel",
      application: "Drop Beams & Steps",
      durability: "High Rigidity",
      finish: "Smooth Finish"
    }
  },
  {
    id: "adjustment-sheet",
    name: "Adjustment Sheet",
    dimension: "Standard Telescopic",
    category: "adjusters",
    categoryName: "Spans & Adjusters",
    image: "images/products/material_adjustment_sheet.jpg",
    description: "Telescopic sliding adjustment plate to bridge odd gap dimensions in slab formwork without timber cut-offs, ensuring seamless surface continuity.",
    specs: {
      gauge: "Formed Steel Plate",
      application: "Gap Sealing & Dimension Matching",
      durability: "Easy Sliding Fit",
      finish: "Protective Primer"
    }
  },
  {
    id: "sheet-3x1",
    name: "Centering Sheet",
    dimension: "3' × 1'",
    category: "sheets",
    categoryName: "Centering & Side Sheets",
    image: "images/products/material_centering_sheet.jpg",
    description: "Narrow-width steel centering plate for narrow corridor bays, duct openings, and precision slab infill sections.",
    specs: {
      gauge: "Mild Steel Sheet",
      application: "Narrow Bay Slab Centering",
      durability: "Reinforced Stiffeners",
      finish: "Anti-Rust Coated"
    }
  },
  {
    id: "sheet-3-9x2",
    name: "Centering Sheet",
    dimension: "3'9\" × 2'",
    category: "sheets",
    categoryName: "Centering & Side Sheets",
    image: "images/products/material_centering_sheet.jpg",
    description: "Wide modular centering sheet designed to cover larger floor slab surface areas rapidly with minimal joints.",
    specs: {
      gauge: "Commercial Grade MS",
      application: "Large Floor Areas",
      durability: "Welded Reinforcement",
      finish: "Long-Life Primer"
    }
  },
  {
    id: "jockey-3m",
    name: "Jockey (Steel Prop)",
    dimension: "3.0 Meter (Extended)",
    category: "props",
    categoryName: "Jockeys & Props",
    image: "images/products/material_jockey_prop.jpg",
    description: "High-capacity telescopic steel prop jack (3 Meter). Features hardened cast-iron screw collar, heavy pin, and top/bottom plates for high ceiling slab propping.",
    specs: {
      gauge: "Heavy ERW Steel Pipe",
      application: "Vertical Slab Support",
      durability: "High Axial Load Rating",
      finish: "Heavy Dip Enamel Coated"
    }
  },
  {
    id: "jockey-2-5m",
    name: "Jockey (Steel Prop)",
    dimension: "2.5 Meter (Extended)",
    category: "props",
    categoryName: "Jockeys & Props",
    image: "images/products/material_jockey_prop.jpg",
    description: "Medium-height adjustable steel prop for standard commercial and residential ceiling heights, with micro-adjustment thread collar.",
    specs: {
      gauge: "Heavy Structural Steel Pipe",
      application: "Slab & Beam Falsework",
      durability: "Precision Threaded",
      finish: "Industrial Coated"
    }
  },
  {
    id: "jockey-2m",
    name: "Jockey (Steel Prop)",
    dimension: "2.0 Meter (Extended)",
    category: "props",
    categoryName: "Jockeys & Props",
    image: "images/products/material_jockey_prop.jpg",
    description: "Compact 2-meter steel prop jack for lower basement levels, stilt floor supports, and intermediate beam re-propping.",
    specs: {
      gauge: "Rigid Pipe Sections",
      application: "Basement & Stilt Propping",
      durability: "High Stability",
      finish: "Corrosion Resistant"
    }
  },
  {
    id: "telescopic-span",
    name: "Telescopic Span",
    dimension: "Standard Telescopic",
    category: "adjusters",
    categoryName: "Spans & Adjusters",
    image: "images/products/material_telescopic_span.jpg",
    description: "Heavy-duty lattice steel telescopic centering span (beam runner). Supports centering sheets without intermediate ground props, leaving working floor free.",
    specs: {
      gauge: "Welded Steel Lattice Truss",
      application: "Slab Decking Support",
      durability: "Zero Sag Under Concrete Load",
      finish: "Heavy Enamel Coated"
    }
  },
  {
    id: "sheet-3x2",
    name: "Centering Sheet",
    dimension: "3' × 2'",
    category: "sheets",
    categoryName: "Centering & Side Sheets",
    image: "images/products/material_centering_sheet.jpg",
    description: "Popular standard 3ft × 2ft floor centering plate, versatile and lightweight for fast shuttering assembly and striking.",
    specs: {
      gauge: "Standard Shuttering Steel",
      application: "General Floor Slab Centering",
      durability: "Reinforced Stiffeners",
      finish: "Shop Primed"
    }
  }
];

const PROJECTS = [
  {
    id: "proj-gabion",
    title: "Hillside Embankment Gabion Wall Project",
    category: "gabion",
    categoryName: "Gabion Wall Works",
    location: "Tiruchirappalli Bypass & Hill Slopes",
    image: "images/projects/project_gabion_retaining_wall.jpg",
    desc: "Engineered multi-tier galvanized wire mesh gabion retaining wall system constructed for heavy slope stabilization, erosion control, and rainwater runoff management.",
    materials: ["Heavy Galvanized Gabion Mesh", "Graded Granite Boulders", "Geotextile Filter Fabric"],
    metrics: "450+ Linear Metres Completed"
  },
  {
    id: "proj-commercial",
    title: "Vasanth City Commercial Plaza",
    category: "commercial",
    categoryName: "Commercial Construction",
    location: "Karumandapam, Tiruchirappalli",
    image: "images/projects/project_commercial_complex.jpg",
    desc: "Turnkey structural construction of a 4-storey commercial shopping complex featuring reinforced concrete columns, open commercial floor plates, and contemporary facade.",
    materials: ["Column Boxes 9'x9'", "Centering Sheets 5'x1'6\"", "Telescopic Spans", "Jockeys 3.0m"],
    metrics: "32,000 Sq.Ft Built-Up Area"
  },
  {
    id: "proj-residential",
    title: "The Royal Orchard Luxury Villa",
    category: "residential",
    categoryName: "Residential Construction",
    location: "K.K. Nagar, Tiruchirappalli",
    image: "images/projects/project_luxury_residential.jpg",
    desc: "Architect-designed contemporary two-story residential residence built with premium structural finish, custom centering design, and landscape compound retaining walls.",
    materials: ["Standard Centering Sheets", "Beam Side Sheets", "Custom Centering Work"],
    metrics: "4,200 Sq.Ft Turnkey Construction"
  },
  {
    id: "proj-non-commercial",
    title: "Community Hall & Convention Centre",
    category: "non-commercial",
    categoryName: "Non-Commercial Construction",
    location: "Thiruverumbur, Tiruchirappalli",
    image: "images/projects/project_institutional_non_commercial.jpg",
    desc: "Large-span non-commercial public convention hall with high-ceiling structural beam framework, expansive entry portico, and durable concrete infrastructure.",
    materials: ["Heavy Jockeys 3.0m", "Telescopic Lattice Spans", "High-Volume Centering Plates"],
    metrics: "1,200 Seating Capacity Hall"
  },
  {
    id: "proj-material-supply",
    title: "Metro Heights Multi-Tower Shuttering Supply",
    category: "supply",
    categoryName: "Material Supply Projects",
    location: "Central Bus Stand Corridor, Trichy",
    image: "images/projects/project_material_supply_site.jpg",
    desc: "Comprehensive material rental and supply partnership delivering complete scaffolding, column moulds, and over 4,000 centering sheets on strict weekly casting schedules.",
    materials: ["4,500+ Centering Plates", "1,200+ Steel Props", "250+ Heavy Spans", "Column Boxes"],
    metrics: "10-Storey Twin Tower Project"
  }
];

// Quote Basket State
let quoteBasket = [];

// DOM Ready Handler
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderProducts(PRODUCTS);
  initProductFilters();
  initProductSearch();
  renderProjects(PROJECTS);
  initProjectFilters();
  initContactForm();
  initQuickQuoteForm();
  initBasketUI();
  initStatsCounter();
});

// Navbar Scroll & Mobile Menu
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu on click of any nav link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }
}

// Render Products Grid
function renderProducts(items) {
  const container = document.getElementById('products-grid');
  if (!container) return;

  if (items.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 50px 20px; background: #fff; border-radius: 12px; border: 1px dashed #cbd5e1;">
        <h3 style="font-size: 1.2rem; color: #0b1528; margin-bottom: 8px;">No matching materials found</h3>
        <p style="color: #64748b; font-size: 0.9rem;">Try selecting a different category or clearing your search keywords.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(product => {
    const waText = encodeURIComponent(
      `Hi Landmark Associates, I would like to enquire about availability and quote for: ${product.name} (Dimension: ${product.dimension}). Please share details.`
    );
    const waUrl = `https://wa.me/919944113226?text=${waText}`;

    return `
      <div class="material-card" data-category="${product.category}">
        <div class="material-img-wrap">
          <img src="${product.image}" alt="${product.name} ${product.dimension} - Landmark Associates Trichy" loading="lazy" onerror="this.src='images/hero-construction.jpg'">
          <span class="category-tag">${product.categoryName}</span>
          <span class="dimension-badge">${product.dimension}</span>
        </div>
        <div class="material-body">
          <h3 class="material-title">${product.name}</h3>
          <div class="material-dimension-label">Spec: ${product.dimension}</div>
          <p class="material-desc">${product.description}</p>
          
          <div class="material-specs-mini">
            <div class="mini-spec-item"><strong>Material:</strong> ${product.specs.gauge}</div>
            <div class="mini-spec-item"><strong>Use:</strong> ${product.specs.application}</div>
            <div class="mini-spec-item"><strong>Quality:</strong> ${product.specs.durability}</div>
            <div class="mini-spec-item"><strong>Finish:</strong> ${product.specs.finish}</div>
          </div>

          <div class="material-actions">
            <div class="material-action-row">
              <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm btn-block">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                Enquire Now
              </a>
              <button type="button" class="btn btn-navy btn-sm" onclick="addToQuoteBasket('${product.id}')" title="Add to Multi-Item Quote Request">
                <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 5v14m-7-7h14"/></svg>
                + Quote
              </button>
            </div>
            <button type="button" class="btn btn-outline-navy btn-sm" onclick="openProductQuoteModal('${product.id}')">
              Request Customized Quote
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Product Filtering
function initProductFilters() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const category = tab.dataset.filter;
      filterProducts();
    });
  });
}

function initProductSearch() {
  const searchInput = document.getElementById('product-search');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      filterProducts();
    });
  }
}

function filterProducts() {
  const activeTab = document.querySelector('.tab-btn.active');
  const category = activeTab ? activeTab.dataset.filter : 'all';
  const query = (document.getElementById('product-search')?.value || '').toLowerCase().trim();

  const filtered = PRODUCTS.filter(p => {
    const matchesCat = category === 'all' || p.category === category;
    const matchesQuery = !query || 
      p.name.toLowerCase().includes(query) || 
      p.dimension.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.categoryName.toLowerCase().includes(query);
    return matchesCat && matchesQuery;
  });

  renderProducts(filtered);
}

// Render Projects Portfolio
function renderProjects(items) {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  container.innerHTML = items.map(proj => {
    return `
      <div class="project-card" data-category="${proj.category}">
        <div class="project-img-holder">
          <img src="${proj.image}" alt="${proj.title} - Landmark Associates" loading="lazy" onerror="this.src='images/hero-construction.jpg'">
          <span class="project-category-badge">${proj.categoryName}</span>
        </div>
        <div class="project-body">
          <div class="project-location">
            <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
            ${proj.location}
          </div>
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-desc">${proj.desc}</p>
          <div class="project-materials-tag-row">
            ${proj.materials.map(m => `<span class="project-mat-tag">${m}</span>`).join('')}
          </div>
          <div style="font-size: 0.82rem; font-weight: 700; color: #fbbf24; margin-top: auto; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.08);">
            Key Achievement: ${proj.metrics}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      if (filter === 'all') {
        renderProjects(PROJECTS);
      } else {
        const filtered = PROJECTS.filter(p => p.category === filter);
        renderProjects(filtered);
      }
    });
  });
}

// Quote Basket Functionality (Multi-item contractor builder)
function addToQuoteBasket(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = quoteBasket.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    quoteBasket.push({
      id: product.id,
      name: product.name,
      dimension: product.dimension,
      qty: 1
    });
  }

  updateBasketCount();
  showToast(`Added "${product.name} (${product.dimension})" to your Quote List`);
}

function updateBasketCount() {
  const countBadges = document.querySelectorAll('.cart-count-badge');
  const total = quoteBasket.reduce((sum, item) => sum + item.qty, 0);
  countBadges.forEach(badge => {
    badge.textContent = total;
    badge.style.display = total > 0 ? 'flex' : 'none';
  });
}

function initBasketUI() {
  const openCartBtns = document.querySelectorAll('.open-cart-btn');
  const modal = document.getElementById('cart-modal');
  const closeBtn = document.getElementById('cart-modal-close');

  openCartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      renderBasketModal();
      if (modal) modal.classList.add('active');
    });
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  // Click outside to close
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }
}

function renderBasketModal() {
  const container = document.getElementById('cart-modal-items');
  const checkoutBtn = document.getElementById('cart-whatsapp-btn');
  if (!container) return;

  if (quoteBasket.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: #64748b;">
        <svg style="margin: 0 auto 14px auto; color: #94a3b8;" width="44" height="44" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
        <p style="font-weight: 600; font-size: 1rem; color: #0b1528;">Your Quote List is empty</p>
        <p style="font-size: 0.85rem; margin-top: 4px;">Click the "+ Quote" button on any material to build a combined enquiry.</p>
      </div>
    `;
    if (checkoutBtn) checkoutBtn.style.display = 'none';
    return;
  }

  if (checkoutBtn) checkoutBtn.style.display = 'flex';

  container.innerHTML = quoteBasket.map(item => {
    return `
      <div class="cart-item-row">
        <div>
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-dim">${item.dimension}</div>
        </div>
        <div class="qty-control">
          <button type="button" class="qty-btn" onclick="updateBasketQty('${item.id}', -1)">-</button>
          <span style="font-weight: 700; min-width: 20px; text-align: center;">${item.qty}</span>
          <button type="button" class="qty-btn" onclick="updateBasketQty('${item.id}', 1)">+</button>
        </div>
        <button type="button" class="cart-remove-btn" onclick="removeBasketItem('${item.id}')" title="Remove item">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
        </button>
      </div>
    `;
  }).join('');
}

window.updateBasketQty = function(id, delta) {
  const item = quoteBasket.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    quoteBasket = quoteBasket.filter(i => i.id !== id);
  }
  updateBasketCount();
  renderBasketModal();
};

window.removeBasketItem = function(id) {
  quoteBasket = quoteBasket.filter(i => i.id !== id);
  updateBasketCount();
  renderBasketModal();
};

window.sendBasketToWhatsApp = function() {
  if (quoteBasket.length === 0) return;

  const projectLocation = document.getElementById('basket-project-location')?.value || 'Tiruchirappalli';
  const customerName = document.getElementById('basket-customer-name')?.value || 'Client';
  const enquiryType = document.getElementById('basket-enquiry-type')?.value || 'Rental / Sales';

  let text = `*New Material Quote Request - Landmark Associates*\n`;
  text += `Customer: ${customerName}\n`;
  text += `Requirement Type: ${enquiryType}\n`;
  text += `Site Location: ${projectLocation}\n\n`;
  text += `*Requested Materials:*\n`;

  quoteBasket.forEach((item, index) => {
    text += `${index + 1}. ${item.name} (${item.dimension}) - Qty: ${item.qty}\n`;
  });

  text += `\nPlease provide your competitive quote and delivery terms. Thank you!`;

  const waUrl = `https://wa.me/919944113226?text=${encodeURIComponent(text)}`;
  window.open(waUrl, '_blank');
};

// Modal for Single Product Quote
window.openProductQuoteModal = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('single-quote-modal');
  const title = document.getElementById('single-quote-title');
  const hiddenInput = document.getElementById('single-quote-product-id');
  
  if (title) title.textContent = `Enquire: ${product.name} (${product.dimension})`;
  if (hiddenInput) hiddenInput.value = `${product.name} - ${product.dimension}`;
  if (modal) modal.classList.add('active');
};

window.closeSingleQuoteModal = function() {
  const modal = document.getElementById('single-quote-modal');
  if (modal) modal.classList.remove('active');
};

// Quick Quote Hero Form Handler
function initQuickQuoteForm() {
  const form = document.getElementById('hero-quick-quote-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const service = form.querySelector('[name="service"]')?.value || 'General Construction / Materials';
    const location = form.querySelector('[name="location"]')?.value || 'Tiruchirappalli';
    const phone = form.querySelector('[name="phone"]')?.value || '';

    const text = `*Website Quick Enquiry - Landmark Associates*\nI need assistance with: *${service}*\nSite Location: *${location}*\nMy Contact Number: *${phone}*\n\nPlease get in touch with rate details.`;
    const waUrl = `https://wa.me/919944113226?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  });
}

// Contact Form Handler
function initContactForm() {
  const form = document.getElementById('main-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('[name="name"]')?.value || '';
    const phone = form.querySelector('[name="phone"]')?.value || '';
    const email = form.querySelector('[name="email"]')?.value || '';
    const service = form.querySelector('[name="service"]')?.value || '';
    const message = form.querySelector('[name="message"]')?.value || '';

    if (!name || !phone) {
      alert('Please provide your name and phone number so we can reach you.');
      return;
    }

    const text = `*New Contact Enquiry - landmarkassociates.in*\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email || 'Not provided'}\n` +
      `Interested In: ${service}\n` +
      `Message: ${message}\n`;

    const waUrl = `https://wa.me/919944113226?text=${encodeURIComponent(text)}`;
    
    // Open WhatsApp
    window.open(waUrl, '_blank');

    showToast('Thank you! Redirecting to WhatsApp to send your enquiry...');
    form.reset();
  });
}

// Animated Numbers Counter for Stats
function initStatsCounter() {
  const stats = document.querySelectorAll('.stat-number[data-target]');
  if (!stats.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        let start = 0;
        const duration = 1800;
        const stepTime = Math.abs(Math.floor(duration / (target || 100)));

        const timer = setInterval(() => {
          start += Math.ceil(target / 40);
          if (start >= target) {
            el.innerHTML = `${target}<span>${suffix}</span>`;
            clearInterval(timer);
          } else {
            el.innerHTML = `${start}<span>${suffix}</span>`;
          }
        }, 30);

        observer.unobserve(el);
      }
    });
  }, { threshold: 0.2 });

  stats.forEach(stat => observer.observe(stat));
}

// Toast notification display
function showToast(msg) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="20" height="20" fill="none" stroke="#f59e0b" stroke-width="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
    <span>${msg}</span>
  `;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// Full Shop Photo Lightbox Modal
window.openShopPhotoModal = function() {
  const modal = document.getElementById('shop-photo-modal');
  if (modal) modal.classList.add('active');
};

window.closeShopPhotoModal = function() {
  const modal = document.getElementById('shop-photo-modal');
  if (modal) modal.classList.remove('active');
};

