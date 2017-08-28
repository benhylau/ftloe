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
    start: new Date('Sep 30 2017 14:00:00 UTC'),
    end: new Date('Sep 30 2017 16:00:00 UTC'),
    summary: 'Plant a Kiss, Plant a Tree',
    location: 'Cedarbrook Park, 91 Eastpark Blvd, Scarborough, ON',
    url: 'http://www.fortheloveofev.org/events/plant-a-kiss-plant-a-tree/'
});

cal.save("2017-09-30-plant-a-kiss-plant-a-tree.ics");

