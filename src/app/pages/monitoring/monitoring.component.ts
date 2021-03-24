import { Component, OnInit } from '@angular/core';
import {ChartData} from "../../interfaces/chartdata";
import {TableColumn, TraderData} from "../../interfaces/trader";
import {Check} from "../../interfaces/check";

const   TRADE_DATA: TraderData[] = [
  {id: 'bc01189-ui1798067-29828w', email: 'mail@mail.com', balance: 937539, positions: 5, pnl: 10000, margin: 65388
    , leverage: 75882, volume: 167, maxlpos: 65647, maxspos: 10, buynumorders: 6632, buynumcontracts: 17467
    , sellnumorders: 67739, sellnumcontracts: 5566, sellvolume: 1554, sellspread: 66,  sellaverage: 77, tradeshortpos: 7763
    , tradelongpos: 6655, sellorders: 7746},
  {id: 'bc01189-ui1798067-29828w', email: 'mail@mail.com', balance: 937539, positions: 5, pnl: 10000, margin: 65388
    , leverage: 75882, volume: 168, maxlpos: 65647, maxspos: 10, buynumorders: 6631, buynumcontracts: 17467
    , sellnumorders: 67739, sellnumcontracts: 5566, sellvolume: 54, sellspread: 66,  sellaverage: 77, tradeshortpos: 7763
    , tradelongpos: 6655, sellorders: 7746},
  {id: 'bc01189-ui1798067-29828w', email: 'mail@mail.com', balance: 937539, positions: 5, pnl: 10000, margin: 65388
    , leverage: 75882, volume: 160, maxlpos: 65647, maxspos: 10, buynumorders: 6632, buynumcontracts: 17467
    , sellnumorders: 67739, sellnumcontracts: 5566, sellvolume: 554, sellspread: 66,  sellaverage: 77, tradeshortpos: 7763
    , tradelongpos: 6655, sellorders: 7746},
  {id: 'bc01189-ui1798067-29828w', email: 'mail@mail.com', balance: 937539, positions: 5, pnl: 10000, margin: 65388
    , leverage: 75882, volume: 161, maxlpos: 65647, maxspos: 10, buynumorders: 6600, buynumcontracts: 17467
    , sellnumorders: 67739, sellnumcontracts: 5566, sellvolume: 554, sellspread: 66,  sellaverage: 77, tradeshortpos: 7763
    , tradelongpos: 6655, sellorders: 7746},
  {id: 'bc01189-ui1798067-29828w', email: 'mail@mail.com', balance: 937539, positions: 5, pnl: 10000, margin: 65388
    , leverage: 75882, volume: 168, maxlpos: 65647, maxspos: 10, buynumorders: 6632, buynumcontracts: 17467
    , sellnumorders: 67739, sellnumcontracts: 5566, sellvolume: 554, sellspread: 66,  sellaverage: 77, tradeshortpos: 7763
    , tradelongpos: 6655, sellorders: 7746},
  {id: 'bc01189-ui1798067-29828w', email: 'mail@mail.com', balance: 937539, positions: 5, pnl: 10000, margin: 65388
    , leverage: 75882, volume: 168, maxlpos: 65647, maxspos: 10, buynumorders: 6632, buynumcontracts: 17467
    , sellnumorders: 67739, sellnumcontracts: 5566, sellvolume: 554, sellspread: 66,  sellaverage: 77, tradeshortpos: 7763
    , tradelongpos: 6655, sellorders: 7746},
  {id: 'bc01189-ui1798067-29828w', email: 'mail@mail.com', balance: 937539, positions: 5, pnl: 10000, margin: 65388
    , leverage: 75882, volume: 168, maxlpos: 65647, maxspos: 10, buynumorders: 663, buynumcontracts: 17467
    , sellnumorders: 67739, sellnumcontracts: 5566, sellvolume: 554, sellspread: 66,  sellaverage: 77, tradeshortpos: 7763
    , tradelongpos: 6655, sellorders: 7746},
];

