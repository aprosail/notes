/**
 * @param charCode Use `string.charCodeAt(index)` to get the charCode.
 * @returns whether it is unicode Chinese character or punctuation.
 */
export function isChineseChar(charCode: number) {
  // Optimize speed: most alphabets' unicode are less than hieroglyphs.
  if (charCode < chineseUnicodeChars[0].start) return false
  for (const item of chineseUnicodeChars) {
    if (charCode >= item.start && charCode <= item.end) return true
  }
  return false
}

const chineseUnicodeChars = [
  {start: 0x2e80, end: 0x2eff}, // CJK Radicals Supplement
  {start: 0x2f00, end: 0x2fdf}, // KangXi Radicals
  {start: 0x3000, end: 0x303f}, // CJK Symbols and Punctuation
  {start: 0x3400, end: 0x4dbf}, // CJK Unified Ideographs Extension A
  {start: 0x4e00, end: 0x9fff}, // CJK Unified Ideographs
  {start: 0xf900, end: 0xfaff}, // CJK Compatibility Ideographs
  {start: 0xfe30, end: 0xfe4f}, // CJK Compatibility Forms
  {start: 0xff00, end: 0xffef}, // Forms, includes some Chinese punctuation
  {start: 0x20000, end: 0x2a6df}, // CJK Unified Ideographs Extension B
  {start: 0x2a700, end: 0x2b73f}, // CJK Unified Ideographs Extension C
  {start: 0x2b740, end: 0x2b81f}, // CJK Unified Ideographs Extension D
  {start: 0x2b820, end: 0x2cea1}, // CJK Unified Ideographs Extension E
  {start: 0x2ceb0, end: 0x2ebef}, // CJK Unified Ideographs Extension F
]
