trigger CourseTrigger on Course__c (after update) {

    for(Course__c c : Trigger.new) {

        if(c.Filled_Seats__c == c.Total_Seats__c) {

            System.debug('Course Full');

        }
    }
}