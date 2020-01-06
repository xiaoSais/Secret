(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{197:function(s,n,e){"use strict";e.r(n);var a=e(0),r=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"node中的进程与线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node中的进程与线程","aria-hidden":"true"}},[s._v("#")]),s._v(" Node中的进程与线程")]),s._v(" "),e("h2",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),e("p",[s._v("Node.js 是单线程的，适合处理高并发 I/O操作，不适合处理CPU密集型计算。Node.js 的单线程指的是在同一个进程里只有一个线程。")]),s._v(" "),e("p",[s._v("进程是资源调度和分配的基本单位，进程是线程的容器，多个进程不会共享内存，会有不通过的空间地址，只有建立了IPC进程之间才能通信。进程之间只有在Node.js中用 process 指代当前的工作进程。由于 Node 是单线程的会导致 cpu 资源利用率不足。")]),s._v(" "),e("p",[s._v("Node.js 中使用 process 指代当前进程")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("  process.pid // 进程的id\n  process.title = '工作进程' // 进程名字，可以任意设置\n  process.ppid // 父进程id\n  process.uptime() // 进程的执行时间\n  process.platform // 当前进程运行的平台\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("Node.js 处理CPU密集型的操作会造成进程堵塞")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("  const longComputation = () => {\n    let sum = 0;\n    for (let i = 0; i < 1e10; i++) {\n      sum += i;\n    };\n    return sum;\n  };\n  const server = http.createServer();\n  server.on('request', (req, res) => {\n    if (req.url === '/compute') {\n      console.info('计算开始',new Date());\n      const sum = longComputation();\n      console.info('计算结束',new Date());\n      return res.end(`Sum is ${sum}`);\n    } else {\n      res.end('Ok')\n    }\n  });\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])]),e("p",[s._v("由于Node.js是单线程的，在请求/compute的时候。当前工作线程cpu会瞬间飙升到99%，因此下次请求过来的时候会造成请求堵塞。但机器可能是多核的，其他cpu会闲置造成资源浪费。】")]),s._v(" "),e("h2",{attrs:{id:"child-process"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#child-process","aria-hidden":"true"}},[s._v("#")]),s._v(" child_process")]),s._v(" "),e("p",[s._v("Node.js 使用 child_process 开启多进程。")]),s._v(" "),e("p",[s._v("./index.js")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("  const http = require('http');\n  const fork = require('child_process').fork;\n  const server = http.createServer();\n  server.on('request', (req, res) => {\n    if (req.url === '/compute') { console.log(process.pid + '运算进程： pid')\n      const cp = fork('./fork_compute.js')\n      cp.send('start compute')\n      cp.on('message', (msg) => {\n        res.end(`Sum is ${msg}`);     \n        cp.kill()\n      })\n    } else {\n      res.end('ok')\n    }\n  });\n  server.listen(3000);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("p",[s._v("./fork_compute.js")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("  const longComputation = () => {\n    let sum = 0;\n    for (let i = 0; i < 1e10; i++) {\n      sum += i;\n    };\n    return sum;\n  };\n\n  // process 当前进程监听message事件, 主进程发送消息\n\n  process.on('message', (msg) => {\n    console.log('已经接受到主进程的消息：', msg)\n    var a = longComputation()\n    console.log('计算进程计算完毕')\n    process.send(a)\n  })\n  console.log(process.uptime(), '计算进程执行的时间')\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br")])]),e("p",[s._v("Node.js 可以通过 child_process.fork() 去创建子进程，子进程拥有和主进程相同的内存和空间，但是不共享。子进程和主进程通过send()方法和监听message事件进行IPC通信。两个进程拥有独立的pid，子进程的ppid等同于主进程的pid。")]),s._v(" "),e("h2",{attrs:{id:"cluster模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cluster模块","aria-hidden":"true"}},[s._v("#")]),s._v(" cluster模块")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("  const longComputation = () => {\n    let sum = 0;\n    for (let i = 0; i < 1e10; i++) {\n      sum += i;\n    };\n    return sum;\n  };\n  const http = require('http');\n  const cluster = require('cluster')\n  const server = http.createServer()\n  const cpuL = require('os').cpus().length\n  // 如果是主进程就fork，否则就监听同一个端口\n  if (cluster.isMaster) {\n    for (var i = 0; i < cpuL; i++) {\n      cluster.fork()\n    }\n  } else {\n    server.on('request', (req, res) => {\n      if (req.url === '/compute') { console.log(process.pid + '运算进程： pid')\n        var sum = longComputation ()\n        res.end('sum is' + sum)\n      } else {\n        res.end('ok')\n      }\n    });\n    server.listen(3000);\n  }\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br")])]),e("p",[s._v("根据机器核心的个数开启相应的子进程数，当前共有9个进程，主进程主要处理进程之间的调度，子进程同时监听3000端口，cluster封装了负载均衡，当一个请求到/compute的时候，下一个请求会被分发到其他8个子进程上。这种方式充分利用了CPU。进程之间的IPC通信也是通过send()方法和message事件，以下是常用的 cluster API。")]),s._v(" "),e("p",[s._v("真正监听端口的是主进程，主进程建立了一个TCP服务器，当来自前端的请求触发服务器的connection事件后，主进程会将相应的socket的句柄发送给子进程。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("  cluster.isMaster // 判断当前线程是否是主线程\n  cluster.isWorker // 当前线程是否是工作线程\n  cluser.fork() // 衍生出一个新的线程\n  cluster.worker // 当前工作进程的引用，类似于process\n  cluster.workers // 一个hash表，保存所有工作进程\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])])])}],!1,null,null,null);r.options.__file="process.md";n.default=r.exports}}]);