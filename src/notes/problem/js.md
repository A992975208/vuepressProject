---
title: js
date: 2023-08-07 13:23:44
categories:
  - foo
tags:
  - 
---
# js
1.节流和防抖
```js
防抖 持续触发某事件，在一定时间内不会执行改事件，才会执行对应的回调
节流 连续触发某个事件，在一定时间内会回会限制事件触发的次数 只会执行一次

防抖和节流都用到了闭包
通过函数作用域链实现内部函数访问外部函数变量，先在自身作用域找如果找不到就向上级作用域继续找
优点:
1.实现了函数变量的的私有化不会造成全局变量污染
2.让局部变量时钟保存在内存中
缺点:
1.出现太多的常驻内存变量会造成内存泄露，每次使用过这个变量之后给这个变量赋值为null释放内存
```
2.对象的结构
```js
let obj = {name: '张三', age: 23};
let {name: name1, age: age1} = obj
console.log(name1, age1);

```
3.js事件循环

:::note
js的事件循环就是js代码是从上到下一行一行执行的，如果某一行报错了就不会继续执行，
先执行同步代码再执行异步代码。
:::

```js
//1
console.log('1');    
//2
setTimeout(function() {
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    })
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
})
//3
process.nextTick(function() {
    console.log('6');
})
//4
new Promise(function(resolve) {//同步代码
    console.log('7');
    resolve();
}).then(function() {//异步代码
    console.log('8')
})
//5
setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
})

//1 7 6 8  2 4 3 5 9 11 10 12
```
:::note
执行顺序：
1.有同步代码先执行同步代码 promise是同步代码 .then执行的是异步代码
2.同步代码执行完毕==>执行异步代码(微任务、红任务)==>
先执行微任务(async await promise.then process.nextTick)再执行宏任务(setTimeout setInterval Ajax
DOM事件)
:::
4.promise
```js
promise.race()
promise.all()
Promise.all()方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。
const p = Promise.all([p1, p2, p3]);

如果你想实现一个效果：在一个页面中，等到页面中所有的请求返回数据后，再渲染页面，该怎么实现呢？(在实际开发中我们会看到loading加载页面，等数据返回完后，loading加载页面会消失，整个页面就展现出来了，增强用户的体验。
实现思路：
通过Promise.all()方法，等多个接口全部接收到数据后，再统一进行处理，然后渲染页面
console.log("显示加载中")
const q1 = pajax({
    url:"http://localhost:3000/looplist"
})

const q2 = pajax({
    url:"http://localhost:3000/datalist"
})
Promise.all([q1,q2]).then(res=>{
    console.log(res)
    console.log("隐藏加载中...")
}).catch(err=>{
    console.log(err)
})

```

5.浏览器缓存
```js   
强制缓存
1.Expires
2.Cache-Control:max-age=600

public：所有内容都将被缓存（客户端和代理服务器都可缓存）
private：所有内容只有客户端可以缓存，Cache-Control的默认取值
no-cache：客户端缓存内容，但是是否使用缓存则需要经过协商缓存来验证决定
no-store：所有内容都不会被缓存，即不使用强制缓存，也不使用协商缓存
max-age=xxx缓存内容将在xxx秒后失效

协商缓存
1. Last-ModifiedLast-Modified是服务器响应请求时，返回该资源文件在服务器最后被修改的时间/If-Modified-Since
3. EtagEtag是服务器响应请求时，返回当前资源文件的一个唯一标识(由服务器生成) / If-None-Match


```
```js
统计出字符串 sadfasdfasdfas 每个字符出现的次数
<script>
let str = 'abcbdcbdscc'
let obj = {}
for(let i = 0;  i < str.length; i++) {
    let char = str.charAt(i)
    if(obj[char]) {
        obj[char]++
    }else {
        obj[char] = 1
    }
}
console.log(obj)
</script>


使用reduce统计
var str = 'dasfsfdsd'
var res = str.split('').reduce((obj, count) => {
    obj[count] ? obj[count]++ : obj[count] = 1
    return obj
}, {})
console.log('aaaaaaaa', res)
```

请求1需要五分钟 请求2需要1分钟 请求2数据先回来 请求1回来后覆盖了请求2应该怎么做
:::note
在这种情况下，您可以使用Promise.all()
方法来等待所有请求完成后再进行下一步操作。您可以将两个请求封装在Promise对象中，然后将它们传递给Promise.all()
方法。这样，只有当两个请求都完成后，您才会得到一个包含两个响应的数组。您可以使用.then()
方法来处理这个数组并进行下一步操作。如果您想要确保请求2的响应先于请求1的响应，您可以将它们的顺序颠倒过来，以便在Promise.all()
方法中首先传递请求2的Promise对象
:::

```js
function request1() {
    return new Promise(function (resolve, reject) {
        // 发送请求1
        setTimeout(function () {
            resolve('请求1的响应');
        }, 300000); // 5分钟
    });
}

function request2() {
    return new Promise(function (resolve, reject) {
        // 发送请求2
        setTimeout(function () {
            resolve('请求2的响应');
        }, 60000); // 1分钟
    });
}

Promise.all([request2(), request1()]).then(function (responses) {
    // 处理响应数组
    console.log(responses[0]); // 请求2的响应
    console.log(responses[1]); // 请求1的响应
});
```

JavaScript 异步编程 Promise，如何终止一个正在进行等待返回的 Promise
```js
想要中断调用链很简单，就是在 then/catch 的最后一行返回一个永远 pending 的 promise 就可以了，这样后续 promise 就一直等待。如图中间 promise 不返回结果就会一直卡在这里。
somePromise
    .then(() => {})
    .then(() => {
        // 终止 Promise 链，让下面的 then、catch 和 finally 都不执行
    })
    .then(() => console.log('then'))
    .catch(() => console.log('catch'))
    .finally(() => console.log('finally'))

// 返回一个永远 pending 的 promise
return new Promise((resolve, reject) => {})
```

数组扁平化
```js
    let arr = [[1, 2, [3, 4], 5], [6, 7, 8], [[9, 10], 11]];
    function flat(arr) {
      let result = [];
      arr.map(item => {
        if (Array.isArray(item)) {
          result = result.concat(flat(item));
        } else {
          result.push(item);
        }
      });
      return result;
    }
    console.log(flat(arr)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
```

数组去重
```js
1.
var arr = [1, 2, 3,4 ,5,6, 4, 3, 8, 1]
// 数组去重：
// 方法4： set
function newArrFn (arr) {
    // .new Set方法，返回是一个类数组，需要结合 ...运算符，转成真实数组
    return ([...new Set(arr)])
}
console.log(newArrFn(arr));


2.
var arr = [1, 2, 3,4 ,5,6, 4, 3, 8, 1]
// 数组去重：
// 方法6 ：filter + findIndex
function newArrFn (arr) {
    // 利用indexOf检测元素在数组中第一次出现的位置是否和元素现在的位置相等，
    // 如果相等，说明数组中没有重复的
    return Array.prototype.filter.call(arr, function (item, index) {
        return arr.indexOf(item) === index
    })
}
console.log(newArrFn(arr));

3.
var arr = [1, 2, 3,4 ,5,6, 4, 3, 8, 1]
// 数组去重：
// 方法7 ：for + includes
function newArrFn (arr) {
    // 利用includes 检查新数组是否包含原数组的每一项
    // 如果不包含，就push进去
    let newArr = []
    for(let i = 0;i<arr.length;i++){
        newArr.includes(arr[i]) ? newArr:  newArr.push(arr[i])
    };
    return newArr
}
console.log(newArrFn(arr));
```