# Simple Webpage with Dropdown Menu

This project is a simple webpage that features a landing page with a dropdown menu populated from a list of names stored in a CSV file.

## Project Structure

```
simple-webpage
├── data
│   └── names.csv        # Contains a list of names for the dropdown menu
├── src
│   ├── index.html       # Main HTML document for the landing page
│   ├── style.css        # Styles for the webpage
│   └── script.js        # JavaScript code to populate the dropdown menu
└── README.md            # Documentation for the project
```

## Getting Started

To set up this project locally, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd simple-webpage
   ```

2. **Open the `index.html` file**:
   You can open the `src/index.html` file in your web browser to view the landing page.

3. **Modify the names**:
   To change the names in the dropdown menu, edit the `data/names.csv` file. Each name should be on a new line.

## Usage

- The dropdown menu will automatically populate with names from the `data/names.csv` file when the webpage is loaded.
- You can select a name from the dropdown to see it displayed on the page.

## License

This project is licensed under the MIT License.