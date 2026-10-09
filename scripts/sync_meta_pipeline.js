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
 * 1. Payload for 2026年10月最新環境
 */
const updatePayload_2026_10 = {
  date: '2026-10-09',
  title: '10/9最新アップデート：10月京都2200mエリ女チャンミ ＆ 秋新サポカ実装',
  highlights: [
    '【10月チャンピオンズミーティング】10/20〜開催決定！「京都レース場 芝 2200m（中距離・右・外・秋・エリザベス女王杯モデル）」。第3コーナーの下り坂加速（決意の直滑降）と終盤最速『王手』が勝負を支配！',
    '【11月リーグオブヒーローズ予告】次期LoHは「京都レース場 芝 3000m（長距離・右・外・秋・菊花賞モデル）」に決定。スタミナ1400+と持久力温存が焦点。',
    '【新サポートカード実装】SSR［夜に紛れて］ナリタブライアン（スタミナ/先行・長距離Tier S+）およびSSR［幽玄の誘い］アドマイヤグルーヴ（賢さ/差し・中距離Tier S+）が登場！',
    '【新シナリオ予告】10月下旬に待望の新育成シナリオ「朋、史解き ‐午式駿大祭‐」の実装が公式発表！'
  ],
  new_cards: [
    {
      name: 'SSR［夜に紛れて］ナリタブライアン',
      short_name: 'ナリタブライアン（スタミナ）',
      type: 'stamina',
      style: 'leader',
      distances: ['medium', 'long'],
      gold_skills: ['猛追', '不撓不屈'],
      uncap_guide: {
        recommended: '完凸推奨 (3凸実用ライン)',
        badge: '完凸推奨',
        tag: 'gold_skill',
        detail: '長距離・中距離のスタミナ最上位カード。高い友情ボーナスとスタミナボーナス2を誇り、菊花賞LoHや有馬記念でのスタミナ盛りにおいて環境トップクラスの性能を発揮。'
      }
    },
    {
      name: 'SSR［幽玄の誘い］アドマイヤグルーヴ',
      short_name: 'アドマイヤグルーヴ（賢さ）',
      type: 'wit',
      style: 'betweener',
      distances: ['medium'],
      gold_skills: ['大胆不敵', '好機を捉えて'],
      uncap_guide: {
        recommended: '1凸〜完凸 (1凸で金スキル・3凸〜完凸で練習急上昇)',
        badge: '1凸実用 / 完凸推奨',
        tag: 'gold_skill',
        detail: '中距離・差し専用の強力な賢さサポカ。10月京都2200mチャンミにおいて中盤の押し上げと位置取りを盤石にし、終盤接続を狙える高性能金スキルを所持。'
      }
    }
  ],
  new_events: [
    {
      id: 'cm_oct2026',
      type: 'チャンピオンズミーティング (10月エリザベス女王杯モデル)',
      title: '10/20 京都2200m チャンミ (京都 芝2200m / 秋・良)',
      badge: '10/20 本命チャンミ',
      badge_type: 'cm',
      course: {
        location: '京都レース場 芝 2200m (中距離判定・右・外回り)',
        conditions: '右回り・外回り・秋・晴・良バ場・昼',
        key_characteristics: 'スタートは正面スタンド前直線。外回りコースを使用。終盤突入は第3コーナー手前。最大の特徴は「第3コーナーの急激な下り坂」！終盤直前に下り坂が存在するため、『決意の直滑降』『下り坂巧者』による下り坂加速・接続が超強力。また終盤コーナー最速加速として『アングリング×スキーミング』（逃げ）、『王手』（先行・差し）が最重要スキル。'
      },
      fast_accel_skills: [
        {
          name: '決意の直滑降 / 直滑降',
          style: '先行',
          from: 'SSR ニシノフラワー（賢さ） / 先行因子',
          eval: '下り坂最速発動・終盤接続（先行必須）'
        },
        {
          name: '王手 / 会心の一歩',
          style: '先行・差し',
          from: 'SSR エルコンドルパサー（スピード） / 因子',
          eval: '終盤開始コーナー最速確定発動（勝敗直結）'
        },
        {
          name: 'アングリング×スキーミング',
          style: '逃げ',
          from: 'セイウンスカイ固有 (1位)',
          eval: '逃げ最速確定加速（逃げ必須）'
        },
        {
          name: '彼方、その先へ… / アナボリック',
          style: '差し・追込',
          from: 'メジロドーベル / メジロライアン固有 (5〜6位)',
          eval: '終盤コーナー有効加速'
        },
        {
          name: '下り坂巧者',
          style: '全脚質（白スキル）',
          from: '各種サポカヒント / 因子',
          eval: '下り坂速度アップ（接続狙い有力）'
        }
      ],
      team_compositions: [
        {
          name: '王手＆直滑降 先行2 ＋ 差し1（推奨度：★★★★★）',
          members: '先行2（王手＋直滑降）＋ 差し1（王手＋アドマイヤグルーヴ）',
          concept: '京都2200mのコース形態を最大限に突いた構成。先行枠に『王手』と『決意の直滑降』を両積みし、第3コーナー下り坂から終盤入り口で一気に先頭へ抜け出す勝率最上位構成。',
          recommended_uma: [
            '先行枠: ジェンティルドンナ、アグネスタキオン（新衣装）、メジロラモーヌ、サクラチヨノオー',
            '差し枠: ネオユニヴァース、ジャングルポケット、シュヴァルグラン'
          ]
        },
        {
          name: '逃げ2 ＋ 先行1（アンスキ主導権 / 推奨度：★★★★☆）',
          members: '逃げ2（競り合いハナ確保）＋ 先行1（王手追随）',
          concept: '自前逃げ2頭で前を引っ張りペースを引き上げ、アンスキから逃げ切りを狙う構成。',
          recommended_uma: [
            '逃げ枠: サイレンススズカ、アイネスフウジン、キタサンブラック',
            '先行枠: 王手持ち先行エース'
          ]
        },
        {
          name: '先行1 ＋ 差し2（アドマイヤグルーヴ採用・中盤強襲 / 推奨度：★★★★☆）',
          members: '先行1 ＋ 差し2',
          concept: '新サポカSSRアドマイヤグルーヴの金スキルで差しの中盤押し上げを図り、終盤加速でまとめて交わす構成。',
          recommended_uma: [
            '先行枠: 先行エース',
            '差し枠: ネオユニヴァース、ジャングルポケット、マチカネタンホイザ'
          ]
        }
      ],
      factor_farming: {
        parents_recommend: '親・祖父母：セイウンスカイ（アンスキ）、ニシノフラワー（つぼみ・直滑降）、メジロドーベル（彼方）、エルコンドルパサー（会心の一歩）',
        must_white_factors: [
          '京都レース場◎（スピード+60）',
          '右回り◎（スピード+60）',
          '秋ウマ娘◎（スピード+60）',
          '根幹距離◎（スタミナ+60）',
          '直滑降（先行・下り坂加速）',
          '会心の一歩（王手下位・白因子）',
          '下り坂巧者'
        ],
        auto_farming_tips: 'トレセン軒シナリオで周回。京都レース場◎・右回り◎・秋ウマ娘・直滑降の白因子を最優先回収。京都2200mはスタミナ1150+が要求されるため、青因子スタミナも重要。'
      },
      main_training: {
        target_stats: 'スピード 1750+ / スタミナ 1150+ / パワー 1400+ / 根性 1200+ / 賢さ 1350+',
        stamina_note: '京都2200m（中距離）はスタミナ消費が多めのため、スタミナ1150+ ＋ 白回復1個、またはスタミナ1250+が安定完走ライン。',
        deck_template: 'スピード2（フォーエバーヤング＋エルコンドルパサー【王手】）＋スタミナ1（新ナリタブライアン/アース）＋賢さ1（新アドマイヤグルーヴ/マックイーン/ニシノ【直滑降】）＋友人（たづな）＋自由枠1',
        key_gold_skills: '王手（先行・差し必須）、決意の直滑降（先行必須）、大胆不敵（差し）、京都レース場◎、右回り◎、秋ウマ娘◎'
      }
    }
  ]
};

