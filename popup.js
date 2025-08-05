fetch('http://localhost:3000/track', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    website: 'youtube.com',
    timeSpent: 300,
    timestamp: new Date().toISOString()
  })
})
.then(res => res.json())
.then(data => console.log('Saved:', data))
.catch(err => console.error('Error:', err));
