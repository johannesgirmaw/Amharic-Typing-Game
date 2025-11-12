"use client";

import KeyboardUI from "./KeyboardUI";

interface MappingGroup {
  consonant: string;
  mappings: {
    english: string;
    amharic: string;
  }[];
}

// Organized keyboard mappings by consonant groups
const keyboardMappings: MappingGroup[] = [
  {
    consonant: "h",
    mappings: [
      { english: "he", amharic: "ሀ" },
      { english: "hu", amharic: "ሁ" },
      { english: "hi", amharic: "ሂ" },
      { english: "ha", amharic: "ሃ" },
      { english: "hie", amharic: "ሄ" },
      { english: "h", amharic: "ህ" },
      { english: "ho", amharic: "ሆ" },
    ],
  },
  {
    consonant: "l",
    mappings: [
      { english: "le", amharic: "ለ" },
      { english: "lu", amharic: "ሉ" },
      { english: "li", amharic: "ሊ" },
      { english: "la", amharic: "ላ" },
      { english: "lie", amharic: "ሌ" },
      { english: "l", amharic: "ል" },
      { english: "lo", amharic: "ሎ" },
    ],
  },
  {
    consonant: "H",
    mappings: [
      { english: "He", amharic: "ሐ" },
      { english: "Hu", amharic: "ሑ" },
      { english: "Hi", amharic: "ሒ" },
      { english: "Ha", amharic: "ሓ" },
      { english: "Hie", amharic: "ሔ" },
      { english: "H", amharic: "ሕ" },
      { english: "Ho", amharic: "ሖ" },
    ],
  },
  {
    consonant: "m",
    mappings: [
      { english: "me", amharic: "መ" },
      { english: "mu", amharic: "ሙ" },
      { english: "mi", amharic: "ሚ" },
      { english: "ma", amharic: "ማ" },
      { english: "mie", amharic: "ሜ" },
      { english: "m", amharic: "ም" },
      { english: "mo", amharic: "ሞ" },
    ],
  },
  {
    consonant: "ss",
    mappings: [
      { english: "sse", amharic: "ሠ" },
      { english: "ssu", amharic: "ሡ" },
      { english: "ssi", amharic: "ሢ" },
      { english: "ssa", amharic: "ሣ" },
      { english: "ssie", amharic: "ሤ" },
      { english: "ss", amharic: "ሥ" },
      { english: "sso", amharic: "ሦ" },
    ],
  },
  {
    consonant: "r",
    mappings: [
      { english: "re", amharic: "ረ" },
      { english: "ru", amharic: "ሩ" },
      { english: "ri", amharic: "ሪ" },
      { english: "ra", amharic: "ራ" },
      { english: "rie", amharic: "ሬ" },
      { english: "r", amharic: "ር" },
      { english: "ro", amharic: "ሮ" },
    ],
  },
  {
    consonant: "s",
    mappings: [
      { english: "se", amharic: "ሰ" },
      { english: "su", amharic: "ሱ" },
      { english: "si", amharic: "ሲ" },
      { english: "sa", amharic: "ሳ" },
      { english: "sie", amharic: "ሴ" },
      { english: "s", amharic: "ስ" },
      { english: "so", amharic: "ሶ" },
    ],
  },
  {
    consonant: "x",
    mappings: [
      { english: "xe", amharic: "ሸ" },
      { english: "xu", amharic: "ሹ" },
      { english: "xi", amharic: "ሺ" },
      { english: "xa", amharic: "ሻ" },
      { english: "xie", amharic: "ሼ" },
      { english: "x", amharic: "ሽ" },
      { english: "xo", amharic: "ሾ" },
    ],
  },
  {
    consonant: "q",
    mappings: [
      { english: "qe", amharic: "ቀ" },
      { english: "qu", amharic: "ቁ" },
      { english: "qi", amharic: "ቂ" },
      { english: "qa", amharic: "ቃ" },
      { english: "qie", amharic: "ቄ" },
      { english: "q", amharic: "ቅ" },
      { english: "qo", amharic: "ቆ" },
    ],
  },
  {
    consonant: "b",
    mappings: [
      { english: "be", amharic: "በ" },
      { english: "bu", amharic: "ቡ" },
      { english: "bi", amharic: "ቢ" },
      { english: "ba", amharic: "ባ" },
      { english: "bie", amharic: "ቤ" },
      { english: "b", amharic: "ብ" },
      { english: "bo", amharic: "ቦ" },
    ],
  },
  {
    consonant: "v",
    mappings: [
      { english: "ve", amharic: "ቨ" },
      { english: "vu", amharic: "ቩ" },
      { english: "vi", amharic: "ቪ" },
      { english: "va", amharic: "ቫ" },
      { english: "vie", amharic: "ቬ" },
      { english: "v", amharic: "ቭ" },
      { english: "vo", amharic: "ቮ" },
    ],
  },
  {
    consonant: "t",
    mappings: [
      { english: "te", amharic: "ተ" },
      { english: "tu", amharic: "ቱ" },
      { english: "ti", amharic: "ቲ" },
      { english: "ta", amharic: "ታ" },
      { english: "tie", amharic: "ቴ" },
      { english: "t", amharic: "ት" },
      { english: "to", amharic: "ቶ" },
    ],
  },
  {
    consonant: "c",
    mappings: [
      { english: "ce", amharic: "ቸ" },
      { english: "cu", amharic: "ቹ" },
      { english: "ci", amharic: "ቺ" },
      { english: "ca", amharic: "ቻ" },
      { english: "cie", amharic: "ቼ" },
      { english: "c", amharic: "ች" },
      { english: "co", amharic: "ቾ" },
    ],
  },
  {
    consonant: "hh",
    mappings: [
      { english: "hhe", amharic: "ኀ" },
      { english: "hhu", amharic: "ኁ" },
      { english: "hhi", amharic: "ኂ" },
      { english: "hha", amharic: "ኃ" },
      { english: "hhie", amharic: "ኄ" },
      { english: "hh", amharic: "ኅ" },
      { english: "hho", amharic: "ኆ" },
    ],
  },
  {
    consonant: "n",
    mappings: [
      { english: "ne", amharic: "ነ" },
      { english: "nu", amharic: "ኑ" },
      { english: "ni", amharic: "ኒ" },
      { english: "na", amharic: "ና" },
      { english: "nie", amharic: "ኔ" },
      { english: "n", amharic: "ን" },
      { english: "no", amharic: "ኖ" },
    ],
  },
  {
    consonant: "N",
    mappings: [
      { english: "Ne", amharic: "ኘ" },
      { english: "Nu", amharic: "ኙ" },
      { english: "Ni", amharic: "ኚ" },
      { english: "Na", amharic: "ኛ" },
      { english: "Nie", amharic: "ኜ" },
      { english: "N", amharic: "ኝ" },
      { english: "No", amharic: "ኞ" },
    ],
  },
  {
    consonant: "k",
    mappings: [
      { english: "ke", amharic: "ከ" },
      { english: "ku", amharic: "ኩ" },
      { english: "ki", amharic: "ኪ" },
      { english: "ka", amharic: "ካ" },
      { english: "kie", amharic: "ኬ" },
      { english: "k", amharic: "ክ" },
      { english: "ko", amharic: "ኮ" },
    ],
  },
  {
    consonant: "K",
    mappings: [
      { english: "Ke", amharic: "ኸ" },
      { english: "Ku", amharic: "ኹ" },
      { english: "Ki", amharic: "ኺ" },
      { english: "Ka", amharic: "ኻ" },
      { english: "Kie", amharic: "ኼ" },
      { english: "K", amharic: "ኽ" },
      { english: "Ko", amharic: "ኾ" },
    ],
  },
  {
    consonant: "w",
    mappings: [
      { english: "we", amharic: "ወ" },
      { english: "wu", amharic: "ዉ" },
      { english: "wi", amharic: "ዊ" },
      { english: "wa", amharic: "ዋ" },
      { english: "wie", amharic: "ዌ" },
      { english: "w", amharic: "ወ" },
      { english: "wo", amharic: "ዎ" },
    ],
  },
  {
    consonant: "z",
    mappings: [
      { english: "ze", amharic: "ዘ" },
      { english: "zu", amharic: "ዙ" },
      { english: "zi", amharic: "ዢ" },
      { english: "za", amharic: "ዛ" },
      { english: "zie", amharic: "ዜ" },
      { english: "z", amharic: "ዝ" },
      { english: "zo", amharic: "ዞ" },
    ],
  },
  {
    consonant: "Z",
    mappings: [
      { english: "Ze", amharic: "ዠ" },
      { english: "Zu", amharic: "ዡ" },
      { english: "Zi", amharic: "ዢ" },
      { english: "Za", amharic: "ዣ" },
      { english: "Zie", amharic: "ዤ" },
      { english: "Z", amharic: "ዥ" },
      { english: "Zo", amharic: "ዦ" },
    ],
  },
  {
    consonant: "y",
    mappings: [
      { english: "ye", amharic: "የ" },
      { english: "yu", amharic: "ዩ" },
      { english: "yi", amharic: "ዪ" },
      { english: "ya", amharic: "ያ" },
      { english: "yie", amharic: "ዬ" },
      { english: "y", amharic: "ይ" },
      { english: "yo", amharic: "ዮ" },
    ],
  },
  {
    consonant: "d",
    mappings: [
      { english: "de", amharic: "ደ" },
      { english: "du", amharic: "ዱ" },
      { english: "di", amharic: "ዲ" },
      { english: "da", amharic: "ዳ" },
      { english: "die", amharic: "ዴ" },
      { english: "d", amharic: "ድ" },
      { english: "do", amharic: "ዶ" },
    ],
  },
  {
    consonant: "j",
    mappings: [
      { english: "Je", amharic: "ጀ" },
      { english: "ju", amharic: "ጁ" },
      { english: "ji", amharic: "ጂ" },
      { english: "ja", amharic: "ጃ" },
      { english: "jie", amharic: "ጄ" },
      { english: "j", amharic: "ጅ" },
      { english: "jo", amharic: "ጆ" },
    ],
  },
  {
    consonant: "g",
    mappings: [
      { english: "ge", amharic: "ገ" },
      { english: "gu", amharic: "ጉ" },
      { english: "gi", amharic: "ጊ" },
      { english: "ga", amharic: "ጋ" },
      { english: "gie", amharic: "ጌ" },
      { english: "g", amharic: "ግ" },
      { english: "go", amharic: "ጎ" },
    ],
  },
  {
    consonant: "T",
    mappings: [
      { english: "Te", amharic: "ጠ" },
      { english: "Tu", amharic: "ጡ" },
      { english: "Ti", amharic: "ጢ" },
      { english: "Ta", amharic: "ጣ" },
      { english: "Tie", amharic: "ጤ" },
      { english: "T", amharic: "ጥ" },
      { english: "To", amharic: "ጦ" },
    ],
  },
  {
    consonant: "C",
    mappings: [
      { english: "Ce", amharic: "ጨ" },
      { english: "Cu", amharic: "ጩ" },
      { english: "Ci", amharic: "ጪ" },
      { english: "Ca", amharic: "ጫ" },
      { english: "Cie", amharic: "ጬ" },
      { english: "C", amharic: "ጭ" },
      { english: "Co", amharic: "ጮ" },
    ],
  },
  {
    consonant: "P",
    mappings: [
      { english: "Pe", amharic: "ጰ" },
      { english: "Pu", amharic: "ጱ" },
      { english: "Pi", amharic: "ጲ" },
      { english: "Pa", amharic: "ጳ" },
      { english: "Pie", amharic: "ጴ" },
      { english: "P", amharic: "ጵ" },
      { english: "Po", amharic: "ጶ" },
    ],
  },
  {
    consonant: "S",
    mappings: [
      { english: "Se", amharic: "ጸ" },
      { english: "Su", amharic: "ጹ" },
      { english: "Si", amharic: "ጺ" },
      { english: "Sa", amharic: "ጻ" },
      { english: "Sie", amharic: "ጼ" },
      { english: "S", amharic: "ጽ" },
      { english: "So", amharic: "ጾ" },
    ],
  },
  {
    consonant: "SS",
    mappings: [
      { english: "tse", amharic: "ፀ" },
      { english: "SSu", amharic: "ፁ" },
      { english: "SSi", amharic: "ፂ" },
      { english: "SSa", amharic: "ፃ" },
      { english: "SSie", amharic: "ፄ" },
      { english: "SS", amharic: "ፅ" },
      { english: "SSo", amharic: "ፆ" },
    ],
  },
  {
    consonant: "f",
    mappings: [
      { english: "fe", amharic: "ፈ" },
      { english: "fu", amharic: "ፉ" },
      { english: "fi", amharic: "ፊ" },
      { english: "fa", amharic: "ፋ" },
      { english: "fie", amharic: "ፌ" },
      { english: "f", amharic: "ፍ" },
      { english: "fo", amharic: "ፎ" },
    ],
  },
  {
    consonant: "p",
    mappings: [
      { english: "pe", amharic: "ፐ" },
      { english: "pa", amharic: "ፓ" },
      { english: "pie", amharic: "ፔ" },
      { english: "pi", amharic: "ፒ" },
      { english: "pu", amharic: "ፑ" },
      { english: "p", amharic: "ፕ" },
      { english: "po", amharic: "ፖ" },
    ],
  },
];

