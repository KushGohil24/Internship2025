function learnMore(name) {
    const confirmed = confirm(`Do you want to learn more about ${name}?`);
    if (confirmed) {
      alert(`Great! Showing more about ${name}...`);
    } else {
      alert(`Okay! Maybe later.`);
    }
  }