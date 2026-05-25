import { LightningElement, track } from 'lwc';

import checkEligibility
from '@salesforce/apex/StudentEligibility.checkEligibility';

export default class StudentDashboard extends LightningElement {

    attendance;
    @track result;

    handleChange(event) {
        this.attendance = event.target.value;
    }

    checkEligibility() {

        checkEligibility({
            attendance: this.attendance
        })

        .then(result => {
            this.result = result;
        })

        .catch(error => {
            console.error(error);
        });
    }
}