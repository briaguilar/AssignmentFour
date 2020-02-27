public with sharing class ListEmails {
    @AuraEnabled(cacheable = true)
    public static List<EmailMessage> getListEmails() {
        List<EmailMessage> listEmails =
            [SELECT FromName, Subject, MessageDate, Status FROM EmailMessage];
            return listEmails;
    }
}
