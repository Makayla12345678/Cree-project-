# Swampy Cree Dictionary Website Plan

## Overview
A simple, clean website to display 20 Swampy Cree words and 10 Constellations. The data will be stored in a JSON file for easy editing, and the site will be built using standard HTML, CSS, and JavaScript.

## File Structure
- `index.html`: The main page structure.
- `style.css`: Styling rules (White background, Blue accents).
- `script.js`: Logic to load data from `data.json` and display it.
- `data.json`: The database containing the words and constellations.
- `images/`: Directory for storing image files.

## Data Schema (`data.json`)
```json
{
  "words": [
    {
      "cree": "String",
      "english": "String",
      "definition": "String",
      "image": "path/to/image.jpg"
    }
    // ... 20 entries
  ],
  "constellations": [
    {
      "creeName": "String",
      "englishName": "String",
      "description": "String",
      "image": "path/to/image.jpg"
    }
    // ... 10 entries
  ]
}
```

## Design
- **Colors:** White background (`#ffffff`), Blue accents (e.g., `#007bff` for headers/buttons, light blue `#e6f2ff` for card backgrounds).
- **Layout:**
    - Header: Title "Swampy Cree Dictionary & Constellations"
    - Section 1: "Dictionary" (Grid of cards for words)
    - Section 2: "Constellations" (Grid of cards for constellations)
    - Footer: Simple copyright/credits.

## Functionality
1.  `script.js` fetches `data.json`.
2.  Parses the JSON data.
3.  Generates HTML for each word and constellation.
4.  Injects the HTML into the `index.html` containers.
