# commodo-fields-int
[![Build Status](https://travis-ci.org/doitadrian/commodo-fields-int.svg?branch=master)](https://travis-ci.org/doitadrian/commodo-fields-int)
[![Coverage Status](https://coveralls.io/repos/github/doitadrian/commodo-fields-int/badge.svg?branch=master)](https://coveralls.io/github/doitadrian/commodo-fields-int?branch=master)
[![](https://img.shields.io/npm/dw/commodo-fields-int.svg)](https://www.npmjs.com/package/commodo-fields-int) 
[![](https://img.shields.io/npm/v/commodo-fields-int.svg)](https://www.npmjs.com/package/commodo-fields-int)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
  
A simple integer field, used with the [Commodo `withFields`](https://github.com/webiny/commodo/packages/fields) higher order function. 

## Install
```
npm install --save commodo-fields-int
```

Or if you prefer yarn: 
```
yarn add commodo-fields-int
```

## Quick Example:
 
```javascript
import { compose } from "ramda";
import { withFields, string } from "@commodo/fields";
import { int } from "commodo-fields-int";

const Company = compose(
  withFields({
    name: string(),
    age: int(),
    topYears: int({ list: true })
    // Other fields you might need...
  }),
  // Other higher order functions (HOFs) you might need...
)();

const company = new Company();
company.name = "Acme Corporation";

// The int field can only accepts integers. 
company.age = 17;
company.topYears = [2000, 2005, 2010];

// The following will throw the WithFieldsError error.
company.age =  "17";
```

Note: of course, you can also use the [`populate`](https://github.com/webiny/commodo/tree/master/packages/fields#populatedata-object-void) method to assign the data:

```javascript
const company = new Company();
company.populate = { age: 17, topYears: [2000, 2005, 2010] };
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/5121148?v=4" width="100px;"/><br /><sub><b>Adrian Smijulj</b></sub>](https://github.com/doitadrian)<br />[💻](https://github.com/doitadrian/commodo-fields-int/commits?author=doitadrian "Code") [📖](https://github.com/doitadrian/commodo-fields-int/commits?author=doitadrian "Documentation") [💡](#example-doitadrian "Examples") [👀](#review-doitadrian "Reviewed Pull Requests") [⚠️](https://github.com/doitadrian/commodo-fields-int/commits?author=doitadrian "Tests") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
