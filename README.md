# bulk-file-renamer

## Abstract

File name bulk change program.

## build

```shell
$ npm install typescript -g
$ npm install
$ npm run build
```

## setting

Edit renameList.json.

```
  [
    {
      "srcPath": "./sample/aaa1.txt", // old file path
      "distPath": "./sample/aaa3.txt" // new file path
    },
    {
      "srcPath": "./sample/aaa2.txt", // old file path
      "distPath": "./sample/aaa4.txt" // new file path
    }
    //...
  ]
```

## execute
```shell
$ npm run start
```
