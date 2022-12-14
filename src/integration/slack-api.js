const { post } = require("./slack-api-post");

const hasErrors = (res) => !res || !res.ok;

const buildErrorMessage = (res) => {
  return `Error! ${JSON.stringify(res)} (response)`;
};

const apiPostMessage = async (token, message) => {
  const path = "/api/chat.postMessage";
  const res = await post(token, path, message);

  if (hasErrors(res)) {
    throw buildErrorMessage(res);
  }

  return res;
};

const apiAddReaction = async (token, message) => {
  const path = "/api/reactions.add";
  const res = await post(token, path, message);

  if (hasErrors(res)) {
    throw buildErrorMessage(res);
  }

  return res;
};

const apiUpdateMessage = async (token, message) => {
  const path = "/api/chat.update";
  const res = await post(token, path, message);

  if (hasErrors(res)) {
    throw buildErrorMessage(res);
  }

  return res;
};

module.exports = { apiPostMessage, apiAddReaction, apiUpdateMessage };
