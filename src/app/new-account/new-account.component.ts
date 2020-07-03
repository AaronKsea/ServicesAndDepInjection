import { Component, EventEmitter } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();


  constructor(private loggingService: LoggingService,
    private accountsService: AccountsService) {
    this.accountsService.updatedStatus.subscribe((stat: string) => alert('New status is ' + stat));
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    this.accountsService.AddAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
