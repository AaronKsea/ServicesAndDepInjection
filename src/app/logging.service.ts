export class LoggingService{
    logStatusChange(message:string){
        console.log('A server status changed. New server: ' + message)
    }
}