const specialMappings = [
  { english: "lua", amharic: "ሏ" },
  { english: "Hua", amharic: "ሗ" },
  { english: "mua", amharic: "ሟ" },
  { english: "ssua", amharic: "ሧ" },
  { english: "rua", amharic: "ሯ" },
  { english: "sua", amharic: "ሷ" },
  { english: "xua", amharic: "ሿ" },
  { english: "que", amharic: "ቈ" },
  { english: "qui", amharic: "ቊ" },
  { english: "quu", amharic: "ቍ" },
  { english: "qua", amharic: "ቋ" },
  { english: "quie", amharic: "ቌ" },
  { english: "bua", amharic: "ቧ" },
  { english: "vua", amharic: "ቯ" },
  { english: "tua", amharic: "ቷ" },
  { english: "cua", amharic: "ቿ" },
  { english: "hue", amharic: "ኈ" },
  { english: "hui", amharic: "ኊ" },
  { english: "huu", amharic: "ኍ" },
  { english: "hua", amharic: "ኋ" },
  { english: "huie", amharic: "ኌ" },
  { english: "nua", amharic: "ኗ" },
  { english: "Nua", amharic: "ኟ" },
  { english: "kue", amharic: "ኰ" },
  { english: "kui", amharic: "ኲ" },
  { english: "kuu", amharic: "ኵ" },
  { english: "kua", amharic: "ኳ" },
  { english: "kuie", amharic: "ኴ" },
  { english: "zua", amharic: "ዟ" },
  { english: "Zua", amharic: "ዧ" },
  { english: "dua", amharic: "ዷ" },
  { english: "jua", amharic: "ጇ" },
  { english: "gue", amharic: "ጐ" },
  { english: "gui", amharic: "ጒ" },
  { english: "guu", amharic: "ጕ" },
  { english: "gua", amharic: "ጓ" },
  { english: "guie", amharic: "ጔ" },
  { english: "Tua", amharic: "ጧ" },
  { english: "Cua", amharic: "ጯ" },
  { english: "Pua", amharic: "ጷ" },
  { english: "Sua", amharic: "ጿ" },
  { english: "fua", amharic: "ፏ" },
  { english: "pua", amharic: "ፗ" },
  { english: "a", amharic: "አ" },
  { english: "e", amharic: "እ" },
  { english: "i", amharic: "ኢ" },
  { english: "o", amharic: "ኦ" },
  { english: "u", amharic: "ኡ" },
  { english: "ie", amharic: "ኤ" },
  { english: "ae", amharic: "ኧ" },
  { english: "aaa", amharic: "ዐ" },
  { english: "aa", amharic: "ዓ" },
  { english: "ee", amharic: "ዕ" },
  { english: "ii", amharic: "ዒ" },
  { english: "oo", amharic: "ዖ" },
  { english: "uu", amharic: "ዑ" },
  { english: "iie", amharic: "ዔ" },
];

