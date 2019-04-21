function makeBookmarksArray() {
    return [
      {
        id: 1,
        title: 'Lego',
        url: 'https://www.lego.com',
        description: 'Brick it',
        rating: 5,
      },
      {
        id: 2,
        title: 'Google',
        url: 'https://www.google.com',
        description: 'Hey Google',
        rating: 4,
      },
      {
        id: 3,
        title: 'Netflix',
        url: 'https://Netflix.com',
        description: 'Blockbusters Demise',
        rating: 5,
      },
    ]
  }
  
function makeMaliciousBookmark() {
  const maliciousBookmark = {
    id: 911,
    title: 'Naughty naughty very naughty <script>alert("xss");</script>',
    url: 'https://www.hackers.com',
    description: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`,
    rating: 1,
  }
  const expectedBookmark = {
    ...maliciousBookmark,
    title: 'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
    description: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`
  }
  return {
    maliciousBookmark,
    expectedBookmark,
  }
}

module.exports = {
  makeBookmarksArray,
  makeMaliciousBookmark,
}
