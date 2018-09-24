I can't seem to get `HMR` to work with `createGlobalStyle` from `styled-components@4.0.0-beta.8`

To test:

  * Clone this repo
  * Run `yarn` and `yarn start` - Webpack will open a browser tab
  * Try changing one some styles in one of the files in `~/src/components`
  * The styles from `createGlobalStyles` are now gone
  * If you modify the `<GlobalStyle />` component, it will be re-applied
