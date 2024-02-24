const Contact = require("../models/Contact");
const { v4: uuidv4 } = require("uuid");

async function AddContact(contact) {
  let contactData = new Contact({
    _id: uuidv4(),
    firstname: contact.firstname,
    lastname: contact.lastname,
    email: contact.email,
    city: contact.city,
    age: contact.age,
    phone: contact.phone,
  });

  return await contactData.save();
}

async function GetContacts() {
  return await Contact.find({});
}

async function GetContact(id) {
  return await Contact.findOne({ _id: id });
}

async function UpdateContact(id, contact) {
  await Contact.updateOne(
    { _id: id },
    {
      firstname: contact.firstname,
      lastname: contact.lastname,
      email: contact.email,
      city: contact.city,
      age: contact.age,
      phone: contact.phone,
    }
  );
}

async function DeleteContact(id) {
  await Contact.deleteOne({ _id: id });
}

module.exports = {
  GetContacts,
  GetContact,
  AddContact,
  UpdateContact,
  DeleteContact,
};
