# Async React Hook For Set and Get Local and Session Storage 

Custom React Hook For get and set Local and Session Storage



## Usage

```python
import LocalStore from '../LocalStore';

const {asyncLocalStorage,asyncSessionStorage}=LocalStore();

async function getStoreage(){
    const sessionStorage= await asyncSessionStorage.getItem("key")
    const localStorage= await asyncLocalStorage.getItem("key")
  }

async function setStoreage(){
    await asyncSessionStorage.setItem("key","value")
    await asyncLocalStorage.setItem("key","value")
  }
```



## License
[MIT](https://choosealicense.com/licenses/mit/)
