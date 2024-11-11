var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    Ticket.prototype.getDestination = function () {
        return this.destination;
    };
    Ticket.prototype.getPrice = function () {
        return this.price;
    };
    Ticket.prototype.getStatus = function () {
        return this.status;
    };
    return Ticket;
}());
function tickets(tickets, sortingCriteria) {
    var ticketsList = [];
    for (var i = 0; i < tickets.length; i++) {
        var ticketCmd = tickets[i].split("\|");
        var destination = ticketCmd[0];
        var price = Number(ticketCmd[1]);
        var status_1 = ticketCmd[2];
        ticketsList.push(new Ticket(destination, price, status_1));
    }
    ticketsList.sort();
    var sortedList = sortTickets(ticketsList, sortingCriteria);
    console.log(sortedList);
}
function sortTickets(tickets, sortingCriteria) {
    return tickets.sort(function (a, b) {
        if (sortingCriteria === 'destination') {
            return a.getDestination().localeCompare(b.getDestination());
        }
        else if (sortingCriteria === 'price') {
            return a.getPrice() - b.getPrice();
        }
        else if (sortingCriteria === 'status') {
            return a.getStatus().localeCompare(b.getStatus());
        }
        return 0;
    });
}
tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'status');
