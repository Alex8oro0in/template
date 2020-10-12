import { Component, OnInit } from '@angular/core';
import {ItemTrade} from '../../interfaces/itemtrade';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.scss']
})
export class TradeComponent implements OnInit {
  tradeList: ItemTrade[] = [{name: 'Dashboard', src: '/assets/images/dashboard.svg'}, {name: 'Wallet', src: '/assets/images/wallet.svg'},
    {name: 'History',  src: '/assets/images/history.svg'}, {name: 'Account',  src: '/assets/images/account.svg'},
    {name: 'Staking program', src: '/assets/images/s-prog.svg'}, {name: 'Blockfunder', src: '/assets/images/bf.svg'},
    {name: 'DUSD Stable Coin', src: '/assets/images/stab.svg'}, {name: 'DGTX Treasury', src: '/assets/images/treasure.svg'},
    {name: 'Bots', src: '/assets/images/bots.svg'}];
  activeLink = 'Dashboard';
  constructor() { }

  ngOnInit(): void {
  }

}
