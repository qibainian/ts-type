/** Push easy */
/** question:实现类型版本的Array.push */
type Result = Push<[1, 2], '3'>;  //[1, 2, '3']

/** answer:Push */
type Push<T extends any[], U> = [...T, U];
