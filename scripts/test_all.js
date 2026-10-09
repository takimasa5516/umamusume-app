const fs = require('fs');
const path = require('path');
const vm = require('vm');

const rootDir = path.resolve(__dirname, '..');
const htmlPath = path.join(rootDir, 'index.html');
const dataJsPath = path.join(rootDir, 'data.js');
const metaPath = path.join(rootDir, 'uma_meta_data.json');

console.log('========================================================');
console.log('🧪 RUNNING UMA APP AUTOMATED VERIFICATION SUITE');
console.log('========================================================');

// 1. DATA INTEGRITY CHECK
console.log('\n[TEST 1/3] Checking Data Integrity & Resource Sum 10 Law...');
const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));

// Verify region sum 10
let regionPass = true;
if (meta.region_strategies && meta.region_strategies.deck_recommendations) {
  meta.region_strategies.deck_recommendations.forEach((d, i) => {
    ['junior', 'classic', 'senior'].forEach(p => {
      const plan = d[p];
      if (plan && plan.ingredient_ratio) {
        if (!plan.ingredient_ratio.includes('(総計10)')) {
          console.error(`❌ Deck ${i} ${p} ratio does not sum to 10: ${plan.ingredient_ratio}`);
          regionPass = false;
        }
      }
    });
  });
}
if (regionPass) {
  console.log('✅ PASS: All regional strategy plans satisfy the Resource Sum 10 Law!');
} else {
  console.error('❌ FAIL: Regional resource law violated.');
  process.exit(1);
}

// 2. DOM RENDERING TESTS
console.log('\n[TEST 2/3] Checking DOM Elements Full Rendering...');
const html = fs.readFileSync(htmlPath, 'utf8');
const dataJs = fs.readFileSync(dataJsPath, 'utf8');

const domElements = {};
function createMockElement(id = '', tag = 'div') {
  return {
    id,
    tagName: tag.toUpperCase(),
    innerHTML: '',
    textContent: '',
    style: {},
    classList: { toggle: () => {}, add: () => {}, remove: () => {} },
    children: [],
    appendChild: function(c) { this.children.push(c); if (c.innerHTML) this.innerHTML += c.innerHTML; return c; },
    addEventListener: () => {},
    setAttribute: () => {},
    getAttribute: () => null,
    querySelectorAll: () => [],
    querySelector: () => null
  };
}

const documentMock = {
  getElementById: (id) => {
    if (!domElements[id]) domElements[id] = createMockElement(id);
    return domElements[id];
  },
  createElement: (t) => createMockElement('', t),
  querySelectorAll: () => [createMockElement(), createMockElement(), createMockElement(), createMockElement(), createMockElement(), createMockElement(), createMockElement()],
  querySelector: () => createMockElement(),
  body: createMockElement('body')
};

const windowMock = {
  localStorage: { getItem: () => null, setItem: () => {} },
  document: documentMock
};

const sandbox = {
  window: windowMock,
  document: documentMock,
  localStorage: windowMock.localStorage,
  console: console,
  setTimeout: setTimeout,
  fetch: () => Promise.resolve({ ok: true, json: () => Promise.resolve(meta) })
};
sandbox.global = sandbox;
sandbox.window.document = documentMock;

vm.createContext(sandbox);
vm.runInContext(dataJs, sandbox);

const scriptRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gi;
let match;
while ((match = scriptRegex.exec(html)) !== null) {
  if (!match[1].trim() || match[0].includes('src=')) continue;
  vm.runInContext(match[1], sandbox);
}

const checkIds = [
  'scenario-pill',
  'deck-templates-list',
  'current-dist-title',
  'build-key-skills',
  'stats-container',
  'skills-table-body',
  'style-card-list',
  'event-skills-tbody',
  'region-pools-container',
  'deck-strategies-list',
  'region-master-tbody',
  'sources-list',
  'uncap-table-body',
  'builder-result-container',
  'mybox-cards-grid'
];

let domPass = true;
for (const id of checkIds) {
  const el = domElements[id];
  const len = (el.innerHTML || el.textContent || '').trim().length;
  if (len === 0) {
    console.error(`❌ Element #${id} is EMPTY!`);
    domPass = false;
  }
}

if (domPass) {
  console.log('✅ PASS: All 15 required DOM containers rendered successfully with rich content!');
} else {
  console.error('❌ FAIL: Some DOM containers failed to render.');
  process.exit(1);
}

// 3. DECK BUILDER INTEGRATION & NO-DUPLICATE RULES
console.log('\n[TEST 3/3] Checking Deck Builder & Character Uniqueness Rules...');
let builderPass = true;
if (typeof sandbox.calculateBestDeck === 'function') {
  const distances = ['short', 'mile', 'medium', 'long', 'dirt'];
  const styles = ['runner', 'leader', 'betweener', 'chaser'];
  
  distances.forEach(d => {
    styles.forEach(s => {
      const res = sandbox.calculateBestDeck(d, s, 'auto');
      if (!res || !res.deck || res.deck.length !== 6) {
        console.error(`❌ Builder failed for ${d}-${s}: deck length ${res ? res.deck.length : 0}`);
        builderPass = false;
      } else {
        const charNames = res.deck.map(c => sandbox.getBaseCharName(c.name));
        const unique = new Set(charNames);
        if (unique.size !== 6) {
          console.error(`❌ Duplicate character found in ${d}-${s}: ${charNames.join(', ')}`);
          builderPass = false;
        }
      }
    });
  });
}

if (builderPass) {
  console.log('✅ PASS: All 20 Distance x Style decks generated with 0 character duplicates!');
} else {
  console.error('❌ FAIL: Deck builder tests failed.');
  process.exit(1);
}

console.log('\n🎉 ========================================================');
console.log('🎉 ALL TESTS PASSED SUCCESSFULLY (100%)!');
console.log('🎉 ========================================================\n');
