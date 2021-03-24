export interface TraderData {
  id: string;
  email?: string;
  balance: number;
  positions?: number;
  pnl?: number;
  margin?: number;
  leverage?: number;
  volume?: number;
  maxlpos?: number;
  maxspos?: number;
// Group
  buyorders?: number;
  sellorders?: number;
  trades?: number;
// for buy orders
  buynumorders?: number;
  buynumcontracts?: number;
// for sell orders
  sellnumorders?: number;
  sellnumcontracts?: number;
  sellvolume?: number;
  sellspread?: number;
  sellaverage?: number;
// for trades
  tradeshortpos?: number;
  tradelongpos?: number;
}

export interface TableColumn {
  key: string;
  header: string;
  cell?: any;
  check?: boolean;
  isDGTX?: boolean;
  title?: string;
  group?: number; // 0 - no group checks, 1 - first element of group, 2 - all next elements of group
}
