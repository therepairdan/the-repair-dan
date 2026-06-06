'use strict';

const priceData = {
    iPhone: {
        models: [
            "8 / 8 Plus / SE",
            "X / XR / XS / XS Max",
            "11 / 11 Pro / 11 Pro Max",
            "12 / 12 Mini / 12 Pro / 12 Pro Max",
            "13 / 13 Mini / 13 Pro / 13 Pro Max",
            "14 / 14 Plus / 14 Pro / 14 Pro Max",
            "15 / 15 Plus / 15 Pro / 15 Pro Max / 16 Series"
        ],
        battery: {
            "8 / 8 Plus / SE": { official: "N/A", budget: "N/A" },
            "X / XR / XS / XS Max": { official: "£50", budget: "£30", note: "✅ Fully working, may show 'Unknown Part'" },
            "11 / 11 Pro / 11 Pro Max": { official: "£40", budget: "£35", note: "✅ Fully working, may show 'Unknown Part'" },
            "12 / 12 Mini / 12 Pro / 12 Pro Max": { official: "£45", budget: "£35", note: "✅ Fully working, may show 'Unknown Part'" },
            "13 / 13 Mini / 13 Pro / 13 Pro Max": { official: "£50", budget: "£40", note: "✅ Fully working, may show 'Unknown Part'" },
            "14 / 14 Plus / 14 Pro / 14 Pro Max": { official: "£60", budget: "£50", note: "✅ Fully working, may show 'Unknown Part'" },
            "15 / 15 Plus / 15 Pro / 15 Pro Max / 16 Series": { official: "£75 – £100", budget: "£50 – £80", note: "✅ Fully working, may show 'Unknown Part'" }
        },
        screen: {
            "8 / 8 Plus / SE": { premium: "£50", official: "£70", note: "✅ Premium = high quality | Official = original" },
            "X / XR / XS / XS Max": { budget: "£35", premium: "£60", official: "£90", note: "✅ Budget = basic working | Premium = high quality | Official = original" },
            "11 / 11 Pro / 11 Pro Max": { budget: "£35", premium: "£80", official: "£100", note: "✅ Budget = basic working | Premium = high quality | Official = original" },
            "12 / 12 Mini / 12 Pro / 12 Pro Max": { budget: "£40", premium: "£90", official: "£120", note: "✅ Budget = basic working | Premium = high quality | Official = original" },
            "13 / 13 Mini / 13 Pro / 13 Pro Max": { budget: "On request", premium: "£110", official: "£150", note: "✅ Budget available on request | Premium = high quality | Official = original" },
            "14 / 14 Plus / 14 Pro / 14 Pro Max": { budget: "On request", premium: "£140", official: "£170", note: "✅ Budget available on request | Premium = high quality | Official = original" },
            "15 / 15 Plus / 15 Pro / 15 Pro Max / 16 Series": { budget: "On request", premium: "£170", official: "£230", note: "✅ Budget available on request | Premium = high quality | Official = original" }
        },
        charge: {
            "8 / 8 Plus / SE": "£40",
            "X / XR / XS / XS Max": "£40",
            "11 / 11 Pro / 11 Pro Max": "£40",
            "12 / 12 Mini / 12 Pro / 12 Pro Max": "£40",
            "13 / 13 Mini / 13 Pro / 13 Pro Max": "£40",
            "14 / 14 Plus / 14 Pro / 14 Pro Max": "£40",
            "15 / 15 Plus / 15 Pro / 15 Pro Max / 16 Series": "£50",
            note: "✅ iPhone 15/16 = USB‑C port"
        },
        backglass: { all: "£40 – £110", note: "✅ Available for iPhone X through 16 series" },
        camera: { all: "£40 – £80" },
        water: { all: "£30", note: "⚠️ DO NOT charge device — bring it straight in. No fix = No fee." }
    },

    Samsung: {
        models: [
            "S20 / S21 / S22 / S23 / S24",
            "S20+ / S21+ / S22+ / S23+ / S24+",
            "S20 Ultra → S24 Ultra",
            "A Series (A12 – A55)"
        ],
        battery: {
            "S20 / S21 / S22 / S23 / S24": "£55+",
            "S20+ / S21+ / S22+ / S23+ / S24+": "£60+",
            "S20 Ultra → S24 Ultra": "£65+",
            "A Series (A12 – A55)": "£45 – £60"
        },
        screen: {
            "S20 / S21 / S22 / S23 / S24": { premium: "£140", official: "£190", note: "✅ Curved + Flat available" },
            "S20+ / S21+ / S22+ / S23+ / S24+": { premium: "£160", official: "£220", note: "✅ Curved + Flat available" },
            "S20 Ultra → S24 Ultra": { premium: "£180", official: "£260", note: "✅ Curved + Flat available" },
            "A Series (A12 – A55)": { premium: "£70 – £110", official: "On request" }
        },
        charge: { all: "£45 – £55" },
        camera: { all: "£40 – £80" },
        water: { all: "£30", note: "⚠️ DO NOT charge device — bring it straight in. No fix = No fee." }
    },

    Other: {
        models: ["Android Phone", "Tablet", "Other Device"],
        charge: { all: "£40 – £50" },
        camera: { all: "£40 – £80" },
        water: { all: "£30", note: "⚠️ DO NOT charge device — bring it straight in. No fix = No fee." }
    },

    common: {
        clean: "£10",
        diagnosis: "FREE"
    }
};

