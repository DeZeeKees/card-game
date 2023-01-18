migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zccigaqs",
    "name": "ownedCards",
    "type": "relation",
    "required": false,
    "unique": true,
    "options": {
      "maxSelect": null,
      "collectionId": "oq2p01lf5wmibwh",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // remove
  collection.schema.removeField("zccigaqs")

  return dao.saveCollection(collection)
})
