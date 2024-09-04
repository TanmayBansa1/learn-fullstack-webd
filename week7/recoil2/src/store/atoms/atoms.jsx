import axios from 'axios';
import { atom, selector } from 'recoil'

// export const networkAtom = atom({
//     key: "networkAtom",
//     default: 67
// })
// export const jobAtom = atom({
//     key: "jobAtom",
//     default: 2
// })
// export const messageAtom = atom({
//     key: "messageAtom",
//     default: 4
// })
// export const notificationAtom = atom({
//     key: "notificationAtom",
//     default: 12
// })


// //creating the selector 
// // a selector depends only on the atoms and nothing external

// export const totalSelector = selector({
//     key: "totalSelector",
//     get: ({get})=>{
//         const network = get(networkAtom);
//         const job = get(jobAtom);
//         const message = get(messageAtom);
//         const notification = get(notificationAtom);

//         return notification+message+job+network;
//     }
// })





//creating a new network atom that will store all the information
export const networkAtom = atom({
    key: "networkAtom",
    // default: {
    //     network: 0,
    //     jobs: 0,
    //     messaging: 0,
    //     notifications: 0
    // }
    default: selector({
        key: "uservalues",
        get: async ({ get }) => {
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data;
        }
    })
})

//this is how async data queries are done

export const totalnotificationSelector = selector({
    key: "totalnotificationSelector",
    get: ({ get }) => {
        const networkValues = get(networkAtom);
        return networkValues.network + networkValues.jobs + networkValues.messaging + networkValues.notifications
    }
})