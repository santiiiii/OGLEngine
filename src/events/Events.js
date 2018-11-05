module.exports = class Events {

    constructor () {
        this.events = [];
    }

    addEvent (event) {
        this.events.push(event);
    }

    addEvents (events) {
        Array.prototype.push.apply(this.events, events);
    }

    toString (geometry_id) {
        return this.events.map(event => {

            switch (event.type) {
                case 'drag': return this.scheduleDragWrapper(geometry_id, event)
                case 'keypres': return this.scheduleKeyPressWrapper(geometry_id, event)
            }

        }).join('\n');
    }

    scheduleDragWrapper (geometry_id, handler) {
        return `
            eventScheduler.scheduleDrag((function (event) {
                ${handler.hndl}
            }).bind(${geometry_id}));
        `;
    }

    scheduleKeyPressWrapper (geometry_id, event) {
        return `
            eventScheduler.scheduleKeyPress((function (event) {
                if (event.key == '${event.key}') {
                    ${event.hndl}
                }
            }).bind(${geometry_id}));
        `;
    }

}