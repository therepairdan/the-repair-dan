'use strict';

const STORAGE_KEY = 'repairDanDataComplete';

const DEFAULT_DATA = {
    iPhone: {
        models: [
            { name: "iPhone 8", battery: 45, screen: 65, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "iPhone 8 Plus", battery: 45, screen: 65, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "iPhone X", battery: 45, screen: 65, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "iPhone XS", battery: 45, screen: 65, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "iPhone XS Max", battery: 45, screen: 90, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "iPhone XR", battery: 45, screen: 65, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "iPhone 11", battery: 45, screen: 65, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "iPhone 11 Pro", battery: 45, screen: 90, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "iPhone 11 Pro Max", battery: 45, screen: 90, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "iPhone 12", battery: 45, screen: 85, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "iPhone 12 Mini", battery: 45, screen: 85, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "iPhone 12 Pro", battery: 45, screen: 110, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "iPhone 12 Pro Max", battery: 45, screen: 110, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "iPhone 13", battery: 50, screen: 85, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "iPhone 13 Mini", battery: 50, screen: 85, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "iPhone 13 Pro", battery: 50, screen: 110, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "iPhone 13 Pro Max", battery: 50, screen: 110, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "iPhone SE (1st Gen)", battery: 45, screen: 65, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "iPhone SE (2nd Gen)", battery: 45, screen: 65, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "iPhone SE (3rd Gen)", battery: 45, screen: 65, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "iPhone 14", battery: 50, screen: 110, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "iPhone 14 Plus", battery: 50, screen: 110, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "iPhone 14 Pro", battery: 50, screen: 135, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "iPhone 14 Pro Max", battery: 50, screen: 135, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "iPhone 15", battery: 60, screen: 110, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "iPhone 15 Plus", battery: 60, screen: 110, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "iPhone 15 Pro", battery: 60, screen: 135, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "iPhone 15 Pro Max", battery: 60, screen: 135, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "iPhone 16", battery: 60, screen: 110, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "iPhone 16 Plus", battery: 60, screen: 110, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "iPhone 16 Pro", battery: 60, screen: 135, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "iPhone 16 Pro Max", battery: 60, screen: 135, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 }
        ]
    },
    Samsung: {
        models: [
            { name: "Galaxy A12", battery: 50, screen: 70, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "Galaxy A13", battery: 50, screen: 70, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "Galaxy A50", battery: 50, screen: 70, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "Galaxy A51", battery: 50, screen: 70, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "Galaxy A52", battery: 50, screen: 70, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "Galaxy A53", battery: 50, screen: 70, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "Galaxy A54", battery: 50, screen: 70, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "Galaxy A55", battery: 50, screen: 70, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "Galaxy S20", battery: 60, screen: 100, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "Galaxy S20+", battery: 60, screen: 100, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "Galaxy S20 Ultra", battery: 70, screen: 120, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "Galaxy S21", battery: 60, screen: 100, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "Galaxy S21+", battery: 60, screen: 100, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "Galaxy S21 Ultra", battery: 70, screen: 120, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "Galaxy S22", battery: 60, screen: 100, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "Galaxy S22+", battery: 60, screen: 100, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "Galaxy S22 Ultra", battery: 70, screen: 120, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "Galaxy S23", battery: 60, screen: 100, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "Galaxy S23+", battery: 60, screen: 100, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "Galaxy S23 Ultra", battery: 70, screen: 120, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "Galaxy S24", battery: 60, screen: 100, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "Galaxy S24+", battery: 60, screen: 100, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "Galaxy S24 Ultra", battery: 70, screen: 120, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "Galaxy S25", battery: 60, screen: 100, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "Galaxy S25+", battery: 60, screen: 100, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 },
            { name: "Galaxy S25 Ultra", battery: 70, screen: 120, backGlass: 50, camera: 45, waterDamage: 35, deepClean: 15 }
        ]
    },
    Console: {
        PS5: [
            { name: "Stick Drift (Controller)", recommended: 40, comingSoon: false },
            { name: "Button Replacement", recommended: 35, comingSoon: false },
            { name: "Fan Cleaning", recommended: 65, comingSoon: false },
            { name: "Deep Clean", recommended: 40, comingSoon: false },
            { name: "HDMI Port Repair", recommended: 75, comingSoon: false },
            { name: "Power Supply Issue", recommended: 75, comingSoon: false }
        ],
        Xbox: [
            { name: "Stick Drift (Controller)", recommended: 35, comingSoon: false },
            { name: "Button Replacement", recommended: 35, comingSoon: false },
            { name: "Fan Cleaning", recommended: 60, comingSoon: false },
            { name: "Deep Clean", recommended: 35, comingSoon: false },
            { name: "HDMI Port Repair", recommended: 70, comingSoon: false },
            { name: "Power Supply", recommended: 70, comingSoon: false }
        ],
        Switch: [
            { name: "Joy-Con Stick Drift", recommended: 35, comingSoon: false },
            { name: "Joy-Con Button Fix", recommended: 40, comingSoon: false },
            { name: "Battery Replacement", recommended: 45, comingSoon: false },
            { name: "Deep Clean", recommended: 30, comingSoon: false },
            { name: "Console Charging Port", recommended: 55, comingSoon: false }
        ]
    },
    Bicycle: {
        wheels: [
            { name: "Puncture Repair", recommended: 12 },
            { name: "New Tyre Fitting", recommended: 15 },
            { name: "Wheel True", recommended: 30 },
            { name: "Spoke Replacement", recommended: 25 }
        ],
        brakes: [
            { name: "Brake Adjustment", recommended: 15 },
            { name: "Brake Pad Replacement", recommended: 18 },
            { name: "Brake Cable Replacement", recommended: 20 },
            { name: "Hydraulic Brake Bleed", recommended: 35 }
        ],
        drivetrain: [
            { name: "Chain Replacement", recommended: 18 },
            { name: "Derailleur Adjustment", recommended: 18 },
            { name: "Gear Cable Replacement", recommended: 20 },
            { name: "Drivetrain Deep Clean", recommended: 35 }
        ],
        services: [
            { name: "Safety Check", recommended: 15 },
            { name: "Mini Service", recommended: 50 },
            { name: "Standard Service", recommended: 80 },
            { name: "Full Overhaul", recommended: 130 }
        ]
    }
};

