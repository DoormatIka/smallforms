/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "m1eveb71hac2ff9",
    "created": "2024-05-12 10:11:34.628Z",
    "updated": "2024-05-12 10:11:34.628Z",
    "name": "answers",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xuhtndzb",
        "name": "answer",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
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
  const collection = dao.findCollectionByNameOrId("m1eveb71hac2ff9");

  return dao.deleteCollection(collection);
})
