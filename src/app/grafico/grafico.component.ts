import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ComboComponent, UtilitarioService } from 'ngprime-core';
import { Subscription } from 'rxjs';
import { AppConfig } from './core/interface/appconfig';
import { AppconfigService } from './core/service/appconfigservice';
import { GerencialService } from './services/gerencial.service';


@Component({
    selector: 'app-grafico',
    templateUrl: './grafico.component.html',
    styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit, AfterViewInit {

    @ViewChild('comProyecto', { static: false }) comProyecto: ComboComponent;
    @ViewChild('comMeta', { static: false }) comMeta: ComboComponent;
    @ViewChild('comIndicador', { static: false }) comIndicador: ComboComponent;

    basicData: any;
    basicOptions: any;
    subscription: Subscription;
    config: AppConfig;

    isTipo = 1;

    datos: any;
    dataGrafico: any;

    constructor(
        private configService: AppconfigService,
        private gerencialSvc: GerencialService,
        private utilitarioSvc: UtilitarioService) {

    }

    async ngAfterViewInit(): Promise<void> {
        // this.comProyecto.setLectura(true);
        this.utilitarioSvc.abrirLoading();
        this.comMeta.setLectura(true);
        this.comIndicador.setLectura(true);
        await this.comProyecto.setComboServicio('gerencialpdot/getProyecto');
        /*await this.comMeta.setComboServicio('gerencialpdot/getPostMeta', { ide_proyecto: -1 });
        await this.comIndicador.setComboServicio('gerencialpdot/getPostProyectoIndicador', { ide_proyecto: -1, ide_objetivo: -1 });
        */this.comProyecto.onChange = () => { this.cargarMeta(); };
        this.comMeta.onChange = () => { this.cargarIndicador(); };
        this.comIndicador.onChange = () => { this.cargarDetalle(); };
        this.utilitarioSvc.cerrarLoading();
    }

    async cargarMeta() {
        this.comMeta.setLectura(true);
        this.comIndicador.setLectura(true);
        this.comMeta.limpiar();
        this.comIndicador.limpiar();
        const proyecto = this.comProyecto.getValor();
        this.utilitarioSvc.abrirLoading();
        await this.comMeta.setComboServicio('gerencialpdot/getPostMeta', { ide_proyecto: proyecto })
            .then(res => {
                this.comMeta.setLectura(false);
            });
        await this.gerencialSvc.getDetalleProyecto({ ide_proyecto: proyecto }).subscribe(res => {
            this.datos = res.datos;
            this.basicData = res.datosGrafico;
            this.utilitarioSvc.cerrarLoading();
        }, (err) => {
            this.utilitarioSvc.cerrarLoading();
        })
    }

    async cargarIndicador() {
        this.comIndicador.limpiar();
        const proyecto = this.comProyecto.getValor();
        const objetivo = this.comMeta.getValor();
        this.utilitarioSvc.abrirLoading();
        await this.comIndicador.setComboServicio('gerencialpdot/getPostProyectoIndicador', { ide_proyecto: proyecto, ide_objetivo: objetivo })
            .then(res => {
                this.comIndicador.setLectura(false);
            });
            await this.gerencialSvc.getDetalleProyecto({ ide_proyecto: proyecto,ide_objetivo: objetivo  }).subscribe(res => {
                this.datos = res.datos;
                this.basicData = res.datosGrafico;
                this.utilitarioSvc.cerrarLoading();
            }, (err) => {
                this.utilitarioSvc.cerrarLoading();
            })
    }

    async actualizar(){
        this.comMeta.setLectura(true);
        this.comIndicador.setLectura(true);
        this.comMeta.limpiar();
        this.comProyecto.limpiar();
        this.comIndicador.limpiar();
        this.utilitarioSvc.abrirLoading();
        await this.comProyecto.setComboServicio('gerencialpdot/getProyecto').then(res =>{
            this.utilitarioSvc.cerrarLoading();
        });
    }

    async cargarDetalle(){
        const proyecto = this.comProyecto.getValor();
        const objetivo = this.comMeta.getValor();
        const perspectiva = this.comIndicador.getValor();
        this.utilitarioSvc.abrirLoading();
        await this.gerencialSvc.getDetalleProyecto({ ide_proyecto: proyecto,ide_objetivo: objetivo,ide_perspectiva: perspectiva }).subscribe(res => {
            this.datos = res.datos;
            this.basicData = res.datosGrafico;
            this.utilitarioSvc.cerrarLoading();
        }, (err) => {
            this.utilitarioSvc.cerrarLoading();
        })
    }

    generarLetra() {
        var letras = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        var numero = (Math.random() * 15).toFixed(0);
        return letras[numero];
    }

    colorHEX() {
        var coolor = "";
        for (var i = 0; i < 6; i++) {
            coolor = coolor + this.generarLetra();
        }
        return "#" + coolor;
    }

    ngOnInit() {

        this.basicData = this.dataGrafico;/* {
            labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
            datasets: [{
                label: 'Control PDO',
                backgroundColor: [
                    '#EC407A',
                    '#AB47BC',
                    '#42A5F5',
                    '#7E57C2',
                    '#66BB6A',
                    '#FFCA28',
                    '#26A69A'
                ],
                data: [65, 59, 80, 40, 56, 55]
            }
            ]
        }; */


        this.config = this.configService.config;
        this.updateChartOptions();
        this.subscription = this.configService.configUpdate$.subscribe(config => {
            this.config = config;
            this.updateChartOptions();
        });
    }

    updateChartOptions() {
        if (this.config.dark)
            this.applyDarkTheme();
        else
            this.applyLightTheme();
    }

    applyDarkTheme() {
        this.basicOptions = {
            legend: {
                labels: {
                    fontColor: '#ebedef'
                }
            },
            scales: {
                xAxes: [{
                    ticks: {
                        fontColor: '#ebedef',
                    },
                    gridLines: {
                        color: 'rgba(255,255,255,0.2)'
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontColor: '#ebedef'
                    },
                    gridLines: {
                        color: 'rgba(255,255,255,0.2)'
                    }
                }]
            }
        };

    }

    applyLightTheme() {
        this.basicOptions = {
            legend: {
                labels: {
                    fontColor: '#495057'
                }
            },
            scales: {
                xAxes: [{
                    ticks: {
                        fontColor: '#495057'
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontColor: '#495057'
                    }
                }]
            }
        };
    }

    exportExcel() {
        import("xlsx").then(xlsx => {
            const worksheet = xlsx.utils.json_to_sheet(this.datos);
            const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
            const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
            this.saveAsExcelFile(excelBuffer, "pdot");
        });
    }

    saveAsExcelFile(buffer: any, fileName: string): void {
        import("file-saver").then(FileSaver => {
            let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            let EXCEL_EXTENSION = '.xlsx';
            const data: Blob = new Blob([buffer], {
                type: EXCEL_TYPE
            });
            FileSaver.default.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
        });
    }

}
