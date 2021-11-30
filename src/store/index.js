import Vue from "vue";
import Vuex from "vuex"

//1.安装插件
Vue.use(Vuex)

//2.创建对象
const store = new Vuex.Store({

    //1.state 保存状态,在界面中使用的时候语法: $store.state.counter
    state: {
        counter: 1000,
        stus: [
            {
                name: "curry",
                age: 14
            },
            {
                name: "james",
                age: 22
            },
            {
                name: "张三",
                age: 31
            }
        ]
    },
    //2.mutations 方法,可以对state中的数据进行修改操作(更改state的唯一方法就是提交mutation),其中的方法默认又一个state参数
    //但是在调用这些方法的时候不可以使用$store.mutations.方法名直接调用
    //而是使用commit  如this.$store.commit("increment")
    //2.1如果想要调用时传参的话语法为this.$store.commit("increment",num),其中num为自定义的参数,这个参数叫做payload载荷
    //这样在mutations里面的方法中,传入的第一个参数默认时state,第二个写num即可
    //比如下面的increase方法
    mutations: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        //比如加几需要通过调用传入
        increase(state, num) {
            state.counter += num
        }

    },
    //3.actions
    actions: {},
    //4.getters 相当于计算属性,其中的方法默认第一个参数为state,第二个为getters本身,不再接收其他参数
    //如果想要在调用时传参的话,可以返回一个带参数的函数
    //比如下面的getStu方法,用来获取比输入参数age年龄小的学生,在调用时使用$store.getters.getstu(20)即可
    getters: {
        getStu(state, getters) {
            return function (age) {
                return state.stus.filter(s => s.age < age)
            }
        }
    },
    modules: {}

})

//3.store
export default store