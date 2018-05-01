/*
* 异步请求
* */
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
//滚动函数
/*
 *eleId:目标元素id
 * isArr:是数组: (列表中使用,可配合图片懒加载,暂时没有开发) 非数组:使用场景举例:滚动操作时隐藏或显示某元素(后面考虑使用函数节流)
 * bias:高度偏值
 * method:具体业务操作方法
 * */
export const onScroll = (eleId, method, isArr = false, bias = 120) => {
    let content = document.getElementById(eleId);
    let seeHeight = document.documentElement.clientHeight;         //可见区域高度
    let srcollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop; //滚动条距离顶部高度
    let curImg;
    if (isArr) {
        // var imgLen = content.children.length;
        // for(let i = 0;i < imgLen; i++){
        //   curImg  = content.children[i].children[0];
        //     if(curImg.offsetTop < (seeHeight + srcollTop-(bias))){
        //         if(curImg.dataset.src != "undefined"){
        //             curImg.setAttribute("src",curImg.dataset.src);
        //         }
        //     }
        // }
    } else {
        curImg = content;
        method(curImg.offsetTop < (seeHeight + srcollTop - (bias)));
    }
}
// onScroll('downloadBtn',(isShow)=>{
//     if(isShow){
//         this.setState({
//             closeDownload: true
//         })
//     }else{
//         this.setState({
//             closeDownload: false
//         })
//     }
// })
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
//寄生组合式继承
// function Super(name){
//     this.name = name;
//     this.arr = ['max','min'];
// }
// Super.prototype.say=function(){
//     console.log(this.name);
// }
// Super.prototype.age = 11;
// function Sub(name,sex){
//     Super.call(this,name);
//     this.sex= sex;
// }
// function inheritPrototype (subType,superType){
//     var prototype = Object.create(superType.prototype);
//     prototype.constructor = subType;
//     subType.prototype= prototype;
// }
// inheritPrototype(Sub,Super);
// Sub.prototype.saySex = function(){
//     console.log(this.sex);
// }
// var p1 = new Sub('jet','M');
// var p2 = new Sub('tom','F');
// // console.log(p1.name)
// // p1.arr.push('mid')
// // console.log(p1.arr);
// // console.log(p2.name)
// // p2.arr.push('mid22')
// // console.log(p2.arr);
// p1.saySex()
// p2.saySex()

