# Tanstack Guide For Revision.

## Table Of Content

1. [Definition](#what-is-tanstack-query)
2. [Why learn Tanstack](#2-why-learn-tanstack)
3. [When to Use](#3-when-to-use-tanstack-over-axios-or-redux)
4. [Scenarios where to use](#4-scenario-where-we-use-tanstack)
5. [Installation Guide](#5-how-to-install-tanstack-query)
6. []()
7. []()
8. []()
9. []()
10. []()
11. []()
12. []()

---

## 1. What is TanStack Query?

It's a library that helps us manage the state of data we fetch from servers, like APIs, in our React Application.

It is one of the most powerful tools for managing server-side state in React.

---

## 2. Why learn TanStack?

React Query (Tanstack Query) simplifies data fetching, caching, and synchronization in our applications, making it easier than ever to manage our data. Whether we're a beginner or an experienced developer, mastering this library can significantly enhance our productivity and improve our app's performance.

---

## 3. When to use Tanstack over axios or redux?

| Feature                         | Axios             | Redux/RTK                                 | TanStack Query                |
| ------------------------------- | ----------------- | ----------------------------------------- | ----------------------------- |
| API Requests                    | ✅                | ✅ (with RTK Query or `createAsyncThunk`) | ✅                            |
| Data Caching                    | ❌                | ❌ (manual)                               | ✅                            |
| Auto Refetch                    | ❌                | ❌                                        | ✅                            |
| Background Sync                 | ❌                | ❌                                        | ✅                            |
| Pagination/Infinite Scroll      | ❌                | ❌                                        | ✅                            |
| Global State (e.g., theme/user) | ❌                | ✅                                        | ❌                            |
| Boilerplate-Free                | ✅                | ❌                                        | ✅                            |
| Ideal For                       | Simple fetch/post | Global state & complex flows              | Server state, read-heavy apps |

**In Short:**

✅ Best Practice in Modern MERN Stack Apps
Use this combo:

- ✅ Axios — for making API requests.

- ✅ TanStack Query — to manage API data (GET, caching, loading).

- ✅ Redux/RTK — only if needed for global UI state or complex non-API logic.

---

## 4. Scenario where we use Tanstack?

- **Over Axios :-**

| Scenario                                                              | Reason                                                    |
| --------------------------------------------------------------------- | --------------------------------------------------------- |
| You want to fetch data (GET) from an API                              | TanStack gives caching, auto refetch, and background sync |
| You want automatic loading/error state management                     | TanStack manages this out of the box                      |
| You want to avoid writing useState/useEffect manually for every fetch | TanStack abstracts that                                   |
| You want pagination/infinite scroll                                   | Built-in support                                          |
| You want to sync server data with UI easily                           | TanStack is built for this                                |

- **Over Redux :-**

| Scenario                                                       | Reason                                |
| -------------------------------------------------------------- | ------------------------------------- |
| You only need to manage **remote/server data** (API responses) | TanStack is made for this             |
| You want to avoid boilerplate of actions/reducers              | TanStack is simpler and declarative   |
| You need background refetch, caching, etc.                     | Redux doesn’t give this automatically |
| You're building a **read-heavy** app (blogs, dashboards, etc.) | TanStack is optimized for reads       |

---

## 5. Advantages of React Query?

- **Data Fetching made Easy :-** With a simple `useQuery` Hook, fetching data becomes super easy.

- **Built-in Loading & Error States :-** No need to write custom code for handling loading, errors, or success states.

- **Automatic Caching :-** React Query automatically caches our data.

- **Background Refetching :-** If our data gets state or out of data, Tanstack Query can refetch in it background.

- **Pagination & Infinite Scrolling :-** Handling pagination or infinite scrolling? React Query has covered with tools specifically designed for those complex use cases.

---

## 6. How to install Tanstack Query?

[Go to Official Website](https://tanstack.com/query/latest/docs/framework/react/installation)

---

## 7.

---

## 8.

---

## 9.

---

## 10.

---

## 11.

---
