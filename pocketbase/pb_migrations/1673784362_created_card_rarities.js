migrate((db) => {
  const collection = new Collection({
    "id": "usd5jvnslv05qss",
    "created": "2023-01-15 12:06:02.534Z",
    "updated": "2023-01-15 12:06:02.534Z",
    "name": "card_rarities",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "l2igssif",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": 255,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "skmh484o",
        "name": "rarity_value",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 10
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
  const collection = dao.findCollectionByNameOrId("usd5jvnslv05qss");

  return dao.deleteCollection(collection);
})
