# integrityGenerator

## Usage

### Commandline

```
Usage: npx integrity-generator [options]

Options:

  -V, --version          output the version number

  -u, --url <urltofile>  The Url to the File (Required)

  -384, --sha384         Use sha384 instead of sha256

  -h, --help             display help for command

```

### Script
```require("integrity-generator")(url, issha384)```