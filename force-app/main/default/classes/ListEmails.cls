public with sharing class ListEmails {
    @AuraEnabled(cacheable = true)
    public static List<EmailMessage> getListEmails() {
        List<EmailMessage> listEmails =
            [SELECT FromName, Subject, TextBody, MessageDate, LastOpenedDate  FROM EmailMessage];
            return listEmails;
    }
}
