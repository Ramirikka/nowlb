# NOWLB

React/Vite application for NOWLB.

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to the URL shown (usually `http://localhost:5173`)

## Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Deploy to Lovable

This project is configured for Lovable deployment. Simply connect your GitHub repository to Lovable and it will automatically:
- Install dependencies
- Build the project
- Deploy it live

## Project Structure

```
nowlb/
├── public/
│   └── images/          # All image assets
├── src/
│   ├── App.jsx          # Main React component
│   ├── main.jsx         # React entry point
│   └── styles.css       # All styles
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies
```

## Troubleshooting

If the website appears empty:
1. Make sure you're running `npm run dev` (not opening index.html directly)
2. Check the browser console for errors
3. Ensure all dependencies are installed: `npm install`
4. Clear cache and rebuild: `rm -rf node_modules/.vite dist && npm install`
