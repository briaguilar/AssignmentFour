public with sharing class ActivityLeadPage {
    @AuraEnabled(cacheable = true)
    public static List<Task> getTasks(){
        List<Task> tasks = 
            [SELECT TaskSubtype, Subject, OwnerId, Status FROM Task];
            return tasks;
    }
}