/**
 * 2. Pipeline Execution
 */
function runPipeline(payload) {
  console.log(`\n[STEP 1] Applying recent update announcement (${payload.date})...`);
  meta.scenario.recent_update = {
    date: payload.date,
    title: payload.title,
    highlights: payload.highlights
  };

  console.log('[STEP 2] Updating support cards & uncap database...');
  payload.new_cards.forEach(card => {
    meta.card_uncap_guide[card.name] = card.uncap_guide;
    console.log(`  Added uncap guide for: ${card.name}`);

    card.distances.forEach(dist => {
      const distData = meta.distance_style_builds[dist];
      if (distData && distData.substitutes_by_type) {
        let list = distData.substitutes_by_type[card.type];
        if (list) {
          if (!list.includes(card.name)) {
            list.unshift(card.name);
            console.log(`  Added ${card.name} to ${dist} [${card.type}] substitutes`);
          }
        }
      }
    });
  });

  console.log('[STEP 3] Updating PvP events...');
  payload.new_events.forEach(newEvent => {
    const existingIndex = meta.events.findIndex(e => e.id === newEvent.id);
    if (existingIndex >= 0) {
      meta.events[existingIndex] = newEvent;
      console.log(`  Updated existing event: ${newEvent.id}`);
    } else {
      meta.events.unshift(newEvent);
      console.log(`  Prepended new event: ${newEvent.id} (${newEvent.title})`);
    }
  });

  console.log('[STEP 4] Syncing uma_meta_data.json and data.js...');
  fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2), 'utf8');

  const dataJsContent = `// Uma Musume Support Tool - Meta & Strategy Data
// Synced with uma_meta_data.json (Automated Pipeline)
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

  console.log('[STEP 5] Running Automated Verification Test Suite...');
  const testScriptPath = path.join(rootDir, 'scripts', 'test_all.js');
  execSync(`node "${testScriptPath}"`, { stdio: 'inherit' });

  console.log('\n✨ PIPELINE SYNC COMPLETED SUCCESSFULLY!');
}

runPipeline(updatePayload_2026_10);
