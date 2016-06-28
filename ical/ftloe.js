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
    start: new Date('Aug 07 2016 19:00:00 UTC'),
    end: new Date('Aug 08 2016 01:00:00 UTC'),
    summary: 'Home for Dinner',
    location: 'Ronald McDonald House Charities @ 240 McCaul Street, Toronto, ON M5T 1W5',
    url: 'http://www.fortheloveofev.org/events/home-for-dinner/'
});

cal.save("2016-08-07-home-for-dinner.ics");

