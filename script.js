const exceptions = ['projects', 'lignum'];

fetch('https://api.github.com/users/Soreon/repos')
  .then((r) => r.json())
  .then((repos) => {
    const ul = crel('ul');

    repos.forEach((repo) => {
      if (exceptions.includes(repo.name)) return;

      const li = crel('li', crel('a', { href: `http://soreon.github.io/${repo.name}` }, repo.name));
      ul.appendChild(li);
    });
    document.body.appendChild(ul);
  });
