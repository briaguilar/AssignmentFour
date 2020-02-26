import { LightningElement, api, wire, track } from 'lwc';
import getTasksList from '@salesforce/apex/ActivityLeadPage.getTasksList';

const columns = [
    { label: 'Task', fieldName: 'TaskSubtype'},
    { label: 'Email', fieldName: 'Email' },
    { label: 'Subject', fieldName: 'Subject' },
    { label: 'Name', fieldName: 'WhoId' },
    { label: 'Status', fieldName: 'Status'}
];

export default class Assignment4 extends LightningElement {
    @api recordId;
    @track data = [];
    @track columns = columns;

    @wire(getTasksList, {})
    ApexResponse({ error, data }) {
        if (data) {
            this.data = data;
        } else if (error) {
            // test
        }
    }
}