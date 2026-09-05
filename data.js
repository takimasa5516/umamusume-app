// UMA MUSUME META DATA - 2026年最新環境対応版
window.UMA_META_DATA = {
  "scenario": {
    "name": "らっしゃい！トレセン軒！ ～恩返し、始めました～",
    "version": "2026年最新シナリオ（ハフバ直後・現行環境）",
    "updated_at": "2026-09-05",
    "features": [
      "友人サポートカード（SSR駿川たづな・新仕様）がシナリオリンク・コツ獲得量増加・習得ゲージ加速に直結し全距離・全脚質で必須（無凸でも運用可）",
      "「スピード・賢さ・友人」の3種を固定軸とし、距離・脚質に応じてスタミナ・パワー・根性を差す4種以上編成が主流",
      "最新Tier最上位カード（SSRトウカイテイオー、SSRエアグルーヴ、SSRタップダンスシチー、SSRメイショウドトウ、SSRエフフォーリア等）の圧倒的練習性能を活かす構成",
      "地域選択（ラーメン地域）の「235調整（5:3:2比率）」と友情練習ボーナス+2で毎ターン確定コツ獲得"
    ]
  },
  "builds_by_distance": [
    {
      "id": "short",
      "name": "短距離",
      "icon": "⚡",
      "description": "スタミナ要求値が極小なため、スタミナを完全に切り、最新スピード・根性・賢さ2枚でスピード1800+カンストと終盤追い比べを制する編成。",
      "target_stats": {
        "speed": "1800+",
        "stamina": "750",
        "power": "1450+",
        "guts": "1400+",
        "wit": "1350+"
      },
      "factor_recommend": "パワー12 / 根性6（スタミナは初期値と合宿・イベントで700+到達可能）",
      "templates": [
        {
          "tier": "Tier 1 (最新最適・スプリント制覇型)",
          "tag": "スピ1〜2・根性1・賢さ2・友人1",
          "concept": "超練習性能の最新テイオー/タップダンスに、根性ビコーペガサスと賢さ2枚でスキルptとステータスを極限化",
          "cards": [
            { "type": "speed", "name": "SSR トウカイテイオー（天才的ユートピア）", "role": "現環境Tier SS+・圧倒的練習性能", "key": false },
            { "type": "speed", "name": "SSR タップダンスシチー（刀光散らしてClash！）", "role": "逃げ/先行最強スピード枠・スキルptボーナス", "key": false },
            { "type": "guts", "name": "SSR ビコーペガサス", "role": "最新Tier S・短距離後方/先行高火力根性", "key": false },
            { "type": "wit", "name": "SSR スティルインラブ", "role": "最高峰の賢さ練習性能・連続イベント", "key": false },
            { "type": "wit", "name": "SSR ダイワスカーレット", "role": "先行/マイル短距離加速・賢さ上限", "key": false },
            { "type": "friend", "name": "SSR 駿川たづな（新仕様）", "role": "シナリオ必須友人枠（コツ獲得・ゲージ加速）", "key": true }
          ],
          "substitutes": [
            "スピード枠 → SSRカルストンライトオ / SSRミスターシービー",
            "根性枠 → SSRオルフェーヴル / SSRサクラバクシンオー",
            "賢さ枠 → SSRメジロラモーヌ / SSRアグネスタキオン"
          ]
        },
        {
          "tier": "Tier 2 (パワー補正型)",
          "tag": "スピ2・根性1・パワー1・賢1・友人1",
          "concept": "パワーのSSRニシノフラワーやハルウララを差し込み、前線争いと登坂加速を安定化",
          "cards": [
            { "type": "speed", "name": "SSR トウカイテイオー", "role": "スピード要員", "key": false },
            { "type": "speed", "name": "SSR ミスターシービー", "role": "追込/汎用超練習性能SS", "key": false },
            { "type": "guts", "name": "SSR ビコーペガサス", "role": "短距離根性", "key": false },
            { "type": "power", "name": "SSR ニシノフラワー", "role": "短距離金加速・愛嬌○", "key": false },
            { "type": "wit", "name": "SSR スティルインラブ", "role": "賢さ枠", "key": false },
            { "type": "friend", "name": "SSR 駿川たづな（新仕様）", "role": "シナリオ必須友人", "key": true }
          ],
          "substitutes": [
            "SSRニシノフラワー → SSRウオッカ / SSRヒシアケボノ"
          ]
        },
        {
          "tier": "Budget (無課金・微課金向け)",
          "tag": "スピ2・根性1・パワ1・賢1・友人1(レンタル)",
          "concept": "SSRたづなをフレンドからレンタルし、SRと配布の最新実用枠で枠を埋める高コスパ構成",
          "cards": [
            { "type": "speed", "name": "SR スイープトウショウ", "role": "優秀なSRスピード枠", "key": false },
            { "type": "speed", "name": "配布SSR スペシャルウィーク", "role": "イベント配布スピード", "key": false },
            { "type": "guts", "name": "SR オグリキャップ", "role": "高コスパ根性枠", "key": false },
            { "type": "power", "name": "SR ヒシアケボノ", "role": "短距離向けSRパワー", "key": false },
            { "type": "wit", "name": "SR マーベラスサンデー", "role": "練習効率・得意率", "key": false },
            { "type": "friend", "name": "SSR 駿川たづな（新仕様） [レンタル]", "role": "フレンド枠固定", "key": true }
          ],
          "substitutes": [
            "SRマーベラスサンデー → 配布SSRミホノブルボン",
            "SRオグリキャップ → 配布SSRハルウララ"
          ]
        }
      ]
    },
    {
      "id": "mile",
      "name": "マイル",
      "icon": "🔥",
      "description": "東京1800m（毎日王冠）等のスタミナ消費が激しいマイル戦に対応。根性2枚はスタミナ枯渇を招くため、スピ2・賢2・友人1・スタミナ1（または因子補填）が最新鉄板構成。",
      "target_stats": {
        "speed": "1800+",
        "stamina": "950+",
        "power": "1400+",
        "guts": "1350+",
        "wit": "1350+"
      },
      "factor_recommend": "スタミナ9 / パワー9（スタミナサポカ0枚時はスタミナ15以上推奨）",
      "templates": [
        {
          "tier": "Tier 1 (最新最適・マイル王道型)",
          "tag": "スピ2・賢さ2・スタ1・友人1",
          "concept": "最新スタミナ枠メイショウドトウでスタミナ950+を担保し、エアグルーヴ＆テイオーでスピード・賢さを完封",
          "cards": [
            { "type": "speed", "name": "SSR エアグルーヴ（心覚えし、京の華）", "role": "現環境Tier SS+・先行/マイル中距離必須級", "key": false },
            { "type": "speed", "name": "SSR トウカイテイオー（天才的ユートピア）", "role": "現環境Tier SS+・爆発的ステータス上昇", "key": false },
            { "type": "stamina", "name": "SSR メイショウドトウ", "role": "トレセン軒環境で超高評価の最新スタミナ枠", "key": false },
            { "type": "wit", "name": "SSR スティルインラブ", "role": "最新最高峰の賢さ枠", "key": false },
            { "type": "wit", "name": "SSR ダイワスカーレット", "role": "ハイボルテージ・マイル金スキル", "key": false },
            { "type": "friend", "name": "SSR 駿川たづな（新仕様）", "role": "シナリオ必須友人枠", "key": true }
          ],
          "substitutes": [
            "スタミナ枠 → SSRサウンズオブアース",
            "スピード枠 → SSRグランアレグリア / SSRタイキシャトル / SSRラインクラフト",
            "賢さ枠 → SSRメジロラモーヌ"
          ]
        },
        {
          "tier": "Tier 2 (根性追い比べ特化型)",
          "tag": "スピ2・根性1・賢さ1・スタ1・友人1",
          "concept": "終盤追い比べの弾幕争いに勝つため根性ビコーペガサスを採用し、ドトウでスタミナを確保",
          "cards": [
            { "type": "speed", "name": "SSR エアグルーヴ", "role": "スピード要員", "key": false },
            { "type": "speed", "name": "SSR トウカイテイオー", "role": "スピード要員", "key": false },
            { "type": "stamina", "name": "SSR メイショウドトウ", "role": "スタミナ確保", "key": false },
            { "type": "guts", "name": "SSR ビコーペガサス", "role": "根性枠", "key": false },
            { "type": "wit", "name": "SSR スティルインラブ", "role": "賢さ枠", "key": false },
            { "type": "friend", "name": "SSR 駿川たづな（新仕様）", "role": "シナリオ必須友人", "key": true }
          ],
          "substitutes": [
            "SSRビコーペガサス → SSRオルフェーヴル"
          ]
        },
        {
          "tier": "Budget (無課金・微課金向け)",
          "tag": "スピ2・スタ1・賢1・根1・友人1(レンタル)",
          "concept": "レンタルSSRたづなを固定し、配布・SRでスタミナとスピードの基礎ラインを死守",
          "cards": [
            { "type": "speed", "name": "SR スイープトウショウ", "role": "スピードSR枠", "key": false },
            { "type": "speed", "name": "配布SSR スペシャルウィーク", "role": "配布スピード", "key": false },
            { "type": "stamina", "name": "SR マンハッタンカフェ", "role": "優秀なSRスタミナ", "key": false },
            { "type": "wit", "name": "SR アグネスタキオン", "role": "高練習効率SR賢さ", "key": false },
            { "type": "guts", "name": "SR オグリキャップ", "role": "SR根性", "key": false },
            { "type": "friend", "name": "SSR 駿川たづな（新仕様） [レンタル]", "role": "フレンド枠固定", "key": true }
          ],
          "substitutes": [
            "SRカフェ → 配布SSRメジロマックイーン"
          ]
        }
      ]
    },
    {
      "id": "medium",
      "name": "中距離",
      "icon": "🌟",
      "description": "現環境で最も人気の先行脚質が猛威を振るうカテゴリー。エフフォーリア、エアグルーヴ、メイショウドトウの三強を軸に、スピ1750+・スタ1250+を達成する編成。",
      "target_stats": {
        "speed": "1750+",
        "stamina": "1250+",
        "power": "1350+",
        "guts": "1200+",
        "wit": "1300+"
      },
      "factor_recommend": "スタミナ12 / パワー6（スタミナ1枚編成時はスタミナ因子15以上推奨）",
      "templates": [
        {
          "tier": "Tier 1 (最新最適・先行支配型)",
          "tag": "スピ2・スタ1・賢1・パワー1・友人1",
          "concept": "先行Tier SS+のエフフォーリアとエアグルーヴにメイショウドトウを合わせ、中距離金スキルと超ステータスを両立",
          "cards": [
            { "type": "speed", "name": "SSR エフフォーリア", "role": "現環境Tier SS・中距離先行最強スピード枠", "key": false },
            { "type": "speed", "name": "SSR エアグルーヴ（心覚えし、京の華）", "role": "現環境Tier SS+・中距離必須級スピード枠", "key": false },
            { "type": "stamina", "name": "SSR メイショウドトウ", "role": "トレセン軒環境の最高峰スタミナ枠", "key": false },
            { "type": "power", "name": "SSR ニシノフラワー", "role": "パワー確保・中距離スキルヒント", "key": false },
            { "type": "wit", "name": "SSR スティルインラブ", "role": "最新最高峰の賢さ枠", "key": false },
            { "type": "friend", "name": "SSR 駿川たづな（新仕様）", "role": "シナリオ必須友人枠", "key": true }
          ],
          "substitutes": [
            "スピード枠 → SSRトウカイテイオー / SSRサトノダイヤモンド",
            "スタミナ枠 → SSRサウンズオブアース / SSRスーパークリーク",
            "パワー枠 → SSRハルウララ / SSRウオッカ"
          ]
        },
        {
          "tier": "Tier 2 (スタミナ2枚ド安定型)",
          "tag": "スピ2・スタ2・賢1・友人1",
          "concept": "スタミナ事故を100%防ぎ、スタミナ1300+金回復で菊花賞・天皇賞秋を完全走破",
          "cards": [
            { "type": "speed", "name": "SSR トウカイテイオー", "role": "スピード要員", "key": false },
            { "type": "speed", "name": "SSR エフフォーリア", "role": "スピード要員", "key": false },
            { "type": "stamina", "name": "SSR メイショウドトウ", "role": "スタミナ要員1", "key": false },
            { "type": "stamina", "name": "SSR サウンズオブアース", "role": "スタミナ要員2・好転一息", "key": false },
            { "type": "wit", "name": "SSR ダイワスカーレット", "role": "賢さ要員", "key": false },
            { "type": "friend", "name": "SSR 駿川たづな（新仕様）", "role": "シナリオ必須友人", "key": true }
          ],
          "substitutes": [
            "SSRサウンズオブアース → SSRスーパークリーク"
          ]
        },
        {
          "tier": "Budget (無課金・微課金向け)",
          "tag": "スピ2・スタ2・賢1・友人1(レンタル)",
          "concept": "配布とSRスタミナ2枚でスタミナ1200を安全に確保し、レンタルたづなで育成完走",
          "cards": [
            { "type": "speed", "name": "SR スイープトウショウ", "role": "スピードSR", "key": false },
            { "type": "speed", "name": "配布SSR スペシャルウィーク", "role": "配布スピード", "key": false },
            { "type": "stamina", "name": "配布SSR メジロマックイーン", "role": "配布スタミナ", "key": false },
            { "type": "stamina", "name": "SR マンハッタンカフェ", "role": "SRスタミナ最高峰", "key": false },
            { "type": "wit", "name": "SR アグネスタキオン", "role": "高得意率SR賢さ", "key": false },
            { "type": "friend", "name": "SSR 駿川たづな（新仕様） [レンタル]", "role": "フレンド枠固定", "key": true }
          ],
          "substitutes": [
            "SRカフェ → SRゼンノロブロイ"
          ]
        }
      ]
    },
    {
      "id": "long",
      "name": "長距離",
      "icon": "🛡️",
      "description": "3000m超の過酷なスタミナ要求に応えるため、最新メイショウドトウ＋サウンズオブアース/サトノダイヤモンドによる「スタミナ2枚」が鉄板。",
      "target_stats": {
        "speed": "1750+",
        "stamina": "1450+",
        "power": "1300+",
        "guts": "1200+",
        "wit": "1250+"
      },
      "factor_recommend": "スタミナ18極振り、またはスタミナ12 / パワー6",
      "templates": [
        {
          "tier": "Tier 1 (最新最適・スタ2カンスト型)",
          "tag": "スピ2・スタ2・賢1・友人1",
          "concept": "新環境スタミナ枠ドトウ＋アースでスタミナ1450カンストを狙い、エフフォーリアでスピード1750を両立",
          "cards": [
            { "type": "speed", "name": "SSR エフフォーリア", "role": "長距離先行・圧倒的スピード練習", "key": false },
            { "type": "speed", "name": "SSR サトノダイヤモンド", "role": "長距離特化・現環境Tier SS+スピード枠", "key": false },
            { "type": "stamina", "name": "SSR メイショウドトウ", "role": "トレセン軒環境の最新スタミナ枠", "key": false },
            { "type": "stamina", "name": "SSR サウンズオブアース", "role": "好転一息・超練習性能", "key": false },
            { "type": "wit", "name": "SSR スティルインラブ", "role": "賢さ上限・スキル回収", "key": false },
            { "type": "friend", "name": "SSR 駿川たづな（新仕様）", "role": "シナリオ必須友人枠", "key": true }
          ],
          "substitutes": [
            "スタミナ枠 → SSRスーパークリーク / SSRシュヴァルグラン",
            "スピード枠 → SSRトウカイテイオー / SSRミスターシービー"
          ]
        },
        {
          "tier": "Tier 2 (追込長距離型)",
          "tag": "スピ2・スタ2・賢1・友人1",
          "concept": "追込必須のSSRミスターシービーを採用し、終盤の直線一気と圧倒的末脚を叩き込む構成",
          "cards": [
            { "type": "speed", "name": "SSR ミスターシービー", "role": "追込育成必須級・現環境Tier SS", "key": false },
            { "type": "speed", "name": "SSR サトノダイヤモンド", "role": "スピード要員", "key": false },
            { "type": "stamina", "name": "SSR メイショウドトウ", "role": "スタミナ要員1", "key": false },
            { "type": "stamina", "name": "SSR スーパークリーク", "role": "円弧のマエストロ（金回復）", "key": false },
            { "type": "wit", "name": "SSR ダイワスカーレット", "role": "賢さ枠", "key": false },
            { "type": "friend", "name": "SSR 駿川たづな（新仕様）", "role": "シナリオ必須友人", "key": true }
          ],
          "substitutes": [
            "SSRクリーク → SSRサウンズオブアース"
          ]
        },
        {
          "tier": "Budget (無課金・微課金向け)",
          "tag": "スピ2・スタ2・賢1・友人1(レンタル)",
          "concept": "レンタルSSRクリークでマエストロを確保し、配布・SRでスタミナを死守",
          "cards": [
            { "type": "speed", "name": "SR スイープトウショウ", "role": "スピードSR", "key": false },
            { "type": "speed", "name": "配布SSR スペシャルウィーク", "role": "配布スピード", "key": false },
            { "type": "stamina", "name": "SSR スーパークリーク [レンタル]", "role": "金回復マエストロ確保枠", "key": false },
            { "type": "stamina", "name": "SR マンハッタンカフェ", "role": "スタミナSR", "key": false },
            { "type": "wit", "name": "SR アグネスタキオン", "role": "賢さSR", "key": false },
            { "type": "friend", "name": "SSR 駿川たづな（新仕様） [自前所持前提/または逆レンタル]", "role": "シナリオ友人枠", "key": true }
          ],
          "substitutes": [
            "たづなを持っていない場合はたづなレンタル、スタミナ枠を配布SSRマックイーン等に切替"
          ]
        }
      ]
    },
    {
      "id": "dirt",
      "name": "ダート",
      "icon": "🏜️",
      "description": "最新Tier SのSSRハルウララ（パワー）がダート汎用金スキルと高練習性能で完全必須級に君臨。パワーと根性を兼ね備えた最新ダート特化編成。",
      "target_stats": {
        "speed": "1800+",
        "stamina": "950+",
        "power": "1450+",
        "guts": "1350+",
        "wit": "1300+"
      },
      "factor_recommend": "パワー12 / スタミナ6（ダート適性A化因子も必須）",
      "templates": [
        {
          "tier": "Tier 1 (最新最適・ダート制覇型)",
          "tag": "スピ2・パワー1・根性1・賢1・友人1",
          "concept": "現環境ダート最強パワー枠のハルウララとタップダンスシチー/エアグルーヴで砂の直線を完全制圧",
          "cards": [
            { "type": "speed", "name": "SSR タップダンスシチー（刀光散らしてClash！）", "role": "逃げ/先行最高峰スピード", "key": false },
            { "type": "speed", "name": "SSR トウカイテイオー（天才的ユートピア）", "role": "圧倒的練習性能SS+", "key": false },
            { "type": "power", "name": "SSR ハルウララ", "role": "現環境Tier S・ダート専用金スキル＆超高練習性能", "key": false },
            { "type": "guts", "name": "SSR ビコーペガサス", "role": "根性練習の爆発力", "key": false },
            { "type": "wit", "name": "SSR スティルインラブ", "role": "賢さ上限・汎用スキル", "key": false },
            { "type": "friend", "name": "SSR 駿川たづな（新仕様）", "role": "シナリオ必須友人枠", "key": true }
          ],
          "substitutes": [
            "パワー枠 → SSRスマートファルコン / SSRコパノリッキー",
            "根性枠 → SSRオルフェーヴル / SSRゴールドシチー",
            "スピード枠 → SSRエアグルーヴ"
          ]
        },
        {
          "tier": "Budget (無課金・微課金向け)",
          "tag": "スピ2・根性1・パワ1・賢1・友人1(レンタル)",
          "concept": "SR枠でダートスキルとステータスを補い、SSRたづなで育成を安定化",
          "cards": [
            { "type": "speed", "name": "SR スイープトウショウ", "role": "スピードSR", "key": false },
            { "type": "speed", "name": "配布SSR スペシャルウィーク", "role": "配布スピード", "key": false },
            { "type": "power", "name": "SR ダイタクヘリオス", "role": "パワーSR", "key": false },
            { "type": "guts", "name": "SR オグリキャップ", "role": "根性SR", "key": false },
            { "type": "wit", "name": "SR アグネスタキオン", "role": "賢さSR", "key": false },
            { "type": "friend", "name": "SSR 駿川たづな（新仕様） [レンタル]", "role": "フレンド枠固定", "key": true }
          ],
          "substitutes": [
            "SRダイタクヘリオス → 配布SSRミホノブルボン"
          ]
        }
      ]
    }
  ],
  "running_styles": [
    {
      "id": "runner",
      "name": "逃げ (Runner)",
      "icon": "🏃",
      "meta_status": "「タップダンスシチー」実装により復権。序盤の先頭争い（地固め・盤石）でハナを取り切れば独走可能。",
      "concept": "序盤の加速スキル「盤石の構え/地固め」「先手必勝」で先頭を奪い、中盤の速度スキルで後続を突き放す構成。",
      "key_skills": [
        { "name": "盤石の構え / 地固め", "timing": "序盤加速", "from": "SSR ミホノブルボン / 因子", "importance": "最重要（必須）" },
        { "name": "先手必勝 / 先駆け", "timing": "序盤加速", "from": "SSR タップダンスシチー / SSR カルストンライトオ", "importance": "最重要（必須）" },
        { "name": "危険回避 + ポジションセンス", "timing": "序盤位置取り", "from": "サポカ各種 / 因子", "importance": "重要（外逃げコンボ）" },
        { "name": "アングリング×スキーミング", "timing": "終盤加速（継承）", "from": "セイウンスカイ固有継承", "importance": "終盤必須加速" }
      ],
      "recommended_cards": [
        { "type": "speed", "name": "SSR タップダンスシチー（刀光散らしてClash！）", "role": "逃げ必須級スピード枠・スキルptボーナス", "key": false },
        { "type": "speed", "name": "SSR カルストンライトオ", "role": "短距離逃げスピード・先手必勝", "key": false },
        { "type": "wit", "name": "SSR ミホノブルボン", "role": "盤石の構え確定入手枠", "key": false },
        { "type": "wit", "name": "SSR スティルインラブ", "role": "最高峰の賢さ練習性能", "key": false },
        { "type": "guts", "name": "SSR ビコーペガサス", "role": "短距離逃げ追い比べ対策", "key": false },
        { "type": "friend", "name": "SSR 駿川たづな（新仕様）", "role": "シナリオ必須友人枠", "key": true }
      ],
      "strategy_tips": "逃げは2人以上出走時に「競り合い」が発生して速度が急上昇します。アンスキ等の終盤加速を最速発動させるため、中盤終了時点で必ず先頭（1位）をキープできる中盤速度スキルの厚盛りが肝心です。"
    },
    {
      "id": "leader",
      "name": "先行 (Leader)",
      "icon": "🏇",
      "meta_status": "現環境Tierトップ・採用率No.1！「エフフォーリア」「トウカイテイオー」「エアグルーヴ」と最強カードが集中。",
      "concept": "終盤加速「鍔迫り合い」や「ハイボルテージ」を発動させ、安定した位置取りから抜け出す現環境で最も勝率の高い王道脚質。",
      "key_skills": [
        { "name": "鍔迫り合い / 真っ向勝負", "timing": "終盤加速", "from": "SSR エフフォーリア / SSR ダイタクヘリオス", "importance": "最重要（必須）" },
        { "name": "ハイボルテージ / 心弾んで", "timing": "終盤加速（短距離/マイル）", "from": "SSR ダイワスカーレット", "importance": "最重要（短距離・マイル）" },
        { "name": "直滑降", "timing": "下り坂加速", "from": "SSR ニシノフラワー / サポカ各種", "importance": "京都・中山等で強力" },
        { "name": "アンストッパブル / 攻めの姿勢", "timing": "中盤速度", "from": "SSR エアグルーヴ / SSR トウカイテイオー", "importance": "重要（好位置キープ）" }
      ],
      "recommended_cards": [
        { "type": "speed", "name": "SSR トウカイテイオー（天才的ユートピア）", "role": "現環境Tier SS+・先行中距離爆発力", "key": false },
        { "type": "speed", "name": "SSR エアグルーヴ（心覚えし、京の華）", "role": "現環境Tier SS+・先行中距離必須級", "key": false },
        { "type": "speed", "name": "SSR エフフォーリア", "role": "先行最強格・鍔迫り合い", "key": false },
        { "type": "stamina", "name": "SSR メイショウドトウ", "role": "中長距離の先行スタミナ確保", "key": false },
        { "type": "wit", "name": "SSR ダイワスカーレット", "role": "ハイボルテージ・賢さ上限", "key": false },
        { "type": "friend", "name": "SSR 駿川たづな（新仕様）", "role": "シナリオ必須友人枠", "key": true }
      ],
      "strategy_tips": "先行は終盤開始時の順位条件（1〜5位、チャンミ時は2〜5位）を満たすことが勝利の絶対条件です。逃げ不在時でも埋もれないよう、中盤速度スキルを2〜3個連続発動させて好位（前目）を死守しましょう。"
    },
    {
      "id": "betweener",
      "name": "差し (Betweener)",
      "icon": "⚡",
      "meta_status": "中盤の位置取り争いが激化する中、終盤の爆発力と追い比べ適性が極めて高く、競技場・チャンミの決め手として人気。",
      "concept": "中盤に息を潜め、終盤突入と同時に「乗り換え上手」「無我夢中（中長距離）」などの強烈な加速で一気に先行集団を飲み込む構成。",
      "key_skills": [
        { "name": "無我夢中", "timing": "終盤加速（中長距離）", "from": "SSR シンボリクリスエス / 継承", "importance": "長距離差し必須" },
        { "name": "乗り換え上手 / 差し切り体勢", "timing": "終盤加速", "from": "SSR ナイスネイチャ / サポカ各種", "importance": "汎用終盤加速" },
        { "name": "起死回生 / ワンチャンス", "timing": "終盤加速（中距離）", "from": "SSR シリウスシンボリ / サポカ各種", "importance": "中距離差し強力" },
        { "name": "迅速果断 / 位置取り押し上げ", "timing": "中盤速度", "from": "SSR ミスターシービー / SSR トウカイテイオー", "importance": "終盤突入時の射程圏確保" }
      ],
      "recommended_cards": [
        { "type": "speed", "name": "SSR エアグルーヴ（心覚えし、京の華）", "role": "差しでもSS+・高練習性能", "key": false },
        { "type": "speed", "name": "SSR ミスターシービー", "role": "中盤位置取り・差し汎用", "key": false },
        { "type": "stamina", "name": "SSR メイショウドトウ", "role": "スタミナ確保・差しスキル", "key": false },
        { "type": "power", "name": "SSR ウオッカ", "role": "パワー強化・差し加速", "key": false },
        { "type": "wit", "name": "SSR スティルインラブ", "role": "最高峰の賢さ練習性能", "key": false },
        { "type": "friend", "name": "SSR 駿川たづな（新仕様）", "role": "シナリオ必須友人枠", "key": true }
      ],
      "strategy_tips": "差しは前が詰まる「バ群ブロック事故」を防ぐため、パワー1350以上と賢さ1300以上が極めて重要です。また、下り坂やコーナーで外に膨れすぎないよう、コーナー巧者や差し直線・コーナーを◎まで取得しましょう。"
    },
    {
      "id": "chaser",
      "name": "追込 (Chaser)",
      "icon": "🌪️",
      "meta_status": "「ミスターシービー」「アーモンドアイ」を主軸にしたロマンと確実性を兼ね備えた破壊力抜群の脚質。",
      "concept": "最後方から全ウマ娘をごぼう抜きにする豪快な末脚。「迫る影」や「直線一気」の直線最速加速から最高速へ一気に到達。",
      "key_skills": [
        { "name": "迫る影 / 直線一気", "timing": "終盤直線加速", "from": "SSR ミスターシービー / ナリタタイシン固有等", "importance": "最重要（追込の心臓）" },
        { "name": "強攻策 / 早仕掛け", "timing": "中盤速度（長距離/中距離）", "from": "SSR ミスターシービー / サポカ各種", "importance": "最重要（中盤押し上げ）" },
        { "name": "抜群の切れ味 / 切れ味", "timing": "終盤加速", "from": "SSR スイープトウショウ", "importance": "重要加速" },
        { "name": "烈火の如く / 鬼気迫る", "timing": "終盤速度", "from": "サポカ各種 / 固有継承", "importance": "最高速強化" }
      ],
      "recommended_cards": [
        { "type": "speed", "name": "SSR ミスターシービー", "role": "追込育成完全必須級・現環境Tier SS", "key": false },
        { "type": "speed", "name": "SSR アーモンドアイ", "role": "最新トップスピード・スキルptボーナス", "key": false },
        { "type": "power", "name": "SSR タマモクロス", "role": "追込スキル・パワー大幅上昇", "key": false },
        { "type": "stamina", "name": "SSR メイショウドトウ", "role": "長距離追込スタミナ確保", "key": false },
        { "type": "wit", "name": "SSR スティルインラブ", "role": "賢さ上限・安定した位置取り", "key": false },
        { "type": "friend", "name": "SSR 駿川たづな（新仕様）", "role": "シナリオ必須友人枠", "key": true }
      ],
      "strategy_tips": "追込は終盤の直線で加速スキル（迫る影・直線一気）が即時発動するコース（菊花賞・有馬記念・天皇賞春など）で無類の強さを誇ります。中盤で離されすぎないよう「強攻策」の取得は必須です。"
    }
  ],
  "events": [
    {
      "id": "cm_sep2026",
      "type": "チャンピオンズミーティング (MILE)",
      "title": "9月 チャンミ (東京 芝1800m / 毎日王冠)",
      "badge": "開催予定",
      "badge_type": "cm",
      "course": {
        "location": "東京レース場 芝 1800m (マイル判定)",
        "conditions": "秋 / 晴 / 良バ場 / 昼 / 左回り",
        "key_characteristics": "スタート地点は2コーナー奥ポケット。直線が約525mと非常に長い。終盤開始が『直線』判定となるため、最終コーナー加速（紅焔ギア等）が無効。『終盤』表記の継承加速やランダム加速が勝負の分かれ目。"
      },
      "fast_accel_skills": [
        { "name": "つぼみ、ほころぶ時", "style": "先行・差し", "from": "ニシノフラワー固有継承 (3〜4位)", "eval": "最速発動・最重要" },
        { "name": "ヴィクトリーショット！", "style": "先行", "from": "タイキシャトル固有継承 (3〜4位)", "eval": "有効加速" },
        { "name": "ハイボルテージ / 心弾んで", "style": "先行・逃げ", "from": "SSR ダイワスカーレット (1〜5位)", "eval": "最重要金加速" },
        { "name": "鍔迫り合い / 真っ向勝負", "style": "先行", "from": "SSR エフフォーリア (1〜5位)", "eval": "強力ランダム加速" },
        { "name": "アングリング×スキーミング", "style": "逃げ", "from": "セイウンスカイ固有継承 (1位)", "eval": "逃げ必須" },
        { "name": "電光石火 / 一足飛び", "style": "差し・追込", "from": "SSR ダイイチルビー", "eval": "差し追込最重要" },
        { "name": "レッツ・アナボリック！", "style": "差し・追込", "from": "メジロライアン固有継承 (6位)", "eval": "後方一発逆転枠" }
      ],
      "team_compositions": [
        {
          "name": "パターンA: 3エース先行特化（推奨度：★★★★★）",
          "members": "先行2 ＋ 差し1（または先行3）",
          "concept": "自キャラ同士で最終直線での「追い比べ」を高確率で誘発させる現環境最強の勝ち筋構成。デバフを入れるより自前で好位を固めるのが有効。",
          "recommended_uma": [
            "先行枠: ダイイチルビー、ダイタクヘリオス、タイキシャトル、ニシノフラワー",
            "差し枠: ネオユニヴァース、グランアレグリア、メジロドーベル"
          ]
        },
        {
          "name": "パターンB: 逃げ牽引＋先行2エース（推奨度：★★★★☆）",
          "members": "逃げ1 ＋ 先行2",
          "concept": "自前の逃げ（タップダンスシチー等）でレースペースを引っ張り、相手の逃げを潰しつつ後ろの先行エース2人を有利な展開に導く構成。",
          "recommended_uma": [
            "逃げ枠: タップダンスシチー、サイレンススズカ、アイネスフウジン",
            "先行枠: 先行ウマ娘トップ層"
          ]
        }
      ],
      "factor_farming": {
        "parents_recommend": "親・祖父母：ニシノフラワー（つぼみ）、タイキシャトル（ヴィクショ）、セイウンスカイ（アンスキ／逃げ用）、メジロライアン（アナボ／後方用）",
        "must_white_factors": [
          "東京レース場◎（スピード補正+60）",
          "根幹距離◎（スピード補正+60）",
          "左回り◎（スピード補正+60）",
          "秋ウマ娘◎（スピード補正+60）",
          "良バ場◎（パワー補正+60）",
          "マイルコーナー◎ / マイル直線◎",
          "垂れウマ回避 / 巧みなステップ"
        ],
        "auto_farming_tips": "トレセン軒シナリオで新機能「オート育成」を活用。重視項目を『スキルヒント・レース出走優先』に設定し、G1マイル・中距離レース（安田・マイルCS・天皇賞秋等）を自動出走させることで、相性ボーナスと白因子付き親を短時間で量産可能。"
      },
      "main_training": {
        "target_stats": "スピード 1850+ / スタミナ 950+ / パワー 1400+ / 根性 1350+ / 賢さ 1350+",
        "stamina_note": "東京1800mはマイル区分ながらスタミナ消費が激しい。スタミナ950+またはスタミナ850＋金回復1個が必須ライン。",
        "deck_template": "スピード2（エアグルーヴ＋テイオー）＋スタミナ1（メイショウドトウ）＋賢さ2（スティルインラブ＋ダスカ）＋友人（SSRたづな）",
        "key_gold_skills": "ハイボルテージ、鍔迫り合い、アンストッパブル、全身全霊（またはシナリオ金スキル）"
      }
    },
    {
      "id": "loh_next",
      "type": "リーグオブヒーローズ (MEDIUM)",
      "title": "次期 LoH (中山 芝2000m / 皐月賞条件)",
      "badge": "準備推奨",
      "badge_type": "loh",
      "course": {
        "location": "中山レース場 芝 2000m (中距離)",
        "conditions": "春・秋想定 / 晴 / 良バ場 / 昼 / 右回り・内",
        "key_characteristics": "スタンド前の直線坂下からスタート。コーナーが4つあり、最終直線は310mと短い。終盤開始が第3〜第4コーナー付近になるため、コーナー加速スキルが即時発動する。"
      },
      "fast_accel_skills": [
        { "name": "アングリング×スキーミング", "style": "逃げ", "from": "セイウンスカイ固有 (1位)", "eval": "逃げ最速確定加速" },
        { "name": "あっぱれ大盤振る舞い！", "style": "逃げ・先行", "from": "正月キタサンブラック固有 (1〜3位)", "eval": "極めて有効" },
        { "name": "鍔迫り合い / 直滑降", "style": "先行", "from": "SSR エフフォーリア / ニシノフラワー", "eval": "先行必須" },
        { "name": "王手 / 会心の一歩", "style": "先行・差し", "from": "SSR エルコンドルパサー", "eval": "中距離特効終盤加速" }
      ],
      "team_compositions": [
        {
          "name": "LoH鉄板: 欠損回避 先行3エース（推奨度：★★★★★）",
          "members": "先行3（安定感最大）",
          "concept": "LoHは1〜3位独占によるポイント最大化が目的。バ群に埋もれやすい差し・追込を避け、出遅れリスクの低い先行3頭で1〜3位を固めるのが最もスコアが安定。",
          "recommended_uma": [
            "エフフォーリア、トウカイテイオー、ネオユニヴァース（先行改造）、サクラチヨノオー"
          ]
        },
        {
          "name": "逃げ1 ＋ 先行2（推奨度：★★★★☆）",
          "members": "逃げ1（ペースメーカー）＋ 先行2",
          "concept": "自前逃げで先頭を死守しつつ、後続の先行エースで2〜3位を拾う手堅い構成。",
          "recommended_uma": [
            "逃げ枠: バレンタインアイネスフウジン、タップダンスシチー",
            "先行枠: 先行強キャラ"
          ]
        }
      ],
      "factor_farming": {
        "parents_recommend": "親・祖父母：正月キタサンブラック、セイウンスカイ、ニシノフラワー、エルコンドルパサー",
        "must_white_factors": [
          "中山レース場◎（スタミナ補正+60）",
          "右回り◎（スピード補正+60）",
          "根幹距離◎（スピード補正+60）",
          "中距離コーナー◎ / 直線◎",
          "直滑降（中山の下り坂加速用）",
          "ポジショニング・序盤速度各種"
        ],
        "auto_farming_tips": "中距離G1（皐月賞・有馬記念・ホープフルS等）の中山適性重賞を網羅した親を作成。安定した順位を出すため、出遅れを防ぐ『コンセントレーション』の白因子も優先取得。"
      },
      "main_training": {
        "target_stats": "スピード 1800+ / スタミナ 1200+ / パワー 1400+ / 根性 1200+ / 賢さ 1300+",
        "stamina_note": "2000mの中山は急坂が2回あるため、スタミナ1200+金回復1個が欠損防止のセーフティライン。",
        "deck_template": "スピード2（エフフォーリア＋テイオー）＋スタミナ1〜2（メイショウドトウ＋アース）＋賢さ1〜2＋友人（たづな）",
        "key_gold_skills": "王手、鍔迫り合い、アンストッパブル、円弧のマエストロ（または好転一息）"
      }
    }
  ],
  "region_strategies": {
    "rule_explanation": {
      "title": "「235調整」とは？（最重要セオリー）",
      "summary": "トレセン軒シナリオでは、各地域で得られる習得ゲージの基礎獲得量が「2・3・5」の比率になるように地域を選択する手法です。",
      "mechanism": "友情練習発生時にゲージ獲得ボーナス「+2」が加算されます。これにより基礎値「5」の地域では【5 + 2 = 7】または端数なしで毎ターン確実に1個の「トッピングのコツ」が確定ストックされ、試食会の開催頻度が劇的に向上します。",
      "benefit": "試食会を多く開催できる＝シナリオ特別ボーナスステータス＆ヒント大量獲得に直結します。"
    },
    "matrix": [
      {
        "grade": "ジュニア級 (Junior)",
        "period": "メイクデビュー前 〜 ジュニア級12月後半",
        "focus": "サポカ絆ゲージ溜め & 試食会下地作り",
        "distances": {
          "short": {
            "recommended": ["函館 (2)", "東京 (3)", "阪神 (5)"],
            "priority_stats": "スピード・賢さ・パワー",
            "action_plan": "絆上げを最優先しつつ、235の土台を作る。東京・函館を早めに選択し、友情練習発生時に阪神へ集中。"
          },
          "mile": {
            "recommended": ["函館 (2)", "東京 (3)", "阪神 (5)"],
            "priority_stats": "スピード・パワー",
            "action_plan": "序盤のたづなお出かけ解放を最優先。ゲージ獲得が5の阪神を軸に据えて試食会を1年目冬までに1回実施。"
          },
          "medium": {
            "recommended": ["函館 (2)", "京都 (3)", "阪神 (5)"],
            "priority_stats": "スタミナ・スピード",
            "action_plan": "スタミナ補正のある京都を交えつつ、基礎ゲージ235をキープ。ジュニア期のスタミナ事故を未然に防ぐ。"
          },
          "long": {
            "recommended": ["函館 (2)", "京都 (3)", "阪神 (5)"],
            "priority_stats": "スタミナ重視",
            "action_plan": "長距離ではクラシック初頭のレースまでにスタミナ350+を目指すため、京都のスタミナ配分を厚めにする。"
          },
          "dirt": {
            "recommended": ["函館 (2)", "東京 (3)", "阪神 (5)"],
            "priority_stats": "パワー・スピード",
            "action_plan": "短距離・マイルと同様に絆上げ重視。パワーのコツを拾いやすい東京を優先。"
          }
        }
      },
      {
        "grade": "クラシック級 (Classic)",
        "period": "1月前半 〜 12月後半（夏合宿含む）",
        "focus": "235調整のフル回転 & 夏合宿でのコツ全消費",
        "distances": {
          "short": {
            "recommended": ["東京 (3)", "阪神 (5)", "新潟 (2)"],
            "priority_stats": "スピード・根性・パワー",
            "action_plan": "友情練習が連続して発生するゴールデンタイム。5ゲージの阪神で毎ターンコツをストックし、合宿で一気に試食会を展開。"
          },
          "mile": {
            "recommended": ["東京 (3)", "阪神 (5)", "函館 (2)"],
            "priority_stats": "スピード・パワー・根性",
            "action_plan": "マイル戦用スキル（マイルの支配者・ハイボルテージ等）のヒント獲得を意識し、賢さ・スピード友情を重ねる。"
          },
          "medium": {
            "recommended": ["京都 (3)", "阪神 (5)", "東京 (2)"],
            "priority_stats": "スタミナ・スピード",
            "action_plan": "クラシック三冠（皐月・ダービー・菊花）に備えスタミナを650〜700まで押し上げる。阪神の5枠で確実にスタミナボーナスを得る。"
          },
          "long": {
            "recommended": ["京都 (5)", "阪神 (3)", "函館 (2)"],
            "priority_stats": "スタミナ最優先",
            "action_plan": "菊花賞・有馬記念に向けてスタミナ枠を「5」にスイッチ。スタミナ友情練習が発生した瞬間に大量のコツとステを回収。"
          },
          "dirt": {
            "recommended": ["東京 (3)", "阪神 (5)", "大井/函館 (2)"],
            "priority_stats": "パワー・根性",
            "action_plan": "JDD等交流重賞の出走タイミングに合わせ、パワー友情と東京・阪神のコツをフル回転。"
          }
        }
      },
      {
        "grade": "シニア級 (Senior)",
        "period": "1月前半 〜 URAファイナルズ",
        "focus": "目標ステータスカンスト調整 & 金スキル総回収",
        "distances": {
          "short": {
            "recommended": ["札幌 (特化)", "東京 (3)", "阪神 (5)"],
            "priority_stats": "スピード1800カンスト・パワー1450",
            "action_plan": "スピードが上限（1800）に届いていない場合はシニア級で「札幌」を軸に組み替える。賢さ友情で体力管理。"
          },
          "mile": {
            "recommended": ["札幌 (特化)", "東京 (3)", "阪神 (5)"],
            "priority_stats": "スピード1800・根性1350",
            "action_plan": "シニア夏合宿までに不足しているステータス（根性 or パワー）を補う地域へ微調整。スピードは札幌で仕上げる。"
          },
          "medium": {
            "recommended": ["阪神 (5)", "京都 (3)", "札幌 (2)"],
            "priority_stats": "スタミナ1250・スピード1750",
            "action_plan": "スタミナが1200に届いているか確認。不足時は京都・阪神を維持、足りていれば札幌を入れてスピードカンストへ。"
          },
          "long": {
            "recommended": ["京都 (5)", "阪神 (3)", "札幌 (2)"],
            "priority_stats": "スタミナ1450カンスト",
            "action_plan": "スタミナ1450のカンストを目指し京都の5配分を徹底。春シニア三冠・有馬を連覇してシナリオ金スキルを完全取得。"
          },
          "dirt": {
            "recommended": ["東京 (5)", "札幌 (3)", "阪神 (2)"],
            "priority_stats": "パワー1450・スピード1800",
            "action_plan": "フェブラリーS、チャンピオンズC、東京大賞典を制覇しつつ、東京のパワー補正でパワーカンストを狙う。"
          }
        }
      }
    ]
  },
  "knowledge_sources": [
    {
      "title": "【ウマ娘】現環境最強サポカTier SS+解説とトレセン軒の最適サポカ選び",
      "author": "大手検証系YouTuber / 攻略班",
      "type": "YouTube動画",
      "badge": "YouTube",
      "key_takeaways": [
        "トウカイテイオー（天才的ユートピア）、エアグルーヴ、タップダンスシチーがスピード枠のTier SS+として君臨。",
        "先行脚質の圧倒的優位環境により、エフフォーリア（先行中距離）とドトウ（最新スタミナ枠）の評価が急上昇。",
        "SSR駿川たづな（新仕様）はお出かけ回復・体力消費軽減・コツ獲得加速の3重ブーストにより全脚質で必須枠。無凸でも採用価値が他完凸SSRを凌駕。"
      ]
    },
    {
      "title": "トレセン軒 距離別テンプレ編成と「スピ・賢さ・たづな」固定3枠の黄金比",
      "author": "GameWith / Game8 最新攻略まとめ",
      "type": "Web攻略記事",
      "badge": "Web記事",
      "key_takeaways": [
        "固定枠（スピード＋賢さ＋たづな）に、脚質・距離に応じたスタミナや根性、パワーを足す4種練習編成が最高効率。",
        "マイル戦（東京1800m毎日王冠等）ではスタミナ枯渇を防ぐためスタミナ枠1枚採用またはスタミナ因子の厚盛りが勝負の鍵。",
        "ダートではパワー枠のSSRハルウララが専用金スキルと高練習性能で最優先ピックに定着。"
      ]
    },
    {
      "title": "note検証勢による地域選択の統計的最適解（235調整 函館・東京・阪神）",
      "author": "有志研究note",
      "type": "note検証",
      "badge": "note",
      "key_takeaways": [
        "ジュニア・クラシックを通して『函館・東京・阪神（235）』を維持したプレイヤーの平均試食会回数は12.4回（従来比+2.8回）。",
        "シニア級で札幌（スピード重視）に切り替える『変則235』が現在のチャンミ上位育成者の標準構成となっている。"
      ]
    }
  ]
};
