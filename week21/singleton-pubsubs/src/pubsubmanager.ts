import {createClient, RedisClientType} from "redis";
class PubSubManager {
    private subscribers: Map<string, string[]> = new Map();
    private redisSubscriber: RedisClientType;
    private redisPublisher: RedisClientType;

    private static instance: PubSubManager;
    private constructor(){
        this.redisSubscriber = createClient();
        this.redisPublisher = createClient();
        this.redisSubscriber.connect();
        this.redisPublisher.connect();
        this.subscribers = new Map();
    }

    public static getInstance(): PubSubManager{
        if(!PubSubManager.instance){
            PubSubManager.instance = new PubSubManager();
        }
        return PubSubManager.instance;
    }

    public userSubscribe(userId: string, stock: string){
        if(!this.subscribers.has(stock)){
            this.subscribers.set(stock, []);
        }
        this.subscribers.get(stock)?.push(userId);

        if(this.subscribers.get(stock)?.length === 1){
            this.redisSubscriber.subscribe(stock, (message) => {
                this.relay(stock, message);
            });
            console.log(
                `Subscribed to ${stock}`
            )
        }
        console.log(
            `Subscribed ${userId} to ${stock}`
        );

    }
    public userUnsubscribe(userId: string, stock: string){
        if(this.subscribers.get(stock)?.length === 1){
            this.redisSubscriber.unsubscribe(stock);
        }
        this.subscribers.get(stock)?.filter((id) => id !== userId);
        console.log(
            `Unsubscribed ${userId} from ${stock}`
        );


    }
    public relay(stock: string, message: string){
        this.subscribers.get(stock)?.forEach((userId) => {
            this.redisPublisher.publish(userId, message);
            console.log(
                `Relaying ${message} to ${userId}`
            );
        });
    }
    public async disconnect() {
        await this.redisSubscriber.quit();
        await this.redisPublisher.quit();
    }
}
export const pubsubManager = PubSubManager.getInstance();