/** Includes easy 高赞答案不赞同这种写法，后续再看 */
/** question:在类型系统里实现JavaScript的Array.includes方法，这个类型接受两个参数，返回的类型要么是true要么是false */
type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'],'Dio'> //false

/** answer:Includes */
type Includes<T extends any[], U> = U extends T[number] ? true : false;
