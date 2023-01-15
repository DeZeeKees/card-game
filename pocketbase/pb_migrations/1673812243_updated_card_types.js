migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xgbrxtehfacc5qv")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xgbrxtehfacc5qv")

  collection.listRule = null

  return dao.saveCollection(collection)
})
