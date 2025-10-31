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
    consonant: "H",
    mappings: [
      { english: "he", amharic: "ሀ" },
      { english: "ha", amharic: "ሃ" },
      { english: "hie", amharic: "ሄ" },
      { english: "hi", amharic: "ሂ" },
      { english: "hu", amharic: "ሁ" },
      { english: "h", amharic: "ህ" },
      { english: "ho", amharic: "ሆ" },
    ],
  },
  {
    consonant: "L",
    mappings: [
      { english: "le", amharic: "ለ" },
      { english: "la", amharic: "ላ" },
      { english: "lie", amharic: "ሌ" },
      { english: "li", amharic: "ሊ" },
      { english: "lu", amharic: "ሉ" },
      { english: "l", amharic: "ል" },
      { english: "lo", amharic: "ሎ" },
    ],
  },
  {
    consonant: "M",
    mappings: [
      { english: "me", amharic: "መ" },
      { english: "ma", amharic: "ማ" },
      { english: "mie", amharic: "ሜ" },
      { english: "mi", amharic: "ሚ" },
      { english: "mu", amharic: "ሙ" },
      { english: "m", amharic: "ም" },
      { english: "mo", amharic: "ሞ" },
    ],
  },
  {
    consonant: "S",
    mappings: [
      { english: "se", amharic: "ሰ" },
      { english: "sa", amharic: "ሳ" },
      { english: "sie", amharic: "ሴ" },
      { english: "si", amharic: "ሲ" },
      { english: "su", amharic: "ሱ" },
      { english: "s", amharic: "ስ" },
      { english: "so", amharic: "ሶ" },
    ],
  },
  {
    consonant: "R",
    mappings: [
      { english: "re", amharic: "ረ" },
      { english: "ra", amharic: "ራ" },
      { english: "rie", amharic: "ሬ" },
      { english: "ri", amharic: "ሪ" },
      { english: "ru", amharic: "ሩ" },
      { english: "r", amharic: "ር" },
      { english: "ro", amharic: "ሮ" },
    ],
  },
  {
    consonant: "SH",
    mappings: [
      { english: "she", amharic: "ሸ" },
      { english: "sha", amharic: "ሻ" },
      { english: "shie", amharic: "ሼ" },
      { english: "shi", amharic: "ሺ" },
      { english: "shu", amharic: "ሹ" },
      { english: "sh", amharic: "ሽ" },
      { english: "sho", amharic: "ሾ" },
    ],
  },
  {
    consonant: "Q",
    mappings: [
      { english: "qe", amharic: "ቀ" },
      { english: "qa", amharic: "ቃ" },
      { english: "qie", amharic: "ቄ" },
      { english: "qi", amharic: "ቂ" },
      { english: "qu", amharic: "ቁ" },
      { english: "q", amharic: "ቅ" },
      { english: "qo", amharic: "ቆ" },
    ],
  },
  {
    consonant: "B",
    mappings: [
      { english: "be", amharic: "በ" },
      { english: "ba", amharic: "ባ" },
      { english: "bie", amharic: "ቤ" },
      { english: "bi", amharic: "ቢ" },
      { english: "bu", amharic: "ቡ" },
      { english: "b", amharic: "ብ" },
      { english: "bo", amharic: "ቦ" },
    ],
  },
  {
    consonant: "V",
    mappings: [
      { english: "ve", amharic: "ቨ" },
      { english: "va", amharic: "ቫ" },
      { english: "vie", amharic: "ቬ" },
      { english: "vi", amharic: "ቪ" },
      { english: "vu", amharic: "ቩ" },
      { english: "v", amharic: "ቭ" },
      { english: "vo", amharic: "ቮ" },
    ],
  },
  {
    consonant: "T",
    mappings: [
      { english: "te", amharic: "ተ" },
      { english: "ta", amharic: "ታ" },
      { english: "tie", amharic: "ቴ" },
      { english: "ti", amharic: "ቲ" },
      { english: "tu", amharic: "ቱ" },
      { english: "t", amharic: "ት" },
      { english: "to", amharic: "ቶ" },
    ],
  },
  {
    consonant: "CH",
    mappings: [
      { english: "che", amharic: "ቸ" },
      { english: "cha", amharic: "ቻ" },
      { english: "chie", amharic: "ቼ" },
      { english: "chi", amharic: "ቺ" },
      { english: "chu", amharic: "ቹ" },
      { english: "ch", amharic: "ች" },
      { english: "cho", amharic: "ቾ" },
    ],
  },
  {
    consonant: "N",
    mappings: [
      { english: "ne", amharic: "ነ" },
      { english: "na", amharic: "ና" },
      { english: "nie", amharic: "ኔ" },
      { english: "ni", amharic: "ኒ" },
      { english: "nu", amharic: "ኑ" },
      { english: "n", amharic: "ን" },
      { english: "no", amharic: "ኖ" },
    ],
  },
  {
    consonant: "K",
    mappings: [
      { english: "ke", amharic: "ከ" },
      { english: "ka", amharic: "ካ" },
      { english: "kie", amharic: "ኬ" },
      { english: "ki", amharic: "ኪ" },
      { english: "ku", amharic: "ኩ" },
      { english: "k", amharic: "ክ" },
      { english: "ko", amharic: "ኮ" },
    ],
  },
  {
    consonant: "W",
    mappings: [
      { english: "we", amharic: "ወ" },
      { english: "wa", amharic: "ዋ" },
      { english: "wie", amharic: "ዌ" },
      { english: "wi", amharic: "ዊ" },
      { english: "wu", amharic: "ዉ" },
      { english: "w", amharic: "ወ" },
      { english: "wo", amharic: "ዎ" },
    ],
  },
  {
    consonant: "Z",
    mappings: [
      { english: "ze", amharic: "ዘ" },
      { english: "za", amharic: "ዛ" },
      { english: "zie", amharic: "ዜ" },
      { english: "zi", amharic: "ዢ" },
      { english: "zu", amharic: "ዙ" },
      { english: "z", amharic: "ዝ" },
      { english: "zo", amharic: "ዞ" },
    ],
  },
  {
    consonant: "Y",
    mappings: [
      { english: "ye", amharic: "የ" },
      { english: "ya", amharic: "ያ" },
      { english: "yie", amharic: "ዬ" },
      { english: "yi", amharic: "ዪ" },
      { english: "yu", amharic: "ዩ" },
      { english: "y", amharic: "ይ" },
      { english: "yo", amharic: "ዮ" },
    ],
  },
  {
    consonant: "D",
    mappings: [
      { english: "de", amharic: "ደ" },
      { english: "da", amharic: "ዳ" },
      { english: "die", amharic: "ዴ" },
      { english: "di", amharic: "ዲ" },
      { english: "du", amharic: "ዱ" },
      { english: "d", amharic: "ድ" },
      { english: "do", amharic: "ዶ" },
    ],
  },
  {
    consonant: "G",
    mappings: [
      { english: "ge", amharic: "ገ" },
      { english: "ga", amharic: "ጋ" },
      { english: "gie", amharic: "ጌ" },
      { english: "gi", amharic: "ጊ" },
      { english: "gu", amharic: "ጉ" },
      { english: "g", amharic: "ግ" },
      { english: "go", amharic: "ጎ" },
    ],
  },
  {
    consonant: "TH",
    mappings: [
      { english: "the", amharic: "ጠ" },
      { english: "tha", amharic: "ጣ" },
      { english: "thie", amharic: "ጤ" },
      { english: "thi", amharic: "ጢ" },
      { english: "thu", amharic: "ጡ" },
      { english: "th", amharic: "ጥ" },
      { english: "tho", amharic: "ጦ" },
    ],
  },
  {
    consonant: "CHH",
    mappings: [
      { english: "chhe", amharic: "ጨ" },
      { english: "chha", amharic: "ጫ" },
      { english: "chhie", amharic: "ጬ" },
      { english: "chhi", amharic: "ጪ" },
      { english: "chhu", amharic: "ጩ" },
      { english: "chh", amharic: "ጭ" },
      { english: "chho", amharic: "ጮ" },
    ],
  },
  {
    consonant: "PH",
    mappings: [
      { english: "phe", amharic: "ጰ" },
      { english: "pha", amharic: "ጳ" },
      { english: "phie", amharic: "ጴ" },
      { english: "phi", amharic: "ጲ" },
      { english: "phu", amharic: "ጱ" },
      { english: "ph", amharic: "ጵ" },
      { english: "pho", amharic: "ጶ" },
    ],
  },
  {
    consonant: "TS",
    mappings: [
      { english: "tse", amharic: "ጸ" },
      { english: "tsa", amharic: "ጻ" },
      { english: "tsie", amharic: "ጼ" },
      { english: "tsi", amharic: "ጺ" },
      { english: "tsu", amharic: "ጹ" },
      { english: "ts", amharic: "ጽ" },
      { english: "tso", amharic: "ጾ" },
    ],
  },
  {
    consonant: "F",
    mappings: [
      { english: "fe", amharic: "ፈ" },
      { english: "fa", amharic: "ፋ" },
      { english: "fie", amharic: "ፌ" },
      { english: "fi", amharic: "ፊ" },
      { english: "fu", amharic: "ፉ" },
      { english: "f", amharic: "ፍ" },
      { english: "fo", amharic: "ፎ" },
    ],
  },
  {
    consonant: "P",
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
  {
    consonant: "X",
    mappings: [
      { english: "xe", amharic: "ኸ" },
      { english: "xa", amharic: "ኻ" },
      { english: "xie", amharic: "ኼ" },
      { english: "xi", amharic: "ኺ" },
      { english: "xu", amharic: "ኹ" },
      { english: "x", amharic: "ኽ" },
      { english: "xo", amharic: "ኾ" },
    ],
  },
];

const specialMappings = [
  { english: "a", amharic: "አ" },
  { english: "e", amharic: "እ" },
  { english: "i", amharic: "ኢ" },
  { english: "o", amharic: "ኦ" },
  { english: "u", amharic: "ኡ" },
  { english: "aa", amharic: "ዋ" },
  { english: "ee", amharic: "ኤ" },
  { english: "ii", amharic: "ኢ" },
  { english: "oo", amharic: "ኦ" },
  { english: "uu", amharic: "ኡ" },
  { english: "c", amharic: "ች" },
  { english: "ss", amharic: "ሽ" },
  { english: "dd", amharic: "ጀ" },
  { english: "zz", amharic: "ዥ" },
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
