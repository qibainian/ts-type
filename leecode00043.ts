/** Exclude easy */
/** question:实现内置的 Exclude<T, U> 类型，但不能直接使用它本身。 */
type Result = MyExclude<'a' | 'b' | 'c', 'a' | 'd'>; // 'b' | 'c'

/** answer:Exclude */
type MyExclude<T, U> = T extends U ? never : T;

/**内置Exclude */
type Result1 = Exclude<'a' | 'b' | 'c', 'a' | 'd'>; // 'b' | 'c'
