##### JSON.stringify的几个用法

- JSON.stringify(value[, replacer [, space]])  
value：(必须) 可以是任意值
replacer：(可选) 函数 (key, value) => {} 序列化过程中都要经过函数处理
        数组：只有包含在这个数组中属性名才会序列化到JSON字符串中
        null or 没有：序列化所有
space：(可选) 指定缩进用的空白字符串

- 9个特性  
  · no1
    + undefined、任意的函数以及symbol值，出现在非数组对象的属性值中时在序列化过程中会被忽略略  
    + undefined、任意的函数以及symbol值出现在数组中时会被转换成 null  
    + undefined、任意的函数以及symbol值被单独转换时，会返回 undefined  
  · no2    
    + 布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值
  · no3  
    + 所有以symbol为属性键的属性都会被完全忽略掉，即便 replacer 参数中强制指定包含了它们
  · no4  
    + NaN 和 Infinity 格式的数值及 null 都会被当做 null  
  · no5  
    + 转换值如果有 toJSON() 方法，该方法定义什么值将被序列化  
  · no6  
    + Date 日期调用了 toJSON() 将其转换为了 string 字符串（同Date.toISOString()），因此会被当做字符串处理  
  · no7
    + 对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误  
  · no8  
    + 其他类型的对象，包括 Map/Set/WeakMap/WeakSet，仅会序列化可枚举的属性  
  · no9
    + 当尝试去转换 BigInt 类型的值会抛出错误  