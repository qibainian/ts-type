/** 实现MyPick easy */
/** question:不使用 Pick<T, K> ，实现 TS 内置的 Pick<T, K> 的功能。从类型 T 中选出符合 K 的属性，构造一个新的类型。 */
interface Todo {
    title: string
    description: string
    completed: boolean
};
type TodoPreview = MyPick<Todo, 'title' | 'completed'>;
const todo4: TodoPreview = {
    title: 'Clean room',
    completed: false,
};

/** answer:MyPick */
type MyPick<T, K extends keyof T> = { [key in K]: T[key] };

/**内置泛型Pick */
const todo3: Pick<Todo, 'title' | 'completed'> = {
    title: 'Clean room',
    completed: false,
}


/**keyof: 取interface的键后保存为联合类型 */
interface userInfo {
    name: string
    age: number
}
type keyofValue = keyof userInfo // keyofValue = "name" | "age"

/**in: 取联合类型的值，主要用于数组和对象的构建 */
type name = 'firstname' | 'lastname'
type TName = {
    [key in name]: string
}// TName = { firstname: string, lastname: string }
