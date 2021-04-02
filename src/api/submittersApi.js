import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/submitters/";

export function getSubmitters() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getSubmittersBySlug(firstName) {
  return fetch(baseUrl + "?firstName=" + firstName)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then(submitters => {
        if (submitters.length !== 1) throw new Error("Course not found: " + firstName);
        return submitters[0]; // should only find one course for a given slug, so return it.
      });
    })
    .catch(handleError);
}

export function saveSubmitters(submitter) {
  // return fetch(baseUrl + (submitter.id || ""), {
  //   method: submitter.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
  //   headers: { "content-type": "application/json" },
  //   body: JSON.stringify({
  //     ...submitter,
  //     // Parse authorId to a number (in case it was sent as a string).
  //     id: parseInt(submitter.Id, 10)
  //   })
  // })
  return fetch(baseUrl + submitter.id, {
    method: "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(submitter)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteSubmitters(submitterId) {
  return fetch(baseUrl + submitterId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
