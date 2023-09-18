#LMS FONTEND
### setup instruction

1.Clone the project 
```
git  clone https://github.com/Deepak2723/Lms-Frontend.git
```
2. Move into the directory
```
cd  lms-frontend
```

3. install depencies
```
npm i
```

4. run the server
```
npm run dev
```
5.  Activate plugin in tailwind config file
```
 plugins: [require("daisyui"),require("@tailwindcss/line-clamp")]
```
### Setup instructions for tailwind css

[tailwind official instruction doc](https://tailwindcss.com/docs/installation)

1. Install tailwind css
```
npm install -D tailwindcss
```

2. Create tailwind config file
```
npx tailwindcss init
```

3. Add file extensions to tailwind config file  and postcss config file
```
"./index.html", "./src/**/*.{js,ts,jsx,tsx}"
```
4. Add the tailwind directives at the top of the `index.css` file
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Adding Plugins an dependencies
```
npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```
### configure auto import sort eslint

1. Install simple import sort
```
npm i eslint-plugin-simple-import-sort
```

2.Add rule in `.eslintrc.cjs`
```
'simple-import-sort/imports':'error',
```

3.add simple sort plugin   `.eslintrc.cjs`
```
plugins: [...,'simple-import-sort']
```
4.To  enable auto import sort on file save in vs-code
   
   -Open `setting.json` in settings
   -add the following config

   ```
   "editor.codeActionsOnSave": {
        "source.fixAll.eslint":true
    }
   ```