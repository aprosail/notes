import {describe, expect, test} from "vitest"
import {isChineseChar} from "./chinese"

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
