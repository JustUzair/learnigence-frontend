## Learnigence Frontend

Check [Vercel Deployment](https://learnigence-frontend.vercel.app/)

#### NOTE - Assumptions are made, such as Images and Logos are chosen in a way that they represent original images in the assignment, the color scheme, fonts and stylings are also assumed since no figma file was present at the moment, so are the layout, animations and the transitions to provide a good user experience.

## Key Technologies used:

- ReactJS / NextJS
- Tailwind CSS

## Features of the app

- Light/dark mode toggle
- User Authentication
- Responsive Design with Tailwind CSS
- Working Emoji Picker with light/dark themes
- Responsive navigation bar / sidebar
- Strict type checking with TypeScript to prevent unwanted bugs
- Slick and Responsive stylized components with Shadcn-ui

## Screenshots

![1](https://raw.githubusercontent.com/JustUzair/learnigence-frontend/master/Screenshots/1.png)
![2](https://raw.githubusercontent.com/JustUzair/learnigence-frontend/master/Screenshots/2.png)
![3](https://raw.githubusercontent.com/JustUzair/learnigence-frontend/master/Screenshots/3.png)
![4](https://raw.githubusercontent.com/JustUzair/learnigence-frontend/master/Screenshots/4.png)
![5](https://raw.githubusercontent.com/JustUzair/learnigence-frontend/master/Screenshots/user-auth.png)
![6](https://raw.githubusercontent.com/JustUzair/learnigence-frontend/master/Screenshots/nav.png)

## Installation & Usage

```
git clone https://github.com/JustUzair/learnigence-frontend.git
cd learnigence-frontend-master
npm i
npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env.local` file.

Get your keys from [Clerk Dashboard](https://dashboard.clerk.com/)

`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`

`CLERK_SECRET_KEY`
