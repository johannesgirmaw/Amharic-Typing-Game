# Amharic Typing Game - MVP Requirements

## Project Overview

A minimal viable product (MVP) for an Amharic typing test game inspired by Monkeytype, allowing users to practice and test their Amharic typing speed and accuracy.

## Core MVP Features

### 1. Typing Test Interface

**Priority: Critical (P0)**

- **Word Display Area**

  - Display Amharic words one line at a time
  - Current word highlighted
  - Words typed correctly (green)
  - Words typed incorrectly (red)
  - Next word to type preview

- **Input Handling**
  - Real-time character input detection
  - Amharic keyboard input support (both Amharic and phonetic input)
  - Character-by-character validation
  - Space bar to move to next word

### 2. Test Modes

**Priority: Critical (P0)**

- **Time Mode**

  - 15, 30, 60, 120 seconds options
  - Countdown timer
  - Test stops when time expires

- **Words Mode**
  - 10, 25, 50, 100 words options
  - Test completes when word count is reached

### 3. Performance Metrics

**Priority: Critical (P0)**

- **WPM (Words Per Minute)**

  - Real-time calculation
  - Final score display

- **Accuracy**

  - Character accuracy percentage
  - Final accuracy score

- **Raw Statistics**
  - Total characters typed
  - Characters correct vs incorrect

### 4. Results Display

**Priority: High (P1)**

- Post-test results screen
- Display:
  - WPM (Words Per Minute)
  - Accuracy percentage
  - Raw statistics
  - Time taken / Words completed
- Restart button

### 5. Word List

**Priority: Critical (P0)**

- Curated list of common Amharic words
- Minimum 500+ words
- Words organized by difficulty (for future use)
- No offensive or inappropriate content

### 6. Basic Controls

**Priority: High (P1)**

- Restart test (Tab + Enter or dedicated button)
- Esc to close/reset
- Basic keyboard navigation

## Non-MVP Features (Future Scope)

- Punctuation mode
- Numbers mode
- Quote mode
- Zen mode
- Custom text input
- User accounts
- Leaderboards
- Statistics/history tracking
- Theme customization
- Language switching (other languages besides Amharic)
- Command line interface
- Advanced analytics
- Share results
- Mobile responsiveness (for MVP, focus on desktop)

## Technical Constraints for MVP

- Desktop-first design (minimum 1024x768 resolution)
- Modern browsers (Chrome, Firefox, Safari, Edge - latest 2 versions)
- No backend required
- All data stored client-side only
- Amharic font support required
- Keyboard input handling for Amharic characters

## User Stories

1. **As a user**, I want to select a time duration and start a typing test, so I can practice my Amharic typing speed.

2. **As a user**, I want to see which words I typed correctly and incorrectly in real-time, so I can improve my accuracy.

3. **As a user**, I want to see my WPM and accuracy after completing a test, so I can track my progress.

4. **As a user**, I want to quickly restart a test without refreshing the page, so I can practice efficiently.

5. **As a user**, I want the interface to clearly indicate the current word to type, so I can focus on what to type next.

## Success Metrics

- Users can complete a full typing test without bugs
- Amharic characters render correctly
- Accurate WPM calculation
- Real-time typing feedback works reliably
- Test completion rate > 95%

## Out of Scope for MVP

- User authentication
- Data persistence across sessions
- Multiplayer or competitive features
- Complex animations
- Mobile app version
- Offline support considerations
- Accessibility features beyond basic keyboard navigation
- Internationalization of UI (UI can be in English while typing is in Amharic)