function getPriceData() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch(e) {
            return DEFAULT_DATA;
        }
    }
    return DEFAULT_DATA;
}

let currentCategory, currentBrand, currentModel, currentRepair, currentPrice;

window.addEventListener('load', function () {
    history.replaceState({ step: 'category' }, '');
    
    // Lock calendar so users cannot select previous dates
    const dateInput = document.getElementById('book-date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }
});

window.addEventListener('popstate', function (e) {
    const step = e.state && e.state.step;
    if (step) goBack(step);
});

function selectCategory(category) {
    currentCategory = category;
    document.getElementById('step-category').classList.add('hidden');
    document.getElementById('selected-category').textContent = category;
    loadBrands(category);
    document.getElementById('step-brand').classList.remove('hidden');
    history.pushState({ step: 'brand' }, '');
}

function loadBrands(category) {
    const container = document.getElementById('brand-container');
    container.innerHTML = '';
    
    let brands = [];
    if (category === '📱 Phones') {
        brands = ['iPhone', 'Samsung'];
    } else if (category === '🎮 Consoles') {
        brands = ['PS5', 'Xbox', 'Switch'];
    } else if (category === '🚴 Bikes') {
        brands = ['All Repairs'];
    }

    brands.forEach(brand => {
        const btn = document.createElement('button');
        btn.className = 'brand-btn';
        btn.textContent = brand === 'All Repairs' ? '🚴 View All Bike Repairs' : 
                         brand === 'PS5' ? '🎮 PlayStation 5' :
                         brand === 'Xbox' ? '🎮 Xbox Series X/S' :
                         brand === 'Switch' ? '🎮 Nintendo Switch' : brand;
        btn.onclick = () => selectBrand(brand);
        container.appendChild(btn);
    });
}

function selectBrand(brand) {
    currentBrand = brand;
    document.getElementById('step-brand').classList.add('hidden');
    document.getElementById('selected-brand').textContent = brand;
    
    if (currentCategory === '🚴 Bikes') {
        currentModel = 'Bicycle';
        document.getElementById('selected-model').textContent = 'Bicycle Repairs';
        loadBikeRepairs();
        document.getElementById('step-repair').classList.remove('hidden');
        history.pushState({ step: 'repair' }, '');
    } else if (currentCategory === '🎮 Consoles') {
        currentModel = brand;
        document.getElementById('selected-model').textContent = `Console • ${brand}`;
        loadRepairs();
        document.getElementById('step-repair').classList.remove('hidden');
        history.pushState({ step: 'repair' }, '');
    } else {
        loadModels(brand);
        document.getElementById('step-model').classList.remove('hidden');
        history.pushState({ step: 'model' }, '');
    }
}

function loadModels(brand) {
    const container = document.getElementById('model-container');
    container.innerHTML = '';
    const priceData = getPriceData();
    const models = priceData[brand] && priceData[brand].models ? priceData[brand].models : [];

    if (models.length === 0) {
        container.innerHTML = '<p style="color: #CBD5E1; text-align: center;">No models config found in storage.</p>';
        return;
    }

    models.forEach(model => {
        const btn = document.createElement('button');
        btn.className = 'model-btn';
        btn.textContent = model.name;
        btn.onclick = () => selectModel(model.name);
        container.appendChild(btn);
    });
}

function selectModel(modelName) {
    currentModel = modelName;
    document.getElementById('step-model').classList.add('hidden');
    document.getElementById('selected-model').textContent = `${currentBrand} • ${modelName}`;
    loadRepairs();
    document.getElementById('step-repair').classList.remove('hidden');
    history.pushState({ step: 'repair' }, '');
}

function loadRepairs() {
    const container = document.getElementById('repair-container');
    container.innerHTML = '';
    const priceData = getPriceData();

    let repairs = [];
    if (currentCategory === '📱 Phones') {
        const brandData = priceData[currentBrand];
        if (brandData && brandData.models) {
            const model = brandData.models.find(m => m.name === currentModel);
            if (model) {
                repairs = [
                    { name: 'Battery Replacement', recommended: model.battery },
                    { name: 'Screen Replacement', recommended: model.screen },
                    { name: 'Back Glass Repair', recommended: model.backGlass || 50 },
                    { name: 'Camera Repair', recommended: model.camera || 45 },
                    { name: 'Water Damage Treatment', recommended: model.waterDamage || 35 },
                    { name: 'Deep Clean', recommended: model.deepClean || 15 }
                ];
            }
        }
    } else if (currentCategory === '🎮 Consoles') {
        repairs = (priceData.Console && priceData.Console[currentBrand]) ? priceData.Console[currentBrand] : [];
    }

    if (repairs.length === 0) {
        container.innerHTML = '<p style="color: #CBD5E1; text-align: center;">No repairs set up for this device.</p>';
        return;
    }

    repairs.forEach(repair => {
        const btn = document.createElement('button');
        btn.className = 'fault-btn';
        const comingSoonLabel = repair.comingSoon ? ' (Coming Soon)' : '';
        btn.textContent = repair.name + comingSoonLabel;
        btn.disabled = repair.comingSoon;
        if (repair.comingSoon) {
            btn.style.opacity = '0.5';
            btn.style.cursor = 'not-allowed';
        }
        btn.onclick = () => {
            if (!repair.comingSoon) {
                selectRepair(repair.name, repair.recommended);
            }
        };
        container.appendChild(btn);
    });
}

function loadBikeRepairs() {
    const container = document.getElementById('repair-container');
    container.innerHTML = '';
    const priceData = getPriceData();

    if (!priceData.Bicycle) return;

    const allRepairs = [
        ...(priceData.Bicycle.wheels || []),
        ...(priceData.Bicycle.brakes || []),
        ...(priceData.Bicycle.drivetrain || []),
        ...(priceData.Bicycle.services || [])
    ];

    allRepairs.forEach(repair => {
        const btn = document.createElement('button');
        btn.className = 'fault-btn';
        btn.textContent = repair.name;
        btn.onclick = () => selectRepair(repair.name, repair.recommended);
        container.appendChild(btn);
    });
}

function selectRepair(repairName, price) {
    currentRepair = repairName;
    currentPrice = price;
    document.getElementById('step-repair').classList.add('hidden');
    showPrice(repairName, price);
    document.getElementById('step-result').classList.remove('hidden');
    history.pushState({ step: 'result' }, '');
}

function showPrice(repairName, price) {
    let resultHTML = `
        <div style="text-align: center;">
            <div class="price-tag">£${price}</div>
            <div class="explanation">
                <strong>${repairName}</strong><br><br>
                ✅ Professional repair service<br>
                ✅ 3-month warranty included<br>
                ℹ️ Price subject to parts availability
            </div>
        </div>
    `;
    document.getElementById('result-content').innerHTML = resultHTML;
}

function goToBooking() {
    document.getElementById('step-result').classList.add('hidden');
    
    // Set text banner summary inside booking layout
    const itemSummary = currentCategory === '🚴 Bikes' ? `${currentRepair}` : `${currentModel} • ${currentRepair}`;
    document.getElementById('booking-summary-banner').textContent = `${itemSummary} (Est: £${currentPrice})`;
    
    document.getElementById('step-booking').classList.remove('hidden');
    history.pushState({ step: 'booking' }, '');
}

function handleFormSubmission(event) {
    event.preventDefault();
    
    const name = document.getElementById('cust-name').value.trim();
    const phone = document.getElementById('cust-phone').value.trim();
    const date = document.getElementById('book-date').value;
    const time = document.getElementById('book-time').value;
    const notes = document.getElementById('cust-notes').value.trim();
    
    // Render dynamic completion card detailing what was requested
    const summaryHTML = `
        <div style="background: rgba(15, 23, 42, 0.4); padding: 15px; border-radius: 8px; text-align: left; margin: 15px 0; border: 1px solid rgba(255,255,255,0.05);">
            <p><strong>Customer:</strong> ${name}</p>
            <p><strong>Contact:</strong> ${phone}</p>
            <p><strong>Service:</strong> ${currentModel} - ${currentRepair}</p>
            <p><strong>Requested Slot:</strong> ${date} during ${time}</p>
            ${notes ? `<p><strong>Notes:</strong> ${notes}</p>` : ''}
        </div>
    `;
    
    document.getElementById('success-message-content').innerHTML = summaryHTML;
    
    // Hide standard forms, show success splash screen
    document.getElementById('step-booking').classList.add('hidden');
    document.getElementById('step-success').classList.remove('hidden');
    history.pushState({ step: 'success' }, '');
    
    // Optional: Reset form fields for future sessions
    document.getElementById('repair-booking-form').reset();
}

function resetWizard() {
    document.querySelectorAll('.card').forEach(card => card.classList.add('hidden'));
    document.getElementById('step-category').classList.remove('hidden');
    history.pushState({ step: 'category' }, '');
}

function handleRepairBackNavigation() {
    if (currentCategory === '🚴 Bikes' || currentCategory === '🎮 Consoles') {
        goBack('brand');
    } else {
        goBack('model');
    }
}

function goBack(to) {
    document.querySelectorAll('.card').forEach(card => card.classList.add('hidden'));
    if (to === 'category') {
        document.getElementById('step-category').classList.remove('hidden');
    } else if (to === 'brand') {
        loadBrands(currentCategory);
        document.getElementById('step-brand').classList.remove('hidden');
    } else if (to === 'model') {
        loadModels(currentBrand);
        document.getElementById('step-model').classList.remove('hidden');
    } else if (to === 'repair') {
        if (currentCategory === '🚴 Bikes') {
            loadBikeRepairs();
        } else {
            loadRepairs();
        }
        document.getElementById('step-repair').classList.remove('hidden');
    } else if (to === 'result') {
        showPrice(currentRepair, currentPrice);
        document.getElementById('step-result').classList.remove('hidden');
    }
}

function contactMe() {
    window.open('https://m.me/therepardan', '_blank');
}