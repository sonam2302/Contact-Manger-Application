const repo = require("../repository/contactRepository");

async function GetContacts() {
  return await repo.GetContacts();
}

async function GetContact(id) {
  console.log(id,'iddddd')
  let res = await repo.GetContact(id);
  if (res == null) {
    throw Error(`Customer with customer id: ${id} does not exists`);
  } else {
    return res;
  }
}

async function AddContact(contact) {
  let res = await repo.GetContact(contact._id);
  if (res != null) {
    throw Error(`Customer with customer id: ${contact._id} already exists`);
  } else {
    await repo.AddContact(contact);
  }
}

async function UpdateContact(id, contact) {
  let res = await repo.GetContact(id);
  if (res == null) {
    throw Error(`Customer with customer id: ${id} does not exists`);
  } else {
    await repo.UpdateContact(id, contact);
  }
}

async function DeleteContact(id) {
  let res = await repo.GetContact(id);
  if (res == null) {
    throw Error(`Customer with customer id: ${id} does not exists`);
  } else {
    await repo.DeleteContact(id);
  }
}

module.exports = {
  GetContacts,
  GetContact,
  AddContact,
  UpdateContact,
  DeleteContact,
};
