## Summary

Retrieve the list of missions currently stored in the system.

## Endpoint Overview

- **Method:** `GET`
    
- **URL:** `http://localhost:3500/mission/`
    

This endpoint returns an array of **mission** objects. Each object represents a single mission with scheduling, location, and client information.

---

## Mission Object Schema

The request body currently contains an example mission object. Although this is a `GET` endpoint and does **not** normally require a request body, that example is useful to understand the mission schema.

### Mission Properties (from example body)

| Property | Type | Description | Example |
| --- | --- | --- | --- |
| `code` | string | Code for validating the mission once finished. /TODO : random generaton | `"111111"` |
| `place` | string | City or location where the mission occurs. | `"Paris"` |
| `vehicule` | boolean | Indicates whether a vehicle is required. | `false` |
| `description` | string | Text description of the mission. | `"Test mission"` |
| `duree` | number | Duration of the mission, typically in minutes. | `60` |
| `heure` | string | Start time of the mission (HH:mm). | `"10:00"` |
| `date` | string | Date of the mission (DD/MM/YYYY). | `"31/01/2026"` |
| `categorie` | string | Category or type of mission. | `"Petanque"` |
| `titre` | string | Title of the mission. | `"Test Mission"` |
| `client` | string | Name of the "client" associated with the mission. | `"M. Dupont"` |
| `createur` | string | Name of the user who created the mission. | `"M. Dupond"` |

### Mission Properties (additional fields from latest 200 response)

The actual response also includes database/metadata fields:

| Property | Type | Description | Example |
| --- | --- | --- | --- |
| `_id` | string | Unique identifier of the mission in the DB. | `"697ebb584949851b55ee626b"` |
| `__v` | number | Internal version key (e.g., from Mongoose). | `0` |

---

## Sample Successful Response (200)

A typical successful `200 OK` response returns an array of mission objects:

``` json
[
  {
    "_id": "697ebb584949851b55ee626b",
    "createur": "Maxime",
    "client": "Client A",
    "titre": "Test Mission",
    "categorie": "Test",
    "date": "2025-02-01",
    "heure": "10:00",
    "duree": 60,
    "description": "Test mission",
    "vehicule": false,
    "place": "Paris",
    "code": "111111",
    "__v": 0
  }
]

 ```

- The outer `[]` indicates that the response is a **list of missions**.
    
- Each object inside the array follows the mission schema described above.