var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/users/Soreon/repos');
xhr.onload = function () {
    'use script';
    if (xhr.status === 200) {
        const exceptions = [
            'projects',
            'lignum'
        ];
        var repos = JSON.parse(xhr.responseText);
        var ul = document.createElement("ul");
        repos.forEach(function(element) {
            if (!exceptions.includes(element.name)) {
                var li = document.createElement("li");
                var a = document.createElement("a");
                a.href = `http://soreon.github.io/${element.name}`;
                a.textContent = element.name;
                li.appendChild(a);
                ul.appendChild(li);
            }
        }, this);
        document.body.appendChild(ul);
    }
};
xhr.send(null);