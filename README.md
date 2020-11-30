# Frontend developer game

**Not using the Vue CLI.**

## Prolog

Unfortunately, I ran out of the time, and I couldn't finish the project yet.
I spent way too much time watching tutorials, reading VueJS documentation, and setting up my local environment.
I didn't want to use Vue CLI, because I had some problem with that, so I set up my local environment from scratch with webpack, tyepscript, babel etc.
The hard part of the assignment was that I never used VueJS before, and I couldn't spend enough time in the weekdays because of my current full time job.

I created a TODO list, so you can check which part of the game is not done.

## How the game work

- Run ```npm run serve``` after the setup.
- You can reach the local site on the http://localhost:8080
- Click on the **Start game** h1 tag, which redirect to the game page.
- The app generate a 5x5 grid.
- Also generate a random number between 1 and 5. This number is the amount of the lights on tiles.
- Place the lighted tiles randomly on the 5x5 grid.
- The user able to click on the cells, either on the lights on and lights off cells.
- The above, below, right and left tiles if exists the lights switch on or off depends on the tile state.

## Architecture

```text
├─ public           // static assets.
├─ service          // commands and webpack configurations.
├─ src
│  ├─ assets        // assets such as images or font files.
│  ├─ components    // universal Vue components.
│  ├─ router        // view's routers config.
│  ├─ store         // Vuex store modules.
│  ├─ typings       // typescript .d.ts files.
│  └─ views         // pages.
```

## Commands

```bash
# Install dependencies.
npm install

# Start development server.
npm run serve

# Compile production bundle.
npm run build
```
