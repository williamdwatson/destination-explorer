# Destination explorer

This tool is for showing a list of posssible destinations and then potential itineraries in those places.

## Development
* This uses React/TypeScript
* All destination information is loaded from `destinations.ts`
* Used libraries include:
  * [Vite](https://vite.dev/)
  * [PrimeReact](https://primereact.org/)
  * [vite-singlefile-plugin](https://npmjs.com/package/vite-plugin-singlefile)
* Example images are from [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page)
* Example country icons are from [simplemaps](https://simplemaps.com/)
* To run in development mode:
  1. Ensure [Node.js](https://nodejs.org/en) is installed (ideally with some kind of version manager)
  2. Run `npm install`
  3. Run `npm run dev` for hot-reload experience

## Building
* This app bundles into a single HTML file, so resources (such as images) need to be externally hosted
* Run `npm run build` to create the build (as "dist/index.html")