/** Concat easy */
/** question:在类型系统里实现JavaScript内置的Array.concat方法，这个类型接收两个参数，返回的新数组类型应该按照输入参数从左到右的顺序合并为一个新的数组 */
type Result = Concat<[1, 2], [3]>; //[1,2,3]

/** answer:Concat */
type Concat<T extends Tuple, U extends Tuple> = [...T, ...U];
type Tuple = readonly unknown[];
