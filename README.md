# React Hook For Set and Get Local and Session Storage Asynchronously

Custom React Hook For get and set Local and Session Storage Asynchronously



## Usage

```python
import useLocalStore from '../useLocalStore';

const {asyncLocalStorage,asyncSessionStorage}=useLocalStore();

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
