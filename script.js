'use strict';

const STORAGE_KEY = 'repairDanDataComplete';

const DEFAULT_DATA = {
    iPhone: {
        models: [
            { name: "iPhone 8", battery: 40, screen: 60, backGlass: 35, camera: 35, waterDamage: 30, deepClean: 12 },
            { name: "iPhone 8 Plus", battery: 40, screen: 60, backGlass: 35, camera: 35, waterDamage: 30, deepClean: 12 },
            { name: "iPhone X", battery: 45, screen: 85, backGlass: 40, camera: 40, waterDamage: 30, deepClean: 12 },
            { name: "iPhone XS", battery: 45, screen: 85, backGlass: 40, camera: 40, waterDamage: 30, deepClean: 12 },
            { name: "iPhone XS Max", battery: 45, screen: 95, backGlass: 45, camera: 45, waterDamage: 30, deepClean: 12 },
            { name: "iPhone XR", battery: 40, screen: 75, backGlass: 40, camera: 40, waterDamage: 30, deepClean: 12 },
            { name: "iPhone 11", battery: 45, screen: 75, backGlass: 40, camera: 40, waterDamage: 30, deepClean: 12 },
            { name: "iPhone 11 Pro", battery: 50, screen: 90, backGlass: 45, camera: 45, waterDamage: 30, deepClean: 12 },
            { name: "iPhone 11 Pro Max", battery: 50, screen: 100, backGlass: 50, camera: 50, waterDamage: 30, deepClean: 12 },
            { name: "iPhone 12", battery: 50, screen: 85, backGlass: 45, camera: 45, waterDamage: 30, deepClean: 12 },
            { name: "iPhone 12 Mini", battery: 50, screen: 85, backGlass: 45, camera: 45, waterDamage: 30, deepClean: 12 },
            { name: "iPhone 12 Pro", battery: 55, screen: 100, backGlass: 50, camera: 50, waterDamage: 30, deepClean: 12 },
            { name: "iPhone 12 Pro Max", battery: 55, screen: 110, backGlass: 55, camera: 55, waterDamage: 30, deepClean: 12 },
            { name: "iPhone 13", battery: 55, screen: 95, backGlass: 50, camera: 55, waterDamage: 30, deepClean: 12 },
            { name: "iPhone 13 Mini", battery: 55, screen: 95, backGlass: 50, camera: 50, waterDamage: 30, deepClean: 12 },
            { name: "iPhone 13 Pro", battery: 60, screen: 105, backGlass: 55, camera: 60, waterDamage: 30, deepClean: 12 },
            { name: "iPhone 13 Pro Max", battery: 60, screen: 115, backGlass: 60, camera: 65, waterDamage: 30, deepClean: 12 },
            { name: "iPhone SE (1st Gen)", battery: 35, screen: 50, backGlass: 30, camera: 30, waterDamage: 30, deepClean: 12 },
            { name: "iPhone SE (2nd Gen)", battery: 40, screen: 60, backGlass: 35, camera: 35, waterDamage: 30, deepClean: 12 },
            { name: "iPhone SE (3rd Gen)", battery: 45, screen: 65, backGlass: 35, camera: 35, waterDamage: 30, deepClean: 12 },
            { name: "iPhone 14", battery: 60, screen: 100, backGlass: 55, camera: 60, waterDamage: 30, deepClean: 12 },
            { name: "iPhone 14 Plus", battery: 60, screen: 105, backGlass: 55, camera: 60, waterDamage: 30, deepClean: 12 },
            { name: "iPhone 14 Pro", battery: 65, screen: 120, backGlass: 65, camera: 75, waterDamage: 30, deepClean: 12 },
            { name: "iPhone 14 Pro Max", battery: 65, screen: 130, backGlass: 70, camera: 80, waterDamage: 30, deepClean: 12 },
            { name: "iPhone 15", battery: 70, screen: 115, backGlass: 60, camera: 70, waterDamage: 30, deepClean: 12 },
            { name: "iPhone 15 Plus", battery: 70, screen: 120, backGlass: 65, camera: 70, waterDamage: 30, deepClean: 12 },
            { name: "iPhone 15 Pro", battery: 75, screen: 135, backGlass: 75, camera: 85, waterDamage: 30, deepClean: 12 },
            { name: "iPhone 15 Pro Max", battery: 75, screen: 145, backGlass: 80, camera: 95, waterDamage: 30, deepClean: 12 },
            { name: "iPhone 16", battery: 75, screen: 120, backGlass: 65, camera: 75, waterDamage: 30, deepClean: 12 },
            { name: "iPhone 16 Plus", battery: 75, screen: 125, backGlass: 70, camera: 75, waterDamage: 30, deepClean: 12 },
            { name: "iPhone 16 Pro", battery: 80, screen: 140, backGlass: 80, camera: 90, waterDamage: 30, deepClean: 12 },
            { name: "iPhone 16 Pro Max", battery: 80, screen: 150, backGlass: 85, camera: 100, waterDamage: 30, deepClean: 12 }
        ]
    },
    Samsung: {
        models: [
            { name: "Galaxy A12", battery: 35, screen: 55, backGlass: 25, camera: 35, waterDamage: 30, deepClean: 12 },
            { name: "Galaxy A13", battery: 35, screen: 55, backGlass: 25, camera: 35, waterDamage: 30, deepClean: 12 },
            { name: "Galaxy A50", battery: 45, screen: 80, backGlass: 30, camera: 40, waterDamage: 30, deepClean: 12 },
            { name: "Galaxy A51", battery: 45, screen: 80, backGlass: 30, camera: 40, waterDamage: 30, deepClean: 12 },
            { name: "Galaxy A52", battery: 45, screen: 80, backGlass: 30, camera: 40, waterDamage: 30, deepClean: 12 },
            { name: "Galaxy A53", battery: 50, screen: 80, backGlass: 35, camera: 40, waterDamage: 30, deepClean: 12 },
            { name: "Galaxy A54", battery: 50, screen: 105, backGlass: 35, camera: 45, waterDamage: 30, deepClean: 12 },
            { name: "Galaxy A55", battery: 55, screen: 105, backGlass: 40, camera: 45, waterDamage: 30, deepClean: 12 },
            { name: "Galaxy S20", battery: 50, screen: 90, backGlass: 35, camera: 50, waterDamage: 30, deepClean: 12 },
            { name: "Galaxy S20+", battery: 50, screen: 100, backGlass: 35, camera: 50, waterDamage: 30, deepClean: 12 },
            { name: "Galaxy S20 Ultra", battery: 55, screen: 110, backGlass: 40, camera: 60, waterDamage: 30, deepClean: 12 },
            { name: "Galaxy S21", battery: 50, screen: 90, backGlass: 35, camera: 50, waterDamage: 30, deepClean: 12 },
            { name: "Galaxy S21+", battery: 50, screen: 100, backGlass: 35, camera: 55, waterDamage: 30, deepClean: 12 },
            { name: "Galaxy S21 Ultra", battery: 55, screen: 110, backGlass: 40, camera: 65, waterDamage: 30, deepClean: 12 },
            { name: "Galaxy S22", battery: 50, screen: 95, backGlass: 35, camera: 55, waterDamage: 30, deepClean: 12 },
            { name: "Galaxy S22+", battery: 50, screen: 105, backGlass: 40, camera: 60, waterDamage: 30, deepClean: 12 },
            { name: "Galaxy S22 Ultra", battery: 60, screen: 120, backGlass: 45, camera: 70, waterDamage: 30, deepClean: 12 },
            { name: "Galaxy S23", battery: 55, screen: 100, backGlass: 40, camera: 60, waterDamage: 30, deepClean: 12 },
            { name: "Galaxy S23+", battery: 55, screen: 110, backGlass: 40, camera: 65, waterDamage: 30, deepClean: 12 },
            { name: "Galaxy S23 Ultra", battery: 65, screen: 125, backGlass: 45, camera: 75, waterDamage: 30, deepClean: 12 },
            { name: "Galaxy S24", battery: 60, screen: 105, backGlass: 45, camera: 65, waterDamage: 30, deepClean: 12 },
            { name: "Galaxy S24+", battery: 60, screen: 115, backGlass: 45, camera: 70, waterDamage: 30, deepClean: 12 },
            { name: "Galaxy S24 Ultra", battery: 70, screen: 135, backGlass: 50, camera: 80, waterDamage: 30, deepClean: 12 },
            { name: "Galaxy S25", battery: 65, screen: 115, backGlass: 45, camera: 70, waterDamage: 30, deepClean: 12 },
            { name: "Galaxy S25+", battery: 65, screen: 125, backGlass: 45, camera: 75, waterDamage: 30, deepClean: 12 },
            { name: "Galaxy S25 Ultra", battery: 75, screen: 145, backGlass: 55, camera: 85, waterDamage: 30, deepClean: 12 }
        ]
    },
    Console: {
        PS5: [
            { name: "Stick Drift (Controller)", recommended: 35, comingSoon: false },
            { name: "Button Replacement", recommended: 30, comingSoon: false },
            { name: "Fan Cleaning", recommended: 60, comingSoon: false },
            { name: "Deep Clean", recommended: 35, comingSoon: false },
            { name: "HDMI Port Repair", recommended: 70, comingSoon: true },
            { name: "Power Supply Issue", recommended: 70, comingSoon: true }
        ],
        Xbox: [
            { name: "Stick Drift (Controller)", recommended: 30, comingSoon: false },
            { name: "Button Replacement", recommended: 30, comingSoon: false },
            { name: "Fan Cleaning", recommended: 55, comingSoon: false },
            { name: "Deep Clean", recommended: 30, comingSoon: false },
            { name: "HDMI Port Repair", recommended: 65, comingSoon: true },
            { name: "Power Supply", recommended: 65, comingSoon: true }
        ],
        Switch: [
            { name: "Joy-Con Stick Drift", recommended: 30, comingSoon: false },
            { name: "Joy-Con Button Fix", recommended: 30, comingSoon: false },
            { name: "Battery Replacement", recommended: 40, comingSoon: false },
            { name: "Deep Clean", recommended: 25, comingSoon: false },
            { name: "Console Charging Port", recommended: 50, comingSoon: true }
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

let currentCategory, currentBrand, currentModel, currentRepair;

window.addEventListener('load', function () {
    history.replaceState({ step: 'category' }, '');
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
        document.getElementById('selected-model').textContent = 'Bicycle Repairs';
        loadBikeRepairs();
        document.getElementById('step-repair').classList.remove('hidden');
        history.pushState({ step: 'repair' }, '');
    } else if (currentCategory === '🎮 Consoles') {
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
                    { name: 'Back Glass Repair', recommended: model.backGlass || 35 },
                    { name: 'Camera Repair', recommended: model.camera || 35 },
                    { name: 'Water Damage Treatment', recommended: model.waterDamage || 30 },
                    { name: 'Deep Clean', recommended: model.deepClean || 12 }
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
    }
}

function contactMe() {
    window.open('https://m.me/therepardan', '_blank');
}