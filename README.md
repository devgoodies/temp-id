# temp-id
Small library to generate sequential timestamp-based unique ID's

### Install
```
npm i @dev-goodies/temp-id
```
### Getting stared
```javascript
const tempid = require('@dev-goodies/temp-id');
  or ..
import * as tempid from '@dev-goodies/temp-id';
  or ..
import { UID, Int32UID } from '@dev-goodies/temp-id';
```

### `UID()`
Produces long unique ids  
```javascript
  const uidSet = new Set<number>();

  for ( let x = 1; x <= 10; x++) {
    uidSet.add(UID());
  }
```
> Sample output from __uidSet__ ..  
```  
  Set(10)
  [[Entries]]
  0: 1583287368734
  1: 1583287368737
  2: 1583287368740
  3: 1583287368743
  4: 1583287368746
  5: 1583287368749
  6: 1583287368752
  7: 1583287368755
  8: 1583287368758
  9: 1583287368761
  size: 10
```


### `Int32UID()`
Produces signed-32-bit int unique identifiers  
```javascript
  const uid32Set = new Set<number>();

  for ( let x = 1; x <= 10; x++) {
    uid32Set.add(Int32UID());
  }
```
> Sample output from __uid32Set__ ..  
```  
  Set(10)
  [[Entries]]
  0: 591920896
  1: 591920899
  2: 591920902
  3: 591920905
  4: 591920908
  5: 591920911
  6: 591920914
  7: 591920917
  8: 591920920
  9: 591920923
  size: 10
```
