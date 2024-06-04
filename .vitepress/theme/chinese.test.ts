import {describe, expect, test} from "vitest"
import {isChineseChar, resolveChineseSpaces} from "./chinese"

describe("chinese char detect", function () {
  test("chinese", function () {
    const chinese =
      "受命于天，既寿永昌；汉并天下，而后星海。" +
      "论至德者不和于俗，成大功者不谋于众。" +
      "法者所以爱民也，礼者所以便事也。" +
      "是以圣人苟可以强国，不法其故；苟可以利民，不循其礼。"
    for (let index = 0; index < chinese.length; index++) {
      expect(isChineseChar(chinese.charCodeAt(index))).toBe(true)
    }
  })

  test("alphabets", function () {
    const alphabets =
      "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz," +
      "АаБбВвГгДдЕеЁёЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЪъЫыЬьЭэЮюЯя," +
      "ΑαΒβΓγΔδΕεΖζΗηΘθΙιΚκΛλΜμΝνΞξΟοΠπΡρΣσςΤτΥυΦφΧχΨψΩω." +
      "ཀ་ཁ་ག་ང་ཅ་ཆ་ཇ་ཉ་ཏ་ཐ་ད་ན་པ་ཕ་བ་མ་ཙ་ཚ་ཛ་ཞ་ཟ་འ་ཡ་ར་ལ་ཤ་ས་ཧ་ཨ།།" +
      "0123456789,.<>?/'\"!@#$%^&*()-=-+[]{}\\|"
    for (let index = 0; index < alphabets.length; index++) {
      expect(isChineseChar(alphabets.charCodeAt(index))).toBe(false)
    }
  })
})

describe("resolve", function () {
  test("pure chinese", function () {
    const before = "善为国者 仓廪虽满 不偷于农 国大民众 不淫于言 则民朴壹"
    const after = "善为国者仓廪虽满不偷于农国大民众不淫于言则民朴壹"
    expect(resolveChineseSpaces(before)).toBe(after)
  })

  test("pure alphabets", function () {
    const raw = "To be or not to be, that's a question."
    expect(resolveChineseSpaces(raw)).toBe(raw)
  })

  test("mixed", function () {
    const before = "中文中间 有空格 and there's combined English在其中"
    const after = "中文中间有空格 and there's combined English在其中"
    expect(resolveChineseSpaces(before)).toBe(after)
  })
})
