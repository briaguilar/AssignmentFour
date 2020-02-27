import { LightningElement, wire, track } from 'lwc';
import getTasks from '@salesforce/apex/ActivityLeadPage.getTasks';
import getEvents from '@salesforce/apex/EventsLeadPage.getEvents';
import getListEmails from '@salesforce/apex/ListEmails.getListEmails';



let taskColumns = [
    { label: 'Task', fieldName: 'TaskSubtype' },
    { label: 'Assigned To', fieldName: 'OwnerId' },
    { label: 'Subject', fieldName: 'Subject' },
    { label: 'Name', fieldName: 'WhoId' },
    { label: 'Status', fieldName: 'Status' }
];


let eventColumns = [
    { label: 'Event', fieldName: 'WhoId' },
    { label: 'Assigned To', fieldName: 'OwnerId' },
    { label: 'Subject', fieldName: 'Subject' },
    { label: 'Description', fieldname: 'Description' },
    { label: 'Activity Date', fieldName: 'ActivityDate' }
];


let listEmailColumns = [
    { label: 'Email', fieldName: 'Subject' },
    { label: 'From', fieldName: 'FromName' },
    { label: 'Message', fieldName: 'TextBody' },
    { label: 'Date', fieldName: 'MessageDate' },
    { label: 'Last Opened', fieldName: 'LastOpenedDate' }
];



export default class Assignment4 extends LightningElement {
    @track eventData = [];
    @track eventColumns = eventColumns;

    @wire(getEvents)
    wiredEvents({ error, data }) {
        if (data) {
            this.eventData = data;
        } else if (error) {
            this.error = error;
        }
    }


    @track taskData = [];
    @track taskColumns = taskColumns;

    @wire(getTasks)
    wiredTasks({ error, data }) {
        if (data) {
            this.taskData = data;
        } else if (error) {
            this.error = error;
        }
    }


    @track listEmailData = [];
    @track listEmailColumns = listEmailColumns;

    @wire(getListEmails)
    wiredlistEmails({ error, data }) {
        if (data) {
            this.listEmailData = data;
        } else if (error) {
            this.error = error;
        }
    }


    // Does not work vvvv

    // filterChange(value) {
    //     if (value === "Tasks") {
    //         taskColumns.visible(true);
    //         listEmailColumns.visible(false);
            
    //     } else if (value === "Events") {
    //         taskColumns.visible(false);
    //         eventColumns.visible(true);
    //         listEmailColumns.visible(false);
    //     }
    // }

}