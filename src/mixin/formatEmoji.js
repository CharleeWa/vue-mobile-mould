import xss from 'xss'
const emotionHost = 'https://livestatic.polyv.net'
const emotionslist = {
  微笑: emotionHost + '/assets/images/em/1.png',
  撇嘴: emotionHost + '/assets/images/em/2.png',
  色: emotionHost + '/assets/images/em/3.png',
  发呆: emotionHost + '/assets/images/em/4.png',
  得意: emotionHost + '/assets/images/em/5.png',
  流泪: emotionHost + '/assets/images/em/6.png',
  害羞: emotionHost + '/assets/images/em/7.png',
  闭嘴: emotionHost + '/assets/images/em/8.png',
  睡: emotionHost + '/assets/images/em/9.png',
  大哭: emotionHost + '/assets/images/em/10.png',
  尴尬: emotionHost + '/assets/images/em/11.png',
  发怒: emotionHost + '/assets/images/em/12.png',
  调皮: emotionHost + '/assets/images/em/13.png',
  呲牙: emotionHost + '/assets/images/em/14.png',
  惊讶: emotionHost + '/assets/images/em/15.png',
  难过: emotionHost + '/assets/images/em/16.png',
  酷: emotionHost + '/assets/images/em/17.png',
  冷汗: emotionHost + '/assets/images/em/18.png',
  抓狂: emotionHost + '/assets/images/em/19.png',
  吐: emotionHost + '/assets/images/em/20.png',
  偷笑: emotionHost + '/assets/images/em/21.png',
  可爱: emotionHost + '/assets/images/em/22.png',
  白眼: emotionHost + '/assets/images/em/23.png',
  傲慢: emotionHost + '/assets/images/em/24.png',
  饥饿: emotionHost + '/assets/images/em/25.png',
  困: emotionHost + '/assets/images/em/26.png',
  惊恐: emotionHost + '/assets/images/em/27.png',
  流汗: emotionHost + '/assets/images/em/28.png',
  憨笑: emotionHost + '/assets/images/em/29.png',
  大兵: emotionHost + '/assets/images/em/30.png',
  奋斗: emotionHost + '/assets/images/em/31.png',
  咒骂: emotionHost + '/assets/images/em/32.png',
  疑问: emotionHost + '/assets/images/em/33.png',
  嘘: emotionHost + '/assets/images/em/34.png',
  晕: emotionHost + '/assets/images/em/35.png',
  折磨: emotionHost + '/assets/images/em/36.png',
  衰: emotionHost + '/assets/images/em/37.png',
  骷髅: emotionHost + '/assets/images/em/38.png',
  敲打: emotionHost + '/assets/images/em/39.png',
  再见: emotionHost + '/assets/images/em/40.png',
  擦汗: emotionHost + '/assets/images/em/41.png',
  抠鼻: emotionHost + '/assets/images/em/42.png',
  鼓掌: emotionHost + '/assets/images/em/43.png',
  糗大了: emotionHost + '/assets/images/em/44.png',
  坏笑: emotionHost + '/assets/images/em/45.png',
  左哼哼: emotionHost + '/assets/images/em/46.png',
  右哼哼: emotionHost + '/assets/images/em/47.png',
  哈欠: emotionHost + '/assets/images/em/48.png',
  鄙视: emotionHost + '/assets/images/em/49.png',
  委屈: emotionHost + '/assets/images/em/50.png',
  快哭了: emotionHost + '/assets/images/em/51.png',
  阴险: emotionHost + '/assets/images/em/52.png',
  亲亲: emotionHost + '/assets/images/em/53.png',
  吓: emotionHost + '/assets/images/em/54.png',
  可怜: emotionHost + '/assets/images/em/55.png',
  菜刀: emotionHost + '/assets/images/em/56.png',
  西瓜: emotionHost + '/assets/images/em/57.png',
  啤酒: emotionHost + '/assets/images/em/58.png',
  篮球: emotionHost + '/assets/images/em/59.png',
  乒乓: emotionHost + '/assets/images/em/60.png',
  咖啡: emotionHost + '/assets/images/em/61.png',
  饭: emotionHost + '/assets/images/em/62.png',
  猪头: emotionHost + '/assets/images/em/63.png',
  玫瑰: emotionHost + '/assets/images/em/64.png',
  凋谢: emotionHost + '/assets/images/em/65.png',
  示爱: emotionHost + '/assets/images/em/66.png',
  爱心: emotionHost + '/assets/images/em/67.png',
  心碎: emotionHost + '/assets/images/em/68.png',
  蛋糕: emotionHost + '/assets/images/em/69.png',
  闪电: emotionHost + '/assets/images/em/70.png',
  炸弹: emotionHost + '/assets/images/em/71.png',
  刀: emotionHost + '/assets/images/em/72.png',
  足球: emotionHost + '/assets/images/em/73.png',
  瓢虫: emotionHost + '/assets/images/em/74.png',
  便便: emotionHost + '/assets/images/em/75.png',
  月亮: emotionHost + '/assets/images/em/76.png',
  太阳: emotionHost + '/assets/images/em/77.png',
  礼物: emotionHost + '/assets/images/em/78.png',
  拥抱: emotionHost + '/assets/images/em/79.png',
  强: emotionHost + '/assets/images/em/80.png',
  弱: emotionHost + '/assets/images/em/81.png',
  握手: emotionHost + '/assets/images/em/82.png',
  胜利: emotionHost + '/assets/images/em/83.png',
  抱拳: emotionHost + '/assets/images/em/84.png',
  勾引: emotionHost + '/assets/images/em/85.png',
  拳头: emotionHost + '/assets/images/em/86.png',
  差劲: emotionHost + '/assets/images/em/87.png',
  爱你: emotionHost + '/assets/images/em/88.png',
  NO: emotionHost + '/assets/images/em/89.png',
  OK: emotionHost + '/assets/images/em/90.png',
  爱情: emotionHost + '/assets/images/em/91.png',
  飞吻: emotionHost + '/assets/images/em/92.png',
  跳跳: emotionHost + '/assets/images/em/93.png',
  发抖: emotionHost + '/assets/images/em/94.png',
  怄火: emotionHost + '/assets/images/em/95.png',
  转圈: emotionHost + '/assets/images/em/96.png',
  磕头: emotionHost + '/assets/images/em/97.png',
  回头: emotionHost + '/assets/images/em/98.png',
  跳绳: emotionHost + '/assets/images/em/99.png',
  挥手: emotionHost + '/assets/images/em/100.png'
}
const emojiMethods = {
  methods: {
    // 正则获取表情文字并替换为表情icon
    formatEmotions (_html) {
      let xssContent = ''
      if (_html) {
        xssContent = xss(_html)
      } else {
        return xssContent
      }
      if (xssContent) {
        let replaceHtml = xssContent.replace(/\[(.+?)\]/g, function (
          title,
          titleStr
        ) {
          if (emotionslist[titleStr]) {
            return (
              '<img src="' +
              emotionslist[titleStr] +
              '"  ' +
              'alt="' +
              titleStr +
              '" class="emotionimg new">'
            )
          } else {
            return title
          }
        })
        // console.log(replaceHtml.replace('<', '&lt;').replace('>', '&gt;'))
        replaceHtml = replaceHtml.includes('emotionimg')
          ? replaceHtml
          : replaceHtml.replace(/</g, '&lt;').replace(/>/g, '&gt;')
        return replaceHtml
      }
    }
  }
}
export { emojiMethods }
