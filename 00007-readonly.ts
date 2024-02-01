/** MyReadonly对象属性只读 easy */
/** question:不要使用内置的Readonly<T>实现一个Readonly<T>，Readonly<T>会接收一个泛型参数，并返回一个完全一样的类型，只是所有属性都会是只读的，也就是不可以再对该对象的属性进行赋值 */
interface Todo {
    title: string
    description: string
}

const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar"
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property

/** answer:MyReadonly */
type MyReadonly<T> = { readonly [K in keyof T]: T[K] };


/**内置泛型Readonly */
const todo2: Readonly<Todo> = {
    title: "Hey",
    description: "foobar"
}
todo2.title = "Hello" // Error: cannot reassign a readonly property
todo2.description = "barFoo" // Error: cannot reassign a readonly property
