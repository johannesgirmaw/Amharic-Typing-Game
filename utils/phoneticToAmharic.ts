// Standard Amharic phonetic keyboard mapping
// Based on standard Amharic keyboard layout

const phoneticMap: { [key: string]: string } = {
  // Consonant + default vowel (ə)
  he: "ሀ",
  le: "ለ",
  me: "መ",
  se: "ሰ",
  re: "ረ",
  she: "ሸ",
  qe: "ቀ",
  be: "በ",
  ve: "ቨ",
  te: "ተ",
  che: "ቸ",
  ne: "ነ",
  ke: "ከ",
  we: "ወ",
  ze: "ዘ",
  ye: "የ",
  de: "ደ",
  ge: "ገ",
  the: "ጠ",
  chhe: "ጨ",
  phe: "ጰ",
  tse: "ጸ",
  fe: "ፈ",
  pe: "ፐ",
  xe: "ኸ",

  // A vowel syllables
  ha: "ሃ",
  la: "ላ",
  ma: "ማ",
  sa: "ሳ",
  ra: "ራ",
  sha: "ሻ",
  qa: "ቃ",
  ba: "ባ",
  va: "ቫ",
  ta: "ታ",
  cha: "ቻ",
  na: "ና",
  ka: "ካ",
  wa: "ዋ",
  za: "ዛ",
  ya: "ያ",
  da: "ዳ",
  ga: "ጋ",
  tha: "ጣ",
  chha: "ጫ",
  pha: "ጳ",
  tsa: "ጻ",
  fa: "ፋ",
  pa: "ፓ",
  xa: "ኻ",

  // E vowel syllables (ä)
  hie: "ሄ",
  lie: "ሌ",
  mie: "ሜ",
  sie: "ሴ",
  rie: "ሬ",
  shie: "ሼ",
  qie: "ቄ",
  bie: "ቤ",
  vie: "ቬ",
  tie: "ቴ",
  chie: "ቼ",
  nie: "ኔ",
  kie: "ኬ",
  wie: "ዌ",
  zie: "ዜ",
  yie: "ዬ",
  die: "ዴ",
  gie: "ጌ",
  thie: "ጤ",
  chhie: "ጬ",
  phie: "ጴ",
  tsie: "ጼ",
  fie: "ፌ",
  pie: "ፔ",
  xie: "ኼ",

  // I vowel syllables
  hi: "ሂ",
  li: "ሊ",
  mi: "ሚ",
  si: "ሲ",
  ri: "ሪ",
  shi: "ሺ",
  qi: "ቂ",
  bi: "ቢ",
  vi: "ቪ",
  ti: "ቲ",
  chi: "ቺ",
  ni: "ኒ",
  ki: "ኪ",
  wi: "ዊ",
  zi: "ዢ",
  yi: "ዪ",
  di: "ዲ",
  gi: "ጊ",
  thi: "ጢ",
  chhi: "ጪ",
  phi: "ጲ",
  tsi: "ጺ",
  fi: "ፊ",
  pi: "ፒ",
  xi: "ኺ",

  // U vowel syllables
  hu: "ሁ",
  lu: "ሉ",
  mu: "ሙ",
  su: "ሱ",
  ru: "ሩ",
  shu: "ሹ",
  qu: "ቁ",
  bu: "ቡ",
  vu: "ቩ",
  tu: "ቱ",
  chu: "ቹ",
  nu: "ኑ",
  ku: "ኩ",
  wu: "ዉ",
  zu: "ዙ",
  yu: "ዩ",
  du: "ዱ",
  gu: "ጉ",
  thu: "ጡ",
  chhu: "ጩ",
  phu: "ጱ",
  tsu: "ጹ",
  fu: "ፉ",
  pu: "ፑ",
  xu: "ኹ",
  // Sixth letter
  h: "ህ",
  l: "ል",
  m: "ም",
  s: "ስ",
  r: "ር",
  sh: "ሽ",
  q: "ቅ",
  b: "ብ",
  v: "ቭ",
  t: "ት",
  ch: "ች",
  n: "ን",
  k: "ክ",
  w: "ወ",
  z: "ዝ",
  y: "ይ",
  d: "ድ",
  g: "ግ",
  th: "ጥ",
  chh: "ጭ",
  ph: "ጵ",
  ts: "ጽ",
  f: "ፍ",
  p: "ፕ",
  x: "ኽ",
  // O vowel syllables
  ho: "ሆ",
  lo: "ሎ",
  mo: "ሞ",
  so: "ሶ",
  ro: "ሮ",
  sho: "ሾ",
  qo: "ቆ",
  bo: "ቦ",
  vo: "ቮ",
  to: "ቶ",
  cho: "ቾ",
  no: "ኖ",
  ko: "ኮ",
  wo: "ዎ",
  zo: "ዞ",
  yo: "ዮ",
  do: "ዶ",
  go: "ጎ",
  tho: "ጦ",
  chho: "ጮ",
  pho: "ጶ",
  tso: "ጾ",
  fo: "ፎ",
  po: "ፖ",
  xo: "ኾ",

  // Special double letters
  ss: "ሽ",
  c: "ች",
  dd: "ጀ",
  zz: "ዥ",
  aa: "ዋ",
  ee: "ኤ",
  ii: "ኢ",
  oo: "ኦ",
  uu: "ኡ",

  // Single vowels (glottals)
  a: "አ",
  e: "እ",
  i: "ኢ",
  o: "ኦ",
  u: "ኡ",
};

// English to Amharic conversion
export function convertEnglishToAmharic(input: string): string {
  if (!input || input.trim() === "") return input;

  const words = input.split(/(\s+)/); // Split by spaces but keep the spaces
  const convertedWords = words.map((word) => {
    // If it's just spaces, return as is
    if (/^\s+$/.test(word)) return word;

    const lower = word.toLowerCase();

    // Try syllable-based conversion
    let result = "";
    let i = 0;

    while (i < lower.length) {
      let matched = false;

      // Try to match syllables of decreasing length (longest first)
      for (let len = Math.min(4, lower.length - i); len >= 1; len--) {
        const substr = lower.substr(i, len);
        if (phoneticMap[substr]) {
          result += phoneticMap[substr];
          i += len;
          matched = true;
          break;
        }
      }

      if (!matched) {
        // No match found, keep the character as is
        result += lower[i];
        i++;
      }
    }

    return result || word;
  });

  return convertedWords.join("");
}
