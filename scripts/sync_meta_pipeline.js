const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const metaPath = path.join(rootDir, 'uma_meta_data.json');
const dataJsPath = path.join(rootDir, 'data.js');

console.log('========================================================');
console.log('🔄 UMA SUPPORT TOOL - META SYNC & OPTIMIZATION PIPELINE');
console.log('========================================================');

// Load current metadata
let meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));

/**
 * 1. Payload for 2026-10-26 新シナリオ「朋、史解き ‐午式駿大祭‐」
 */
const updatePayload_2026_10_shuntaisai = {
  date: '2026-10-27',
  scenario: {
    name: '朋、史解き ‐午式駿大祭‐（駿大祭編）',
    version: '2026年10月26日実装（最新現行育成シナリオ）',
    updated_at: '2026-10-27',
    features: [
      '友人サポートカード『SSR［いとどめでたき、まつりかな］吾妻』が「演目Lv上限を6から10へ引き上げる」超必須人権枠（無凸から上限10解放、全距離・全脚質で必須固定）',
      '演目稽古の最大追加ボーナス発動条件：サポカ編成タイプが「5種類以上」であること（スピ2/友人1＋残り3タイプ各1枚のハイランダー構成が黄金比）',
      '距離別スタミナ/根性の配分：中長距離はスタミナ必須（スピ2/スタ1/パワ1/賢1/吾妻の根性抜き）、短距離・マイル・ダートはスタミナ不要で終盤追い比べに必須の根性を採用（スピ2/パワ1/根1/賢1/吾妻のスタミナ抜き）',
      'パワーサポートカード『SSR［Time of Departure］マヤノトップガン』がシナリオリンク神駒として金スキル『英俊豪傑』＋シナリオ金スキル『順風満帆』＆圧倒的練習性能・ヒントLv4を発揮',
      'トレーニングで演目ゲージを蓄積し強力な「演目稽古」を発動、全ステータス・スキルPtを爆発的に獲得',
      '演目担当ウマ娘たちからの「教え」のセット・伝受・転成により練習バフを最大化',
      '基礎能力上限が最大2500まで引き上げられ、全ステータス上限突破育成が可能'
    ],
    recent_update: {
      date: '2026-10-27',
      title: '10/26大型アップデート：新シナリオ「朋、史解き ‐午式駿大祭‐」開幕 ＆ 5種類ハイランダー黄金律',
      highlights: [
        '【新育成シナリオ公開】10/26実装！『朋、史解き ‐午式駿大祭‐』（駿大祭編）。「演目Lv・演目稽古」と「教え伝受・転成」でステータス上限2500を目指す新時代！',
        '【演目稽古5種類ボーナス＆距離別最適解】演目稽古の最大ボーナスを得るには「サポカタイプ5種類以上」が絶対条件！短距離・マイル・ダートは「スピ2/パワ1/根1/賢1/友人1（スタミナ抜き・根性採用）」、中長距離は「スピ2/スタ1/パワ1/賢1/友人1（根性抜き・スタミナ採用）」が環境最適解！',
        '【超人権友人サポカ実装】SSR［いとどめでたき、まつりかな］吾妻が新登場！編成するだけで「演目Lv上限が6から10へ跳ね上がる」破格の特効を持ち、全距離・全脚質で必須採用（無凸でも上限10解放）。お出かけで最低演目Lv+1＆新コンディション「疲労回復」を付与！',
        '【シナリオリンク神駒サポカ】SSR［Time of Departure］マヤノトップガン（パワー）が登場！金スキル『英俊豪傑』に加え、シナリオイベントで『順風満帆』を獲得可能。ヒントLv4と強力なパワー練習性能でパワー枠最強Tier SS+！',
        '【全20編成・手持ちビルダー刷新】全距離×全脚質の理想編成・代用候補・上限解放ガイドを駿大祭環境（5種類ハイランダー・吾妻固定＋マヤノ神駒採用）へ完全刷新！'
      ]
    }
  },
  new_cards: [
    {
      name: 'SSR［いとどめでたき、まつりかな］吾妻',
      short_name: '吾妻（友人）',
      type: 'friend',
      style: 'all',
      distances: ['short', 'mile', 'medium', 'long', 'dirt'],
      gold_skills: ['神速', '弧を描いて'],
      uncap_guide: {
        recommended: '無凸〜完凸 (無凸運用可 / 完凸推奨)',
        badge: '無凸運用可 / 完凸推奨',
        tag: 'friend',
        detail: '新シナリオ「朋、史解き ‐午式駿大祭‐」の必須級（人権）友人サポカ。編成するだけで演目Lv上限を6から10へ引き上げる超特効（無凸から発動）。お出かけで最低演目Lv+1＆「疲労回復」付与。金スキル「神速」所持。'
      }
    },
    {
      name: 'SSR［Time of Departure］マヤノトップガン',
      short_name: 'マヤノトップガン（パワー）',
      type: 'power',
      style: 'leader',
      distances: ['short', 'mile', 'medium', 'long', 'dirt'],
      gold_skills: ['英俊豪傑', '順風満帆'],
      uncap_guide: {
        recommended: '完凸推奨 (3凸実用ライン)',
        badge: '完凸推奨',
        tag: 'gold_skill',
        detail: '駿大祭シナリオリンク神駒。金スキル「英俊豪傑」＋シナリオ金スキル「順風満帆」、高得意率・ヒントLv4。'
      }
    }
  ]
};

/**
 * 2. Pipeline Execution
 */
function runPipeline(payload) {
  console.log(`\n[STEP 1] Applying recent scenario update announcement (${payload.date})...`);
  if (payload.scenario) {
    meta.scenario = payload.scenario;
  }

  console.log('[STEP 2] Updating support cards & uncap database...');
  payload.new_cards.forEach(card => {
    meta.card_uncap_guide[card.name] = card.uncap_guide;
    console.log(`  Added uncap guide for: ${card.name}`);

    card.distances.forEach(dist => {
      const distData = meta.distance_style_builds[dist];
      if (distData && distData.substitutes_by_type) {
        let grp = distData.substitutes_by_type.find(s => s.type === card.type);
        if (grp && grp.cards) {
          if (!grp.cards.some(c => c.name === card.name)) {
            grp.cards.unshift({
              name: card.name,
              type: card.type,
              desc: card.uncap_guide.detail
            });
            console.log(`  Added ${card.name} to ${dist} [${card.type}] substitutes`);
          }
        }
      }
    });
  });

  console.log('[STEP 3] Syncing uma_meta_data.json and data.js...');
  fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2), 'utf8');

  const dataJsContent = `// Uma Musume Support Tool - Meta & Strategy Data
// Synced with uma_meta_data.json (Automated Pipeline - Shuntaisai Update)
var UMA_META_DATA = ${JSON.stringify(meta, null, 2)};

if (typeof window !== "undefined") {
  window.UMA_META_DATA = UMA_META_DATA;
}
if (typeof globalThis !== "undefined") {
  globalThis.UMA_META_DATA = UMA_META_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = UMA_META_DATA;
}
`;
  fs.writeFileSync(dataJsPath, dataJsContent, 'utf8');

  console.log('[STEP 4] Running Automated Verification Test Suite...');
  const testScriptPath = path.join(rootDir, 'scripts', 'test_all.js');
  execSync(`node "${testScriptPath}"`, { stdio: 'inherit' });

  console.log('\n✨ PIPELINE SYNC COMPLETED SUCCESSFULLY!');
}

runPipeline(updatePayload_2026_10_shuntaisai);
