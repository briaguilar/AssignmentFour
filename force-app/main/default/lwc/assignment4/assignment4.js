import { LightningElement, wire, track } from 'lwc';
import getTasks from '@salesforce/apex/ActivityLeadPage.getTasks';
import getEvents from '@salesforce/apex/EventsLeadPage.getEvents';
import getListEmails from '@salesforce/apex/ListEmails.getListEmails';



const taskColumns = [
    { label: 'Task', fieldName: 'TaskSubtype' },
    { label: 'Assigned To', fieldName: 'OwnerId' },
    { label: 'Subject', fieldName: 'Subject' },
    { label: 'Name', fieldName: 'WhoId' },
    { label: 'Status', fieldName: 'Status' }
];


const eventColumns = [
    { label: 'Event', fieldName: 'EventSubtype' },
    { label: 'Assigned To', fieldName: 'OwnerId' },
    { label: 'Subject', fieldName: 'Subject' },
    { label: 'Description', fieldname: 'Description' },
    { label: 'Name', fieldName: 'WhoId' },
    { label: 'Activity Date', fieldName: 'ActivityDate' }
];


const listEmailColumns = [
    { label: 'From', fieldName: 'FromName' },
    { label: 'Subject', fieldName: 'Subject' },
    { label: 'Date Received', fieldName: 'MessageDate' },
    { label: 'Status', fieldName: 'Status' }
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


    // This works but just for the template section
    // tasks;
    // error;

    // @wire(getTasks)
    // wiredTasks({ error, data }) {
    //     if (data) {
    //         this.tasks = data;
    //         this.error = undefined;
    //     } else if (error) {
    //         this.error = error;
    //         this.tasks = undefined;
    //     }
    // }
}