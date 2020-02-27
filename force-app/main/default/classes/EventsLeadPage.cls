public with sharing class EventsLeadPage {
    @AuraEnabled(cacheable = true)
    public static List<Event> getEvents(){
        List<Event> events = 
            [SELECT EventSubtype, OwnerId, Description, ActivityDate FROM Event];
            return events;
    }
}