const TABLE_COLUMN: TableColumn[] = [{key: 'id', header: 'Trader ID', title: '!', check: true
  , group: 0, cell: (row: any) => `${row.id}`}
  , {key: 'email', header: 'Email', title: '!', check: true, isDGTX: false
    , group: 0, cell: (row: any) => `${row.email}`}
  , {key: 'balance', header: 'Trading balance', title: '!', check: false, isDGTX: true
    , group: 0, cell: (row: any) => + `${row.balance}`}
  , {key: 'buynumorders', header: 'Number of Buy Orders', title: 'Buy orders', check: false, isDGTX: false
    , group: 1, cell: (row: any) => + `${row.buynumorders}`}
  , {key: 'buynumcontracts', header: 'Num. of Buy Contracts', title: 'Buy orders', check: false, isDGTX: false
    , group: 2, cell: (row: any) => + `${row.buynumcontracts}`}
  , {key: 'sellnumorders', header: 'Number of Orders', title: 'Sell orders', check: false, isDGTX: false
    , group: 1, cell: (row: any) => + `${row.sellnumorders}`}
  , {key: 'sellnumcontracts', header: 'Number of Contracts', title: 'Sell orders', check: false, isDGTX: false
    , group: 2, cell: (row: any) => + `${row.sellnumcontracts}`}
  , {key: 'sellvolume', header: 'Volume (USD)', title: 'Sell orders', check: false, isDGTX: false
    , group: 2, cell: (row: any) => + `${row.sellvolume}`}
  , {key: 'sellspread', header: 'Spread', title: 'Sell orders', check: false, isDGTX: false
    , group: 2, cell: (row: any) => + `${row.sellspread}`}
  , {key: 'sellaverage', header: 'Average price', title: 'Sell orders', check: false, isDGTX: false
    , group: 2, cell: (row: any) => + `${row.sellaverage}`}
  , {key: 'positions', header: 'Positions', title: '!', check: false, isDGTX: false
    , group: 0, cell: (row: any) => + `${row.positions}`}
  , {key: 'pnl', header: 'PNL', title: '!', check: false, isDGTX: true
    , group: 0, cell: (row: any) => + `${row.pnl}`}
  , {key: 'tradeshortpos', header: 'Trade Short Position', title: 'Trades', check: false, isDGTX: false
    , group: 1, cell: (row: any) => + `${row.tradeshortpos}`}
  , {key: 'tradelongpos', header: 'Trade Long Position', title: 'Trades', check: false, isDGTX: false
    , group: 2, cell: (row: any) => + `${row.tradelongpos}`}
  , {key: 'margin', header: 'Margin', title: '!', check: false, isDGTX: false
    , group: 0, cell: (row: any) => + `${row.margin}`}
  , {key: 'leverage', header: 'Leverage', title: '!', check: false, isDGTX: false
    , group: 0, cell: (row: any) => + `${row.leverage}`}
  , {key: 'volume', header: 'Volume', title: '!', check: false, isDGTX: false
    , group: 0, cell: (row: any) => + `${row.volume}`}
];

const CHECKS_TABLE: Check[][] = [[{title: 'ID', isCheck: true}]
  , [{title: 'Email', isCheck: true}]
  , [{title: 'Trading balance', isCheck: false}]
  , [{title: 'Buy orders', isCheck: false}, {title: 'Number of Buy Orders', isCheck: false},
    {title: 'Number of Buy Contracts', isCheck: false}]
  , [{title: 'Sell orders', isCheck: false}, {title: 'Number of Orders', isCheck: false},
    {title: 'Number of Contracts', isCheck: false}, {title: 'Volume (USD)', isCheck: false},
    {title: 'Spread', isCheck: false}, {title: 'Average price (volume/number of contracts)', isCheck: false}]
  , [{title: 'Position', isCheck: true}]
  , [{title: 'PNL', isCheck: true}]
  , [{title: 'Trades', isCheck: false}, {title: 'Trade Short Position', isCheck: false},
    {title: 'Trade Long Position', isCheck: false}]
  , [{title: 'Margin', isCheck: true}]
  , [{title: 'Leverage', isCheck: true}]
  , [{title: 'Volume', isCheck: false}]];

const DATA_GRP: ChartData = {
  data1: [50, 190, 80, 150, 220, 400, 580, 77, 300],
  data2: [45, 100, 79, 80, 200, 330, 500, 77, 300],
  color1: '#38B1DC',
  color2: '#7B32E8',
  xArray: ['January', 'February', 'March', 'April', 'May', 'June'
    , 'July', 'August', 'September'],
  title: ['Number of Contracts', 'Number of Orders'],
  tooltipEnable: true,
  height: 330,
};


@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.scss']
})
export class MonitoringComponent implements OnInit {
  cardTitle1 = 'Real time Indicators';
  cardTitle2 = 'Historical Indicators';
  cardTitle3 = 'Chart Statistics';
  traderData1: TraderData[] = TRADE_DATA;
  traderData2: TraderData[] = TRADE_DATA;
  tableColumn1: TableColumn[] = TABLE_COLUMN;
  tableColumn2: TableColumn[] = TABLE_COLUMN;
  checksTable1: Check[][] = CHECKS_TABLE;
  checksTable2: Check[][] = CHECKS_TABLE;
  public daterange: any = {};
  public options: any = {
    locale: {format: 'YYYY-MM-DD'},
    alwaysShowCalendars: false,
  };
  // For Graphic
  dataChart: ChartData = DATA_GRP;
  constructor() { }

  ngOnInit(): void {
  }
  public selectedDate(value: any, datepicker?: any) {
    datepicker.start = value.start;
    datepicker.end = value.end;
    this.daterange.start = value.start;
    this.daterange.end = value.end;
    this.daterange.label = value.label;
  }
}
