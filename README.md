# STIG Viewer

So, I wanted to browse a list of STIG vulnerabilities, and a checklist containing our application's compliance with them, but I couldn't get the viewer software to work on my machine. Luckily, the checklist is an XML file, so I just built a quickie web application viewer for it. This is that thing!

If you add one or more STIG vulnerability checklist files to the `/checklists` directory, they'll be processed and viewable in the web app.

This project is using Next.JS static site generation, so it's easy to create a build for your own application's checklists if you wish.

## Commands

You'll want to run `yarn` once before any of these commands, as it will install the project dependencies from the npm registry.

- `yarn dev`: Run the project locally (on localhost:3000)
- `yarn build`: Create a static build of the project using the files currently in the /checklists folder. Since there's no server-side code that will run, you can deploy this somewhere.
- `yarn test`: At present, there aren't any tests, but if there are (in the /tests folder) they'll be run.
- `yarn storybook`: At present, there aren't any stories for components, but if there are (files ending in `.stories.tsx`) they'll be displayed in a Storybook instance.
