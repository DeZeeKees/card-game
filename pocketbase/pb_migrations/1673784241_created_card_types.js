migrate((db) => {
  const collection = new Collection({
    "id": "xgbrxtehfacc5qv",
    "created": "2023-01-15 12:04:01.010Z",
    "updated": "2023-01-15 12:04:01.010Z",
    "name": "card_types",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "l5u5g7yw",
        "name": "type",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": 255,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("xgbrxtehfacc5qv");

  return dao.deleteCollection(collection);
})
