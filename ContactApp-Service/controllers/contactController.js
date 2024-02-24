const service = require("../services/contactservice");
const { v4: uuidv4 } = require('uuid');

async function GetContacts(req, res) {
  try {
    res.status(200).send(await service.GetContacts());
  } catch (err) {
    console.error("Error in GetContacts:", err);
    res.status(500).send({ status: 500, message: "Internal Server Error" });
  }
}

async function GetContact(req, res) {
  try {
    let result = await service.GetContact(req.params.id);
    if (result == null) {
      res.status(404).send({
        status: 404,
        message: `Contact with id ${req.params.id} does not exist`,
      });
    } else {
      res.status(200).send(result);
    }
  } catch (err) {
    console.error("Error in GetContact:", err);
    res.status(500).send({ status: 500, message: "Internal Server Error" });
  }
}

async function AddContact(req, res) {
  try {
    const contact = { ...req.body, _id: uuidv4() };
    await service.AddContact(contact);
    res.status(201).send({ message: "Contact added successfully" });
  } catch (err) {
    console.error("Error in AddContact:", err);
    res.status(500).send({ status: 500, message: "Internal Server Error" });
  }
}

async function DeleteContact(req, res) {
  try {
    await service.DeleteContact(req.params.id);
    res.status(200).send({ message: "Contact deleted successfully" });
  } catch (err) {
    console.error("Error in DeleteContact:", err);
    res.status(500).send({ status: 500, message: "Internal Server Error" });
  }
}

async function UpdateContact(req, res) {
  try {
    await service.UpdateContact(req.params.id, req.body);
    res.status(200).send({ message: "Contact updated successfully" });
  } catch (err) {
    console.error("Error in UpdateContact:", err);
    res.status(500).send({ status: 500, message: "Internal Server Error" });
  }
}

module.exports = { GetContacts, GetContact, AddContact, UpdateContact, DeleteContact };
