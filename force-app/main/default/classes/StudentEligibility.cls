public with sharing class StudentEligibility {

    @AuraEnabled(cacheable=true)
    public static String checkEligibility(Decimal attendance) {

        if(attendance >= 75) {
            return 'Eligible';
        }

        return 'Not Eligible';
    }
}