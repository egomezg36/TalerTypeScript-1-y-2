"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplaySeries = void 0;
const data_1 = require("./data");
class DisplaySeries {
    constructor(series, tableBody) {
        this.series = series;
        this.tableBody = tableBody;
        this.currentIndex = 0;
    }
    display() {
        console.log('this.series:', this.series); // check that series is being passed correctly
        // If table body element doesn't exist, stop displaying
        if (!this.tableBody) {
            return;
        }
        // Get the current serie
        const currentSerie = this.series[this.currentIndex];
        console.log('currentSerie:', currentSerie); // check that currentSerie is being set correctly
        // If there are no more series to display, stop displaying
        if (!currentSerie) {
            return;
        }
        // Create a new row element
        const row = document.createElement("tr");
        // Create the id cell
        const idCell = document.createElement("td");
        idCell.innerText = currentSerie.id.toString();
        row.appendChild(idCell);
        // Create the name cell
        const nameCell = document.createElement("td");
        nameCell.innerText = currentSerie.name;
        row.appendChild(nameCell);
        // Create the channel cell
        const channelCell = document.createElement("td");
        channelCell.innerText = currentSerie.channel;
        row.appendChild(channelCell);
        // Create the seasons cell
        const seasonsCell = document.createElement("td");
        seasonsCell.innerText = currentSerie.seasons.toString();
        row.appendChild(seasonsCell);
        // Add the row to the table body
        this.tableBody.appendChild(row);
        // Increment the current index and call display again
        this.currentIndex++;
        this.display();
    }
}
exports.DisplaySeries = DisplaySeries;
const seriesTableBody = document.getElementById("seriesTableBody");
const displaySeries = new DisplaySeries(data_1.series, seriesTableBody);
displaySeries.display();
