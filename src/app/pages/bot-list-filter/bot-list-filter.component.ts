import {Component, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {TableColumn, TraderData} from '../../interfaces/trader';
import {Check} from '../../interfaces/check';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {ChartData} from "../../interfaces/chartdata";

@Component({
  selector: 'app-bot-list-filter',
  templateUrl: './bot-list-filter.component.html',
  styleUrls: ['./bot-list-filter.component.scss']
})
export class BotListFilterComponent implements OnInit {
// Данные для таблицы
  @Input() isTraderData: TraderData[];
  traderData = new MatTableDataSource();
  @ViewChild (MatSort, { static : true }) sort: MatSort;
// Наименование параметра, заголовок, check- выводим ли в таблицу, cell - для вывода данных в столбце
  @Input() tableColumns: TableColumn[];
// Наименование всех параметров в таблице и порядок их отображения
  columnsToDisplay: string[] = [];
// Строка чекапов  - таблица формирует группы чекапов
  @Input() checksTable: Check[][];
// Выводим ли графики при клике на ячейку
  @Input() isGraph: boolean;
  @Input() dataGraph: ChartData;
  @Input() titleTable: string;
  allCheck = false;
  isGroupCheck = false;
  posy = '';
  posx = '';
  titleSearch = '';
  activeCheck = 0;
  isTypeNumber = false;
// Для отрисовки сетки в наименовании группы чеков (TO DO)
  isGrid: number[] = [];
  constructor(public checksGroup: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) {}
  ngOnInit(): void {
    this.traderData.data = this.isTraderData;
    this.isColumnCheckIt();
    this.traderData.sort = this.sort;
    for (let i = 0; i < this.tableColumns.length; i++) {
      this.columnsToDisplay[i] = this.tableColumns[i].key;
    }
  }
  setCheck(value) {
    if (value >= 0) {
      this.checksTable[value][0].isCheck = !this.checksTable[value][0].isCheck;
      for (let j = 0; j < this.checksTable[value].length; j++) {
        this.checksTable[value][j].isCheck = this.checksTable[value][0].isCheck;
      }
    } else {
      this.isCheckUncheckAll();
    }
    this.isColumnCheckIt();
  }
  isCheckUncheckAll() {
    this.allCheck =  !this.allCheck;
    this.checksTable[0][0].isCheck = true;
    for (let i = 1; i < this.checksTable.length; i++ ) {
      for (let j = 0; j < this.checksTable[i].length; j++) {
        this.checksTable[i][j].isCheck = this.allCheck;
      }
    }
  }
  isColumnCheckIt() {
    let idx = 0;
    for (let i = 0; i <  this.checksTable.length; i++) {
      if (this.checksTable[i].length > 1) {
        for (let j = 1; j < this.checksTable[i].length; j++) {
          this.tableColumns[idx++].check = this.checksTable[i][j].isCheck;
        }
      } else {
        this.tableColumns[idx++].check = this.checksTable[i][0].isCheck;
      }
    }
    this.gridConnfig();
  }
  onClick() {
    this.isGroupCheck = !this.isGroupCheck;
  }
  setCheckGroup(j) {
    this.checksTable[this.activeCheck][j].isCheck = !this.checksTable[this.activeCheck][j].isCheck;
    this.isColumnCheckIt();
  }
  openCheckGroup(event, content, j) {
    this.activeCheck = j;
    this.posy = event.clientY + 'px';
    if (event.clientX > 900) { this.posx = (event.clientX - 290) + 'px';
    } else { this.posx = event.clientX + 'px'; }
    const checkGroupRef = this.checksGroup.open(content
      , {width: '280px',  panelClass: 'modal-check'
        , data: {checks: this.checksTable[j]},  backdropClass: 'backdrop', position: { top: this.posy, left: this.posx}});
  }
  openFilter(event, content, j) {
    if ((typeof this.tableColumns[j].cell(this.isTraderData[0])) === 'number') {
      this.isTypeNumber = true;
    } else { this.isTypeNumber = false; }
    if (event.clientX > 900) { this.posx = (event.clientX - 290) + 'px';
    } else { this.posx = event.clientX + 'px'; }
    this.posy = event.clientY + 'px';
    console.log('x : ', event.clientX);
    this.titleSearch = this.tableColumns[j].header;
    this.checksGroup.open(content
      , {width: '293px',  panelClass: 'modal-check',  backdropClass: 'backdrop'
        , position: { top: this.posy, left: this.posx}, data: { title: this.tableColumns[j].header}});
  }
  showGraph(event, content, j) {
    if (this.isGraph) {
      if (event.clientY > 300) { this.posy = event.clientY - 200 + 'px';
      } else { this.posy = event.clientY + 'px'; }
      this.posx = (event.clientX - 160) + 'px';
      const checkGroupRef = this.checksGroup.open(content
        , {
          width: '320px', height: '200px', panelClass: 'modal-graph', data: { height: 180 }
          , backdropClass: 'backdrop', position: {top: this.posy, left: this.posx}
        });
    }
  }
  gridConnfig() {
    let a = false;
    this.isGrid[0] = 0;
    for (let i = 1; i < this.tableColumns.length; i++) {
      this.isGrid[i] = 0;
      if (this.tableColumns[i].check) {
        if (this.tableColumns[i].group === 0) {
          this.isGrid[i] = 0;
          if (this.isGrid[i - 1] === 1) { this.isGrid[i - 1] = 4;}
          if (this.isGrid[i - 1] === 2) { this.isGrid[i - 1] = 3;}
        } else {
          if( this.tableColumns[i].group === 1 ) {
            this.isGrid[i] = 1;
            if (this.isGrid[i - 1] === 1) { this.isGrid[i - 1] = 4;}
            if (this.isGrid[i - 1] === 2) { this.isGrid[i - 1] = 3;}
          } else {
            this.isGrid[i] = 2;
            if ( a ) { this.isGrid[i] = 1;  a = false; }
          }
        }
      } else { if ( this.tableColumns[i].group === 1) { a = true; }}
    }
  }
}
