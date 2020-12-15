# Worksense

### Table of contents

- [How to clone this project](#clone)
- [Environment variables](#env)
- [Contentful](#contentful)
- [Gatsby](#gatsby)
- [Netlify](#netlify)
    - [How to manage Netlify environment variables](#netlifyenv)
    - [How to deploy this project](#deploy)
- [Config files](#config)
- [Outstanding issues](#issues)
- [Scout Developers](#devs)

## <a name="clone"></a> How to clone and run this project

1. Go the the directory you want a copy of this repo in and run `git clone https://github.com/Scout-NU/worksense-site.git`
2. Navigate into the "worksense-site" folder
3. Set up your [environment variables](#env)
4. Run `npm i` to install the correct versions of any dependencies being used
5. Run `npm run dev` to start the development environment
6. Visit <http://localhost:8000/> to view your site

## <a name="env"></a> Environment variables

In order for your development environment to integrate with Contentful properly, you're going to need to enter two environment variables into two files in your local copy of this repo. Do _not_ commit these to the shared Github repo.

1. Navigate to the main page of your website on Contentful
2. At the top of the page, click on "Settings" and then click on "API keys"
3. Click on the API key named "Worksense Website"
4. Copy the "Space ID" and the "Content Delivery API - access token"
5. Copy the `.env.example` file and make two new files, one named `.env.development` and one named `.env.production`
6. In both of these new files, paste the copied "Space ID" into the single quotation marks that come after `CONTENTFUL_SPACE_ID=`
7. In both of these new files, paste the copied "Content Delivery API - access token" into the single quotation marks that come after `CONTENTFUL_ACCESS_TOKEN=`

## <a name="contentful"></a> Contentful

<a href="https://www.contentful.com/">Contentful</a> is a content management system that allows you to control all content from a single hub. We use Contentful to store all of the images and text copy used on the site through content models and content. In an object-oriented design sense, content models can be compared to classes while content can be compared to objects. For example, one of our content models is "Our Products Page" which has fields for all of the data that should be on the products page such as the header text and the walkthrough video. Meanwhile, in the "Content" section, you can find "One analytics software that can do it all" which is our single object of the "Our Products Page" class. This content represents the single products page we have and holds the actual values for the fields defined in the content model.

Three important pieces of information regarding Contentful:

1. In order to have a development environment that integrates with the data in Contentful and allow any of your deploys on Netlify to access data in Contentful, you will have to manage Contentful API keys in both your [codebase](#env) and in [Netlify's settings](#netlifyenv).
2. You can easily change any content model or content in Contentful by simply clicking on it, making any changes you want, and then pressing the green "Publish Changes" button on the right side. To see these changes on your development environment, you will have to re-run `npm run dev`. To see these changes on your deployed site, you will need to manually [trigger a Netlify deploy](#deploy).
3. The current content model structure may seem messy. However, we have experimented in the past with using simpler, more abstracted content models like a very basic "Header Text" content model and found that those were extremely hard to work with given the array indexing and seemingly random scrambling of content positions that we had to deal with. That being said, feel free to do your own experimentation, and don't forget to use the [Gatsby GraphQL schema](#gatsby) to make your life easier.

## <a name="gatsby"></a> Gatsby

<a href="https://www.gatsbyjs.com/">Gatsby</a> is a React-based open source framework for creating websites and apps. We use Gatsby to pre-load resources which makes the site load faster and perform better. On the development side, whenever you run `npm run dev`, Gatsby provides access to a GraphQL schema at <http://localhost:8000/__graphql> which is very useful when integrating data in Contentful with the site and ensuring your GraphQL queries are valid.

Here is an example of how to get the GraphQL query that will give you the header for the team page:

1. Navigate to <http://localhost:8000/__graphql>
2. Click on "Explorer" at the top of the page
3. On the left side of the page, scroll down until you find "contentfulOurTeamPage" and click on it
4. In the drop down text, find "ourTeamPageHeader" and click on it
5. Click on "Code Exporter" at the top of the page
6. Make sure that the code is set to "JavaScript" and "Page query"
7. Copy and paste the necessary portion

Typically, when adding part of a GraphQL query to an existing query, you will only need to add the orange colored text without the ending curly braces to the end of the query. You can then assign all data pulled to a constant - for example, `const ourTeam = get(props, 'data.contentfulOurTeamPage')` allows you to get the header through `ourTeam.ourTeamPageHeader`. See files like `our-team.js` for further guidance.

## <a name="netlify"></a> Netlify

<a href="https://www.netlify.com/">Netlify</a> is a continuous integration and continuous deployment platform that allows you to run web projects at global scale without servers, devops, or costly infrastructure. We use Netlify to host the Worksense website and manage both the request demo and contact forms. All of the form submissions can be found in the "Forms" section and you can add new emails to alert submissions of in "Site settings". To allow your deployed site have access to all data stored in Contentful, use [these](#env) same API keys and follow the directions below.

### <a name="netlifyenv"></a> How to manage Netlify environment variables:

1. Navigate to the main page of your website on Netlify
2. At the top of the screen, click on "Site settings"
3. On the left side of your screen, click on "Build & deploy"
4. Scroll down to the "Environment" section and click on "Edit variables"
5. Paste the environment variables in their appropriate value fields

### <a name="deploy"></a> How to deploy your site:

1. Go to <https://app.netlify.com/sites/worksense/deploys>
2. Click on the "Trigger deploy" button on the right side of the screen and then click "Deploy site"
3. While your site is being built (around 30 seconds), if any errors come up in the logs, address those and restart this process
4. If your build is successful, at the end of the logs you will see "Site is live ✨" and have the ability to press the "Preview" button to view the site

Note that Netlify will automatically deploy to production the master branch on Github. If you want to see how a small change will look on the live site, you can make a pull request on Github and Netlify will automatically deploy to development a viewable site that you can find at <https://app.netlify.com/sites/worksense/deploys>.

## <a name="config"></a> Config files

- `.babelrc`, `.eslintrc.js`, `.npmrc`, `.nvmrc`, and `.prettierrc` - define the functionality of extensions and development tools
- `.gitignore` - contains the files that you don't want in the Github repo
- `gatsby-config.js`, `gatsby-node.js`, and `static.json` - handle the Gatsby setup, such as site metadata and file caching
- `package.json` - contains all of the dependencies that the site uses and scripts you can use to run common terminal development commands

Note that in general, you don't need to touch these unless you want to change your development process.

## <a name="issues"></a> Outstanding issues

All issues can be found in the "Projects" tab of Github under "Worksense Jira".

## <a name="devs"></a> Scout Developers

Made with love by:

- Megan Lau - Project Lead - <lau.me@northeastern.edu>
- Maggie Navracruz - Developer - <navracruz.m@northeastern.edu>
- Megan Chong - Developer - <chong.m@northeastern.edu>
- Chris Kei - Developer - <kei.c@northeastern.edu>