let currentBrand, currentModel, currentFault;

window.addEventListener('load', function () {
    history.replaceState({ step: 'brand' }, '');
});

window.addEventListener('popstate', function (e) {
    const step = e.state && e.state.step;
    if (step) goBack(step);
});

function selectBrand(brand) {
    currentBrand = brand;
    document.getElementById('step-brand').classList.add('hidden');
    document.getElementById('selected-brand-model').textContent = brand;
    loadModels(brand);
    document.getElementById('step-model').classList.remove('hidden');
    history.pushState({ step: 'model' }, '');
}

function loadModels(brand) {
    const container = document.getElementById('model-container');
    container.innerHTML = '';
    priceData[brand].models.forEach(model => {
        const btn = document.createElement('button');
        btn.className = 'model-btn';
        btn.textContent = model;
        btn.onclick = () => selectModel(model);
        container.appendChild(btn);
    });
}

function selectModel(model) {
    currentModel = model;
    document.getElementById('step-model').classList.add('hidden');
    document.getElementById('selected-model-fault').textContent = `${currentBrand} • ${model}`;
    document.getElementById('step-fault').classList.remove('hidden');
    history.pushState({ step: 'fault' }, '');
}

function selectFault(fault) {
    currentFault = fault;
    document.getElementById('step-fault').classList.add('hidden');
    showPrice();
    document.getElementById('step-result').classList.remove('hidden');
    history.pushState({ step: 'result' }, '');
}

function customQuote() {
    return `<div class="price-tag">Call for quote</div>
            <div class="explanation">📞 Message or call me with your model and I'll give you a fixed price instantly. No obligation.</div>`;
}

function showPrice() {
    let priceHTML = '';
    const pd = priceData;
    const brandData = pd[currentBrand];

    try {
        if (currentFault === 'battery') {
            const data = brandData && brandData.battery && brandData.battery[currentModel];
            if (!data) {
                priceHTML = customQuote();
            } else if (typeof data === 'string') {
                priceHTML = `<div class="price-tag">${data}</div>`;
            } else {
                priceHTML = `
                    <div class="price-tag">
                        Official: ${data.official}<br>
                        Budget: ${data.budget}
                    </div>
                    ${data.note ? `<div class="explanation">${data.note}</div>` : ''}
                `;
            }
        }

        else if (currentFault === 'screen') {
            const data = brandData && brandData.screen && brandData.screen[currentModel];
            if (!data) {
                priceHTML = customQuote();
            } else {
                priceHTML = `
                    <div class="price-tag">
                        ${data.budget ? `Budget: ${data.budget}<br>` : ''}
                        Premium: ${data.premium}<br>
                        Official: ${data.official}
                    </div>
                    ${data.note ? `<div class="explanation">${data.note}</div>` : ''}
                `;
            }
        }

        else if (currentFault === 'charge') {
            const chargeData = brandData && brandData.charge;
            if (!chargeData) {
                priceHTML = customQuote();
            } else {
                const price = chargeData[currentModel] || chargeData.all;
                priceHTML = `<div class="price-tag">${price}</div>`;
                if (chargeData.note) priceHTML += `<div class="explanation">${chargeData.note}</div>`;
            }
        }

        else if (currentFault === 'backglass') {
            const data = brandData && brandData.backglass;
            if (!data) {
                priceHTML = customQuote();
            } else {
                priceHTML = `<div class="price-tag">${data.all}</div>`;
                if (data.note) priceHTML += `<div class="explanation">${data.note}</div>`;
            }
        }

        else if (currentFault === 'camera') {
            const data = brandData && brandData.camera;
            if (!data) {
                priceHTML = customQuote();
            } else {
                priceHTML = `<div class="price-tag">${data.all}</div>`;
            }
        }

        else if (currentFault === 'water') {
            const data = brandData && brandData.water;
            if (!data) {
                priceHTML = customQuote();
            } else {
                priceHTML = `<div class="price-tag">${data.all}</div>`;
                if (data.note) priceHTML += `<div class="explanation">${data.note}</div>`;
            }
        }

        else if (currentFault === 'clean') {
            priceHTML = `<div class="price-tag">${pd.common.clean}</div>
                         <div class="explanation">✅ Full deep clean and service</div>`;
        }

        else if (currentFault === 'diagnosis') {
            priceHTML = `<div class="price-tag">${pd.common.diagnosis}</div>
                         <div class="explanation">✅ Full diagnostic check — no obligation, honest advice</div>`;
        }

        else {
            priceHTML = customQuote();
        }

    } catch (e) {
        priceHTML = customQuote();
    }

    priceHTML += `<p class="note-text">ℹ️ All prices estimated & negotiable – part prices vary</p>`;
    document.getElementById('result-content').innerHTML = priceHTML;
}

function goBack(to) {
    document.querySelectorAll('.card').forEach(card => card.classList.add('hidden'));
    if (to === 'brand') document.getElementById('step-brand').classList.remove('hidden');
    if (to === 'model') document.getElementById('step-model').classList.remove('hidden');
    if (to === 'fault') document.getElementById('step-fault').classList.remove('hidden');
}

function contactMe() {
    window.open('https://m.me/therepardan', '_blank');
}
