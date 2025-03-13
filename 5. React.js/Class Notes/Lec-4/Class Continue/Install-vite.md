## How to install vite?

Vite==> Vite is very popular bundler, because it gives majority of files with folder structure automatically, this will very helpful.

Step1:- To install vite in any folder, firstly open an integrated terminal.
--> Command:- npm create vite@latest

Step2:- It will ask some certain info like Project name, Select a framework, select a variant. than it will create a vit folder with the project name which we gave.

Step3:- In this node_module folder is not presented, so we have to install it, but here package.json file is presented so we can use:-
--> Command:- npm install

Step4:- To run this vite project.
--> Command:- npm run dev

## If we don't have any idea of an project folder about how can i run it than?

Step1:- open package.json file, here find "scripts", & inside this the first key which is may be either dav or start, & it's value is "vite". SO with the help of this key we can run the project. We can also change this key name.

--> Command:- npm run key Ex:- npm run dev OR npm run start

## How to build production ready code files?

Step1:- Inside "scripts", find "build":"vite build", with the help of this key we can easily build production ready code.

--> Command:- npm run build

## How to installed any package as an DevDependencies?

--> Command:- npm install -D packageName // here -D means this package is use as DevDependencies.
Ex:- npm install -D parcel

## Dependencies are used to create production ready code, but DevDependencies are not used to create production ready code.
