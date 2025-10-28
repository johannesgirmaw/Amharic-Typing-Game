# Amharic Typing Game - Implementation Plan

## Technology Stack

### Frontend

- **HTML5** - Structure
- **CSS3** - Styling, animations
- **JavaScript (Vanilla or Framework)**
  - Recommendation: **React** or **Vite + Vanilla JS** for faster development
  - Alternative: **Next.js** if considering future server-side features

### Assets

- **Amharic Fonts**: e.g., Abyssinica SIL, Noto Sans Ethiopic
- **Amharic Word List**: JSON file or text file

### Tools

- **Version Control**: Git
- **Package Manager**: npm or yarn
- **Build Tool**: Vite or Create React App (for React option)

## Development Phases

## Phase 1: Project Setup and Foundation (Days 1-2)

### Tasks

1. **Initialize Project**

   - Set up project structure
   - Initialize Git repository
   - Create package.json with dependencies
   - Set up build tools (Vite/Webpack)

2. **Basic HTML Structure**

   - Create index.html
   - Set up main layout containers:
     - Header (optional for MVP)
     - Test settings area (modes, durations)
     - Typing area
     - Results area
     - Footer (optional for MVP)

3. **Typography & Styling Foundation**

   - Import Amharic fonts
   - Set up CSS variables for themes (light/dark)
   - Create basic layout styles
   - Implement dark theme (like Monkeytype)

4. **Word List Preparation**
   - Collect/curate Amharic words
   - Create words.json or similar
   - Structure: array of word objects or simple string array

**Deliverable**: Working HTML/CSS layout with Amharic font rendering

---

## Phase 2: Core Typing Logic (Days 3-5)

### Tasks

1. **State Management**

   - Test state (idle, running, finished)
   - Current word index
   - Typed text
   - Timer state
   - Statistics (wpm, accuracy, raw)

2. **Word Display Logic**

   - Random word selection from word list
   - Word rendering in typing area
   - Character-level classes (correct, incorrect, current)

3. **Input Handling**

   - Keyboard event listeners
   - Character validation (current char vs typed char)
   - Update word display on each keystroke
   - Handle spacebar to move to next word
   - Handle backspace for corrections

4. **Test Flow Control**
   - Start test function
   - Stop test on completion/timeout
   - Reset/restart functionality

**Deliverable**: Functional typing mechanics with real-time feedback

---

## Phase 3: Test Modes & Timing (Days 6-7)

### Tasks

1. **Time Mode Implementation**

   - Timer logic (countdown or count-up)
   - Test termination on timeout
   - Display timer in UI

2. **Words Mode Implementation**

   - Word counter
   - Test termination on word count reached
   - Display progress

3. **Mode Switching UI**
   - Toggle between time and words mode
   - Duration/count selection buttons
   - Active state styling

**Deliverable**: Both time and words modes fully functional

---

## Phase 4: Statistics & Results (Days 8-9)

### Tasks

1. **WPM Calculation**

   - Formula: (total characters / 5) / (time in minutes)
   - Real-time WPM update during test
   - Calculate only for correctly typed words

2. **Accuracy Calculation**

   - Track correct vs incorrect characters
   - Formula: (correct chars / total chars) \* 100
   - Percentage display with 2 decimals

3. **Raw Statistics**

   - Total characters typed
   - Correct characters
   - Incorrect characters
   - Time taken
   - Words completed

4. **Results Screen**
   - Design results layout
   - Display all metrics
   - "Restart Test" button
   - Smooth transition from test to results

**Deliverable**: Accurate statistics and polished results display

---

## Phase 5: Polish & Testing (Days 10-11)

### Tasks

1. **Visual Polish**

   - Refine animations (typing, transitions)
   - Improve color scheme consistency
   - Add loading states
   - Responsive adjustments

2. **Error Handling**

   - Graceful handling of edge cases
   - Handle empty word lists
   - Handle rapid clicking on controls

3. **Testing**

   - Manual testing across browsers
   - Test all test modes
   - Verify Amharic rendering on different systems
   - Test keyboard shortcuts

4. **Performance Optimization**
   - Minimize re-renders
   - Optimize word list loading
   - Check for memory leaks
   - Bundle size optimization

**Deliverable**: Polished, bug-free MVP

---

## Phase 6: Documentation & Deployment (Day 12)

