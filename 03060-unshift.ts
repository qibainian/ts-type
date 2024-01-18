/** Unshift easy */
/** question:实现类型版本的Array.unshift */
type Result = Unshift<[1, 2], 0> // [0, 1, 2,]

/** answer:Unshift */
type Unshift<T extends any[], U> = [U, ...T];
