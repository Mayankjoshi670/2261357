// utils/db.js

const urls = {}; // In-memory DB

function saveShortUrl(code, originalUrl, expiresAt) {
  urls[code] = { originalUrl, expiresAt };
}

function getShortUrl(code) {
  return urls[code];
}

function isShortCodeExists(code) {
  return !!urls[code];
}

function deleteShortUrl(code) {
  delete urls[code];
}

function getAllUrls() {
  return urls;
}

module.exports = {
  saveShortUrl,
  getShortUrl,
  isShortCodeExists,
  deleteShortUrl,
  getAllUrls,
};
