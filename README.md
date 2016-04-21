#Atom Apex Snippets
Apex code snippets for Atom IDE. This is a work in progress. I will publish to APM regularly as I add new snippets.

##Installation
Run the following command to install:
```
apm install apex-snippets
```
##Snippets
###`apexclass`
```
public class ClassName {

}
```
###`apextrigger`
```
trigger ObjectNameTrigger on ObjectApiName (
  before insert, before update, before delete,
  after insert, after update, after delete, after undelete) {

    //Note: Use a separate trigger handler for best practice
    //https://developer.salesforce.com/page/Trigger_Frameworks_and_Apex_Trigger_Best_Practices
    //use the 'apextriggerhandler' snippet to create a trigger handler in another class

    ObjectNameTriggerHandler handler = new ObjectNameTriggerHandler ();

    //Before Insert
    if (Trigger.isInsert && Trigger.isBefore) {
        handler.OnBeforeInsert(Trigger.new);
    }

    //After Insert
    else if (Trigger.isInsert && Trigger.isAfter) {
        handler.OnAfterInsert(Trigger.new);
    }

    //Before Update
    else if (Trigger.isUpdate && Trigger.isBefore) {
        handler.OnBeforeUpdate(Trigger.old, Trigger.new, Trigger.newMap);
    }

    //After Update
    else if (Trigger.isUpdate && Trigger.isAfter) {
       handler.OnAfterUpdate(Trigger.old, Trigger.new, Trigger.newMap);
    }

    //Before Delete
    else if (Trigger.isDelete && Trigger.isBefore) {
        handler.OnBeforeDelete(Trigger.old, Trigger.oldMap);
    }

    //After Delete
    else if(Trigger.isDelete && Trigger.isAfter) {
        handler.OnAfterDelete(Trigger.old, Trigger.oldMap);
    }

    //After Undelete
    else if (Trigger.isUndelete) {
        handler.OnUnDelete(Trigger.new);
    }


}

```
###`apextriggerhandler`
```
public with sharing class ObjectNameTriggerHandler {

    // On Before Insert
    public void OnBeforeInsert(List<ObjectApiName> newRecords) {

    }

    // On After Insert
    public void OnAfterInsert(List<ObjectApiName> newRecords) {

    }

    // On Before Update
    public void OnBeforeUpdate(List<ObjectApiName> oldRecords, List<ObjectApiName> newRecords, Map<Id, ObjectApiName> newRecordsMap) {

    }

    // After Update
    public void OnAfterUpdate(List<ObjectApiName> oldRecords, List<ObjectApiName> newRecords, Map<Id, ObjectApiName> newRecordsMap) {

    }

    // On Before Delete
    public void OnBeforeDelete(List<ObjectApiName> deletedRecords, Map<Id, ObjectApiName> deletedRecordsMap) {

    }

    // On After Delete
    public void OnAfterDelete(List<ObjectApiName> deletedRecords, Map<Id, ObjectApiName> deletedRecordsMap) {

    }

    // On Undelete
    public void OnUnDelete(List<ObjectApiName> undeletedRecords) {

    }

}
```

###`apextestclass`
```
@isTest(seeAllData=false)
public class TestClassName {

    static testMethod void testMethodName() {

         Profile p = [select id from profile where name='Standard User'];
         User u = new User(alias = 'standt', email='standarduser@testorg.com',
            emailencodingkey='UTF-8', lastname='Testing', languagelocalekey='en_US',
            localesidkey='en_US', profileid = p.Id,
            timezonesidkey='America/Los_Angeles', username='standarduser@testorg.com');

        test.startTest();
        system.runAs(u) {
            //start writing your test
        }
        test.stopTest();

    }

}
```
##Contributing
Contributions are welcome! Please raise an issue or submit a pull request.
