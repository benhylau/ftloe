var ical = require('ical-generator'),
    cal = ical({
        domain: 'fortheloveofev.org',
        timezone: 'America/Toronto',
        name: 'for the Love of Ev',
        prodId: {
            company: 'for the Love of Ev',
            product: 'Events',
            language: 'EN'
        }
    });

cal.createEvent({
    start: new Date('Nov 18 2017 18:00:00 UTC'),
    end: new Date('Nov 18 2017 21:00:00 UTC'),
    summary: 'Christmas Shoebox 2017',
    location: 'Condo Party Room in Building A, 376 Highway 7 East, Markham, ON',
    url: 'http://www.fortheloveofev.org/events/christmas-shoebox-2017/'
});

cal.save("2017-11-18-christmas-shoebox-2017.ics");

