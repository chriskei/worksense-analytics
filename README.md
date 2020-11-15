# Worksense

### Table of contents

- [Developers](#devs)
- [How to clone this project](#clone)
- [How to deploy this project](#deploy)
- [Third parties](#third)
- [Environment variables](#env)
- [Config files](#config)

## <a name="devs"></a> Developers

- Megan Lau - Project Lead - <lau.me@northeastern.edu>
- Maggie Navracruz - Developer - <navracruz.m@northeastern.edu>
- Megan Chong - Developer - <chong.m@northeastern.edu>
- Chris Kei - Developer - <kei.c@northeastern.edu>

## <a name="clone"></a> How to clone and run this project

1. Go the the directory you want a copy of this repo in and run `git clone https://github.com/Scout-NU/worksense-site.git`
2. Navigate into the "worksense-site" folder and run `npm i` to install the correct versions of any dependencies being used
3. Run `npm run dev` to start the development environment
4. Visit <http://localhost:8000/> to view the site

## <a name="deploy"></a> How to deploy this project

1. Go to <https://app.netlify.com/sites/worksense/deploys>
2. Click on the "Trigger deploy" button on the right side of the screen and then click "Deploy site"
3. While your site is being built (around 30 seconds), if any errors come up in the logs, address those and restart this process
4. If your build is successful, at the end of the logs you will see "Site is live ✨" and have the ability to press the "Preview" button to view the site

Note: Netlify will automatically deploy to production the master branch on Github. If you want to see how a small change will look on the live site, you can make a pull request on Github and Netlify will automatically deploy to development a viewable site that you can find at <https://app.netlify.com/sites/worksense/deploys>.

## <a name="third"></a> Third parties

### Contentful

<a href="https://www.contentful.com/">Contentful</a> is a content management system that allows you to control all content from a single hub. We use Contentful to store all of the images and text copy used on the site. By using a specific content model for each page, we can create and modify content easily and use GraphQL queries to pull the data into the codebase cleanly. Note that the site will not run if any of your GraphQL queries fail.

### Gatsby

<a href="https://www.gatsbyjs.com/">Gatsby</a> is a React-based open source framework for creating websites and apps. We use Gatsby to pre-load resources which makes the site load faster and perform better. On the development side, Gatsby also provides access to a GraphQL schema at <http://localhost:8000/__graphql> which is very useful when integrating data in Contentful with the site.

### Netlify

<a href="https://www.netlify.com/">Netlify</a> is a continuous integration and continuous deployment platform that allows you to run web projects at global scale without servers, devops, or costly infrastructure. We use Netlify to host the Worksense website and manage form submissions.

## <a name="env"></a> Environment variables

In order for your development environment to integrate with Contentful properly, you're going to need to enter two environment variables into two files in your local copy of this repo. Do _not_ commit these to the shared Github repo.

1. Navigate to the main page of your website on Contentful
2. At the top of the page, click on "Settings" and then click on "API keys"
3. Click on the API key named "Worksense Website"
4. Copy the "Space ID" and the "Content Delivery API - access token"
5. Copy the `.env.example` file and make two new files, one named `.env.development` and one named `.env.production`
6. In both of these new files, paste the copied "Space ID" into the single quotation marks that come after `CONTENTFUL_SPACE_ID=`
7. In both of these new files, paste the copied "Content Delivery API - access token" into the single quotation marks that come after `CONTENTFUL_ACCESS_TOKEN=`

If you decide to generate a new Contentful API key, you will have to redo the above with the new environment variables in your local copy of this repo. Additionally, you will have to change the environment variables used on Netlify to ensure that the deployed versions of your site have access to the data stored in Contentful.

1. Navigate to the main page of your website on Netlify
2. At the top of the screen, click on "Site settings"
3. On the left side of your screen, click on "Build & deploy"
4. Scroll down to the "Environment" section and click on "Edit variables"
5. Paste the environment variables in their appropriate value fields

## <a name="config"></a> Config files

- `.babelrc`, `.eslintrc.js`, `.npmrc`, `.nvmrc`, and `.prettierrc` - define the functionality of extensions and development tools
- `.gitignore` - contains the files that you don't want in the Github repo
- `gatsby-config.js`, `gatsby-node.js`, and `static.json` - handle the Gatsby setup, such as site metadata and file caching
- `package.json` - contains all of the dependencies that the site uses and scripts you can use to run common terminal development commands

Note: In general, you don't need to touch these unless you want to change your development process.