### Tasks

1. **Documentation**

   - README with setup instructions
   - Usage guide
   - Known issues (if any)

2. **Deployment Preparation**

   - Build production bundle
   - Test production build locally
   - Choose hosting platform (Vercel, Netlify, GitHub Pages)

3. **Deploy**
   - Configure hosting
   - Deploy application
   - Verify live deployment

**Deliverable**: Live, production-ready MVP

---

## Detailed Component Structure (React Example)

```
src/
├── components/
│   ├── TestSettings.jsx        # Mode and duration selectors
│   ├── TypingArea.jsx          # Main typing area with words
│   ├── WordDisplay.jsx         # Individual word rendering
│   ├── Character.jsx           # Individual character rendering
│   ├── Results.jsx             # Post-test results
│   └── Timer.jsx               # Timer display
├── hooks/
│   ├── useTypingTest.js        # Main test logic
│   ├── useTimer.js             # Timer logic
│   └── useStatistics.js        # Statistics calculation
├── utils/
│   ├── words.js                # Word list
│   ├── calculations.js         # WPM, accuracy formulas
│   └── constants.js            # Configuration constants
├── styles/
│   ├── main.css                # Global styles
│   ├── components.css          # Component-specific styles
│   └── theme.css               # Theme variables
├── App.jsx
└── main.jsx
```

---

## Key Algorithm: WPM Calculation

```javascript
function calculateWPM(typedChars, timeInSeconds) {
  const words = typedChars / 5; // Standard: 5 chars = 1 word
  const minutes = timeInSeconds / 60;
  return Math.round(words / minutes);
}
```

---

## Key Algorithm: Character Validation

```javascript
function validateCharacter(expected, typed) {
  // Handle Amharic character comparison
  // Consider unicode normalization if needed
  return expected === typed;
}
```

---

## Potential Challenges & Solutions

### Challenge 1: Amharic Font Rendering

**Problem**: Amharic characters may not render properly on all systems.

**Solution**:

- Use web fonts (Google Fonts: Noto Sans Ethiopic)
- Include fallback fonts
- Test on multiple browsers/OS

### Challenge 2: Keyboard Input Handling

**Problem**: Different Amharic keyboard layouts may cause input issues.

**Solution**:

- Support both Amharic and phonetic input methods
- Test with common keyboard layouts
- Handle both keyboard events

### Challenge 3: Word Selection

**Problem**: Need large, diverse word list that's actually used in Amharic.

**Solution**:

- Curate from common Amharic texts
- Use frequency lists if available
- Start with 500-1000 words, expand later

### Challenge 4: Typing Test State Complexity

**Problem**: Multiple states (idle, running, finished) can cause bugs.

**Solution**:

- Use state machine pattern
- Clear state transitions
- Comprehensive testing of state changes

---

## Timeline Summary

| Phase               | Duration     | Key Deliverables                  |
| ------------------- | ------------ | --------------------------------- |
| Phase 1: Setup      | 2 days       | Project structure, fonts, styling |
| Phase 2: Core Logic | 3 days       | Typing mechanics                  |
| Phase 3: Modes      | 2 days       | Time & words modes                |
| Phase 4: Stats      | 2 days       | Statistics & results              |
| Phase 5: Polish     | 2 days       | Testing, optimization             |
| Phase 6: Deploy     | 1 day        | Live deployment                   |
| **Total**           | **~12 days** | **Production MVP**                |

---

## Post-MVP Enhancements

1. **Week 2-3**: Add punctuation, numbers, quote modes
2. **Week 4**: Implement user accounts and local storage
3. **Month 2**: Add statistics/history tracking
4. **Month 3**: Implement leaderboards, themes, mobile responsiveness

---

## Resources Needed

1. **Amharic Word Lists**

   - Research sources for common Amharic words
   - Consider frequency-based word lists

2. **Amharic Fonts**

   - Abyssinica SIL (legacy)
   - Noto Sans Ethiopic (modern, good support)
   - Search Google Fonts for alternatives

3. **Testing**

   - Test on Windows, macOS, Linux
   - Test various Amharic keyboard layouts
   - Get feedback from native Amharic speakers

4. **Domain/Hosting** (optional for MVP)
   - Can start with free GitHub Pages or Vercel
   - Custom domain can be added later
