/** 实现Omit medium */
/** question:不使用 Omit 实现 TypeScript 的 Omit<T, K> 泛型。Omit 会创建一个省略 K 中字段的 T 对象。 */
interface Todo {
    title: string
    description: string
    completed: boolean
}

type TodoPreview1 = MyOmit<Todo, 'description' | 'title'>

const todo1: TodoPreview1 = {
    completed: false,
}

/** answer:MyOmit */
type MyOmit<T, K> = { [P in Exclude<keyof T, K>]: T[P] };
/** extra:ts内置Omit */
type TodoPreview2 = Omit<Todo, 'completed' | 'title'>

const todo2: TodoPreview2 = {
    description: 'false',
}
