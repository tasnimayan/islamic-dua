## Islamic Dua Web App

This is a web app to read and listen Dua's. It is a fully functional single page app built with Next.js and Node.js.

## Authors

- [@TasnimAyan](https://www.github.com/tasnimayan)

## Getting Started

Clone the repository

```
$ git clone https://github.com/tasnimayan/islamic-dua.git
```

Then, run the Next.js Application:

```bash
npm install
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## Tools

- [Node](https://nodejs.org/en/)

- [SQLite](https://www.sqlite.org/)

- [Next.js](https://nextjs.org/)

## API Reference

#### Get all categories

```http
  GET /api/categories/
```

#### Get Dua of specific id

```http
  GET /api/dua/${categoryId}
```

| Parameter    | Type  | Description                      |
| :----------- | :---- | :------------------------------- |
| `categoryId` | `int` | **Required**. category id of dua |

#### Get sub categories of specific category

```http
  GET /api/sub_cat/${categoryId}
```

| Parameter    | Type  | Description               |
| :----------- | :---- | :------------------------ |
| `categoryId` | `int` | **Required**. category id |

## Important! ===

sqlite database with three tables is needed in the models folder where the database connection is made.

## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

## Screenshots

Desktop View
![Desktop View](https://github.com/tasnimayan/islamic-dua/blob/main/public/screenshot/desktop.png)
Tablet View
![Tablet View](https://github.com/tasnimayan/islamic-dua/blob/main/public/screenshot/tablet.png)
