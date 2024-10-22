# This single-page website is built with `React` and `Next.js v14.2` as a complete web application.

## In Next.js, the `App Router` method is utilized. Therefore, components are considered as server components and client components.

### To enhance user experience and provide a different way of fetching data compared to the previous version, pagination is implemented as `infinite scrolling`. Consequently, data fetching occurs on the client side.

### For managing `global state`, the `Context API` is used to handle information about watched movies and the selected movie across the application.

### Management of watched movies is done locally using a `custom hook` named `useLocalStorageState`.

### Styling is achieved using `Tailwind CSS` to differentiate it from the previous application and to leverage some of its attractive features.

### All information is fetched and processed from the `API` created by `TMDB`.

### The ability to search for movies by title has been added to the application by entering the name in the search section, with results displayed in `real-time`.

### To provide a more pleasant user experience, users can also vote for their desired movies and add them to their list.

### Note:

- The page design is fully responsive.
