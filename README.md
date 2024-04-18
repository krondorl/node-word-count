# Node Word Count

Count total words sum in text files.

## Features

- No dependencies
- Only Node.js API used
- Uses ES module import
- Example text file included in repo (5 KB file size)

## Todo

Add the following modules

- Commander for CLI features
- Chalk for coloring output

## Minimum Requirements

- Node.js v18.13.0
- npm 8.19.3

## Usage

### Running in Docker

[You will need Docker Desktop running.](https://www.docker.com/products/docker-desktop/)

1. Open a Terminal
1. Go to the repo folder
1. Build: `docker build -t node-word-count .`
1. Run: `docker run -it node-word-count`

### Running in Node.js

Run in console: `npm start`

## Example output from Windows 11 Powershell

```
PS F:\Dev\node-word-count> docker run -it node-word-count

> node-word-count@0.1.0 start
> node index.js


Text file word counter

File  ./lipsum.txt

Word count:  877
PS F:\Dev\node-word-count>
```

## License

Please see the [LICENSE file](./LICENSE).
