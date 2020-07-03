import { LoggingService } from './logging.service';
import { Injectable, EventEmitter } from '@angular/core';
@Injectable()

export class AccountsService {
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    constructor(private loggingService: LoggingService) {

    }

    updatedStatus = new EventEmitter<string>();

    AddAccount(Name: string, Status: string) {
        this.accounts.push({ name: Name, status: Status });
        this.loggingService.logStatusChange(Status);
    }

    UpdateStatus(id: number, Status: string) {
        this.accounts[id].status = Status;
        this.loggingService.logStatusChange(Status);
    }

}