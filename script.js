'use strict';

const STORAGE_KEY = 'repairDanDataComplete';

// Default data matching admin panel
const DEFAULT_DATA = {
    iPhone: {
        models: [
            { name: "iPhone 8", battery: { recommended: 40 }, screen: { recommended: 60 } },
            { name: "iPhone 15 Pro Max", battery: { recommended: 75 }, screen: { recommended: 145 } },
            { name: "iPhone 16 Pro Max", battery: { recommended: 80 }, screen: { recommended: 150 } }
        ],
        repairs: {
            "Back Glass": { recommended: 45 },
            "Camera": { recommended: 40 },
            "Water Damage": { recommended: 30 },
            "Deep Clean": { recommended: 12 }
        }
    },
    Samsung: {
        models: [
            { name: "Galaxy A12", battery: { recommended: 35 }, screen: { recommended: 55 } },
            { name: "Galaxy S24 Ultra", battery: { recommended: 70 }, screen: { recommended: 135 } }
        ],
        repairs: {
            "Back Glass": { recommended: 45 },
            "Camera": { recommended: 40 },
            "Water Damage": { recommended: 30 },
            "Deep Clean": { recommended: 12 }
        }
    },
    Console: {
        PS5: [
            { name: "Stick Drift (Controller)", recommended: 35, comingSoon: false },
            { name: "Button Replacement", recommended: 30, comingSoon: false },
            { name: "HDMI Port Repair", recommended: 70, comingSoon: true }
        ],
        Xbox: [
            { name: "Stick Drift (Controller)", recommended: 30, comingSoon: false },
            { name: "Button Replacement", recommended: 30, comingSoon: false }
        ],
        Switch: [
            { name: "Joy-Con Stick Drift", recommended: 30, comingSoon: false },
            { name: "Battery Replacement", recommended: 40, comingSoon: false }
        ]
    },
    Bicycle: {
        wheels: [
            { name: "Puncture Repair", recommended: 12 },
            { name: "Wheel True", recommended: 30 }
        ],
        brakes: [
            { name: "Brake Adjustment", recommended: 15 },
            { name: "Brake Pad Replacement", recommended: 18 }
        ],
        drivetrain: [
            { name: "Chain Replacement", recommended: 18 },
            { name: "Drivetrain Deep Clean", recommended: 35 }
        ],
        services: [
            { name: "Safety Check", recommended: 15 },
            { name: "Standard Service", recommended: 80 }
        ]
    }
};

function getPriceData() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        return JSON.parse(stored);
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
    const priceData = getPriceData();
    
    let brands = [];
    if (category === '📱 Phones') {
        brands = Object.keys(priceData).filter(k => ['iPhone', 'Samsung'].includes(k));
    } else if (category === '🎮 Consoles') {
        brands = ['PS5', 'Xbox', 'Switch'];
    } else if (category === '🚴 Bikes') {
        brands = ['All Repairs'];
    }

    brands.forEach(brand => {
        const btn = document.createElement('button');
        btn.className = 'brand-btn';
        btn.textContent = brand === 'All Repairs' ? '🚴 All Repairs' : 
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
        loadBikeRepairs();
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
        container.innerHTML = '<p style="color: #CBD5E1; text-align: center;">No models available</p>';
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
        repairs = Object.keys(brandData.repairs).map(name => ({
            name,
            ...brandData.repairs[name],
            comingSoon: false
        }));
        // Add battery and screen for phones
        const model = brandData.models.find(m => m.name === currentModel);
        if (model) {
            repairs.unshift(
                { name: 'Battery Replacement', recommended: model.battery.recommended, comingSoon: false },
                { name: 'Screen Replacement', recommended: model.screen.recommended, comingSoon: false }
            );
        }
    } else if (currentCategory === '🎮 Consoles') {
        repairs = priceData.Console[currentBrand] || [];
    }

    if (repairs.length === 0) {
        container.innerHTML = '<p style="color: #CBD5E1; text-align: center;">No repairs available</p>';
        return;
    }

    repairs.forEach(repair => {
        const btn = document.createElement('button');
        btn.className = 'fault-btn';
        const comingSoonLabel = repair.comingSoon ? ' (Coming Soon)' : '';
        btn.textContent = repair.name + comingSoonLabel;
        btn.disabled = repair.comingSoon;
        if (repair.comingSoon) {
            btn.style.opacity = '0.6';
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

    const allRepairs = [
        ...priceData.Bicycle.wheels,
        ...priceData.Bicycle.brakes,
        ...priceData.Bicycle.drivetrain,
        ...priceData.Bicycle.services
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
                ✅ Professional repair<br>
                ✅ 3-month warranty<br>
                ℹ️  All prices estimated & may vary with parts
            </div>
        </div>
    `;

    document.getElementById('result-content').innerHTML = resultHTML;
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
