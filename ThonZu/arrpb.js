// 配合timeEnd()成對出現。 打印出代碼執行的時間
console.time('共耗費了')
// 導入模組
var fs = require('fs')
var path = require('path')
// 可改寫副檔名及編碼
var x = '.txt'
var ru = 'utf16le'
var wu = 'utf8'
// 子目錄名，如果有的話
var mula = 'ThonZu/'
// 完成後的副檔名
var afterName = '.xml'
// 裝載運算結果的物件
var okfile = ''
// 取得目錄列表
// var h = path.normalize('./xml')

// var lst = fs.readFileSync(mula + 'paauk.lst', wu).split('\n')
// fs.writeFileSync('p.lst', lst.join('\n'), wu)
// lst = fs.readFileSync('p.lst', wu).split('\n')
var lst = ["thonzu-s.xml", "83年 法器互相研究心得.xml", "88-91年法器學習筆記.xml", "梵唄目錄(原).xml", "梵唄目錄(新)mp3.xml", "梵唄目錄(新)wma.xml", "梵唄目錄7(新7)mp3.xml", "複製 -梵唄目錄64k_新修改.xml", "梵唄目錄Ⅲ梵唄集成(以64k music音軌重錄)原稿.xml", "梵唄目錄Ⅲ梵唄集成(以64k music音軌重錄)純64_6片.xml", "梵唄目錄Ⅲ梵唄集成(以64k music音軌重錄)9片全.xml", "梵唄集成_297曲.xml", "梵唄目錄Ⅲ梵唄集成(以64k music音軌重錄)原稿-更新.xml", "梵唄目錄Ⅲ梵唄集成_335曲.xml", "梵唄目錄Ⅲ梵唄集成_373曲.xml", "梵唄目錄Ⅲ梵唄集成_409曲.xml", "梵唄目錄wma32k.xml", "梵唄目錄Ⅲ梵唄集成_409曲wma32k.xml", "梵唄目錄Ⅲ梵唄集成_421曲mp3.txt", "梵唄目錄Ⅲ梵唄集成_421曲wma.txt", "梵唄目錄Ⅲ梵唄集成_429曲wma.txt", "師父開示.xml", "daoru-mp3.xml", "daoru-wma.xml", "給傳自師的信.xml", "恭祝毗盧遮那法報化三身聖像.xml", "影片.xml", "鐘板.xml", "規約.xml", "大進堂.xml", "陞座.xml", "圓職上堂起七註釋.xml", "竊取佛寺財物.xml", "祈雨儀.xml", "漢音八音解.xml", "香燈記事.xml", "佛誕日.xml", "啟建梁皇法會前置﹑進行注意項目.xml", "承天禪寺91年度法會活動時間表.xml", "中區全國供佛供僧大會法會程序表.xml", "放生儀規略記.xml", "開光儀式.xml", "開光儀式(地藏菩薩).xml", "●上廣下欽老和尚誕辰文書.xml", "●薦亡父母.xml", "我的通用字1.xml", "我的通用字2.xml", "Sila-txt0401.xml", "傳送給圖書館的信文.xml", "readme.xml", "印度佛教史.xml", "阿底峽尊者傳.xml", "帝洛巴--噶舉派白教第一代祖師.xml", "那洛巴.xml", "瑪爾巴譯師傳1.xml", "密勒日巴大師全集.xml", "密勒日巴略傳.xml", "大威德之光--密宗大師熱羅多吉扎奇異一生.xml", "《覺囊派教法史》.xml", "藏傳佛教覺囊派.xml", "WHO佛梅大藏經緣起.xml", "安裝說明.xml", "與青年僧談二十一世紀的漢傳佛教.xml", "嘉豐咒語電子報.xml", "咒語漫談第001期咒語漫談23.xml", "咒語漫談第002期咒語漫談20.xml", "咒語漫談第003期咒語漫談19.xml", "咒語漫談第004期咒語漫談18.xml", "咒語漫談第005期咒語漫談17.xml", "咒語漫談第006期咒語漫談16.xml", "咒語漫談第007期咒語漫談15.xml", "咒語漫談第008期咒語漫談14.xml", "咒語漫談第010期咒語漫談12.xml", "咒語漫談第011期咒語漫談11.xml", "咒語漫談第012期咒語漫談10.xml", "咒語漫談第013期咒語漫談9.xml", "咒語漫談第014期咒語漫談8.xml", "咒語漫談第015期咒語漫談7.xml", "咒語漫談第016期咒語漫談6.xml", "咒語漫談第019期咒語漫談-5.xml", "咒語漫談第020期咒語漫談-4.xml", "咒語漫談第021期咒語漫談-3.xml", "咒語漫談第022期咒語漫談-2.xml", "咒語漫談第023期咒語漫談.xml", "咒語漫談第024期咒語漫談：消災解厄的《消災咒》上.xml", "咒語漫談第025期咒語漫談：消災解厄的《消災咒》下.xml", "咒語漫談第026期咒語漫談：掌管壽命的《無量壽佛咒》.xml", "咒語漫談第027期咒語漫談：四臂觀音的《六字大明咒》.xml", "咒語漫談第028期咒語漫談：藏傳特有的《紅觀音咒》.xml", "咒語漫談第029期咒語漫談：漢傳的《觀音六字咒》.xml", "咒語漫談第030期咒語漫談：護身護女的《文殊一字咒》.xml", "咒語漫談第031期咒語漫談：大願度眾的《地藏菩薩咒》.xml", "咒語漫談第032期咒語漫談：滅罪生福的《千轉觀音咒》.xml", "咒語漫談第033期咒語漫談：息災除難的《文殊八字咒》.xml", "咒語漫談第034期咒語漫談：賣座最高的《十一面觀音咒》上.xml", "咒語漫談第035期咒語漫談：四處可見的《十一面觀音咒》中.xml", "咒語漫談第036期咒語漫談：達拉達拉的《十一面觀音咒》下.xml", "咒語漫談第037期咒語漫談：咒語的意義.xml", "咒語漫談第038期咒語漫談：《龍王咒》又一章～瀧見觀音.xml", "咒語漫談第039期咒語漫談：何以名為《光明真言》？.xml", "咒語漫談第040期咒語漫談：咒語的解謎者.xml", "咒語漫談第041期咒語漫談：你也可以成為梵文咒語專家.xml", "咒語漫談第042期咒語漫談：何謂「心咒」？.xml", "咒語漫談第043期咒語漫談：漢文佛典中的五體梵字.xml", "咒語漫談第044期咒語漫談：悉曇體梵字.xml", "咒語漫談第045期咒語漫談：城體梵字.xml", "咒語漫談第046期咒語漫談：蘭札體梵字.xml", "咒語漫談第047期咒語漫談：藏文梵字.xml", "咒語漫談第048期咒語漫談：五體梵字回顧.xml", "咒語漫談第049期咒語漫談：梵音的演變問題.xml", "咒語漫談第050期咒語漫談：房山石經明咒集.xml", "咒語漫談第051期咒語漫談：《明咒集》深度探討.xml", "咒語漫談第052期咒語漫談：讓生活與修行同步圓滿.xml", "咒語漫談第053期咒語漫談：短咒持誦經驗分享.xml", "咒語漫談第054期咒語漫談：頻催法鼓的聖嚴法師.xml", "咒語漫談第055期咒語漫談：認識城體梵字.xml", "咒語漫談第056期咒語漫談：城體梵字研究.xml", "SIDDAM安裝輸入說明.xml", "Siddam.xml", "SIDDAM輸入內碼.xml", "QA2000-2.xml", "輸入與輸出結果不符合.xml", "輸入碼重複.xml", "無蝦米.xml", "錄音Goldwave.xml", "MSN快速鍵及數位相機使用訣.xml", "country.xml", "country (2).xml", "電子佛典的誕生.xml", "電子佛典數位化的運用與展望.xml", "電子藏經的輸入、校對及編輯.xml", "CBGrep資料搜尋工具的介紹.xml", "電子佛典缺字實務.xml", "標記語言的應用.xml", "漢文佛典電子化記事1.xml", "締造佛教電子出版的新紀元.xml", "由《大正藏》輸入經驗兼談古籍整.xml", "使用經驗分享.xml", "簡單標記介紹.xml", "簡介學術版XML標記.xml", "歷代漢文大藏經概述.txt", "[藏經校對] 看圖校對程式 V1.1.1.13.xml", "注意校對.xml", "注意問題[1].xml", "章數位典藏一期總成果發表 章.xml", "ICQ ：一個科技行銷上的嘆息.xml", "w2.xml", "w4.xml", "如果當年當希特勒謹慎一點，沒有入侵蘇聯.xml", "用手機的人要注意.xml", "休息站小心愛車被動手腳.xml", "回家多注意門前.xml", "有手機的人一定要看.xml", "有車的都要看.xml", "含毒電郵危害大.xml", "身分證遺失的自保方法.xml", "防信用卡盜刷必看.xml", "身分證影本簽註寫法.xml", "蕭條為何也是送給成長的禮物？.xml", "Nokia IP40.xml", "OKWAP 與 EMI 合作，兩百首鈴聲讓你抓到手軟.xml", "發現故宮----故宮圖書大展暨故宮出版文化研討----一覽故宮歷年出版菁華之全貌.xml", "蘇中傑：當代千字文.xml", "著作財產權節錄.xml", "著作財產權重點.xml", "從HTML到XML.xml", "順發3C - 服務據點.xml", "維基經濟學.xml", "Gmail鍵盤快速鍵.xml", "100科技資訊.xml", "102資料.xml", "你應該買有機食品嗎？.xml", "SARS與感冒之比較.xml", "希望您健康水道.xml", "每週走路4小時骨折危險少4成.xml", "多賺30年.xml", "收訊只剩一格發射強度1000倍.xml", "吃的健康又可防癌.xml", "用公廁前先翻看坐墊.xml", "w1.xml", "w3.xml", "w5.xml", "w6.xml", "w7.xml", "每天喝一杯養生汁.xml", "藥論及藥方.xml", "各單味藥方_台北泰山鄉吳鹿山醫師_unicode.xml", "許家六科真方_台北泰山鄉吳鹿山醫師_unicode.xml", "肝膽淨化法.xml", "100健康.xml", "固齒神方.txt", "不同的果汁，不同的功能.txt", "咖啡介紹.txt", "甲狀腺機能亢進 全方位治療.txt", "生命三角.xml", "野外生存技術手冊.txt", "百科知識.txt", "菩薩本業經.xml", "佛說菩薩內戒經.xml", "差異1-13個.xml", "差異1-7個.xml", "給佛典協會的信1.xml", "給佛典協會的信2.xml", "給佛典協會的信3_校對經過說明.xml", "信1.xml", "信2.xml", "信3.xml", "信4.xml", "信5.xml", "信6.xml", "信7.xml", "信8.xml", "信9.xml", "信10.xml", "信11.xml", "信12.xml", "信13.xml", "信14.xml", "註.xml", "註2.xml", "註3.xml", "註4.xml", "註5.xml", "校堪異字.xml", "校勘之誤0_及CBETA的回覆.xml", "校勘之誤1_及CBETA的回覆.xml", "致道中法師-20050613.xml", "T2L大正排序--龍藏冊別.xml", "T2L(錄自22種大藏經通檢).xml", "T2L-修訂說明.xml", "龍藏 vs. 大正藏.xml", "LT龍藏排序--龍藏冊別.xml", "TL原龍藏排序.xml", "乾隆大藏經 部類函號.xml", "大正藏（含《丁福保大辭典》）經文新通用字.xml", "Accelon，一個開放的數位古籍平台.xml", "以語意為核心的文件處理平台.xml", "使用HTML5處理古書版式.xml", "電子佛學資料庫於行動上網時代的機遇.txt", "CBETA 經文轉Accelon3 資料庫.xml", "剎那工坊服務項目.xml", "accelon3資料庫簡單的制作(網路摘要).xml", "accelon資料標記說明.xml", "indexer建置資料庫方法.xml", "辭典標記.xml", "註釋聯圖.xml", "超連結語法.xml", "Accelon3背景顏色.xml", "accelon-加顏色.xml", "color_style.txt", "kangxizidian_style.xml", "TZ_style.xml", "主架構範本.xml", "主架構範本1.xml", "taisho.xml", "wxzj.xml", "taisho校勘版.xml", "panna.xml", "Library.xml", "南傳大藏經.xml", "TZ.xml", "color.xml", "hanyu.xml", "kangxizidian.xml", "stk1.xml", "shiji.xml", "shiji-v130.xml", "shiji-txt130.xml", "suitang.xml", "lst.xml", "XML原始檔製作(轉換)流程.txt", "HTML轉XML為例.txt", "世界佛教大藏經網站.txt", "我的最愛10.txt", "向外發布訊息的各單位.xml", "Liu.txt", "請問聘書如何寫.xml", "呼吸.xml", "樹稍.xml", "msn.xml", "工具.xml", "打雷.xml", "字.xml", "字元.xml", "防毒掃描.xml", "郵件、新聞.xml", "節約上網.xml", "調整正常.xml", "Fw_ 有關傳真.xml", "Fw_ 附件.xml", "Fw_ 筆錄.xml", "Fw_ 歡迎從 Outlook Express 中使用 Hotmail 離線支援.xml", "＊＊地址問題.xml", "找道場.xml", "照平法師與介雲法師的問答.xml", "給無蝦米的信.xml", "偽蝦米.xml", "98、99 年網路通信.xml", "德勝尊者　道鑑.xml", "99年結夏後的通訊.xml", "99年發現並提供的藏經之誤及資功會之誤.xml", "100email.xml", "谷關文件.xml", "向外發布訊息的各單位email地址1.xml", "千字文淺介.xml", "三字經易解.xml", "上座部學院組織章程.xml", "上座部學院電話使用規則.xml", "上座部學院資料分類項目.xml", "上座部學院錄音檔目錄.xml", "word1.xml", "index-70-10.xml", "read me;請閱讀此下載說明.xml", "悉達拉長老開示.xml", "欲請緬甸文巴利三藏申請函.xml", "欲請緬甸文巴利三藏申請函2.xml", "tusita兜率天多語課誦本02 Tusita Chanting part 1 new TC.xml", "102札記.xml", "健康食品、素餅店.xml", "日誌.txt"]
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
        .replace(/(<[^>]*)[\n|\r]([^>]*>)/g, '$1$2\n')
        .replace(/<頁碼? [^>]+>/g, '')
        .replace(/<段\/?>/g, '')
        .replace(/<聯 i/g, '<k to')
        .replace(/<聯 l/g, '<a href')
        .replace(/聯>/g, 'a>')
        .replace(/<_-書 .+/g, '')
        .replace(/_-章>/g, 'le>')
        .replace(/_-節>/g, 'je>')
        .replace(/<檔>/g, '======')
        .replace(/<\/檔>/g, '====')
        .replace(/&/g, '＆')
        .replace(/粗>/g, 'b>')
        .replace(/經>/g, 'xa>')
        // .replace(/字母>/g, 'h1>')
        .replace(/編目資訊>/g, 'ml>')
        .replace(/編輯>/g, 'kai>')
        .replace(/原書分頁>/g, 'hr>')
        .replace(/相應部>/g, 'sep>')
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
        .replace(/<集/g, '<group')
        .replace(/集>/g, 'group>')
        .replace(/<編/g, '<group')
        .replace(/編>/g, 'group>')
        .replace(/大>/g, 'tag>')
        .replace(/表>/g, 'kai>')
        .replace(/<書/g, '<article')
        .replace(/書>/g, 'article>')
        .replace(/章>/g, 'h1>')
        .replace(/節>/g, 'h2>')
        .replace(/類>/g, 'h3>')
        .replace(/項>/g, 'h4>')
        .replace(/文>/g, 'h5>')
        .replace(/篇>/g, 'h6>')
        .replace(/年>/g, 'year>')
        .replace(/詩>/g, 'si>')
        .replace(/著者>/g, 'sr>')
        .replace(/詞>/g, 'tag>')
        .replace(/人名>/g, 'name>')
        .replace(/問>/g, 'ask>')
        .replace(/答>/g, 'rep>')
        .replace(/小字>/g, 'little>')
        .replace(/字>/g, 'zi>')
        .replace(/原出處>/g, 'ptr>')
        .replace(/參考書>/g, 'def>')
        .replace(/期>/g, 'l>')
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

    // 100字切行
    for (var i = 0; i < b.length; i++) {
        b[i] = b[i].replace(/(.{100})/g, '$1\n')
            // 接合標記內的斷行
            .replace(/(<[^>]*)[\n|\r]([^>]*>)/g, '$1$2\n')
    }

    // 導入陣列內
    okfile += b.join('\n')
    // 各檔完成時返回通知
    console.log('arrpb is OK: ' + k)
}

