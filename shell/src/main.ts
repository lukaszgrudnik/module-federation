declare module 'remote/Dashboard' {
    export const dashboardElement: HTMLElement;
}

import('remote/Dashboard').then((module)=> {
    document.body.appendChild(module.dashboardElement)
}).catch((error)=> console.log(error));


console.log('hello')