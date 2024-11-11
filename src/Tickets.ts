class Ticket {
    private destination: string;
    private price: number;
    private status: string;

    constructor(destination: string, price: number, status: string) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }

    getDestination(): string {
        return this.destination;
    }

    getPrice(): number {
        return this.price;
    }

    getStatus(): string {
        return this.status;
    }

}

function tickets(tickets: string[], sortingCriteria: string) {


    let ticketsList: Ticket[] = [];
    for (let i = 0; i < tickets.length; i++) {
        let ticketCmd: string[] = tickets[i].split("\|");

        let destination: string = ticketCmd[0];
        let price: number = Number(ticketCmd[1]);
        let status: string = ticketCmd[2];

        ticketsList.push(new Ticket(destination, price, status));
    }
    ticketsList.sort()

    let sortedList: Ticket[] = sortTickets(ticketsList, sortingCriteria);

    console.log(sortedList);

}

function sortTickets(tickets: Ticket[], sortingCriteria: string) {
    return tickets.sort((a, b) => {
        if (sortingCriteria === 'destination') {
            return a.getDestination().localeCompare(b.getDestination());
        } else if (sortingCriteria === 'price') {
            return a.getPrice() - b.getPrice();
        } else if (sortingCriteria === 'status') {
            return a.getStatus().localeCompare(b.getStatus());
        }

        return 0;
    })

}

tickets([
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'status')