// ===============================================
// 因為整合寫入一個檔內，所以等全部寫入後再上頁碼
var z = okfile.split('\n')
// 加上批次冊碼頁碼
// 預設變量，才能累加冊碼頁碼
var s0 = 0
var s1 = 0
var s2 = 1
var sfn = 1
var sa = 1

// 第1行不好轉換，會出現亂碼，所以從第2行開始
for (var i = 1; i < z.length; i++) {
    // 刪除行首空白
    // z[i] = z[i].replace(/^ +/g, '')
    // 加上冊碼頁碼
    // 多個檔案的時候，不好算出冊碼，就省去冊碼
    if (/<article/.test(z[i]) || i == 1 || s2 > 1023) {
        s2 = 1
        // s1++
        // z[i] = '<pb n="' + s1 + '.' + s2 + '"/>\n' + z[i]
        z[i] = '<pb n="' + s2 + '"/>\n' + z[i]
        s0 = i + 30
    }
    if (i == s0) {
        s2++
        // z[i] = '<pb n="' + s1 + '.' + s2 + '"/>\n' + z[i]
        z[i] = '<pb n="' + s2 + '"/>\n' + z[i]
        s0 = i + 30
    }
}
// 用絕對路徑寫入檔案
fs.writeFileSync('ok.xml', '<file>\n' + z.join('\n') + '\n</file>', wu)

// 全部完成時返回通知
console.log('All is OK')

// 'test'名字要和time()中的名字保持一致
console.timeEnd('共耗費了')