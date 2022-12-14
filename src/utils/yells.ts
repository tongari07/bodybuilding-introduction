const yells = [
  'コロナもその筋肉で殺せるだろ！',
  '肉詰まりすぎです密です',
  '筋肉は密でいいんだよ',
  '腹筋ゴリゴリンピック2020東京！！',
  'プロテイン飲んだNiziUか',
  'あなた肉柱ですね',
  '後ろにもマッチョいっぱい。劇場版無限マッチョ!',
  '背中にQRコード',
  'キレてる!',
  'バリバリ',
  'もうでかい!',
  'ナイスカット',
  '仕上がってるよ',
  'ナイスバルク!',
  'いい血管出てるよ!',
  '土台が違うよ!土台が!',
  'デカいよ!他が見えない!',
  'はいっ!ズドーン!',
  'しぐれ煮',
  '肩メロン!',
  '美味しいメロン肩!',
  '血管うねうねマスクメロン!',
  '三角チョコパイ!',
  '腹筋板チョコ!',
  '◯番の板チョコが食べたい',
  '腹筋、ちぎりパン',
  'ケツのキレがバームクーヘン',
  'マッスルラーメン!筋肉もりもり',
  '手羽先の完全究極体',
  'カニカマの千倍!',
  '腹斜筋で大根おろしたい',
  'プロテインにイースト菌混ざってんのかい!',
  'お母さん、今日の晩御飯はカレーで決まり!',
  '上腕二頭筋ナイス!チョモランマ!',
  'お尻ムー大陸',
  '背中ユーラシア大陸',
  'マッチョの豊洲市場',
  'マッチョのスシローか',
  'マッチョの満員電車だな!',
  'マッチョの住宅展示場',
  '国立筋肉博物館!',
  '筋肉国宝！ルーブル美術館に展示したい',
  '腹筋がカニの裏!',
  '脚がゴリラみてぇだな!おい!',
  '二頭がデカい!ダチョウの卵!',
  '背中がカブトムシの腹みたい',
  '陸亀かと思ったら大胸筋かい!',
  '新人類!',
  '筋肉増税120％',
  'マッチョ細胞は・・・あります！',
  '外転筋の子。プロテインにできることはまだあるかい？',
  '筋肉ゾゾスーツ着てんのかい!',
  '新元号はー、筋肉です!',
  '春日！',
  '腹筋布袋のギター',
  'ぱいぱいでか美',
  'シックスパック!いや、V6パック!',
  'きんに君のことは嫌いになっても!筋肉のことは嫌いにならないでください！',
  'キューティーハニー',
  '肩デカい!キングギドラかよ！',
  'ウォールマリアぶっ壊すなよ!',
  'お腰に付けたプロテイン1つ私にくださいな！',
  'プロテイン飲んだシルバニアファミリーか!',
  'どんどん迫ってくるよ!マッチョのインベーダーゲームだな!',
  '阿修羅像!',
  '筋肉縄文杉!',
  '筋肉の前方後円墳!',
  'マッチョの枯山水!',
  '新時代の幕開けだ!',
  'ノーベル筋肉賞',
  '筋肉の徳が高すぎる!前世に国でも救ったんか!',
  '侍!',
  '石油王!',
  '前世は手榴弾ですかー!',
  '筋肉の集団面接',
  '説明不要!',
  '目で見たものだけがリアルだろ!',
  'マッチョ、マッチャー、マッチェスト!',
  '肩から脚が生えてるよ！',
  '腕と脚が入れ替わってるよ',
  'どれが顔かわかんねーよ!',
  '泣く子も黙る上腕二頭筋！',
  '僧帽筋が飛んでる!／僧帽筋が跳ねてる！',
  '僧帽筋が歌ってる!',
  '僧帽筋が威嚇してる!',
  '僧帽筋が並じゃないよ!',
  '肩にちっちゃいジープ乗せてんのかい',
  '巨乳',
  '胸がはち切れる',
  '胸がケツみたい!',
  '大胸筋が歩いてる!',
  '親の大胸筋が見てみたい!',
  '腹筋、6LDK',
  '腹筋、グレネード!',
  '腹筋、なんこあんの？',
  'なんだ、あのセパレーション!多すぎて数えられない!',
  '背中に鬼の顔!',
  '背中にクリスマスツリー!',
  '背中に羽がはえている!',
  '空も飛べるはず',
  '秀逸極まりない背中だ',
  '背中広すぎてパンこねれるわい',
  '脚がにんにく!',
  '脚が歩いてる!',
  'カーフでかいよ！',
  'スキニージーンズに謝れ!',
  'ふくらはぎ子持ちししゃも!',
  'グレートケツプリ',
  'ハムケツ切れてる',
  '体がデカイ!',
  '冷蔵庫！',
  '彫刻みたいな体!',
  'プロポーションおばけ',
  '分厚いな!東野圭吾の新刊か!',
  'デカすぎて固定資産税がかかりそうだな!',
  'ここまで絞るのに眠れない日もあっただろう',
]

export const getRandomYells = (count: number): string[] => {
  return [...Array(count).keys()]
    .map((_) => {
      const random = Math.floor(Math.random() * yells.length - 1)
      return yells.slice(random, random + 1)
    })
    .flat()
}

export const getRandomYell = (): string => {
  const random = Math.floor(Math.random() * yells.length - 1)
  return yells.slice(random, random + 1)[0] || ''
}
