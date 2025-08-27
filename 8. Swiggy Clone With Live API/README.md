# Swiggy Clone with Live API

==========================

A React-based clone of Swiggy, featuring some of the app's core functionalities.

## Table of Contents

---

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [API Documentation](#api-documentation)
- [Proxy Server Configuration](#proxy-server-configuration)
- [Contributing](#contributing)
- [License](#license)

## Overview

---

This project aims to replicate some of the key features of the Swiggy app using modern web technologies. The clone is built using React v19+, Tailwind v4, Redux, Router v7, React Query, Swiper, and React-icon library.

## Features

---

- Real-time data fetching using React Query.
- Responsive design using Tailwind v4.
- Redux for state management.
- Router for navigation.
- Swiper for image carousels.
- React-icon library for icons.

## Tech Stack

---

- React v19+
- Tailwind v4
- Redux
- Router v7
- React Query
- Swiper
- React-icon library
- Swiggy Live API

## Setup and Installation

---

### Prerequisites

- Node.js (latest version)
- npm or bun

### Installation

1. Clone the repository:
2. Install dependencies: `npm install` or `bun install`
3. Start the development server: `npm run dev` or `bun dev`

## API Documentation

---

- For Restaurant Data and Menu: [Swiggy Live API](https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true)

- For Dish Data: [Swiggy Live API](https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=16866&catalog_qa=undefined&submitAction=ENTER)

For Dish Data you have to give restaurant id.

```
https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER
```

## Proxy Server Configuration

---

- To access the swiggy api documentation, first you need to go to the [Proxy-Server website](https://cors-anywhere.herokuapp.com/corsdemo) and click on the "Request temporary access to the demo server" button. After that you will get the data from swiggy API. Without this process this project will not work.

## Contributing

---

- Fork the repository:
- Create a new branch: `git checkout -b my-branch`
- Make your changes
- Commit your changes: `git commit -m "Add new feature"`
- Push your changes: `git push origin my-branch`
- Submit a pull request
