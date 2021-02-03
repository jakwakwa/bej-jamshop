## About

A project/solution for Bejamas as part of a technical assessment

## Quick Setup

#### _Using the Gatsby CLI_

In your terminal, navigate to where you would like this blog to live, then run

```bash
gatsby new [SITE_DIRECTORY_NAME] git@github.com:jakwakwa/bej-jamshop.git
cd [SITE_DIRECTORY_NAME]
yarn dev
```

#### _Set-up Locally_

In your terminal, navigate to where you would like this blog to live, then run

```bash
#clone the repo
git clone git@github.com:jakwakwa/bej-jamshop.git

#navigate to the directory
cd bej-jamshop

#install dependencies & run dev server with yarn
yarn install
yarn dev

#or with npm
npm install
npm run dev
```

A new browser window should open with the dev server running or you can navigate to localhost:8000

### Plugins

With Gatsby offering a plugin-rich ecosystem, there are a few key plugins that make this project possible.

- [Gatsby-image](https://using-gatsby-image.gatsbyjs.org/) optimizes image loading and provides the correct file paths for output.
- [Gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/?=gatsby-tranf) gives us access to and transforms the markdown files, using also [gatsby-remark-images](https://www.gatsbyjs.org/packages/gatsby-remark-images/?=gatsby-remark), [gatsby-remark-normalize-paths](https://www.gatsbyjs.org/packages/gatsby-remark-normalize-paths/?=gatsby-remark-no), & [gatsby-remark-relative-images](https://www.gatsbyjs.org/packages/gatsby-remark-relative-images/?=gatsby-remark-re) to make sure the content in the markdown works properly.
- [Gatsby-transformer-yaml allows](https://www.gatsbyjs.org/packages/gatsby-transformer-yaml/?=gatsby-tranfor) us to use the data in .yaml files, feel free to add [gatsby-transformer-json](https://www.gatsbyjs.org/packages/gatsby-transformer-json/?=gatsby-tranfor) if you prefer that format for data files.
- [Gatsby-plugin-sass](https://www.gatsbyjs.org/packages/gatsby-plugin-sass/?=gatsby-plugin-sass) lets us write styles using scss or sass.
- [Gatsby-plugin-react-helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/?=gatsby-plugin-react) extends the well-known react-helmet, allowing you to adjust content in the ‘head’ of your components.
- [gatsby-plugin-theme-ui](https://www.gatsbyjs.com/plugins/gatsby-plugin-theme-ui/) Gatsby plugin for adding Theme UI context
- [gatsby-plugin-emotion](https://www.gatsbyjs.com/plugins/gatsby-plugin-emotion/) Provide support for using the css-in-js library Emotion including server side rendering.
- [gatsby-plugin-sass](https://www.gatsbyjs.com/plugins/gatsby-plugin-sass/) Provides drop-in support for Sass/SCSS stylesheets

## Project Structure

- Site-level configuration is stored in `config.json` so it can be exposed to Forestry. This file is loaded in the `gatsby-config.js` to configure Gatsby and all it to be accessible via siteMetaData in your graphql queries.
- Access any of Gatsby's [browser api's](https://www.gatsbyjs.org/docs/browser-apis/) via the `gatsby-browser.js`, or load global styles etc.
- Add and access plugin options or siteMetaData via `gatsby-config.js`
- Access Gatsby's [node api's](https://www.gatsbyjs.org/docs/node-apis/) via `gatsby-node.js`. This is where the creation of new blog pages or nodes is handled.
- Edit styles via `src/styles/...`
- `content/`contains all your markdown blog posts, images & data files (e.g. authors list, info page data).
- `src/pages` is a very important and required directory for Gatsby. This is where all your pages for the site live.
- Blog posts are built from a template that can be accessed at `src/templates`.
- The pages & template are comprised of components from `src/components`.

## Using Forestry as your CMS

The `.forestry` directory contains all the settings information and frontmatter configuration to allow Forestry to setup the sidebar structure and editing capacity for this blog. After importing this blog into forestry, you can [access and edit](https://forestry.io/docs/editing/) all of the content via the sidebar.

You can add new blog posts, [data files](https://forestry.io/docs/editing/data-files/), or entire pages and sections to fit your needs. You can also [customize how media](https://forestry.io/docs/media/) is handled, by configurating gitLFS, Cloudinary, S3, or Netlify Large Media.

You can set up a [remote admin](https://forestry.io/docs/editing/remote-admin/) for content editors to log in directly to yoururl.com/admin to make content updates.

### Instant Previews

The [instant preview](https://forestry.io/docs/previews/instant-previews/) method spins up the Gatsby development server for a long-lived preview that can quickly respond to content updates. When using instant previews, your preview command should be the develop command. The development server spawned by this command should be available over port 8080, and bind to 0.0.0.0. The forestry:preview command in this project's package.json will spin up a Gatsby dev server compatible with Forestry's instant previews.

## Brief

A project/solution for Bejamas as part of a technical assessment

You were added to an ongoing project. One of our clients needs a proof-of-concept website build on gatsby, he requires a basic e-shop functionality.

### New functionalities

- as a user I want to be able to see list of popular products on the homepage;
- as a user I want to be able to add a product to the cart;
- as a user I want to be redirected to a product details page after clicking on a product card;

### Tickets

- add product list section to homepage
- create page for each product (dynamically from - products inside headless CMS)
  - content for each product page should be queried from .md file / headless CMS
- cart component
- add add product to cart functionality

### Detailed requirements

#### Designs & visuals

- All elements should match designs pixel-perfect
- Sections should be adjusted to mobiles, as it's a proof-of-concept, we were given only desktop version, hence no strict rules about mobile views, except needs to look good and be usable
- Please add some sort of transitions, hover effects to elements

#### Product list section

- as it's a proof-of-concept, please render all products from src/data/products/
- button should add product to cart
- clicking on a card (except + button) should redirect user to product page
- there should be visible max 4 cards on screen, arrows should move cards by one

#### Product card:

- After adding a product to a card, number in badge (cart icon on top nav) should match number of products in card
- user should be able to open product card only if there is at least 1 product added
- if product card is open, user should be able to hide it clicking on every other place on screen

#### Codebase:

- Get familiar with project setup, codestyle
- Adjust your code to current project config (propper formatting, eslint rules)
- Keep git history clean

### Assets

- [Design File](https://www.figma.com/file/pbpZgKb1KmVvG8gT3ILQ0A?node-id=10%3A2)

- [Codebase (repository)](https://drive.google.com/file/d/1aFQ_OIYPcVTnD4MvOZq1-mphSMTVvzhw/view)
