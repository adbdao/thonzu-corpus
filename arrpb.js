// 配合timeEnd()成對出現。 打印出代碼執行的時間
console.time('共耗費了')
// 導入模組
var fs = require('fs')
var path = require('path')
// 可改寫副檔名及編碼
var x = '.txt'
var ru = 'utf8'
var wu = 'utf8'
// 子目錄名，如果有的話
var mula = 'xml/'
// 完成後的副檔名
var afterName = '.xml'
// 裝載運算結果的物件
var okfile = ''
// 取得目錄列表
// var h = path.normalize('./xml')

// var lst = fs.readFileSync(mula + 'paauk.lst', wu).split('\n')
// fs.writeFileSync('p.lst', lst.join('\n'), wu)
// lst = fs.readFileSync('p.lst', wu).split('\n')
var lst = ['SHIFU.txt','064-088.TXT','064-089.TXT']
// ===============================================
// 開始讀檔
// for (var k = 0; k < lst.length; k++) {
for (var k of lst) {
    // 用絕對路徑讀入檔案，使用陣列中的檔名
    // var n = path.normalize(h + '/' + k)
    var a = fs.readFileSync(k, ru)
    // 導入陣列，準備編輯
    // 刪除過多的空行，及<頁<段
    // 因為《續藏》第1行是頁碼，必須刪除第1行的頁碼，但先要在最前面加一行，不然在後面的for b[0]會轉換不到
    // a = '<file>\n' + a + '\n</file>'
    var b = a
        // .replace(/<頁碼? [^>]+>[\n|\r]*/g, '')
        // .replace(/<段\/?>[\n|\r]*/g, '')
        // .replace(/[\n|\r]{3,}/g, '\n\n')
        // 接合標記內的斷行
        // .replace(/(<[^>]*)[\n|\r]([^>]*>)/g, '$1$2\n')
        .replace(/<頁碼? [^>]+>/g, '')
        .replace(/<段\/?>/g, '')
        .replace(/<聯 l/g, '<a href')
        .replace(/聯>/g, 'a>')
        // .replace(/<_-書 .+/g, '')
        .replace(/_-章>/g, 'le>')
        .replace(/_-節>/g, 'je>')
        .replace(/<檔>/g, '======')
        .replace(/<\/檔>/g, '====')
        .replace(/&/g, '＆')
        .replace(/粗>/g, 'b>')
        .replace(/經>/g, 'xa>')
        // .replace(/字母>/g, 'h1>')
        .replace(/英文名>/g, 'eng>')
        .replace(/<嵌?圖 f/g, '<img n')
        .replace(/<註/g, '<fn')
        .replace(/註>/g, 'fn>')
        // .replace(/<釋([^>]+)\/>(.*)/g, '<h1$1>$2</h1>')
        .replace(/<釋/g, '<a')
        .replace(/釋>/g, 'a>')
        .replace(/<頁碼>/g, '<rubynote t="')
        .replace(/<\/頁碼>/g, '"/>')
        .replace(/<偏右字>/g, '<rubynote t="')
        .replace(/<\/偏右字>/g, '"/>')
        .replace(/序>/g, 'talk>')
        .replace(/分>/g, 'pv>')
        .replace(/跋>/g, 'ba>')
        .replace(/會>/g, 'va>')
        .replace(/其他>/g, 'other>')
        .replace(/附文>/g, 'ps>')
        .replace(/科判>/g, 'h0>')
        .replace(/卷>/g, 'sarticle>')
        .replace(/<冊/g, '<book')
        .replace(/冊>/g, 'book>')
        .replace(/編>/g, 'h0>')
        .replace(/大>/g, 'tag>')
        .replace(/表>/g, 'kai>')
        .replace(/<書/g, '<article')
        .replace(/書>/g, 'article>')
        .replace(/章>/g, 'article>')
        .replace(/節>/g, 'h1>')
        .replace(/類>/g, 'h2>')
        .replace(/項>/g, 'h3>')
        .replace(/文>/g, 'h4>')
        .replace(/篇>/g, 'pe>')
        .replace(/年>/g, 'year>')
        .replace(/詩>/g, 'si>')
        .replace(/著者>/g, 'sr>')
        .replace(/詞>/g, 'tag>')
        .replace(/人名>/g, 'name>')
        .replace(/問>/g, 'ask>')
        .replace(/答>/g, 'rep>')
        .replace(/字>/g, 'zi>')
        .replace(/小字>/g, 'little>')
        .replace(/原出處>/g, 'ptr>')
        .replace(/參考書>/g, 'def>')
        .replace(/期>/g, 'l>')
        .replace(/編目資訊>/g, 'ml>')
        .replace(/原書分頁>/g, 'hr>')
        .replace(/相應部>/g, 'sep>')
        .replace(/藥>/g, 'by>')
        .replace(/方>/g, 'bf>')
        .replace(/症>/g, 'bz>')
        // .replace(/甲>/g, 'h1>')
        // .replace(/乙>/g, 'h2>')
        // .replace(/丙>/g, 'h3>')
        // .replace(/丁>/g, 'h4>')
        // .replace(/戊>/g, 'h5>')
        // .replace(/己>/g, 'h6>')
        // .replace(/庚>/g, 'h7>')
        // .replace(/辛>/g, 'h8>')
        // .replace(/壬>/g, 'h9>')
        // .replace(/癸>/g, 'h10>')
        // .replace(/子>/g, 'h11>')
        // .replace(/丑>/g, 'h12>')
        // .replace(/寅>/g, 'h13>')
        // .replace(/卯>/g, 'h14>')
        // .replace(/辰>/g, 'h15>')
        // .replace(/巳>/g, 'h16>')
        // .replace(/午>/g, 'h17>')
        // .replace(/未>/g, 'h18>')
        // .replace(/申>/g, 'h19>')
        // .replace(/酉>/g, 'h20>')
        // .replace(/戌>/g, 'h21>')
        // .replace(/亥>/g, 'h22>')
        // .replace(/日>/g, 'h23>')
        // .replace(/月>/g, 'h24>')
        // .replace(/火>/g, 'h25>')
        // .replace(/水>/g, 'h26>')
        // .replace(/木>/g, 'h27>')
        // .replace(/金>/g, 'h28>')
        // .replace(/土>/g, 'h29>')
        // .replace(/春>/g, 'h30>')
        // .replace(/夏>/g, 'h31>')
        // .replace(/秋>/g, 'h32>')
        // .replace(/冬>/g, 'h33>')
        // .replace(/東>/g, 'h34>')
        .replace(/《/g, '<bf>《')
        .replace(/》/g, '》</bf>')
        .replace(/〈/g, '<by>〈')
        .replace(/〉/g, '〉</by>')
        .replace(/〔/g, '<bz>〔')
        .replace(/〕/g, '〕</bz>')
        .replace(/(<\/by>)<\/by>/g, '$1')
        .replace(/(<\/bf>)<\/bf>/g, '$1')
        .replace(/(<\/bz>)<\/bz>/g, '$1')
        .replace(/(<by>)<by>/g, '$1')
        .replace(/(<bf>)<bf>/g, '$1')
        .replace(/(<bz>)<bz>/g, '$1')
        .split('\n')

    // ===============================================
    // 加上批次冊碼頁碼
    // 預設變量，才能累加冊碼頁碼
    var s0 = 0
    var s1 = 0
    var s2 = 1
    var sfn = 1
    var sa = 1

    // 30字切行
    // for (var i = 0; i < b.length; i++) {
    //     b[i] = b[i].replace(/(.{30})/g, '$1\n')
    // }

    // 第1行不好轉換，會出現亂碼，所以從第2行開始
    for (var i = 1; i < b.length; i++) {
        // 刪除行首空白
        b[i] = b[i].replace(/^ +/g, '')
        // 加上冊碼頁碼
        // 多個檔案的時候，不好算出冊碼，就省去冊碼
        if (/<article/.test(b[i]) || i == 1 || s2 > 1023) {
            s2 = 1
            // s1++
            // b[i] = '<pb n="' + s1 + '.' + s2 + '"/>\n' + b[i]
            b[i] = '<pb n="' + s2 + '"/>\n' + b[i]
            s0 = i + 30
        }
        if (i == s0) {
            s2++
            // b[i] = '<pb n="' + s1 + '.' + s2 + '"/>\n' + b[i]
            b[i] = '<pb n="' + s2 + '"/>\n' + b[i]
            s0 = i + 30
        }
    }
    // 導入物件內
    okfile += b.join('\n')
    // 完成時返回通知
    console.log('arrpb is OK: ' + k)
}
// 用絕對路徑寫入檔案
fs.writeFileSync('ok.xml', '<file>\n' + okfile + '\n</file>', wu)

// 'test'名字要和time()中的名字保持一致
console.timeEnd('共耗費了')