#Raul canal API
Service of Backend API with integration with message delivery service [TWILLIO](https://www.twilio.com/pt-br/docs/).

- Database config and squeme [config](config)
- Controllers and contention with TWILLIO API [controllers](controllers)

## end points

### Lead routes

- POST [/json/api/lead/create] {leadName, whatsapp, email, leadState}
- POST [/json/api/lead/update:id] {id, leadName, whatsapp, email}
- GET [/json/api/lead/list]
- GET [/json/api/lead/list:id] {id}
- DELETE [/json/api/lead/delete:id] {id}

### Segmentation routes

- POST [/json/api/segment/create] {segmentationName}
- POST [/json/api/segment/update:id] {id, segmentationName}
- GET [/json/api/segment/list]
- GET [/json/api/segment/list:id] {id}
- DELETE [/json/api/segment/delete:id] {id}

### Relationship routes 

- POST [json/api/relationship/list/create] {leadId, listId}
- POST [json/api/relationship/segment/create] {leadId, segmentId}
