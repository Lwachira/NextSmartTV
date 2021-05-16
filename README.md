This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Running as a live instance on your machine

```bash
npm rub build
npm run start
# or
yarn build
yarn start
```

## [Live URL](https://linc-next-smart-tv.vercel.app/)

I decided to use Nextjs for the ease of deploying to vercel:

    https://linc-next-smart-tv.vercel.app/

## Notes

- I opted to use Nextjs for a few reasons

  - The first is code splitting, Next only loads the necessary JS and CSS, which results in faster load times.
  - Deployment to Vercel (creators of Nextjs) is super trivial.
  - Development was faster due to Hot Module Replacement, basically next updates the website for every input a developer makes.
  - API Routes – this helps create API Routes.
  - File System Routing

- Since it’s a framework, it’s opinionated in how things should be done, many developers don’t like this while others are for it. I find with regards to React, I’m happy with the latter path, React is mature enough that there is no need to reinvent certain wheels.

- I cheated a little bit with making calls to Unsplash, I ended up using their library. It’s not accurate to say it’s a cheat as such, since the library is a wrapper for Fetch. I mostly used it for the type script support (I wanted that sweet code autocomplete).

- I wanted to abide by Unsplash rule about securing API key, so when you use the application you’ll need to use your own API Key. I figured the best way to use their API is to nest the code inside Nextjs API routes (You can find the code in the API folder) and also use ENV variables.

  - I ended up also deploying the code to a [live url](https://linc-next-smart-tv.vercel.app/)