interface KeyboardMapProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function KeyboardMap({ isOpen, onClose }: KeyboardMapProps) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        style={{
          maxHeight: "85vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">English to Amharic Keyboard Map</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors text-2xl leading-none"
            aria-label="Close keyboard map"
          >
            ×
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="overflow-y-auto flex-1 px-4 py-4">
          {/* Visual Keyboard UI */}
          <div className="mb-6">
            <KeyboardUI />
          </div>

          {/* Instructions */}
          <div className="mb-6 p-4 bg-gray-800 rounded-lg">
            <p className="text-sm text-gray-300 mb-2">
              <strong>How to use:</strong> Type English phonetic sounds to get
              Amharic characters.
            </p>
            <p className="text-sm text-gray-300">
              The pattern is: <strong>Consonant + Vowel</strong> (e, a, ie/i, u,
              or o). For example: &quot;he&quot; → ሀ, &quot;ha&quot; → ሃ,
              &quot;hie&quot; → ሄ
            </p>
          </div>

          {/* Special Vowels */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-300">
              Special Vowels & Characters
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {specialMappings.map((mapping) => (
                <div
                  key={mapping.english}
                  className="bg-gray-800 rounded-lg p-3 border border-gray-700 hover:border-gray-600 transition-colors"
                >
                  <div className="text-sm text-gray-400 mb-1">
                    {mapping.english}
                  </div>
                  <div
                    className="text-2xl font-bold"
                    style={{ fontFamily: "var(--font-amharic)" }}
                  >
                    {mapping.amharic}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Consonant Groups */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-300">
              Consonant Groups
            </h3>
            <div className="space-y-4">
              {keyboardMappings.map((group) => (
                <div
                  key={group.consonant}
                  className="bg-gray-800 rounded-lg p-4 border border-gray-700"
                >
                  <h4 className="text-md font-semibold mb-3 text-yellow-400">
                    {group.consonant} Group
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
                    {group.mappings.map((mapping) => (
                      <div
                        key={mapping.english}
                        className="bg-gray-900 rounded p-2 border border-gray-700 hover:border-yellow-500 transition-colors text-center"
                      >
                        <div className="text-xs text-gray-400 mb-1">
                          {mapping.english}
                        </div>
                        <div
                          className="text-xl font-bold"
                          style={{ fontFamily: "var(--font-amharic)" }}
                        >
                          {mapping.amharic}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
