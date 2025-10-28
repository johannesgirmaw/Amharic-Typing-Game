# Amharic Typing Test

A minimal viable product (MVP) for an Amharic typing test game inspired by Monkeytype. Practice and test your Amharic typing speed and accuracy.

## Features

- **Time Mode**: Test your typing for 15, 30, 60, or 120 seconds
- **Words Mode**: Type 10, 25, 50, or 100 words
- **Real-time Feedback**: See correct (green) and incorrect (red) words as you type
- **Statistics**: Get WPM (Words Per Minute), accuracy, and other metrics after each test
- **Amharic Support**: Uses Noto Sans Ethiopic font for proper Amharic character rendering
- **Dark Theme**: Clean, minimal interface similar to Monkeytype

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

### Starting a Test

1. Select a test mode (time or words)
2. Choose a duration (for time mode) or word count (for words mode)
3. Click "Start Test"
4. Start typing the Amharic words displayed on screen
5. Press spacebar to move to the next word

### Keyboard Shortcuts

- `Tab` + `Enter`: Reset the current test
- `Esc`: Reset to idle state

### Viewing Results

After completing a test, you'll see:

- **WPM**: Words per minute
- **Accuracy**: Percentage of correctly typed characters
- **Characters**: Breakdown of correct vs incorrect characters
- **Time**: Time elapsed
- **Words**: Number of words completed

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with Amharic font setup
│   ├── page.tsx            # Main typing test page
│   └── globals.css         # Global styles and theme
├── components/
│   ├── TestSettings.tsx    # Test mode and duration/word count selector
│   ├── TypingArea.tsx      # Main typing area displaying words
│   ├── WordDisplay.tsx     # Individual word display component
│   └── Results.tsx         # Post-test results display
├── data/
│   └── words.ts            # Amharic word list
├── types/
│   └── index.ts            # TypeScript type definitions
├── utils/
│   └── calculations.ts     # WPM and accuracy calculations
└── package.json
```

## Technologies Used

- **Next.js 16**: React framework with App Router
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **Noto Sans Ethiopic**: Amharic font from Google Fonts

## Future Enhancements

Planned features (not in MVP):

- Punctuation mode
- Numbers mode
- Quote mode
- Zen mode
- Custom text input
- User accounts and statistics tracking
- Leaderboards
- Multiple themes
- Mobile responsiveness

## Contributing

This is an MVP implementation. Contributions are welcome!

## License

MIT
