// {
//     tree: [
//         {
//             name: 'a',
//             type: 'directory',
//             content: undefined,
//             ext: undefined,
//             children: [
//                 {
//                     name: '1',
//                     type: 'file',
//                     ext: 'js',
//                     content: `/**
//                     * @testus sum1
//                     * @description 测试sum1函数
//                     * @param {*} a 1
//                     * @param {*} a 2
//                     * @returns 3
//                     */
//                    const sum1 = (a,b) => a+b;
                   
//                    module.exports = {
//                        sum1
//                    }`,
//                     children: null
//                 }
//             ]
//         },
//         {
//             name: 'b',
//             type: 'directory',
//             content: undefined,
//             ext: undefined,
//             children: [
//                 {
//                     name: 'c',
//                     type: 'directory',
//                     content: undefined,
//                     ext: undefined,
//                     children: [
//                         {
//                             name: '1',
//                             type: 'file',
//                             ext: 'js',
//                             content: `/**
//                             * @testus sum1
//                             * @description 测试sum1函数
//                             * @param {*} a 1
//                             * @param {*} a 2
//                             * @returns 3
//                             */
//                            const sum1 = (a,b) => a+b;
                           
//                            module.exports = {
//                                sum1
//                            }`,
//                             children: null
//                         }
//                     ]
//                 },
//                 {
//                     name: 'd',
//                     type: 'directory',
//                     content: undefined,
//                     ext: undefined,
//                     children: [
//                         {
//                             name: 'e',
//                             type: 'directory',
//                             content: undefined,
//                             ext: undefined,
//                             children: [
//                                 {
//                                     name: '4',
//                                     type: 'file',
//                                     ext: 'js',
//                                     content: '',
//                                     children: null
//                                 },
//                                 {
//                                     name: '5',
//                                     type: 'file',
//                                     ext: 'js',
//                                     content: '',
//                                     children: null
//                                 }
//                             ]
//                         },
//                         {
//                             name: '3',
//                             type: 'file',
//                             content: '',
//                             ext: 'js',
//                             children: null
//                         }
//                     ]
//                 },
//             ]
//         },
//     ],
//     originName: 'src',
//     targetName: 'tests',
//     middleName: 'spec',
//     libName: 'jest',
//     options: {

//     },
//     middlewares: [

//     ]
// };

const fs = require('fs');
const path = require('path');

const { goTree } = require('./common');

function handleContent(path, item) {
    item.content = fs.readFileSync(path, 'utf-8')
    return item;
}

module.exports = (args) => {
    args.tree = goTree(args.tree, args.originName, handleContent);
    return args;
}