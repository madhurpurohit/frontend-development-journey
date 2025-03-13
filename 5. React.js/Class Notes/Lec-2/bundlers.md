## Package.json

What your project needs (dependencies).
How to run your project (scripts).
Basic details about your project (name, version, description).

Why It’s Important:
For consistency: When other people or you work on the project in the future, package.json ensures you all use the same version of the tools.
For easy setup: Instead of installing each package manually, npm install looks at package.json and automatically installs everything your project needs.

## Package-lock.json

In this it have all the dependencies with the exact version, it is more accurate. Because of package.json when we run npm install than it will install the original version but with latest minor or patch updates.

--> Example:- latest version is 19.5.6 & our project uses 19.3.4.

--> So when it install all npm package using package-lock.json than it will install exact 19.3.4 version.

--> But when it install all the npm package using package.json than it will install 19.5.6 version. But if the latest version is 20.2.4 than also it will install 19.5.6 because it didn't install major update package if it is not mention in package.json file.

## Version:"^19.2.4" ==> "MAJOR.MINOR.PATCH"

1. Patch Version
   Purpose: Bug fixes and patches that do not affect functionality or introduce breaking changes.
   Changes: Fixes a small issue without adding new features.
   Incremented: When backward-compatible bug fixes are made.

2. Minor Version
   Purpose: Adds new features or improvements in a backward-compatible way (no breaking changes).
   Changes: Introduces new functionality, but existing code will still work as before.
   Incremented: When new, backward-compatible features are added.

3. Major Version
   Purpose: Introduces significant changes, often with breaking changes that may require users to modify their code.
   Changes: Makes fundamental changes to the library, removing or changing functionality in a way that is not backward-compatible.
   Incremented: When breaking changes are introduced.

caret: ^ (minor and patch)
tilde: ~ (patch)

## Bundlers

Bring Bundler to our app:
webpack
vite
parcel

<!-- npm install -D parcel -->

Role of bundler:
1: Combines Multiple Files:
Your code might be spread across many files (e.g., multiple JavaScript modules, CSS files, images). A bundler collects all of these files, combines them, and creates one (or more) output files that the browser can efficiently load.
2: Optimizes for Performance: Minification: Removing unnecessary spaces, comments, and shortening variable names.
Tree Shaking: Removing unused code from the final bundle, so only the parts of your code that are used are included.
Code Splitting: Breaking your code into smaller pieces (chunks) so that the browser only loads what is needed for the initial page load and can load other parts of the app on demand.
3: Handles Dependencies:
4: Transpiles Code:
