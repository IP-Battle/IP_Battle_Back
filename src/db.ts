import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./database.db");

export const initDatabase = () => {
  
  db.serialize(() => {
    /*
    questionテーブルの作成
    id: 問題ID
    questionText: 問題文
    aSelect: 選択肢ア
    iSelect: 選択肢イ
    uSelect: 選択肢ウ
    eSelect: 選択肢エ
    answer: 正解
    explanation: 解説
    accuracyRate: 正答率
    */
    db.run("CREATE TABLE IF NOT EXISTS question(id INTEGER PRIMARY KEY, questionText TEXT, aSelect TEXT, iSelect TEXT, uSelect TEXT, eSelect TEXT, answer TEXT, explanation TEXT, accuracyRate REAL)");

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 1, "マーケティングオートメーション (MA) に関する記述として、最も適切なものは どれか。", "企業内に蓄積された大量のデータを分析して、事業戦略などに有効活用する。", "小売業やサービス業において、販売した商品単位の情報の収集・蓄積及び分析 を行う。", "これまで人間が手作業で行っていた定型業務を、AIや機械学習などを取り入れ たソフトウェアのロボットが代行することによって自動化や効率化を図る。", "見込み顧客の抽出,獲得、育成などの営業活動を効率化する。", "エ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 2, "情報システムに不正に侵入し、サービスを停止させて社会的混乱を生じさせるような行為に対して、国全体で体系的に防御施策を講じるための基本理念を定め、国の責務などを明らかにした法律はどれか。", "公益通報者保護法", "サイバーセキュリティ基本法", "不正アクセス禁止法", "プロバイダ責任制限法", "イ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 3, "未来のある時点に目標を設定し、そこを起点に現在を振り返り、目標実現のために 現在すべきことを考える方法を表す用語として、最も適切なものはどれか。", "PoC (Proof of Concept)", "PoV (Proof of Value)", "バックキャスティング", "フォアキャスティング", "ウ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 4, "従来の金融情報システムは堅ろう性が高い一方、柔軟性に欠け、モバイル技術など の情報革新に追従したサービスの迅速な提供が難しかった。これを踏まえて、インタ ーネット関連技術の取込みやそれらを活用するベンチャー企業と組むなどして、新た な価値や革新的なサービスを提供していく潮流を表す用語として、最も適切なものは どれか。", "オムニチャネル", "フィンテック", "ブロックチェーン", "ワントゥワンマーケティング", "イ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 5, "ベンチャーキャピタルに関する記述として、最も適切なものはどれか。", "新しい技術の獲得や、規模の経済性の追求などを目的に、他の企業と共同出資会 社を設立する手法", "株式売却による利益獲得などを目的に、新しい製品やサービスを武器に市場に参 入しようとする企業に対して出資などを行う企業", "新サービスや技術革新などの創出を目的に、国や学術機関、他の企業など外部の 組織と共創関係を結び、積極的に技術や資源を交換し、自社に取り込む手法", "特定された課題の解決を目的に、一定の期間を定めて企業内に立ち上げられ、構 成員を関連部門から招集し、目的が達成された時点で解散する組織", "イ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 6, "技術戦略の策定や技術開発の推進といった技術経営に直接の責任をもつ役職はどれか。", "CEO", "CFO", "COO", "CTO", "エ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 7, "システム開発の上流工程において、業務プロセスのモデリングを行う目的として、 最も適切なものはどれか。", "業務プロセスで取り扱う大量のデータを、統計的手法や AI 手法などを用いて分析し、データ間の相関関係や隠れたパターンなどを見いだすため", "業務プロセスを可視化することによって、適切なシステム設計のベースとなる情報を整備し、関係者間で解釈を共有できるようにするため", "個々の従業員がもっている業務に関する知識・経験やノウハウを社内全体で共有し、創造的なアイディアを生み出すため", "プロジェクトに必要な要員を調達し、チームとして組織化して、プロジェクト の目的の達成に向けて一致団結させるため", "イ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 8, "企業の戦略立案やマーケティングなどで使用されるフェルミ推定に関する記述とし て、最も適切なものはどれか。", "正確に算出することが極めて難しい数量に対して、把握している情報と論理的な 思考プロセスによって概数を求める手法である。", "特定の集団と活動を共にしたり、人々の動きを観察したりすることによって、慣 し 習や嗜好,地域や組織を取り巻く文化を類推する手法である。", "入力データと出力データから、その因果関係を統計的に推定する手法である。", "有識者のグループに繰り返し同一のアンケート調査とその結果のフィードバック を行うことによって、ある分野の将来予測に関する総意を得る手法である。", "ア", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 9, "不正競争防止法で規定されている限定提供データに関する記述として、最も適切な ものはどれか。", "特定の第三者に対し、1回に限定して提供する前提で保管されている技術上又は 営業上の情報は限定提供データである。", "特定の第三者に提供する情報として電磁的方法によって相当量蓄積され管理され ている技術上又は営業上の情報 (秘密として管理されているものを除く)は限定提 供データである。", "特定の第三者に提供するために、金庫などで物理的に管理されている技術上又は 営業上の情報は限定提供データである。", "不正競争防止法に定めのある営業秘密は限定提供データである。", "イ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 10, "品質に関する組織やプロセスの運営管理を標準化し、マネジメントの質や効率の向 上を目的とした方策として、適切なものはどれか。", "ISMSの導入", "ISO 9001の導入", "ITIL の導入", "プライバシーマークの取得", "イ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 11, "AI に関するガイドラインの一つである“人間中心の AI 社会原則”に定められてい る七つの“AI 社会原則”のうち、“イノベーションの原則”に関する記述として、最 も適切なものはどれか。", "AI の発展によって人も併せて進化するように、国際化や多様化を推進し、大学, 研究機関、企業など、官民における連携と、柔軟な人材の移動を促進する。", "AI の利用がもたらす結果については、問題の特性に応じて、AIの開発、提供、 利用に携わった関係者が分担して責任を負う。", "サービスの提供者は、AI を利用している事実やデータの取得方法や使用方法, 結果の適切性について、利用者に対する適切な説明を行う。", "情報弱者を生み出さないために、幼児教育や初等中等教育において、AI活用や 情報リテラシーに関する教育を行う。", "ア", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 12, "金融機関では、同一の顧客で複数の口座をもつ個人や法人について、氏名又は法人 名,生年月日又は設立年月日,電話番号,住所又は所在地などを手掛かりに集約し、 顧客ごとの預金の総額を正確に把握する作業が行われる。このように顧客がもつ複数 の口座を、顧客ごとに取りまとめて一元管理する手続を表す用語として、最も適切な ものはどれか。", "アカウントアグリゲーション", "キーマッピング", "垂直統合", "名寄せ", "エ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 13, "ある商品の販売量と気温の関係が一次式で近似できるとき、予測した気温から商品 の販売量を推定する手法として、適切なものはどれか。", "回帰分析", "線形計画法", "デルファイ法", "パレート分析", "ア", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 14, "必要な時期に必要な量の原材料や部品を調達することによって、工程間の在庫をで きるだけもたないようにする生産方式はどれか。", "BPO", "CIM", "JIT", "OEM", "ウ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 15, "RPA が適用できる業務として、最も適切なものはどれか。", "ゲームソフトのベンダーが、ゲームソフトのプログラムを自動で改善する業務", "従業員の交通費精算で、交通機関利用区間情報と領収書データから精算伝票を作 成する業務", "食品加工工場で、産業用ロボットを用いて冷凍食品を自動で製造する業務", "通信販売業で、膨大な顧客の購買データから顧客の購買行動に関する新たな法則 を見つける業務", "イ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 16, "技術開発戦略において作成されるロードマップを説明しているものはどれか。", "技術の競争力レベルと技術のライフサイクルを2軸としたマトリックス上に、自 社の技術や新しい技術をプロットする。", "研究開発への投資とその成果を2軸とした座標上に、技術の成長過程をグラフ化 し、旧技術から新技術への転換状況を表す。", "市場面からの有望度と技術面からの有望度を2軸としたマトリックス上に、技術 開発プロジェクトをプロットする。", "横軸に時間、縦軸に市場,商品、技術などを示し、研究開発成果の商品化,事業 化の方向性をそれらの要素間の関係で表す。", "エ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 17, "コーポレートガバナンスを強化した事例として、最も適切なものはどれか。", "女性が活躍しやすくするために労務制度を拡充した。", "迅速な事業展開のために、他社の事業を買収した。", "独立性の高い社外取締役の人数を増やした。", "利益が得られにくい事業から撤退した。", "ウ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 18, "ある銀行では、システムの接続仕様を外部に公開し、あらかじめ契約を結んだ外部 事業者のアクセスを認めることによって、利便性の高い、高度なサービスを展開しや すくしている。このような取組を表す用語として、最も適切なものはどれか。", "BPO", "RPA", "オープン API", "技術経営", "ウ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 19, "A社では、1千万円を投資して営業支援システムを再構築することを検討している。 現状の営業支援システムの運用費が5百万円/年,再構築後の営業支援システムの運 用費が4百万円/年,再構築による新たな利益の増加が2百万円/年であるとき、この 投資の回収期間は何年か。ここで、これら以外の効果、費用などは考慮しないものと し、計算結果は小数点以下第2位を四捨五入するものとする。", "2.5", "3.3", "5", "10", "イ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 20, "あるソフトウェアは、定額の料金や一定の期間での利用ができる形態で提供されている。この利用形態を表す用語として、適切なものはどれか。", "アクティベーション", "アドウェア", "サブスクリプション", "ボリュームライセンス", "ウ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 21, "インターネットを介して個人や企業が保有する住宅などの遊休資産の貸出しを仲介 するサービスや仕組みを表す用語として、最も適切なものはどれか。", "シェアードサービス", "シェアウェア", "シェアリングエコノミー", "ワークシェアリング", "ウ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 22, "A社は RPA ソフトウェアを初めて導入するに当たり、計画策定フェーズ,先行導入 フェーズ、本格導入フェーズの3段階で進めようと考えている。次のうち、計画策定 フェーズで実施する作業として、適切なものだけを全て挙げたものはどれか。\na RPA ソフトウェアの適用可能性を見極めるための概念検証を実施する。\nb RPA ソフトウェアを全社展開するための導入と運用の手順書を作成する。\nc部門、業務を絞り込んでRPA ソフトウェアを導入し、効果を実測する。", "a", "a, c", "b", "b, c", "ア", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 23, "史跡などにスマートフォンを向けると、昔あった建物の画像や説明情報を現実の 風景と重ねるように表示して、観光案内をできるようにした。ここで活用した仕組 みを表す用語として、最も適切なものはどれか。", "AR", "GUI", "VR", "メタバース", "ア", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 24, "データサイエンティストの役割に関する記述として、最も適切なものはどれか。", "機械学習や統計などの手法を用いてビッグデータを解析することによって、ビジ ネスに活用するための新たな知見を獲得する。", "企業が保有する膨大なデータを高速に検索できるように、パフォーマンスの高い データベースを運用するためのシステム基盤を構築する。", "企業における情報システムに関するリスクを評価するために、現場でのデータの 取扱いや管理についての実態を調査する。", "企業や組織における安全な情報システムの企画、設計、開発、運用を、サイバー セキュリティに関する専門的な知識や技能を活用して支援する。", "ア", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 25, "個人情報保護法では、あらかじめ本人の同意を得ていなくても個人データの提供が 許される行為を規定している。この行為に該当するものだけを、全て挙げたものはどれか。\na 事故で意識不明の人がもっていた本人の社員証を見て、搬送先の病院が本人の 会社に電話してきたので、総務の担当者が本人の自宅電話番号を教えた。/nb 新規加入者を勧誘したいと保険会社の従業員に頼まれたので、総務の担当者が 新入社員の名前と所属部門のリストを渡した。/nc 不正送金等の金融犯罪被害者に関する個人情報を、類似犯罪の防止対策を進め C る捜査機関からの法令に基づく要請に応じて、総務の担当者が提供した。", "a", "a,c", "b,c", "c", "イ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 26, "次の事例のうち、AIを導入することによって業務の作業効率が向上したものだけ を全て挙げたものはどれか。\na 食品専門商社のA社が、取引先ごとに様式が異なる手書きの請求書に記載され た文字を自動で読み取ってデータ化することによって、事務作業時間を削減した。\nb 繊維製造会社のB社が、原材料を取引先に発注する定型的なPCの操作を自動化 するツールを導入し、事務部門の人員を削減した。\nc損害保険会社のC社が、自社のコールセンターへの問合せに対して、オペレーターにつなげる前に音声チャットボットでヒアリングを行うことによって、オペ レーターの対応時間を短縮した。\nd 物流会社のD社が、配送荷物に電子タグを装着して出荷時に配送先を電子タグ に書き込み、配送時にそれを確認することによって、誤配送を削減した。", "a,c", "b,c", "b,d", "c,d", "ア", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 27, "ある企業が、顧客を引き付ける優れた UX (User Experience) やビジネスモデルを デジタル技術によって創出し、業界における従来のサービスを駆逐してしまうことに よって、その業界の既存の構造が破壊されるような現象を表す用語として、最も適切 なものはどれか。", "デジタルサイネージ", "デジタルディスラプション", "デジタルディバイド", "デジタルトランスフォーメーション", "イ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 28, "上司から自社の当期の損益計算書を渡され、“我が社の収益性分析をしなさい”と 言われた。経営に関する指標のうち、この損益計算書だけから計算できるものだけを 全て挙げたものはどれか。\na 売上高增加率\nb 売上高利益率\nc 自己資本利益率", "a", "a,b", "a,b,c", "b", "エ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 29, "顧客との個々のつながりを意識して情報を頻繁に更新するSNSなどのシステムとは 異なり、会計システムのように高い信頼性と安定稼働が要求される社内情報を扱うシ ステムの概念を示す用語として、最も適切なものはどれか。", "IoT (Internet of Things)", "PoC (Proof of Concept)", "SoE (Systems of Engagement)", "SOR (Systems of Record)", "エ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 30, "労働者派遣における派遣労働者の雇用関係に関する記述のうち、適切なものはどれ か。", "派遣先との間に雇用関係があり、派遣元との間には存在しない。", "派遣元との間に雇用関係があり、派遣先との間には存在しない。", "派遣元と派遣先のいずれの間にも雇用関係が存在する。", "派遣元と派遣先のいずれの間にも雇用関係は存在しない。", "イ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 31, "次の記述のうち、業務要件定義が曖昧なことが原因で起こり得る問題だけを全て挙 げたものはどれか。\na 企画プロセスでシステム化構想がまとまらず、システム化の承認を得られない。\nb コーディングのミスによって、システムが意図したものと違う動作をする。\nC システムの開発中に仕様変更による手戻りが頻発する。\nd システムを受け入れるための適切な受入れテストを設計できない。", "a,b", "b,c", "b,d", "c,d", "エ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 32, "顧客の特徴に応じたきめ細かい対応を行うことによって、顧客と長期的に良好な関 係を築き、顧客満足度の向上や取引関係の継続につなげる仕組みを構築したい。その 仕組みの構成要素の一つとして、営業活動で入手した顧客に関する属性情報や顧客と の交渉履歴などを蓄積し、社内で共有できるシステムを導入することにした。この目 的を達成できるシステムとして、最も適切なものはどれか。", "CAE システム ", "MRP システム", "SCM システム", "SFA システム", "エ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 33, "実用新案に関する記述として、最も適切なものはどれか。", "今までにない製造方法は、実用新案の対象となる。", "自然法則を利用した技術的思想の創作で高度なものだけが、実用新案の対象とな る。", "新規性の審査に合格したものだけが実用新案として登録される。", "複数の物品を組み合わせて考案した新たな製品は、実用新案の対象となる。", "エ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 34, "プロジェクトに該当する事例として、適切なものだけを全て挙げたものはどれか。\na 会社合併に伴う新組織への移行\nb 社内システムの問合せや不具合を受け付けるサービスデスクの運用\nc 新規の経理システム導入に向けたプログラム開発\nd 毎年度末に実施する会計処理", "a,c", "b,c", "b,d", "c", "ア", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 35, "システム開発プロジェクトを終結する時に、プロジェクト統合マネジメントで実施 する活動として、最も適切なものはどれか。", "工程の進捗の予定と実績の差異を分析する。", "作成した全ての成果物の一覧を確認する。", "総費用の予算と実績の差異を分析する。", "知識や教訓を組織の資産として登録する。", "エ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 36, "あるシステムの運用において、利用者との間でSLAを交わし、利用可能日を月曜日 から金曜日、1日の利用可能時間を7時から22時まで、稼働率を98%以上で合意し た。1週間の運用において、障害などでシステムの停止を許容できる時間は最大何時 間か。", "0.3", "1.5", "1.8", "2.1", "イ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 37, "サービスデスクを評価するためには適切なKPI を定めて評価する必要がある。顧客 満足度を高めるために値が小さい方が良い KPIとして、適切なものだけを全て挙げた ものはどれか。\na SLA で合意された目標時間内に対応が完了したインシデント件数の割合\nb 1回の問合せで解決ができたインシデント件数の割合\nc 二次担当へエスカレーションされたインシデント件数の割合\nd 利用者がサービスデスクの担当者につながるまでに費やした時間", "a,b", "a,d", "b,c", "c,d", "エ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 38, "アジャイル開発に関する記述として、最も適切なものはどれか。", "開発する機能を小さい単位に分割して、優先度の高いものから短期間で開発とリ リースを繰り返す。", "共通フレームを適用して要件定義、設計などの工程名及び作成する文書を定義する。", "システム開発を上流工程から下流工程まで順番に進めて、全ての開発工程が終了 してからリリースする。", "プロトタイプを作成して利用者に確認を求め、利用者の評価とフィードバックを 行いながら開発を進めていく。", "ア", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 39, "システム監査人の役割として、適切なものだけを全て挙げたものはどれか。\na 監査手続の種類、実施時期、適用範囲などについて、監査計画を立案する。\nb 監査の目的に応じた監査報告書を作成し、社内に公開する。\nc 監査報告書にある改善提案に基づく改善の実施を監査対象部門に指示する。\nd 監査報告書にある改善提案に基づく改善の実施状況をモニタリングする。", "a,b", "a,d", "b,c", "c,d", "イ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 40, "情報システムに関する施設や設備を維持・保全するために行うリスク対策のうち、 ファシリティマネジメントの観点から行う対策として、適切なものだけを全て挙げた ものはどれか。\na コンピュータ室への入室を、認可した者だけに限定する。\nb コンピュータの設置場所を示す標識を掲示しない。\nc 利用者のPCにマルウェア対策ソフトを導入する。", "a", "a,b", "a,c", "b,c", "イ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 41, "提供している IT システムが事業のニーズを満たせるように、人材、プロセス、情 報技術を適切に組み合わせ、継続的に改善して管理する活動として、最も適切なもの はどれか。", "ITサービスマネジメント", "システム監査", "ヒューマンリソースマネジメント", "ファシリティマネジメント", "ア", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 42, "本番稼働後の業務遂行のために、業務別にサービス利用方法の手順を示した文書と して、最も適切なものはどれか。", "FAQ", "サービスレベル合意書", "システム要件定義書", "利用者マニュアル", "エ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 43, "ITサービスマネジメントの管理プロセスに関する記述 a~cと用語の適切な組合せ はどれか。\na IT サービスの変更を実装するためのプロセス\nb インシデントの根本原因を突き止めて解決策を提供するためのプロセス\nc 組織が所有している IT資産を把握するためのプロセス", "a:構成管理b:問題管理c:リリース及び展開管理", "a:構成管理b:リリース及び展開管理c:問題管理", "a:問題管理b:リリース及び展開管理c:構成管理", "a:リリース及び展開管理b:問題管理c:構成管理", "エ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 44, "ソフトウェアの開発における DevOps に関する記述として、最も適切なものはどれか。", "開発側が重要な機能のプロトタイプを作成し、顧客とともにその性能を実測して 妥当性を評価する。", "開発側では、開発の各工程でその工程の完了を判断した上で次工程に進み、総合 テストで利用者が参加して操作性の確認を実施した後に運用側に引き渡す。", "開発側と運用側が密接に連携し、自動化ツールなどを活用して機能の導入や更新 などを迅速に進める。", "システム開発において、機能の拡張を図るために、固定された短期間のサイクル を繰り返しながらプログラムを順次追加する。", "ウ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 45, "システム監査で用いる判断尺度の選定方法に関する記述として、最も適切なものは どれか。", "システム監査ではシステム管理基準の全項目をそのまま使用しなければならない。", "システム監査のテーマに応じて、システム管理基準以外の基準を使用してもよい。", "システム監査のテーマによらず、システム管理基準以外の基準は使用すべきでな い。", "アジャイル開発では、システム管理基準は使用すべきでない。", "イ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 46, "ソフトウェア開発プロジェクトにおける、コストの見積手法には、積み上げ法、フ ァンクションポイント法,類推見積法などがある。見積りで使用した手法とその特徴 に関する記述a~cの適切な組合せはどれか。\na プロジェクトに必要な個々の作業を洗い出し、その作業ごとの工数を見積もっ て集計する。\nb プロジェクトの初期段階で使用する手法で、過去の事例を活用してコストを見 積もる。\nC c データ入出力や機能に着目して、ソフトウェア規模を見積もり、係数を乗ずる などしてコストを見積もる。", "積む上げ法:aファンクションポイント法:c類推見積法:b", "積む上げ法:bファンクションポイント法:a類推見積法:c", "積む上げ法:cファンクションポイント法:a類推見積法:b", "積む上げ法:cファンクションポイント法:b類推見積法:a", "ア", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 47, "ソフトウェア製品の品質特性を、移植性,機能適合性,互換性,使用性,信頼性, 性能効率性、セキュリティ、保守性に分類したとき、RPA ソフトウェアの使用性に関 する記述として、最も適切なものはどれか。", "RPA が稼働するPCのOSが変わっても動作する。", "RPAで指定した時間及び条件に基づき、適切に自動処理が実行される。", "RPA で操作対象となるアプリケーションソフトウェアがバージョンアップされて も、簡単な設定変更で対応できる。", "RPAを利用したことがない人でも、簡単な教育だけで利用可能になる。", "エ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 48, "システム開発プロジェクトにおいて、テスト中に発見された不具合の再発防止のた めに不具合分析を行うことにした。テスト結果及び不具合の内容を表に記入し、不具 合ごとに根本原因を突き止めた後に、根本原因ごとに集計を行い発生頻度の多い順に 並べ、主要な根本原因の特定を行った。ここで利用した図表のうち、根本原因を集計 し、発生頻度順に並べて棒グラフで示し、累積値を折れ線グラフで重ねて示したもの はどれか。", "散布図", "チェックシート", "特性要因図", "パレート図", "エ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 49, "システム開発プロジェクトにおいて、新機能の追加要求が変更管理委員会で認可さ れた後にプロジェクトスコープマネジメントで実施する活動として、適切なものはど れか。", "新機能を追加で開発するために WBSを変更し、コストの詳細な見積りをするため の情報として提供する。", "新機能を追加で開発するためのWBSのアクティビティの実行に必要なスキルを確 認し、必要に応じてプロジェクトチームの能力向上を図る。", "変更された WBS に基づいてスケジュールを作成し、完了時期の見通しを提示する。", "変更された WBS に基づいて要員の充足度を確認し、必要な場合は作業の外注を検 討する。", "ア", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 50, "IT ガバナンスに関する次の記述中の a に入れる字句として、最も適切なものはどれか。経営者は、 a の事業の目的を支援する観点で、効果的、効率的かつ受容可能 な a のITの利用について評価する。", "過去と現在 ", "現在", "現在と将来 ", "将来", "ウ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 51, "事業活動に関わる法令の遵守などを目的の一つとして、統制環境、リスクの評価と 対応,統制活動、情報と伝達、モニタリング、ITへの対応から構成される取組はどれか。", "CMMI", "ITIL", "内部統制", "リスク管理", "ウ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 52, "システム監査の目的に関する記述として、適切なものはどれか。", "開発すべきシステムの具体的な用途を分析し、システム要件を明らかにすること", "情報システムが設置されている施設とその環境を総合的に企画、管理、活用する こと", "情報システムに係るリスクに適切に対応しているかどうかを評価することによっ て、組織体の目標達成に寄与すること", "知識、スキル、ツール及び技法をプロジェクト活動に適用することによって、プ ロジェクトの要求事項を満足させること", "ウ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 53, "PC において、電力供給を断つと記憶内容が失われるメモリ又は記憶媒体はどれか。", "DVD-RAM", "DRAM", "ROM", "フラッシュメモリ", "イ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 54, "文書作成ソフトや表計算ソフトなどにおいて、一連の操作手順をあらかじめ定義し ておき、実行する機能はどれか。", "オートコンプリート", "ソースコード", "プラグアンドプレイ", "マクロ", "エ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 55, "OCR の役割として、適切なものはどれか。", "10cm程度の近距離にある機器間で無線通信する。", "印刷文字や手書き文字を認識し、テキストデータに変換する。", "デジタル信号処理によって、人工的に音声を作り出す。", "利用者の指先などが触れたパネル上の位置を検出する。", "イ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 56, "cookie を説明したものはどれか。", "Web サイトが, Web ブラウザを通じて訪問者のPCにデータを書き込んで保存する 仕組み又は保存されるデータのこと", "Web ○ブラウザが、アクセスした Web ページをファイルとしてPCのハードディス クに一時的に保存する仕組み又は保存されるファイルのこと", "Web ページ上で、Webサイトの紹介などを目的に掲載されている画像のこと", "ブログの機能の一つで、リンクを張った相手に対してその旨を通知する仕組みの こと", "ア", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 57, "SSD の全てのデータを消去し、復元できなくする方法として用いられているものは どれか。", "Secure Erase", "磁気消去", "セキュアブート", "データクレンジング", "ア", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 58, "情報セキュリティのリスクマネジメントにおけるリスクへの対応を、リスク共有、 リスク回避、リスク保有及びリスク低減の四つに分類するとき、リスク共有の例とし て、適切なものはどれか。", "災害によるシステムの停止時間を短くするために、遠隔地にバックアップセンタ 一を設置する。", "情報漏えいによって発生する損害賠償や事故処理の損失補填のために、サイバー 保険に加入する。", "電子メールによる機密ファイルの流出を防ぐために、ファイルを添付した電子メ ールの送信には上司の許可を必要とする仕組みにする。", "ノートPCの紛失や盗難による情報漏えいを防ぐために、HDDを暗号化する。", "イ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 59, "AI における機械学習の学習方法に関する次の記述中の a~c に入れる字句の適切な 組合せはどれか。教師あり学習は、正解を付けた学習データを入力することによって、a と呼 ばれる手法で未知のデータを複数のクラスに分けたり、 b と呼ばれる手法で データの関係性を見つけたりすることができるようになる学習方法である。教師な し学習は、正解を付けない学習データを入力することによって、 C と呼ばれる手法などで次第にデータを正しくグループ分けできるようになる学習方法である", "a:回帰b:分類c:クラスタリング", "a:クラスタリングb:分類c:回帰", "a:分類b:回帰c:クラスタリング", "a:分類b:クラスタリングc:回帰", "ウ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 60, "PKI における CA (Certificate Authority) の役割に関する記述として、適切なも のはどれか。", "アインターネットと内部ネットワークの間にあって、内部ネットワーク上のコンピ ュータに代わってインターネットにアクセスする。", "インターネットと内部ネットワークの間にあって、パケットフィルタリング機能 などを用いてインターネットから内部ネットワークへの不正アクセスを防ぐ。", "利用者に指定されたドメイン名を基に IP アドレスとドメイン名の対応付けを行 い、利用者を目的のサーバにアクセスさせる。", "利用者の公開鍵に対する公開鍵証明書の発行や失効を行い、鍵の正当性を保証する。", "エ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 61, "情報デザインで用いられる概念であり、部屋のドアノブの形で開閉の仕方を示唆す るというような、人間の適切な行動を誘発する知覚可能な手掛かりのことを何と呼ぶ か。", "NUI (Natural User Interface)", "ウィザード", "シグニファイア", "マルチタッチ", "ウ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 62, "障害に備えるために、4台のHDDを使い、1台分の容量をパリティ情報の記録に使用 する RAID5を構成する。1台のHDDの容量が1Tバイトのとき、実効データ容量はおよ そ何バイトか。", "2T", "3T", "4T", "5T", "イ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 63, "ESSIDをステルス化することによって得られる効果として、適切なものはどれか。", "アクセスポイントと端末間の通信を暗号化できる。", "アクセスポイントに接続してくる端末を認証できる。", "アクセスポイントへの不正接続リスクを低減できる。", "アクセスポイントを介さず、端末同士で直接通信できる。", "ウ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 64, "インターネットで使用されているドメイン名の説明として、適切なものはどれか。", "Web 閲覧や電子メールを送受信するアプリケーションが使用する通信規約の名前", "コンピュータやネットワークなどを識別するための名前", "通信を行うアプリケーションを識別するための名前", "電子メールの宛先として指定する相手の名前", "イ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 65, "次の記述のうち、バイオメトリクス認証の例だけを全て挙げたものはどれか。\na  Web ページに歪んだ文字の列から成る画像を表示し、読み取った文字列を利用 者に入力させることによって、認証を行う。\nb キーボードで特定文字列を入力させ、そのときの打鍵の速度やタイミングの変 化によって、認証を行う。\nC タッチパネルに手書きで氏名を入力させ、そのときの筆跡,筆圧,運筆速度な どによって、認証を行う。\nd タッチパネルに表示された複数の点をあらかじめ決められた順になぞらせるこ とによって、認証を行う。", "a,b", "a,d", "b,c", "c,d", "ウ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 66, "IoT 機器のセキュリティ対策のうち、ソーシャルエンジニアリング対策として、最 も適切なものはどれか。", "IoT機器とサーバとの通信は、盗聴を防止するために常に暗号化通信で行う。", "IoT 機器の脆弱性を突いた攻撃を防止するために、機器のメーカーから最新のフ ァームウェアを入手してアップデートを行う。", "IoT 機器へのマルウェア感染を防止するためにマルウェア対策ソフトを導入する。", "IoT 機器を廃棄するときは、内蔵されている記憶装置からの情報漏えいを防止す るために物理的に破壊する。", "エ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 67, "トランザクション処理に関する記述のうち、適切なものはどれか。", "コミットとは、トランザクションが正常に処理されなかったときに、データベー スをトランザクション開始前の状態に戻すことである。", "排他制御とは、トランザクションが正常に処理されたときに、データベースの内 容を確定させることである。", "ロールバックとは、複数のトランザクションが同時に同一データを更新しようと したときに、データの矛盾が起きないようにすることである。", "ログとは、データベースの更新履歴を記録したファイルのことである。", "エ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 68, "情報セキュリティの3要素である機密性、完全性及び可用性と、それらを確保する ための対策の例a~cの適切な組合せはどれか。\na アクセス制御\nb デジタル署名\nc ディスクの二重化", "a:可用性b:完全性c:機密性", "a:可用性b:機密性c:完全性", "a:完全性b:機密性c:可用性", "a:機密性b:完全性c:可用性", "エ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 69, "スマートフォンなどのタッチパネルで広く採用されている方式であり、指がタッチパネルの表面に近づいたときに、その位置を検出する方式はどれか。", "感圧式", "光学式", "静電容量方式 ", "電磁誘導方式", "ウ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 70, "出所が不明のプログラムファイルの使用を避けるために、その発行元を調べたい。このときに確認する情報 として、適切なものはどれか。", "そのプログラムファイルのアクセス権", "そのプログラムファイルの所有者情報", "そのプログラムファイルのデジタル署名", "そのプログラムファイルのハッシュ値", "ウ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 71, "利用者がスマートスピーカーに向けて話し掛けた内容に対して、スマートスピーカ 一から音声で応答するための処理手順が a ~ d のとおりであるとき、音声認識 に該当する処理はどれか。\na 利用者の音声をテキストデータに変換する。\nb テキストデータを解析して、その意味を理解する。\nc 応答する内容を決定して、テキストデータを生成する。\nd 生成したテキストデータを読み上げる。", "a", "b", "c", "d", "ア", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 72, "企業などの内部ネットワークとインターネットとの間にあって、セキュリティを確 保するために内部ネットワークのPCに代わって、インターネット上の Web サーバに アクセスするものはどれか。", "DNS サーバ", "NTP サーバ", "ストリーミングサーバ", "プロキシサーバ", "エ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 73, "OSS (Open Source Software) に関する記述として、適切なものだけを全て挙げた ものはどれか。\na OSS を利用して作成したソフトウェアを販売することができる。\nb ソースコードが公開されたソフトウェアは全てOSSである。\nc 著作権が放棄されているソフトウェアである。", "a", "a,b", "b,c", "c", "ア", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 74, "ISMS クラウドセキュリティ認証に関する記述として、適切なものはどれか。", "一度認証するだけで、複数のクラウドサービスやシステムなどを利用できるよう にする認証の仕組み", "クラウドサービスについて、クラウドサービス固有の管理策が実施されているこ とを認証する制度", "個人情報について適切な保護措置を講ずる体制を整備しているクラウド事業者な どを評価して、事業活動に関してプライバシーマークの使用を認める制度", "利用者がクラウドサービスへログインするときの環境, IP アドレスなどに基づ いて状況を分析し、リスクが高いと判断された場合に追加の認証を行う仕組み", "イ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 75, "IoT エリアネットワークでも利用され、IoT デバイスからの無線通信をほかの IoT デバイスが中継することを繰り返し、リレー方式で通信をすることによって、広範囲 の通信を実現する技術はどれか。", "GPS", "MIMO", "キャリアアグリゲーション", "マルチホップ", "エ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 76, "PDCA モデルに基づいて ISMS を運用している組織において、 C (Check) で実施する ことの例として、適切なものはどれか。", "業務内容の監査結果に基づいた是正処置として、サーバの監視方法を変更する。", "具体的な対策と目標を決めるために、サーバ室内の情報資産を洗い出す。", "サーバ管理者の業務内容を第三者が客観的に評価する。", "定められた運用手順に従ってサーバの動作を監視する。", "ウ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 77, "通常の検索エンジンでは検索されず匿名性が高いので、サイバー攻撃や違法商品の 取引などにも利用されることがあり、アクセスするには特殊なソフトウェアが必要に なることもあるインターネット上のコンテンツの総称を何と呼ぶか。", "RSS", "SEO", "クロスサイトスクリプティング", "ダークウェブ", "エ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 78, "JavaScript に関する記述として、適切なものはどれか。", "Web ブラウザ上に、動的な振る舞いなどを組み込むことができる。", "Web ブラウザではなく、 Web サーバ上だけで動作する。", "実行するためには、あらかじめコンパイルする必要がある。", "名前のとおり、Javaのスクリプト版である。", "ア", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 79, "システムの利用者認証に関する記述のうち、適切なものはどれか。", "1回の認証で、複数のサーバやアプリケーションなどへのログインを実現する仕 組みを、チャレンジレスポンス認証という。", "指紋や声紋など、身体的な特徴を利用して本人認証を行う仕組みを、シングルサ インオンという。", "情報システムが利用者の本人確認のために用いる、数字列から成る暗証番号の ことを、PINという。", "特定の数字や文字の並びではなく、位置についての情報を覚えておき、認証時に は画面に表示された表の中で、自分が覚えている位置に並んでいる数字や文字をパ スワードとして入力する方式を、多要素認証という。", "ウ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 80, "セキュリティ対策として使用される WAF の説明として、適切なものはどれか。", "ECなどの Web サイトにおいて、Web アプリケーションソフトウェアの脆弱性を 突いた攻撃からの防御や、不審なアクセスのパターンを検知する仕組み", "インターネットなどの公共のネットワークを用いて、専用線のようなセキュアな通信環境を実現する仕組み", "情報システムにおいて、機密データを特定して監視することによって、機密デー タの紛失や外部への漏えいを防止する仕組み", "ファイアウォールを用いて、インターネットと企業の内部ネットワークとの間に 緩衝領域を作る仕組み", "ア", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 81, "職場で不要になった PC を廃棄する場合の情報漏えい対策として、最も適切なもの はどれか。", "OS が用意しているファイル削除の機能を使って、PC内のデータファイルを全て 削除する。", "PCにインストールされているアプリケーションを、全てアンインストールする。", "PCに内蔵されている全ての記憶装置を論理フォーマットする。", "専用ソフトなどを使って、PCに内蔵されている全ての記憶装置の内容を消去す るために、ランダムなデータを規定回数だけ上書きする。", "エ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 82, "インターネットに接続されているサーバが、1台でメール送受信機能と Web アクセ ス機能の両方を提供しているとき、端末のアプリケーションプログラムがそのどちら の機能を利用するかをサーバに指定するために用いるものはどれか。", "IP アドレス", "ドメイン", "ポート番号 ", "ホスト名", "ウ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 83, "企業において情報セキュリティポリシー策定で行う作業のうち、次の作業の実施順 序として、適切なものはどれか。\na 策定する責任者や担当者を決定する。\nb 情報セキュリティ対策の基本方針を策定する。\nc 保有する情報資産を洗い出し、分類する。\nd リスクを分析する。", "a →b→ c→ d", "a →b→ d→ c", "b →a→ c→ d", "b →a→ d→ c", "ア", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 84, "AI の関連技術であるディープラーニングに用いられる技術として、最も適切なも のはどれか。", "ソーシャルネットワーク", "ニューラルネットワーク", "フィージビリティスタディ", "フォールトトレラント", "イ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 85, "A さんは次のように宛先を指定して電子メールを送信した。この電子メールの受信 者に関する記述のうち、適切なものだけを全て挙げたものはどれか。\n[宛先]\nTo: Bさんのメールアドレス\nCc: Cさんのメールアドレス\nBcc: Dさんのメールアドレス、Eさんのメールアドレス\na CさんはDさんのメールアドレスを知ることができる。\nb DさんはCさんのメールアドレスを知ることができる。\nc EさんはDさんのメールアドレスを知ることができる。", "a", "a,c", "b", "b,c", "ウ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 86, "次のOSのうち, OSS (Open Source Software) として提供されるものだけを全て挙 げたものはどれか。\na Android\nb FreeBSD\nC iOS\nd Linux", "a,b", "a,b,d", "b,d", "c,d", "イ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 87, "ランサムウェアに関する記述として、最も適切なものはどれか。", "PCに外部から不正にログインするための侵入路をひそかに設置する。", "PC Cのファイルを勝手に暗号化し、復号のためのキーを提供することなどを条件 に金銭を要求する。", "Web ブラウザを乗っ取り、オンラインバンキングなどの通信に割り込んで不正送 金などを行う。", "自らネットワークを経由して感染を広げる機能をもち、まん延していく。", "イ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 88, "GPS の電波を捕捉しにくいビルの谷間や狭い路地などでも位置を計測することがで きるように、特定の地域の上空に比較的長く留まる軌道をとり、GPSと併用すること によって、より高い測位精度を実現するものはどれか。", "アシスト GPS", "ジャイロセンサー", "準天頂衛星", "プローブカー", "ウ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 89, "正しい URL を指定してインターネット上の Web サイトへアクセスしようとした利 用者が、偽装された Web サイトに接続されてしまうようになった。原因を調べたとこ ろ、ドメイン名と IP アドレスの対応付けを管理するサーバに脆弱性があり、攻撃者 によって、ドメイン名と IP アドレスを対応付ける情報が書き換えられていた。この サーバが受けた攻撃はどれか。", "DDoS 攻擊", "DNS キャッシュポイズニング", "ソーシャルエンジニアリング", "ドライブバイダウンロード", "イ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 90, "新しいビジネスモデルや製品を開発する際に、仮説に基づいて実用に向けた最小限 のサービスや製品を作り、短期に顧客価値の検証を繰り返すことによって、新規事業 などを成功させる可能性を高める手法を示す用語はどれか。", "カニバリゼーション", "業務モデリング", "デジタルトランスフォーメーション", "リーンスタートアップ", "エ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 91, "次のa~cのうち、著作権法によって定められた著作物に該当するものだけを全て 挙げたものはどれか。\na 原稿なしで話した講演の録音\nb 時刻表に掲載されたバスの到着時刻\nc 創造性の高い技術の発明", "a", "a,c", "b,c", "c", "ア", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 92, "観光などで訪日した外国人が国内にもたらす経済効果を示す言葉として、最も適切 なものはどれか。", "アウトソーシング", "アウトバウンド需要", "インキュベーター", "インバウンド需要", "エ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 93, "企業でのRPAの活用方法として、最も適切なものはどれか。", "M&Aといった経営層が行う重要な戦略の採択", "個人の嗜好に合わせたサービスの提供", "潜在顧客層に関する大量の行動データからの規則性抽出", "定型的な事務処理の効率化", "エ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 94, "A社では、顧客の行動や天候、販売店のロケーションなどの多くの項目から成るデ ータを取得している。これらのデータを分析することによって販売数量の変化を説明 することを考える。その際、説明に使用するパラメータをできるだけ少数に絞りた い。このときに用いる分析法として、最も適切なものはどれか。", "ABC 分析", "クラスター分析", "主成分分析", "相関分析", "ウ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 95, "経営戦略に基づいて策定される情報システム戦略の責任者として、最も適切なもの はどれか。", "CIO", "基幹システムの利用部門の部門長", "システム開発プロジェクトマネージャ", "システム企画担当者", "ア", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 96, "ソーシャルメディアポリシーを制定する目的として、適切なものだけを全て挙げた ものはどれか。\na 企業がソーシャルメディアを使用する際の心得やルールなどを取り決めて、社 外の人々が理解できるようにするため\nb 企業に属する役員や従業員が、公私限らずにソーシャルメディアを使用する際 のルールを示すため\nC ソーシャルメディアが企業に対して取材や問合せを行う際の条件や窓口での取 扱いのルールを示すため", "a", "a,b", "a,c", "b,c", "イ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 97, "フォーラム標準に関する記述として、最も適切なものはどれか。", "工業製品が、定められた品質,寸法,機能及び形状の範囲内であることを保証したもの", "公的な標準化機関において、透明かつ公正な手続の下、関係者が合意の上で制定したもの", "特定の企業が開発した仕様が広く利用された結果、事実上の業界標準になったもの", "特定の分野に関心のある複数の企業などが集まって結成した組織が、規格として 作ったもの", "エ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 98, "IoTやAI といった ITを活用し、戦略的にビジネスモデルの刷新や新たな付加価値 を生み出していくことなどを示す言葉として、最も適切なものはどれか。", "デジタルサイネージ", "デジタルディバイド", "デジタルトランスフォーメーション", "デジタルネイティブ", "ウ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 99, "スマートフォンに内蔵された非接触型ICチップと外部のRFID リーダーによって、 実現しているサービスの事例だけを全て挙げたものはどれか。\na 移動中の通話の際に基地局を自動的に切り替えて通話を保持する。\nb 駅の自動改札を通過する際の定期券として利用する。\nc 海外でも国内と同じ電子メールなどのサービスを利用する。\nd 決済手続情報を得るためにQRコードを読み込む。", "a,b,c,d", "a,b,d", "b", "b,d", "ウ", "未対応です", 1.0);

    db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 100, "AI の活用領域の一つである自然言語処理が利用されている事例として、適切なも のだけを全て挙げたものはどれか。\na Web サイト上で、日本語の文章を入力すると即座に他言語に翻訳される。\nb 災害時に SNS に投稿された文字情報をリアルタイムで収集し、地名と災害情報 などを解析して被災状況を把握する。\nc スマートスピーカーを利用して、音声によって家電の操作や音楽の再生を行 う。\nd 駐車場の出入口に設置したカメラでナンバープレートを撮影して、文字認識処 理をし、精算済みの車両がゲートに近付くと自動で開く。", "a,b,c", "a,b,d", "a,c,d", "b,c,d", "ア", "未対応です", 1.0);
  });

  db.close();
}

initDatabase();