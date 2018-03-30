export const fetchPromise = (url, params, type = 'POST') => {
    return new Promise((resolve, reject) => {
        if (type === 'GET') {
            if (params) {
                let paramsArray = [];
                //拼接参数
                Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
                if (url.search(/\?/) === -1) {
                    url += '?' + paramsArray.join('&')
                } else {
                    url += '&' + paramsArray.join('&')
                }
            }
            fetch(url, {
                method: 'GET',
                credentials: 'include'
            }).then((response) => response.json()).then((res) => {
                resolve(res);
            }).catch( (err)=> {
                reject(err)
            })
        } else {
            // let formData = '';
            // let formData = new FormData();
            // for (let item in params) {
                // formData.append(item,params[item]);
                // params = formData + item + '=' + encodeURIComponent(params[item]) + '&'
            // }
            fetch(url,
                {
                    credentials: 'include',
                    method: 'POST',
                    headers: new Headers({
                        'Content-Type': 'application/x-www-form-urlencoded' // 指定提交方式为表单提交
                    }),
                    body:`data=${JSON.stringify(params)}`
                }
            ).then((response) => response.json()).then((res) => {
                resolve(res);
            }).catch((err)=> {
                reject(err)
            })
        }
    })

}
/*
function SuperType(name) {
    this.name = name;
    this.colors = ["red","blue","green"];
}
SuperType.prototype.sayName = function() {
    console.log(this.name);
}
function SubType(name, age) {
    SuperType.call(this,name);//继承属性
    this.age = age;
}
//继承方法
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function() {
    console.log(this.age);
}
var instance1 = new SubType("EvanChen",18);
instance1.colors.push("black");
console.log(instance1.colors);//"red","blue","green","black"
instance1.sayName();//"EvanChen"
instance1.sayAge();//18
var instance2 = new SubType("EvanChen666",20);
console.log(instance2.colors);//"red","blue","green"
instance2.sayName();//"EvanChen666"
instance2.sayAge();//20*/
