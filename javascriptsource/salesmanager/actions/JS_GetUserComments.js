// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";

// BEGIN EXTRA CODE
function createUserComment(comment) {
	return new Promise((resolve, reject) => {
		mx.data.create({
			entity: "SalesManager.Comment",
			callback: function (mxObject) {
				mxObject.getAttributes().forEach(function (attributeName) {
					const attributeValue = comment[attributeName];
					if (attributeValue) {
						mxObject.set(attributeName, attributeValue)
					}
				})
				resolve(mxObject)
			},
			error: function (e) {
				reject(new Error("couldnt create a comment entity"))
			}
		});
	})
}


// END EXTRA CODE

/**
 * @returns {Promise.<MxObject[]>}
 */
export async function JS_GetUserComments() {
	// BEGIN USER CODE
	const endpoint = "https://jsonplaceholder.typicode.com/comments";
	const res = await fetch(endpoint);
	const json = await res.json();
	const userComments = json.map(createUserComment);
	return Promise.all(userComments);
	// END USER CODE
}
