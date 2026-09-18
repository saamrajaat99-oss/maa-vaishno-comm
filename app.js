/* ==========================================================================
   MAA VAISHNO COMMUNICATION - FUTURISTIC MOBILE STORE APPLICATION ENGINE
   Features: Floating 3D Phone Orbit, Phone Diagnostic Inspector, Inventory CRUD,
   Admin Auth, Trade-in Calculator & Web Audio SFX
   ========================================================================== */

(function () {
  'use strict';

  // --- LOCAL STORAGE KEY ---
  const INVENTORY_STORAGE_KEY = 'maa_vaishno_inventory_v5';

  // --- HIGH QUALITY PUBLIC SMARTPHONE RENDERS (6 DEDICATED VERIFIED IMAGES PER PHONE MODEL) ---
  const SAMPLE_INVENTORY = [
    { 
      id: 'phone-101', brand: 'Apple', title: 'iPhone 15 Pro Max (256GB, Natural Titanium)', category: 'new', price: 134900, mrp: 149900, conditionGrade: 'Brand New', batteryHealth: 100, specs: '256GB Storage, 8GB RAM, A17 Pro Chip', 
      images: [
        'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80'
      ],
      img: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80', 
      accessories: 'Original Box, USB-C Cable, 1-Year Apple Warranty', isFloating: true, stockStatus: 'In Stock', colorGrad: 'linear-gradient(135deg, #8e9baa, #00f0ff)' 
    },
    { 
      id: 'phone-102', brand: 'Samsung', title: 'Samsung Galaxy S24 Ultra (512GB, Titanium Gray)', category: 'new', price: 129999, mrp: 139999, conditionGrade: 'Brand New', batteryHealth: 100, specs: '512GB Storage, 12GB RAM, Snapdragon 8 Gen 3', 
      images: [
        'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1574944985070-8f30c4397e3c?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80'
      ],
      img: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80', 
      accessories: 'Sealed Box, S-Pen Included, Official Bill', isFloating: true, stockStatus: 'In Stock', colorGrad: 'linear-gradient(135deg, #2b2d42, #7b2cbf)' 
    },
    { 
      id: 'phone-103', brand: 'Apple', title: 'iPhone 13 Pro (128GB, Sierra Blue)', category: 'old', price: 54999, mrp: 119900, conditionGrade: 'Grade A+ Mint', batteryHealth: 94, specs: '128GB Storage, 6GB RAM, 120Hz ProMotion', 
      images: [
        'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1565630916779-e303be97b6f5?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1575024357670-2b5164f470c3?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=800&q=80'
      ],
      img: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&w=800&q=80', 
      accessories: 'Original Box, GST Invoice & Fast Charger', isFloating: true, stockStatus: 'In Stock', colorGrad: 'linear-gradient(135deg, #00b4d8, #0077b6)' 
    },
    { 
      id: 'phone-104', brand: 'OnePlus', title: 'OnePlus 12 5G (256GB, Emerald Green)', category: 'new', price: 64999, mrp: 69999, conditionGrade: 'Brand New', batteryHealth: 100, specs: '256GB Storage, 12GB RAM, 100W SUPERVOOC', 
      images: [
        'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1580974852861-c381510bc98a?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80'
      ],
      img: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80', 
      accessories: 'Sealed Pack Box & 100W Adapter', isFloating: true, stockStatus: 'In Stock', colorGrad: 'linear-gradient(135deg, #0f5132, #00f5d4)' 
    },
    { 
      id: 'phone-105', brand: 'Google', title: 'Google Pixel 8 Pro (128GB, Obsidian)', category: 'old', price: 62999, mrp: 106999, conditionGrade: 'Grade A Superb', batteryHealth: 96, specs: '128GB Storage, 12GB RAM, Google Tensor G3', 
      images: [
        'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1525598912003-663126343e1f?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?auto=format&fit=crop&w=800&q=80'
      ],
      img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80', 
      accessories: 'Original Bill, Box & Type-C Cable', isFloating: true, stockStatus: 'In Stock', colorGrad: 'linear-gradient(135deg, #212529, #495057)' 
    },
    { 
      id: 'phone-106', brand: 'Apple', title: 'iPhone 14 Pro Max (256GB, Deep Purple)', category: 'old', price: 79999, mrp: 139900, conditionGrade: 'Grade A+ Mint', batteryHealth: 91, specs: '256GB Storage, 6GB RAM, Dynamic Island', 
      images: [
        'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1583573636246-18cb2246697f?auto=format&fit=crop&w=800&q=80'
      ],
      img: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80', 
      accessories: 'Original Box, Bill & USB-C Cable', isFloating: true, stockStatus: 'In Stock', colorGrad: 'linear-gradient(135deg, #3c096c, #7b2cbf)' 
    },
    { 
      id: 'phone-107', brand: 'Samsung', title: 'Samsung Galaxy Z Fold 5 (512GB, Phantom Black)', category: 'new', price: 139999, mrp: 164999, conditionGrade: 'Brand New', batteryHealth: 100, specs: '512GB Storage, 12GB RAM, Foldable 7.6" Dynamic AMOLED', 
      images: [
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1530319067432-f2a729c03db5?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80'
      ],
      img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80', 
      accessories: 'Sealed Pack Box & Samsung Warranty', isFloating: true, stockStatus: 'In Stock', colorGrad: 'linear-gradient(135deg, #111, #333)' 
    },
    { 
      id: 'phone-108', brand: 'Samsung', title: 'Samsung Galaxy Z Flip 5 (256GB, Mint)', category: 'old', price: 49999, mrp: 99999, conditionGrade: 'Grade A+ Mint', batteryHealth: 92, specs: '256GB Storage, 8GB RAM, Flex Window', 
      images: [
        'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1533228876829-65c94e7b5025?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=800&q=80'
      ],
      img: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80', 
      accessories: 'Original Box, Bill & Store Warranty', isFloating: true, stockStatus: 'In Stock', colorGrad: 'linear-gradient(135deg, #a8e6cf, #00f0ff)' 
    },
    { 
      id: 'phone-109', brand: 'Nothing', title: 'Nothing Phone (2) (256GB, Dark Grey)', category: 'old', price: 33999, mrp: 49999, conditionGrade: 'Grade A', batteryHealth: 95, specs: '256GB Storage, 12GB RAM, Glyph 2.0 Interface', 
      images: [
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1574944985070-8f30c4397e3c?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80'
      ],
      img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80', 
      accessories: 'Original Box & Type-C Cable', isFloating: true, stockStatus: 'In Stock', colorGrad: 'linear-gradient(135deg, #1a1a1a, #ffffff)' 
    },
    { 
      id: 'phone-110', brand: 'Vivo', title: 'Vivo X100 Pro 5G (512GB, Asteroid Black)', category: 'new', price: 89999, mrp: 96999, conditionGrade: 'Brand New', batteryHealth: 100, specs: '512GB Storage, 16GB RAM, ZEISS APO Camera', 
      images: [
        'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1534972195531-a756b11269d9?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1526406915894-7bcd65f60845?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80'
      ],
      img: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=800&q=80', 
      accessories: 'Sealed Pack Box & 100W FlashCharger', isFloating: true, stockStatus: 'In Stock', colorGrad: 'linear-gradient(135deg, #0d1b2a, #1b263b)' 
    }
  ];

  // --- HUD TOAST NOTIFICATION ENGINE ---
  function showHUDToast(msg, type = 'info') {
    const container = document.getElementById('hud-toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `hud-toast hud-toast-${type}`;

    let icon = 'fa-info-circle';
    if (type === 'success') icon = 'fa-check-circle';
    if (type === 'warning') icon = 'fa-exclamation-triangle';
    if (type === 'danger') icon = 'fa-trash-alt';

    toast.innerHTML = `<i class="fas ${icon}"></i> <span>${msg}</span>`;
    container.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('active');
    });

    setTimeout(() => {
      toast.classList.remove('active');
      setTimeout(() => toast.remove(), 400);
    }, 3200);
  }

  // --- APPLICATION STATE ---
  let inventory = [];
  let currentCategoryFilter = 'all';
  let currentBrandFilter = 'all';
  let currentPriceFilter = 'all';
  let currentSearchQuery = '';
  let isAdminAuthenticated = sessionStorage.getItem('maa_admin_auth') === 'true';
  let isSoundMuted = false;
  let currentUser = null; // Customer User Auth State

  const USER_STORAGE_KEY = 'maa_vaishno_customer_user_v1';
  const DEFAULT_PHONE_SVG = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' rx='24' fill='%23ffffff' stroke='%230284c7' stroke-width='3'/%3E%3Crect x='20' y='30' width='260' height='340' rx='16' fill='%23f8fafc' stroke='%23e2e8f0' stroke-width='2'/%3E%3Ccircle cx='150' cy='50' r='6' fill='%230284c7'/%3E%3Ctext x='150' y='190' fill='%230f172a' font-family='sans-serif' font-size='18' text-anchor='middle' font-weight='bold'%3EMAA VAISHNO%3C/text%3E%3Ctext x='150' y='215' fill='%230284c7' font-family='sans-serif' font-size='14' text-anchor='middle' font-weight='bold'%3EMOBILE STORE%3C/text%3E%3C/svg%3E";

  // --- WEB AUDIO API FUTURISTIC SFX SYNTHESIZER ---
  let audioCtx = null;

  function getAudioContext() {
    if (!audioCtx) {
      try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          audioCtx = new AudioContextClass();
        }
      } catch (e) {
        console.warn('AudioContext initialization deferred:', e);
      }
    }
    return audioCtx;
  }

  function playSFX(type) {
    if (isSoundMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      if (ctx.state === 'suspended') {
        ctx.resume().catch(() => {});
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;

      if (type === 'hover') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(900, now + 0.08);
        gain.gain.setValueAtTime(0.03, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === 'click') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(300, now + 0.12);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        osc.start(now);
        osc.stop(now + 0.12);
      } else if (type === 'success') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.08);
        osc.frequency.setValueAtTime(783.99, now + 0.16);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
      }
    } catch (e) {
      // Audio context fallback silent catch
    }
  }

  // --- INITIALIZATION ---
  function init() {
    loadInventory();
    loadUser();
    setupCursorGlow();
    setupHeaderScroll();
    setupSFXToggle();
    renderHeroFloatingStage();
    setupCatalogFilters();
    renderCatalog();
    setupUserAuth();
    setupAdminPortal();
    setupModalEvents();

    // Update statistics
    const statElem = document.getElementById('stat-total-phones');
    if (statElem) {
      statElem.textContent = `${inventory.length}+`;
    }
  }

  // --- SAFE LOCAL STORAGE WRAPPERS ---
  function getStorageItem(key) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      console.warn('Storage read unavailable:', e);
      return null;
    }
  }

  function setStorageItem(key, val) {
    try {
      localStorage.setItem(key, val);
    } catch (e) {
      console.warn('Storage write unavailable:', e);
    }
  }

  function removeStorageItem(key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.warn('Storage remove unavailable:', e);
    }
  }

  // Helper to guarantee 5-6 photos per phone
  const FALLBACK_PHONE_PHOTOS = [
    'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80'
  ];

  function ensurePhoneMultiImages(phone) {
    if (!phone.images || !Array.isArray(phone.images) || phone.images.length === 0) {
      phone.images = [phone.img || FALLBACK_PHONE_PHOTOS[0]];
    }
    // Fill up to 5-6 images if less than 5
    while (phone.images.length < 5) {
      const nextFallback = FALLBACK_PHONE_PHOTOS[phone.images.length % FALLBACK_PHONE_PHOTOS.length];
      if (!phone.images.includes(nextFallback)) {
        phone.images.push(nextFallback);
      } else {
        phone.images.push(`${nextFallback}&variant=${phone.images.length}`);
      }
    }
    phone.img = phone.images[0];
    return phone;
  }

  // --- LOAD & SAVE INVENTORY STATE ---
  function loadInventory() {
    const saved = getStorageItem(INVENTORY_STORAGE_KEY);
    if (saved) {
      try {
        inventory = JSON.parse(saved);
        inventory = inventory.map(p => ensurePhoneMultiImages(p));
      } catch (e) {
        inventory = SAMPLE_INVENTORY.map(p => ensurePhoneMultiImages(p));
      }
    } else {
      inventory = SAMPLE_INVENTORY.map(p => ensurePhoneMultiImages(p));
      saveInventory();
    }
  }

  function saveInventory() {
    setStorageItem(INVENTORY_STORAGE_KEY, JSON.stringify(inventory));
    renderHeroFloatingStage();
    renderCatalog();
    renderAdminInventoryTable();
    const statElem = document.getElementById('stat-total-phones');
    if (statElem) {
      statElem.textContent = `${inventory.length}+`;
    }
  }

  // --- CURSOR SPOTLIGHT EFFECT ---
  function setupCursorGlow() {
    const glow = document.getElementById('cursor-glow');
    window.addEventListener('mousemove', (e) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    });
  }

  // --- HEADER SCROLL STYLING & MOBILE MENU ---
  function setupHeaderScroll() {
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    const mobileBtn = document.getElementById('mobile-nav-toggle');
    const navLinks = document.getElementById('nav-links');
    if (mobileBtn && navLinks) {
      mobileBtn.addEventListener('click', () => {
        playSFX('click');
        navLinks.classList.toggle('mobile-open');
      });

      navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('mobile-open');
        });
      });
    }
  }

  // --- AUDIO SFX TOGGLE ---
  function setupSFXToggle() {
    const btn = document.getElementById('sfx-toggle-btn');
    btn.addEventListener('click', () => {
      isSoundMuted = !isSoundMuted;
      if (isSoundMuted) {
        btn.classList.add('muted');
        btn.innerHTML = '<i class="fas fa-volume-xmark"></i>';
      } else {
        btn.classList.remove('muted');
        btn.innerHTML = '<i class="fas fa-volume-high"></i>';
        playSFX('success');
      }
    });
  }


  // ==========================================================================
  // HERO STAGE: 3D FLOATING MOBILE PHONE MODELS ORBIT ENGINE (TOUCH & DRAG)
  // ==========================================================================
  let orbitAnimationFrameId = null;
  let currentOrbitAngle = 0;
  let isDraggingOrbit = false;
  let dragStartX = 0;
  let lastDragX = 0;
  let dragVelocity = 0;
  let wasDragged = false;
  let dragControlsInitialized = false;

  function setupOrbitDragControls() {
    const stage = document.getElementById('hero-floating-stage');
    if (!stage || dragControlsInitialized) return;
    dragControlsInitialized = true;

    const onStart = (clientX) => {
      isDraggingOrbit = true;
      dragStartX = clientX;
      lastDragX = clientX;
      dragVelocity = 0;
      wasDragged = false;
    };

    const onMove = (clientX) => {
      if (!isDraggingOrbit) return;
      const deltaX = clientX - lastDragX;
      if (Math.abs(clientX - dragStartX) > 15) {
        wasDragged = true;
      }
      currentOrbitAngle += deltaX * 0.45;
      dragVelocity = deltaX * 0.35;
      lastDragX = clientX;
    };

    const onEnd = () => {
      isDraggingOrbit = false;
    };

    // Mouse Events
    stage.addEventListener('mousedown', (e) => onStart(e.clientX));
    window.addEventListener('mousemove', (e) => onMove(e.clientX));
    window.addEventListener('mouseup', onEnd);

    // Touch Events
    stage.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) onStart(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (e.touches.length === 1) onMove(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchend', onEnd);
  }

  function renderHeroFloatingStage() {
    const container = document.getElementById('floating-phones-container');
    container.innerHTML = '';

    const floatingPhones = inventory.filter(phone => phone.isFloating);
    if (floatingPhones.length === 0) {
      container.innerHTML = `
        <div style="position: absolute; color: var(--text-dim); text-align: center; font-family: var(--font-sub);">
          No mobile models set to float.<br>Admin can enable float status in Admin Portal!
        </div>`;
      return;
    }

    // Outer 3D Stage Ring
    const orbitRing = document.createElement('div');
    orbitRing.className = 'orbit-ring-stage-3d';
    container.appendChild(orbitRing);

    setupOrbitDragControls();

    // Create 3D Phone Model Elements
    floatingPhones.forEach((phone) => {
      const card = document.createElement('div');
      card.className = 'floating-phone-card-3d';
      card.dataset.id = phone.id;

      const grad = phone.colorGrad || 'linear-gradient(135deg, #00f0ff, #7b2cbf)';

      // Pure 3D Mobile Phone Geometry Structure (Facing Left Profile Angle - Details Hidden)
      card.innerHTML = `
        <div class="phone-3d-model-wrapper" title="Click to inspect ${phone.title}">
          <div class="phone-3d-body">
            <!-- Glass Screen Display -->
            <div class="phone-3d-screen" style="background: ${grad};">
              <div class="phone-3d-island"></div>
              <div class="phone-3d-wallpaper">
                <span class="phone-3d-brand-text">${phone.brand}</span>
              </div>
            </div>
            <!-- Metallic Rear Triple Camera Module -->
            <div class="phone-3d-camera-bump">
              <div class="lens-3d lens-top"></div>
              <div class="lens-3d lens-bottom"></div>
              <div class="lens-3d lens-side"></div>
            </div>
            <!-- Left Side Bevel Edge Rail -->
            <div class="phone-3d-edge-left"></div>
          </div>
        </div>
      `;

      card.addEventListener('mouseenter', () => playSFX('hover'));

      card.addEventListener('click', (e) => {
        if (wasDragged) return; // Prevent inspect click if user was dragging orbit
        playSFX('click');
        openPhoneInspectorModal(phone.id);
      });

      orbitRing.appendChild(card);
    });

    renderFloatingTickerBar(floatingPhones);

    // Start Continuous 3D Orbit Animation Loop
    if (orbitAnimationFrameId) cancelAnimationFrame(orbitAnimationFrameId);
    animate3DOrbitLoop(floatingPhones.length);
  }

  function renderFloatingTickerBar(floatingPhones) {
    const pillsContainer = document.getElementById('stage-ticker-pills');
    if (!pillsContainer) return;
    pillsContainer.innerHTML = '';

    // Pick top 8 diverse example models for quick preview
    const examplePhones = floatingPhones.slice(0, 10);

    examplePhones.forEach((phone, index) => {
      const chip = document.createElement('div');
      chip.className = 'ticker-chip-pill';
      chip.innerHTML = `<span>${getBrandIcon(phone.brand)}</span> <span>${phone.brand} ${phone.title.split('(')[0].replace(phone.brand, '').trim()}</span>`;

      chip.addEventListener('click', () => {
        playSFX('click');
        // Rotate 3D Orbit so target phone is at front (index 0 angle = -index * step)
        const angleStep = 360 / floatingPhones.length;
        currentOrbitAngle = (360 - (index * angleStep)) % 360;
        dragVelocity = 0;
        openPhoneInspectorModal(phone.id);
      });

      pillsContainer.appendChild(chip);
    });
  }

  function getBrandIcon(brand) {
    switch(brand.toLowerCase()) {
      case 'apple': return '<i class="fab fa-apple"></i>';
      case 'samsung': return '<i class="fas fa-mobile-screen"></i>';
      case 'oneplus': return '<i class="fas fa-bolt"></i>';
      case 'google': return '<i class="fab fa-google"></i>';
      case 'nothing': return '<i class="fas fa-atom"></i>';
      default: return '<i class="fas fa-mobile-button"></i>';
    }
  }

  function animate3DOrbitLoop(totalPhones) {
    if (isDraggingOrbit) {
      // Rotation handled directly by mouse/touch drag listener
    } else if (Math.abs(dragVelocity) > 0.04) {
      currentOrbitAngle += dragVelocity;
      dragVelocity *= 0.94; // Smooth momentum decay
    } else {
      currentOrbitAngle = (currentOrbitAngle + 0.28) % 360; // Auto orbit rotation
    }

    const cards = document.querySelectorAll('.floating-phone-card-3d');
    if (cards.length > 0) {
      const angleStep = 360 / totalPhones;
      const radiusX = 270; // Orbit width radius
      const radiusZ = 165; // Orbit depth radius

      cards.forEach((card, idx) => {
        const angle = (idx * angleStep + currentOrbitAngle) % 360;
        const rad = (angle * Math.PI) / 180;

        const x = Math.sin(rad) * radiusX;
        const z = Math.cos(rad) * radiusZ; // z ranges from -165 (back) to +165 (front)

        // Depth sorting and translucency for background phones
        const normZ = (z + radiusZ) / (2 * radiusZ); // 0.0 (far back) to 1.0 (front)
        
        // Translucency: Phones at back fade to opacity ~0.12 to 0.35
        const opacity = 0.12 + (normZ * 0.88); 
        const scale = 0.55 + (normZ * 0.50); // Scale from 0.55 (back) to 1.05 (front)
        const zIndex = Math.round(normZ * 100);
        const blur = (1 - normZ) * 2.8; // Depth blur for background ghosts

        // Strict Left-Side Facing Angle
        card.style.transform = `translate3d(${x}px, 0px, ${z}px) scale(${scale}) rotateY(-45deg) rotateX(8deg)`;
        card.style.opacity = opacity;
        card.style.zIndex = zIndex;
        card.style.filter = `blur(${blur}px)`;
        card.style.pointerEvents = normZ < 0.18 ? 'none' : 'auto'; // Disable clicks on translucent background ghosts
      });
    }

    orbitAnimationFrameId = requestAnimationFrame(() => animate3DOrbitLoop(totalPhones));
  }


  // ==========================================================================
  // STORE CATALOG GRID RENDERER & FILTERS
  // ==========================================================================
  function renderCatalog() {
    const gridContainer = document.getElementById('phone-grid-container');
    gridContainer.innerHTML = '';

    // Filter Logic
    let filtered = inventory.filter(phone => {
      // Category Tab Filter
      if (currentCategoryFilter === 'new' && phone.category !== 'new') return false;
      if (currentCategoryFilter === 'old' && phone.category !== 'old') return false;
      if (currentCategoryFilter === 'floating' && !phone.isFloating) return false;

      // Brand Select Filter
      if (currentBrandFilter !== 'all' && phone.brand.toLowerCase() !== currentBrandFilter.toLowerCase()) return false;

      // Price Select Filter
      if (currentPriceFilter !== 'all') {
        const [min, max] = currentPriceFilter.split('-').map(Number);
        if (phone.price < min || phone.price > max) return false;
      }

      // Search Query Filter
      if (currentSearchQuery.trim() !== '') {
        const q = currentSearchQuery.toLowerCase();
        const matchTitle = phone.title.toLowerCase().includes(q);
        const matchBrand = phone.brand.toLowerCase().includes(q);
        const matchSpecs = phone.specs.toLowerCase().includes(q);
        if (!matchTitle && !matchBrand && !matchSpecs) return false;
      }

      return true;
    });

    if (filtered.length === 0) {
      gridContainer.innerHTML = `
        <div class="empty-catalog-msg">
          <i class="fas fa-mobile-xmark" style="font-size: 3rem; color: var(--magenta-accent); margin-bottom: 16px;"></i>
          <h3 style="color: #fff; margin-bottom: 8px;">No Mobile Phones Match Your Filter</h3>
          <p style="color: var(--text-muted);">Try adjusting your search query, brand filter, or price selection.</p>
        </div>`;
      return;
    }

    filtered.forEach(phone => {
      const card = document.createElement('div');
      card.className = 'phone-card';

      const isNew = phone.category === 'new';
      const badgeClass = isNew ? 'hud-badge-green' : 'hud-badge-cyan';
      const badgeText = isNew ? 'BRAND NEW (SEALED)' : `PRE-OWNED (${phone.conditionGrade})`;

      card.innerHTML = `
        <div class="card-top-badges">
          <span class="hud-badge ${badgeClass}">${badgeText}</span>
          ${phone.isFloating ? '<span class="hud-badge hud-badge-magenta"><i class="fas fa-atom"></i> Floating</span>' : ''}
        </div>

        <div class="card-img-wrapper">
          <img src="${phone.img}" alt="${phone.title}" loading="lazy" onerror="this.onerror=null; this.src=DEFAULT_PHONE_SVG">
          <span class="photo-count-badge" title="${(phone.images && phone.images.length) || 1} photos available"><i class="fas fa-images"></i> ${(phone.images && phone.images.length) || 1} Photos</span>
        </div>

        <div class="phone-info">
          <span class="phone-brand-tag">${phone.brand}</span>
          <h3 class="phone-title">${phone.title}</h3>
          
          <div class="phone-specs-pill-group">
            <span class="spec-pill"><i class="fas fa-microchip"></i> ${phone.specs}</span>
          </div>

          <div class="phone-condition-bar">
            <div class="cond-detail">
              <span class="cond-label">Condition Score</span>
              <span class="cond-val">${isNew ? '10/10 Mint' : phone.conditionGrade}</span>
            </div>

            <div class="battery-gauge-mini" title="Battery Health">
              <i class="fas fa-battery-three-quarters" style="color: var(--green-success); font-size: 0.85rem;"></i>
              <div class="battery-fill-bar">
                <div class="battery-fill-inner" style="width: ${phone.batteryHealth}%;"></div>
              </div>
              <span style="font-size: 0.78rem; font-weight: 700; color: var(--text-main);">${phone.batteryHealth}%</span>
            </div>
          </div>

          <div class="card-price-row">
            <div class="price-box">
              <span class="price-mrp">MRP ₹${phone.mrp.toLocaleString('en-IN')}</span>
              <span class="price-main">₹${phone.price.toLocaleString('en-IN')}</span>
            </div>

            <button class="btn btn-cyan btn-sm inspect-btn" data-id="${phone.id}">
              <i class="fas fa-eye"></i> Inspect
            </button>
          </div>
        </div>
      `;

      card.addEventListener('mouseenter', () => playSFX('hover'));
      card.querySelector('.inspect-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        playSFX('click');
        openPhoneInspectorModal(phone.id);
      });

      gridContainer.appendChild(card);
    });
  }

  // Setup Event Listeners for Filters
  function setupCatalogFilters() {
    const filterTabs = document.getElementById('catalog-filter-tabs');
    if (filterTabs) {
      filterTabs.addEventListener('click', (e) => {
        const btn = e.target.closest('.tab-btn');
        if (!btn) return;

        playSFX('click');
        document.querySelectorAll('#catalog-filter-tabs .tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        currentCategoryFilter = btn.dataset.category;
        renderCatalog();
      });
    }

    const brandSelect = document.getElementById('brand-filter-select');
    if (brandSelect) {
      brandSelect.addEventListener('change', (e) => {
        currentBrandFilter = e.target.value;
        playSFX('click');
        renderCatalog();
      });
    }

    const priceSelect = document.getElementById('price-filter-select');
    if (priceSelect) {
      priceSelect.addEventListener('change', (e) => {
        currentPriceFilter = e.target.value;
        playSFX('click');
        renderCatalog();
      });
    }

    const searchInput = document.getElementById('catalog-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        currentSearchQuery = e.target.value;
        renderCatalog();
      });
    }
  }


  // ==========================================================================
  // HOLOGRAPHIC PHONE DIAGNOSTIC INSPECTOR MODAL
  // ==========================================================================
  // ==========================================================================
  // HOLOGRAPHIC PHONE DIAGNOSTIC INSPECTOR MODAL (5-6 PHOTO GALLERY ENGINE)
  // ==========================================================================
  let currentGalleryImages = [];
  let currentGalleryIndex = 0;

  function openPhoneInspectorModal(phoneId) {
    const phone = inventory.find(p => p.id === phoneId);
    if (!phone) return;

    ensurePhoneMultiImages(phone);
    currentGalleryImages = phone.images || [phone.img];
    currentGalleryIndex = 0;

    const modal = document.getElementById('inspector-modal');
    const container = document.getElementById('inspector-modal-content');

    const isNew = phone.category === 'new';
    const badgeText = isNew ? 'BRAND NEW (SEALED PACK)' : `PRE-OWNED (${phone.conditionGrade})`;
    const savingsAmount = phone.mrp - phone.price;
    const savingsPercent = Math.round((savingsAmount / phone.mrp) * 100);

    const waText = encodeURIComponent(`Hello MAA VAISHNO COMMUNICATION,\nI want to inquire / buy this mobile phone from your website:\n\n📱 Model: ${phone.title}\n💰 Price: ₹${phone.price.toLocaleString('en-IN')}\n🏷️ Category: ${badgeText}\n🔋 Battery Health: ${phone.batteryHealth}%\n\nPlease confirm availability & purchase details.`);
    const waLink = `https://wa.me/919876543210?text=${waText}`;

    // Render 5-6 Thumbnails Strip
    const thumbHtml = currentGalleryImages.map((imgUrl, idx) => `
      <div class="gallery-thumb-item ${idx === 0 ? 'active' : ''}" data-idx="${idx}" title="Photo ${idx + 1}">
        <img src="${imgUrl}" alt="${phone.title} photo ${idx + 1}" onerror="this.onerror=null; this.src=DEFAULT_PHONE_SVG">
      </div>
    `).join('');

    container.innerHTML = `
      <div class="inspector-layout">
        <!-- Left: Interactive 5-6 Phone Photo Gallery -->
        <div class="inspector-media">
          <span class="hud-badge ${isNew ? 'hud-badge-green' : 'hud-badge-cyan'}" style="margin-bottom: 12px; width: 100%; justify-content: center;">
            ${badgeText}
          </span>
          
          <div class="inspector-gallery-wrap">
            <div class="gallery-stage-container" id="gallery-stage-container" title="Click to view full screen zoom">
              <span class="gallery-counter-badge" id="gallery-counter-badge">1 / ${currentGalleryImages.length}</span>
              <button type="button" class="gallery-arrow-btn prev-btn" id="gallery-prev-btn" title="Previous photo (Left Arrow)">
                <i class="fas fa-chevron-left"></i>
              </button>
              <img id="gallery-main-img" class="gallery-stage-img" src="${currentGalleryImages[0]}" alt="${phone.title}" onerror="this.onerror=null; this.src=DEFAULT_PHONE_SVG">
              <button type="button" class="gallery-arrow-btn next-btn" id="gallery-next-btn" title="Next photo (Right Arrow)">
                <i class="fas fa-chevron-right"></i>
              </button>
              <span class="gallery-zoom-hint"><i class="fas fa-magnifying-glass-plus"></i> Click to Zoom</span>
            </div>

            <!-- 5-6 Thumbnails Strip -->
            <div class="gallery-thumbs-row" id="gallery-thumbs-row">
              ${thumbHtml}
            </div>
          </div>

          <div style="margin-top: 12px; display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;">
            <span class="hud-badge hud-badge-gold"><i class="fas fa-tags"></i> Save ${savingsPercent}% OFF</span>
            <span class="hud-badge hud-badge-cyan"><i class="fas fa-shield-halved"></i> 100% Tested</span>
          </div>
        </div>

        <!-- Right: Diagnostic Specs & Buying Actions -->
        <div class="inspector-details">
          <div class="inspector-title-row">
            <span style="font-family: var(--font-sub); color: var(--cyan-primary); text-transform: uppercase; font-weight: 700;">${phone.brand}</span>
            <h2>${phone.title}</h2>
          </div>

          <!-- Price Header -->
          <div style="background: rgba(0, 240, 255, 0.05); border: 1px solid var(--border-glass); padding: 14px 18px; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: space-between;">
            <div>
              <span style="font-size: 0.8rem; color: var(--text-muted); display: block;">OUR SPECIAL STORE PRICE</span>
              <span style="font-family: var(--font-heading); font-size: 1.8rem; color: var(--cyan-primary); font-weight: 900;">₹${phone.price.toLocaleString('en-IN')}</span>
            </div>
            <div style="text-align: right;">
              <span style="font-size: 0.8rem; color: var(--text-dim); text-decoration: line-through; display: block;">MRP ₹${phone.mrp.toLocaleString('en-IN')}</span>
              <span style="font-size: 0.85rem; color: var(--green-success); font-weight: 700;">You Save ₹${savingsAmount.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <!-- 50-Point Inspection Diagnostic Box -->
          <div class="diagnostic-box">
            <div class="diag-title">
              <i class="fas fa-clipboard-check"></i> Store 50-Point Diagnostic Inspection
            </div>

            <div class="diag-grid">
              <div class="diag-item"><i class="fas fa-check-circle diag-icon"></i> Display: 100% Original</div>
              <div class="diag-item"><i class="fas fa-check-circle diag-icon"></i> Touch & FaceID / FP: Working</div>
              <div class="diag-item"><i class="fas fa-check-circle diag-icon"></i> Cameras: Crystal Clear</div>
              <div class="diag-item"><i class="fas fa-check-circle diag-icon"></i> Motherboard: Unlocked & 5G</div>
            </div>

            <div class="battery-health-gauge">
              <div class="battery-header">
                <span style="color: var(--text-muted);">Verified Battery Health:</span>
                <strong style="color: var(--green-success);">${phone.batteryHealth}% Maximum Capacity</strong>
              </div>
              <div class="battery-bar-large">
                <div class="battery-bar-fill" style="width: ${phone.batteryHealth}%;"></div>
              </div>
            </div>
          </div>

          <!-- Inclusions / Specs -->
          <div style="font-size: 0.9rem; color: var(--text-muted);">
            <p><strong style="color: #fff;"><i class="fas fa-box-open" style="color: var(--cyan-primary);"></i> Included Accessories:</strong> ${phone.accessories}</p>
            <p style="margin-top: 6px;"><strong style="color: #fff;"><i class="fas fa-microchip" style="color: var(--cyan-primary);"></i> Configuration:</strong> ${phone.specs}</p>
          </div>

          <!-- Customer Action Buttons -->
          <div style="display: flex; gap: 14px; margin-top: 10px; flex-wrap: wrap;">
            <a href="${waLink}" target="_blank" class="btn btn-green btn-lg" style="background: linear-gradient(135deg, #25D366, #128C7E); color: #fff; flex: 1;">
              <i class="fab fa-whatsapp"></i> Buy / Inquire via WhatsApp
            </a>
            <a href="tel:+919876543210" class="btn btn-glass btn-lg">
              <i class="fas fa-phone-alt"></i> Call Store
            </a>
          </div>
        </div>
      </div>
    `;

    setupGalleryControls();
    modal.classList.add('active');
  }

  function setupGalleryControls() {
    const mainImg = document.getElementById('gallery-main-img');
    const counter = document.getElementById('gallery-counter-badge');
    const prevBtn = document.getElementById('gallery-prev-btn');
    const nextBtn = document.getElementById('gallery-next-btn');
    const thumbsRow = document.getElementById('gallery-thumbs-row');
    const stage = document.getElementById('gallery-stage-container');

    function showGalleryPhoto(index) {
      if (!currentGalleryImages || currentGalleryImages.length === 0) return;
      currentGalleryIndex = (index + currentGalleryImages.length) % currentGalleryImages.length;

      if (mainImg) {
        mainImg.style.opacity = '0.3';
        setTimeout(() => {
          mainImg.src = currentGalleryImages[currentGalleryIndex];
          mainImg.style.opacity = '1';
        }, 120);
      }

      if (counter) {
        counter.textContent = `${currentGalleryIndex + 1} / ${currentGalleryImages.length}`;
      }

      if (thumbsRow) {
        thumbsRow.querySelectorAll('.gallery-thumb-item').forEach((t, i) => {
          t.classList.toggle('active', i === currentGalleryIndex);
        });
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        playSFX('click');
        showGalleryPhoto(currentGalleryIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        playSFX('click');
        showGalleryPhoto(currentGalleryIndex + 1);
      });
    }

    if (thumbsRow) {
      thumbsRow.addEventListener('click', (e) => {
        const item = e.target.closest('.gallery-thumb-item');
        if (!item) return;
        const idx = parseInt(item.dataset.idx, 10);
        if (!isNaN(idx)) {
          playSFX('click');
          showGalleryPhoto(idx);
        }
      });
    }

    if (stage) {
      stage.addEventListener('click', () => {
        openLightbox(currentGalleryImages[currentGalleryIndex]);
      });
    }

    const onKeyDown = (e) => {
      const modal = document.getElementById('inspector-modal');
      if (!modal || !modal.classList.contains('active')) {
        window.removeEventListener('keydown', onKeyDown);
        return;
      }
      if (e.key === 'ArrowLeft') showGalleryPhoto(currentGalleryIndex - 1);
      if (e.key === 'ArrowRight') showGalleryPhoto(currentGalleryIndex + 1);
    };
    window.addEventListener('keydown', onKeyDown);
  }


  // ==========================================================================
  // ADMIN PORTAL, MULTI-IMAGE UPLOADER & MANAGEMENT ENGINE
  // ==========================================================================
  let currentEditingImages = [];

  // --- CLIENT-SIDE CANVAS IMAGE COMPRESSION ENGINE ---
  // Compresses high-res camera photos to crisp WebP/JPEG to guarantee localStorage quota safety
  function compressImageFile(file, maxWidth = 1200, maxHeight = 1200, quality = 0.82) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = () => reject(new Error('Failed to read image file'));
      reader.onload = (e) => {
        const img = new Image();
        img.onerror = () => reject(new Error('Invalid image data'));
        img.onload = () => {
          let width = img.width;
          let height = img.height;

          if (width > maxWidth || height > maxHeight) {
            if (width / height > maxWidth / maxHeight) {
              height = Math.round((height * maxWidth) / width);
              width = maxWidth;
            } else {
              width = Math.round((width * maxHeight) / height);
              height = maxHeight;
            }
          }

          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';
          ctx.drawImage(img, 0, 0, width, height);

          let dataUrl = canvas.toDataURL('image/webp', quality);
          if (!dataUrl || !dataUrl.startsWith('data:image/webp')) {
            dataUrl = canvas.toDataURL('image/jpeg', quality);
          }
          resolve(dataUrl);
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    });
  }

  function renderAdminThumbnails() {
    const grid = document.getElementById('admin-thumb-grid');
    const countSpan = document.getElementById('admin-img-count');
    if (!grid) return;
    grid.innerHTML = '';

    if (countSpan) countSpan.textContent = currentEditingImages.length;

    if (currentEditingImages.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); font-size: 0.85rem; padding: 18px; font-family: var(--font-sub);">
          <i class="fas fa-image" style="font-size: 1.4rem; color: var(--cyan-primary); display: block; margin-bottom: 6px;"></i>
          No photos added yet. Drag & drop files above, browse local photos, or paste image URLs!
        </div>`;
      return;
    }

    currentEditingImages.forEach((imgUrl, idx) => {
      const card = document.createElement('div');
      card.className = `admin-thumb-card ${idx === 0 ? 'is-primary' : ''}`;
      card.title = idx === 0 ? 'Primary Cover Photo (#1)' : `Photo #${idx + 1} - Click "Make Cover" to set as primary`;

      card.innerHTML = `
        <span class="admin-thumb-num-badge">#${idx + 1}</span>
        ${idx === 0 ? '<span class="admin-thumb-badge-primary"><i class="fas fa-star"></i> COVER</span>' : ''}
        <button type="button" class="admin-thumb-remove-btn" title="Delete this photo">
          <i class="fas fa-times"></i>
        </button>
        <img src="${imgUrl}" alt="Thumb ${idx + 1}" onerror="this.onerror=null; this.src=DEFAULT_PHONE_SVG">
        
        <div class="admin-thumb-actions-overlay">
          ${idx > 0 ? `<button type="button" class="admin-thumb-action-btn move-left-btn" title="Move Left"><i class="fas fa-chevron-left"></i></button>` : `<span style="width: 16px;"></span>`}
          ${idx !== 0 ? `<button type="button" class="admin-thumb-action-btn set-cover-btn" title="Set as Primary Cover"><i class="fas fa-star"></i> Make Cover</button>` : `<span style="font-size: 0.62rem; color: var(--cyan-primary); font-weight: 800; font-family: var(--font-sub);">MAIN COVER</span>`}
          ${idx < currentEditingImages.length - 1 ? `<button type="button" class="admin-thumb-action-btn move-right-btn" title="Move Right"><i class="fas fa-chevron-right"></i></button>` : `<span style="width: 16px;"></span>`}
        </div>
      `;

      // Set as Cover
      const setCoverBtn = card.querySelector('.set-cover-btn');
      if (setCoverBtn) {
        setCoverBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          playSFX('click');
          const [moved] = currentEditingImages.splice(idx, 1);
          currentEditingImages.unshift(moved);
          renderAdminThumbnails();
          showHUDToast(`Photo #${idx + 1} set as Primary Cover!`, 'info');
        });
      }

      // Move Left
      const moveLeftBtn = card.querySelector('.move-left-btn');
      if (moveLeftBtn) {
        moveLeftBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          playSFX('click');
          const temp = currentEditingImages[idx];
          currentEditingImages[idx] = currentEditingImages[idx - 1];
          currentEditingImages[idx - 1] = temp;
          renderAdminThumbnails();
        });
      }

      // Move Right
      const moveRightBtn = card.querySelector('.move-right-btn');
      if (moveRightBtn) {
        moveRightBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          playSFX('click');
          const temp = currentEditingImages[idx];
          currentEditingImages[idx] = currentEditingImages[idx + 1];
          currentEditingImages[idx + 1] = temp;
          renderAdminThumbnails();
        });
      }

      // Remove photo
      card.querySelector('.admin-thumb-remove-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        playSFX('hover');
        currentEditingImages.splice(idx, 1);
        renderAdminThumbnails();
        showHUDToast('Removed photo', 'warning');
      });

      grid.appendChild(card);
    });
  }

  async function handleFileSelection(files) {
    if (!files || files.length === 0) return;

    const availableSlots = 6 - currentEditingImages.length;
    if (availableSlots <= 0) {
      showHUDToast('Maximum 6 photos allowed per phone!', 'warning');
      return;
    }

    const filesToProcess = Array.from(files).slice(0, availableSlots);
    showHUDToast(`Optimizing & loading ${filesToProcess.length} image(s)...`, 'info');

    for (const file of filesToProcess) {
      if (!file.type.startsWith('image/')) {
        showHUDToast(`File "${file.name}" is not an image!`, 'danger');
        continue;
      }

      try {
        const compressedDataUrl = await compressImageFile(file);
        if (currentEditingImages.length < 6) {
          currentEditingImages.push(compressedDataUrl);
          renderAdminThumbnails();
        }
      } catch (err) {
        console.warn('Canvas compression fallback to standard DataURL:', err);
        const reader = new FileReader();
        reader.onload = (e) => {
          if (currentEditingImages.length < 6) {
            currentEditingImages.push(e.target.result);
            renderAdminThumbnails();
          }
        };
        reader.readAsDataURL(file);
      }
    }

    playSFX('success');
    renderAdminThumbnails();
    showHUDToast(`Added photo(s)! Total: ${currentEditingImages.length}/6 photos`, 'success');
  }

  function setupAdminImageUploader() {
    const dropzone = document.getElementById('admin-image-dropzone');
    const fileInput = document.getElementById('form-file-input');
    const triggerBtn = document.getElementById('trigger-file-select-btn');
    const addUrlBtn = document.getElementById('add-url-btn');
    const urlInput = document.getElementById('form-img-urls-input');
    const clearBtn = document.getElementById('clear-all-imgs-btn');

    if (triggerBtn && fileInput) {
      triggerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        fileInput.click();
      });

      fileInput.addEventListener('change', (e) => {
        handleFileSelection(e.target.files);
        fileInput.value = '';
      });
    }

    if (dropzone && fileInput) {
      dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.classList.add('drag-over');
      });

      dropzone.addEventListener('dragleave', () => dropzone.classList.remove('drag-over'));

      dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.classList.remove('drag-over');
        handleFileSelection(e.dataTransfer.files);
      });

      dropzone.addEventListener('click', (e) => {
        if (e.target.id === 'trigger-file-select-btn' || e.target.closest('#trigger-file-select-btn')) return;
        fileInput.click();
      });
    }

    if (addUrlBtn && urlInput) {
      const handleAddUrl = () => {
        const val = urlInput.value.trim();
        if (!val) return;

        const urls = val.split(/[\n,\s]+/).map(u => u.trim()).filter(u => u.startsWith('http://') || u.startsWith('https://') || u.startsWith('data:'));
        if (urls.length === 0) {
          showHUDToast('Please enter a valid HTTP/HTTPS image URL!', 'warning');
          return;
        }

        let addedCount = 0;
        urls.forEach(u => {
          if (currentEditingImages.length < 6) {
            currentEditingImages.push(u);
            addedCount++;
          }
        });

        if (addedCount > 0) {
          playSFX('success');
          renderAdminThumbnails();
          urlInput.value = '';
          showHUDToast(`Added ${addedCount} photo(s)! Total: ${currentEditingImages.length}/6`, 'success');
        } else {
          showHUDToast('Maximum 6 photos limit reached!', 'warning');
        }
      };

      addUrlBtn.addEventListener('click', handleAddUrl);
      urlInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleAddUrl();
        }
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (currentEditingImages.length > 0 && confirm('Clear all uploaded photos for this phone listing?')) {
          currentEditingImages = [];
          renderAdminThumbnails();
          playSFX('click');
          showHUDToast('Cleared all uploaded photos', 'warning');
        }
      });
    }

    renderAdminThumbnails();
  }

  function setupAdminPortal() {
    const modal = document.getElementById('admin-modal');
    const authSection = document.getElementById('admin-auth-section');
    const panelSection = document.getElementById('admin-panel-section');
    const pinInput = document.getElementById('admin-pin-input');
    const loginForm = document.getElementById('admin-login-form');
    const quickFillBtn = document.getElementById('admin-quick-fill-pin');
    const loginError = document.getElementById('admin-login-error');
    const logoutBtn = document.getElementById('admin-logout-btn');
    const searchInput = document.getElementById('admin-search-input');

    setupAdminImageUploader();

    // Prominent Admin Access Buttons (Both Header Navigation and Footer Link)
    const adminBtns = [
      document.getElementById('admin-portal-btn'),
      document.getElementById('admin-nav-btn')
    ].filter(Boolean);

    adminBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        playSFX('click');
        if (modal) modal.classList.add('active');
        if (isAdminAuthenticated) {
          if (authSection) authSection.style.display = 'none';
          if (panelSection) panelSection.style.display = 'block';
          renderAdminInventoryTable();
        } else {
          if (authSection) authSection.style.display = 'block';
          if (panelSection) panelSection.style.display = 'none';
          if (pinInput) setTimeout(() => pinInput.focus(), 150);
        }
      });
    });

    // Quick PIN Auto-fill Button
    if (quickFillBtn && pinInput) {
      quickFillBtn.addEventListener('click', (e) => {
        e.preventDefault();
        pinInput.value = 'admin123';
        playSFX('click');
        showHUDToast('PIN Auto-filled: admin123', 'info');
      });
    }

    // Submit PIN via Form (Button Click OR Enter Key)
    if (loginForm && pinInput) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (pinInput.value.trim() === 'admin123') {
          playSFX('success');
          isAdminAuthenticated = true;
          sessionStorage.setItem('maa_admin_auth', 'true');
          if (loginError) loginError.style.display = 'none';
          if (authSection) authSection.style.display = 'none';
          if (panelSection) panelSection.style.display = 'block';
          pinInput.value = '';
          renderAdminInventoryTable();
          showHUDToast('⚡ Admin Authenticated Live!', 'success');
        } else {
          playSFX('hover');
          if (loginError) loginError.style.display = 'block';
          showHUDToast('Incorrect PIN! Try: admin123', 'danger');
        }
      });
    }

    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        isAdminAuthenticated = false;
        sessionStorage.removeItem('maa_admin_auth');
        if (authSection) authSection.style.display = 'block';
        if (panelSection) panelSection.style.display = 'none';
        playSFX('click');
        showHUDToast('Admin Session Logged Out', 'warning');
      });
    }

    // Live Search input listener
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        renderAdminInventoryTable();
      });
    }

    // Reset Demo Data
    const resetBtn = document.getElementById('admin-reset-demo-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all inventory to original demo sample data with 6 photos each?')) {
          playSFX('success');
          inventory = SAMPLE_INVENTORY.map(p => ensurePhoneMultiImages(p));
          saveInventory();
          renderAdminInventoryTable();
          showHUDToast('🔄 Inventory Reset to Sample Data Live!', 'success');
        }
      });
    }

    // Admin Tab Toggle (List vs Add Form)
    const listBtn = document.getElementById('admin-tab-list-btn');
    const addBtn = document.getElementById('admin-tab-add-btn');
    const listView = document.getElementById('admin-view-list');
    const formView = document.getElementById('admin-view-form');

    if (listBtn && addBtn && listView && formView) {
      listBtn.addEventListener('click', () => {
        listBtn.classList.add('active');
        addBtn.classList.remove('active');
        listView.style.display = 'block';
        formView.style.display = 'none';
        playSFX('click');
      });

      addBtn.addEventListener('click', () => {
        addBtn.classList.add('active');
        listBtn.classList.remove('active');
        listView.style.display = 'none';
        formView.style.display = 'block';
        const formTitle = document.getElementById('admin-form-title');
        if (formTitle) formTitle.textContent = 'UPLOAD NEW MOBILE PHONE';
        const phoneForm = document.getElementById('admin-phone-form');
        if (phoneForm) phoneForm.reset();
        const phoneIdInput = document.getElementById('form-phone-id');
        if (phoneIdInput) phoneIdInput.value = '';
        currentEditingImages = [];
        renderAdminThumbnails();
        playSFX('click');
      });
    }

    const cancelBtn = document.getElementById('form-cancel-btn');
    if (cancelBtn && listBtn) {
      cancelBtn.addEventListener('click', () => {
        listBtn.click();
      });
    }

    // Admin Phone Upload / Edit Form Submission
    const phoneForm = document.getElementById('admin-phone-form');
    if (phoneForm) {
      phoneForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (currentEditingImages.length === 0) {
          showHUDToast('Please upload at least 1 photo for this phone!', 'warning');
          return;
        }

        const existingId = document.getElementById('form-phone-id').value;
        const brand = document.getElementById('form-brand').value;
        const title = document.getElementById('form-title').value;
        const category = document.getElementById('form-category').value;
        const price = Number(document.getElementById('form-price').value);
        const mrp = Number(document.getElementById('form-mrp').value);
        const conditionGrade = document.getElementById('form-condition-grade').value;
        const batteryHealth = Number(document.getElementById('form-battery').value) || 100;
        const specs = document.getElementById('form-specs').value;
        const accessories = document.getElementById('form-accessories').value;
        const isFloating = document.getElementById('form-is-floating').checked;

        const images = [...currentEditingImages];
        const img = images[0] || DEFAULT_PHONE_SVG;

        if (existingId) {
          // Edit Existing
          const idx = inventory.findIndex(p => p.id === existingId);
          if (idx !== -1) {
            inventory[idx] = {
              ...inventory[idx],
              brand, title, category, price, mrp, conditionGrade, batteryHealth, specs, img, images, accessories, isFloating
            };
            showHUDToast(`⚡ Updated "${title}" with ${images.length} photos live!`, 'success');
          }
        } else {
          // Add New Phone
          const newPhone = {
            id: `phone-${Date.now()}`,
            brand, title, category, price, mrp, conditionGrade, batteryHealth, specs, img, images, accessories, isFloating,
            stockStatus: 'In Stock'
          };
          inventory.unshift(newPhone);
          showHUDToast(`🚀 Added "${title}" with ${images.length} photos live to store!`, 'success');
        }

        playSFX('success');
        saveInventory();
        if (listBtn) listBtn.click();
      });
    }
  }

  function openEditPhoneForm(phone) {
    const addBtn = document.getElementById('admin-tab-add-btn');
    if (addBtn) addBtn.click();

    const formTitle = document.getElementById('admin-form-title');
    if (formTitle) formTitle.textContent = `EDIT: ${phone.title}`;

    ensurePhoneMultiImages(phone);

    const phoneIdInput = document.getElementById('form-phone-id');
    if (phoneIdInput) phoneIdInput.value = phone.id;
    const formBrand = document.getElementById('form-brand');
    if (formBrand) formBrand.value = phone.brand;
    const formTitleInput = document.getElementById('form-title');
    if (formTitleInput) formTitleInput.value = phone.title;
    const formCategory = document.getElementById('form-category');
    if (formCategory) formCategory.value = phone.category;
    const formPrice = document.getElementById('form-price');
    if (formPrice) formPrice.value = phone.price;
    const formMrp = document.getElementById('form-mrp');
    if (formMrp) formMrp.value = phone.mrp;
    const formCondition = document.getElementById('form-condition-grade');
    if (formCondition) formCondition.value = phone.conditionGrade;
    const formBattery = document.getElementById('form-battery');
    if (formBattery) formBattery.value = phone.batteryHealth;
    const formSpecs = document.getElementById('form-specs');
    if (formSpecs) formSpecs.value = phone.specs;
    const formAcc = document.getElementById('form-accessories');
    if (formAcc) formAcc.value = phone.accessories;
    const formFloat = document.getElementById('form-is-floating');
    if (formFloat) formFloat.checked = phone.isFloating;

    currentEditingImages = phone.images ? [...phone.images] : [phone.img];
    renderAdminThumbnails();
  }

  // --- RENDER LIVE INVENTORY MANAGEMENT TABLE ---
  function renderAdminInventoryTable() {
    const tbody = document.getElementById('admin-inventory-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';

    const q = (document.getElementById('admin-search-input')?.value || '').trim().toLowerCase();

    let list = inventory;
    if (q) {
      list = inventory.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.brand.toLowerCase().includes(q) || 
        (p.conditionGrade && p.conditionGrade.toLowerCase().includes(q)) ||
        (p.category && p.category.toLowerCase().includes(q))
      );
    }

    if (list.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align: center; color: var(--text-muted); padding: 32px 16px; font-family: var(--font-sub);">
            <i class="fas fa-search" style="font-size: 1.8rem; margin-bottom: 8px; display: block; color: var(--cyan-primary);"></i>
            No mobile inventory matches "${q}"
          </td>
        </tr>`;
      return;
    }

    list.forEach(phone => {
      ensurePhoneMultiImages(phone);
      const tr = document.createElement('tr');
      const photoCount = (phone.images && phone.images.length) || 1;
      const isNew = phone.category === 'new';

      tr.innerHTML = `
        <td>
          <div class="admin-table-model-cell">
            <div class="admin-table-thumb-wrap" title="${photoCount} photos available">
              <img src="${phone.img || phone.images[0]}" alt="${phone.title}" onerror="this.onerror=null; this.src=DEFAULT_PHONE_SVG">
              <span class="admin-table-photo-count"><i class="fas fa-images"></i> ${photoCount}</span>
            </div>
            <div>
              <strong style="color: var(--text-main); display: block; font-size: 0.92rem;">${phone.title}</strong>
              <span style="color: var(--cyan-primary); font-size: 0.75rem; font-family: var(--font-sub); text-transform: uppercase;">${phone.brand} &bull; ${phone.specs || ''}</span>
            </div>
          </div>
        </td>
        <td>
          <span class="hud-badge ${isNew ? 'hud-badge-green' : 'hud-badge-cyan'}" style="font-size: 0.72rem; padding: 2px 8px;">
            ${isNew ? 'BRAND NEW' : 'PRE-OWNED'}
          </span>
        </td>
        <td>
          <strong style="color: var(--text-main);">₹${phone.price.toLocaleString('en-IN')}</strong>
          <span style="font-size: 0.75rem; color: var(--text-dim); text-decoration: line-through; display: block;">MRP ₹${phone.mrp.toLocaleString('en-IN')}</span>
        </td>
        <td>
          <span style="font-size: 0.82rem; color: var(--text-muted); display: block;">${phone.conditionGrade}</span>
          <span style="font-size: 0.75rem; color: var(--green-success);"><i class="fas fa-battery-half"></i> ${phone.batteryHealth}%</span>
        </td>
        <td>
          <span style="color: var(--green-success); font-size: 0.82rem; font-weight: 700;">
            <i class="fas fa-check-circle"></i> ${phone.stockStatus || 'In Stock'}
          </span>
        </td>
        <td>
          <label style="display: flex; align-items: center; gap: 6px; cursor: pointer;">
            <input type="checkbox" class="admin-toggle-floating-cb" data-id="${phone.id}" ${phone.isFloating ? 'checked' : ''}>
            <span style="font-size: 0.8rem; font-weight: 700; color: ${phone.isFloating ? 'var(--cyan-primary)' : 'var(--text-dim)'};">
              ${phone.isFloating ? 'Orbiting' : 'Off'}
            </span>
          </label>
        </td>
        <td>
          <div class="admin-actions-cell">
            <button type="button" class="btn btn-cyan btn-sm admin-edit-phone-btn" data-id="${phone.id}" title="Edit phone details and photos">
              <i class="fas fa-edit"></i> Edit
            </button>
            <button type="button" class="btn btn-glass btn-sm admin-inspect-phone-btn" data-id="${phone.id}" title="View 5-6 photos in customer inspector">
              <i class="fas fa-eye"></i> View
            </button>
            <button type="button" class="btn btn-glass btn-sm admin-delete-phone-btn" data-id="${phone.id}" title="Delete listing" style="color: var(--magenta-accent);">
              <i class="fas fa-trash-can"></i>
            </button>
          </div>
        </td>
      `;

      // Floating toggle
      const floatCb = tr.querySelector('.admin-toggle-floating-cb');
      if (floatCb) {
        floatCb.addEventListener('change', (e) => {
          phone.isFloating = e.target.checked;
          saveInventory();
          playSFX('click');
          showHUDToast(`Updated "${phone.title}" homepage floating status!`, 'info');
        });
      }

      // Edit
      const editBtn = tr.querySelector('.admin-edit-phone-btn');
      if (editBtn) {
        editBtn.addEventListener('click', () => {
          playSFX('click');
          openEditPhoneForm(phone);
        });
      }

      // View
      const inspectBtn = tr.querySelector('.admin-inspect-phone-btn');
      if (inspectBtn) {
        inspectBtn.addEventListener('click', () => {
          playSFX('click');
          openPhoneInspectorModal(phone.id);
        });
      }

      // Delete
      const deleteBtn = tr.querySelector('.admin-delete-phone-btn');
      if (deleteBtn) {
        deleteBtn.addEventListener('click', () => {
          if (confirm(`Are you sure you want to permanently delete "${phone.title}"?`)) {
            playSFX('hover');
            inventory = inventory.filter(p => p.id !== phone.id);
            saveInventory();
            showHUDToast(`Deleted "${phone.title}" from store`, 'danger');
          }
        });
      }

      tbody.appendChild(tr);
    });
  }

  function openLightbox(src) {
    const modal = document.getElementById('gallery-lightbox-modal');
    const img = document.getElementById('lightbox-img');
    if (modal && img) {
      img.src = src;
      modal.classList.add('active');
      playSFX('click');
    }
  }

  function closeLightbox() {
    const modal = document.getElementById('gallery-lightbox-modal');
    if (modal) modal.classList.remove('active');
  }

  // --- CUSTOMER USER AUTHENTICATION SYSTEM ---
  function loadUser() {
    const saved = getStorageItem(USER_STORAGE_KEY);
    if (saved) {
      try {
        currentUser = JSON.parse(saved);
      } catch (e) {
        currentUser = null;
      }
    }
  }

  function saveUser() {
    if (currentUser) {
      setStorageItem(USER_STORAGE_KEY, JSON.stringify(currentUser));
    } else {
      removeStorageItem(USER_STORAGE_KEY);
    }
    updateUserUI();
  }

  function updateUserUI() {
    const btn = document.getElementById('user-auth-btn');
    const textSpan = document.getElementById('user-auth-btn-text');

    if (currentUser) {
      btn.className = 'btn btn-glass btn-sm';
      if (currentUser.method === 'google') {
        btn.innerHTML = `<i class="fab fa-google" style="color: #4285F4;"></i> <span>${currentUser.name}</span>`;
      } else {
        btn.innerHTML = `<i class="fas fa-mobile-screen" style="color: var(--green-success);"></i> <span>${currentUser.name}</span>`;
      }
    } else {
      btn.className = 'btn btn-cyan btn-sm';
      btn.innerHTML = `<i class="fas fa-user"></i> <span id="user-auth-btn-text">Sign In</span>`;
    }
  }

  function setupUserAuth() {
    const authBtn = document.getElementById('user-auth-btn');
    const modal = document.getElementById('user-auth-modal');
    const googleTabBtn = document.getElementById('auth-tab-google-btn');
    const mobileTabBtn = document.getElementById('auth-tab-mobile-btn');
    const googlePanel = document.getElementById('auth-panel-google');
    const mobilePanel = document.getElementById('auth-panel-mobile');
    
    const googleActionBtn = document.getElementById('google-signin-action-btn');
    const sendOtpBtn = document.getElementById('send-otp-btn');
    const verifyOtpBtn = document.getElementById('verify-otp-btn');
    const phoneInput = document.getElementById('auth-phone-input');
    const otpInput = document.getElementById('auth-otp-input');
    const phoneStep = document.getElementById('otp-step-phone');
    const codeStep = document.getElementById('otp-step-code');
    const sentPhoneDisplay = document.getElementById('sent-phone-display');
    const otpBackBtn = document.getElementById('otp-back-btn');

    updateUserUI();

    if (authBtn && modal) {
      authBtn.addEventListener('click', () => {
        playSFX('click');
        if (currentUser) {
          if (confirm(`Logged in as: ${currentUser.name}\nDo you want to log out?`)) {
            currentUser = null;
            saveUser();
            playSFX('click');
          }
        } else {
          modal.classList.add('active');
        }
      });
    }

    // Tab Switchers
    if (googleTabBtn && mobileTabBtn && googlePanel && mobilePanel) {
      googleTabBtn.addEventListener('click', () => {
        playSFX('click');
        googleTabBtn.classList.add('active');
        mobileTabBtn.classList.remove('active');
        googlePanel.style.display = 'block';
        mobilePanel.style.display = 'none';
      });

      mobileTabBtn.addEventListener('click', () => {
        playSFX('click');
        mobileTabBtn.classList.add('active');
        googleTabBtn.classList.remove('active');
        mobilePanel.style.display = 'block';
        googlePanel.style.display = 'none';
      });
    }

    // Google Login Simulator
    if (googleActionBtn && modal) {
      googleActionBtn.addEventListener('click', () => {
        playSFX('success');
        currentUser = {
          name: 'Rahul Sharma',
          email: 'rahul.sharma@gmail.com',
          method: 'google'
        };
        saveUser();
        modal.classList.remove('active');
        alert('Successfully logged in with Google as Rahul Sharma!');
      });
    }

    // Mobile OTP Simulator
    if (sendOtpBtn && phoneInput && sentPhoneDisplay && phoneStep && codeStep && otpInput) {
      sendOtpBtn.addEventListener('click', () => {
        const num = phoneInput.value.trim();
        if (!num || num.length !== 10 || isNaN(num)) {
          alert('Please enter a valid 10-digit mobile number!');
          return;
        }

        playSFX('click');
        sentPhoneDisplay.textContent = `+91 ${num}`;
        phoneStep.style.display = 'none';
        codeStep.style.display = 'block';
        otpInput.value = '1234'; // Auto-fill demo OTP code
      });
    }

    if (otpBackBtn && codeStep && phoneStep) {
      otpBackBtn.addEventListener('click', () => {
        playSFX('click');
        codeStep.style.display = 'none';
        phoneStep.style.display = 'block';
      });
    }

    if (verifyOtpBtn && otpInput && phoneInput && modal && phoneStep && codeStep) {
      verifyOtpBtn.addEventListener('click', () => {
        const code = otpInput.value.trim();
        const num = phoneInput.value.trim();

        if (code === '1234' || code.length === 4) {
          playSFX('success');
          currentUser = {
            name: `+91 ${num}`,
            phone: num,
            method: 'mobile'
          };
          saveUser();
          modal.classList.remove('active');
          phoneStep.style.display = 'block';
          codeStep.style.display = 'none';
          phoneInput.value = '';
          otpInput.value = '';
          alert(`Mobile OTP verified! Logged in as +91 ${num}`);
        } else {
          alert('Invalid OTP code! Demo OTP is 1234');
        }
      });
    }
  }

  // --- MODAL CLOSING LOGIC ---
  function setupModalEvents() {
    const inspectorClose = document.getElementById('inspector-modal-close');
    const inspectorModal = document.getElementById('inspector-modal');
    const adminClose = document.getElementById('admin-modal-close');
    const adminModal = document.getElementById('admin-modal');
    const userAuthClose = document.getElementById('user-auth-modal-close');
    const userAuthModal = document.getElementById('user-auth-modal');
    const lightboxClose = document.getElementById('lightbox-close-btn');
    const lightboxModal = document.getElementById('gallery-lightbox-modal');

    if (inspectorClose && inspectorModal) inspectorClose.addEventListener('click', () => inspectorModal.classList.remove('active'));
    if (adminClose && adminModal) adminClose.addEventListener('click', () => adminModal.classList.remove('active'));
    if (userAuthClose && userAuthModal) userAuthClose.addEventListener('click', () => userAuthModal.classList.remove('active'));
    if (lightboxClose && lightboxModal) lightboxClose.addEventListener('click', () => lightboxModal.classList.remove('active'));

    window.addEventListener('click', (e) => {
      if (inspectorModal && e.target === inspectorModal) inspectorModal.classList.remove('active');
      if (adminModal && e.target === adminModal) adminModal.classList.remove('active');
      if (userAuthModal && e.target === userAuthModal) userAuthModal.classList.remove('active');
      if (lightboxModal && e.target === lightboxModal) lightboxModal.classList.remove('active');
    });
  }

  // RUN ON DOM READY
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
