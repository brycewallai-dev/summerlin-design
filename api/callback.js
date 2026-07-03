export default async function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).send('Missing code parameter');
  }

  let data;
  try {
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.OAUTH_CLIENT_ID,
        client_secret: process.env.OAUTH_CLIENT_SECRET,
        code,
      }),
    });
    data = await response.json();
  } catch (err) {
    res.setHeader('Content-Type', 'text/html');
    return res.status(500).send(errorPage('Server error: ' + err.message));
  }

  if (data.error || !data.access_token) {
    res.setHeader('Content-Type', 'text/html');
    return res.status(401).send(errorPage(data.error_description || data.error || 'OAuth failed'));
  }

  // Post the token back to the Decap CMS popup window
  const payload = JSON.stringify({ token: data.access_token, provider: 'github' });
  res.setHeader('Content-Type', 'text/html');
  res.send(`<!doctype html><html><body><script>
(function () {
  var payload = 'authorization:github:success:' + ${JSON.stringify(payload)};
  function receive(e) {
    window.opener.postMessage(payload, e.origin);
  }
  window.addEventListener('message', receive, false);
  window.opener.postMessage('authorizing:github', '*');
})();
<\/script></body></html>`);
}

function errorPage(msg) {
  const payload = JSON.stringify({ message: msg });
  return `<!doctype html><html><body><script>
(function () {
  window.opener.postMessage('authorization:github:error:' + ${JSON.stringify(payload)}, '*');
})();
<\/script></body></html>`;
}
